---
description: "Restricts minting via a Gatekeeper Network e.g. Captcha integration."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Gatekeeper

## Overview

The **Gatekeeper** guard checks whether the minting wallet has a valid **Gateway Token** — also known as a **Civic Pass**. There are different types of Civic Pass you can use to guard your mint, ranging from completing a simple Captcha challenge, to a 3D video selfie that guarantees a "one NFT per human" mint. 

You choose a type of Civic Pass to protect your mint by setting the corresponding [**Gatekeeper Network**](https://docs.civic.com/civic-pass/overview/how-it-works#the-on-chain-gatekeeper-network) in the Gatekeeper guard. The table bellow lists the availablable
Networks. 

| **Civic Pass**                                                      	    | **Features**                                                                                                                                    	| **Gatekeeper Network**                                                       	|
|---------------------------------------------------------------------	    |-------------------------------------------------------------------------------------------------------------------------------------------------	|------------------------------------------------------------------------------	|
| **Captcha Verification** ([Demo](https://getpass.civic.com))         	| Captcha check to filter bots.                                                                                                                   	| ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6                                  	|
| **Uniqueness Verification** ([Demo](https://unique.civic.com))       	| 3D video selfie to capture a 3D face map. Limits one user to one wallet only                                                                    	| [Reach out to Civic](https://share.hsforms.com/1NhExhEX0Sf6NLptdGi4cAwbzn0a) 	|
| **Identity Document Verification** ([Demo](https://verify.civic.com)) 	| ID Document Authenticity  - Selfie matches ID Document photo - 18+ age check - Email - Liveness check - Location - Banned countries check: OFAC 	| [Reach out to Civic](https://share.hsforms.com/1Z4QgWNh0RN2-81jJDcrN2Qbzn0a) 	|
| **Custom Verification**                                             	    | Additional specific countries, on-chain checks or other verifications.                                                                          	| [Reach out to Civic](https://share.hsforms.com/1NvBk0zfyR3aWcMosBxJETQbzn0a) 	|

While the Captcha Verification is free to use without any restrictions, other Passes require you to reach out to Civic as they involve user PII. For the rest of this guide, we will be using the Captcha Verification.

For a more in-depth understanding of Civic Passes and Gatekeeper Networks, please refer to the [official CIVIC Documentation](https://docs.civic.com/civic-pass/overview)

![CandyMachinesV3-GuardsGatekeeper.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsGatekeeper.png#radius)

## Guard Settings

The Gatekeeper guard contains the following settings:

- **Gatekeeper Network**: The public key of the Gatekeeper Network that will be used to check the validity of the minting wallet. For instance, you may use the "**Civic Captcha Pass**" Network — which ensures the minting wallet has passed a captcha — by using the following address: `ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6`.
- **Expire On Use**: Whether we should mark the Gateway Token of the minting wallet as expired after the NFT has been minting.
    - When set to `true`, they will need to go through the Gatekeeper Network again to mint another NFT.
    - When set to `false`, they will be able to mint another NFT until the Gateway Token expires naturally.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

Here’s how we can set up a Candy Machine using the Gatekeeper guard via the JS SDK.

```tsx
import { PublicKey } from '@solana/web3.js';

const CAPTCHA_NETWORK = new PublicKey("ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6");

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

The Gatekeeper guard does not require Mint Settings. However, it does accept the following optional settings:

- **Token Account** (optional): As a little disclaimer, you should very rarely need to provide this setting but it’s here if you need to. This refers to the Gateway Token PDA derived from the payer and the Gatekeeper Network which is used to verify the payer's eligibility to mint. This PDA address can be inferred by our SDKs which is why you do not need to provide it. However, some Gatekeeper Networks may issue multiple Gateway Tokens to the same wallet. To differentiate their PDA addresses, it uses a **Seeds** array which defaults to `[0, 0, 0, 0, 0, 0, 0, 0]`.

Note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-guard#gatekeeper) for more details.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

In the vast majority of cases, we should not need to provide any Mint Settings to the Gatekeeper guard as the JS SDK will default to provide the right addresses and PDAs to the mint instruction.

```tsx
const { nft } = await metaplex.candyMachines().mint({
  // ...
  guards: {
    // No mint settings required...
  }
});
```

However, in some rare use cases, we may need to explicitly provide the PDA address of the Gateway Token. Thus, here’s an example providing a Gateway Token that uses non-default seeds.

```tsx
import { Pda } from '@metaplex-foundation/js';

const gatewayProgram = metaplex.programs().getGateway(programs);
const gatewayToken = Pda.find(gatewayProgram.address, [
  payer.publicKey.toBuffer(),
  Buffer.from('gateway'),
  Buffer.from([0, 0, 0, 0, 0, 0, 0, 1]), // <- Custom seeds array.
  gatewayNetwork.toBuffer(),
]);

const { nft } = await metaplex.candyMachines().mint({
  // ...
  guards: {
    gatekeeper: {
      tokenAccount: gatewayToken,
    },
  }
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint), [Input](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint), [Mint Settings](https://metaplex-foundation.github.io/js/types/js.GatekeeperGuardMintSettings.html).

</div>
</AccordionItem>
</Accordion>    

## Route Instruction

*The Gatekeeper guard does not support the route instruction.*
