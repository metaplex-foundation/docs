# Getting Started

Before we can create a Candy Machine, you will need to install and operate a handful of developer tools.

## Tooling required

You will need recent version of the following tools:

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git): to clone the repository
- [node](https://nodejs.org/en/download/): JavaScript runtime
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable): package manager to install the required dependencies
- [ts-node](https://www.npmjs.com/package/ts-node#installation): TypeScript execution environament

Make sure you have recent versions of these tools:

```bash
$ git version
git version 2.32.0

$ node --version
v17.2.0

$ yarn --version
1.22.17

$ ts-node --version
v10.4.0
```

## Clone and Install Metaplex

Creating and controlling a Candy Machine is done through the Metaplex command line tool, currently distributed in the Metaplex GitHub repository:

```bash
$ git clone https://github.com/metaplex-foundation/metaplex.git ~/metaplex
```

This will create a directory `metaplex` in your home directory with the lastest code from the repository. If you decide to clone the repository to a different location, you will need to change the path in subsequent instructions.

You will then need to install the dependencies:

```bash
$ yarn install --cwd ~/metaplex/js/
```

You can check that everything is working by running the Candy Machine CLI command:

```bash
$ ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts --version
0.0.2
```

> Make sure you are using the `candy-machine-v2-cli.ts` script.

## Solana Wallet

The Candy Machine operates on the Solana blockchain. You will need a wallet with funds to create and deply a Candy Machine. You can create and use a wallet using the [Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools). This guide will assume that you are using the Solana CLI commands:

```bash
$ solana --version
solana-cli 1.9.1 
```

You can check your wallet address:

```bash
$ solana address
6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ
```

and your balance:

```bash
$ solana balance
4 SOL
```

:::info
We highly recommend trying to first deploy a Candy Machine in Solana `devnet`, before moving to the `mainnet-beta` environment. This way you can freely test different settings without having to move SOL to your wallet.
:::

### Setting up a `devnet` wallet (for testing)

The steps described here will create a wallet to be used on the `devnet`. In normal circumstances you would redact your mnemonic, store it somewhere safe and take advantage of the `--outfile` flag.

To create a new wallet, we will use the `solana-keygen` commnand:

```bash
$ solana-keygen new --outfile ~/.config/solana/devnet.json  
Generating a new keypair

For added security, enter a BIP39 passphrase

NOTE! This passphrase improves security of the recovery seed phrase NOT the
keypair file itself, which is stored as insecure plain text

BIP39 Passphrase (empty for none): 

Wrote new keypair to /Users/febo/.config/solana/devnet.json
=======================================================================
pubkey: 6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ
=======================================================================
Save this seed phrase and your BIP39 passphrase to recover your new keypair:
## REDACTED ##
=======================================================================
```

The next step is to make this our default keypair:

```bash
$ solana config set --keypair ~/.config/solana/devnet.json
```

and make sure we are on the `devnet`:

```bash
$ solana config set --url https://api.devnet.solana.com
```

If all the above steps are successfull, your configuration be similar to:

```bash
$ solana config get
Config File: ~/.config/solana/cli/config.yml
RPC URL: https://api.devnet.solana.com 
WebSocket URL: wss://api.devnet.solana.com/ (computed)
Keypair Path: ~/.config/solana/devnet.json 
Commitment: confirmed 
```

### Funding your `devnet` wallet

In order to add SOL to your `devnet` wallet, you can request funds from a faucet:

```bash
$ solana airdrop 2
Requesting airdrop of 2 SOL

Signature: 41ZEZqpyNMLUy3kQahWSy349PeDz3Q82dNDHKiA7QcsrAzHs3f7YiDEZWjnFi434DoiiDiDkazkBRycRnctx1m6e

6 SOL
```

If the command is successful, you will see the updated balance at the end.

> Do not send **real** SOL to a `devnet` wallet.