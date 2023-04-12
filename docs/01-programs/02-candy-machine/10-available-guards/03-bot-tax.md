---
description: "Configurable tax to charge invalid transactions."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Bot Tax

## Overview

The **Bot Tax** guard charges a penalty for invalid transactions to discourage bots from attempting to mint NFTs. This amount is usually small to hurt bots without affecting genuine mistakes from real users. All bot taxes will be transferred to the Candy Machine account so that, once minting is over, you can access these funds by deleting the Candy Machine account.

This guard is a bit special and affects the minting behaviour of all other guards. When the Bot Tax is activated and any other guard fails to validate the mint, **the transaction will pretend to succeed**. This means no errors will be returned by the program but no NFT will be minted either. This is because the transaction must succeed for the funds to be transferred from the bot to the Candy Machine account.

Additionally, the Bot Tax guard enables us to ensure the mint instruction was the last instruction of the transaction. This prevents bots from adding malicious instructions after the mint and returns an error to avoid paying the tax.

![CandyMachinesV3-GuardsBotTax.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsBotTax.png#radius)

## Guard Settings

The Bot Tax guard contains the following settings:

- **Lamports**: The amount in SOL (or lamports) to charge for an invalid transaction. We recommend setting a fairly small amount to avoid affecting real users who made a genuine mistake. Client-side validation can also help reduce affecting real users.
- **Last Instruction**: Whether or not we should forbid minting and charge a bot tax when the mint instruction is not the last instruction of the transaction. We recommend setting this to `true` to be better protected against bots.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Bot Tax guard.

```ts
create(umi, {
  // ...
  guards: {
    botTax: some({
      lamports: sol(0.01),
      lastInstruction: true,
    }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [BotTax](https://mpl-candy-machine-js-docs.vercel.app/types/BotTax.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Bot Tax guard via the JS SDK.

```tsx
import { sol } from "@metaplex-foundation/js";

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    botTax: {
      lamports: sol(0.01),
      lastInstruction: true,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.BotTaxGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

_The Bot Tax guard does not need Mint Settings._

## Route Instruction

_The Bot Tax guard does not support the route instruction._
