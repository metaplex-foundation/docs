---
sidebar_label: "Specification"
sidebar_position: 2
---
# Specification

## **Collections**

On-chain collections are added to this version of the standard replacing the collection field defined in the external JSON metadata and the various community ad-hoc heuristics for determining a collection, with an objective and easy-to-use on-chain implementation.

### **On-Chain Representation of a Collection**

A collection is defined by a SPL token with a supply of 1 and decimals 0 decorated by a standard token metadata PDA and an additional PDA on it to represent that it is a collection. The collection metadata account is a program derived address generated from the seeds `["collection", mint]` where the `mint` is the SPL token mint account. The PDA contains the following fields:

| Field            | Type      | Description                                                 |
| ---------------- | --------- | ----------------------------------------------------------- |
| verified              | bool    | Whether the collection is verified or not. |
| key             | Pubkey | The SPL token mint account          |

with the following on-chain Rust representation:

```Rust
#[derive(BorshSerialize, BorshDeserialize, PartialEq, Debug, Clone)]
    pub struct Collection {
    pub verified: bool,
    pub key: Pubkey,
}
```

A collection is linked to the collection member NFTs by a new `collection_id` field inside the on-chain metadata for the NFT where the `collection_id` is a Rust `Option<Pubkey>` where the `pubkey` is the public key of the PDA for the collection. If the `collection_id` is `None` then it does not belong to any collection.

This has the following advantages:

- Easy to identify which collection any given NFT belongs to without making any additional on-chain calls
- Possible to find all NFTs that belong to a given collection by making a `getProgramAccounts` call
- Simple and small, so adds minimal on-chain rent storage costs, adds


### **Token Standards**

As token usage has evolved on Solana, it has become clear that there are more types of tokens than simply "fungible" and "non-fungible" tokens. An example is something the community is calling a "semi-fungible token", a SPL token with a supply greater than 1 but which has typical NFT attributes such as an image and an attributes array in the JSON metadata. The consensus seems to be that these should be stored in wallets in the same view as standard NFTs, or in their own view but separate from "standard" fungible SPL tokens. These tokens are becoming popular in gaming contexts to support fungible items such as a kind of sword or a piece of wood, etc. but which are in a different league from typical fungible SPL tokens such as USDC.

In order to support this particular use-case but also to make the standard broad enough to allow expansion to other token types in the future, we are proposing adding a `token_standard` field to the `Metadata`struct which will map to particular JSON metadata standards and will be used to objectively differentiate token types.

This solves a current pain-point for third parties such as wallets which are applying inconsistent and varying heuristics to determine what is and is not an "NFT".

Token Standards are defined by a Rust enum:

```rust

pub enum TokenStandard {
    NonFungible, // This is a master edition
    FungibleAsset, // A token with metadata that can also have attrributes
    Fungible, // A token with simple metadata
    NonFungibleEdition, // This is a limited edition
}
```

A `token_standard` field is added to the `Metadata` struct representing what type of token each NFT is.

Each Token Standard type will have its own JSON schema which are defined below.

**Fungible**

These are simple SPL tokens with limited metadata and supply >= 0. Examples are USDC, GBTC and RAY. 

| Field       | Type   | Description                 |
| ----------- | ------ | --------------------------- |
| name        | string | Name of the token.          |
| symbol      | string | Symbol of the token.        |
| description | string | Description of the token.   |
| image       | string | URI pointing to token logo. |

Example Fungible token JSON metadata:

```json
{
  "name": "USD Coin",
  "symbol": "USDC",
  "description": "Fully reserved fiat-backed stablecoin created by Circle.",
  "image": "https://www.circle.com/hs-fs/hubfs/sundaes/USDC.png?width=540&height=540&name=USDC.png"
}
```

**Fungible Asset**

These are fungible tokens with more extensive metadata and supply >= 0. An example of this kind of token is something the community has been calling "semi-fungible tokens" often used to represent a fungible but attribute-heavy in-game item such as a sword or a piece of wood.

| Field         | Type   | Description                                                                    |     |
| ------------- | ------ | ------------------------------------------------------------------------------ | --- |
| name          | string | Name of the asset.                                                             |     |
| symbol        | string | Symbol of the asset.                                                           |     |
| description   | string | Description of the asset.                                                      |     |
| image         | string | URI pointing to asset image.                                                   |     |
| animation_url | string | URI pointing to asset animation.                                               |     |
| external_url  | string | URI pointing to an external url defining the asset, the game's main site, etc. |     |
| attributes    | array  | Array of attributes defining the characteristics of the asset.                 |     |
|               |        |                                                                                |     |

**Attribute**

| Field      | Type   | Description            |
| ---------- | ------ | ---------------------- |
| trait_type | string | The type of attribute. |
| value      | string | The attribute value.   |

Example Fungible Asset JSON metadata:

