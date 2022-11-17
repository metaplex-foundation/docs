---
description: "Set the price of the mint in token amount with a freeze period."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Freeze Token Payment

## Overview

The **Freeze Token Payment** guard TODO

![CandyMachinesV3-GuardsFreezeTokenPayment2.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsFreezeTokenPayment2.png#radius)

## Guard Settings

The Freeze Token Payment guard contains the following settings:

- **Amount**: The amount in SOL (or lamports) to charge the payer.
- **Destination**: The address of the wallet that should receive all payments related to this guard.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

Here’s how we can create a Candy Machine using the Freeze Token Payment guard via the JS SDK. Note that, in this example, we’re using the current identity as the destination wallet.

```tsx
import { sol } from '@metaplex-foundation/js';

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    freezeTokenPayment: {
      amount: sol(1.5),
      destination: metaplex.identity().publicKey,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.FreezeTokenPaymentGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

_The Freeze Token Payment guard does not need Mint Settings._

However, if you’re planning on constructing instructions without the help of our SDKs, you will need to add the configured destination address to the remaining accounts of the mint instruction. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-guard#freezetokenpayment) for more details.

## Route Instruction

TODO

## Freeze Escrows and Guard Groups

TODO
