# Configuration

:::tip

Most users should use the `create-config` command to create the config file as that will ensure the generation of a valid config file and is easier to use for non-technical users.

:::

Sugar uses a JSON configuration file to deploy and interact with a Candy Machine. The configuration file is largely similar to the [previous Candy Machine v2 configuration file](/guides/archived/candy-machine-v2/configuration), but there are important differences.

A minimum configuration file looks like this:

```json
{
  "price": 1.0,
  "number": 10,
  "symbol": "SR",
  "sellerFeeBasisPoints": 500,
  "creators": [
    {
      "address": "<CREATOR 1 WALLET ADDRESS>",
      "share": 50
    },
    {
      "address": "<CREATOR n WALLET ADDRESS>",
      "share": 50
    }
  ],
  "gatekeeper": null,
  "solTreasuryAccount": "<TREASURY WALLET ADDRESS>",
  "splTokenAccount": null,
  "splToken": null,
  "goLiveDate": "2022-04-22T00:00:00Z",
  "endSettings": null,
  "whitelistMintSettings": null,
  "hiddenSettings": null,
  "uploadMethod": "bundlr",
  "awsS3Bucket": null,
  "nftStorageAuthToken": null,
  "shdwStorageAccount": null,
  "retainAuthority": true,
  "isMutable": true
}
```

The main differences with the previous configuration file are:
- **goLiveDate**: this needs to be specified using [RFC 3339 standard](https://datatracker.ietf.org/doc/html/rfc3339). In most cases, the format used will be "yyyy-mm-dd`T`hh:mm:ss`Z`", where `T` is the separator between the *full-date* and *full-time* and `Z` is the timezone offset from UTC (use `Z` or `+00:00` for UTC time);
- **retainAuthority**: this is similar to the previous *noRetainAuthority* property, but provides a clearer meaning&mdash;you should specify **true** to indicate that the candy machine retains the update authority for each mint (most common case) or **false** to transfer the authority to the minter;
- **isMutable**: this is similar to the previous *noMutable* property, but provides a clearer meaning&mdash;you should specify **true** to indicate that the metadata is mutable (most common case) or **false** to prevent updates to the metadata;
- **creators**: specifies the list of creators and their percentage share of the royalties&mdash; at least one creator must be specified (up to a maximum of four) and the sum of shares must add up to `100`. This information used to be located on each metadata file, but has been deprecated since Token Metadata Standard v1.1.0 and therefore needs to be specified in the configuration file. The list of creators will be the same to all NFTs minted from the Candy Machine.
- **whitelistMintSettings**: the configuration for `"mode"` has been simplified. There are now two valid values for `"mode"`: `"burnEveryTime"` or `"neverBurn"` &mdash; no need to specify the option followed by a boolean value, e.g.:
  ```json
  "whitelistMintSettings": {
     "mode": "burnEveryTime",
     "mint": "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
     "presale": true,
     "discountPrice": null
  }
  ```
- **endSettings**: the configuration has been simplified. The `"endSettingsType"` is now specified as either `"Date"` or `"Amount"`; the value is now specified with a property `"number"` - e.g.:
  ```json
  "endSettings": {
    "endSettingType": "Amount",
    "number": 10
  }
  ```

  ## Sugar Config Values

| Setting               | Options           | Accepted Values        | Description                                                                                                                                                                                                                                       |
| --------------------- | ----------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| price                 |                   | Number                 | The amount in SOL or SPL token for a mint                                                                                                                                                                                                         |
| number                |                   | Integer                | The number of items in the Candy Machine                                                                                                                                                                                                          |
| gatekeeper            |                   |                        | Enables captcha verification for users prior to minting                                                                                                                                                                                           |
|                       | gatekeeperNetwork | Address                | Gateway provider address                                                                                                                                                                                                                          |
|                       | expireOnUse       | boolean                | Requires a new gateway challenge after a use                                                                                                                                                                                                      |
| solTreasuryAccount    |                   | PublicKey              | SOL wallet to receive proceedings SOL payments                                                                                                                                                                                                    |
| splTokenAccount       |                   | PublicKey              | SPL token wallet to receive proceedings from SPL token payments; set to `null` to use the default token account for your wallet                                                                                                                                                                                    |
| splToken              |                   | PublicKey              | Mint address of the token accepted as payment                                                                                                                                                                                                     |
| goLiveDate            |                   | Datetime               | [RFC 3339 standard](https://datatracker.ietf.org/doc/html/rfc3339) timestamp when minting is allowed – the Candy Machine authority and whitelists can bypass this constraint                                                                                                                                         |
| endSettings           |                   |                        |                                                                                                                                                                                                                                                   |
|                       | endSettingType    |String                        |Either "Date" or "Amount" to stop minting after a specific timestamp or a specific number of NFTs minted                                                                                                                                                                                                                                                   |
|                       | value             | Number    | Value to test the end condition. This will either be a Unix timestamp or a integer value for number of NFTs                                                                                         |
| whitelistMintSettings |                   |                        |                                                                                                                                                                                                                                                   |
|                       | mode              |String                        |"burnEveryTime" to burn the whitelist token after minting, and "neverBurn" to return whitelist token to holder after mint.                                                                                                                                                                                                                                                   |
|                       | mint              | PublicKey              | Mint address of the whitelist token                                                                                                                                                                                                               |
|                       | presale           | boolean                | Indicates whether whitelist token holders can mint before goLiveDate (presale)                                                                                                                                                                    |
|                       | discountPrice     | Number                 | Price for whitelist token holders                                                                                                                                                                                                                 |
| hiddenSettings        |                   |                        |                                                                                                                                                                                                                                                   |
|                       | name              | String                 | Name of the mint. The number of the mint will be appended to the name                                                                                                                                                                             |
|                       | uri               | String                 | Single URI to all mints                                                                                                                                                                                                                           |
|                       | hash              | String                 | 32 character hash – in most cases this is the hash of the cache file with the mapping between mint number and metadata so that the order can be verified when the mint is complete                                                                |
| uploadMethod               |                   |                        | Storage type to upload images and metadata                                                                                                                                                                                                        |
|                       |                   | “aws”                  | Uploads to AWS (must specify AWS Bucket name)                                                                                                                                                                                                     |
|                       |                   | bundlr”          | Uploads to arweave using [Bundlr](https://bundlr.network) and payments are made in SOL (Works on mainnet and devnet. **Files are only stored for 7 days on devnet.**)                                                         |
|                       |                   | “nft-storage”          | Uploads to [NFT.Storage](https://nft.storage) (no payment required, works on all networks)                                                                                                                                                        |
|                       |                   | “shdw”                  | Uploads to the [GenesysGo Shadow Drive](https://shdw.genesysgo.com/shadow-infrastructure-overview/shadow-drive-overview/the-shadow-drive-storage-stack/the-shadow-drive-overlay/what-is-shadow-drive) (Only works on mainnet currently)                                                                                                                                                                                                     |
| awsS3Bucket           |                   | String                 | AWS bucket name                                                                                                                                                                                                                                   |
| nftStorageAuthToken         |                   | String                 | NFT.Storage API Key (optional)                                                                                                                                                                                                                    |
|shadowStorageAccount             |                   | String                 |  Shadow Drive storage pubkey                                                                                                                                                                                                                           |
| retainAuthority     |                   | boolean                | Indicates whether the candy machine authority has the update authority for each mint or if it is transferred to the minter. This should be kept as `true` for the vast majority of cases. |
| isMutable             |                   | boolean                | Indicates whether the NFTs' metadata is mutable or not after having been minted. Most cases should leave this `true`                                                                                                                                                                   |
