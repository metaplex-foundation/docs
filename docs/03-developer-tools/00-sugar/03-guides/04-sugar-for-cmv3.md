# Sugar for Candy Machine V3

:::info
For Candy Machine V3 you have to use a Sugar version > v2.0 
:::

The Candy Machine V3 is the latest iteration of the Metaplex Protocol's Candy Machine minting and distribution program. While the deploy of a Candy Machine V3 works largely similar to the previous V2 version, Sugar offers a set of new command to configure and manage a Candy Guard.

The Candy Machine V3 has a modular architecture, where the mint logic is separated from the mint access control &mdash; check the [overview](../../../01-programs/02-candy-machine/00-overview.md) to read more about Candy Machine V3 and Candy Guard.

This guide will walk through the changes in the configuration for a Candy Machine V3 and the commands used to set up and manage a Candy Guard. It assumes that you are already familiar with how Sugar works and have deployed a Candy Machine &mdash; if that is not the case, we recommend to first complete the [My First Candy Machine](../02-tutorials/00-my-first-candy-machine.md) tutorial.

## Configuration

Since the configuration of the mint process has moved to **guards**, Sugar's config file has changed. A basic configuration without any guards is shown bellow:

```json
{
  "number": 10,
  "symbol": "TEST",
  "sellerFeeBasisPoints": 500,
  "isMutable": true,
  "isSequential": false,
  "creators": [
    {
      "address": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8",
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

There are two new elements in the configuration file:

- `isSequential`: indicates to whether a sequential index generation should be used during mint or not (recommended to set this value to `false`);
- `guards`: indicates the configuration for the Candy Guard. If this value is set to `null`, a Candy Guard will not be used and mint will only be possible using the `mint authority` of the Candy Machine.

:::info
You can use the Sugar's `create-config` command to create a basic configuration file. The Candy Guard configuration needs to be added manually, further explained below.
:::

## Available Guards

The Candy Guard ships with a total of [16 default guards](../../../programs/candy-machine/available-guards). These guards can be used to define a single guard set, which will applied to every mint transaction, or to define groups. The example below shows a configuration file with 2 groups:

```json
{
  "number": 10,
  "symbol": "TEST",
  "sellerFeeBasisPoints": 500,
  "isMutable": true,
  "isSequential": false,
  "creators": [
    {
      "address": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8",
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
      "botTax": {
        "value": 0.01,
        "lastInstruction": true
      }
    },
    "groups": [
      {
        "label": "OGs",
        "guards": {
          "startDate": {
            "date": "2022-10-20 12:00:00 +0000"
          },
          "tokenGate": {
            "amount": 1,
            "mint": "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf"
          },
          "solPayment": {
            "value": 1,
            "destination": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8"
          }
        }
      },
      {
        "label": "Public",
        "guards": {
          "startDate": {
            "date": "2022-10-20 18:00:00 +0000"
          },
          "solPayment": {
            "value": 2,
            "destination": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8"
          }
        }
      }
    ]
  }
}
```

In this example, there are 2 groups `OGs` and `Public`. The `OGs` specifies that only transactions that are from an address which holds `1` token of the the SPL token `7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf` are allowed to mint from the `2022-10-20 12:00:00 +0000`; the mint will be charged at `1 SOL`.

The `Public` group is open to any address from the `2022-10-20 18:00:00 +0000`; the mint will be charged at `2 SOL`.

For both groups, the `botTax` guard specified in the `default` guard set applies, so any transaction that fails the guard validation will be subject to a `0.01 SOL` fee.

If we wanted to have a single "public" group, all the guard configuration can be added to the `default` guard set:

```json
{
  "number": 10,
  "symbol": "TEST",
  "sellerFeeBasisPoints": 500,
  "isMutable": true,
  "isSequential": false,
  "creators": [
    {
      "address": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8",
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
      "botTax": {
        "value": 0.01,
        "lastInstruction": true
      },
      "startDate": {
        "date": "2022-10-20 18:00:00 +0000"
      },
      "solPayment": {
        "value": 2,
        "destination": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8"
      }
    },
    "groups": null
  }
}
```

Below is a list of the available guards and their configuration options.

### Address Gate

The AddressGate guard restricts the mint to a single address — the address must match the payer's address of the mint transaction.

```json
"addressGate" : {
    "address": "<PUBKEY>"
}
```

### Allocation

The Allocation guard allows to specify a limit on the overall number of mints for a group, either the default or a specific one. The `id` configuration represents the unique identification for the limit — changing the id has the effect of restarting the limit, since a different tracking account will be created. The `limit` indicates the maximum number of mints allowed within the group.

```json
"allocation" : {
    "id": number,
    "limit": number
}
```

### Allow List

The AllowList guard validates the payer's address against a merkle tree-based allow list of addresses. The hash should be specified as a hexadecimal value.

```json
"allowList" : {
    "merkleRoot": "<HASH>"
}
```

### Bot Tax

The BotTax guard is used to:

- charge a penalty for invalid transactions. The value of the penalty is specified by the lamports configuration.
- validate that the mint transaction is the last transaction (last_instruction = true).

The bot_tax is applied to any error that occurs during the validation of the guards.

```json
"botTax" : {
    "value": SOL value,
    "lastInstruction": boolean
}
```

### End Date

The End Date guard is used to specify a date to end the mint. Any transaction received after the end date will fail.

The date needs to be specified using [RFC 3339 standard](https://datatracker.ietf.org/doc/html/rfc3339). In most cases, the format used will be "yyyy-mm-dd`T`hh:mm:ss`Z`", where `T` is the separator between the full-date and full-time and `Z` is the timezone offset from UTC (use `Z` or +00:00 for UTC time).

```json
"endDate" : {
    "date": "string",
}
```

### Freeze Sol Payment

The Freeze Sol Payment guard allows minting frozen NFTs by charging the payer an amount in SOL. Frozen NFTs cannot be transferred or listed on any marketplaces until thawed. 

Frozen NFTs can be thawed by anyone as long as one of the following conditions is met:

* The Candy Machine has minted out.
* The Candy Machine was deleted.
* The configured Freeze Period — which can be a maximum of 30 days — has passed.

```json
"freezeSolPayment" : {
    "value": SOL value,
    "destination": "<PUBKEY>"
}
```

### Freeze Token Payment

The Freeze Token Payment guard allows minting frozen NFTs by charging the payer a specific amount of tokens from a certain mint account. Frozen NFTs cannot be transferred or listed on any marketplaces until thawed. The amount determines how many tokens are required.

Frozen NFTs can be thawed by anyone as long as one of the following conditions is met:

* The Candy Machine has minted out.
* The Candy Machine was deleted.
* The configured Freeze Period — which can be a maximum of 30 days — has passed.

```json
"freezeTokenPayment" : {
    "amount": number,
    "mint": "<PUBKEY>",
    "destinationAta": "<PUBKEY>"
}
```

### Gatekeeper

The Gatekeeper guard validates if the payer of the transaction has a token from a specified gateway network &mdash; in most cases, a token after completing a captcha challenge. The `expire_on_use` configuration is used to indicate whether or not the token should expire after minting.

```json
"gatekeeper" : {
    "gatekeeperNetwork": "<PUBKEY>",
    "expireOnUse": boolean
}
```

### Mint Limit

The Mint Limit guard allows to specify a limit on the number of mints for each individual address. The `id` configuration represents the unique identification for the limit — changing the id has the effect of restarting the limit, since a different tracking account will be created. The `limit` indicates the maximum number of mints allowed.

```json
"mintLimit" : {
    "id": number,
    "limit": number
}
```

### NFT Burn

The NFT Burn guard restricts the mint to holders of another NFT (token), requiring that the NFT is burned in exchange of being allowed to mint.

```json
"nftBurn" : {
    "requiredCollection": "<PUBKEY>",
}
```

### NFT Gate

The NFT Gate guard restricts the mint to holders of a specified `requiredCollection` NFT collection. The payer is required to hold at least one NFT of the collection.

```json
"nftGate" : {
    "requiredCollection": "<PUBKEY>",
}
```

### NFT Payment

The NFT Payment guard is a payment guard that charges another NFT (token) from a specific collection for the mint. As a requirement of the mint, the specified NFT is transferred to the `destination` address.

```json
"nftPayment" : {
    "requiredCollection": "<PUBKEY>",
    "destination": "<PUBKEY>"
}
```

### Program Gate

The Program Gate guard allows to specify a group of programs (up to 5) that can be present in the same transaction of the mint instruction. This can be used to limit the programs that are allowed to CPI to mint from the Candy Machine.

```json
"programGate" : {
    "additional": ["<PUBKEY 1>", "<PUBKEY 2>", ..., "<PUBKEY 5>"],
}
```

### Redeemed Amount

The Redeemed Amount guard stops the mint when the number of `items_redeemed` of the Candy Machine reaches the configured `maximum` amount.

```json
"redeemedAmount" : {
    "maximum": number,
}
```

### Sol Payment

The Sol Payment guard is used to charge an amount in SOL for the mint. The funds are transferred to the configured `destination` address.

```json
"solPayment" : {
    "value": SOL value,
    "destination": "<PUBKEY>"
}
```

### Start Date

The Start Date guard determines the start date of the mint. If this guard is not specified, mint is allowed — similar to say any date is valid.

The date needs to be specified using [RFC 3339 standard](https://datatracker.ietf.org/doc/html/rfc3339). In most cases, the format used will be "yyyy-mm-dd`T`hh:mm:ss`Z`", where `T` is the separator between the full-date and full-time and `Z` is the timezone offset from UTC (use `Z` or +00:00 for UTC time).

```json
"startDate" : {
    "date": "string",
}
```

### Third Party Signer

The Third Party Signer guard requires an extra signer on the transaction.

```json
"thirdPartySigner" : {
    "signerKey": "<PUBKEY>"
}
```

### Token Burn

The Token Burn guard restricts the mint to holders of a specified SPL Token and requires the burn of the tokens. The `amount` determines how many tokens are required.

```json
"tokenBurn" : {
    "amount": number,
    "mint": "<PUBKEY>"
}
```

### Token Gate

The Token Gate guard restricts the mint to holders of a specified SPL Token. The `amount` determines how many tokens are required.

```json
"tokenGate" : {
    "amount": number,
    "mint": "<PUBKEY>"
}
```

### Token Payment

The Token Payment guard restricts the mint to holders of a specified SPL Token, transferring the required amount to the `destinationAta` address. The amount determines how many tokens are required.

```json
"tokenPayment" : {
    "amount": number,
    "mint": "<PUBKEY>",
    "destinationAta": "<PUBKEY>"
}
```

### Token2022 Payment

The Token2022 Payment guard allows minting by charging the payer some tokens from a configured Token-2022 mint account. Both the amount of tokens and the destination address can also be configured.

```json
"token2022Payment" : {
    "amount": number,
    "mint": "<PUBKEY>",
    "destinationAta": "<PUBKEY>"
}
```

## Deployment Commands

The deployment of a Candy Machine V3 follows the same steps:

1. `sugar validate` to verify that all metadata is in place;
2. `sugar upload` to upload the metadata to the selected storage;
3. `sugar deploy` to create and deploy a Candy Machine;
4. `sugar verify` to verify that all information is on-chain.

At this point, your Candy Machine is deployed and allows minting only from the `mint authority`, which is the address that created the Candy Machine. The next step is to add a Candy Guard to the Candy Machine to specify the mint configuration (access control).

There are 5 new commands in Sugar to create and interact with a Candy Guard:

- `add` to create a new candy guard over a candy machine;
- `update` to update the configuration of an existing candy guard;
- `show` to print the current configuration;
- `remove` to remove the candy guard from a candy machine;
- `withdraw` to close a candy guard account and retrieve the rent funds.

### `add`

Once you completed the guards configuration in your Sugar config file, you can add a Candy Guard using:

```
sugar guard add
```

<details>
<summary>Output</summary>
<p>

```
[1/3] 🔍 Looking up candy machine

