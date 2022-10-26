---
description: "Restricts the mint to holders of a specified collection."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# NFT Gate

## Overview

The **NFT Gate** guard restricts minting to holders of a specified NFT collection.

![CandyMachinesV3-GuardsNFTGate.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsNFTGate.png#radius)

## Guard Settings

The NFT Gate guard contains the following settings:

- **Required Collection**: The mint address of the required NFT Collection. The NFT we provide as proof when minting must be part of this collection.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

Here’s an example of how to set up a Candy Machine using the NFT Gate guard.

```tsx
const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    nftGate: {
      requiredCollection: requiredCollectionNft.address,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.NftGateGuardSettings.html).

</div>
</AccordionItem>
</Accordion>    

## Mint Settings

The NFT Gate guard contains the following Mint Settings:

- **Mint**: The mint address of the NFT to provide as proof that the payer owns an NFT from the required collection.
- **Token Account** (optional): You may optionally provide the token account linking the NFT with its owner explicitly. By default, the associated token account of the payer will be used.

Note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-guard#nftgate) for more details.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

When minting via the JS SDK, simply provide the mint address of the NFT to use as proof of ownership via the `mint` attribute like so.

```tsx
const { nft } = await metaplex.candyMachines().mint({
  // ...
  settings: {
    nftGate: {
      mint: nftFromRequiredCollection.address,
    },
  }
});
```

You may also provide the `tokenAccount` attribute explicitly should the NFT not use an associated token account.

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint), [Input](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint), [Mint Settings](https://metaplex-foundation.github.io/js/types/js.NftGateGuardMintSettings.html).

</div>
</AccordionItem>
</Accordion>    

## Route Instruction

*The NFT Gate guard does not support the route instruction.*
