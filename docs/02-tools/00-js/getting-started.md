# Introduction

The Metaplex JS SDK is a library that allows you to:

- Load and Deserialize Accounts
- Create transactions
- Run Actions (mint NFT, create an auction, and so on)

It works both in NodeJS and browsers.

## Stability

[Stability 1 - Experimental](/stability)

This project is in development. **All** interfaces are _very likely_ to change very frequently. Please use caution when making use of this library. Bugs or behavior changes may surprise users when Experimental API modifications occur.

## References

- [Source code][github]

## Getting started

In order to get started with the Metaplex JS SDK, you'll need to install it and have a Solana wallet to work with.

### Installation

#### Requirements {#requirements}

- [Node.js](https://nodejs.org/en/download/) version >= 14.17.0 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
- [Yarn](https://yarnpkg.com/en/). Yarn is a performant package manager for JavaScript and replaces the `npm` client.

```sh
npm install @metaplex/js
```

### Your first request

The following code snippet is the most basic one you can use to get Metadata information with this library:

```ts
import { Connection, programs } from "@metaplex/js";
const {
  metadata: { Metadata },
} = programs;

const connection = new Connection("devnet");
const tokenPublicKey = "Gz3vYbpsB2agTsAwedtvtTkQ1CG9vsioqLW3r9ecNpvZ";

const run = async () => {
  try {
    const ownedMetadata = await Metadata.load(connection, tokenPublicKey);
    console.log(ownedMetadata);
  } catch {
    console.log("Failed to fetch metadata");
  }
};

run();
```

You should get such response

```json
Metadata {
  pubkey: PublicKey {
    _bn: <BN: ed7cb71bf67ab48e4987e7a3498bfecbe1bac753a43fc8f9fa00ad9289bb78d6>
  },
  info: {
    data: <Buffer 04 3c dd 7f f1 01 5b 30 73 5c 68 52 33 c0 ba 6f f7 90 d7 32 cc ff 87 9f 82 87 2b 6c d1 9a 06 18 0b 64 75 7d 20 c2 d3 ff bc c6 c5 be f5 24 7b 26 8e d5 ... 629 more bytes>,
    executable: false,
    lamports: 5616720,
    owner: PublicKey {
      _bn: <BN: b7065b1e3d17c45389d527f6b04c3cd58b86c731aa0fdb549b6d1bc03f82946>
    },
    rentEpoch: 200
  },
  data: MetadataData {
    key: 4,
    updateAuthority: '56bMjFLPSvZztdBk7D9g3LYTZNw3ApN6HKwyrQRCrLbL',
    mint: '7m9gHwaYRd5BGmDedSM7pvEAfakqYbUnuNBhNVgreVB9',
    data: MetadataDataData {
      name: 'Cat #3',
      symbol: '',
      uri: 'https://arweave.net/APnrDX2KUusunMAH8dz7Dq5UfbiJKDTrOYT2-PNMuDw',
      sellerFeeBasisPoints: 0,
      creators: [Array]
    },
    primarySaleHappened: 1,
    isMutable: 0
  }
}
```

For the fields that match the on-chain metadata, on-chain information has priority.

- `pubkey` - Account public key.
- `info` - Information describing an account as in **@solana/web3.js** [AccountInfo](https://solana-labs.github.io/solana-web3.js/modules.html#AccountInfo).
- `data` - Metadata program related data as described in [Token Metadata Standard](/programs/token-metadata/token-standard).

### How to retrieve data by other programs?

Similarly to Metadata, you can get deserialized accounts for other Metaplex's entities: Account, Metadata, Auction, Vault, AuctionManager, Store.

```ts
await <AccountType>.load(connection, pubkey);
```

```ts
import { Connection, programs } from "@metaplex/js";
const {
  metaplex: { Store, AuctionManager },
  metadata: { Metadata },
  auction: { Auction },
  vault: { Vault },
} = programs;

const connection = new Connection("devnet");

// Metadata
const metadata = await Metadata.load(connection, "<pubkey>");
// Auction
const auction = await Auction.load(connection, "<pubkey>");
// Vault
const vault = await Vault.load(connection, "<pubkey>");
// Metaplex
const auctionManager = await AuctionManager.load(connection, "<pubkey>");
const store = await Store.load(connection, "<pubkey>");
```

[github]: https://github.com/metaplex-foundation/js
