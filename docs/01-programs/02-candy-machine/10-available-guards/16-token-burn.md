---
description: "Restricts the mint to holders of a specified token, requiring a burn of the tokens."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Token Burn

## Overview

The **Token Burn** guard allows minting by burning some of the payer’s tokens from a configured mint account. If the payer does not have the required amount of tokens to burn, minting will fail.

![CandyMachinesV3-GuardsTokenBurn.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsTokenBurn.png#radius)

## Guard Settings

The Token Burn guard contains the following settings:

- **Amount**: The number of tokens to burn.
- **Mint**: The address of the mint account defining the SPL Token we want to burn.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Token Burn guard.

```ts
create(umi, {
  // ...
  guards: {
    tokenBurn: some({
      amount: 300,
      mint: tokenMint.publicKey,
    }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [TokenBurn](https://mpl-candy-machine-js-docs.vercel.app/types/TokenBurnArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s an example of how to set up a Candy Machine using the Token Burn guard.

```tsx
import { token } from "@metaplex-foundation/js";

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    tokenBurn: {
      amount: token(300),
      mint: tokenMint.address,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.TokenBurnGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

The Token Burn guard contains the following Mint Settings:

- **Mint**: The address of the mint account defining the SPL Token we want to burn.

Note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#tokenburn) for more details.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

You may pass the Mint Settings of the Token Burn guard using the `mintArgs` argument like so.

```ts
mintV2(umi, {
  // ...
  mintArgs: {
    tokenBurn: some({ mint: tokenMint.publicKey }),
  },
});
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [TokenBurnMintArgs](https://mpl-candy-machine-js-docs.vercel.app/types/TokenBurnMintArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

_The JS SDK does not require any Mint Settings for the Token Burn guard since it can infer them from the provided Candy Machine model._

</div>
</AccordionItem>
</Accordion>

## Route Instruction

_The Token Burn guard does not support the route instruction._
