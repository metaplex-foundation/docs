---
description: "Specifies a limit on the number of mints per wallet."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Mint Limit

## Overview

The **Mint Limit** guard allows specifying a limit on the number of NFTs each wallet can mint.

The limit is set per wallet, per candy machine and per identifier — provided in the settings — to allow multiple mint limits within the same Candy Machine.

![CandyMachinesV3-GuardsMintLimit.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsMintLimit.png#radius)

## Guard Settings

The Mint Limit guard contains the following settings:

- **ID**: A unique identifier for this guard. Different identifiers will use different counters to track how many items were minted by a given wallet. This is particularly useful when using groups of guards as we may want each of them to have a different mint limit.
- **Limit**: The maximum number of mints allowed per wallet for that identifier.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Mint Limit guard.

```ts
create(umi, {
  // ...
  guards: {
    mintLimit: some({ id: 1, limit: 5 }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [MintLimit](https://mpl-candy-machine-js-docs.vercel.app/types/MintLimit.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Mint Limit guard via the JS SDK.

```tsx
const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    mintLimit: {
      id: 1,
      limit: 5,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.MintLimitGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

The Mint Limit guard contains the following Mint Settings:

- **ID**: A unique identifier for this guard.

Note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#mintlimit) for more details.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

You may pass the Mint Settings of the Mint Limit guard using the `mintArgs` argument like so.

```ts
mintV2(umi, {
  // ...
  mintArgs: {
    mintLimit: some({ id: 1 }),
  },
});
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [MintLimitMintArgs](https://mpl-candy-machine-js-docs.vercel.app/types/MintLimitMintArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

_The JS SDK does not require any Mint Settings for the Mint Limit guard since it can infer them from the provided Candy Machine model._

</div>
</AccordionItem>
</Accordion>

## Route Instruction

_The Mint Limit guard does not support the route instruction._
