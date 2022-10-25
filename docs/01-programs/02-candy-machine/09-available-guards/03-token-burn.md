---
description: "Restricts the mint to holders of a specified token, requiring a burn of the tokens."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Token Burn

## Overview

The **Token Burn** guard allows minting by burning some of the payer’s tokens from a configured mint account. If the payer does not have the required amount of tokens to burn, minting will fail.

![CandyMachinesV3-GuardsTokenBurn.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/202e790a-33e7-47e6-bd53-b48776449949/CandyMachinesV3-GuardsTokenBurn.png)

## Guard Settings

The Token Burn guard contains the following settings:

- **Amount**: The amount of tokens to burn.
- **Mint**: The address of the mint account defining the SPL Token we want to burn.

- JS SDK
    
    Here’s an example of how to set up a Candy Machine using the Token Burn guard.
    
    ```tsx
    import { token } from '@metaplex-foundation/js';
    
    const { candyMachine } = await metaplex.candyMachines().create({
      // ...
      guards: {
        tokenBurn: {
          amount: token(300),
          mint: tokenMint.address,
        },
      },
    });
    ```
    
    API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.TokenBurnGuardSettings.html).
    

## Mint Settings

*The Token Burn guard does not need Mint Settings.*

However, if you’re planning on constructing instructions without the help of our SDKs, you will need to add the configured mint address and the payer’s token account to the remaining accounts of the mint instruction. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-guard#tokenburn) for more details.

## Route Instruction

*The Token Burn guard does not support the route instruction.*
