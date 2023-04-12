---
description: "Explains how to mint from Candy Machines and how to handle pre-mint requirements."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Minting

## Introduction

So far, we’ve learned how to create and maintain Candy Machines. We’ve seen how to configure them and how to set up complex minting workflows using guard and guard groups. It’s about time we talk about the last piece of the puzzle: Minting!

## Basic Minting

As mentioned [in the Candy Guards page](/programs/candy-machine/candy-guards#why-another-program), there are two programs responsible for minting NFTs from Candy Machines: The Candy Machine Core program — responsible for minting the NFT — and the Candy Guard program which adds a configurable Access Control layer on top of it and can be forked to offer custom guards.

As such, there are two ways to mint from a Candy Machine:

- **From a Candy Guard program** which will then delegate the minting to the Candy Machine Core program. Most of the time, you will want to do this as it allows for much more complex minting workflows. You may need to pass extra remaining accounts and instruction data to the mint instruction based on the guards configured in the account. Fortunately, our SDKs make this easy by requiring a few extra parameters and computing the rest for us.

- **Directly from the Candy Machine Core program**. In this case, only the configured mint authority can mint from it and, therefore, it will need to sign the transaction.

![CandyMachinesV3-Minting1.png](/assets/candy-machine-v3/CandyMachinesV3-Minting1.png#radius)

If everything went well, an NFT will be created following the parameters configured in the Candy Machine. For instance, if the given Candy Machine uses **Config Line Settings** with **Is Sequential** set to `false`, then we will get the next item at random.

Starting from version `1.0` of the Candy Guard program, The mint instruction accepts an additional `minter` signer which can be different than the existing `payer` signer. This allows us to create minting workflows where the wallet that mints the NFT is no longer requires to pay SOL fees — such as storage fees and SOL mint payments — as the `payer` signer will abstract away those fees. Note that the `minter` signer will still need to pay for token-based fees and will be used to validate the configured guards.

Please note that the latest mint instruction relies on the latest Token Metadata instructions which use a fair amount of compute units. As such, you may need to increase the compute unit limit of the transaction to ensure it is successful. Our SDKs may also help with this.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

To mint from a Candy Machine via a configured Candy Guard account, you may use the `mintV2` function and provide the mint address and update authority of the collection NFT the minted NFT will belong to. A `minter` signer and `payer` signer may also be provided but they will default to Umi's identity and payer respectively.

As mentioned above, you may need to increase the compute unit limit of the transaction to ensure the `mintV2` instruction is successful. You may do this by using the `setComputeUnitLimit` helper function on the `mpl-essentials` Umi library as illustrated in the code snippet below.

```ts
import { mintV2 } from "@metaplex-foundation/mpl-candy-machine";
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-essentials";
import { transactionBuilder, generateSigner } from "@metaplex-foundation/umi";

const nftMint = generateSigner(umi);
await transactionBuilder()
  .add(setComputeUnitLimit(umi, { units: 800_000 }))
  .add(
    mintV2(umi, {
      candyMachine: candyMachine.publicKey,
      nftMint,
      collectionMint: collectionNft.publicKey,
      collectionUpdateAuthority: collectionNft.metadata.updateAuthority,
    })
  )
  .sendAndConfirm(umi);
```

Note that the `mintV2` instruction takes care of creating the Mint and Token accounts for us by default and will set the NFT owner to the `minter`. If you wish to create these yourself beforehand, you may simply give the NFT mind address as a public key instead of a signer. Here's an example using the `createMintWithAssociatedToken` function from the `mpl-essentials` Umi library:

```ts
import { mintV2 } from "@metaplex-foundation/mpl-candy-machine";
import {
  createMintWithAssociatedToken,
  setComputeUnitLimit,
} from "@metaplex-foundation/mpl-essentials";
import { transactionBuilder, generateSigner } from "@metaplex-foundation/umi";

const nftMint = generateSigner(umi);
const nftOwner = generateSigner(umi).publicKey;
await transactionBuilder()
  .add(setComputeUnitLimit(umi, { units: 800_000 }))
  .add(createMintWithAssociatedToken(umi, { mint: nftMint, owner: nftOwner }))
  .add(
    mintV2(umi, {
      candyMachine: candyMachine.publicKey,
      nftMint: nftMint.publicKey,
      collectionMint: collectionNft.publicKey,
      collectionUpdateAuthority: collectionNft.metadata.updateAuthority,
    })
  )
  .sendAndConfirm(umi);
```

In the rare event that you wish to mint directly from the Candy Machine Core program, you may use the `mintFromCandyMachineV2` function instead. This function requires the mint authority of the candy machine to be provided as a signer and accepts an explicit `nftOwner` attribute.

```ts
import { mintFromCandyMachineV2 } from "@metaplex-foundation/mpl-candy-machine";
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-essentials";
import { transactionBuilder, generateSigner } from "@metaplex-foundation/umi";

const nftMint = generateSigner(umi);
const nftOwner = generateSigner(umi).publicKey;
await transactionBuilder()
  .add(setComputeUnitLimit(umi, { units: 800_000 }))
  .add(
    mintFromCandyMachineV2(umi, {
      candyMachine: candyMachine.publicKey,
      mintAuthority: umi.identity,
      nftOwner,
      nftMint,
      collectionMint: collectionNft.publicKey,
      collectionUpdateAuthority: collectionNft.metadata.updateAuthority,
    })
  )
  .sendAndConfirm(umi);
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [mintFromCandyMachineV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintFromCandyMachineV2.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

:::info
The JS SDK is only compatible with Candy Machine V3 accounts whose account version is 1. That means, it does not support minting programmable NFTs and it is not compatible with Candy Machines created with the latest version of [Sugar](/developer-tools/sugar/overview/introduction).

You may consider [using the Umi library](/programs/candy-machine/getting-started#umi-library-recommended) instead which supports all account versions of Candy Machine V3. Alternatively, you may downgrade you Sugar version to `2.0.0` or use the Solita-generated library.

See [Programmable NFTs](/programs/candy-machine/programmable-nfts) for more details.
:::

To mint via the JS SDK, you may use the `mint` operation of the Candy Machine module.
The minimum required arguments are the `candyMachine` model (or a subset of it) and the address of the `collectionUpdateAuthority`. The reason we need the latter is that this information does not live in the `candyMachine` model and it is required by the underlying mint instructions.

The JS SDK will know which program to interact with based on whether a Candy Guard account was created for the provided Candy Machine. It will also fetch most of the mint parameters from the candy guard data in the provided Candy Machine model.

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

If you were to build the mint instruction manually, that information would be provided as a mixture of instruction data and remaining accounts. However, using our SDKs, each guard that requires additional information at mint time defines a set of settings that we call **Mint Settings**. These Mint Settings will then be parsed into whatever the program needs.

A good example of a guard that requires Mint Settings is the **NFT Payment** guard which requires the mint address of the NFT we should use to pay for the mint amongst other things.

![CandyMachinesV3-Minting2.png](/assets/candy-machine-v3/CandyMachinesV3-Minting2.png#radius)

[Each available guard](/programs/candy-machine/available-guards) contains its own documentation page and it will tell you whether or not that guard expects Mint Settings to be provided when minting.

If you were to only use guards that do not require Mint Settings, you may mint in the same way described by the “Basic Minting” section above. Otherwise, you’ll need to provide an additional object attribute containing the Mint Settings of all guards that require them. Let’s have a look at what that looks like in practice using our SDKs.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

When minting via the Umi library, you may use the `mintArgs` attribute to provide the required **Mint Settings**.

Here’s an example using the **Third Party Signer** guard which requires an additional signer and the **Mint Limit** guard which keeps track of how many times a wallet minted from the Candy Machine.

```ts
import {
  some,
  generateSigner,
  transactionBuilder,
} from "@metaplex-foundation/umi";
import { create, mintV2 } from "@metaplex-foundation/mpl-candy-machine";
import { setComputeUnitLimit } from "@metaplex-foundation/mpl-essentials";

// Create a Candy Machine with guards.
const thirdPartySigner = generateSigner();
await create(umi, {
  // ...
  guards: {
    thirdPartySigner: some({ signer: thirdPartySigner.publicKey }),
    mintLimit: some({ id: 1, limit: 3 }),
  },
}).sendAndConfirm(umi);

// Mint from the Candy Machine.
const nftMint = generateSigner(umi);
await transactionBuilder()
  .add(setComputeUnitLimit(umi, { units: 800_000 }))
  .add(
    mintV2(umi, {
      candyMachine: candyMachine.publicKey,
      nftMint,
      collectionMint: collectionNft.publicKey,
      collectionUpdateAuthority: collectionNft.metadata.updateAuthority,
      mintArgs: {
        thirdPartySigner: some({ signer: thirdPartySigner }),
        mintLimit: some({ id: 1 }),
      },
    })
  )
  .sendAndConfirm(umi);
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [DefaultGuardSetMintArgs](https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetMintArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

:::info
The JS SDK is only compatible with Candy Machine V3 accounts whose account version is 1. That means, it does not support minting programmable NFTs and it is not compatible with Candy Machines created with the latest version of [Sugar](/developer-tools/sugar/overview/introduction).

You may consider [using the Umi library](/programs/candy-machine/getting-started#umi-library-recommended) instead which supports all account versions of Candy Machine V3. Alternatively, you may downgrade you Sugar version to `2.0.0` or use the Solita-generated library.

See [Programmable NFTs](/programs/candy-machine/programmable-nfts) for more details.
:::

When minting via the JS SDK, you may use the `settings` attribute to provide the required **Mint Settings**. The operation will fail if Mint Settings are missing for any guard that requires them.

Since the JS SDK requires the whole Candy Machine model and its guard settings to be provided, it can infer most of the mint settings from that model and, therefore, its mint settings object is typically smaller than the other SDKs.

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
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

When minting from a Candy Machine using guard groups, the label of the group we want to select must be provided via the `group` attribute.

Additionally, the Mint Settings for the Resolved Guards of that group may be provided via the `mintArgs` attribute.

Here is how we would use the Umi library to mint from the example Candy Machine described above.

```ts
// Create a Candy Machine with guards.
const thirdPartySigner = generateSigner();
await create(umi, {
  // ...
  guards: {
    botTax: some({ lamports: sol(0.001), lastInstruction: true }),
    thirdPartySigner: some({ signer: thirdPartySigner.publicKey }),
    startDate: some({ date: dateTime("2022-10-18T17:00:00Z") }),
  },
  groups: [
    {
      label: "nft",
      guards: {
        nftPayment: some({ requiredCollection, destination: nftTreasury }),
        startDate: some({ date: dateTime("2022-10-18T16:00:00Z") }),
      },
    },
    {
      label: "public",
      guards: {
        solPayment: some({ lamports: sol(1), destination: solTreasury }),
      },
    },
  ],
}).sendAndConfirm(umi);

// Mint from the Candy Machine.
const nftMint = generateSigner(umi);
await transactionBuilder()
  .add(setComputeUnitLimit(umi, { units: 800_000 }))
  .add(
    mintV2(umi, {
      candyMachine: candyMachine.publicKey,
      nftMint,
      collectionMint: collectionNft.publicKey,
      collectionUpdateAuthority: collectionNft.metadata.updateAuthority,
      group: some("nft"),
      mintArgs: {
        thirdPartySigner: some({ signer: thirdPartySigner }),
        nftPayment: some({
          mint: nftFromRequiredCollection.publicKey,
          destination: nftTreasury,
          tokenStandard: TokenStandard.NonFungible,
        }),
      },
    })
  )
  .sendAndConfirm(umi);
```

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html), [DefaultGuardSetMintArgs](https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetMintArgs.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

:::info
The JS SDK is only compatible with Candy Machine V3 accounts whose account version is 1. That means, it does not support minting programmable NFTs and it is not compatible with Candy Machines created with the latest version of [Sugar](/developer-tools/sugar/overview/introduction).

You may consider [using the Umi library](/programs/candy-machine/getting-started#umi-library-recommended) instead which supports all account versions of Candy Machine V3. Alternatively, you may downgrade you Sugar version to `2.0.0` or use the Solita-generated library.

See [Programmable NFTs](/programs/candy-machine/programmable-nfts) for more details.
:::

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
- _Create Your First Candy Machine (coming soon)_: This How-To guide helps you upload your assets and create a new Candy Machine from scratch using a CLI tool called “[Sugar](/developer-tools/sugar/overview/introduction)”. It also uses our JS SDK to spin up a minting website for your Candy Machine.
