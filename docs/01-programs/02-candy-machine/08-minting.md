---
description: "Explains how to mint from Candy Machines and how to handle pre-mint requirements."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Minting

## Introduction

So far, we’ve learned how to create and maintain Candy Machines. We’ve seen how to configure them and how to set up complex minting workflows using guard and guard groups. It’s about time we talk about the last piece of the puzzle: Minting!

## Basic Minting

Whether we are minting from a Candy Guard program or directly from the core Candy Machine program, we will need to construct a few instructions to create an empty mint account before reaching the mint instruction. If this is confusing to you, don’t worry, our SDKs handle all of that wiring for you.

Our SDKs will also know which program to interact with based on whether a Candy Guard account was created for the provided Candy Machine.

So ultimately, to mint, all you need to do is pass in the **Candy Machine** you created and any additional attributes that might be required based on the Candy Machine settings. Additionally, in the rare event that your Candy Machine does not have an associated Candy Guard account, it will need to mint from the configured **Mint Authority** which must be provided as a signer.

![CandyMachinesV3-Minting1.png](/assets/candy-machine-v3/CandyMachinesV3-Minting1.png#radius)

If everything went well, an NFT will be created are returned following the parameters configured in the Candy Machine. For instance, if the given Candy Machine uses **Config Line Settings** with **Is Sequential** set to `false`, then we will get the next item at random.

Note that additional attributes may be required by our SDKs.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

To mint via the JS SDK, you may use the `mint` operation of the Candy Machine module.
The minimum required arguments are the `candyMachine` model (or a subset of it) and the address of the `collectionUpdateAuthority`. The reason we need the latter is that this information does not live in the `candyMachine` model and it is required by the underlying mint instructions.

The `mint` operation will, if everything went well, fetch and return the newly minted NFT.

```tsx
const { nft } = await metaplex.candyMachines().mint({
  candyMachine,
  collectionUpdateAuthority,
});
```

By default, both the payer and the owner of the minted NFT will be set to the current identity. You may change either of these via the `payer` and `owner` attributes respectively.

Note that, since the `payer` attribute is used in every single operation, it must be provided within the `OperationOptions` which are set in the second argument. It must also be passed as a signer since it needs to authorize the transaction.

Here’s an example of how to mint using a custom payer and owner.

```tsx
import { Keypair } from "@solana/web3.js";

const customPayer = Keypair.generate();
const customOwner = Keypair.generate();
const { nft } = await metaplex.candyMachines().mint(
  {
    candyMachine,
    collectionUpdateAuthority,
    owner: customOwner.publicKey,
  },
  {
    payer: customPayer,
  }
);
```

By default, Candy Machines created via the JS SDK will automatically be associated with a Candy Guard account. However, if your Candy Machine is purposefully not using a Candy Guard account, you will need to mint via the configured **Mint Authority**. You may do this in the JS SDK by providing the `mintAuthority` attribute as a signer like so.

```tsx
const { nft } = await metaplex.candyMachines().mint({
  candyMachine,
  collectionUpdateAuthority,
  mintAuthority: candyMachineMintAuthority,
});
```

There are plenty of other attributes that might be relevant to you so feel free to check them out in the API references.

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint), [Input](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint).

</div>
</AccordionItem>
</Accordion>

## Minting With Guards

When minting from a Candy Machine that uses a bunch of guards, you may need to provide additional guard-specific information.

If you were to build the mint instruction manually, that information would be provided as a mixture of instruction arguments and remaining accounts. However, using our SDKs, each guard that requires additional information at mint time defines a set of settings that we call **Mint Settings**. These Mint Settings will then be parsed for you into whatever the program needs.

A good example of a guard that requires Mint Settings is the **NFT Payment** guard which requires the mint address of the NFT we should use to pay for the mint.

![CandyMachinesV3-Minting2.png](/assets/candy-machine-v3/CandyMachinesV3-Minting2.png#radius)

It is worth noting that some guards may not require any Mint Settings whilst still needing to pass guard-specific arguments or remaining accounts when minting. That’s because the SDKs are clever enough to fill in the gaps with the data that’s available to them, e.g. the initial settings of the guard.

An example of such a guard is the **Mint Limit** guard. This guard requires the address of the PDA account that will keep track of how many NFTs were minted by a given wallet. However, it does not require Mint Settings because the address of this PDA can be inferred from other variables we already have such as the payer of the mint.

[Each available guard](/programs/candy-machine/available-guards) contains its own documentation page and it will tell you whether or not that guard expects Mint Settings to be provided when minting.

If you were to only use guards that do not require Mint Settings, you may mint in the same way described by the “Basic Minting” section above. Otherwise, you’ll need to provide an additional object attribute containing the Mint Settings of all guards that require them. Let’s have a look at what that looks like in practice using our SDKs.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

When minting via the JS SDK, you may use the `settings` attribute to provide the required **Mint Settings**. The operation will fail if Mint Settings are missing for any guard that requires them.

Here’s an example using the **Third Party Signer** guard which requires an additional signer and the **Mint Limit** guard which keeps track of how many times a wallet minted from the Candy Machine.

```tsx
import { Keypair } from "@solana/web3.js";

const thirdPartySigner = Keypair.generate();

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    thirdPartySigner: { signer: thirdPartySigner.publicKey },
    mintLimit: { id: 1, limit: 3 },
  },
});

const { nft } = await metaplex.candyMachines().mint({
  candyMachine,
  collectionUpdateAuthority,
  guards: {
    thirdPartySigner: { signer: thirdPartySigner },
  },
});
```

Notice how, even though the Mint Limit guard requires a PDA to be provided as remaining accounts, we do not need to pass any Mint Settings for that guard because the SDK can infer that information for us.

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint), [Input](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint), [Default Mint Settings](https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardMintSettings.html).

