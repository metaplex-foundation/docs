---
description: "Set the price of the mint in SOL with a freeze period."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Freeze Sol Payment

## Overview

The **Freeze Sol Payment** guard allows minting frozen NFTs by charging the payer an amount in SOL. Frozen NFTs cannot be transferred or listed on any marketplaces until thawed.

Frozen NFTs can be thawed by anyone as long as one of the following conditions is met:

- The Candy Machine has minted out.
- The Candy Machine was deleted.
- The configured Freeze Period — which can be a maximum of 30 days — has passed.

The funds are transferred to a "Freeze Escrow" account which must be initialized by the Candy Guard authority before minting can start. Once all Frozen NFTs have been thawed, the funds can be unlocked and transferred to the configured destination account by the Candy Guard authority.

You may initialize the Freeze Escrow account, thaw NFTs and unlock funds [via the route instruction](#route-instruction) of this guard.

![CandyMachinesV3-GuardsFreezeOverview.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsFreezeOverview.png#radius)

## Guard Settings

The Freeze Sol Payment guard contains the following settings:

- **Lamports**: The amount in SOL (or lamports) to charge the payer.
- **Destination**: The address of the wallet that should eventually receive all payments related to this guard.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

Here’s how we can create a Candy Machine using the Freeze Sol Payment guard. Note that, in this example, we’re using Umi's identity as the destination wallet.

```tsx
create(umi, {
  // ...
  guards: {
    freezeSolPayment: some({
      lamports: sol(1.5),
      destination: umi.identity.publicKey,
    }),
  },
});
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [FreezeSolPayment](https://mpl-candy-machine-js-docs.vercel.app/types/FreezeSolPayment.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

Here’s how we can create a Candy Machine using the Freeze Sol Payment guard via the JS SDK. Note that, in this example, we’re using the current identity as the destination wallet.

```tsx
import { sol } from "@metaplex-foundation/js";

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    freezeSolPayment: {
      amount: sol(1.5),
      destination: metaplex.identity().publicKey,
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.FreezeSolPaymentGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Mint Settings

The Freeze Sol Payment guard contains the following Mint Settings:

- **Destination**: The address of the wallet that should eventually receive all payments related to this guard.
- **NFT Rule Set** (optional): The Rule Set of the minted NFT, if we are minting a Programmable NFT with a Rule Set.

Note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#freezesolpayment) for more details.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

You may pass the Mint Settings of the Freeze Sol Payment guard using the `mintArgs` argument like so.

```ts
mintV2(umi, {
  // ...
  mintArgs: {
    freezeSolPayment: some({ destination: umi.identity.publicKey }),
  },
});
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [FreezeSolPaymentMintArgs](https://mpl-candy-machine-js-docs.vercel.app/types/FreezeSolPaymentMintArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

_The JS SDK does not require any Mint Settings for the Freeze Sol Payment guard since it can infer them from the provided Candy Machine model._

</div>
</AccordionItem>
</Accordion>

## Route Instruction

The Freeze Sol Payment route instruction supports the following features.

- [Initialize the Freeze Escrow](#initialize-the-freeze-escrow)
- [Thaw a Frozen NFT](#thaw-a-frozen-nft)
- [Unlock Funds](#unlock-funds)

### Initialize the Freeze Escrow

_Path: `initialize`_

When using the Freeze Sol Payment guard, we must initialize the Freeze Escrow account before minting can start. This will create a PDA account derived from the Destination attribute of the guard's settings.

The Freeze Escrow PDA account will keep track of several parameters such as:

- How many Frozen NFTs were minted through this guard.
- When was the first Frozen NFT minted via this guard as the Freeze Period starts counting after that.

When initializing this Freeze Escrow account, we must provide the following arguments to the route instruction of the guard:

- **Path** = `initialize`: Selects the path to execute in the route instruction.
- **Destination**: The address of the wallet that should eventually receive all payments related to this guard.
- **Period**: The amount of time in seconds that the Freeze Period should last. This can be a maximum of 30 days (2,592,000 seconds) and it will start from the very first Frozen NFT minted via this guard. The Freeze Period provides a safety mechanism to ensure Frozen NFTs can eventually be thawed even if the Candy Machine never mints out.
- **Candy Guard Authority**: The authority of the Candy Guard account as a Signer.

![CandyMachinesV3-GuardsFreezeSolPayment1.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsFreezeSolPayment1.png#radius)

Last but not least, the Freeze Escrow PDA account will receive the funds of all Frozen NFTs minted through this guard.

![CandyMachinesV3-GuardsFreezeSolPayment2.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsFreezeSolPayment2.png#radius)

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

In the example below, we initialize the Freeze Escrow account with a maximum Freeze Period of 15 days and we use the current identity as the Candy Guard authority.

```ts
route(umi, {
  // ...
  guard: "freezeSolPayment",
  routeArgs: {
    path: "initialize",
    destination: umi.identity.publicKey,
    period: 15 * 24 * 60 * 60, // 15 days.
    candyGuardAuthority: umi.identity,
  },
});
```

API References: [route](https://mpl-candy-machine-js-docs.vercel.app/functions/route.html), [FreezeSolPaymentRouteArgsInitialize](https://mpl-candy-machine-js-docs.vercel.app/types/FreezeSolPaymentRouteArgsInitialize.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

In the example below, we initialize the Freeze Escrow account with a maximum Freeze Period of 15 days and we use the current identity as the Candy Guard authority.

Note that the JS SDK does not require the Destination to be passed in since it can get it from the provided Candy Machine model.

```tsx
await metaplex.candyMachines().callGuardRoute({
  candyMachine,
  guard: "freezeSolPayment",
  settings: {
    path: "initialize",
    period: 15 * 24 * 60 * 60, // 15 days.
    candyGuardAuthority: metaplex.identity(),
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute), [Input](https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute), [Route Settings](https://metaplex-foundation.github.io/js/types/js.FreezeSolPaymentGuardRouteSettings.html).

</div>
</AccordionItem>
</Accordion>

### Thaw a Frozen NFT

_Path: `thaw`_

Frozen NFTs can be thawed by anyone as long as one of the following conditions is met:

- The Candy Machine has minted out.
- The Candy Machine was deleted.
- The configured Freeze Period — which can be a maximum of 30 days — has passed.

Note that since the funds in the Freeze Escrow are not transferrable until all NFTs are thawed, this creates an incentive for the treasury to thaw all NFTs as soon as possible.

To thaw a Frozen NFT, we must provide the following arguments to the route instruction of the guard:

- **Path** = `thaw`: Selects the path to execute in the route instruction.
- **Destination**: The address of the wallet that should eventually receive all payments related to this guard.
- **NFT Mint**: The mint address of the Frozen NFT to thaw.
- **NFT Owner**: The address of the owner of the Frozen NFT to thaw.
- **NFT Token Standard**: The token standard of the Frozen NFT to thaw.
- **NFT Rule Set** (optional): The Rule Set of the Frozen NFT to thaw, if we are thawing a Programmable NFT with a Rule Set.

![CandyMachinesV3-GuardsFreezeSolPayment3.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsFreezeSolPayment3.png#radius)

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

In the example below, we thaw a Frozen NFT that belongs to the current identity.

```ts
route(umi, {
  // ...
  guard: "freezeSolPayment",
  routeArgs: {
    path: "thaw",
    destination,
    nftMint: nftMint.publicKey,
    nftOwner: umi.identity.publicKey,
    nftTokenStandard: candyMachine.tokenStandard,
  },
});
```

API References: [route](https://mpl-candy-machine-js-docs.vercel.app/functions/route.html), [FreezeSolPaymentRouteArgsThaw](https://mpl-candy-machine-js-docs.vercel.app/types/FreezeSolPaymentRouteArgsThaw.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

In the example below, we thaw a Frozen NFT that belongs to the current identity.

Note that the JS SDK does not require the Destination to be passed in since it can get it from the provided Candy Machine model. It also does not require the NFT Token Standard or the NFT Rule Set as it does not support minting Programmable NFTs.

```ts
import { toPublicKey } from "@metaplex-foundation/js";

await metaplex.candyMachines().callGuardRoute({
  candyMachine,
  guard: "freezeSolPayment",
  settings: {
    path: "thaw",
    nftMint: toPublicKey("GhFM53E6NEW7Ud8Gqh34WLBztkpe74PRtbHEU4b6cwWo"),
    nftOwner: metaplex.identity().publicKey,
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute), [Input](https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute), [Route Settings](https://metaplex-foundation.github.io/js/types/js.FreezeSolPaymentGuardRouteSettings.html).

</div>
</AccordionItem>
</Accordion>

### Unlock Funds

_Path: `unlockFunds`_

Once all Frozen NFTs have been thawed, the treasury can unlock the funds from the Freeze Escrow account. This will transfer the funds to the configured Destination address.

To unlock the funds, we must provide the following arguments to the route instruction of the guard:

- **Path** = `unlockFunds`: Selects the path to execute in the route instruction.
- **Destination**: The address of the wallet that should eventually receive all payments related to this guard.
- **Candy Guard Authority**: The authority of the Candy Guard account as a Signer.

![CandyMachinesV3-GuardsFreezeSolPayment4.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsFreezeSolPayment4.png#radius)

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

In the example below, we unlock the funds from the Freeze Escrow account using the current identity as the Candy Guard authority.

```ts
route(umi, {
  // ...
  guard: "freezeSolPayment",
  routeArgs: {
    path: "unlockFunds",
    destination,
    candyGuardAuthority: umi.identity,
  },
});
```

API References: [route](https://mpl-candy-machine-js-docs.vercel.app/functions/route.html), [FreezeSolPaymentRouteArgsUnlockFunds](https://mpl-candy-machine-js-docs.vercel.app/types/FreezeSolPaymentRouteArgsUnlockFunds.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

In the example below, we unlock the funds from the Freeze Escrow account using the current identity as the Candy Guard authority.

Note that the JS SDK does not require the Destination to be passed in since it can get it from the provided Candy Machine model.

```tsx
await metaplex.candyMachines().callGuardRoute({
  candyMachine,
  guard: "freezeSolPayment",
  settings: {
    path: "unlockFunds",
    candyGuardAuthority: metaplex.identity(),
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute), [Input](https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute), [Route Settings](https://metaplex-foundation.github.io/js/types/js.FreezeSolPaymentGuardRouteSettings.html).

</div>
</AccordionItem>
</Accordion>

## Stop Freezing NFTs

It is possible to stop the freezing of NFTs within a Freeze Sol Payment guard. In other words, new-minted NFTs will no longer be frozen but **existing Frozen NFTs will remain frozen**.

There are several ways of achieving this, which can be separated into two categories:

- ☀️ **Can Thaw**: Existing Frozen NFTs can be thawed by anyone using the `thaw` path of the route instruction.
- ❄️ **Cannot Thaw**: Existing Frozen NFTs cannot be thawed yet and we have to wait for one "Can Thaw" condition to be met.

With that in mind, here is the exhaustive list of ways to stop freezing NFTs and whether or not each of them allows thawing existing Frozen NFTs:

- The Candy Machine has minted out → ☀️ **Can Thaw**.
- The configured Freeze Period — which can be a maximum of 30 days — has passed → ☀️ **Can Thaw**.
- The Candy Machine account was deleted → ☀️ **Can Thaw**.
- The Candy Guard account was deleted → ❄️ **Cannot Thaw**.
- The Freeze Sol Payment guard was removed from the settings → ❄️ **Cannot Thaw**.

## Freeze Escrows and Guard Groups

When using multiple Freeze Sol Payment guards within various [Guard Groups](/programs/candy-machine/guard-groups), it is important to understand the relationship between a Freeze Sol Payment guard and a Freeze Escrow account.

The Freeze Escrow account is a PDA derived from a Destination address. This means that if **multiple Freeze Sol Payment guards** are configured to use the **same Destination address**, they will all **share the same Freeze Escrow account**.

Therefore, they will also share the same Freeze Period and all funds will be collected by the same escrow account. This also means, we only need to call the `initialize` route instruction once per configured Destination address.

It is also possible to use multiple Freeze Sol Payment guards with different Destination addresses. In this case, each Freeze Sol Payment guard will have its own Freeze Escrow account and its own Freeze Period.

The example below illustrates a Candy Machine with three Freeze Sol Payment guards in three groups such that:

- Groups 1 and 2 share the same Destination address and therefore the same Freeze Escrow account.
- Group 3 has its own Destination address and therefore its own Freeze Escrow account.

![CandyMachinesV3-GuardsFreezeSolPayment5.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsFreezeSolPayment5.png#radius)
