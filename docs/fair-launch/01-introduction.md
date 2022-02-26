# Introduction

Fair launch is a protocol by which minters/prospective buyers can bid on the price of an NFT they are willing to pay in a range that is determined by the creator.

:::warning

The Fair Launch Protocol is being deprecated and will be receiving no updates/support moving forward.

:::

## Prerequisites

Before starting this journey, you'll need to install and understand how to operate a handful of developer tools.

### Developer Tooling Required

Ensure you have recent versions of `git`, `node`, `yarn` and `ts-node` installed:

- [`git` Installation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [`node` Installation](https://nodejs.org/en/download/)
- [`yarn` Installation](https://classic.yarnpkg.com/lang/en/docs/install)
- [`ts-node` Installation](https://www.npmjs.com/package/ts-node#installation)

We recommend confirming these tools are working before proceeding further. Some sensible tests are running the following commands:

```bash
$ git version
git version 2.31.1

$ node --version
v14.17.0

$ yarn --version
1.22.11

$ ts-node --version
v10.2.1
```

The specific version numbers don't matter that much, but make sure you're running something recent. The more important thing is confirming these tools are installed and on your [system PATH](https://janelbrandon.medium.com/understanding-the-path-variable-6eae0936e976) correctly.

### The Fair Launch Command Line Tool

Creating and controlling a Fair Launch is typically done through the Metaplex command line tool, currently distributed as source code in a GitHub repository.

You can clone this repository anywhere you like, but the recommended practice is:

```
git clone --branch v1.0.0 https://github.com/metaplex-foundation/metaplex.git ~/metaplex-foundation/metaplex
```

If you use a different location, you'll need to adjust for it in subsequent instructions.

You also need to install the projects node/npm dependencies. The recommended way of doing this is:

```
$ yarn install --cwd ~/metaplex-foundation/metaplex/js/
```

Future versions of this tooling will be "npx runnable". For now though, `ts-node` is recommended for most users.

After ensuring `ts-node` is installed and cloning the repo run the following commands to confirm the command line tool is operating correctly:

```
$ ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts --version
0.0.2
```

### Solana Tooling Required

The Fair Launch was built by Metaplex (and Solana) to operate on the Solana blockchain.

To work with it effectively you will need to understand tools and practices from that ecosystem.

To get started, we recommend you begin by:

- Reading the [Solana Command-line Guide](https://docs.solana.com/cli)
- [Installing the Solana Command-line Tools](https://docs.solana.com/cli/install-solana-cli-tools)
- And practice with the examples they provide in their documents.

#### devnet for the win

The Solana devnet serves as a playground for anyone who wants to take Solana for a test drive, as a user, token holder, app developer, or NFT publisher. NFT publishers should target devnet before going for mainnet.

:::info

We highly recommend making devnet your default Solana url
`solana config set --url https://api.devnet.solana.com`

:::

#### Create devnet wallet (for testing)

:::info

Read the fine manual
`solana-keygen help new`

:::

If you're me, you'll redact your mnemonic, store it somewhere safe and take advantage of the `--outfile` flag.

```bash
$ solana-keygen new --outfile ~/.config/solana/devnet.json
Generating a new keypair

For added security, enter a BIP39 passphrase

NOTE! This passphrase improves security of the recovery seed phrase NOT the
keypair file itself, which is stored as insecure plain text

BIP39 Passphrase (empty for none):

Wrote new keypair to ~/.config/solana/devnet.json
=====================================================================
pubkey: 7zMqBkHowtpEC8iayNmCoT42T8dKjikzmTbZX5aNJbhJ
=====================================================================
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
# REDACTED
=====================================================================
```

:::info

We also recommend making devnet your default keypair:

`solana config set --keypair ~/.config/solana/devnet.json`

:::

#### Fund devnet wallet

:::info

To get started, read the fine manuals in the help system
`solana help config`,
`solana help balance` and
`solana help airdrop`

:::

If you're me, you're confirming your config right now to ensure you're on devnet, because we're going to rely on this to make subsequent command line invocations simpler from here forward. Here's how you check it:

```bash
$ solana config get
Config File: ~/.config/solana/cli/config.yml
RPC URL: https://api.devnet.solana.com
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: ~/.config/solana/devnet.json
Commitment: confirmed
```

And here's how you can fund that wallet:

```bash
$ solana balance # check your initial balance
0 SOL

$ solana airdrop 2 # request funds
Requesting airdrop of 2 SOL

Signature: 2s8FE29f2fAaAoWphbiyb5b4iSKYWznLG64w93Jzx8k2DAbFGsmbyXhe3Uix8f5X6m9HRL5c6WB58j2t2WrUh88d

2 SOL

$ solana balance # confirm your balance
2 SOL
```

:::caution

The `solana airdrop` command is sometimes unreliable. If the command doesn't work, you can use the airdrop tool at https://solfaucet.com.

:::
