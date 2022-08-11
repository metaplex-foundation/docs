# My First Candy Machine

The goal of this tutorial is to take you from zero to one: you will learn to install Sugar and use its basic commands to configure and deploy a candy machine to Solana's devnet. It will provide you with a foothold and enough knowledge that you can then use the rest of the developer resources to learn the more advanced details for using Sugar.

## Prerequisite Knowledge

* You should have a basic understanding of how to find and use a terminal on your OS, including navigating directories, and running commands: an example of a terminal for MacOS is [iTerm2](https://iterm2.com/).
* 

## Setup

This tutorial targets MacOS, Linux, and Windows Subsystem Linux (WSL), but all commands and screenshots are from a MacOS system. It should work on any of those three systems. For installing on Windows see the Windows method on the [installation page](../00-installation.md).

### Install the Solana CLI Tool Suite

The [Solana CLI Tool Suite](https://docs.solana.com/cli/install-solana-cli-tools) is useful to have for Solana development and we will use the config file to store our keypair file path and RPC node url to simplify the Sugar commands we run by eliding those options. 

To install, run this script in your terminal:

```bash
sh -c "$(curl -sSfL https://release.solana.com/v1.10.32/install)"
```

and follow the instructions for MacOS & Linux on the [Solana CLI page](https://docs.solana.com/cli/install-solana-cli-tools). 

When finished, running `solana --version` should give you a version number output in your terminal.

### Set Up and Fund a CLI Wallet

Next, we will set up a devnet command line interface (CLI) wallet for use on Solana's developer blockchain environment--devnet. This will allow us to interact with a test Solana blockchain and create a candy machine without spending real SOL. Devnet SOL has no economic value and is not listed on exchanges.

:::info
Solana blockchain environments are called "[clusters](https://docs.solana.com/cluster/overview)" and Solana currently has three clusters running on validators:
mainnet-beta, devnet, and testnet. For more on the differences between these three clusters see the [Solana docs](https://docs.solana.com/clusters) on the topic.
:::

To create a new wallet, we will use the `solana-keygen` command:

```bash
solana-keygen new --outfile ~/.config/solana/devnet.json
```

This generates a new Solana keypair and stores it to a file called `devnet.json` in the Solana config directory.

Example output:

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

Now we set this keypair as the default one in our Solana config so Sugar can find it:

```bash
solana config set --keypair ~/.config/solana/devnet.json
```

Similarly, we set a default RPC node so we don't have to pass this command in to Sugar each time. Note how we are using a `devnet` RPC node:

```bash
solana config set --url https://metaplex.devnet.rpcpool.com/
```

Now you can run this command to view your current configuration:

```bash
solana config get
```

It should look like this:

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

Finally, we need to fund this wallet with devnet SOL:

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

## Install Sugar

To install Sugar, simply copy and paste and run this command in your terminal:

```bash
bash <(curl -sSf https://sugar.metaplex.com/install.sh)
```

This will download and run an install script from the Metaplex Sugar repo. The install script checks your OS and downloads the correct binary for it and installs it on your system PATH so you can run the Sugar command from any directory on your system.

Follow any instructions from the install script regarding updating your PATH. This may require closing and reopening your terminal. Once complete you should be able to run the command `sugar` in your terminal and get a list of available commands:

```bash
sugar
```

<details>
<summary>Output</summary>
<p>

```
sugar-cli 0.6.0
Command line tool for creating and managing Metaplex Candy Machines.

USAGE:
sugar [OPTIONS] <SUBCOMMAND>

OPTIONS:

-h, --help Print help information
-l, --log-level <LOG_LEVEL> Log level: trace, debug, info, warn, error, off
-V, --version Print version information

SUBCOMMANDS:
bundlr              Interact with the bundlr network
collection          Manage the collection on the candy machine
create-config       Interactive process to create the config file
deploy              Deploy cache items into candy machine config on-chain
hash                Generate hash of cache file for hidden settings
help                Print this message or the help of the given subcommand(s)
launch              Create a candy machine deployment from assets
mint                Mint one NFT from candy machine
reveal              Reveal the NFTs from a hidden settings candy machine
show                Show the on-chain config of an existing candy machine
sign                Sign one or all NFTs from candy machine
update              Update the candy machine config on-chain
upload              Upload assets to storage and creates the cache config
validate            Validate JSON metadata files
verify              Verify uploaded data
withdraw            Withdraw funds from candy machine account closing it
```

</p>
</details>

## Set Up Your Project

Next we are going to set up a simple project directory with some example assets which you can download from [here](https://www.youtube.com/watch?v=dQw4w9WgXcQ). 

Create a folder for your project somewhere convenient on your OS, for this tutorial we are creating a folder called MyProject on the Desktop. Next, copy the "assets" folder you downloaded into this folder so your project directory looks like the following:

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

The config file tells Sugar how to configure your candy machine with values such as number of assets, what creators to use, what settings to apply etc. To create a config file we are going to use the Sugar `create-config` interactive command.

Run the following command in your terminal from within your project directory:

```bash
MyProject > sugar create-config
```

We will now get a series of questions we need to answer to set up our config file.

```
? What is the price of each NFT? ›
```

This is the price we wish to charge for selling each of our NFTs. The price is either in SOL or in a SPL token we specify. For this tutorial we are just setting up a basic candy machine that charges users in SOL. Input your desired price and then press "enter" to go to the next step. Decimal values such as `1.33` are ok.

```
? Found 10 file pairs in "assets". Is this how many NFTs you will have in your candy machine? (y/n) ›
```

This is the number of NFTs we are configuring our candy machine to mint and must match the number of asset pairs we have in our `assets` directory. In this case, Sugar has detected we have 10 asset files pairs so we can simply input `y` to confirm this is correct.

```
? Found symbol "TEST" in your metadata file. Is this value correct? (y/n) ›

```

Sugar has detected the symbol for our NFT from our assets files so once again we can just input `y` to confirm this is correct.

```
? What is the seller fee basis points? ›
```

The seller fee basis points is the amount of royalty we want to charge on secondary sales (all sales after the candy machine minting). Basis points are percentage times 100, so e.g. 500 basis points is 5%, and 150 is 1.5%. Input the value you wish to use for this and press "enter" to go to the next step.

```
? What is your go live date? Enter it this format, YYYY-MM-DD HH:MM:SS [+/-]UTC-OFFSET or type 'now' for current time. For example 2022-05-02 18:00:00 +0000 for May 2, 2022 18:00:00 UTC. ›
```

The candy machine "go live date" is when the candy machine becomes active and minting from it is allowed. We can either input a date here in the format specified or we can input "now" for the current time. Input "now" and hit enter to go to the next step.

```
? How many creator wallets do you have? (max limit of 4) ›
```

Here we enter the number of creators who are part of this project and who we want to receive royalties from secondary sales. For this tutorial we will use 1 creator so input "1" and press enter.

```
? Enter creator wallet address #1 ›
```

Now we need to provide the Solana wallet address for each creator. In this case, we only have one creator and we are going to use our own address for that creator so we can run `solana address` in a separate terminal window to retrieve the address of the wallet we configured in a previous step. Input this value and press enter.

```
? Enter royalty percentage share for creator #1 (e.g., 70). Total shares must add to 100. ›
```

We only have a single creator so we put in `100` here.

```
? Which extra features do you want to use? (use [SPACEBAR] to select options you want and hit [ENTER] when done) ›
✔ SPL Token Mint
✔ Gatekeeper
✔ Whitelist Mint
✔ End Settings
✔ Hidden Settings
```

This step allows us to configure advanced settings for our candy machine, but we are not using any of them in this tutorial so we simply press [Enter] to continue on.

```
? What is your SOL treasury address? ›
```

Once again we will use the address of our keypair set in the Solana config in a previous step. If you have it handy you can enter it here, otherwise, you can run `solana address` again in a separate window to retrieve it.

```
? What upload method do you want to use? ›
❯ Bundlr
AWS
NFT Storage
SHDW
```

This lets us choose which method we are using to store our off-chain NFT metadata (the images and data in the .json files for our assets). The simplest one to start with is `Bundlr` as it does not require any extra configuration other than having a funded Solana address. Bundlr will upload our metadata and images to [Arweave](https://www.arweave.org/), a blockchain designed for permanent and decentralized data storage.

Use the [SPACEBAR] to select the Bundlr option.

```
? Do you want to retain update authority on your NFTs? We HIGHLY recommend you choose yes. (y/n) ›
```

This is an advanced setting and lets us give away update authority to the owner of each NFT individually but we do not recommmend doing this initially as it will prevent you from fixing any mistakes you make in your candy machine after NFTs are minted. Select `yes` for this case by inputting `y`.

```
? Do you want your NFTs to remain mutable? We HIGHLY recommend you choose yes. (y/n) ›
```

Similarly, we recommend leaving your NFTs as mutable so you, the update authoritiy, can fix any issues post-mint. You can always set your NFTs to be immutable later using a third-party tool such as [Metaboss](https://metaboss.rs), but this is a one way street: once set immutable, you can never make the mutable again. Input `y` to select yes and leave your NFTs mutable.

If all steps were followed correctly you should now see:

```
[2/2] 📝 Saving config file

Saving config to file: "config.json"

Successfully generated the config file. 🎉

✅ Command successful.
```

Open up the generated file, config.json, in your favorite text or code editor (e.g [VS Code](https://code.visualstudio.com/). You should see a file similar to this:

```json
{
"price": 1.0,
"number": 10,
"gatekeeper": null,
"creators": [
{
"address": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8",
"share": 100
}
],
"solTreasuryAccount": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8",
"splTokenAccount": null,
"splToken": null,
"goLiveDate": "11 Aug 2022 18:19:16 +0000",
"endSettings": null,
"whitelistMintSettings": null,
"hiddenSettings": null,
"uploadMethod": "bundlr",
"retainAuthority": true,
"isMutable": true,
"symbol": "TEST",
"sellerFeeBasisPoints": 500,
"awsS3Bucket": null,
"nftStorageAuthToken": null,
"shdwStorageAccount": null
}
```

Your values will be different depending and what you input for various settings.

## Upload Images and Metadata to External Storage

In this step, we will upload all our assets file pairs to Arweave via Bundlr. 

:::info
Solana is designed to be a high-throughput low-latency blockchain that can host smart contracts, but one of the design tradeoffs is that storing data on Solana is fairly expensive. For NFTs we only store basic information about the NFT, such as the name, symbol, creators, and seller fee basis points. For the image and all the other metadata, we have a URL on-chain on Solana that points to an external JSON file contain all that information. 

This URL can point to any JSON file anywhere. It can be a decentralized file storage blockchain like Arweave or Filecoin, a peer-to-peer distributed file system like IPFS, or even a centralized cloud server like AWS.

Sugar currently supports four upload methods: Arweave via Bundlr, IPFS via NFT Storage, Shadow Drive and AWS.
:::

In our previous step we selected `Bundlr` as our upload method and we saw this in the config file when we viewed it. Now, all we have to do is run the following command:

```
sugar upload
```

<details>
<summary>Output</summary>
<p>

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
-> pubkey: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8
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
</p>
</details>

:::tip
Sugar commands are designed to be robust and commands such as `upload` and `deploy` will pick up where they left off when you run them again. You may occasionally get an error such as:

🛑 Error running command (re-run needed): Blockhash not found

In such cases it's safe to rerun the command until it succeeds.
:::

When uploading is finished, sugar will have created a `cache.json` file in our project directory. Open this file and you will see something similar to:


<details>
<summary>Output</summary>
<p>

```json
{
"program": {
"candyMachine": "",
"candyMachineCreator": "",
"collectionMint": ""
},
"items": {
"0": {
"name": "Test NFT #1",
"image_hash": "07f72b034cd9b070422121d6625505eb99451ae1fee1af84011578612bd72df0",
"image_link": "https://arweave.net/7Xnhw3OmPMKxozsSb24iA-OqSsFEbQ9A4QVvnfocGXc",
"metadata_hash": "a553937d33679df9cc7b7efe18c4527b033a0542ffb2164d87783a9675f83561",
"metadata_link": "https://arweave.net/64XXcR9xcho-_KfmW4wuwq4GRfMq4i2MzkTmovn_3KE",
"onChain": false
},
"1": {
"name": "Test NFT #2",
"image_hash": "570c4fa585605dd40446b8af2446c0d521f131c48c0f6542ee9413ba85f1b4b6",
"image_link": "https://arweave.net/YZsUJzzG49HZFB3tMxvFYf9D4p1PtmG-sYVfwycw-gs",
"metadata_hash": "83f6c3e962fa7e062e3410541181cb4d570fa24f96a6ac994fa2f249e8ff68e1",
"metadata_link": "https://arweave.net/TqzPmwMbVJqkvAU8xwK4C2KdrXPQjCbXdSzJ5yorIV0",
"onChain": false
},
"2": {
"name": "Test NFT #3",
"image_hash": "904d77afe80cd314120246538f238c4027ae12df572730510717d9d5b4f6eb06",
"image_link": "https://arweave.net/e_MpJ3qvJLvqobf9irXc-MJ_T7d2lTx1302uCFxkDdU",
"metadata_hash": "94ed73f0948d81f769c5c78e1a174cca924dfea598b42192b0c43e71f39c4852",
"metadata_link": "https://arweave.net/ZTbggU65n0KB47tIkqJ-yUgdGDzlo0WC-0PnKwcQELI",
"onChain": false
},
"3": {
"name": "Test NFT #4",
"image_hash": "a55573187d20b2724b07cd62a380f1ba8a900add16823fa141c225a12584fb0c",
"image_link": "https://arweave.net/yX2-EsjAG2ZonBhkTXhaB-aCkqvEdI4ZwyfewIG4ryc",
"metadata_hash": "96d3d4db2df9a27b9e936dc04f3070549835193ca66c26d359eed64163455ef9",
"metadata_link": "https://arweave.net/bEsRFiVkeAAgKVYY01fpz1RWsJYaRkNVeYnIXIPEKX0",
"onChain": false
},
"4": {
"name": "Test NFT #5",
"image_hash": "d6c51d8cc47da88ccd0b47d5928c4a8fe4e8c7bc2ea6cf617a1ee0526a3497e5",
"image_link": "https://arweave.net/0UU5Od6Xjcm8Sez526J7PaDrpqxvykoZK4sXBj71LMI",
"metadata_hash": "32d98af90d9100e4b8890ed9d946fb0c99145f2c2c6a75b224feb5ec82ee42e9",
"metadata_link": "https://arweave.net/kdF763v1WCArgC8ug7a_rw15vhgTBH8swdjHho23evs",
"onChain": false
},
"5": {
"name": "Test NFT #6",
"image_hash": "504ff2410ae3184028a8cd938207fc780d7dac3d290e09dbd82b28fef41fcd4a",
"image_link": "https://arweave.net/L6b73oJxid4TdFLcToT_QZTD8Ci3bp2GtddIReRBgjQ",
"metadata_hash": "d621b0419f3ed29f037dcff089f3169860a2b643e1e254d07907dfb4bb01d7fa",
"metadata_link": "https://arweave.net/7tpabcuW_buQyX7P3eRNXUizCNUnT9v2KQ42ORQPvqU",
"onChain": false
},
"6": {
"name": "Test NFT #7",
"image_hash": "edffb12559a10909f4a611eaa0cb3b3e8fe1f1d0b8956645ce1a219a6afb5a57",
"image_link": "https://arweave.net/JzY25nU-MxljHzWKSX-cmDEJ9e40dsdt5HgcZYJBvy8",
"metadata_hash": "4abf2481953887a96687640d8909e6f2d6d37595c7ff17e4ad1f262466dac89c",
"metadata_link": "https://arweave.net/lKLKH2qWX2NcUgemrktOzoCpoYOQ0w5_ZXMv0SMMymc",
"onChain": false
},
"7": {
"name": "Test NFT #8",
"image_hash": "b4d3d3079620cde03e587a1f4f032fe8fff1e52b05ac1d4ab1f43be6b4ae27aa",
"image_link": "https://arweave.net/TZDtID66bmAf6APftrbVLNuM8F0WpT9lzW04Tigs10I",
"metadata_hash": "3a2a84524ad475edb01e7aff9398bad8173daf43cd3e4f15d81f9a2746a43b2d",
"metadata_link": "https://arweave.net/cQwesye50AxU4D4k8ARA45w8-s9nsNjTSoe2Qn588J8",
"onChain": false
},
"8": {
"name": "Test NFT #9",
"image_hash": "a4cdd0c6f0808ede282e7834cea0e91dc9aee90ce6aca617aa9101d441973a2f",
"image_link": "https://arweave.net/zXmnNwatv7M_vOQ0DmTgAnMFpRGKuuxby-Un1G0rTZU",
"metadata_hash": "5d175f8de87fe0ca7637976743d66fb72b30fe29b8a8dbf87958b315dde06ff9",
"metadata_link": "https://arweave.net/ElAhJTw9d38sdHH9k8ZtZ2FDgHUaAFo3XBWfVnLtvh0",
"onChain": false
},
"9": {
"name": "Test NFT #10",
"image_hash": "441d3330a457dc2b0cfa4f1f21d9ca83e6f47e7f5a30988e1f62d406422565b5",
"image_link": "https://arweave.net/yyh4_Ag99Ae_sXRZqFbLxIPbDlavpHZR9CABMx8bS48",
"metadata_hash": "2a7a7ccbd1d0f67d69ee9184c2606c4fda8ccd75bf9117d58f6800dbb6694eeb",
"metadata_link": "https://arweave.net/F1y2pvbqQl9ml6SEI7IushbbFqpzDPgxa5Xn9p2MfOE",
"onChain": false
}
}
}
```
</p>
</details>

Each asset from our `assets` directory has been uploaded to Arweave and a link to it stored in the cache file. You can open one of these links in the browser to see what this looks like.

If you look at the candy machine values at the top, you'll see they are empty because we have not actually created a candy machine yet. We will do that next.

## Deploy a Candy Machine

To create and deploy a candy machine, run the `deploy` command:

```bash
sugar deploy
```

<details>
<summary>Output</summary>
<p>
[1/2] 🍬 Creating candy machine
Candy machine ID: Ews3L5NoAjjLEHYqEu47DqQ77nsqgNQs3NuELjBCd5bb

[2/2] 📝 Writing config lines
Sending config line(s) in 1 transaction(s): (Ctrl+C to abort)
[00:00:03] Write config lines successful ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 1/1

✅ Command successful.
</p>
</details>

## Verify Successful Deployment

Once the deployment finishes, we can verify successful deployment with:

```bash
sugar verify
```

<details>
<summary>Output</summary>
<p>
▪▪▪▪▪ Completed

[2/2] 📝 Verification
Verifying 10 config line(s): (Ctrl+C to abort)
[00:00:01] Config line verification successful ████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████████ 10/10

Verification successful. You're good to go!

See your candy machine at:
-> https://www.solaneyes.com/address/Ews3L5NoAjjLEHYqEu47DqQ77nsqgNQs3NuELjBCd5bbdevnet

✅ Command successful.

</p>
</details>

Our candy machine is now successfully deployed!

## Mint a NFT

Finally, to round off this tutorial we will mint an NFT from our candy machine to ensure it works as expected. Run:

```bash
sugar mint
```

to mint one NFT to your wallet address. 


<details>
<summary>Output</summary>
<p>
[1/2] 🔍 Loading candy machine
Candy machine ID: Ews3L5NoAjjLEHYqEu47DqQ77nsqgNQs3NuELjBCd5bb
▪▪▪▪▪ Done

[2/2] 🍬 Minting from candy machine

Minting to PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8
▪▪▪▪▪ Signature: jAUVJv4ezyumvKYWvuEsMcDtWRujCK4xFL9q8MCe7PmDiVuAGHNY5PFGKUH5hY4PnqtGMyvDjX821xxCiGAChzQ

✅ Command successful.

</p>
</details>

Now you can open your wallet in an explorer like [Solana Explorer](https://explorer.solana.com/?cluster=devnet) and view the NFT you just minted by clicking on the "Tokens" tab.

Congratulations! You have successfully configured, created, and deployed your first candy machine!