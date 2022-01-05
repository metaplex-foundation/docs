---
sidebar_label: "2. Configuration"
---
# Configuration

The configuration in `CMv2` is now specified in a single JSON file. This allows you to save and reuse the configuration across multiple drops. Additionally, there is a single account on-chain that holds all the configuration of a Candy Machine and the values can be updated at any point. The way the Candy Machine operates depends on the settings used, and therefore it is the **most important part in setting up your Candy Machine**. It is crucial to understand how the settings work to decide which ones to use for your project.

We will discuss a few examples on how to setup a Candy Machine, starting with the settings to configure a `CMv2` to operate in a similar way as a `CMv1`.

The table below provides an overview of the settings available:

| Setting               | Options           | Accepted Values        | Description |
| --------------------- | ----------------- | ---------------------- | ----------------------------------------- |
| price                 |                   | Number                 | The amount in SOL or SPL token for a mint |
| number                |                   | Integer                | The number of items in the Candy Machine |
| gatekeeper            |                   |                        | |
|                       | gatekeeperNetwork | Address                | Captcha provider address |
|                       | expireOnUse       | boolean                | Requires a new captcha after a use |
| solTreasuryAccount    |                   | PublicKey              | SOL wallet to receive proceedings SOL payments |
| splTokenAccount       |                   | PublicKey              | SPL token wallet to receive proceedings from SPL token payments |
| splToken              |                   | PublicKey              | Mint address of the token accepted as payment |
| goLiveDate            |                   | Datetime               | Timestamp when minting is allowed – the Candy Machine authority and whitelists can bypass this constraint |
| endSettings           |                   |                        | |
|                       | date              | boolean                | Enabled the use of a date to stop the mint |
|                       | amount            | boolean                | Enable stopping the mint after a specific amount is minted |
|                       | value             | String / Integer       | Either specify a date string (if date = true) or a integer value (if amount = true) |
| whitelistMintSettings |                   |                        | |
|                       | mode              |                        | |
|                       |                   | “burnEveryTime” : true | Whitelist token is burned after the mint |
|                       |                   | “neverBurn” : true     | Whitelist token is returned to holder |
|                       | mint              |                        | Mint address of the whitelist token |
|                       | presale           | boolean                | Indicates whether whitelist token holders can mint before goLiveDate (presale) |
|                       | discountPrice     | Number                 | Price for whitelist token holders |
| hiddenSettings        |                   |                        | |
|                       | name              | String                 | Name of the mint. The number of the mint will be appended to the name|
|                       | uri               | String                 | Single URI to all mints|
|                       | hash              | String                 | 32 character hash – in most cases this is the hash of the cache file with the mapping between mint number and metadata so that the order can be verified when the mint is complete |
| storage               |                   |                        | Storage type to upload images and metadata |
|                       |                   | “arweave-sol”          | Uploads to arweave and payment are made in SOL (only works in mainnet) |
|                       |                   | “arweave-bundle”       | Uploads to arweave and payment are made in AR (only work in mainnet and requires an Arweave wallet) |
|                       |                   | “arweave”              | Uploads to arweave |
|                       |                   | “ipfs”                 | Uploads to IPFS (must specify either Infura Project ID or Secret Key) |
|                       |                   | “aws”                  | Uploads to AWS (must specify AWS Bucket name) |
| ipfsInfuraProjectId   |                   | String                 | Infura Project ID |
| ipfsInfuraSecret      |                   | String                 | Infure Project Secret |
| arweaveJwk            |                   | String                 | Arweave JWK wallet file |
| awsS3Bucket           |                   | String                 | AWS bucket name |
| noRetainAuthority     |                   | boolean                | Indicates whether the candy machine authority has the update authority for each mint or not |
| noMutable             |                   | boolean                | Indicated whether each mint is mutable or not |

:::info
Any setting that is not used must be set to null to avoid errors from the CLI.
:::

## Minimal Configuration

A minimal Candy Machine config settings looks like this:

```json
{
    "price": 1.0,
    "number": 10, 
    "gatekeeper": null,
    "solTreasuryAccount": "<YOUR WALLET ADDRESS>",
    "splTokenAccount": null,
    "splToken": null,
    "goLiveDate": "25 Dec 2021 00:00:00 GMT", 
    "endSettings": null,
    "whitelistMintSettings": null,
    "hiddenSettings": null,
    "storage": "arweave",
    "ipfsInfuraProjectId": null,
    "ipfsInfuraSecret": null,
    "awsS3Bucket": null,
    "noRetainAuthority": false,
    "noMutable": false
}
```

The above settings will configure a `CMv2` to operate in a similar way as a `CMv1` – although the mint order will be unpredictable. In other words, even the most simple v2 configuration provides an improvement over v1. You can view this as the minimum set of settings required to create a Candy Machine. Many projects will be using a similar set of settings, as this already provides a fully-working on-chain distribution mechanism.

:::caution

The `number` setting cannot be altered after you create your `CMv2`. 

:::

The settings that are specified in this example are:
- price
- number
- solTreasureAccount
- goLiveDate
- noRetainAuthority
- noMutable

