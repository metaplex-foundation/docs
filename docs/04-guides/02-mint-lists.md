---
sidebar_label: "How to get Your Mint List"
---

# Mint Account List ("Hash List")


Third-party marketplaces often request a "hash list", more appropriately called a "mint list", of NFTs in order to create a collection for listing. This is due to the fact that there is currently no on-chain Collection standard on Mainnet Beta (Coming soon!). The "hash list" is a list of the mint accounts of all the NFTs in your collection and allows the marketplace to determine which NFTs belong in your collection and which do not. 

The typical method to create the mint list is to a use a tool that finds all NFTs with a specific creator in the first position of the creators array. If your NFTs were minted with a candy machine this will be the candy machine creator id by default. If you have multiple candy machines that are part of the collection, you can create a separate mint list for each candy machine and combine them together to create a single mint list which you provide to the marketplace(s) you are listing with. 

:::info

Candy Machine v2 has a separate `candy_machine_id` found in your cache file which identifies the candy machine on-chain, and a `candy_machine_creator_id` that it uses to sign the NFT by placing it as a verified creator in the creators array. 

:::

If you minted through the storefront or modified your NFTs to accommodate Phantom's collection ordering requirements, you might instead need to search by your creator wallet, if it is in the first position of the creators array.

:::warning

Metaplex recommends only using tools that check for a *verified* creator, otherwise fake NFTs could end up on your list. The tools below are the ones we know of currently that check for a verified creator. If you have a tool that supports this, contact us, and we'll add it to the list.

:::

The following third-party tools can be used to generate the mint list:

* [Famous Foxes Snapshot](https://famousfoxes.com/snapshot)
A web application to create mint lists as well as holder snapshots.

Usage: input your first creator, candy machine creator id or collection key in the Mints tab with the appropriate option.

* [Sol-NFT Tools](https://sol-nft.tools)
A web-based tool that allows you to generate a mint list and has other useful features as well. Easiest to use for non-developers.

Usage: put in your creator or candy machine creator id into the "Get Mint IDs" tab.

* [Magic Eden Hash List Finder](https://magiceden.io/mintlist-tool)
A web-based tool that allows you to generate a mint list.

Usage: put in your verified candy machine creator id or verified first creator address.

* [Metaboss](https://github.com/samuelvanderwaal/metaboss)
A tool primarily targeted at developers which has a `snapshot mints` command for getting mint lists and many other useful features.

Usage: see https://metaboss.rs.

:::info

Metaplex does not maintain the tools listed above. If you have issues with them please create issues in the appropriate GitHub repository, or ask in a general channel on the Discord to get help from community members.

:::
