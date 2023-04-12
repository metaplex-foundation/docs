---
description: "Explains how guards work and how to enable them."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Candy Guards

## Introduction

Now that we know how Candy Machines work and how to load them, it’s time we talk about the last piece of the puzzle: Guards.

## What is a guard?

A guard is a modular piece of code that can restrict access to the mint of a Candy Machine and even add new features to it!

There is a large set of guards to choose from and each of them can be activated and configured at will.

We’ll touch on [all available guards](/programs/candy-machine/available-guards) later in this documentation but let’s go through a few examples here to illustrate that.

- When the **Start Date** guard is enabled, minting will be forbidden before the preconfigured date. There is also an **End Date** guard to forbid minting after a given date.
- When the **Sol Payment** guard is enabled, the minting wallet will have to pay a configured amount to a configured destination wallet. Similar guards exist for paying with tokens or NFTs of a specific collection.
- The **Token Gate** and **NFT Gate** guards restrict minting to certain token holders and NFT holders respectively.
- The **Allow List** guard only allows minting if the wallet is part of a predefined list of wallets. Kind of like a guest list for minting.

As you can see, each guard takes care of one responsibility and one responsibility only which makes them composable. In other words, you can pick and choose the guards your need to create your perfect Candy Machine.

## The Candy Guard account