Candy machine ID: 7W9sWpDW4EJBpw2n8oqgJek4LcYDEM1JDPkoTZ7gPn4A

[2/3] 🛡  Initializing a candy guard
Signature: 4fyVi6xj1a5qEzvVubhhNfEX875GFJZLbKfg2q42JLeTxi2pFQEn8GwWFkAWT31z6VxPTecHKRa5ZnKrt31ZCT8Q

Candy guard ID: Bw66NeQ6FF6bnXopiv8hhvXPLaCQR7RC6UEntqVuzhdL

[3/3] 📦 Wrapping
Signature: 4ACcw1g8G4fE7yZdqqAMXrZtBx96W5zERXnyib694FgvKV9y5TLsuKVViKf8D4GN1jhyP1uqkBpLrwpcgN7Mt9hc

The candy guard is now the mint authority of the candy machine.

✅ Command successful.
```

</p>
</details>

At this point, `sugar mint` will stop working since the `mint authority` is now the Candy Guard.

### `update`

To update the Candy Guard configuration, you first need to make the required modification in the Sugar config file and the run the command:

```
sugar guard update
```

<details>
<summary>Output</summary>
<p>

```
[1/2] 🔍 Loading candy guard
▪▪▪▪▪ Done
Candy guard ID: Bw66NeQ6FF6bnXopiv8hhvXPLaCQR7RC6UEntqVuzhdL