```json
{
  "name": "SolanaGame Steel Sword",
  "symbol": "SG-SS-1",
  "description": "SolanaGame steel sword available after Level 4",
  "image": "<https://arweave.net/26YdhY_eAzv26YdhY1uu9uiA3nmDZYwP8MwZAultcE?ext=jpeg>",
  "animation_url": "<https://arweave.net/ZAultcE_eAzv26YdhY1uu9uiA3nmDZYwP8MwuiA3nm?ext=glb>",
  "external_url": "<https://SolanaGame.io>",
  "attributes": [
    {
      "trait_type": "attack",
      "value": "4"
    },
    {
      "trait_type": "defense",
      "value": "3"
    },
    {
      "trait_type": "durability",
      "value": "47"
    },
    {
      "trait_type": "components",
      "value": "iron: 10; carbon: 1; wood: 2"
    }
  ]
}
```
**Non-Fungible Token**

These are the "standard" non-fungible tokens the community is already familiar with and have both a Metadata PDA and a Master Edition PDA. Examples of these are Solana Monkee Business, Stylish Studs and Thugbirdz.

| Field         | Type   | Description                                                                    |
| ------------- | ------ | ------------------------------------------------------------------------------ |
| name          | string | Name of the asset.                                                             |
| symbol        | string | Symbol of the asset.                                                           |
| description   | string | Description of the asset.                                                      |
| image         | string | URI pointing to asset image.                                                   |
| animation_url | string | URI pointing to asset animation.                                               |
| external_url  | string | URI pointing to an external url defining the asset, the game's main site, etc. |
| attributes    | array  | Array of attributes defining the characteristics of the asset.                 |

**Attribute**

| Field      | Type   | Description            |
| ---------- | ------ | ---------------------- |
| trait_type | string | The type of attribute. |
| value      | string | The attribute value.   |

Example Non-Fungible Token JSON metadata:

```json
{
  "name": "SolanaArtProject #1",
  "description": "Generative art on Solana.",
  "image": "https://arweave.net/26YdhY_eAzv26YdhY1uu9uiA3nmDZYwP8MwZAultcE?ext=jpeg",
  "animation_url": "https://arweave.net/ZAultcE_eAzv26YdhY1uu9uiA3nmDZYwP8MwuiA3nm?ext=glb",
  "external_url": "https://example.com",
  "attributes": [
    {
      "trait_type": "trait1",
      "value": "value1"
    },
    {
      "trait_type": "trait2",
      "value": "value2"
    }
  ]
}
```

#### Token Use Settings

To support gaming applications, the concept of "token usage" has been implemented, where a new `uses` field has been added to the token `Metadata` struct. This field is a Rust `Option<Uses>` where `Uses` is a Rust struct with a `UseMethod` enum:

```rust
pub struct Uses {
    pub use_method: UseMethod,
    pub remaining: u64,
    pub available: u64,
}

pub enum UseMethod {
    Burn,
    Single,
    Multiple(u64)
}
```

This allows projects to set different limits on usage of gaming tokens: burn, single, and multiple use. Burn allows a token to be used once and then burned forever. Single allows a single use but does not burn the token. Multiple allows up to `u64` number of uses of the token.

#### Metadata Struct

The new metadata struct with the additional fields is defined below:

```rust
pub struct Metadata {
    pub key: Key,
    pub update_authority: Pubkey,
    pub mint: Pubkey,
    pub data: Data,
    // Immutable, once flipped, all sales of this metadata are considered secondary.
    pub primary_sale_happened: bool,
    // Whether or not the data struct is mutable, default is not
    pub is_mutable: bool,
    /// nonce for easy calculation of editions, if present
    pub edition_nonce: Option<u8>,
    /// Since we cannot easily change Metadata, we add the new DataV2 fields here at the end.
    /// Collection
    pub collection: Option<Collection>,
    /// Uses
    pub uses: Option<Uses>,
    /// Token Standard is deterministic and will change from SemiFungible to NonFungible if
    /// you call the create master edition call and it succeeds.
    pub token_standard: Option<TokenStandard>,
}
```


#### New Instructions

The following instructions have been added to support the new token standard:

- CreateMetadataAccountV2
- UpdateMetadataAccountV2
- UpgradeMetadata

The first two perform the same role as their v1 versions but with support for the extra fields. `UpgradeMetadata` allows existing NFTs to be upgraded to support these new standards by adding the extra fields to their token metadata account.

### Deprecated Items

The following items and instructions have been deprecated in v1.1.0:

- Depreciation of V1 Instructions: These will now show a deprecation warning but will work fine
- CreateMetadataAccount
- UpdateMetadataAccount
- JSON Deprecation:
    * creators field
    * collection field

### Removed Items

Removal Of Deprecated Instructions
* DeprecatedCreateMasterEdition
* DeprecatedCreateReservationList
* DeprecatedMintPrintingTokensViaToken
* DeprecatedMintPrintingTokens
