---
sidebar_label: "How to set up a CLI Wallet"
---

# Setting up a Solana CLI Wallet

Setting up a CLI wallet is quick! To start, download the [Solana Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools). This guide will assume that you are using the Solana CLI commands:

```bash
solana --version
```

> **output:** _solana-cli 1.10.29_

### Setting up a devnet wallet (for testing)

The steps described here will create a wallet to be used in the Solana `devnet` environment. In normal circumstances you would redact your mnemonic, store it somewhere safe and take advantage of the `--outfile` flag.

To create a new wallet, we will use the `solana-keygen` command:

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

If all the above steps are successful, your configuration be similar to:

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

2 SOL
```

</p>
</details>

If the command is successful, you will see the updated balance at the end. Make sure you are entering the airdrop amount that is within the airdrop limit. Currently, the maximum airdrop request limit is **2 SOL** and there is a daily total limit of **24 SOL**.

:::caution

The `solana airdrop` command is sometimes unreliable. If the command doesn't work, you can use the airdrop tool at https://solfaucet.com.

:::

### Switching to Mainnet Beta for Production

To switch to the Mainnet Beta cluster, you can either make a new wallet or continue to use the same keypair. This guide will be using the same keypair.

The only step would be to set the cluster to a Mainnet Beta RPC: 

```bash
solana config set --url https://api.metaplex.solana.com/
```

And that's it!

You will have to send **real** SOL to your address now. You can buy SOL from a centralized exchange such as Binance, Coinbase, Crypto.com, and others.

:::warning

Make sure you send your SOL to the correct address! There is no `undo` button with cryptocurrency.

:::

You can check your wallet address:

```bash
solana address
```

> **output:** _6j4nNrozTJkk1zatiXHezSLZArnRUq3WkGKHACThXGpZ_

and your balance:

```bash
solana balance
```

> **output:** _2 SOL_