---
description: "Determines the start date of the mint."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Start Date

## Overview

The **Start Date** guard determines the start date of the mint. Before this date, minting is not allowed.

![CandyMachinesV3-GuardsStartDate.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/afaf62ec-9777-44cc-b3d6-f462ccb28305/CandyMachinesV3-GuardsStartDate.png)

## Guard Settings

The Start Date guard contains the following settings:

- **Date**: The date before which minting is not allowed.

- JS SDK
    
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
    

## Mint Settings

*The Start Date guard does not need Mint Settings.*

## Route Instruction

*The Start Date guard does not support the route instruction.*
