---
description: "Determines the end of the mint based on the total amount minted."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Redeemed Amount

## Overview

The **Redeemed Amount** guard forbids minting when the number of minted NFTs for the entire Candy Machine reaches the configured maximum amount.

This guard becomes more interesting when used with [Guard Groups](/programs/candy-machine/guard-groups) since it allows us to add global minting thresholds to our groups.

![CandyMachinesV3-GuardsRedeemedAmount.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsRedeemedAmount.png#radius)

## Guard Settings

The Redeemed Amount guard contains the following settings:

- **Maximum**: The maximum amount of NFTs that can be minted.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Redeemed Amount guard via the JS SDK.

```tsx
import { toBigNumber } from '@metaplex-foundation/js';

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  itemsAvailable: toBigNumber(500),
  guards: {
    redeemedAmount: {
      maximum: toBigNumber(300),
    },
  },
});
```

Notice that, even if the Candy Machine contains 500 items, only 300 of these items will be mintable because of this guard.

Thus, this guard becomes more useful when using [Guard Groups](/programs/candy-machine/guard-groups). Here’s another example using two groups such that the first 300 NFTs can be minted for 1 SOL but the last 200 will need 2 SOL to mint.

```tsx
import { toBigNumber } from '@metaplex-foundation/js';

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  itemsAvailable: toBigNumber(500),
  groups: [
    {
      label: 'early',
      guards: {
        redeemedAmount: { maximum: toBigNumber(300) },
        solPayment: { amount: sol(1), destination: treasury },
      },
    },
    {
      label: 'late',
      guards: {
        solPayment: { amount: sol(2), destination: treasury },
      },
    },
  ],
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.RedeemedAmountGuardSettings.html).

</div>
</AccordionItem>
</Accordion>    

## Mint Settings

*The Redeemed Amount guard does not need Mint Settings.*

## Route Instruction

*The Redeemed Amount guard does not support the route instruction.*
