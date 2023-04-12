---
description: "Determines a date to end the mint."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# End Date

## Overview

The **End Date** guard specifies a date to end the mint. After this date, minting is no longer allowed.

![CandyMachinesV3-GuardsEndDate.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsEndDate.png#radius)

## Guard Settings

The End Date guard contains the following settings:

- **Date**: The date after which minting is no longer allowed.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the End Date guard.

```ts
import { dateTime } from "@metaplex-foundation/umi";

create(umi, {
  // ...
  guards: {
    endDate: some({ date: dateTime("2022-10-24T15:30:00.000Z") }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [EndDate](https://mpl-candy-machine-js-docs.vercel.app/types/EndDate.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the End Date guard via the JS SDK.

```tsx
import { toDateTime } from "@metaplex-foundation/js";

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    endDate: {
      date: toDateTime("2022-10-24T15:30:00.000Z"),
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.EndDateGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

_The End Date guard does not need Mint Settings._

## Route Instruction

_The End Date guard does not support the route instruction._
