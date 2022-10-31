---
description: "Shows how to create a Candy Machine with Sugar"
---

import { Accordion } from '/src/accordion.jsx';
import { AccordionCode } from '/src/accordion-code.jsx';

# How to create a Candy Machine v3 - Part 1 (Sugar)

The goal of this tutorial is to take you from zero to one: you will learn to install Sugar and use its basic commands to configure and deploy a candy machine to Solana's devnet. It will provide you with a foothold on the basics and enough knowledge that you can then use the rest of the developer resources to learn the more advanced details for using Sugar.

## Prerequisite Knowledge

- You should have a basic understanding of how to find and use a terminal on your OS, including navigating directories, and running commands: an example of a terminal for macOS is [iTerm2](https://iterm2.com/).
- You should have basic familiarity with what Solana is but don't need advanced technical knowledge.
- You should have basic familiarity with the Metaplex Standard but, again, do not need advanced technical knowledge.

## Setup

This tutorial targets macOS, Linux, and Windows Subsystem Linux (WSL), but all commands and screenshots are from a Linux system. It should work on any of those three systems. For installing on Windows see the Windows method on the [installation page](/developer-tools/sugar/overview/installation).

### Install the Solana CLI Tool Suite

The [Solana CLI Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools) is useful to have for Solana development, and we will use the config file to store our keypair file path and RPC node url to simplify the Sugar commands we run, by eliding those options.

To install, **follow [this guide](../../../guides/cli-wallet#setting-up-a-devnet-wallet-for-testing) to install the Solana Tool Suite** and set up a devnet wallet.

Once finished, come back here to resume the tutorial.

## Install Sugar

There are some manual steps involved currently. This should change as soon as sugar leaves the alpha stage. You will then again be able to follow the easy steps on the [installation page](/developer-tools/sugar/overview/installation).

Installing Sugar for Candy Machine v3 is currently a bit more complicated because of it's alpha status. There will be an easier installation procedure soon as soon as Sugar for CM v3 leaves the alpha status.

For now you can download the binary from the [github releases](https://github.com/metaplex-foundation/sugar/releases) page. Navigate through the latest release prefixed with `sugar-cmv3-`, open the assets and download the binary appropriate for your system. E.g. for ubuntu download `sugar-ubuntu-latest`.

Optional: You can add the binary to your PATH so that you do not have to reference the whole path all the time. How to do this differs from OS to OS though. You can find a guide for different operating systems [here](https://zwbetz.com/how-to-add-a-binary-to-your-path-on-macos-linux-windows/).

Once complete you should be able to run the command `sugar` in your terminal and get a list of available commands. This only works if you added it to your PATH, otherwise you will have to mention the specific file like `/home/mark/sugar`.

<Accordion>
<AccordionCode title="Command" open={true}>

```
sugar
```

</AccordionCode>
<AccordionCode title="Output">

```
sugar-cli 1.1.0-alpha+CMv3
Command line tool for creating and managing Metaplex Candy Machines.

USAGE:
    sugar [OPTIONS] <SUBCOMMAND>

OPTIONS:
    -h, --help                     Print help information
    -l, --log-level <LOG_LEVEL>    Log level: trace, debug, info, warn, error, off
    -V, --version                  Print version information

SUBCOMMANDS:
    bundlr           Interact with the bundlr network
    collection       Manage the collection on the candy machine
    create-config    Interactive process to create the config file
    deploy           Deploy cache items into candy machine config on-chain
    guard            Manage guards on the candy machine
    hash             Generate hash of cache file for hidden settings
    help             Print this message or the help of the given subcommand(s)
    launch           Create a candy machine deployment from assets
    mint             Mint one NFT from candy machine
    reveal           Reveal the NFTs from a hidden settings candy machine
    show             Show the on-chain config of an existing candy machine
    sign             Sign one or all NFTs from candy machine
    update           Update the candy machine config on-chain
    upload           Upload assets to storage and creates the cache config
    validate         Validate JSON metadata files
    verify           Verify uploaded data
    withdraw         Withdraw funds a from candy machine account closing it
```

</AccordionCode>
</Accordion>

## Set Up Your Project

Next we are going to set up a simple project directory with some example assets which you can download from [here](https://arweave.net/RhNCVZoqC6iO0xEL0DnsqZGPSG_CK_KeiU4vluOeIoI). Extract the zip file and rename the folder to 'assets'.

Create a folder for your project somewhere convenient on your OS. For this tutorial we are creating a folder called MyProject on the Desktop. Next, copy the "assets" folder you downloaded into this folder so your project directory looks like the following:

```
MyProject/
     assets/
         0.png
         0.json
         1.png
         1.json
         . . .
```

We will run all our Sugar commands from within the project directory and Sugar will create our config and cache files in that directory. If we do this, we can elide the cache and config files from our commands as Sugar will look in the current directory for `config.json` and `cache.json` files.

## Create a Config File

The config file tells Sugar how to configure your candy machine with values such as number of assets, what creators to use, what settings to apply, etc. To create a config file we are going to use the Sugar `create-config` interactive command.

Run the following command in your terminal from within your project directory:

```bash
sugar create-config
```

We will now get a series of questions we need to answer to set up our config file.

```
? Found 10 file pairs in "assets". Is this how many NFTs you will have in your candy machine? (y/n) ›
```

This is the number of NFTs we are configuring our candy machine to mint and must match the number of asset pairs we have in our `assets` directory. In this case, Sugar has detected we have 10 asset files pairs, so we can simply input `y` to confirm this is correct.

```
? Found symbol "TEST" in your metadata file. Is this value correct? (y/n) ›

```

Sugar has detected the symbol for our NFT from our assets files so once again we can just input `y` to confirm this is correct.

```
? What is the seller fee basis points? ›
```

The seller fee basis points is the amount of royalty we want to charge on secondary sales (all sales after the candy machine minting). Basis points are percentage times 100, so e.g. 500 basis points is 5%, and 150 is 1.5%. Input the value you wish to use for this and press "enter" to go to the next step.

```
? Do you want to use a sequential mint index generation? We recommend you choose no. (y/n) 
```

Candy Machine V3 supports sequential and "random" mint indexes. In most cases you will want to choose `n` here so that the random mint index makes it harder for botters to snipe specific NFTs.

```
? How many creator wallets do you have? (max limit of 4) ›
```

Here we enter the number of creators who are part of this project and who we want to receive royalties from secondary sales. For this tutorial we will use one creator so input "1" and press enter.

```
? Enter creator wallet address #1 ›
```

Now we need to provide the Solana wallet address for each creator. In this case, we only have one creator, and we are going to use our own address for that creator, so we can run `solana address` in a separate terminal window to retrieve the address of the wallet we configured in a previous step. Input this value and press enter.

```
? Enter royalty percentage share for creator #1 (e.g., 70). Total shares must add to 100. ›
```

We only have a single creator, so we put in `100` here.

```
? Which extra features do you want to use? (use [SPACEBAR] to select options you want and hit [ENTER] when done) ›
✔ Hidden Settings
```

This step allows us to configure advanced settings for our candy machine. It is a relict of Candy Machine v2 and the flow will probably be changed in the future. We are not using hiddensettingsin this tutorial, so we simply press [Enter] to continue on.

```
? What upload method do you want to use? ›
❯ Bundlr
AWS
NFT Storage
SHDW
Pinata
```

This lets us choose which method we are using to store our off-chain NFT metadata (the images and data in the .json files for our assets). The simplest one to start with is `Bundlr` as it does not require any extra configuration other than having a funded Solana address. Bundlr will upload our metadata and images to [Arweave](https://www.arweave.org/), a blockchain designed for permanent and decentralized data storage.

Use the [SPACEBAR] to select the Bundlr option.

```
? Do you want your NFTs to remain mutable? We HIGHLY recommend you choose yes. (y/n) ›
```

Similarly, we recommend leaving your NFTs as mutable so you, the update authority, can fix any issues post-mint. You can always set your NFTs to be immutable later using a third-party tool such as [Metaboss](https://metaboss.rs), but this is a one way street: once set immutable, you can never make them mutable again. Input `y` to select yes and leave your NFTs mutable.

If all steps were followed correctly you should now see:

```
[2/2] 📝 Saving config file

Saving config to file: "config.json"

Successfully generated the config file. 🎉

✅ Command successful.
```

You could now open up the generated file, config.json, in your favorite text or code editor (e.g. [VS Code](https://code.visualstudio.com/)). You should see a file similar to this:

<Accordion>
<AccordionCode title="config.json Example">

```json
{
  "number": 10,
  "symbol": "TEST",
  "sellerFeeBasisPoints": 500,
  "isMutable": true,
  "isSequential": false,
  "creators": [
    {
      "address": "DF2eiJojmgvcXDoQgSFzhrnt9Ds4GoYZmaCRMF8sWMYN",
      "share": 100
    }
  ],
  "uploadMethod": "bundlr",
  "awsConfig": null,
  "nftStorageAuthToken": null,
  "shdwStorageAccount": null,
  "pinataConfig": null,
  "hiddenSettings": null,
  "guards": null
}
```

</AccordionCode>
</Accordion>

Your values will be different depending on and what you input for various settings. Later in this guide we'll need the file again to manually add the guards.

If you used Sugar with Candy Machine V2 before you might be missing some questions and values like start date or price. Don't worry, Candy Machine V3 has even more features and possibilities than V2, but those will be set later in this guide.

## Upload Images and Metadata to External Storage

In this step, we will upload all our assets file pairs to Arweave via Bundlr.

Solana is designed to be a high-throughput, low-latency blockchain that can host smart contracts, but one of the design tradeoffs is that storing data on Solana is fairly expensive. For NFTs, we only store basic information about the NFT, such as the name, symbol, creators, and seller fee basis points. For the image and all the other metadata, we have a URL on-chain on Solana that points to an external JSON file containing all that information.

This URL can point to any JSON file anywhere. It can be a decentralized file storage blockchain like Arweave or Filecoin, a peer-to-peer distributed file system like IPFS, or even a centralized cloud server like AWS.

Sugar currently supports four upload methods: Arweave via Bundlr, IPFS via NFT Storage or Pinata, Shadow Drive and AWS.

In our previous step we selected `Bundlr` as our upload method, and we saw this in the config file when we viewed it. Now, all we have to do is run the following command:

<Accordion>
<AccordionCode title="Command" open={true}>

```
sugar upload
```

</AccordionCode>
<AccordionCode title="Output">

```
[1/4] 🗂 Loading assets
Found 10 asset pair(s), uploading files:
+--------------------+
| images | 10 |
| metadata | 10 |
+--------------------+

[2/4] 🖥 Initializing upload
▪▪▪▪▪ Connected
Funding address:
-> pubkey: DF2eiJojmgvcXDoQgSFzhrnt9Ds4GoYZmaCRMF8sWMYN
-> lamports: 5939049 (◎ 0.005939049)
Signature: 5zeJw5WerTFVDTWEoCGDH6WwRcdFcsjAswKvZ6QB6vzSVtaWKK4QVRH3BsKHjHeCASXiN7W8ni7BsYxFuMAmjVUD

[3/4] 📤 Uploading image files

Sending data: (Ctrl+C to abort)
[00:00:09] Upload successful ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 10/10

[4/4] 📤 Uploading metadata files

Sending data: (Ctrl+C to abort)
[00:00:00] Upload successful ██████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 10/10

10/10 asset pair(s) uploaded.

✅ Command successful.
```

</AccordionCode>
</Accordion>

Sugar commands are designed to be robust and commands such as `upload` and `deploy` will pick up where they left off when you run them again. You may occasionally get an error such as:

```
🛑 Error running command (re-run needed): Blockhash not found
```

In such cases it's safe to rerun the command until it succeeds.

**Caution!** Some upload methods such as Bundlr, do cost funds to upload and store the data. If you successfully upload your data and then run it again, it will charge you again. If you do this repeatedly with a large amount of data it can cost you a significant amount of SOL. Once you have successfully uploaded your data you should not have to do it again, as the cache file will store all the links to the data. Ask on the Metaplex Discord if you run into any unexpected issues.

When uploading is finished, sugar will have created a `cache.json` file in our project directory. Open this file, and you will see something similar to the following example:

<Accordion>
<AccordionCode title="cache.json Example">

```json
{
  "program": {
    "candyMachine": "",
    "candyMachineCreator": "",
    "collectionMint": ""
  },
  "items": {
    "0": {
      "name": "Studious Crab #1",
      "image_hash": "6f16570562658640b3dc6b6dd7e5b94190d2f8bd5c5a0aa0a4d0bba20c7fd612",
      "image_link": "https://arweave.net/i-aYA4PmPGO5mKydXnuaUqIs-ZhSvVWwe9rcWCtMJxk",
      "metadata_hash": "8d83d51e36ea47a9a5009dbe927ef53cddcdf0c2bc029e369e96ca436a012dd7",
      "metadata_link": "https://arweave.net/35nZmuuUlK1iY9G-dn5u_raI_lwGoNoR9TrhOKUPez0",
      "onChain": false
    },
    "1": {
      "name": "Studious Crab #2",
      "image_hash": "d527d7faf0e0064e2c527909a740aaec670ea505ad07b109e940099d5e5781e2",
      "image_link": "https://arweave.net/PfEGR3UjmlZIptOoDbdVvga4jjZEF7tT9PHWBbimGL0",
      "metadata_hash": "add6c7b82e45da98eb53dafc9f3ebdef4fe6587680f6904da4be39cc4666320b",
      "metadata_link": "https://arweave.net/KxSO5JKmCkRurA_KVFrP1K08Cqh7zFlGT_xvsxMJM4E",
      "onChain": false
    },
    "2": {
      "name": "Studious Crab #3",
      "image_hash": "82763aecbf910695ef0bf1311152e2b6c2e9578a8d0d85f3ada320abb9b3551b",
      "image_link": "https://arweave.net/XXUFcltx3bgpLXZfqxdUYmUuRoRS25eK9nAyoVKDijI",
      "metadata_hash": "0f0ffd8b65e11347410ea6f8b1fabd04cf3a67d705e1787c6841a38c66f0ce4e",
      "metadata_link": "https://arweave.net/kUVqhDRs6qmTmQq0vfHH8RJVkALCdVqwju2MTpyD22I",
      "onChain": false
    },
    "3": {
      "name": "Studious Crab #4",
      "image_hash": "05d9bed9f734103efc131a0ad0a88b0dbbf46afdd8f7a6b179e8ea7e1b37f046",
      "image_link": "https://arweave.net/-PwwpoZI9pPcK-X6z7Wha-7d2g78uXAJ2sCvcr8lIjM",
      "metadata_hash": "44b3407c7da4f0aa004326b231c0e19ee9ef939febc0ef98ff14aebb7508012d",
      "metadata_link": "https://arweave.net/-RBIW6Xj3NmSfkQXfY-9Zb7AK7IBKLw6OC0pXpxmle4",
      "onChain": false
    },
    "4": {
      "name": "Studious Crab #5",
      "image_hash": "92906e1988a4c58125799c3636a567ec47fca77e15ef6a326be07bc4d8a0522c",
      "image_link": "https://arweave.net/k94CDnb0kU_IWgpFmApNM82GCopduhzPEHStaHctzaQ",
      "metadata_hash": "0c34fecf846ae872e4f25fb51ca7e3fcf1ec09a3b2a2af99334bc88947ee640b",
      "metadata_link": "https://arweave.net/64dDlYU8s3oEtSBNA5YHviie0EeIyyvhTnxfx8wrg2Q",
      "onChain": false
    },
    "5": {
      "name": "Studious Crab #6",
      "image_hash": "ecf8012c1bedc8d481d20540d47813318c02edfef1080b712155896147b056d9",
      "image_link": "https://arweave.net/a6rCPvyG_5AM6awHhV9nFDvZuwSubp9lV1l1lbvxnA8",
      "metadata_hash": "6d6be3c1aeaef771ba38e77e1cd4b942ddee2fff7ffcfa27625244aaff595d7e",
      "metadata_link": "https://arweave.net/WfYBOi4xA7dfeaJX5xS7l24pcV6tjsMLiOUBplQCrrw",
      "onChain": false
    },
    "6": {
      "name": "Studious Crab #7",
      "image_hash": "ffe705980fde6a9fbc6cb29b3505d467499c4e78af08f486bf2cd6f7b3f27151",
      "image_link": "https://arweave.net/Euy4L7kHX7y-2vgZnUJTtdtZ44IxFZcM7-Q2JvJY8_8",
      "metadata_hash": "1d9df60037af5fba50222362ba2ec215d117ca622d894d2c16f86936a67e1559",
      "metadata_link": "https://arweave.net/mWtcYmaT4cfphOUCa78yxSVqB81HpSsSMYCKYGDLe5A",
      "onChain": false
    },
    "7": {
      "name": "Studious Crab #8",
      "image_hash": "babd4f81cf056ce35bae9b1330c9c1b13f440ad2a3632c862e5594994a30a5b7",
      "image_link": "https://arweave.net/CxxgV_nIt0DkN3yGym62KXeyS02l-S9p4r78WRWfjzQ",
      "metadata_hash": "6ca0b7e89e89dfa586ac13580df046f327c658010f7cd932ca2f8af980611319",
      "metadata_link": "https://arweave.net/_Vvxf0FrLBf4nUfYKcMdWnpbVBAIfCjgl_Ke6f6r9gA",
      "onChain": false
    },
    "8": {
      "name": "Studious Crab #9",
      "image_hash": "c95e11874e94a27b547e5e7457f974a8d299c8c0066f3bf4430aa9c24e03835f",
      "image_link": "https://arweave.net/ed4IrMGpSuP-EVVVwU7s2plrI3bjDNQl2n09WLROeLU",
      "metadata_hash": "30c2856dc20bd0a92c16128107e4aba43e4dd88bfe3a2d2e3142b5b958d539c6",
      "metadata_link": "https://arweave.net/w0uAaDzmLVheaEYyb2c2lw929aKIIun015wcy9-qrl8",
      "onChain": false
    },
    "9": {
      "name": "Studious Crab #10",
      "image_hash": "4c16db39492bc794fbde16cf0aa0abe5f172fa88a45bd2e4afdfea782af241d5",
      "image_link": "https://arweave.net/1cFuW_wwZcZF-a72zga_koleo8y7rcLTc2f5YuaHhcU",
      "metadata_hash": "517b9e282e2db08ad6bc722e378b983e111d8eba14a62bc964b1177521eac3c5",
      "metadata_link": "https://arweave.net/Ns82pK1nX9tCCsZiBUKg8VvlketUjR9-BaCRbMcWOfg",
      "onChain": false
    }
  }
}
```

</AccordionCode>
</Accordion>

Each asset from our `assets` directory has been uploaded to Arweave and a link to it stored in the cache file. You can open one of these links in the browser to see what this looks like. Within the data in the metadata link, there is another link to the image. Both of these links are stored for each item in the cache file.

If you look at the candy machine values at the top, you'll see they are empty because we have not actually created a candy machine yet. We will do that next.

## Deploy a Candy Machine

To create and deploy a candy machine, run the `deploy` command:
<Accordion>
<AccordionCode title="Command"  open={true}>

```bash
sugar deploy
```

</AccordionCode>
<AccordionCode title="Output">

```
[1/2] 🍬 Creating candy machine
Candy machine ID: Ews3L5NoAjjLEHYqEu47DqQ77nsqgNQs3NuELjBCd5bb

[2/2] 📝 Writing config lines
Sending config line(s) in 1 transaction(s): (Ctrl+C to abort)
[00:00:03] Write config lines successful ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 1/1

✅ Command successful.
```

</AccordionCode>
</Accordion>

Once this finishes, if you open up the cache.json file again you will see that the candy machine values have been filled in as we now have a candy machine created on-chain.

## Verify Successful Deployment

Once the deployment finishes, we can verify successful deployment with:

<Accordion>
<AccordionCode title="Command"  open={true}>

```bash
sugar verify
```

</AccordionCode>
<AccordionCode title="Output">

```bash
▪▪▪▪▪ Completed

[2/2] 📝 Verification
Verifying 10 config line(s): (Ctrl+C to abort)
[00:00:01] Config line verification successful ████████████████████████████ 10/10

Verification successful. You're good to go!

See your candy machine at:
-> https://www.solaneyes.com/address/Ews3L5NoAjjLEHYqEu47DqQ77nsqgNQs3NuELjBCd5bb?cluster=devnet

✅ Command successful.
```

</AccordionCode>
</Accordion>

Our candy machine is now successfully deployed!

## Mint a NFT

Finally, to round off this tutorial we will mint an NFT from our candy machine to ensure it works as expected. Run the following command to mint one NFT to your wallet address.

<Accordion>
<AccordionCode title="Command"  open={true}>

```bash
sugar mint
```


</AccordionCode>
<AccordionCode title="Output">

```
[1/2] 🔍 Loading candy machine
Candy machine ID: Ews3L5NoAjjLEHYqEu47DqQ77nsqgNQs3NuELjBCd5bb
▪▪▪▪▪ Done

[2/2] 🍬 Minting from candy machine

Minting to PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8
▪▪▪▪▪ Signature: jAUVJv4ezyumvKYWvuEsMcDtWRujCK4xFL9q8MCe7PmDiVuAGHNY5PFGKUH5hY4PnqtGMyvDjX821xxCiGAChzQ

✅ Command successful.
```

</AccordionCode>
</Accordion>

Now you can open your wallet in an explorer like [Solana Explorer](https://explorer.solana.com/?cluster=devnet) and view the NFT you just minted by clicking on the "Tokens" tab.

## Candy Guards - further configuration
You might be wondering where you can set configuration like price or start date. This is where with Candy Machine V3 the Candy Guards comes into place. There is a whole lot of different settings through the default [Guards](/programs/candy-machine/candy-guards) Program. In the next steps we will just use a few of them to give you a better understanding what they do. In fact we will use some of the easier but often requested or used features: Mint Limit per Wallet, start time and payment with SOL. 

In the current Alpha version you will have to modify the config file manually and add the guard configuration in the `guard` field. Here is an example how it can look like:

<Accordion>
<AccordionCode title="config.json Example"  open={true}>

```json
{
  "number": 10,
  "symbol": "TEST",
  "sellerFeeBasisPoints": 500,
  "isMutable": true,
  "isSequential": false,
  "creators": [
    {
      "address": "DF2eiJojmgvcXDoQgSFzhrnt9Ds4GoYZmaCRMF8sWMYN",
      "share": 100
    }
  ],
  "uploadMethod": "bundlr",
  "awsConfig": null,
  "nftStorageAuthToken": null,
  "shdwStorageAccount": null,
  "pinataConfig": null,
  "hiddenSettings": null,
  "guards": {
    "default": {
      "mintLimit": {
        "id": 1,
        "limit": 3
      },
      "solPayment": {
        "value": 0.5,
        "destination": "Tes1zkZkXhgTaMFqVgbgvMsVkRJpq4Y6g54SbDBeKVV"
      },
      "startDate": {
        "date": "2022-10-23T20:00:00Z"
      }
    }
  }
}
```

</AccordionCode>
</Accordion>

We added a default guard with the following settings:
- `mintLimit` only allows minting a maximum of three NFTs (`limit`) per wallet.
- `solPayment` requires a payment of 0.5 SOL (`value`) which is paid to the destination wallet (`destination`).
- `startDate` restricts the mint function to not allow minting before `2022-10-23T20:00:00Z` (`date`)

You can add multiple different guards e.g. to create multiple phases for OGs, WL and public mint. You can find more information about the possibilities on the [Guards](/programs/candy-machine/candy-guards) pages.

After modifying and saving the manually modified config file we deploy the guard and set it as the guard of our candy machine. Afterwards it will only be possible to mint through that guard if all the restrictions are matched. You'll have to use the following command for it:

<Accordion>
<AccordionCode title="Command"  open={true}>

```
sugar guard add
```

</AccordionCode>
<AccordionCode title="Output">

```bash
[1/3] 🔍 Looking up candy machine

Candy machine ID: Ews3L5NoAjjLEHYqEu47DqQ77nsqgNQs3NuELjBCd5bb

[2/3] 🖥  Loading candy guard
▪▪▪▪▪ Done

Candy guard ID: 7XJdGaywrtcEpohrcZ7kYeMjEHNFVq1XjVpBQ6Doi7TP

[3/3] 📦 Wrapping
Signature: 3C7iXdu9msYviFAJz4esMvkMAiSXTfExBYr9E5VEJfrmJnojrfoEEDPGzJ7qGDx1J5Pf6bHZtfRqYvBPLrc35on5

The candy guard is now the mint authority of the candy machine.

✅ Command successful.
```

</AccordionCode>
</Accordion>

If required you can modify the guard afterwards by running:

<Accordion>
<AccordionCode title="Command"  open={true}>

```bash
sugar guard update
```

</AccordionCode>
<AccordionCode title="Output">

```bash
[1/2] 🔍 Loading candy guard
▪▪▪▪▪ Done
Candy guard ID: 7XJdGaywrtcEpohrcZ7kYeMjEHNFVq1XjVpBQ6Doi7TP

[2/2] 🖥  Updating configuration
Signature: 43oDgKfXeFx3erZbNihJ1a5KxcUPdDLcoB2SW6ZytaxjBhE1M6quSWUyj3kdG64h4aXTZqUj6NiQULbZqpVJABbw

✅ Command successful.
```

</AccordionCode>
</Accordion>

To see the current settings like if you want to change the start date you can run:

<Accordion>
<AccordionCode title="Command"  open={true}>

```bash
sugar guard show
```

</AccordionCode>
<AccordionCode title="Output">

```bash
[1/2] 🔍 Loading candy guard
▪▪▪▪▪ Done
Candy guard ID: 7XJdGaywrtcEpohrcZ7kYeMjEHNFVq1XjVpBQ6Doi7TP

[2/2] 🖥  Updating configuration
Signature: 5nQ1dasS3QAQJH7fBwFXd2VgyRirfYmnZ8XKgsfvWubX4hJ6jzY4dzqEVpXpULgw1PsC5eyJriSMCnVXxw2Mckae

✅ Command successful.
```

</AccordionCode>
</Accordion>

## Allow users to mint

Your users will not want to use a CLI like Sugar to mint but for example a Website instead. For Candy Machine v3 there is not a prebuilt frontend yet. You can use the Metaplex JS SDK to build a mint site though. Further information can be found in [Part 2](./my-first-candy-machine-part2) of this guide!. 

Congratulations! You have successfully configured, created, and deployed your first candy machine!

## After the mint

When the mint has concluded and you do not need the candy machine anymore you can get some of your SOL back by running:

```bash
sugar withdraw
```

## Further Reading

Do you want to learn more about sugar and the Candy Machine? These documents might be interesting for you:

- [How to create a Candy Machine v3 - Part 2 (JS SDK)](./my-first-candy-machine-part2)
- [Guards](/programs/candy-machine/candy-guards)
- [Guard Groups](/programs/candy-machine/guard-groups)