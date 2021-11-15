---
sidebar_position: 7
---

# Create a Gumdrop

The Gumdrop program leverages the Solana blockchain and merkle trees to
facilitate airdrops to a large number of whitelisted users at a low cost to
creators.

## Motivation

Various ecosystem projects desire to ensure early followers and supporters gain
access to project assets whether they be tokens, NFTs, or others.
Simultaneously, capitalization of these assets should not incur undue costs or
operational overhead to the creators. There are several ways to achieve such a
setup and Gumdrop offers one that integrates with existing Solana and Metaplex
ecosystem programs.

Gumdrop solves this efficient-airdrop issue by utilizing a space-efficient hash
structure (the merkle tree) such that an on-chain program can validate whether
the user is part of a whitelist. This uses a pull-based paradigm to shift the
burden from creators, sending airdrops or pre-minting NFTs, to recipients, that
can choose to claim their portion or leave it for general adoption.

The approach, originally pioneered for token airdrops by
[Uniswap](https://github.com/Uniswap/merkle-distributor) and ported to Solana
by [Saber](https://github.com/saber-hq/merkle-distributor), is extended to
allow pre-minting a Candy Machine or printing editions of a master copy.
Moreover, Gumdrop allows creators to directly send whitelisted users a drop
reclamation link by building the tree with off-chain handles (e.g email,
discord, etc) and allowing the user to redeem into any wallet.

## Setup

Gumdrop creators can use either the Gumdrop CLI or the [web
UI](https://lwus.github.io/metaplex). Additional options are available through
the CLI. To execute the Gumdrop CLI or deploy a local version of the web UI,
please follow the same [prerequisite steps of Candy Machine
creation](./create-candy/introduction#prerequisites).

- The CLI can be found in the [Metaplex
  repo](github.com/metaplex-foundation/metaplex/) at
  `js/packages/cli/src/gumdrop-cli.ts` and will also be run with `ts-node`.
- The web interface can be found either at the [example
  deployment](https://lwus.github.io/metaplex) or run locally from the Metaplex
  repo at `js/packages/gumdrop` with `yarn start`.

To create a drop, you must specify the [drop type](#drop-types), the
[distribution method](#distribution-method), and the
[whitelist](#whitelist). When creating the drop, a throwaway `Keypair` will be
generated that holds authority over the on-chain Gumdrop state. This can be
used to later [close the gumdrop](#closing-a-gumdrop), so make sure to save it!

## Drop Types

There are multiple drop types supported by the gumdrop program. Each utilizes
the same underlying mechanism of building a merkle tree from a whitelist and
using some kind of off-chain distribution method to notify recipients.

- [Token Airdrop](#token-airdrop)
- [NFT Candy Machine Presale](#nft-candy-machine-presale)
- [Edition Prints](#edition-prints)

The sections below give examples and explanations for CLI usage of the command
line flags. A full list of options can be viewed with

```
$ ts-node src/gumdrop-cli.ts help create
```

### Token Airdrop

All a token airdrop requires is approval to move the relevant tokens from the
Gumdrop creators' token account. The Gumdrop state will be approved as a
[delegate](https://spl.solana.com/token#authority-delegation) for the sum of
tokens specified.

```
$ ts-node src/gumdrop-cli.ts create \
--claim-integration transfer \
--transfer-mint So11111111111111111111111111111111111111112
```

### NFT Candy Machine Pre-sale

The workflow for a Candy Machine pre-sale through the Gumdrop program is as
follows:

1. Create a Candy Machine with at least as many assets as are to be distributed
   through the Gumdrop. [See instructions to create a Candy
   Machine here](./create-candy/introduction)
2. Set the Candy Machine start date to after the pre-sale ends (i.e when the
   mint should be open to all participants) or leave it None (so only
   whitelisted participants may ever mint).
3. Create the Gumdrop with the whitelist.
4. Transfer authority to the Gumdrop state which allows the Gumdrop program to
   mint for whitelisted participants on behalf of the creator _before_ the
   go-live date.

```
$ ts-node src/gumdrop-cli.ts create \
--claim-integration candy \
--candy-config 47X2tVJ15rLnyDY2vUpYJzUQNYUBZcdFVd94D6zAtnkc
--candy-uuid 47X2tV
```

The Gumdrop CLI and web interface will handle steps 3 and 4. The Candy Config
and Candy UUID uniquely identify a Candy Machine and are specified on creation.
With the Metaplex `candy-machine-cli.ts`, you can find the values used in the
directory `.cache/{ENV}-temp`.

Closing the Gumdrop will reclaim the Candy Machine authority.

### Edition Prints

Similarly, the Gumdrop will act as a proxy for the owner of the master edition
and allow minting of limited editions. Ownership of the master edition will be
transferred to the Gumdrop state for the duration of the Gumdrop!

```
$ ts-node src/gumdrop-cli.ts create \
--claim-integration edition \
--edition-mint 7Hy3FqSQYiXyg4fyobZnSJhMvAqMmraBLaTq9QSFF9ip
```

Closing the Gumdrop will reclaim the master edition.

## Distribution Method

The distribution method is used to notify recipients that they have received a
Gumdrop. Currently, the Gumdrop frontends support email, SMS, and discord
notifications.

For email and SMS,
```
$ ts-node src/gumdrop-cli.ts create \
--distribution-method aws-email|aws-sms \
--aws-access-key-id "$AWS_ACCESS_KEY_ID" \
--aws-secret-access-key "$AWS_SECRET_ACCESS_KEY"
```

For Discord,
```
$ ts-node src/gumdrop-cli.ts create \
--distribution-method discord \
--discord-token "$DISCORD_TOKEN"
```

With each of these methods, creators can also choose to enable OTP verification
with the `--otp-auth` flag. Enable and disable with `--otp-auth enable` and
`--otp-auth disable` respectively. In case OTP verification is configured, the
same distribution method will be used to verify the OTP.

Alternatively, creators can also choose to build the Gumdrop from public keys
which allows the only the owner of said public key to claim the Gumdrop.  In
this case, the full list of URLs is expected to be uploaded by the creator
somewhere.

```
$ ts-node src/gumdrop-cli.ts create \
--distribution-method wallets
```

## Whitelist

The whitelist is used to specify the recipients of the Gumdrop. Both frontends
expect the whitelist to be a JSON list of recipients, each with a `handle`
identifying the user, an `amount` which determines the number of tokens, mints,
or prints that can be claimed, and in the case of [edition
prints](#edition-p[rints), an `edition` number.

More concretely, the frontends expect the list format to be

```
[
  {
    "handle": "<DISTRIBUTION-METHOD-SPECIFIC-HANDLE>",
    "amount": <GUMDROP-CLAIM-ALLOWANCE>,
    ["edition": <EDITION-NUMBER>]
  },
  ...
]
```

The distribution method handles are as follows:

| Type     | Format            | Example                |
| -------- | ----------------- | ---------------------- |
| Email    | local-part@domain | john.smith@example.com |
| SMS      | E.164             | +18005550100           |
| Discord  | User ID           | 898959704573759608     |

At the moment, Discord handles are the hardest to programmatically create. One
option is to query for members in a Discord Guild and filter for the relevant
users by display-name there.

NB: The frontends do some verification that the Gumdrop being created is
sufficient to satisfy all the recipients specified. However, these checks are
all dependent on the good behavior of the creator! For example, if the creator,
after creating a token-Gumdrop, moves all the tokens out of their wallet,
recipients will fail to claim their allocation.

## Closing a Gumdrop

When the gumdrop is finished, the candy machine authority or the master
edition can be reclaimed by closing the gumdrop. Currently, the small portion
of rent used to store the Gumdrop state is also redeemed but please do not rely
on this behavior!

NB: somewhat obviously, recipients will no longer be able to redeem the Gumdrop
after it is closed.

