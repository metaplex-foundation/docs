# Overview

The Token Metadata contract can be used for storing generic metadata about any given mint, whether NFT or not. Metadata allows storage of name, symbol, and URI to an external resource. Additionally, the Metadata allows for the tracking of creators, primary sales, and seller fees. Once the mint has been created, the mint authority can use the SPL Metadata program to create metadata as described in this document.

Minting an NFT requires creating a new SPL Mint with the supply of one and decimals zero as described [https://spl.solana.com/token#example-create-a-non-fungible-token](https://spl.solana.com/token#example-create-a-non-fungible-token)

Below is the Rust representation of the structs that are stored on-chain.

```rust

#[repr(C)]
#[derive(BorshSerialize, BorshDeserialize, PartialEq, Debug, Clone)]
pub struct Data {
    /// The name of the asset
    pub name: String,
    /// The symbol for the asset
    pub symbol: String,
    /// URI pointing to JSON representing the asset
    pub uri: String,
    /// Royalty basis points that goes to creators in secondary sales (0-10000)
    pub seller_fee_basis_points: u16,
    /// Array of creators, optional
    pub creators: Option<Vec<Creator>>,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Debug)]
pub struct Metadata {
    pub key: Key,
    pub update_authority: Pubkey,
    pub mint: Pubkey,
    pub data: Data,
    // Immutable, once flipped, all sales of this metadata are considered secondary.
    pub primary_sale_happened: bool,
    // Whether or not the data struct is mutable, default is not
    pub is_mutable: bool,
}

#[repr(C)]
#[derive(Clone, Debug, PartialEq, BorshSerialize, BorshDeserialize)]
pub struct MasterEdition {
    pub key: Key,
    pub supply: u64,
    pub max_supply: Option<u64>,
}

#[repr(C)]
#[derive(Clone, Debug, PartialEq, BorshSerialize, BorshDeserialize)]
/// All Editions should never have a supply greater than 1.
/// To enforce this, a transfer mint authority instruction will happen when
/// a normal token is turned into an Edition, and in order for a Metadata update authority
/// to do this transaction they will also need to sign the transaction as the Mint authority.
pub struct Edition {
    pub key: Key,

    /// Points at MasterEdition struct
    pub parent: Pubkey,

    /// Starting at 0 for master record, this is incremented for each edition minted.
    pub edition: u64,
}

#[repr(C)]
#[derive(BorshSerialize, BorshDeserialize, PartialEq, Debug, Clone)]
pub struct Creator {
    pub address: Pubkey,
    pub verified: bool,
    // In percentages, NOT basis points ;) Watch out!
    pub share: u8,
}

#[repr(C)]
#[derive(BorshSerialize, BorshDeserialize, PartialEq, Debug, Clone)]
pub struct EditionMarker {
    pub key: Key,
    pub ledger: [u8; 31],
}

```

The instruction set for the token metadata contract can be found [here](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/token-metadata/program/src/instruction.rs).

### Types

### Metadata

This object can be used to provide basic info about SPL tokens on Solana, which include the name, symbol, URI and seller fees, as well as whether or not the sale of this metadata has happened yet. Anybody carrying a token from this mint can mark this primary sale as having happened via the `update_primary_sale_happened_via_token` command. There is obviously no incentive for a primary owner to do this as it precludes them from getting full royalties on the first sale, but a secondary owner must do this if they ever want to see fees from selling!

Metadata accounts are simply PDA addresses with derived key of `['metadata', token_metadata_program_id, mint_id]`.

### Master Edition

In addition to simple metadata, a Master Edition object can be created. Master Editions act similar to a token mint and allows the holder to create new number editions while tracking provenance of the items. A Master Edition token, when minted, represents both a non-fungible token on Solana and metadata that allows creators to control the provenance of prints created from the master edition. A Master Edition object can only be created for mints with supply of one and decimals of zero.

The creator can set the maximum supply of the master edition just like a regular mint on Solana, with the main difference being that each print is a numbered edition created from it. To mint a new limited edition, this master edition token must be presented, along with a new mint + token, to the `mint_new_edition_from_master_edition_via_token` endpoint.

Master Edition accounts are PDA addresses of `['metadata', token_metadata_program_id, mint_id, 'edition']`.

### Edition

An edition represents a copy of an NFT, and is created from a Master Edition. Each print has an edition number associated with it. Normally, prints can be created during Open Edition or Limited Edition auction, but they could also be created by the creator manually.

Editions are created by presenting the Master Edition token, along with a new mint that lacks a Metadata account and a token account containing one token from that mint to the `mint_new_edition_from_master_edition_via_token` endpoint. This endpoint will create both an immutable Metadata based on the parent Metadata and a special Edition struct based on the parent Master Edition struct.

The Edition has the same PDA as a Master Edition to force collision and prevent a user from having a mint with both, `['metadata', token_metadata_program_id, mint_id, 'edition']`.

## Concepts

### Decoration as PDA Extensions

The whole idea of the Token Metadata program is to be a decorator to a Token Mint. Each struct acts as further decoration. The Metadata struct gives a mint a name and a symbol and points to some external URI that can be anything. The Master Edition gives it printing capabilities. The Edition labels it as a child of something.

This is important to internalize, because it means you as a Rust developer can take it a step further. There is nothing stopping you from building a new contract on top of ours that makes it's own PDAs and and extending this still further. Why not build a CookingRecipes PDA, that has seed `['your-app', your_program_id, mint_id, 'recipes']`? You can require that a Metadata PDA from our contract exists to make a PDA in your program, and then you can further decorate mints on top of our decorations. The idea is to compose mints with further information than they ever had before, and then build clients that can consume that information in new and interesting ways.

### Co-Creators

The Token Metadata program supports storing up to five co-creators that share potential future profits from sales for the items as defined by `seller_fee_basis_points` . Each creator needs to be added as part of the minting process and is required to approve metadata that was used in his name using the `sign_metadata` endpoint. Unverified artwork cannot be sold with Metaplex.

During the first sale, creators share in 100% of the proceeds, while in follow up sales, they share in proceeds as a percentage determined by `seller_fee_basis_points`. Whether or not a metadata is considered in second sale or not is determined by the `primary_sale_happened` boolean on the Metadata account.

### URI JSON Schema

The URI resource is compatible with [ERC-1155 JSON Schema](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1155.md#erc-1155-metadata-uri-json-schema) in order to easily port NFTs across different chains using the wormhole bridge. You can see how we build this in our reference implementation here: [https://github.com/metaplex-foundation/metaplex/blob/master/js/packages/web/src/actions/nft.tsx#L66](https://github.com/metaplex-foundation/metaplex/blob/master/js/packages/web/src/actions/nft.tsx#L66)

```jsx
{
    "title": "Token Metadata",
    "type": "object",
    "properties": {
        "name": {
            "type": "string",
            "description": "Identifies the asset to which this token represents"
        },
        "description": {
            "type": "string",
            "description": "Describes the asset to which this token represents"
        },
        "image": {
            "type": "string",
            "description": "A URI pointing to a resource with mime type image/* representing the asset to which this token represents. Consider making any images at a width between 320 and 1080 pixels and aspect ratio between 1.91:1 and 4:5 inclusive."
        },
				"external_url": {
            "type": "string",
            "description": "A URI pointing to an external resource that will take user outside of the platform."
        },
				"seller_fee_basis_points": {
						"type": "number",

				},
        "properties": {
            "type": "object",
            "description": "Arbitrary properties. Values may be strings, numbers, object or arrays.",
				    "properties": {
								"creators": {
										"type": "array",
										"description": "Contains list of creators, each with Solana address and share of the nft"
								},
						}
        }
    }
}
```
