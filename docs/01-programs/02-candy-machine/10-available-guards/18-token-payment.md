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
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Token Payment guard. Note that, in this example, we’re using the current identity as the destination wallet.

```ts
import { findAssociatedTokenPda } from "@metaplex-foundation/mpl-essentials";
create(umi, {
  // ...
  guards: {
    tokenPayment: some({
      amount: 300,
      mint: tokenMint.publicKey,
      destinationAta: findAssociatedTokenPda(umi, {
        mint: tokenMint.publicKey,
        owner: umi.identity.publicKey,
      }),
    }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [TokenPayment](https://mpl-candy-machine-js-docs.vercel.app/types/TokenPaymentArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s an example of how to set up a Candy Machine using the Token Payment guard. You may use the Associated Token Address (ATA) of any wallet. In this example, we’ll use the ATA of the current identity.

```tsx
import { token } from "@metaplex-foundation/js";

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

The Token Payment guard contains the following Mint Settings:

- **Mint**: The address of the mint account defining the SPL Token we want to pay with.
- **Destination Associated Token Address (ATA)**: The address of the associated token account to send the tokens to.

Note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#tokenpayment) for more details.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

You may pass the Mint Settings of the Token Payment guard using the `mintArgs` argument like so.

```ts
mintV2(umi, {
  // ...
  mintArgs: {
    tokenPayment: some({
      mint: tokenMint.publicKey,
      destinationAta,
    }),
  },
});
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [TokenPaymentMintArgs](https://mpl-candy-machine-js-docs.vercel.app/types/TokenPaymentMintArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

_The JS SDK does not require any Mint Settings for the Token Payment guard since it can infer them from the provided Candy Machine model._

</div>
</AccordionItem>
</Accordion>

## Route Instruction

_The Token Payment guard does not support the route instruction._
