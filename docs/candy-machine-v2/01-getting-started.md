---
sidebar_label: "1. Getting Started"
---
# Getting Started

Before we can create a Candy Machine, you will need to install and operate a handful of developer tools.

## Tooling required

You will need recent version of the following tools:

- [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git): to clone the repository
- [node](https://nodejs.org/en/download/): JavaScript runtime
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable): package manager to install the required dependencies
- [ts-node](https://www.npmjs.com/package/ts-node#installation): TypeScript execution environament

```bash
git version
```
> **output:** *git version 2.32.0*

The latest LTS version of node is recommended:
```bash
node --version
```
> **output:** *v16.13.0*

```bash
yarn --version
```
> **output:** *1.22.17*

```bash
ts-node --version
```
> **output:** *v10.4.0*

## Clone and Install Metaplex

Creating and controlling a Candy Machine is done through the Metaplex command line tool, currently distributed in the Metaplex GitHub repository. We recommend checking out the latest ([v1.1.1](https://github.com/metaplex-foundation/metaplex/releases/tag/v1.1.1)) tagged version:

```bash
git clone -b v1.1.1 https://github.com/metaplex-foundation/metaplex.git ~/metaplex
```

This will create a directory `metaplex` in your home directory with the lastest code from the repository. If you decide to clone the repository to a different location, you will need to change the path in subsequent instructions.

:::info
You can also run the latest code on the `master` branch to immediately get bug fixes and new features. In order to do that, just run the command above without the `-b v1.1.1` option.
:::

You will then need to install the dependencies. From outside the metaplex directory:

```bash
yarn install --cwd ~/metaplex/js/
```

You can check that everything is working by running the Candy Machine CLI command:

```typescript
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts --version
```
> **output:** *0.0.2*

:::warning
Make sure you are using the `candy-machine-v2-cli.ts` script.
:::

## Solana Wallet

The Candy Machine operates on the Solana blockchain. You will need a wallet with funds to create and deploy a Candy Machine. You can create and use a wallet using the [Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools). This guide will assume that you are using the Solana CLI commands:

```bash
solana --version
```
> **output:** *solana-cli 1.9.1*

You can check your wallet address:

```bash
solana address
```
> **output:** *6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ*

and your balance:

```bash
solana balance
```
> **output:** *4 SOL*

:::info
We highly recommend trying to first deploy a Candy Machine on Solana `devnet`, before moving to the `mainnet-beta` environment. This way you can freely test different settings without having to move SOL to your wallet.

In this guide we will use `devnet`, although all commands presented will work in a similar fashion once you are in `mainnet-beta`.
:::

### Setting up a devnet wallet (for testing)

The steps described here will create a wallet to be used in the Solana `devnet` environment. In normal circumstances you would redact your mnemonic, store it somewhere safe and take advantage of the `--outfile` flag.

To create a new wallet, we will use the `solana-keygen` commnand:

```bash
solana-keygen new --outfile ~/.config/solana/devnet.json  
```

<details>
<summary>Output</summary>
<p>

```
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

</p>
</details>

The next step is to make this our default keypair:

```bash
solana config set --keypair ~/.config/solana/devnet.json
```

and make sure we are on the `devnet`:

```bash
solana config set --url https://metaplex.devnet.rpcpool.com/
```

If all the above steps are successfull, your configuration be similar to:

```bash
solana config get
```
<details>
<summary>Output</summary>
<p>

```
Config File: ~/.config/solana/cli/config.yml
RPC URL: https://metaplex.devnet.rpcpool.com/ 
WebSocket URL: wss://metaplex.devnet.rpcpool.com/ (computed)
Keypair Path: ~/.config/solana/devnet.json 
Commitment: confirmed 
```

</p>
</details>

### Funding your devnet wallet

In order to add SOL to your `devnet` wallet, you can request funds from a faucet:

```bash
solana airdrop 2
```

<details>
<summary>Output</summary>
<p>

```
Requesting airdrop of 2 SOL

Signature: 41ZEZqpyNMLUy3kQahWSy349PeDz3Q82dNDHKiA7QcsrAzHs3f7YiDEZWjnFi434DoiiDiDkazkBRycRnctx1m6e

6 SOL
```

</p>
</details>

If the command is successful, you will see the updated balance at the end.

:::warning
Do not send **real** SOL to a `devnet` wallet.
:::
