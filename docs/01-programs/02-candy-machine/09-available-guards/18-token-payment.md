---
description: "Set the price of the mint in token amount."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Token Payment

## Overview

The **Token Payment** guard allows minting by charging the payer some tokens from a configured mint account. Both the number of tokens and the destination address can also be configured.

If the payer does not have the required amount of tokens to pay, minting will fail.

![CandyMachinesV3-GuardsTokenPayment.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsTokenPayment.png#radius)

## Guard Settings

The Token Payment guard contains the following settings:

- **Amount**: The number of tokens to charge the payer.
- **Mint**: The address of the mint account defining the SPL Token we want to pay with.
- **Destination Associated Token Address (ATA)**: The address of the associated token account to send the tokens to. We can get this address by finding the Associated Token Address PDA using the **Token Mint** attribute and the address of any wallet that should receive these tokens.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

Here’s an example of how to set up a Candy Machine using the Token Payment guard. You may use the Associated Token Address (ATA) of any wallet. In this example, we’ll use the ATA of the current identity.

```tsx
import { token } from '@metaplex-foundation/js';

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    tokenPayment: {
      amount: token(300),
      mint: tokenMint.address,
      destinationAta: metaplex.tokens().pdas().associatedTokenAccount({
        mint: tokenMint.address,
        owner: metaplex.identity().publicKey,
      }),
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.TokenPaymentGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

_The Token Payment guard does not need Mint Settings._

However, if you’re planning on constructing instructions without the help of our SDKs, you will need to add the configured destination token address and the payer’s token account to the remaining accounts of the mint instruction. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-guard#tokenpayment) for more details.

## Route Instruction

_The Token Payment guard does not support the route instruction._
