---
sidebar_label: Create NFT
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';
import { AccordionCode } from '/src/accordion-code.jsx';

# Introduction

In this guide you will learn how to use the Token Metadata Program to create NFT, pNFT, [SFT](../token-standard#the-fungible-asset-standard).

The Guide assumes that you already followed the [install guide](install) and have a umi instance in your project. It also assumes that your [JSON Metadata](../token-standard#the-non-fungible-standard) has already been uploaded and is accessible through an URI.

# Create a NFT

To create a NFT you will need to use the `createNft` method of the `mplTokenMetadata` program. This method takes various parameters to fit your needs. The following example shows how to create a NFT with a single creator and a 5.5% fee for the creator.

<Accordion>
<AccordionItem title="JavaScript — Umi library" open={true}>
<div className="accordion-item-padding">

```js
  import {
      generateSigner,
      percentAmount,
      PublicKey,
  } from "@metaplex-foundation/umi";
  import { createNft } from "@metaplex-foundation/mpl-token-metadata";
  const mint = generateSigner(umi);
  const name = "My NFT";
  const uri = "https://arweave.net/vpX_7jhYIWpZZTb_7E3SLEDvyB8KM7EBLTMSWKTjFL4";
  const symbol = "NB";
  const sellerFeeBasisPoints = percentAmount(5.5, 2);
  const creators = [
    {
      address: wallet.publicKey,
      verified: true, // this can only be true if the creator is a signer
      share: 100,
    }];

  await createNft(umi, {
    mint,
    name,
    symbol,
    uri,
    sellerFeeBasisPoints,
    creators,
  }).sendAndConfirm(umi);
````
</div>
</AccordionItem>
</Accordion>

This is one of the simplest configuration of NFT. You can also use the `createNft` method to create a NFT with multiple creators, define it as a `collection`, add `collectionDetails` and much more. You can find more information about the `createNft` method in the [API Reference]("https://mpl-token-metadata-js-docs.vercel.app/functions/createNft.html").

# Create a pNFT
Creating a pNFT is very similar to creating a NFT. The only difference is that you will have to add an aditional tokenStandard parameter. The following example is the same as above, but for minting a pNFT.

<Accordion>
<AccordionItem title="JavaScript — Umi library" open={true}>
<div className="accordion-item-padding">
To create a pNFT we just have to add `tokenStandard: TokenStandard.ProgrammableNonFungible`. To make use of that programmability feature we can also add a `ruleset`. In the example below the Metaplex recommended ruleset is used to enforce royalties.

```js
  import {
      generateSigner,
      percentAmount,
      PublicKey,
      some, // new import
  } from "@metaplex-foundation/umi";
  import { 
      createNft,
      TokenStandard // new import
   } from "@metaplex-foundation/mpl-token-metadata";
  const mint = generateSigner(umi);
  const name = "My NFT";
  const uri = "https://arweave.net/vpX_7jhYIWpZZTb_7E3SLEDvyB8KM7EBLTMSWKTjFL4";
  const symbol = "NB";
  const sellerFeeBasisPoints = percentAmount(5.5, 2);
  const creators = [
    {
      address: wallet.publicKey,
      verified: true,
      share: 100,
    }];

  await createNft(umi, {
    mint,
    name,
    symbol,
    uri,
    sellerFeeBasisPoints,
    creators,
    tokenStandard: TokenStandard.ProgrammableNonFungible, // new parameter
    ruleSet: some(publicKey("eBJLFYPxJmMGKuFwpDWkzxZeUrad92kZRC5BJLpzyT9")), // new parameter
  }).sendAndConfirm(umi);
````
</div>
</AccordionItem>
</Accordion>

Similar to the NFT example above, you can configure the pNFT to your needs. You can find more information about the `createNft` method in the [API Reference]("https://mpl-token-metadata-js-docs.vercel.app/functions/createNft.html").

# Create a SFT

Creating a SFT is very similar to creating a NFT. The only difference is that you will have to set the `tokenStandard` parameter to `TokenStandard.FungibleAsset`. The following example is the same as above, but for minting a SFT.