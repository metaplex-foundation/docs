# Commands

This section is a reference to all of the Sugar commands and a brief description of how to use them and what they do.

## bundlr

When you use `bundlr` as your upload method, Sugar automatically funds your account on the Bundlr Network to cover the storage costs. Once the upload is completed, there could be leftover funds in your Bundlr account. You can verify your balance on the Bundlr Network with the following command:

```bash
sugar bundlr balance
```

This will retrieve the balance for the current keypair. You can specify an alternative keypair using the option `--keypair`. The remaining balance (if there is any) can be withdrawn:

```bash
sugar bundlr withdraw
```

At the end of the withdrawal, the funds available on the Bundlr Network will be transferred to your Solana address.

## collection

You can use the `collection` commands to manually set or remove the collection NFT. You can only modify the collection on your Candy Machine before any NFTs have been minted from it.

You can set a preexisting collection NFT on your candy machine with the following command:

```bash
sugar collection set <COLLECTION MINT ID>
```

where the `<COLLECTION MINT ID>` is the mint ID of the collection NFT, which is the address you use to view the NFT in explorers.

To remove the collection NFT:

```bash
sugar collection remove
```

## config

Manage candy machine configurations.

### create

```
Interactive process to create a config file

USAGE:
    sugar config create [OPTIONS] [ASSETS_DIR]

ARGS:
    <ASSETS_DIR>    Path to the directory with the assets [default: assets]

OPTIONS:
    -c, --config <CONFIG>          Path to the config file
    -h, --help                     Print help information
    -k, --keypair <KEYPAIR>        Path to the keypair file [default: solana config or
                                   "~/.config/solana/id.json"]
    -l, --log-level <LOG_LEVEL>    Log level: trace, debug, info, warn, error, off
    -r, --rpc-url <RPC_URL>        RPC Url
```

By default, Sugar looks for a `config.json` file in the current directory to load the Candy Machine configuration &mdash; the configuration file name can be specified with a `-c` or `--config` option.

You can either create this file manually, following the instructions above, or use the `config create` command.

```bash
sugar config create
```

Executing the command starts an interactive process consisting in a sequence of prompts to gather information about all configuration options. At the end of it, a configuration file is saved (default to `config.json`) or its content is displayed on screen. To specify a custom file name, use the option `-c`:

```bash
sugar config create -c my-config.json
```

### set

This command supports changing the type of asset your Candy Machine mints: either NFTs or pNFTs using the `--token-standard` option.
It also allows you to specify a rule set for minted pNFTs.

```
sugar-config-set 
Set specific candy machine config values

USAGE:
    sugar config set [OPTIONS]

OPTIONS:
        --cache <CACHE>
            Path to the cache file, defaults to "cache.json" [default: cache.json]

        --candy-machine <CANDY_MACHINE>
            Address of candy machine to update

    -h, --help
            Print help information

    -k, --keypair <KEYPAIR>
            Path to the keypair file, uses Sol config or defaults to "~/.config/solana/id.json"

    -l, --log-level <LOG_LEVEL>
            Log level: trace, debug, info, warn, error, off

    -r, --rpc-url <RPC_URL>
            RPC Url

        --rule-set <RULE_SET>
            Address of the rule set to use

    -t, --token-standard <TOKEN_STANDARD>
            Token Standard to set
```

### update

```
Update the candy machine config on-chain

USAGE:
    sugar config update [OPTIONS]

OPTIONS:
    -c, --config <CONFIG>
            Path to the config file, defaults to "config.json" [default: config.json]

        --cache <CACHE>
            Path to the cache file, defaults to "cache.json" [default: cache.json]

        --candy-machine <CANDY_MACHINE>
            Address of candy machine to update

    -h, --help
            Print help information

    -k, --keypair <KEYPAIR>
            Path to the keypair file, uses Sol config or defaults to "~/.config/solana/id.json"

    -l, --log-level <LOG_LEVEL>
            Log level: trace, debug, info, warn, error, off

    -n, --new-authority <NEW_AUTHORITY>
            Pubkey for the new authority

    -r, --rpc-url <RPC_URL>
            RPC Url
```

