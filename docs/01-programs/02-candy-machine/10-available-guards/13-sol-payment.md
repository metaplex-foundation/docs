---
description: "Set the price of the mint in SOL."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Sol Payment

## Overview

The **Sol Payment** guard allows us to charge the payer an amount in SOL when minting. Both the amount of SOL and the destination address can be configured.

![CandyMachinesV3-GuardsSolPayment.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsSolPayment.png#radius)

## Guard Settings

The Sol Payment guard contains the following settings:

- **Lamports**: The amount in SOL (or lamports) to charge the payer.
- **Destination**: The address of the wallet that should receive all payments related to this guard.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Sol Payment guard. Note that, in this example, we’re using the current identity as the destination wallet.

```ts
create(umi, {
  // ...
  guards: {
    solPayment: some({
      lamports: sol(1.5),
      destination: umi.identity.publicKey,
    }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [SolPayment](https://mpl-candy-machine-js-docs.vercel.app/types/SolPayment.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s how we can create a Candy Machine using the Sol Payment guard via the JS SDK. Note that, in this example, we’re using the current identity as the destination wallet.

```tsx
import { sol } from "@metaplex-foundation/js";

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    solPayment: {
      amount: sol(1.5),
      destination: metaplex.identity().publicKey,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.SolPaymentGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

The Sol Payment guard contains the following Mint Settings:

- **Destination**: The address of the wallet that should receive all payments related to this guard.

Note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#solpayment) for more details.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

You may pass the Mint Settings of the Sol Payment guard using the `mintArgs` argument like so.

```ts
mintV2(umi, {
  // ...
  mintArgs: {
    solPayment: some({ destination: treasury }),
  },
});
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [SolPaymentMintArgs](https://mpl-candy-machine-js-docs.vercel.app/types/SolPaymentMintArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

_The JS SDK does not require any Mint Settings for the Sol Payment guard since it can infer them from the provided Candy Machine model._

</div>
</AccordionItem>
</Accordion>

## Route Instruction

_The Sol Payment guard does not support the route instruction._