[2/2] 🖥  Updating configuration
Signature: d8ge5n7rzpeYB68m6VEbJQTYrEmnHo4P3XKXAc5KNYMJnxvq63JegsUMAjMZgBiXAYEqxUrbg9D94D8hT92XH7k

✅ Command successful.
```

</p>
</details>

### `show`

To print the on-chain configuration of a Candy Guard, use the command:

```
sugar guard show
```

<details>
<summary>Output</summary>
<p>

```
[1/1] 🔍 Loading candy guard
▪▪▪▪▪ Done

🛡  Candy Guard ID: Bw66NeQ6FF6bnXopiv8hhvXPLaCQR7RC6UEntqVuzhdL
 :
 :.. base: 7z6f7mq7qGjWu6dimqdAyYNhjG5iqGQ7DYnFV2ckpzoY
 :.. bump: 255
 :.. authority: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8
 :.. data:
     :.. default:
     :   :.. bot tax:
     :   :   :.. lamports: 10000000 (◎ 0.01)
     :   :   :.. last instruction: true
     :   :.. sol payment: none
     :   :.. token payment: none
     :   :.. start date: none
     :   :.. third party signer: none
     :   :.. token gate: none
     :   :.. gatekeeper: none
     :   :.. end date: none
     :   :.. allow list: none
     :   :.. mint limit: none
     :   :.. nft payment: none
     :   :.. redeemed amount: none
     :   :.. address gate: none
     :   :.. nft gate: none
     :   :.. nft burn: none
     :   :.. token burn: none
     :
     :.. groups:
          :.. label: OGslic
          :   :.. bot tax: none
          :   :.. sol payment:
          :   :   :.. lamports: 1 (◎ 0.000000001)
          :   :   :.. destination: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8
          :   :.. token payment: none
          :   :.. start date:
          :   :   :.. date: Thu October 20 2022 12:00:00 UTC
          :   :.. third party signer: none
          :   :.. token gate:
          :   :   :.. amount: 1000000000
          :   :   :.. mint: 7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf
          :   :.. gatekeeper: none
          :   :.. end date: none
          :   :.. allow list: none
          :   :.. mint limit: none
          :   :.. nft payment: none
          :   :.. redeemed amount: none
          :   :.. address gate: none
          :   :.. nft gate: none
          :   :.. nft burn: none
          :   :.. token burn: none
          :
          :.. label: Public
              :.. bot tax: none
              :.. sol payment:
              :   :.. lamports: 2000000000 (◎ 2)
              :   :.. destination: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8
              :.. token payment: none
              :.. start date:
              :   :.. date: Thu October 20 2022 18:00:00 UTC
              :.. third party signer: none
              :.. token gate: none
              :.. gatekeeper: none
              :.. end date: none
              :.. allow list: none
              :.. mint limit: none
              :.. nft payment: none
              :.. redeemed amount: none
              :.. address gate: none
              :.. nft gate: none
              :.. nft burn: none
              :.. token burn: none