## deploy

Once all assets are uploaded and the cache file is successfully created, you are ready to deploy your items to Solana:

```bash
sugar deploy
```

The `deploy` command will write the information of your cache file to the Candy Machine account on-chain. This effectively creates the Candy Machine and displays its on-chain ID &mdash; use this ID to query its information on-chain using an [explorer](https://explorer.solana.com/). You can specify the path for the configuration file with the `-c` option (default `config.json`) and the name of the cache file with the option `--cache` (default `cache.json`) in case you are not using the default names.

After a successful deployment, the Candy Machine is ready to be minted according to its `goLiveDate` and `whitelistMintSettings`.

> **Note:** The authority wallet (the one used to create the Candy Machine) can mint bypassing the `goLiveDate` setting.

## freeze

Subcommand that allows enabling or disabling the freeze feature on a candy machine.

### enable

Turn on the freeze settings for a candy machine that has not started minting yet.

```
sugar freeze enable
```

### disable

Turn off the freeze settings for a candy machine.

```bash
sugar freeze disable
```

Both commands default to using the candy machine in the cache file but take an optional <candy_machine> arg.

```
sugar freeze enable 4j7JaycXWPiwgv7aodQpvW9iXGiZ9hfgdUEPbS8B6ncp
```

## hash

When using `hiddenSettings`, this command computes a hash of the cache file and updates the hash value in the config file. Hash values are automatically updated by the `deploy` command when using `hiddenSettings`, but this command allows updating for advanced use-cases when users are modifying the cache file manually.

```bash
sugar hash
```

It also allows comparing a published hash value with the value from a cache file with the `--compare` option. The cache file can be specified manually with `--cache`, or it will default to the `cache.json` file in the current directory.

```bash
sugar hash --compare 44oZ3goi9ivakeUnbjWbWJpvdgcWCrsi
```

```bash
sugar hash --compare 44oZ3goi9ivakeUnbjWbWJpvdgcWCrsi --cache my_custom_cache.json
```

## launch

The `launch` command is a convenience command that runs four other commands consecutively:

- create-config
- validate
- upload
- deploy
- verify

These five commands allow you to start from a project folder with an assets subfolder in it and go through the entire process of setting up and creating a candy machine, so it's meant as a quickstart command if you don't want to run the steps individually.

```bash
sugar launch
```

## mint

The `mint` command mints NFTs from a Candy Machine from the command-line.

```bash
sugar mint
```

if you are using the default cache file name (`cache.json`) or:

```bash
sugar mint --cache <CACHE>
```

to specify a different cache file path. You can specify the number of NFTs to mint using the option `-n`:

```bash
sugar mint -n 10
```

The above command will mint 10 NFTs from the Candy Machine.

> **Note:** It is not possible to mint tokens from the command line if you have `gatekeeper` settings enabled. If you would like to mint tokens, update the `goLiveDate` to `null` and temporarily disable the `gatekeeper` settings.

## reveal

When using `hiddenSettings` to do a mint and reveal, this command can be used to update all minted NFTs with the values from the cache file. It will find all NFTs minted from the candy machine and then match them up to the values in the cache file by NFT number and then update the NFT data. The command checks if a NFTs URI already matches that in the cache file, and if it does, it skips updating, so the command be rerun to only update newly mintd NFTs or to retry ones that failed to update the first run.

```bash
sugar reveal
```

## show

The `show` command displays the on-chain config of an existing candy machine:

```bash
sugar show <CANDY MACHINE>
```

where the `<CANDY MACHINE>` is the Candy Machine ID &mdash; the ID given by the `deploy` command.

## sign

This command allows signing all NFTs with a creator's keypair, to verify that creator in the creators array in the NFT metadata. Each creator can only sign for themself and only one creator can sign at a time with this command. The creator's keypair can be passed in with the `--keypair` option, otherwise it defaults to using whatever keypair is specified in your Solana CLI config.

```bash
sugar sign
```

```bash
sugar sign -k creator.json
```

## thaw

This command thaws a single frozen NFT, or all frozen NFTs from a candy machine, if the candy machine's freeze settings allow it.

Thaw a single NFT:

```bash
sugar thaw --candy-machine-id <candy_machine_id> <mint_account>
```

Thaw all NFTs from a candy machine:

```bash
sugar thaw --all --candy-machine-id <candy_machine_id>
```

In both commands, the candy machine id is optional, and if left off Sugar will default to the id it finds in the cache file.

E.g.:

```bash
sugar thaw --all
```

## unfreeze-funds

Unfreeze a candy machine's treasury funds by closing the freeze PDA and transferring the funds back to the treasury address. This can only be done when the freeze time has elapsed, or the candy machine is fully minted out, and all NFTs are unthawed.

```bash
sugar unfreeze-funds
```

It defaults to using the candy machine specified in the cache but can optionally take a candy machine address as an argument.

Using it with an optional candy machine arg:

```bash
sugar unfreeze-funds <candy_machine>
```

## update

The `update` command is used to modify the current configuration of a Candy Machine. Most configuration settings can be updated in a CMv2 with a single command, except:

- `number` of items in the Candy Machine can only be updated when `hiddenSettings` are being used;
- switching to use `hiddenSettings` is only possible if the `number` of items is equal to `0`. After the switch, you will be able to update the `number` of items.

To update the configuration, modify your `config.json` (or equivalent) file and execute:

```bash
sugar update
```

if you are using the default cache file name (`cache.json`) and configuration file (`config.json`). Otherwise, use:

```bash
sugar update -c <CONFIG> --cache <CACHE>
```

where `<CONFIG>` is the path to the configuration file and `<CACHE>` is the path to the cache file.

> You need to be careful when updating a live Candy Machine, since setting a wrong value will immediately affect its functionality.

## upload

The `upload` command uploads assets to the specified storage and creates the cache file for the Candy Machine:

```bash
sugar upload
```

if your assets are in a folder named `assets` or:

```bash
sugar upload <ASSETS DIR>
```

There is also the option to specify the path for the configuration file with the `-c` option (default `config.json`) and the name of the cache file with the option `--cache` (default `cache.json`).

The `upload` command can be resumed (re-run) at any point in case the upload is not completed successfully &mdash; only files that have not yet been uploaded are processed. It also automatically detects when the content of media/metadata files changes and re-uploads them, updating the cache file accordingly. In other words, if you need to change a file, you only need to copy the new (modified) file to your assets folder and re-run the `upload` command. There is no need to manually edit the cache file.

## validate

The `validate` command is used to check that all files in the assets folder are in the correct format:

```bash
sugar validate
```

if your assets are in a folder named `assets` or:

```bash
sugar validate <ASSETS_DIR>
```

to specify a custom asset `<ASSETS DIR>` folder name.

> **Note:** It is important to validate your assets before the upload to avoid having to repeat the upload process.

## verify

The `verify` command checks that all items in your cache file have been successfully written on-chain:

```bash
sugar verify
```

if you are using the default cache file name (`cache.json`) or:

```bash
sugar verify --cache <CACHE>
```

to specify a different cache file path. If you deploy has been successfully, the verification return no errors. At this point, you can set up your [minting webpage](/guides/candy-machine-ui) to allow your community the chance to mint.

## withdraw

When the mint from a Candy Machine is complete, it is possible to recover the funds used to pay rent for the data stored on-chain. To initiate the withdrawal:

```bash
sugar withdraw <CANDY MACHINE>
```

where the `<CANDY MACHINE>` is the Candy Machine ID &mdash; the ID given by the `deploy` command. It is possible to withdraw funds from all Candy Machines associated with the current keypair:

```bash
sugar withdraw
```

or list all Candy Machines and their associated funds from the current keypair:

```bash
sugar withdraw --list
```

> You should not withdraw the rent of a live Candy Machine, as the Candy Machine will stop working when you drain its account.

## Further Reading

The [Candy Machine v2 documentation](/deprecated/candy-machine-js-cli/introduction) provides a more detailed explanation of each step of the deployment of a Candy Machine. Although there a differences in Sugar commands, the overall process is similar.
