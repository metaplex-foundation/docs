# Definitions

## Non-fungible tokens

NFTs on Solana can be characterized as a unique [SPL token](https://spl.solana.com/token) with a fixed supply of 1 with 0 decimals that have added metadata attached using the [Token Metadata Program](/programs/token-metadata/).

Below are the types of NFTs that can be created using Metaplex's Token Metadata program.

### Master Edition

A master edition token, when minted, represents both a non-fungible token on Solana and metadata that allows creators to control the provenance of prints created from the master edition.

Rights to create prints are tokenized itself, and the owner of the master edition can distribute tokens that allow users to create prints from master editions. Additionally, the creator can set the max supply of the master edition just like a regular mint on Solana, with the main difference being that each print is a numbered edition created from it.

A notable and desirable effect of master editions is that as prints are sold, the artwork will still remain visible in the artist's wallet as a master edition, while the prints appear in the purchaser's wallets.

### Print

A **print** (or `edition`) represents a copy of an NFT, and is created from a Master Edition. Each print has an edition number associated with it.

Prints can be created manually or through another program such as during a sale from the [Fixed Price Sale program](https://github.com/metaplex-foundation/metaplex-program-library/tree/master/fixed-price-sale).


### Normal NFT

A normal NFT when minted represents a non-fungible token on Solana and metadata, but lacks rights to print.

An example of a normal NFT would be an artwork that is a one-of-a-kind that, once sold, is no longer within the artist's own wallet, but is in the purchaser's wallet.

A normal NFT can be created by making a [Master Edition](#master-edition) with a max supply of 0.
