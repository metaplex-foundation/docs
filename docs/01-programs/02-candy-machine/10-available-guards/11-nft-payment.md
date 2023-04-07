---
description: "Set the price of the mint as an NFT of a specified collection."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# NFT Payment

## Overview

The **NFT Payment** guard allows minting by charging the payer an NFT from a specified NFT collection. The NFT will be transferred to a predefined destination.

If the payer does not own an NFT from the required collection, minting will fail.

![CandyMachinesV3-GuardsNFTPayment.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsNFTPayment.png#radius)

## Guard Settings

The NFT Payment guard contains the following settings:

- **Required Collection**: The mint address of the required NFT Collection. The NFT we use to pay with must be part of this collection.
- **Destination**: The address of the wallet that will receive all NFTs.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s an example of how to set up a Candy Machine using the NFT Payment guard. You may use any wallet as a destination but, in this example, we’ll use the address of the current identity.

```ts
create(umi, {
  // ...
  guards: {
    nftPayment: some({
      requiredCollection: requiredCollectionNft.publicKey,
      destination: umi.identity.publicKey,
    }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [NftPayment](https://mpl-candy-machine-js-docs.vercel.app/types/NftPayment.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s an example of how to set up a Candy Machine using the NFT Payment guard. You may use any wallet as a destination but, in this example, we’ll use the address of the current identity.

```tsx
const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    nftPayment: {
      requiredCollection: requiredCollectionNft.address,
      destination: metaplex.identity().publicKey,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.NftPaymentGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

The NFT Payment guard contains the following Mint Settings:

- **Destination**: The address of the wallet that will receive all NFTs.
- **Mint**: The mint address of the NFT to pay with. This must be part of the required collection and must belong to the minter.
- **Token Standard**: The token standard of the NFT used to pay.
- **Token Account** (optional): You may optionally provide the token account linking the NFT with its owner explicitly. By default, the associated token account of the payer will be used.
- **Rule Set** (optional): The Rule Set of the NFT used to pay, if we are paying using a Programmable NFT with a Rule Set.

Note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#nftpayment) for more details.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

You may pass the Mint Settings of the NFT Payment guard using the `mintArgs` argument like so.

```ts
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";

mintV2(umi, {
  // ...
  mintArgs: {
    nftPayment: some({
      destination,
      mint: nftToPayWith.publicKey,
      tokenStandard: TokenStandard.NonFungible,
    }),
  },
});
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [NftPaymentMintArgs](https://mpl-candy-machine-js-docs.vercel.app/types/NftPaymentMintArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

When minting via the JS SDK, simply provide the mint address of the NFT to pay with via the `mint` attribute like so.

```tsx
const { nft } = await metaplex.candyMachines().mint({
  // ...
  guards: {
    nftPayment: {
      mint: nftToPayWith.address,
    },
  },
});
```

You may also provide the `tokenAccount` attribute explicitly should the NFT not use an associated token account.

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint), [Input](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint), [Mint Settings](https://metaplex-foundation.github.io/js/types/js.NftPaymentGuardMintSettings.html).

</div>
</AccordionItem>
</Accordion>

## Route Instruction

_The NFT Payment guard does not support the route instruction._
