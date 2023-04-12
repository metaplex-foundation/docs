---
description: "Restricts minting via a Gatekeeper Network e.g. Captcha integration."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Gatekeeper

## Overview

The **Gatekeeper** guard checks whether the minting wallet has a valid **Gateway Token** — also known as a **Civic Pass** — from a specified **Gatekeeper Network**.

In most cases, this token will be obtained after completing a Captcha challenge but any Gatekeeper Network may be used.

There isn’t much to set up on the Candy Machine side but, depending on the selected Gatekeeper Network, you may need to ask the minting wallet to perform so pre-validation checks to grant them the required Gateway Token.

Here are some additional recommended materials you may find helpful when setting up a Gatekeep Network.

- [The CIVIC Documentation](https://docs.civic.com/civic-pass/overview)
- [Gateway JS Library](https://www.npmjs.com/package/@identity.com/solana-gateway-ts)
- [Gateway React Components](https://www.npmjs.com/package/@civic/solana-gateway-react)

![CandyMachinesV3-GuardsGatekeeper.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsGatekeeper.png#radius)

## Guard Settings

The Gatekeeper guard contains the following settings:

- **Gatekeeper Network**: The public key of the Gatekeeper Network that will be used to check the validity of the minting wallet. For instance, you may use the "**Civic Captcha Pass**" Network — which ensures the minting wallet has passed a captcha — by using the following address: `ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6`.
- **Expire On Use**: Whether we should mark the Gateway Token of the minting wallet as expired after the NFT has been minting.
  - When set to `true`, they will need to go through the Gatekeeper Network again to mint another NFT.
  - When set to `false`, they will be able to mint another NFT until the Gateway Token expires naturally.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Gatekeeper guard.

```ts
create(umi, {
  // ...
  guards: {
    gatekeeper: some({
      network: publicKey("ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6"),
      expireOnUse: true,
    }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [Gatekeeper](https://mpl-candy-machine-js-docs.vercel.app/types/Gatekeeper.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Gatekeeper guard via the JS SDK.

```tsx
import { PublicKey } from "@solana/web3.js";

const CAPTCHA_NETWORK = new PublicKey(
  "ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6"
);

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    gatekeeper: {
      network: CAPTCHA_NETWORK,
      expireOnUse: true,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.GatekeeperGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

The Gatekeeper guard accepts the following mint settings:

- **Gatekeeper Network**: The public key of the Gatekeeper Network that will be used to check the validity of the minting wallet.
- **Expire On Use**: Whether we should mark the Gateway Token of the minting wallet as expired after the NFT has been minting.
- **Token Account** (optional): As a little disclaimer, you should very rarely need to provide this setting but it’s here if you need to. This refers to the Gateway Token PDA derived from the payer and the Gatekeeper Network which is used to verify the payer's eligibility to mint. This PDA address can be inferred by our SDKs which is why you do not need to provide it. However, some Gatekeeper Networks may issue multiple Gateway Tokens to the same wallet. To differentiate their PDA addresses, it uses a **Seeds** array which defaults to `[0, 0, 0, 0, 0, 0, 0, 0]`.

Note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#gatekeeper) for more details.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

You may pass the Mint Settings of the Gatekeeper guard using the `mintArgs` argument like so.

```ts
mintV2(umi, {
  // ...
  mintArgs: {
    gatekeeper: some({
      network: publicKey("ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6"),
      expireOnUse: true,
    }),
  },
});
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [GatekeeperMintArgs](https://mpl-candy-machine-js-docs.vercel.app/types/GatekeeperMintArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

In the vast majority of cases, we should not need to provide any Mint Settings to the Gatekeeper guard as the JS SDK will default to provide the right addresses and PDAs to the mint instruction.

```tsx
const { nft } = await metaplex.candyMachines().mint({
  // ...
  guards: {
    // No mint settings required...
  },
});
```

However, in some rare use cases, we may need to explicitly provide the PDA address of the Gateway Token. Thus, here’s an example providing a Gateway Token that uses non-default seeds.

```tsx
import { Pda } from "@metaplex-foundation/js";

const gatewayProgram = metaplex.programs().getGateway(programs);
const gatewayToken = Pda.find(gatewayProgram.address, [
  payer.publicKey.toBuffer(),
  Buffer.from("gateway"),
  Buffer.from([0, 0, 0, 0, 0, 0, 0, 1]), // <- Custom seeds array.
  gatewayNetwork.toBuffer(),
]);

const { nft } = await metaplex.candyMachines().mint({
  // ...
  guards: {
    gatekeeper: {
      tokenAccount: gatewayToken,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint), [Input](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint), [Mint Settings](https://metaplex-foundation.github.io/js/types/js.GatekeeperGuardMintSettings.html).

</div>
</AccordionItem>
</Accordion>

## Route Instruction

_The Gatekeeper guard does not support the route instruction._
