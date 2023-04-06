---
description: "Explains how to mint Programmable NFTs from candy machines."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Programmable NFTs

## Introduction

Version `1.7` of Token Metadata introduced a [new type of asset class called Programmable NFTs](programs/token-metadata/overview#programmable-nfts) allowing, amongst other things, creators to enforce royalties on secondary sales.

Since version `1.0` of Candy Machine Core and version `1.0` of Candy Guard, it is now possible to **mint Programmable NFTs from candy machines** and even update the token standard of existing candy machines.

:::info
Note that, for JavaScript clients, the Metaplex JS SDK does not and will not support minting Programmable NFTs from candy machines. This is because we released a new [Umi-compatible library](/programs/candy-machine/getting-started#umi-library-recommended) that does support everything on the programs, which is the new recommended way to manage candy machines in JavaScript.

Alternatively, if you do not wish to switch to the Umi framework, you may instead use the Solita-generated libraries [mpl-candy-machine-core](https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-machine-core) from `v0.2.1` and [mpl-candy-guard](https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-guard) from `v0.4.1`.
:::

## For new candy machines

A new instruction called `initializeV2` has been added to the Candy Machine Core program. This instruction is similar to the `initialize` instruction, but it allows you to specify the token standard you want to use for your candy machine. This instruction will mark the newly created Candy Machine as `V2` to differentiate it from the `V1` Candy Machines that do not store the token standard. These new fields are using existing padding in the Candy Machine account data to avoid breaking changes in the Candy Machine serialization logic.

The `initializeV2` instruction can also be used to create a Candy Machine that mints regular NFTs and, therefore, the `initialize` instruction is now deprecated. Note that no changes are needed for the Candy Guard program here since it delegates to the Candy Machine Core when minting the NFT.

Also, note that some optional accounts may be required depending on the token standard you choose. For example, the `ruleSet` account may be provided to assign a specific rule set to all minted Programmable NFTs. If no `ruleSet` account is provided, it will use the rule set of the Collection NFT if any. Otherwise, minted Programmable NFTs will simply not have any rule set assigned. On the other hand, the `ruleSet` account will be ignored when minting regular NFTs.

Additionally, the `collectionDelegateRecord` account should now refer to the new [Metadata Delegate Record](https://docs.rs/mpl-token-metadata/latest/mpl_token_metadata/state/struct.MetadataDelegateRecord.html) from Token Metadata.

You may want to read the "[Create Candy Machines](/programs/candy-machine/managing-candy-machines#create-candy-machines)" section of this documentation for more details but here are some examples on how to use our SDKs to create a new Candy Machine that mints Programmable NFTs.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

```ts
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";
import { create } from "@metaplex-foundation/mpl-candy-machine";
import { generateSigner } from "@metaplex-foundation/umi";

await create(umi, {
  // ...
  tokenStandard: TokenStandard.ProgrammableNonFungible,
}).sendAndConfirm(umi);
```

API References: [create](https://mpl-candy-machine-js-docs.vercel.app/functions/create.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

_This operation is not supported by the JS SDK but you may use the underlying Solita-generated library instead like so._

```ts
import { createInitializeV2Instruction } from "@metaplex-foundation/mpl-candy-machine-core";
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";

const initializeV2Instruction: TransactionInstruction =
  createInitializeV2Instruction(
    {
      authorityPda,
      collectionUpdateAuthority,
      candyMachine,
      authority,
      payer,
      ruleSet,
      collectionMetadata,
      collectionMint,
      collectionMasterEdition,
      collectionDelegateRecord,
      tokenMetadataProgram,
      systemProgram,
      sysvarInstructions,
    },
    {
      data: {...},
      tokenStandard: TokenStandard.ProgrammableNonFungible,
    }
  );
```

API References: [Typedoc](https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/functions/createInitializeV2Instruction.html), [Program](https://docs.rs/mpl-candy-machine-core/1.0.0/mpl_candy_machine_core/accounts/struct.InitializeV2.html).

</div>
</AccordionItem>
</Accordion>

## For existing candy machines

It is possible to update the token standard of existing Candy Machines via the new `setTokenStandard` instruction. When calling this instruction on a Candy Machine `V1`, it will also upgrade the Candy Machine to `V2` and store the token standard in the account data.

You may want to read the "[Update Token Standard](/programs/candy-machine/managing-candy-machines#update-token-standard)" section of this documentation for more details but here are some examples on how to use our SDKs to update the token standard of an existing Candy Machine to Programmable NFTs.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

```ts
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";
import { setTokenStandard } from "@metaplex-foundation/mpl-candy-machine";

await setTokenStandard(umi, {
  candyMachine: candyMachine.publicKey,
  collectionMint: candyMachine.collectionMint,
  collectionUpdateAuthority,
  tokenStandard: TokenStandard.ProgrammableNonFungible,
}).sendAndConfirm(umi);
```

API References: [setTokenStandard](https://mpl-candy-machine-js-docs.vercel.app/functions/setTokenStandard.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

_This operation is not supported by the JS SDK but you may use the underlying Solita-generated library instead like so._

```ts
import { createSetTokenStandardInstruction } from "@metaplex-foundation/mpl-candy-machine-core";
import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";

const setTokenStandardInstruction: TransactionInstruction =
  createSetTokenStandardInstruction(
    {
      authority,
      authorityPda,
      candyMachine,
      collectionAuthorityRecord,
      collectionDelegateRecord,
      collectionMetadata,
      collectionMint,
      collectionUpdateAuthority,
      payer,
      ruleSet,
      sysvarInstructions,
      tokenMetadataProgram,
    },
    {
      tokenStandard: TokenStandard.ProgrammableNonFungible,
    }
  );
```

API References: [Typedoc](https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/functions/createSetTokenStandardInstruction.html), [Program](https://docs.rs/mpl-candy-machine-core/1.0.0/mpl_candy_machine_core/accounts/struct.SetTokenStandard.html).

</div>
</AccordionItem>
</Accordion>

Additionally, a new `setCollectionV2` instruction has been added to support setting a collection that is compatible with Programmable NFTs. This instruction also works with regular NFTs and deprecates the `setCollection` instruction.

Here as well, you can read more about it in the "[Update Collection](/programs/candy-machine/managing-candy-machines#update-collection)" section of this documentation.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

```ts
import { setCollectionV2 } from "@metaplex-foundation/mpl-candy-machine";

await setCollectionV2(umi, {
  candyMachine: candyMachine.publicKey,
  collectionMint: candyMachine.collectionMint,
  collectionUpdateAuthority: collectionUpdateAuthority.publicKey,
  newCollectionMint: newCollectionMint.publicKey,
  newCollectionUpdateAuthority,
}).sendAndConfirm(umi);
```

API References: [setCollectionV2](https://mpl-candy-machine-js-docs.vercel.app/functions/setCollectionV2.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

_This operation is not supported by the JS SDK but you may use the underlying Solita-generated library instead like so._

```ts
import { createSetCollectionV2Instruction } from "@metaplex-foundation/mpl-candy-machine-core";

const setCollectionV2Instruction: TransactionInstruction =
  createSetCollectionV2Instruction({
    authority,
    authorityPda,
    candyMachine,
    collectionDelegateRecord,
    collectionMetadata,
    collectionMint,
    collectionUpdateAuthority,
    newCollectionDelegateRecord,
    newCollectionMasterEdition,
    newCollectionMetadata,
    newCollectionMint,
    newCollectionUpdateAuthority,
    payer,
    sysvarInstructions,
    tokenMetadataProgram,
  });
```

API References: [Typedoc](https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/functions/createSetCollectionV2Instruction.html), [Program](https://docs.rs/mpl-candy-machine-core/1.0.0/mpl_candy_machine_core/accounts/struct.SetCollectionV2.html).

</div>
</AccordionItem>
</Accordion>

## A new minting instruction

The `mint` instruction of both the Candy Machine Core and the Candy Guard programs has been updated to support minting Programmable NFTs. This new instruction is called `mintV2` and it is similar to the `mint` instruction, but requires additional accounts to be passed in. Here as well, the new `mintV2` instructions can be used to mint regular NFTs and, therefore, they deprecate the existing `mint` instructions.

The entire "[Minting](/programs/candy-machine/minting)" page has been updated to use the new `mintV2` instructions but here's a quick example of how to use them with Programmable NFTs.

<Accordion>
<AccordionItem title="JavaScript — Umi library (recommended)" open={true}>
<div className="accordion-item-padding">

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

API References: [mintV2](https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html)

</div>
</AccordionItem>
<AccordionItem title="JavaScript — SDK">
<div className="accordion-item-padding">

_This operation is not supported by the JS SDK but you may use the underlying Solita-generated library instead like so._

```ts
import { createMintV2Instruction } from "@metaplex-foundation/mpl-candy-guard";

const mintV2Instruction: TransactionInstruction = createMintV2Instruction(
  {
    candyGuard,
    candyMachine,
    candyMachineAuthorityPda,
    candyMachineProgram,
    collectionDelegateRecord,
    collectionMasterEdition,
    collectionMetadata,
    collectionMint,
    collectionUpdateAuthority,
    minter,
    nftMasterEdition,
    nftMetadata,
    nftMint,
    nftMintAuthority,
    payer,
    recentSlothashes,
    splTokenProgram,
    sysvarInstructions,
    token,
    tokenMetadataProgram,
    tokenRecord,
    anchorRemainingAccounts: [], // Any remaining accounts used by registered guards.
  },
  {
    label: null, // Or the label of the group when minting from one.
    mintArgs: new Uint8Array([]), // The serialized data to pass to registered guards when applicable.
  }
);
```

API References:

- Candy Guard [Typedoc](https://metaplex-foundation.github.io/mpl-candy-guard/functions/createMintV2Instruction.html), [Program](https://docs.rs/mpl-candy-guard/latest/mpl_candy_guard/accounts/struct.MintV2.html).
- Candy Machine Core: [Typedoc](https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/functions/createMintV2Instruction.html), [Program](https://docs.rs/mpl-candy-machine-core/1.0.0/mpl_candy_machine_core/accounts/struct.MintV2.html).

</div>
</AccordionItem>
</Accordion>

Note that some of the guards offered by the Candy Guard program have also been updated to support Programmable NFTs. Whilst the updates do not introduce breaking changes when minting regular NFTs, they may expect more remaining accounts when minting depending on the token standard.

The guards affected by these changes are:

- The `nftBurn` and `nftPayment` guards now allow the burned/sent NFT to be a Programmable NFT.
- The `FreezeSolPayment` and `FreezeTokenPayment` guards. Since Programmable NFTs are by definition always frozen, they are Locked when minted via a Utility delegate and Unlocked when the thaw conditions have been met.

## Additional reading

You may find the following resources about Programmable NFTs and Candy Machines useful:

- [Programmable NFTs Guide](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/token-metadata/program/ProgrammableNFTGuide.md)
- [Candy Machine Core Program](https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-machine-core)
- [Candy Guard Program](https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard)
