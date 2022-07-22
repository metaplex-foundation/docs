# Stealth

Stealth NFTs introduce the ability to have additional _encrypted_ metadata that
can be [verifiably](#transfer-proof) [shared](#caveats) on change of NFT
ownership.

This document describes the high-level concepts used in stealth NFTs and is not
an argument for security.

Like normal NFTs, the encrypted assets are not stored directly on-chain in a
Solana account, but instead on some dedicated storage blockchain (Arweave).
Since assets can be large, these assets are encrypted with a [block
cipher](https://en.wikipedia.org/wiki/Block_cipher_mode_of_operation) like
192-AES-CBC.

The code for stealth NFTs exists at a fork of metaplex-program-library:
[`lwus/stealth`](https://github.com/lwus/stealth/blob/a73efe439c93fbd65a613cf129b998b2cf06dba4/stealth/).

## Schema

Stealth metadata extends [Token Metadata](./token-metadata/getting-started.md)
and adds another PDA structure specifying similar fields.

Specifically, it adds a PDA at

```rust
solana_program::declare_id!("privzjrXhtea8kKt3uE94X34AHaiLj2Vbwd51y3aUSi");

Pubkey::find_program_address(&[b"metadata", mint.as_ref()], &ID)
```

that contains the following information:

```rust
pub struct StealthAccount {
    ...

    /// The corresponding SPL Token Mint
    pub mint: Pubkey,

    /// The signing key associated with `elgamal_pk`
    pub wallet_pk: Pubkey,

    /// The public key associated with ElGamal encryption
    pub elgamal_pk: zk_token_elgamal::pod::ElGamalPubkey,

    /// 192-bit AES cipher key encrypted with elgamal_pk
    pub encrypted_cipher_key: zk_token_elgamal::pod::ElGamalCiphertext,

    /// URI of encrypted asset
    pub uri: URI,

    ...
}
```

The largest difference is that the stealth metadata points to an encrypted
asset and it holds the cipher key for said encrypted asset under public key
encryption (see [notes](#architecture-notes)).

The JSON metadata at `uri`  has the following possible fields

| Field            | Type   | Description                                   |
| ---------------- | ------ | --------------------------------------------- |
| name             | string | Name of the asset                             |
| cover_image      | asset  | Struct pointing to preview / cover image      |
| encrypted_assets | array  | Array of Structs pointing to encrypted assets |
| encrypted_blob   | string | Encrypted blob of data                        |

**Asset**

| Field         | Type   | Description               |
| ------------- | ------ | ------------------------- |
| uri           | string | URI pointing to the asset |
| type          | string | Type of the asset         |

For example,
```json
{
  "name": "professor ape cyborg",
  "cover_image": {
    "uri": "https://www.arweave.net/3IjJJr3nAH1k7JRu0F8GkI2kPpjDs7J8uFZDUV1zumc?ext=png",
    "type": "image/png"
  },
  "encrypted_assets": [
    {
      "uri": "https://www.arweave.net/KeS0w8s58LTy_otECcR6xlHtSYu9lYSvRvbLBQhI4ik?ext=mp4",
      "type": "video/mp4"
    }
  ],
  "encrypted_blob": ""
}
```

### Configuration

The normal token metadata should be created before configuring the stealth
metadata. The update authority on the token metadata must be the one to
configure the stealth NFT.

The configuration cannot be checked by the stealth program so make sure that
the encryption key and assets are correct! The configuration can be invoked by
the rust CLI.

```
cargo run -- configure --mint <pubkey> --cipher_key <base58-encoded> \
                 --asset_url "https://arweave.net/<manifest-json>"
```

### Transfer

#### Encryption key management

When transferring the stealth NFT, the cipher key must be reencrypted with the
receivers encryption key. Encryption keys can only be derived by the owner of
the wallet so the receiver must publish their key. This is wrapped by

```
cargo run -- publish_elgamal_pubkey --mint <pubkey>
cargo run -- close_elgamal_pubkey --mint <pubkey>
```

Where the latter command is used to reclaim rent (we can always go back through
transaction history so this doesn't hide anything).

#### Workflow

Due to compute budget limitations, a transfer cannot be completed within a
single transaction (until perhaps we get more syscall support for elliptic
curve operations equivalent to ethereum
[EIP-196](https://eips.ethereum.org/EIPS/eip-196)). In the meantime, the
transfer is broken into several steps.

1. `InitTransfer` - Initialize a place where the transfer metadata can live in
   between transactions
2. Write inputs and crank DSL - This is actually a multi-transaction step where
   we compute all the necessary information for the stealth program to verify
   our transfers correctness. This leverages a [pared down
   version](https://github.com/lwus/curve25519-dalek-onchain) of
   curve25519-dalek and is wrapped for clients in
   [`transfer_chunk_slow_proof`](https://github.com/lwus/stealth/blob/a73efe439c93fbd65a613cf129b998b2cf06dba4/stealth/program/src/instruction.rs#L510).
3. `TransferChunkSlow` - Verify the DSL results and update the transfer
   metadata. This is separate from committing in case we later want to store
   multiple 'chunks' of public-key encrypted data directly in the metadata.
4. `FiniTransfer` - Commit the transfer once all chunks have been verified.

Note that as soon as _any_ chunk has been committed to, even if the transaction
is sent to the network but dropped, the recipient can theoretically decrypt the
corresponding information! This means that a sale process needs to be
escrow-based where the buyer (recipient) commits the funds and the seller has
some amount of time to complete the transfer.

### Utilities

#### CLI

The rust CLI at `/stealth/cli` exposes most interactions with the stealth
program. The command implementations can be used as reference for external
programs. New instructions and functionality will probably be exposed here
first.

#### JS

There are WASM bindings for various utilities to interact with the stealth
program e.g transfer transaction formatting, ciphertext decryption, etc. These
can be found at `/stealth/js/` and use
[`wasm-bindgen`](https://rustwasm.github.io/wasm-bindgen/).

#### Sale

A sample escrow- and slot- based sale contract that implements a sale workflow
(where the seller must take some additional action to complete the sale) can be
found at `/stealth/escrow`.

## Architecture notes

The block cipher _cipher key_ `ck` is then stored on-chain, and is encrypted with
public key encryption. Specifically, the stealth NFT owners [encryption
key](#encryption-and-decryption-keys) `pk` to get a ciphertext `ct = E_pk(ck)`.
The corresponding decryption key `sk` can then be used to derive
`D_sk(ct) = D_sk(E_pk(ck)) = ck`, which can be taken to quickly decrypt the stealth
assets.

On NFT transfer from source wallet `A` with keys `(pk_A, sk_A)` to destination
wallet `B` with keys `(pk_B, sk_B)`:

1. `ct_A = E_pk_A(ck)` exists on-chain already
2. `A` re-encrypts the cipher key `ck` with the destination owner's encryption
   key to get `ct_B = E_pk_B(ck)`.
3. `A` submits a [proof](#transfer-proof) that `ct_A` and `ct_B` correspond to
   the same underyling `ck` given `pk_A` and `pk_B`, without revealing anything
   about `ck` or the decryption keys!
4. The stealth program verifies this proof and if successful, approves the
   transfer and updates the metadata.

### Encryption and decryption keys

We use the same method of encryption / decryption key derivation as
[`spl-zk-token`](https://github.com/solana-labs/spl-zk-token). That is, instead
of directly using a wallets secret and public key for decryption and encryption
respectively, we derive the decryption key `sk` from (the hash of) the
signature of a message encoding the NFT mint (our exact message is slightly
different but since `spl-zk-token` is used for confidential transfers, and NFTs
have exactly 1 token, there is little issue in overriding).

This also allows us to conveniently leverage existing wallet signing
infrastructure, and we don't ever need direct access to a private key. Since
the signature is non-reversible in any case, we also don't lose security of our
private key in case our decryption key ever gets leaked.

Crucially, we rely on signatures being _deteriministic_ given a particular
message and signing (private) key. This is true for the elliptic curve [DSA
algorithm used by
Solana](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm#Signature_generation_algorithm),
ed25519, but not in
[general](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm#Signature_generation_algorithm).

Finally, given `sk`, we interpret `sk` as a scalar modulo the elliptic curve
group order `l` and calculate the encryption curve `pk = sk^-1 * H` where `H`
is the sha3 hash of the
[`ristretto`](https://ristretto.group/what_is_ristretto.html) basepoint (a.k.a
some arbitrary elliptic curve point).

### Cipher key encryption

We use a 192-bit AES-CBC cipher key to encrypt the off-chain assets. This
conveniently is 24-bytes and allows us to interpret the cipher key as an
elliptic curve field element `m`. We can then use an [_invertible_
map](https://ristretto.group/details/elligator.html) from this field element to
a ristretto point [`M = El(m)`](#elligator). Our encryption then becomes

```
E_pk(m) = {
  message_commitment: ct = M + H * r,
  decrypt_handle: dh = pk * r,
}
```

Given the corresponding secret key `sk`, we then have

```
ct - sk * dh = (M + H * r) - sk * (pk * r)
             = (M + H * r) - sk * (sk^-1 * H * r)
             = M
             = El(m)
```

Which can be inverted with the inverse elligator mapping to get the cipher key.

#### Elligator

For the invertible mapping between a field element and a ristretto point, we
use the elligator mapping outlined by the [Decaf
paper](https://www.shiftleft.org/papers/decaf/decaf.pdf) where we map with
Elligator 2 to the Jacobi quartic. We then apply a 2-isogeny from Jacobi to
Edwards via the Montgomery curve. This is wrapped nicely in the
[`curve25519-dalek`
implementation](https://github.com/lwus/curve25519-dalek/blob/acde86eb4327f67f6b14a85f91863394fdaa0260/src/ristretto.rs#L604).

The inverse mapping just does this math in reverse:

1. First we apply the dual isogeny to get a [Jacobi
   point](https://github.com/lwus/stealth/blob/a73efe439c93fbd65a613cf129b998b2cf06dba4/stealth/program/src/encryption/elgamal.rs#L142).
   This formula is specified in the [Isogenies
   section](https://ristretto.group/details/isogenies.html)
2. Then we reverse the elligator mapping to get a possible [field element](https://github.com/lwus/stealth/blob/a73efe439c93fbd65a613cf129b998b2cf06dba4/stealth/program/src/encryption/elgamal.rs#L170)

There is some loss of information with Jacobi cosets and the ristretto torsion
so we ensure the top bytes of `m` are `0` to pick the 'correct' cipher key and
do [some
guesswork](https://github.com/lwus/stealth/blob/a73efe439c93fbd65a613cf129b998b2cf06dba4/stealth/program/src/encryption/elgamal.rs#L113).

### Transfer proof

When transferring the stealth NFT, we provide a zero-knowledge proof that the 2
encrypted ciphertexts in fact encode the same underlying plaintext. This is a
transformation of the proofs in `spl-zk-token`:

```
// prover sends
(ct_1, dh_1) = (M + H * r_1, pk_1 * r_1)
(ct_2, dh_2) = (M + H * r_2, pk_2 * r_2)
b_1, b_2 = random scalars
Y_0 = b_1 * pk_1
Y_1 = b_2 * pk_2
Y_2 = b_1 * dh_1 - b_2 * H


// verifier produces challenge `c` (or prover uses fiat-shamir)
c


// prover computes
sh_1 = c * sk_1 + b_1
rh_2 = c * r_2 + b_2


// verifier checks that
sh_1 * pk_1 = c * H + Y_0
==> (c * sk_1 + b_1) * pk_1 = c * H + (b_1 * pk_1)
==> OK. sk_1 is the secret key for pk_1

rh_2 * pk_2 = c * dh_2 + Y_1
==> (c * r_2 + b_2) * pk_2 = c * (pk_2 * r_2) + (b_2 * pk_2)
==> OK. r_2 is the randomness used in dh_2

c * ct_2 - c * ct_1 + sh_1 * dh_1 - rh_2 * H = Y_2
==> c * (M + H * r_2) - c * (M + H * r_1) \
    + (c * sk_1 + b_1) * (pk_1 * r_1) - (c * r_2 + b_2) * H
    = b_1 * dh_1 - b_2 * H
==> c * H * r_2 \
    - c * H * r_1 + c * sk_1 * pk_1 * r_1 \
    + b_1 * (pk_1 * r_1)
    - c * r_2 * H \
    - b_2 * H
    = b_1 * dh_1 - b_2 * H
==> OK. cipher texts are equal under `sk_1` and `r_2`
```

### Caveats

Inherently, knowledge (secrets), once known, cannot be forceably _unknown_.
Previous owners of a stealth NFT will certainly retain some notion of the
decrypted metadata and there is no way to completely block their ability to
'save' it offline. As such, we use the notion of 'transferring' and 'sharing'
somewhat interchangeably.

However, _new_ encrypted information will not be available to past owners
(presuming that a new encryption key is generated for it).

