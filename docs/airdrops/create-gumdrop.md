# Gumdrop

- [Gumdrop](#gumdrop)
  - [Motivation](#motivation)
  - [Setup](#setup)
  - [Drop Types](#drop-types)
    - [Token Airdrop](#token-airdrop)
    - [Candy Machine Pre-sale](#nft-candy-machine-pre-sale)
    - [Edition Prints](#edition-prints)
  - [Distribution Method](#distribution-method)
  - [Whitelist](#whitelist)
  - [Closing a Gumdrop](#closing-a-gumdrop)
  - [Deploy Custom Gumdrop Site](#deploy-custom-gumdrop-site)

Gumdrop is a new feature from the metaplex community. It is currently in BETA so use at your own risk.

The Gumdrop program leverages the Solana blockchain and merkle trees to
facilitate airdrops to a large number of whitelisted users at a low cost to
creators. Users have to redeem the airdrop, it will not automatically appear in their wallet.

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
allow printing editions of a master copy.
Moreover, Gumdrop allows creators to directly send whitelisted users a drop
reclamation link by building the tree with off-chain handles (e.g email,
discord, etc) and allowing the user to redeem into any wallet.

## Setup

Gumdrop creators can use either the Gumdrop CLI or the [web
UI](https://lwus.github.io/metaplex). Additional options are available through
the CLI. To execute the Gumdrop CLI or deploy a local version of the web UI,
please follow the same [prerequisite steps of Candy Machine
creation](/candy-machine-v2/getting-started#tooling-required). 

- The CLI can be found in the [Metaplex
  repo](https://github.com/metaplex-foundation/gumdrop/) at
  `packages/cli/src/gumdrop-cli.ts` and will also be run with `ts-node`.
- The web interface can be run locally from the Gumdrop
  repo at `packages/gumdrop` with `yarn start`.
  (You can also use an [example deployment](https://lwus.github.io/metaplex), but this site may not exist for long.)

To create a drop, you must specify the [drop type](#drop-types), the
[distribution method](#distribution-method), and the
[whitelist](#whitelist). When creating the drop, a throwaway `Keypair` will be
generated that holds authority over the on-chain Gumdrop state. This can be
used to later [close the gumdrop](#closing-a-gumdrop), so make sure to save it!

## Drop Types

There are multiple drop types supported by the gumdrop program. Each utilizes
the same underlying mechanism of building a merkle tree from a whitelist and
using some kind of off-chain distribution method to notify recipients.

The sections below give examples and explanations for CLI usage of the command
line flags. A full list of options can be viewed with

```
$ ts-node src/gumdrop-cli.ts help create
```

### Token Airdrop

All a token airdrop requires is approval to move the relevant tokens from the
Gumdrop creators' token account.

```
$ ts-node src/gumdrop-cli.ts create \
--claim-integration transfer \
--transfer-mint So11111111111111111111111111111111111111112
```

However, by default, `gumdrop-cli.ts` will instead transfer the tokens to the
generated throwaway `Keypair` so that multiple gumdrops can be created more
intuitively. These will be transferred back on [close](#close)

Alternatively, by passing `--delegate-only`, Gumdrop state will be approved as
a [delegate](https://spl.solana.com/token#authority-delegation) for the sum of
tokens specified.

### NFT Candy Machine Pre-sale

The workflow for a Candy Machine pre-sale through the Gumdrop program is as
follows:

1. Create a whitelist mint token `WLIST` with the SPL token program
2. Create a Candy Machine V2 with whitelist mint settings with mint `WLIST`
   ([Candy Machine Docs](../candy-machine-v2/introduction)). For example,

  ```
  {
    "whitelistMintSettings": {
      "mode": { "burnEveryTime": true },
      "mint": <WLIST>,
      "presale": true,
      "discountPrice": null
    },
    ...
  }
  ```

3. Create a Gumdrop with `--claim-integration candy` and the corresponding
   `--candy-machine`.

   ```
   $ ts-node src/gumdrop-cli.ts create \
   --claim-integration candy \
   --candy-machine FuxMhU34GPggi1yzk8tQwhsLQFR52iiutM5B9nzzeRPa  \
   ```

   `gumdrop-cli.ts` will parse the on-chain candy machine account and look for
   the corresponding `whitelistMintSettings`. Then under-the-hood it
   initializes a token-airdrop for `WLIST` but adds extra information in the
   claim URL so that frontends can find the corresponding candy crank in
   addition to the whitelist token account. In the produced `urls.json`, this
   will look somethign like

   ```
   ...
   ?distributor=9zXd1NddYbZejacgd92XMQsAQKhXC4Yj9rhUspRyR1ud\
   &candy=FuxMhU34GPggi1yzk8tQwhsLQFR52iiutM5B9nzzeRPa\
   &tokenAcc=93fQV4RnstogfFqMstV9b8uAvZ5KsRFjgJUagJhpX2Wa\
   ...
   ```

4. On the frontend, users click a button that formats 2 transactions. The first
   claims the whitelist token gumdrop, and the second uses that token to crank
   the candy machine.

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
prints](#edition-prints), an `edition` number.

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
| Wallets  | wallet public key | 8mTVkib7TwUSsZRTHDQy9EQbw7ZR7xLrvKeyPgkFPgZB |

At the moment, Discord handles are the hardest to programmatically create. One
option is to query for members in a Discord Guild and filter for the relevant
users by display-name there.

The distribution list has to be referenced in the create command like this:
```
$ ts-node src/gumdrop-cli.ts create \
--distribution-list <PATH TO WHITELIST JSON>
```

NB: The frontends do some verification that the Gumdrop being created is
sufficient to satisfy all the recipients specified. However, these checks are
all dependent on the good behavior of the creator! For example, if the creator,
after creating a token-Gumdrop, moves all the tokens out of their wallet,
recipients will fail to claim their allocation.

## Closing a Gumdrop

When the gumdrop is finished, the master edition can be reclaimed by closing
the gumdrop. Currently, the small portion of rent used to store the Gumdrop
state is also redeemed but please do not rely on this behavior!

The command to close it is:

```
ts-node gumdrop-cli.ts close \
  --base <id.json keypair that was created on gumdrop create> \
  --keypair <your initial keypair> \
  --claim-integration <creation --claim-integration> \
  --<corresponding claim integration flag>
```

We pass additional information about the claim integration to revoke authority
or transfer back tokens, etc.

NB: somewhat obviously, recipients will no longer be able to redeem the Gumdrop
after it is closed.

## Deploy Custom Gumdrop Site

This method applies to _only_ [Vercel](https://vercel.com/).  In the `gumdrop` directory, remove `homepage` key-value entirely.  Connect your github to Vercel and create a new project.  In the project setup, make sure these settings are set.

![Build and Development Settings](/img/gumdrop/build-and-development-settings.png)

![Root Directory Settings](/img/gumdrop/root-directory.png)
