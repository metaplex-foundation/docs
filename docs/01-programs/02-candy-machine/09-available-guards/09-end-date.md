---
description: "Determines a date to end the mint."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# End Date

## Overview

The **End Date** guard is used to specify a date to end the mint. After this date, minting is no longer allowed.

![CandyMachinesV3-GuardsEndDate.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a16454f0-a311-42fa-a573-0b1be92f48c8/CandyMachinesV3-GuardsEndDate.png)

## Guard Settings

The End Date guard contains the following settings:

- **Date**: The date after which minting is no longer allowed.

- JS SDK
    
    Here’s how we can set up a Candy Machine using the End Date guard via the JS SDK.
    
    ```tsx
    import { toDateTime } from '@metaplex-foundation/js';
    
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
    

## Mint Settings

*The End Date guard does not need Mint Settings.*

## Route Instruction

*The End Date guard does not support the route instruction.*
