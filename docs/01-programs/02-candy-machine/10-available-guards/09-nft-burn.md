---
description: "Restricts the mint to holders of a specified collection, requiring a burn of the NFT."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# NFT Burn

## Overview

The **NFT Burn** guard restricts the mint to holders of a predefined NFT Collection and burns the holder's NFT. Thus, the mint address of the NFT to burn must be provided by the payer when minting.

![CandyMachinesV3-GuardsNFTBurn.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsNFTBurn.png#radius)

## Guard Settings

The NFT Burn guard contains the following settings:

- **Required Collection**: The mint address of the required NFT Collection. The NFT we use to mint with must be part of this collection.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the NFT Burn guard.

```ts
create(umi, {
  // ...
  guards: {
    nftBurn: some({ requiredCollection: requiredCollectionNft.publicKey }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [NftBurn](https://mpl-candy-machine-js-docs.vercel.app/types/NftBurn.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s an example of how to set up a Candy Machine using the NFT Burn guard.

```tsx
const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    nftBurn: {
      requiredCollection: requiredCollectionNft.address,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.NftBurnGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

The NFT Burn guard contains the following Mint Settings:

- **Required Collection**: The mint address of the required NFT Collection.
- **Mint**: The mint address of the NFT to burn. This must be part of the required collection and must belong to the minter.
- **Token Standard**: The token standard of the NFT to burn.
- **Token Account** (optional): You may optionally provide the token account linking the NFT with its owner explicitly. By default, the associated token account of the payer will be used.

Note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#nftburn) for more details.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

You may pass the Mint Settings of the NFT Burn guard using the `mintArgs` argument like so.

```ts
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";

mintV2(umi, {
  // ...
  mintArgs: {
    nftBurn: some({
      requiredCollection: requiredCollectionNft.publicKey,
      mint: nftToBurn.publicKey,
      tokenStandard: TokenStandard.NonFungible,
    }),
  },
});
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [NftBurnMintArgs](https://mpl-candy-machine-js-docs.vercel.app/types/NftBurnMintArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

When minting via the JS SDK, simply provide the mint address of the NFT to burn via the `mint` attribute like so.

Note that the JS SDK does not require the Required Collection to be passed in since it can get it from the provided Candy Machine model. It also does not require the Token Standard as it does not support minting Programmable NFTs.

```ts
const { nft } = await metaplex.candyMachines().mint({
  // ...
  guards: {
    nftBurn: {
      mint: nftToBurn.address,
    },
  },
});
```

You may also provide the `tokenAccount` attribute explicitly should the NFT not use an associated token account.

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint), [Input](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint), [Mint Settings](https://metaplex-foundation.github.io/js/types/js.NftBurnGuardMintSettings.html).

</div>
</AccordionItem>
</Accordion>

## Route Instruction

_The NFT Burn guard does not support the route instruction._
