---
description: "Set the price of the mint in SOL with a freeze period."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Freeze Sol Payment

## Overview

The **Freeze Sol Payment** guard allows minting frozen NFTs by charging the payer an amount in SOL. Frozen NFTs cannot be transferred or listed on any marketplaces until thawed.

Frozen NFTs can be thawed by anyone as long as one of the following conditions is met:
- The Candy Machine has minted out.
- The Candy Machine was deleted.
- The configured Freeze Period — which can be a maximum of 30 days — has passed.

The funds are transferred to a "Freeze Escrow" account which must be initialized by the Candy Guard authority before minting can start. Once all Frozen NFTs have been thawed, the funds can be unlocked and transferred to the configured destination account by the Candy Guard authority.

You may initialize the Freeze Escrow account, thaw NFTs and unlock funds [via the route instruction](#route-instruction) of this guard.

![CandyMachinesV3-GuardsFreezeSolPayment2.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsFreezeSolPayment2.png#radius)

## Guard Settings

The Freeze Sol Payment guard contains the following settings:

- **Amount**: The amount in SOL (or lamports) to charge the payer.
- **Destination**: The address of the wallet that should receive all payments related to this guard.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

Here’s how we can create a Candy Machine using the Freeze Sol Payment guard via the JS SDK. Note that, in this example, we’re using the current identity as the destination wallet.

```tsx
import { sol } from '@metaplex-foundation/js';

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    freezeSolPayment: {
      amount: sol(1.5),
      destination: metaplex.identity().publicKey,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.FreezeSolPaymentGuardSettings.html).
    
</div>
</AccordionItem>
</Accordion>

## Mint Settings

_The Freeze Sol Payment guard does not need Mint Settings._

However, if you’re planning on constructing instructions without the help of our SDKs, you will need to add the configured destination address to the remaining accounts of the mint instruction. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-guard#freezesolpayment) for more details.

## Route Instruction

TODO

## Stop Freezing NFTs

TODO

## Freeze Escrows and Guard Groups

TODO
