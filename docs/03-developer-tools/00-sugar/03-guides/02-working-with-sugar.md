# Working with Sugar

![Sugar Tutorial](/assets/sugar/Sugar-Tutorial.gif#radius#shadow)

[Full Sugar Video Tutorial](https://user-images.githubusercontent.com/26067212/165967904-0a551b6e-dc7e-4d8c-9348-3093e0d93883.mp4)

Sugar contains a collection of commands for creating and managing Metaplex Candy Machines. The complete list of commands can be viewed by running:

```
sugar
```

This will display a list of commands and their short description:

```
USAGE:
    sugar [OPTIONS] <SUBCOMMAND>

OPTIONS:
    -h, --help                     Print help information
    -l, --log-level <LOG_LEVEL>    Log level: trace, debug, info, warn, error, off
    -V, --version                  Print version information

SUBCOMMANDS:
    bundlr            Interact with the bundlr network
    collection        Manage the collection on the candy machine
    create-config     Interactive process to create the config file
    deploy            Deploy cache items into candy machine config on-chain
    freeze            Commands for the Candy Machine Freeze feature
    hash              Generate hash of cache file for hidden settings
    help              Print this message or the help of the given subcommand(s)
    launch            Create a candy machine deployment from assets
    mint              Mint one NFT from candy machine
    reveal            Reveal the NFTs from a hidden settings candy machine
    show              Show the on-chain config of an existing candy machine
    sign              Sign one or all NFTs from candy machine
    thaw              Thaw a NFT or all NFTs in a candy machine
    unfreeze-funds    Unlock treasury funds after freeze is turned off or expires
    update            Update the candy machine config on-chain
    upload            Upload assets to storage and creates the cache config
    validate          Validate JSON metadata files
    verify            Verify uploaded data
    withdraw          Withdraw funds from candy machine account closing it
```

To get more information about a particular command (e.g., `deploy`), use the `help` command:

```
sugar help deploy
```

The list of options together with a short description will be displayed:

```
Deploy cache items into candy machine config on-chain

USAGE:
    sugar deploy [OPTIONS]

OPTIONS:
    -c, --config <CONFIG>          Path to the config file, defaults to "config.json" [default:
                                   config.json]
        --cache <CACHE>            Path to the cache file, defaults to "cache.json" [default:
                                   cache.json]
    -h, --help                     Print help information
    -k, --keypair <KEYPAIR>        Path to the keypair file, uses Sol config or defaults to
                                   "~/.config/solana/id.json"
    -l, --log-level <LOG_LEVEL>    Log level: trace, debug, info, warn, error, off
    -r, --rpc-url <RPC_URL>        RPC Url
```

> **Note:** This guide assumes that you set up your RPC url and a keypair using Solana CLI config, as described in the [Quick Start](https://docs.metaplex.com/developer-tools/sugar/overview/quick-start) section above.
