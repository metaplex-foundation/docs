---
slug: /terminology
---

# Terminology

## Non-fungible tokens

Metaplex's non-fungible-token standard is a part of the Solana Program Library (SPL), and can be characterized as a unique token with a fixed supply of 1 and 0 decimals. We extended the basic definition of an NFT on Solana to include additional metadata such as URI as defined in ERC-721 on Ethereum.

Below are the types of NFTs that can be created using the Metaplex protocol.

### Master Edition

A master edition token, when minted, represents both a non-fungible token on Solana and metadata that allows creators to control the provenance of prints created from the master edition.

Rights to create prints are tokenized itself, and the owner of the master edition can distribute tokens that allow users to create prints from master editions. Additionally, the creator can set the max supply of the master edition just like a regular mint on Solana, with the main difference being that each print is a numbered edition created from it.

A notable and desirable effect of master editions is that as prints are sold, the artwork will still remain visible in the artist's wallet as a master edition, while the prints appear in the purchaser's wallets.

### Print

A **print** represents a copy of an NFT, and is created from a Master Edition. Each print has an edition number associated with it.

Usually, prints are created as a part of an auction that has happened on Metaplex, but they could also be created by the creator manually.

For limited auctions, each print number is awarded based on the bid placement.

Prints can be created during [Open Edition](#open-edition) or [Limited Edition](#limited-edition) auction.

### Normal NFT

A normal NFT (like a Master Edition) when minted represents a non-fungible token on Solana and metadata, but lacks rights to print.

An example of a normal NFT would be an artwork that is a one-of-a-kind that, once sold, is no longer within the artist's own wallet, but is in the purchaser's wallet.

## Royalties

Metaplex can seamlessly create on-chain artist splits that remove the awkwardness out of collaboration.

Tag each collaborator, set custom percentages, and you’re off to the races. Each NFT can also be minted with configurable royalty payments that are then sent automatically back to the original creators whenever an artwork is resold on a Metaplex marketplace in the future.