</div>
</AccordionItem>
</Accordion>

## Minting With Guard Groups

When minting from a Candy Machine using guard groups, **we must explicitly select which group we want to mint from** by providing its label.

Additionally, Mint Settings may also be required as explained in [the previous section](#minting-with-guards). However, **the Mint Settings will apply to the “Resolved Guards” of the selected group**.

For instance, imagine a Candy Machine with the following guards:

- **Default Guards**:
  - Bot Tax
  - Third Party Signer
  - Start Date
- **Group 1**
  - Label: “nft”
  - Guards:
    - NFT Payment
    - Start Date
- **Group 2**
  - Label: “public”
  - Guards:
    - Sol Payment

The Resolved Guards of Group 1 — labelled “nft” — are:

- Bot Tax: from the **Default Guards**.
- Third Party Signer: from the **Default Guards**.
- NFT Payment: from **Group 1**.
- Start Date: from **Group 1** because it overrides the default guard.

Therefore, the provided Mint Settings must be related to these Resolved Guards. In the example above, Mint Settings must be provided for the Third Party Signer guard and the NFT Payment guard.

![CandyMachinesV3-Minting3.png](/assets/candy-machine-v3/CandyMachinesV3-Minting3.png#radius)

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

When minting from a Candy Machine using guard groups, the label of the group we want to select must be provided via the `group` attribute.

Additionally, the Mint Settings for the Resolved Guards of that group may be provided via the `settings` attribute.

Here is how we would use the JS SDK to mint from the example Candy Machine described above.

```tsx
import { Keypair } from "@solana/web3.js";

const thirdPartySigner = Keypair.generate();

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    botTax: { lamports: sol(0.001), lastInstruction: true },
    thirdPartySigner: { signer: thirdPartySigner.publicKey },
    startDate: { date: toDateTime("2022-10-18T17:00:00Z") },
  },
  groups: [
    {
      label: "nft",
      guards: {
        nftPayment: { requiredCollection, destination: nftTreasury },
        startDate: { date: toDateTime("2022-10-18T16:00:00Z") },
      },
    },
    {
      label: "public",
      guards: {
        solPayment: { amount: sol(1), destination: solTreasury },
      },
    },
  ],
});

const { nft } = await metaplex.candyMachines().mint({
  candyMachine,
  collectionUpdateAuthority,
  group: "nft",
  guards: {
    thirdPartySigner: { signer: thirdPartySigner },
    nftPayment: { mint: nftFromRequiredCollection.address },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint), [Input](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint), [Default Mint Settings](https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardMintSettings.html).

</div>
</AccordionItem>
</Accordion>

## Minting With Pre-Validation

It is important to note that some guards may require additional verification steps before we can mint from their Candy Machine. This pre-validation step usually creates an account on the blockchain or rewards the wallet with a token that acts as proof of that verification.

### Using the route instruction

One way guards can require a pre-validation step is by using [their own special instruction](/programs/candy-machine/special-guard-instructions) via the “route” instruction.

A good example of that is the **Allow List** guard. When using this guard, we must verify that our wallet belongs to a predefined list of wallets by calling the route instruction and providing a valid Merkle Proof. If this route instruction is successful, it will create an Allow List PDA for that wallet which the mint instruction can then read to validate the Allow List guard. [You can read more about the Allow List guard on its dedicated page](/programs/candy-machine/available-guards/allow-list).

![CandyMachinesV3-Minting4.png](/assets/candy-machine-v3/CandyMachinesV3-Minting4.png#radius)

### Using external services

Another way guards may perform that pre-validation step is by relying on an external solution.

For instance, when using the **Gatekeeper** guard, we must request a Gateway Token by performing a challenge — such as completing a Captcha — which depends on the configured Gatekeeper Network. The Gatekeeper guard will then check for the existence of such Gateway Token to either validate or reject the mint. [You can learn more about the Gatekeeper guard on its dedicated page](/programs/candy-machine/available-guards/gatekeeper).

![CandyMachinesV3-Minting5.png](/assets/candy-machine-v3/CandyMachinesV3-Minting5.png#radius)

## Minting With Bot Taxes

One guard you’ll likely want to include in your Candy Machine is the Box Tax guard which protects your Candy Machine against bots by charging failed mints a configurable amount of SOL. This amount is usually small to hurt bots without affecting genuine mistakes from real users. All bot taxes will be transferred to the Candy Machine account so that, once minting is over, you can access these funds by deleting the Candy Machine account.

This guard is a bit special and affects the minting behaviour of all other guards. When the Bot Tax is activated and any other guard fails to validate the mint, **the transaction will pretend to succeed**. This means no errors will be returned by the program but no NFT will be minted either. This is because the transaction must succeed for the funds to be transferred from the bot to the Candy Machine account. [You can learn more about the Bot Tax guard on its dedicated page](/programs/candy-machine/available-guards/bot-tax).

## Conclusion

Congratulations, you now know how Candy Machines work from A to Z!

Here are some additional reading resources you might be interested in:

- [All Available Guards](/programs/candy-machine/available-guards): Have a look through all the guards available to you so you can cherry-pick the ones you need.
- *Create Your First Candy Machine (coming soon)*: This How-To guide helps you upload your assets and create a new Candy Machine from scratch using a CLI tool called “[Sugar](/developer-tools/sugar/overview/introduction)”. It also uses our JS SDK to spin up a minting website for your Candy Machine.