If this satisfies the requirement for your project, save these settings to a file (e.g., `config.json`) and you are ready to start uploading your items and create a Candy Machine. Below we will discuss other configuration examples that represent specific use-cases. These examples will use the settings above as a starting point.

> It is important that the `number` setting value matches the number of items in your Candy Machine.

## Captcha Settings (Gateway)

While the unpredictable mint index provides some protection against bots, bots are still able to mint directly from the Candy Machine. If you want to make sure that only humans can mint from your project, you can enable the gatekeeper settings in your `config.json` with the following values:

```json
"gatekeeper": {
    "gatekeeperNetwork" : "ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6",
   	"expireOnUse" : true
}
```
This will enable a captcha challenge once the mint button is clicked - only after passing the captcha you will be allowed to mint.

When you use a captcha, you will not be able to mint from the CLI command `mint_one_token`. If you want to pre-mint from a `CMv2` and are planning to use a captcha, you should set the `goLiveDate` to `null` and turn captcha (temporarily) off. This will allow you to mint from the command line, but only **you** as the `CMv2` authority. Once you complete the pre-mint, turn captch on and set the correct `goLiveDate`.

:::warning
If your Candy Machine is **live** and is has **no captcha**, it is open to bots attacks. The unpredictable mint index only prevents knowing which item to mint, but bots can still snipe a large volume of items.
:::

## Hidden Settings

Hidden settings serve two purposes. First, it allows the creation of larger drops (20k+), since the metadata is not stored on-chain. In turn, this also allows the creation of hide-and-reveal drops, where users discover which item(s) they minted after the mint is complete.

To enable hidden settings, you need to provide the details for the *hiddenSettings* in your `config.json`:

```json
"hiddenSettings": {
    "name":"My Hidden Collection ",
   	"uri":"uri",
	"hash":"44kiGWWsSgdqPMvmqYgTS78Mx2BKCWzd"
}
```
Once hidden settings are enabled, every mint will have the same URI and the name will be created by appending the mint number (e.g., “#45”) to the name specified. The hash is expected to be a 32 character string corresponding to the hash of a cache file that has the mapping between a mint number and the actual metadata URI. This allows the order of the mint to be verified by others after the mint is complete.

Since the metadata is not on-chain, it is possible to create very large drops. The only caveat is that there is a need for an off-chain process to update the metadata for each item. This is important otherwise all items will have the same metadata.

## End Settings

End Settings provides a mechanism to stop the mint if a certain condition is met without interaction. There are two conditions that can be specified.

Stop a mint at a specific timestamp (e.g., at the end of a specific day):

```json
"endSettings": {
	"endSettingType": { "date":true },
	"value":"25 Dec 2021 23:59:00 GMT"
}
```
Stop a mint after a certain amount of item have been minted (e.g., 10 items minted):

```json
"endSettings": {
	"endSettingType": { "amount":true },
	"value":10
}
```

## Whitelist Settings

Whitelist settings provide a variety of different use cases and revolve around the idea of using custom SPL tokens to offer special rights to token holders - how said SPL token is distributed is up to you. We will discuss a few scenarios below.

> In all the examples below, you will need to change the `mint` settings address `"7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf"` with the mint address of your SPL token.

- Creating a whitelist **only** for presale and burning the whitelist token each time. Once the sales begin, whitelist do not have any privileges.

    ```json
    "whitelistMintSettings": {
        "mode" : { "burnEveryTime": true },
        "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
        "presale" : true,
        "discountPrice" : null
    }
    ```

- Creating a whitelist for presale, burning the whitelist token each time and provides users with a 0.5 SOL price tag instead. Once the sales begin (i.e., everyone can mint), the whitelist gets you only the discount.

    ```json
    "whitelistMintSettings": {
        "mode" : { "burnEveryTime": true },
        "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
        "presale" : true,
        "discountPrice" : 0.5
    }
    ```

- Creating a whitelist for presale, not burning the whitelist token (you will be able to reuse it) and gives users a 0.5 SOL price tag instead. Once the sales begin (i.e., everyone can mint), the whitelist gets you only the discount.

    ```json
    "whitelistMintSettings": {
        "mode" : { "neverBurn": true },
        "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
        "presale" : true,
        "discountPrice" : 0.5
    }
    ```

- Creating a whitelist, not burning the whitelist token (you will be able to reuse it) and gives users a 0.5 SOL price tag instead - i.e., the whitelist **only** gets you the discount.

    ```json
    "whitelistMintSettings": {
        "mode" : { "neverBurn": true },
        "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
        "presale" : false,
        "discountPrice" : 0.5
    }
    ```

- Creating a whitelist, burning the whitelist token each time, running the white list during the sale. This in effect restrict any user without the whitelist token from minting at all - this is why `presale` is set to `false` and `discountPrice` set to `null`. The only purpose of the whitelist is to restrict the mint.

    ```json
    "whitelistMintSettings": {
        "mode" : { "burnEveryTime": true },
        "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
        "presale" : false,
        "discountPrice" : null
    }
    ```

## Finishing up

Once you have decided which settings are suitable for your project, save your settings in a json file - in this guide we will be using a file called `config.json`. At this point, you are ready to start uploading your assets to the Candy Machine.