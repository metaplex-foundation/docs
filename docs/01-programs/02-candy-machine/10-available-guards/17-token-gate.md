---
description: "Restricts the mint to holders of a specified token."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Token Gate

## Overview

The **Token Gate** guard restricts minting to token holders of a configured mint account. If the payer does not have the required amount of tokens, minting will fail.

![CandyMachinesV3-GuardsTokenGate.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsTokenGate.png#radius)

## Guard Settings

The Token Gate guard contains the following settings:

- **Amount**: The number of tokens required.
- **Mint**: The address of the mint account defining the SPL Token we want to gate with.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Token Gate guard.

```ts
create(umi, {
  // ...
  guards: {
    tokenGate: some({
      amount: 300,
      mint: tokenMint.publicKey,
    }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [TokenGate](https://mpl-candy-machine-js-docs.vercel.app/types/TokenGateArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s an example of how to set up a Candy Machine using the Token Gate guard.

```tsx
import { token } from "@metaplex-foundation/js";

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    tokenGate: {
      amount: token(300),
      mint: tokenMint.address,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.TokenGateGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

The Token Gate guard contains the following Mint Settings:

- **Mint**: The address of the mint account defining the SPL Token we want to gate with.

Note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#tokengate) for more details.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

You may pass the Mint Settings of the Token Gate guard using the `mintArgs` argument like so.

```ts
mintV2(umi, {
  // ...
  mintArgs: {
    tokenGate: some({ mint: tokenMint.publicKey }),
  },
});
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [TokenGateMintArgs](https://mpl-candy-machine-js-docs.vercel.app/types/TokenGateMintArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

_The JS SDK does not require any Mint Settings for the Token Gate guard since it can infer them from the provided Candy Machine model._

</div>
</AccordionItem>
</Accordion>

## Route Instruction

_The Token Gate guard does not support the route instruction._
