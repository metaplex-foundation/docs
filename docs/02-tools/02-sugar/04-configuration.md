# Configuration

:::info
Most users should use the `create-config` command to create the config file as that will ensure the generation of a valid config file and is easier to use for non-technical users.
:::

Sugar uses a JSON configuration file to deploy and interact with a Candy Machine. The configuration file is largely similar to the [existing Candy Machine v2 configuration file](/guides/archived/candy-machine-v2/configuration), but there are important differences.

A minimum configuration file looks like this:

```json
{
    "price": 1.0,
    "number": 10,
    "symbol": "SR",
    "sellerFeeBasisPoints": 500,
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
    "retainAuthority": true,
    "isMutable": true,
    "creators": [
    {
      "address": "<CREATOR 1 WALLET ADDRESS>",
      "share": 50
    },
    {
      "address": "<CREATOR n WALLET ADDRESS>",
      "share": 50
    }
  ]
}
```

The main differences with the previous configuration file are:
- **goLiveDate**: this needs to be specified using [RFC 3339 standard](https://datatracker.ietf.org/doc/html/rfc3339). In most cases, the format used will be "yyyy-mm-dd`T`hh:mm:ss`Z`", where `T` is the separator between the *full-date* and *full-time* and `Z` is the timezone offset from UTC (use `Z` or `+00:00` for UTC time);
- **retainAuthority**: this is similar to the previous *noRetainAuthority* property, but provides a clearer meaning&mdash;you should specify **true** to indicate that the candy machine retains the update authority for each mint (most common case) or **false** to transfer the authority to the minter;
- **isMutable**: this is similar to the previous *noMutable* property, but provides a clearer meaning&mdash;you should specify **yes** to indicate that the metadata is mutable (most common case) or **no** to prevent updates to the metadata;
- **creators**: specifies the list of creators and their percentage share of the royalties&mdash; at least one creator must be specified (up to a maximum of four) and the sum of shares must add up to `100`. This information used to be located on each metadata file, but has been deprecated since Token Metadata Standard v1.1.0 and therefore needs to be specfied in the configuration file. The list of creators will be the same to all NFTs minted from the Candy Machine.
- **whitelistMintSettings**: the configuration for `"mode"` has been simplified. There are now two valid values for `"mode"`: `"burnEveryTime"` or `"neverBurn"` &mdash; no need to specify the option followed by a boolean value, e.g.:
  ```
  "whitelistMintSettings": {
     "mode": "burnEveryTime",
     "mint": "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",
     "presale": true,
     "discountPrice": null
  }
  ```
- **endSettings**: the configuration has been simplified. The `"endSettingsType"` is now specified as either `"Date"` or `"Amount"`; the value is now speficied with a property `"number"` - e.g.:
  ```
  "endSettings": {
    "endSettingType": "Amount",
    "number": 10
  }
  ```