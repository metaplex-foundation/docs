---
description: "Explains Candy Machine settings in great detail."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Candy Machine Settings

## Introduction

On this page, we’re going to dig into all the settings available on a Candy Machine. We will focus on settings that affect the Candy Machine itself and the NFTs it generates rather than the settings that affect the minting process known as Guards. We will tackle the latter in dedicated pages.

## The authority

One of the most important pieces of information when creating accounts on Solana is the wallet that is allowed to manage them, known as the **Authority**. Thus, when creating a new Candy Machine, you will need to provide the address of the authority that will, later on, be able to update it, insert items to it, delete it, etc.

There is an additional authority specifically for the minting process called the **Mint Authority**. When a Candy Machine is created without a Candy Guard, this authority is the only wallet that is allowed to mint from the Candy Machine. No one else can mint. However, in practice, this mint authority is set to the address of a Candy Guard which controls the minting process based on some preconfigured sets of rules known as **guards**.

It is important to note that, when using our SDKs, Candy Machines will always be created with an associated Candy Guard by default so you do not need to worry about this mint authority.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

When creating a new Candy Machine, the authority will default to the Umi identity. You may explicitly set this authority by providing a valid signer to the `authority` property.

```tsx
import { generateSigner } from "@metaplex-foundation/umi";

const myCustomAuthority = generateSigner(umi);
const candyMachineSettings = {
  authority: myCustomAuthority,
};
```

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

When using the JS SDK, the authority of a Candy Machine will always default to the current identity. You may explicitly set this authority by providing a valid signer to the `authority` property.

```tsx
import { Keypair } from "@solana/web3.js";

const myCustomAuthority = Keypair.generate();
const candyMachineSettings = {
  authority: myCustomAuthority,
};
```

</div>
</AccordionItem>
</Accordion>

## Settings shared by all NFTs

A big chunk of the Candy Machine settings is used to define the NFTs that will be minted from them. This is because many of the NFT attributes will be the same for all minted NFTs. Therefore, instead of having to repeat these attributes every time we load an item in the Candy Machine, we set them up once on the Candy Machine settings.

Note that the only attributes that can distinguish one minted NFT from another are the **Name** of the NFT and the **URI** pointing to its JSON metadata. See [Inserting Items](/programs/candy-machine/inserting-items) for more information.

Here is the list of attributes shared between all minted NFTs.

- **Seller Fee Basis Points**: The secondary sale royalties that should be set on minted NFTs in basis points. For instance `250` means `2.50%` royalties.
- **Symbol**: The symbol to use on minted NFTs — e.g. "MYPROJECT". This can be any text up to 10 characters and can be made optional by providing an empty text.
- **Max Edition Supply**: The maximum number of editions that can be printed from the minted NFTs. For most use cases, you will want to set this to `0` to prevent minted NFTs to be printed multiple times. Note that you cannot set this to `null` which means unlimited editions are not supported in Candy Machines.
- **Is Mutable**: Whether the minted NFTs should be mutable or not. We recommend setting this to `true` unless you have a specific reason. You can always make NFTs immutable in the future but you cannot make immutable NFTs mutable ever again.
- **Creators**: A list of creators that should be set on minted NFTs. It includes their address and their shares of the royalties in percent — i.e. `5` is `5%`. Note that the Candy Machine address will always be set as the first creator of all minted NFTs and will automatically be verified. This makes it possible for anyone to verify that an NFT was minted from a trusted Candy Machine. All other provided creators will be set after that and will need to be verified manually by these creators.
- **Token Standard**: The [token standard](../token-metadata/token-standard) to use on minted NFTs. So far only two token standards are supported: "[NonFungible](/programs/token-metadata/token-standard#the-non-fungible-standard))" and "[ProgrammableNonFungible](/programs/token-metadata/token-standard#the-programmable-non-fungible-standard)". Note that this is only available for Candy Machines whose _account version_ is 2 and above.
- **Rule Set**: If a candy machine uses the "ProgrammableNonFungible" token standard, it can provide an explicit rule set that will be assigned to every minted programmable NFT. If no rule set is provided, it will default to using the rule set on the collection NFT, if any. Otherwise programmable NFTs will be minted without a rule set. Note that this is only available for Candy Machines whose _account version_ is 2 and above.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

From the attributes listed above, only the `sellerFeeBasisPoints`, `creators` and `tokenStandard` attributes are required. The other attributes have the following default values:

- `symbol` defaults to an empty string — i.e. minted NFTs don’t use symbols.
- `maxEditionSupply` defaults to zero — i.e. minted NFTs are not printable.
- `isMutable` defaults to `true`.

You may explicitly provide any of these attributes like so.

