---
description: "Requires an additional signer on the transaction."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Third Party Signer

## Overview

The **Third Party Signer** guard requires a predefined address to sign each mint transaction. The signer will need to be passed within the mint settings of this guard.

This allows for more centralized mints where every single mint transaction has to go through a specific signer.

![CandyMachinesV3-GuardsThirdPartySigner.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsThirdPartySigner.png#radius)

## Guard Settings

The Third Party Signer guard contains the following settings:

- **Signer Key**: The address of the signer that will need to sign each mint transaction.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Third Party Signer guard.

```ts
const myConfiguredSigner = generateSigner(umi);

create(umi, {
  // ...
  guards: {
    thirdPartySigner: some({ signerKey: myConfiguredSigner.publicKey }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [ThirdPartySigner](https://mpl-candy-machine-js-docs.vercel.app/types/ThirdPartySigner.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Third Party Signer guard via the JS SDK.

```tsx
const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    thirdPartySigner: {
      signerKey: someWallet.publicKey,
    },
  },
});
```

In this example, the `someWallet` wallet will need to sign every mint transaction.

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.ThirdPartySignerGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

The Third Party Signer guard contains the following Mint Settings:

- **Signer**: The required third-party signer. The address of this signer must match the Signer Key in the guard settings.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

When minting via the Umi library, simply provide the third-party signer via the `signer` attribute like so.

```ts
create(umi, {
  // ...
  guards: {
    thirdPartySigner: some({ signer: myConfiguredSigner }),
  },
});
```

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

When minting via the JS SDK, simply provide the third-party signer via the `signer` attribute like so.

```tsx
const { nft } = await metaplex.candyMachines().mint({
  // ...
  guards: {
    thirdPartySigner: {
      signer: someWallet,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint), [Input](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint), [Mint Settings](https://metaplex-foundation.github.io/js/types/js.ThirdPartySignerGuardMintSettings.html).

</div>
</AccordionItem>
</Accordion>

## Route Instruction

_The Third Party Signer guard does not support the route instruction._
