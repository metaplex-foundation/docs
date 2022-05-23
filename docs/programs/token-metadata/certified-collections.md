---
sidebar_position: 6
---

# Certified Collections

## Introduction

Introduced in v1.1.0 of the token metadata standard, _on-chain collections_
replace the `collection` field previously defined in external JSON metadata.
Gone are the ad-hoc community heuristics for determining a collection,
superseded with an objective, easy-to-use on-chain implementation.

### **On-Chain Representation of a Collection**

:::info

A `collection` is an NFT. It has the same data layout on-chain as any other NFT.

:::

An NFT is linked to a collection in a belongs_to style where the NFT has a
reference back to the collection. This is implemented through the addition of
a new `collection` field in the `Metadata` struct.

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
    /// Token Standard is deterministic and will change from SemiFungible to NonFungible if
    /// you call the create master edition call and it succeeds.
    pub token_standard: Option<TokenStandard>,
    /// Since we cannot easily change Metadata, we add the new DataV2 fields here at the end.
    /// Collection
    pub collection: Option<Collection>,
    ...
}

#[derive(BorshSerialize, BorshDeserialize, PartialEq, Debug, Clone)]
pub struct Collection {
  pub verified: bool, // Whether or not the collection is verified
  pub key: Pubkey,    // The SPL token mint account of the collection NFT
}
```

The metadata `collection` field maps to the Mint Address of the collection NFT and is
represented as the Rust type `Option<Collection>` where a value of `None` is
interpreted to mean the NFT does not belong to any collection. The `Collection`
struct has the fields `verified` denoting whether or not the collection is
verified (see below) and `key` which points to the `mint` account of the collection NFT.

#### Collection struct fields

| Field    | Type   | Description                                |
| -------- | ------ | ------------------------------------------ |
| verified | bool   | Whether the collection is verified or not. |
| key      | Pubkey | The SPL token mint account                 |

### Verifying A Collection

:::warning

EXTREMELY IMPORTANT:

Explorers, Wallets and Marketplaces, MUST CHECK IF `verified` is true. Verified can only be set true if the Authority on the Collection NFT has run the `verify_collection` instruction over the NFT.

This is the exact same pattern as the `Creators` field where `verified` must be true in order to validate the NFT.

In Order to check if a collection is valid on an NFT you MUST

1. Check that the Collection struct is set
2. That the pubkey in the collection struct is owned on chain by the spl-token program
3. That verified is true

If those 3 steps are not followed you could be exposing fradulent NFTs on real collections

:::

This implementation has the following advantages:

- Easy to identify which collection any given NFT belongs to without making additional on-chain calls
- Possible to find all NFTs that belong to a given collection by making a `getProgramAccounts` call
- Uses existing padding at the end of `Metadata` so adds no on-chain rent storage costs

### Delegate Collection Authority Record

Update Authorities on a Collection NFT can delegate the authority to call the
`verify_collection` instruction. This allows you to delegate the ability to add
NFTs to your collection to many parties. You can do this by calling the
`approve_collection_authority` instruction. To revoke you can call the
`revoke_collection_authority` instruction.

To accomplish setting and verifying a collection with one instruction use the `set_and_verify_collection` instruction introduced in 1.2.0.

### Verify a collection using collections.metaplex.com

1. Visit [collections.metaplex.com](https://collections.metaplex.com/)
2. Connect your wallet, but first verify this wallet is the upgrade authority.
3. Select the cluster you want to work on devnet, mainnet, etc.
4. Click on create "Create a Collection"
5. Put in the name, symbol, logo, and description of your nft collection.
6. Choosing between the three options:
   1. "Individual NFTs" -> insert the mint address of your NFT
   2. "First verified creator" -> locate the candy machine address and insert this
   3. "CSV file" -> upload a csv file that contains the list of mint addresses. The csv file should contain all the mint ids, separated by commas with no spaces.
7. Then click "Create Collection" and two transactions approvals will be required. The first transaction approval will allow Metaplex to be the delegate to make the migration. The second transaction will be the crete the Parent NFT
8. After the Parent NFT is created the migration will start to begin. You can then close the tab and come back to it later with the same wallet to see the status.

:::warning

Always check Solana's Network before you start up a migration. You can check here https://solscan.io/

If a "Retry" button appears it could be due to a network congestion, so click retry and monitor the network.

If a "Fail to Migrate Collection" appears this is typically due to the wrong Upgrade Authority.

All other issues please visit our discord for further support.

:::

[![Verified Collections Tutorial](./assets/verified-collections.gif)](https://drive.google.com/file/d/1VU4xL_yF6LCe0UogVn4As5PMAzUV__8C/view?usp=sharing)

[Full Verified Collections Tutorial](https://drive.google.com/file/d/1VU4xL_yF6LCe0UogVn4As5PMAzUV__8C/view?usp=sharing)