```tsx
import { percentAmount, generateSigner, some } from "@metaplex-foundation/umi";
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";

const creatorA = generateSigner(umi).publicKey;
const creatorB = generateSigner(umi).publicKey;
const candyMachineSettings = {
  tokenStandard: TokenStandard.NonFungible,
  sellerFeeBasisPoints: percentAmount(33.3, 2),
  symbol: "MYPROJECT",
  maxEditionSupply: 0,
  isMutable: true,
  creators: [
    { address: creatorA, percentageShare: 50, verified: false },
    { address: creatorB, percentageShare: 50, verified: false },
  ],
};
```

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

:::info
The JS SDK is only compatible with Candy Machine V3 accounts whose account version is 1. That means, it does not support minting programmable NFTs and it is not compatible with Candy Machines created with the latest version of [Sugar](/developer-tools/sugar/overview/introduction).

You may consider [using the Umi library](/programs/candy-machine/getting-started#umi-library-recommended) instead which supports all account versions of Candy Machine V3. Alternatively, you may downgrade you Sugar version to `2.0.0` or use the Solita-generated library.

See [Programmable NFTs](/programs/candy-machine/programmable-nfts) for more details.
:::

When creating a Candy Machine, only the `sellerFeeBasisPoints` attribute is required out of the attributes listed above. The other attributes have the following default values:

- `symbol` defaults to an empty string — i.e. minted NFTs don’t use symbols.
- `maxEditionSupply` defaults to zero — i.e. minted NFTs are not printable.
- `isMutable` defaults to `true`.
- `creators` defaults to the current identity with 100% of the shares.

You may explicitly provide any of these attributes like so.

```tsx
import { toBigNumber } from "@metaplex-foundation/js";
import { Keypair } from "@solana/web3.js";

const creatorA = Keypair.generate();
const creatorB = Keypair.generate();
const candyMachineSettings = {
  sellerFeeBasisPoints: 200,
  symbol: "MYPROJECT",
  maxEditionSupply: toBigNumber(0),
  isMutable: true,
  creators: [
    { address: creatorA.publicKey, share: 50 },
    { address: creatorB.publicKey, share: 50 },
  ],
};
```

</div>
</AccordionItem>
</Accordion>

## Metaplex Certified Collections

Each Candy Machine must be associated with a special NFT known as a [Metaplex Certified Collection (MCC)](/programs/token-metadata/certified-collections). This **Collection NFT** enables minted NFTs to be grouped together
and for that information to be verified on-chain.

To ensure no one else can use your Collection NFT on their Candy Machine, the **Collection's Update Authority** is required to sign any transaction that changes the Collection on a Candy Machine. As a result, the Candy Machine can safely verify the Collection of all minted NFTs automatically.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

When creating a new candy machine or when updating its collection NFT, you will need to provide the following attributes:

- `collectionMint`: The address of the mint account of the Collection NFT.
- `collectionUpdateAuthority`: The update authority of the Collection NFT as a signer.

Here’s an example.

```tsx
import { generateSigner, percentAmount } from "@metaplex-foundation/umi";
import { createNft } from "@metaplex-foundation/mpl-token-metadata";

// Create the Collection NFT.
const collectionUpdateAuthority = generateSigner(umi);
const collectionMint = generateSigner(umi);
await createNft(umi, {
  mint: collectionMint,
  authority: collectionUpdateAuthority,
  name: "My Collection NFT",
  uri: "https://example.com/path/to/some/json/metadata.json",
  sellerFeeBasisPoints: percentAmount(9.99, 2), // 9.99%
  isCollection: true,
}).sendAndConfirm(umi);

// Pass the collection address and its authority in the settings.
const candyMachineSettings = {
  collectionMint: collectionMint.publicKey,
  collectionUpdateAuthority,
};
```

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

When creating a new Candy Machine or updating the collection of a Candy Machine, you will need to provide the `collection` attribute as an object containing the following properties:

- `address`: The address of the mint account of the Collection NFT.
- `updateAuthority`: The update authority of the Collection NFT as a signer.

Here’s an example.

```tsx
import { Keypair } from "@solana/web3.js";

// Create the Collection NFT.
const collectionAuthority = Keypair.generate();
const { nft: collectionNft } = await metaplex.nfts().create({
  name: "My Collection NFT",
  uri: "https://example.com/path/to/some/json/metadata.json",
  sellerFeeBasisPoints: 0,
  isCollection: true,
  updateAuthority: collectionAuthority,
});

// Pass the Collection NFT and its authority in the settings.
const candyMachineSettings = {
  collection: {
    address: collectionNft.address,
    updateAuthority: collectionAuthority,
  },
};
```

</div>
</AccordionItem>
</Accordion>

## Item Settings

Candy Machine settings also contain information regarding the items that are or will be loaded inside it. The **Items Available** attribute falls in that category and stores the maximum amount of NFTs that will be minted from the Candy Machine.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

When creating a new Candy Machine, the `itemsAvailable` attribute is required and may be a number or a native `bigint` for large integers.

```tsx
const candyMachineSettings = {
  itemsAvailable: 500,
};
```

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

When creating a new Candy Machine, the `itemsAvailable` attribute is required and must be passed like so.

```tsx
import { toBigNumber } from "@metaplex-foundation/js";

const candyMachineSettings = {
  itemsAvailable: toBigNumber(500),
};
```

</div>
</AccordionItem>
</Accordion>

On top of the **Items Available** attribute, two other attributes define how items are loaded in the Candy Machine. You must choose exactly one of these attributes and leave the other one empty. These attributes are:

- The **Config Line Settings**.
- The **Hidden Settings**.

Note that once a Candy Machine is created using one of these two modes, it cannot be updated to use the other mode. Additionally, when **Config Line Settings** are used, it is no longer possible to update the **Items Available** attribute.

Let’s go through both of them in a bit more detail.

### Config Line Settings

The **Config Line Settings** attribute allows us to describe the items that are or will be inserted inside our Candy Machine. It enables us to keep the size of the Candy Machine to a minimum by providing exact lengths for the **Names** and **URIs** of our items as well as providing some shared prefixes to reduce that length. The **Config Line Settings** attribute is an object containing the following properties:

- **Name Prefix**: A name prefix shared by all inserted items. This prefix can have a maximum of 32 characters.
- **Name Length**: The maximum length for the name of each inserted item excluding the name prefix.
- **URI Prefix**: A URI prefix shared by all inserted items. This prefix can have a maximum of 200 characters.
- **URI Length**: The maximum length for the URI of each inserted item excluding the URI prefix.
- **Is Sequential**: Indicates whether to mint NFTs sequentially — `true` — or in random order — `false`. We recommend setting this to `false` to prevent buyers from predicting which NFT will be minted next. Note that our SDKs will default to using Config Line Settings with Is Sequential set to `false` when creating new Candy Machines.

To understand these **Name** and **URI** properties a bit better, let’s go through an example. Say you want to create a Candy Machine with the following characteristics:

- It contains `1000` items.
- The name of each item is “My NFT Project #X” where X is the item’s index starting from 1.
- Each item’s JSON metadata has been uploaded to Arweave so their URIs start with “https://arweave.net/” and finish with a unique identifier with a maximum length of 43 characters.

In this example, without prefixes, we would end up with:

- Name Length = 20. 16 characters for “My NFT Project #” and 4 characters for the highest number which is “1000”.
- URI Length = 63. 20 characters for “https://arweave.net/” and 43 characters for the unique identifier.

When inserting 1000 items, that’s a total of 83’000 characters that will be required just for storing items. However, if we use prefixes, we can significantly reduce the space needed to create our Candy Machine and, therefore, the cost of creating it on the blockchain.

- Name Prefix = “My NFT Project #”
- Name Length = 4
- URI Prefix = “https://arweave.net/”
- URI Length = 43

With 1000 items, we now only need 47’000 characters to store our items.

But that’s not it! You may use **two special variables** within your name or URI prefixes to reduce that size even further. These variables are:

- `$ID$`: This will be replaced by the index of the item starting at 0.
- `$ID+1$`: This will be replaced by the index of the item starting at 1.

In our above example, we could leverage the `$ID+1$` variable for the name prefix so we wouldn’t need to insert it on every item. We end up with the following Config Line Settings:

- Name Prefix = “My NFT Project #$ID+1$”
- Name Length = 0
- URI Prefix = “https://arweave.net/”
- URI Length = 43

That’s right, **our name length is now zero** and we’ve reduced the characters needed down to 43’000 characters.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

When using Umi, you can use the `some` and `none` helper functions to tell the library whether to use Config Line Settings or Hidden Settings via the `configLineSettings` and `hiddenSettings` attributes respectively. Only one of these settings must be used, thus, one of them must be configured and the other one must be set to `none()`.

Here’s a code snippet showing how you can set up the above example using the Umi library.

```tsx
import { some, none } from "@metaplex-foundation/umi";

const candyMachineSettings = {
  hiddenSettings: none(),
  configLineSettings: some({
    prefixName: "My NFT Project #$ID+1$",
    nameLength: 0,
    prefixUri: "https://arweave.net/",
    uriLength: 43,
    isSequential: false,
  }),
};
```

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

When using the JS SDK, both **Config Line Settings** and **Hidden Settings** live under the same object attribute called `itemSettings`. It contains a `type` property used to distinguish the two modes. This ensures exactly one of these settings is used on a Candy Machine.

- When `type` is equal to `"configLines"`, Config Line Settings are used.
- When `type` is equal to `"hidden"`, Hidden Settings are used.

Here’s a code snippet showing how you can set up the above example using the SDK.

```tsx
const candyMachineSettings = {
  itemSettings: {
    type: "configLines",
    prefixName: "My NFT Project #$ID+1$",
    nameLength: 0,
    prefixUri: "https://arweave.net/",
    uriLength: 43,
    isSequential: false,
  },
};
```

</div>
</AccordionItem>
</Accordion>

### Hidden Settings

Another way of preparing items is by using **Hidden Settings**. This is a completely different approach than Config Line Settings as, using Hidden Settings, you do not need to insert any items to the Candy Machine as every single minted NFT will share the same name and the same URI. You might be wondering: why would someone want to do that? The reason for that is to create a **hide-and-reveal NFT drop** that reveals all NFTs after they have been minted. So how does that work?

- First, the creator configures the name and the URI of every minted NFTs using the Hidden Settings. The URI usually points to a “teaser” JSON metadata that makes it clear that a reveal is about to happen.
- Then, buyers mint all these NFTs with the same URI and therefore the same “teaser” JSON metadata.
- Finally, when all NFTs have been minted, the creator updates the URI of every single minted NFT to point to the real URI which is specific to that NFT.

The issue with that last step is that it allows creators to mess with which buyer gets which NFTs. To avoid that and allow buyers to verify the mapping between NFTs and JSON metadata was not tampered with, the Hidden Settings contains a **Hash** property which should be filled with a 32-character hash of the file that maps NFT indices with their real JSON metadata. That way, after the reveal, the creator can make that file public and buyers and verify that its hash corresponds to the hash provided in the Hidden Settings.

Therefore, we end up with the following properties on the Hidden Settings attribute:

- **Name**: The “hidden” name for all minted NFTs. This can have a maximum of 32 characters.
- **URI**: The “hidden” URI for all minted NFTs. This can have a maximum of 200 characters.
- **Hash**: The 32-character hash of the file that maps NFT indices with their real JSON metadata allowing buyers to verify it was not tampered with.

Note that, just like for the prefixes of the Config Line Settings, special variables can be used for the **Name** and **URI** of the Hidden Settings. As a reminder, these variables are:

- `$ID$`: This will be replaced by the index of the minted NFT starting at 0.
- `$ID+1$`: This will be replaced by the index of the minted NFT starting at 1.

Also note that, since we are not inserting any item to the Candy Machine, Hidden Settings make it possible to create very large drops. The only caveat is that there is a need for an off-chain process to update the name and URI of each NFT after the mint.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

When using Umi, you can use the `some` and `none` helper functions to tell the library whether to use Config Line Settings or Hidden Settings via the `configLineSettings` and `hiddenSettings` attributes respectively. Only one of these settings must be used, thus, one of them must be configured and the other one must be set to `none()`.

Here’s a code snippet showing how you can set up the above example using the Umi library.

```tsx
import { some, none } from "@metaplex-foundation/umi";

const candyMachineSettings = {
  configLineSettings: none(),
  hiddenSettings: some({
    name: "My NFT Project #$ID+1$",
    uri: "https://example.com/path/to/teaser.json",
    hash: hashOfTheFileThatMapsUris,
  }),
};
```

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

When using the JS SDK, both **Config Line Settings** and **Hidden Settings** live under the same object attribute called `itemSettings`. It contains a `type` property used to distinguish the two modes. This ensures exactly one of these settings is used on a Candy Machine.

- When `type` is equal to `"configLines"`, Config Line Settings are used.
- When `type` is equal to `"hidden"`, Hidden Settings are used.

Here’s a code snippet showing how you can use Hidden Settings via the JS SDK.

```tsx
const candyMachineSettings = {
  itemSettings: {
    type: "hidden",
    name: "My NFT Project #$ID+1$",
    uri: "https://example.com/path/to/teaser.json",
    hash: hashOfTheFileThatMapsUris,
  },
};
```

</div>
</AccordionItem>
</Accordion>

## Guards and Groups

As mentioned in the introduction, this page focuses on the main Candy Machine settings but there is a lot more you can configure on a Candy Machine by using guards.

Since this is a vast subject with a lot of available default guards to explain, we’ve dedicated an entire section of this documentation to it. The best place to start is the [Candy Guards](/programs/candy-machine/candy-guards) page.

## Conclusion

Now that we know about how the main Candy Machine settings, on [the next page](/programs/candy-machine/managing-candy-machines), we’ll see how we can use them to create and update our own Candy Machines.