✅ Command successful.
```

</p>
</details>

### `remove`

To remove a Candy Guard from a Candy Machine, use the command:

```
sugar guard remove
```

<details>
<summary>Output</summary>
<p>

```
[1/1] 🔩 Unwrapping
Signature: 5hbySp2JPuFrdjauDFVu5P4Fa3EkV9pAyqtgqDRs38d6aVwgiSpsBEs33BKQjqPMvdyyteS2W7ApfmcGstRuajNz

The candy guard is no longer the mint authority of the candy machine.
  -> New mint authority: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8

✅ Command successful.
```

At this point, the `mint authority` is transferred back to the Candy Machine `authority`. The Candy Guard account remains on-chain and can be reused.

</p>
</details>

### `withdraw`

To close the Candy Guard account and retrieve the rent fee, use the command:

```
sugar guard withdraw
```

<details>
<summary>Output</summary>
<p>

```
[1/2] 🔍 Loading candy guard
▪▪▪▪▪ Done

[2/2] 🏧 Retrieving funds
Signature: Yfm2kBbs5kygRzH6QDDTXyx2wxqGZ6P6RkTAHEMkHJ7PvpCZKUu2akkZBDHYfdy1TNyUPLywuNSJoPGWAmTSRuK

Received ◎ 0.00268656 from rent fee.

✅ Command successful.
```

</p>
</details>
