---
description: "Restricts the mint to a single address."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Address Gate

## Overview

The **Address Gate** guard restricts the mint to a single address which must match the address of the minting wallet.

![CandyMachinesV3-GuardsAddressGate.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsAddressGate.png#radius)

## Guard Settings

The Address Gate guard contains the following settings:

- **Address**: The only address that is allowed to mint from the Candy Machine.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Address Gate guard via the JS SDK.

```tsx
import { TODO } from '@metaplex-foundation/js';
import { TODO } from '@solana/web3.js';

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    addressGate: {
      address: someWallet.publicKey,
    },
  },
});
```

Now, only `someWallet` will be able to mint from this Candy Machine.

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.AddressGateGuardSettings.html).

</div>
</AccordionItem>
</Accordion>    

## Mint Settings

*The Address Gate guard does not need Mint Settings.*

## Route Instruction

*The Address Gate guard does not support the route instruction.*
