# Quick Start

Set up your Solana CLI config with an RPC url and a keypair:

```bash
solana config set --url <rpc url> --keypair <path to keypair file>
```

Sugar will then use these settings by default if you don't specify them as CLI options, allowing commands to be much simpler. If you need help setting up Solana CLI and creating a `devnet` wallet, check the [CLI Wallet Guide](/guides/cli-wallet).

:::tip

Sugar requires a RPC node with a high-rate limit so is not suitable for use with the default public Solana RPC nodes:
https://api.mainnet-beta.solana.com and https://api.devnet.solana.com. Instead, we recommend you use one of the free or paid RPCs from the community list [here](https://docs.metaplex.com/resources/rpc-providers).

:::

Create a folder for your project and within it, create a folder named `assets` to store your json and media file pairs with the naming convention 0.json, 0.png, 1.json, 1.png, etc., where the extension is `.json`, `.png`, `.jpg`, etc. This is the same format described in [Preparing your Assets](./preparing-assets).

Your project directory will then look like:

```
my_project/
    assets/
       0.png
       0.json
       1.png
       1.json
       . . .
```

You can then use the `launch` command from within the project directory to start an interactive process to create your config file and deploy a Candy Machine to Solana:

```bash
user@User-MacBook-Pro my_project % sugar launch
```

At the end of the execution of the `launch` command, if you do not get any errors, the Candy Machine will be deployed on-chain.

Feel free to check out our [Candy Machine Minting UI](/guides/candy-machine-ui) guide for help with setting up a minting website.