If you remember the content of our [Candy Machine account](/programs/candy-machine/managing-candy-machines#candy-machine-account), you’ll see no signs of guards in there. This is because guards live in another account called the **Candy Guard account** which is created by the **Candy Guard program**.

Each Candy Machine account should typically be associated with its own Candy Guard account which will add a layer of protection to it.

This works by creating a Candy Guard account and making it the **Mint Authority** of the Candy Machine account. By doing so, it is no longer possible to mint directly from the main Candy Machine program — known as the **Candy Machine Core program**. Instead, we must mint via the Candy Guard program which, if all guards are resolved successfully, will defer to the Candy Machine Core program to finish the minting process.

![Candy Machines V3 - Candy Guards 1@2x.png](/assets/candy-machine-v3/CandyMachinesV3-CandyGuards1.png#radius)

Note that, since Candy Machine and Candy Guard accounts work hand and hand together, our SDKs treat them as one entity. When you create a Candy Machine with our SDKs, an associated Candy Guard account will also be created by default. The same goes when updating Candy Machines as they allow you to update guards at the same time. We will see some concrete examples on this page.

## Why another program?

The reason guards don’t live in the main Candy Machine program is to separate the access control logic from the main Candy Machine responsibility which is to mint an NFT.

This enables guards to not only be modular but extendable. Anyone can create and deploy their own Candy Guard program to create custom guards whilst relying on the Candy Machine Core program for all the rest.

![Candy Machines V3 - Candy Guards 2@2x.png](/assets/candy-machine-v3/CandyMachinesV3-CandyGuards2.png#radius)

Note that our SDKs also offer ways to register your own Candy Guard programs and their custom guards so you can leverage their friendly API and easily share your guards with others.

## All available guards

Alright, now that we understand what guards are, let’s see what default guards are available to us.

In the following list, we’ll provide a short description of each guard with a link pointing to their dedicated page for more advanced reading.

- [**Address Gate**](/programs/candy-machine/available-guards/address-gate): Restricts the mint to a single address.
- [**Allow List**](/programs/candy-machine/available-guards/allow-list): Uses a wallet address list to determine who is allowed to mint.
- [**Bot Tax**](/programs/candy-machine/available-guards/bot-tax): Configurable tax to charge invalid transactions.
- [**End Date**](/programs/candy-machine/available-guards/end-date): Determines a date to end the mint.
- [**Freeze Sol Payment**](/programs/candy-machine/available-guards/freeze-sol-payment): Set the price of the mint in SOL with a freeze period.
- [**Freeze Token Payment**](/programs/candy-machine/available-guards/freeze-token-payment): Set the price of the mint in token amount with a freeze period.
- [**Gatekeeper**](/programs/candy-machine/available-guards/gatekeeper): Restricts minting via a Gatekeeper Network e.g. Captcha integration.
- [**Mint Limit**](/programs/candy-machine/available-guards/mint-limit): Specifies a limit on the number of mints per wallet.
- [**Nft Burn**](/programs/candy-machine/available-guards/nft-burn): Restricts the mint to holders of a specified collection, requiring a burn of the NFT.
- [**Nft Gate**](/programs/candy-machine/available-guards/nft-gate): Restricts the mint to holders of a specified collection.
- [**Nft Payment**](/programs/candy-machine/available-guards/nft-payment): Set the price of the mint as an NFT of a specified collection.
- [**Redeemed Amount**](/programs/candy-machine/available-guards/redeemed-amount): Determines the end of the mint based on the total amount minted.
- [**Sol Payment**](/programs/candy-machine/available-guards/sol-payment): Set the price of the mint in SOL.
- [**Start Date**](/programs/candy-machine/available-guards/start-date): Determines the start date of the mint.
- [**Third Party Signer**](/programs/candy-machine/available-guards/third-party-signer): Requires an additional signer on the transaction.
- [**Token Burn**](/programs/candy-machine/available-guards/token-burn): Restricts the mint to holders of a specified token, requiring a burn of the tokens.
- [**Token Gate**](/programs/candy-machine/available-guards/token-gate): Restricts the mint to holders of a specified token.
- [**Token Payment**](/programs/candy-machine/available-guards/token-payment): Set the price of the mint in token amount.

## Creating a Candy Machine with guards

So far, the Candy Machine we created did not have any guards enabled. Now that we know all the guards available to us, let’s see how we can set up new Candy Machines with some guards enabled.

The concrete implementation will depend on which SDK you are using (see below) but the main idea is that you enable guards by providing their required settings. Any guard that has not been set up will be disabled.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

To enable guards using the Umi library, simply provides the `guards` attribute to the `create` function and pass in the settings of every guard you want to enable. Any guard set to `none()` or not provided will be disabled.

```ts
import { some, sol, dateTime } from "@metaplex-foundation/umi";

await create(umi, {
  // ...
  guards: {
    botTax: some({ lamports: sol(0.01), lastInstruction: true }),
    solPayment: some({ lamports: sol(1.5), destination: treasury }),
    startDate: some({ date: dateTime("2023-04-04T16:00:00Z") }),
    // All other guards are disabled...
  },
}).sendAndConfirm(umi);
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html), [DefaultGuardSetArgs](https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

To enable guards using the JS SDK, simply provides the `guards` attribute to the `create` operation and pass in the settings of every guard you want to enable. Any guard set to `null` or not provided will be disabled.

```tsx
import { sol, toBigNumber, toDateTime } from "@metaplex-foundation/js";

const { candyMachine } = await metaplex.candyMachines().create({
  itemsAvailable: toBigNumber(5000),
  sellerFeeBasisPoints: 333, // 3.33%
  collection: {
    address: collectionNft.address,
    updateAuthority: metaplex.identity(),
  },
  guards: {
    botTax: { lamports: sol(0.01), lastInstruction: false },
    solPayment: { amount: sol(1.5), destination: treasury },
    startDate: { date: toDateTime("2022-10-17T16:00:00Z") },
    // All other guards are disabled...
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Default Candy Guard Settings](https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Updating guards

Did you set something wrong in your guards? Did you change your mind about the mint price? Do you need to delay the start of the mint of a little? No worries, guards can easily be updated following the same settings used when creating them.

You can enable new guards by providing their settings or disable current ones by giving them empty settings.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

You may update the guards of a Candy Machine the same way you created them. That is, by providing their settings inside the `guards` object of the `updateCandyGuard` function. Any guard set to `none()` or not provided will be disabled.

Note that the entire `guards` object will be updated meaning **it will override all existing guards**!

Therefore, make sure to provide the settings for all guards you want to enable, even if their settings are not changing. You may want to fetch the candy guard account first to fallback to its current guards.

```tsx
import { some, none, sol } from "@metaplex-foundation/umi";

const candyGuard = fetchCandyGuard(umi, candyMachine.mintAuthority);
await updateCandyGuard(umi, {
  candyGuard: candyGuard.publicKey,
  guards: {
    ...candyGuard.guards,
    botTax: none(),
    solPayment: some({ lamports: sol(3), destination: treasury }),
  },
});
```

API References: [updateCandyGuard](https://mpl-candy-machine-js-docs.vercel.app/functions/updateCandyGuard.html), [CandyGuard](https://mpl-candy-machine-js-docs.vercel.app/types/CandyGuard.html), [DefaultGuardSetArgs](https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

You may update the guards of a Candy Machine the same way you created them. That is, by providing their settings inside the `guards` object of the `update` operation. Any guard set to `null` or not provided will be disabled.

Note that the entire `guards` object will be updated meaning **it will override all existing guards**!

Therefore, make sure to provide the settings for all guards you want to enable, even if their settings are not changing.

```tsx
import { sol, toDateTime } from "@metaplex-foundation/js";

await metaplex.candyMachines().update({
  candyMachine,
  guards: {
    botTax: { lamports: sol(0.01), lastInstruction: false },
    solPayment: { amount: sol(3), destination: treasury },
    startDate: { date: toDateTime("2022-10-18T16:00:00Z") },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#update), [Input](https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#update), [Default Candy Guard Settings](https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Viewing the guards of a Candy Machine

Once you have set up your guards on a Candy Machine, all the provided settings can be retrieved and viewed by anyone on the Candy Guard account.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

You may access the candy guard associated with a candy machine by using the `fetchCandyGuard` function on the `mintAuthority` attribute of the candy machine account.

```ts
import {
  fetchCandyMachine,
  fetchCandyGuard,
} from "@metaplex-foundation/mpl-candy-machine";

const candyMachine = await fetchCandyMachine(umi, candyMachineAddress);
const candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);

candyGuard.guards; // All guard settings.
candyGuard.guards.botTax; // Bot Tax settings.
candyGuard.guards.solPayment; // Sol Payment settings.
// ...
```

Note that, when using the `create` function, an associated candy guard account is automatically created for each candy machine such that their address is deterministic. Therefore, in this case, we could fetch both accounts using only one RPC call like so.

```ts
import { assertAccountExists } from "@metaplex-foundation/umi";
import {
  findCandyGuardPda,
  deserializeCandyMachine,
  deserializeCandyGuard,
} from "@metaplex-foundation/mpl-candy-machine";

const candyGuardAddress = findCandyGuardPda(umi, { base: candyMachineAddress });
const [rawCandyMachine, rawCandyGuard] = await umi.rpc.getAccounts([
  candyMachineAddress,
  candyGuardAddress,
]);
assertAccountExists(rawCandyMachine);
assertAccountExists(rawCandyGuard);

const candyMachine = deserializeCandyMachine(umi, rawCandyMachine);
const candyGuard = deserializeCandyGuard(umi, rawCandyGuard);
```

API References: [fetchCandyGuard](https://mpl-candy-machine-js-docs.vercel.app/functions/fetchCandyGuard.html), [findCandyGuardPda](https://mpl-candy-machine-js-docs.vercel.app/functions/findCandyGuardPda.html), [CandyGuard](https://mpl-candy-machine-js-docs.vercel.app/types/CandyGuard.html), [DefaultGuardSetArgs](https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

When using the JS SDK, Candy Machines associated with Candy Guards will automatically contain the relevant Candy Guard account so you have all the data you need in one place.

Namely, the Candy Machine model contains an optional `candyGuard` property which, when not `null`, contains all the information regarding the guards of a Candy Machine.

When `candyGuard` is `null`, it means the Candy Machine is not associated with any Candy Guard account.

```tsx
const candyMachine = await metaplex.candyMachines().findByAddress({...});

// This is how you can access the Candy Guard account
// associated with the Candy Machine. When `null`,
// the Candy Machine does not use guards.
candyMachine.candyGuard;

candyMachine.candyGuard.guards;            // All guard settings.
candyMachine.candyGuard.guards.botTax;     // Bot Tax settings.
candyMachine.candyGuard.guards.solPayment; // Sol Payment settings.
// ...
```

API References: [Candy Machine model](https://metaplex-foundation.github.io/js/types/js.CandyMachine.html), [Candy Guard model](https://metaplex-foundation.github.io/js/types/js.CandyGuard.html), [Default Candy Guard Settings](https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardSettings.html).

</div>
</AccordionItem>
</Accordion>

## Wrapping and unwrapping Candy Guard accounts manually

So far we’ve managed both Candy Machine and Candy Guard accounts together because that makes the most sense for most projects.

However, it is important to note that Candy Machines and Candy Guards can be created and associated in different steps, even using our SDKs.

You will first need to create the two accounts separately and associate/dissociate them manually.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

The `create` function of the Umi library already takes care of creating and associating a brand new Candy Guard account for every Candy Machine account created.

However, if you wanted to create them separately and manually associate/dissociate them, this is how you’d do it.

```ts
import { some, percentAmount, sol, dateTime } from "@metaplex-foundation/umi";

// Create a Candy Machine without a Candy Guard.
const candyMachine = generateSigner(umi);
await createCandyMachineV2({
  candyMachine,
  tokenStandard: TokenStandard.NonFungible,
  collectionMint: collectionMint.publicKey,
  collectionUpdateAuthority: umi.identity,
  itemsAvailable: 100,
  sellerFeeBasisPoints: percentAmount(1.23),
  creators: [
    { address: umi.identity.publicKey, verified: false, percentageShare: 100 },
  ],
  configLineSettings: some({
    prefixName: "My NFT #",
    nameLength: 3,
    prefixUri: "https://example.com/",
    uriLength: 20,
    isSequential: false,
  }),
}).sendAndConfirm(umi);

// Create a Candy Guard.
const base = generateSigner(umi);
const candyGuard = findCandyGuardPda(umi, { base: base.publicKey });
await createCandyGuard({
  base,
  guards: {
    botTax: { lamports: sol(0.01), lastInstruction: false },
    solPayment: { lamports: sol(1.5), destination: treasury },
    startDate: { date: dateTime("2022-10-17T16:00:00Z") },
  },
}).sendAndConfirm(umi);

// Associate the Candy Guard with the Candy Machine.
await wrap({
  candyMachine: candyMachine.publicKey,
  candyGuard,
}).sendAndConfirm(umi);

// Dissociate them.
await unwrap({
  candyMachine: candyMachine.publicKey,
  candyGuard,
}).sendAndConfirm(umi);
```

API References: [createCandyMachineV2](https://mpl-candy-machine-js-docs.vercel.app/functions/createCandyMachineV2.html), [createCandyGuard](https://mpl-candy-machine-js-docs.vercel.app/functions/createCandyGuard.html), [wrap](https://mpl-candy-machine-js-docs.vercel.app/functions/wrap.html), [unwrap](https://mpl-candy-machine-js-docs.vercel.app/functions/unwrap.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

The `create` operation of the JS SDK already takes care of creating and associating a brand new Candy Guard account for every Candy Machine account created.

However, if you wanted to create them separately and manually associate/dissociate them, this is how you’d do it.

```tsx
import { sol, toBigNumber, toDateTime } from "@metaplex-foundation/js";

// Create a Candy Machine without a Candy Guard.
const { candyMachine } = await metaplex.candyMachines().create({
  itemsAvailable: toBigNumber(5000),
  sellerFeeBasisPoints: 333, // 3.33%
  collection: {
    address: collectionNft.address,
    updateAuthority: metaplex.identity(),
  },
  withoutCandyGuard: true,
});

// Create a Candy Guard.
const { candyGuard } = await metaplex.candyMachines().createCandyGuard({
  guards: {
    botTax: { lamports: sol(0.01), lastInstruction: false },
    solPayment: { amount: sol(1.5), destination: treasury },
    startDate: { date: toDateTime("2022-10-17T16:00:00Z") },
  },
});

// Associate the Candy Guard with the Candy Machine.
await mx.candyMachines().wrapCandyGuard({
  candyMachine: candyMachine.address,
  candyGuard: candyGuard.address,
});

// Dissociate them.
await mx.candyMachines().unwrapCandyGuard({
  candyMachine: candyMachine.address,
  candyGuard: candyGuard.address,
});
```

API References:

- Create Candy Guard: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#createCandyGuard), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyGuardInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyGuardOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#createCandyGuard).
- Wrap Candy Guard: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#wrapCandyGuard), [Input](https://metaplex-foundation.github.io/js/types/js.WrapCandyGuardInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.WrapCandyGuardOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#wrapCandyGuard).
- Unwrap Candy Guard: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#unwrapCandyGuard), [Input](https://metaplex-foundation.github.io/js/types/js.UnwrapCandyGuardInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.UnwrapCandyGuardOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#unwrapCandyGuard).

</div>
</AccordionItem>
</Accordion>

## Conclusion

Guards are important components of Candy Machines. They make it easy to configure the minting process whilst allowing anyone to create their own guards for application-specific needs. [On the next page](/programs/candy-machine/guard-groups), we’ll see how we can create even more minting scenarios by using guard groups!
