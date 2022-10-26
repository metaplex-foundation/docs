---
description: "Determines the start date of the mint."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Start Date

## Overview

The **Start Date** guard determines the start date of the mint. Before this date, minting is not allowed.

![CandyMachinesV3-GuardsStartDate.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsStartDate.png#radius)

## Guard Settings

The Start Date guard contains the following settings:

- **Date**: The date before which minting is not allowed.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Start Date guard via the JS SDK.

```tsx
import { toDateTime } from '@metaplex-foundation/js';

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    startDate: {
      date: toDateTime("2022-10-24T15:30:00.000Z"),
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.StartDateGuardSettings.html).

</div>
</AccordionItem>
</Accordion>    

## Mint Settings

*The Start Date guard does not need Mint Settings.*

## Route Instruction

*The Start Date guard does not support the route instruction.*
