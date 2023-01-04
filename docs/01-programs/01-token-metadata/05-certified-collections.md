---
description: "All about the on-chain Metaplex Certified Collections spec."
---

# Certified Collections

## Introduction

Certified Collections enables NFTs – and tokens in general — **to be grouped together** and for that information to be **verified on-chain**. Additionally, it makes it easier to manage these collections by allocating data for them on-chain.

This feature provides the following advantages:

- Easy to identify which collection any given NFT belongs to without making additional on-chain calls.
- Possible to find all NFTs that belong to a given collection ([Check the FAQ to see how](./faq#how-can-i-filter-metadata-accounts-by-collection-using-getprogramaccounts)).
- Easy to manage the collection metadata such as its name, description and image.

:::info

The on-chain Certified Collection feature has been added to the Token Metadata program in [version 1.1](./changelog/v1.1). It replaces the `collection` field previously defined in external JSON metadata.

The additional CollectionDetails field has been added in [version 1.3](./changelog/v1.3).

:::

## Collection NFTs

In order to group NFTs — or any token — together, we must first create a Collection NFT whose purpose is to store any metadata related to that collection. That's right, **a collection of NFT is itself, an NFT**. It has the same data layout on-chain as any other NFT.

The difference between a Collection NFT and a Regular NFT is that the information provided by the former will be used to define the group of NFTs it contains whereas the latter will be used to define the NFT itself.


### Linking Regular NFTs to Collection NFTs.

Collection NFTs and Regular NFTs are **linked together using a "Belong To" relationship** on the Metadata account. The optional `Collection` field on the Metadata account has been created for that purpose.

- If the `Collection` field is set to `None`, it means the NFT is not part of a collection.
- If the `Collection` field is set, it means the NFT is part of the collection specified within that field.

As such, the `Collection` field contains two nested fields:

- `Key`: This field points to the Collection NFT the NFT belongs to. More precisely, it points to **the public key of the Mint Account** of the Collection NFT. This Mint Account must be owned by the SPL Token program.
- `Verified`: This boolean is very important as it is used to verify that the NFT is truly part of the collection it points to. More on that below.

### Differentiating Regular NFTs from Collection NFTs.

The `Collection` field alone allows us to link NFTs and Collections together but it doesn't help us identify if a given NFT is a Regular NFT or a Collection NFT. That's why the `CollectionDetails` field was created. It provides additional context on Collection NFTs and differentiate them from Regular NFTs.

- If the `CollectionDetails` field is set to `None`, it means the NFT is a **Regular NFT**.
- If the `CollectionDetails` field is set, it means the NFT is a **Collection NFT** and additional attributes can be found inside this field.

The `CollectionDetails` is an optional enum which currently contains only one option `V1`. This option is a struct that contains the following field:

- `Size`: The size of the collection, i.e. the number of NFTs that are directly linked to this Collection NFT. This number is automatically computed by the Token Metadata program but can also be set manually to facilitate the migration process.

Note that, because `CollectionDetails` is a new field, not all existing collections will use it yet. This means, **it is possible for a Collection NFT created before version 1.3, to have `CollectionDetails` set to `None` but to still be a Collection NFT**.

That being said, we encourage new collections to use it both to allow sizing their collections and provide an on-chain way to determine a Collection NFT from a Regular one. We also encourage existing collections to [migrate their Collection NFT](#migrating-to-sized-collections).


![](/assets/programs/token-metadata/Token-Metadata-Collections-Collection-NFT.png#radius)

### Nested Collections

Because Collections and NFTs are linked together via a "Belong To" relationship, it is possible by design to define nested collections. In this scenario, the `Collection` and `CollectionDetails` fields can be used together to differentiate Root and Nested Collection NFTs.

![](/assets/programs/token-metadata/Token-Metadata-Collections-Nested-Collection.png)

## Verifying NFTs in Collections

As mentioned above, the `Collection` field contains a `Verified` boolean which is used to **determine if the NFT is truly part of the collection it points to**. Without this field, anyone could pretend their NFT to be part of any collection.

![](/assets/programs/token-metadata/Token-Metadata-Collections-Verified-Collection.png#radius)

In order to flip that `Verified` boolean to `True`, the Authority of the Collection NFT must sign the NFT to prove that it is allowed to be part of the collection.

:::warning

**EXTREMELY IMPORTANT** 🚨

Explorers, Wallets and Marketplaces, **MUST CHECK** that `Verified` is true. `Verified` can only be set true if the Authority on the Collection NFT has run one of the Token Metadata `VerifyCollection` instructions over the NFT.

This is the same pattern as the `Creators` field where `Verified` must be true to validate the NFT.

In Order to check if a collection is valid on an NFT, it **MUST** have a collection struct set with:

* The `key` field matching the mint address of the appropriate collection parent
* The `verified` field set to `true`

If those two steps are not followed you could be exposing fraudulent NFTs on real collections.

:::

The following instructions are available to set, verify or unverify an NFT as part of a sized collection:

- [Verify a sized collection item](./instructions#verify-a-sized-collection-item) (Introduced in version 1.3)
- [Unverify a sized collection item](./instructions#unverify-a-sized-collection-item) (Introduced in version 1.3)
- [Set and verify a sized collection item](./instructions#set-and-verify-a-sized-collection-item) (Introduced in version 1.3)

If your Collection NFT does not yet have its `CollectionDetails` field setup, you must use the following instructions instead:

- [Verify a collection item](./instructions#verify-a-collection-item)
- [Unverify a collection item](./instructions#unverify-a-collection-item)
- [Set and verify a collection item](./instructions#set-and-verify-a-collection-item) (Introduced in version 1.2)

You may consider [migrating your Collection NFT](#migrating-to-sized-collections) instead.

## Delegating the Collection Authority

By default, only **the Update Authority of the Collection NFT can verify** that an NFT is part of that collection.

However, the Update Authority can also **delegate this responsibility** to other authorities. This allows us to delegate the ability to add NFTs to our collection to one or several trusted parties. These delegated Collection Authorities can then set, verify and/or unverify NFTs from this collection using the instructions listed in the previous section.

The following instructions enable us to approve and reject a Collection Authority:

- [Approve a new Collection Authority](./instructions#approve-a-new-collection-authority)
- [Revoke an existing Collection Authority](./instructions#revoke-an-existing-collection-authority)

## Set and verify a collection using collections.metaplex.com

Metaplex provides a helpful [web tool](https://collections.metaplex.com/) that allows us to create Collection NFTs and add verified NFTs to them.

You may use the following step to get started with that tool:

1. Visit [collections.metaplex.com](https://collections.metaplex.com/)
2. Connect your wallet, but first, verify this wallet is the Update Authority.
3. Select the cluster you want to work on — e.g. devnet, mainnet, etc.
4. Click on "**Create a Collection**".
5. Enter the name, symbol, logo, and description of your Collection NFT.
6. Choose between these three options:
   1. **Individual NFTs**: Insert the mint address of your NFTs.
   2. **First verified creator**: Insert the public key of the first creator defined in your NFTs. This can help with Candy Machines as the first creator address is derived from their public key.
   3. **CSV file**: Upload a CSV file that contains the list of mint addresses. The CSV file should contain all the public keys, separated by commas with no spaces.
7. Click "**Create Collection**" and two transaction approvals will be required.
   1. The first transaction approval will allow Metaplex to be the delegate to make the migration.
   2. The second transaction will create the parent Collection NFT.
8. After the parent Collection NFT is created, **the migration will start** in the background. You may close the tab and come back to it later with the same wallet to see the status.

:::warning

For a smoother experience, please consider the following points when using this tool:

- Always check Solana's network before you start up a migration. You can check here https://solscan.io.
- If a "Retry" button appears it could be due to network congestion, so click retry and monitor the network.
- If a "Fail to Migrate Collection" appears, it is likely because a wrong Update Authority was provided.

For all other issues regarding this tool, please visit our discord for further support.

:::

Note that the Metaplex team has recorded a video tutorial on how Verified Collections work and how to use the web tool mentioned above. You can [watch it here](https://drive.google.com/file/d/1VU4xL_yF6LCe0UogVn4As5PMAzUV__8C/view?usp=sharing):

<div style={{textAlign:'center'}}>

[![Verified Collections Tutorial](/assets/programs/token-metadata/verified-collections.gif#radius#shadow)](https://drive.google.com/file/d/1VU4xL_yF6LCe0UogVn4As5PMAzUV__8C/view?usp=sharing)

</div>

## Migrating to Sized Collections

If your Collection NFT was created before version 1.3, its `CollectionDetails` field will not be set. That means, wallets and applications will not be able to differentiate it with Regular NFTs and we won't know how many items are attached to the Collection NFT.

In order to facilitate the migration of your Collection NFT to a Sized Collection NFT, there is a new instruction available: [Set a collection size](./instructions#set-collection-size). This instruction allows you to set the number of items that are currently attached to the Collection NFT **once**. Afterwards, this information will only be tracked on-chain.
