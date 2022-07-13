# Quick Start

Set up your Solana CLI config with an RPC url and a keypair:

```bash
solana config set --url <rpc url> --keypair <path to keypair file>
```

Sugar will then use these settings by default if you don't specify them as CLI options, allowing commands to be much simpler. If you need help setting up Solana CLI and creating a `devnet` wallet, check the [CLI Wallet Guide](/guides/cli-wallet).

Create a folder named `assets` to store your json and media file pairs with the naming convention 0.json, 0.png, 1.json, 1.png, etc., where the extension is `.json`, `.png`, `.jpg`, etc. This is the same format described in [Preparing your Assets](./preparing-assets).

You can then use the `launch` command to start an interactive process to create your config file and deploy a Candy Machine to Solana:

```bash
sugar launch
```

At the end of the execution of the `launch` command, the Candy Machine will be deployed on-chain.

Feel free to check out our [Candy Machine Minting UI](/guides/candy-machine-ui) guide for help with setting up a minting website.