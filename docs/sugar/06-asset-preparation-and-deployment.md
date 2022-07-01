# Deploying a Candy Machine
Apart from the `launch` command, discussed in the `Quick Start` section above, Sugar provide commands to manage the whole process of deployment of a Candy Machine, from the validation of assets to withdrawing funds and closing a Candy Machine account.

In this section we will cover the commands involved in deploying a Candy Machine in the order that they should be executed.

## Preparing Your Assets

The preparation of the assets is similar to the instructions provided in the [Candy Machine v2 documentation](http://docs.metaplex.com/candy-machine-v2/preparing-assets). By default, Sugar loads media/metadata files from an `assets` folder in the directory where the command has been executed, but the name of the folder can be specified as a command-line parameter.

![Screen Shot 2022-04-29 at 10 50 00 AM](https://user-images.githubusercontent.com/26067212/165969928-992c3c7e-8069-4590-97f0-e6c19cd37d74.png)

Example image of how your asset folder should look. 


### Collection Assets

In addition, if you want a collection NFT to be created and set automatically, you will need to additionally include a `collection.json` and a `collection.png/jpg` in your `assets` folder. They should be in the same format as the other assets. An example of a `collection.json` file is below:

```json
{
  "name": "Your Collection Name",
  "symbol": "SYMBOL",
  "description": "A description of your collection",
  "image": "collection.png",
  "attributes": [],
  "properties": {
    "files": [
      {
        "uri": "collection.png",
        "type": "image/png"
      }
    ]
  }
}
```

If you have a preexisting collection NFT and want to use it for your new Candy Machine, skip this step and use the `collection set` command after deploying the Candy Machine as shown [here](#collection). 


### 1. `create-config`

By default, Sugar looks for a `config.json` file in the current directory to load the Candy Machine configuration &mdash; the configuration file name can be specified with a `-c` or `--config` option.

You can either create this file manually, following the instructions above, or use the `create-config` command:

```bash
sugar create-config
```

Executing the command starts an interactive process consisting in a sequence of prompts to gather information about all configuration options. At the end of it, a configuration file is saved (default to `config.json`) or its content is displayed on screen. To specify a custom file name, use the option `-c`:

```bash
sugar create-config -c my-config.json
```

### 2. `validate`

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

### 3. `upload`

The `upload` command uploads assets to the specified storage and creates the cache file for the Candy Machine:

```bash
sugar upload
```

if your assets are in a folder named `assets` or:

```bash
sugar upload <ASSETS DIR>
```

There is also the option to specify the path for the configuration file with the `-c` option (default `config.json`) and the name of the cache file with the option `--cache` (default `cache.json`).

The `upload` command can be resumed (re-run) at any point in case the upload is not completed successfully &mdash; only files that have not yet being uploaded are processed. It also automatically detects when the content of media/metadata files change and re-uploads them, updating the cache file accordingly. In other words, if you need to change a file, you only need to copy the new (modified) file to your assets folder and re-run the `upload` command. There is no need to manually edit the cache file.

### 4. `deploy`

Once all assets are uploaded and the cache file is successfully created, you are ready to deploy your items to Solana:

```bash
sugar deploy
```

The `deploy` command will write the information of your cache file to the Candy Machine account on-chain. This effectively creates the Candy Machine and displays its on-chain ID &mdash; use this ID to query its information on-chain using an [explorer](https://explorer.solana.com/). You can specify the path for the configuration file with the `-c` option (default `config.json`) and the name of the cache file with the option `--cache` (default `cache.json`) in case you are not using the default names.


After a successful deploy, the Candy Machine is ready to be minted according to its `goLiveDate` and `whitelistMintSettings`.

> **Note:** The authority wallet (the one used to create the Candy Machine) can mint bypassing the `goLiveDate` setting.

### 5. `verify`

The `verify` command checks that all items in your cache file have been successfully written on-chain:

```bash
sugar verify
```

if you are using the default cache file name (`cache.json`) or:

```bash
sugar verify --cache <CACHE>
```

to specify a different cache file path. If you deploy has been successfully, the verification return no errors. At this point, you can set up your [minting webpage](http://docs.metaplex.com/candy-machine-v2/mint-frontend) to allow your community the chance to mint.

## Other Commands

Sugar includes other commands to manage a Candy Machine.

### `mint`

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


### `collection`

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

### `show`

The `show` command displays the on-chain config of an existing candy machine:

```bash
sugar show <CANDY MACHINE>
```

where the `<CANDY MACHINE>` is the Candy Machine ID &mdash; the ID given by the `deploy` command.

### `update`

The `update` command is used to modify the current configuration of a Candy Machine. Most configuration settings can be updated in a CMv2 with a single command, with the exception of:
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

### `withdraw`

When the mint from a Candy Machine is complete, it is possible to recover the funds used to pay rent for the data stored on-chain. To initiate the withdraw:

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

### `bundlr`

When you use `bundlr` as your upload method, Sugar automatically funds your account on the Bundlr Network to cover the storage costs. Once the upload is completed, there could be left over funds in your Bundlr account. You can verify your balance on the Bundlr Network with the following command:

```bash
sugar bundlr balance
```

This will retrieve the balance for the current keypair. You can specify an alternative keypair using the option `--keypair`. The remaining balance (if there is any) can be withdrawn:

```bash
sugar bundlr withdraw
```

At the end of the withdraw, the funds available on the Bundlr Network will be transferred to your Solana address.

## Further Reading

The [Candy Machine v2 documentation](http://docs.metaplex.com/candy-machine-v2/introduction) provides a more detailed explanation of each step of the deploy of a Candy Machine. Although there a differences in Sugar commands, the overall process is similar.
