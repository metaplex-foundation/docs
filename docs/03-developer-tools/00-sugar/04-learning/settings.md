# Candy Machine Settings

## Gatekeeper Settings

Candy Machine V2 has a pseudo-random mint order to which provides some protection against bots, however bots are still able to mint directly from the Candy Machine. If you want to make sure that only humans can mint from your project, you can enable the gatekeeper settings in your `config.json` with the following values:

```json
"gatekeeper": {
    "gatekeeperNetwork" : "<PROVIDER NETWORK ADDRESS>",
   	"expireOnUse" : true
}
```

This will enable a gatekeeper challenge once the mint button is clicked&mdash;only after passing the challenge you will be allowed to mint.

When you use a gatekeeper, you will not be able to mint from the CLI command `sugar mint`. If you want to pre-mint from a `CMv2` and are planning to use a gatekeeper, you should set the `goLiveDate` to `null` and turn `gatekeeper` (temporarily) off. This will allow you to mint from the command line, but only **you** as the `CMv2` authority. Once you complete the pre-mint, turn `gatekeeper` on and set the correct `goLiveDate`.

:::warning

If your Candy Machine is **live** and it has **no gatekeeper**, it is open to bots attacks. The pseudo-random mint index only prevents knowing which item to mint, but bots can still snipe a large volume of items.

:::

### Provider Networks

There are currently two supported gatekeepers (details below). If you want to become a supported gatekeeper please email [contact@identity.org](mailto:contact@identity.org).

> [Learn more about the Identity Gateway Protocol](https://docs.identity.com/docs/overview)

#### Civic Captcha Pass

> Address: `ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6`

**Recommended**: maintain `expireOnUse: true`. Changing this setting increases the susceptibility of your project to bots.

Brings the familiar captcha challenge to web3 and combines it with user-transparent heuristics to protect your mint from bots.

With captcha enabled, a user will be issued a Civic Captcha Pass after successfully completing the captcha challenge and automatically checked by the Candy Machine prior to minting.

A Civic Captcha Pass remains active only for 10 minutes and for one mint to limit the options of malicious botters verifying multiple wallets. If a user tries to use an inactive pass, it will automatically prompt them to refresh it.

- [Learn More](https://docs.civic.com/candy-machine-integration/adding-captcha-to-candy-machine-v2)
- [Civic Ts&Cs](https://docs.civic.com/candy-machine-integration/adding-captcha-to-candy-machine-v2#terms-and-conditions)

#### Verify by Encore

> Address: `tibePmPaoTgrs929rWpu755EXaxC7M3SthVCf6GzjZt`

A web3 alternative to captcha that uses randomized challenge-response tests to filter out bots.

- [Learn More](https://encorefans.notion.site/Verify-0af40ff4b3324694abf336f185c9fad2)
- [Encore Ts&Cs](https://www.encore.fans/terms-conditions)

:::info

By using a gatekeeper, you agree to their terms and conditions.

:::

## Hidden Settings

Hidden settings serve two purposes. First, it allows the creation of larger drops (20k+), since the metadata is not stored on-chain. In turn, this also allows the creation of hide-and-reveal drops, where users discover which item(s) they minted after the mint is complete.

To enable hidden settings, you need to provide the details for the _hiddenSettings_ in your `config.json`:

```json
"hiddenSettings": {
    "name":"My Hidden Collection ",
   	"uri": <place_holder_uri>,
   	"hash":""
}
```

The place_holder_uri points to the place holder metadata and image you want all mints from this candy machine to have initially. This may be the cover art for your collection or a blank image or whatever you want to be the default "hidden" image for all the initial mints.

The hash you can leave blank as the `sugar deploy` command will generate a hash for you from the cache file. You still need to run the `sugar upload` command to upload all your assets to the your external storage provider of your choice. The difference between this and a regular candy machine is that the uploaded values do not get written on-chain with `deploy`, until after the reveal.

Once hidden settings are enabled, every mint will have the same URI and the name will be created by appending the mint number (e.g., “#45”) to the name specified. The hash is expected to be a 32 character string corresponding to the hash of a cache file that has the mapping between a mint number and the actual metadata URI. This allows the order of the mint to be verified by others after the mint is complete. Sugar will generate a hash for you during the `deploy` command, so you typically don't need to do this manually unless you have advanced needs.

Since the metadata is not on-chain, it is possible to create very large drops. Once the mint is finished, you can then run `sugar reveal` which will find all the minted NFTs and match them by name to the values in your cache file and update the metadata on-chain.

## End Settings

End Settings provide a mechanism to stop the mint if a certain condition is met without interaction. There are two conditions that can be specified.

Stop a mint at a specific timestamp (e.g., at the end of a specific day):

```json
"endSettings": {
	"endSettingType": "Date",,
	"date": "25 Dec 2021 23:59:00 +0000"
}
```

Stop a mint after a certain number of items have been minted (e.g., 10 items minted):

```json
"endSettings": {
	"endSettingType": "Amount",
	"number": 10
}
```

This can be used in combination with other settings to create specific use cases. For example, you can run a whitelist presale either for a limited time or for a limited number of items; you can specify your sale period to be between the `goLiveDate` and the `endSettings`'s `date`.

## Whitelist Settings

Whitelist settings provide a variety of different use cases and revolve around the idea of using custom SPL tokens to offer special rights to token holders - how said SPL token is distributed is up to you. We will discuss a few scenarios below.

> In all the examples below, you will need to change the `mint` settings address `7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf` with the mint address of your SPL token.

:::info

You can use the whitelist settings with the `presale` option set to `true` in combination with the gateway settings. This will restrict the mint to only whitelist users and require them to complete the Gatekeeper's challenge.

:::

- Creating a whitelist **only** for presale (e.g., allow whitelist users to mint before the `goLiveDate`) and burning the whitelist token each time. Once the sales begin, whitelist users do not have any privileges.

  ```json
  "whitelistMintSettings": {
      "mode" : "burnEveryTime",
      "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
      "presale" : true,
      "discountPrice" : null
  }
  ```

- Creating a whitelist for presale, burning the whitelist token each time and provide whitelist users with a 0.5 SOL price tag instead (specified by the `discountPrice`). Once the sales begin (i.e., everyone can mint), the whitelist gets you only the discount.

  ```json
  "whitelistMintSettings": {
      "mode" : "burnEveryTime",
      "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
      "presale" : true,
      "discountPrice" : 0.5
  }
  ```

- Creating a whitelist for presale, not burning the whitelist token (you will be able to reuse it) and give whitelist users a 0.5 SOL price tag instead. Once the sales begin (i.e., everyone can mint), the whitelist gets you only the discount.

  ```json
  "whitelistMintSettings": {
      "mode" : "neverBurn",
      "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
      "presale" : true,
      "discountPrice" : 0.5
  }
  ```

- Creating a whitelist, not burning the whitelist token (you will be able to reuse it) and gives whitelist users a 0.5 SOL price tag instead - i.e., the whitelist **only** gets you the discount.

  ```json
  "whitelistMintSettings": {
      "mode" : "neverBurn",
      "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
      "presale" : false,
      "discountPrice" : 0.5
  }
  ```

- Creating a whitelist, burning the whitelist token each time, running the white list during the sale. This in effect restrict any user without the whitelist token from minting at all - this is why `presale` is set to `false` and `discountPrice` set to `null`. The only purpose of the whitelist is to **restrict** the mint.

  ```json
  "whitelistMintSettings": {
      "mode" : "burnEveryTime",
      "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
      "presale" : false,
      "discountPrice" : null
  }
  ```
