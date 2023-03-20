---
description: "Explains how to mint Programmable NFTs from candy machines."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Programmable NFTs

## Introduction

Version `1.7` of Token Metadata introduced a [new type of asset class called Programmable NFTs](programs/token-metadata/overview#programmable-nfts) allowing, amongst other things, creators to enforce royalties on secondary sales.

Since version `1.0` of Candy Machine Core and version `1.0` of Candy Guard, it is now possible to **mint Programmable NFTs from candy machines** and even update the token standard of existing candy machines.

:::info
Note that, for JavaScript clients, the rest of the documentation currently provides examples using the Metaplex JS SDK. However, Programmable NFTs will not be supported on the JS SDK as we are working on a new JavaScript client framework that will be released soon.

In the meantime, you can use the Solita-generated libraries [mpl-candy-machine-core](https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-machine-core) and [mpl-candy-guard](https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-guard) since these are the ones the current JS SDK use under the hood. Thus, we will use these libraries to provide examples on this page.
:::

## For new candy machines

A new instruction called `initializeV2` has been added to the Candy Machine Core program. This instruction is similar to the `initialize` instruction, but it allows you to specify the token standard you want to use for your candy machine. This instruction will mark the newly created Candy Machine as `V2` to differentiate it from the `V1` Candy Machines that do not store the token standard. These new fields are using existing padding in the Candy Machine account data to avoid breaking changes in the Candy Machine serialization logic.

The `initializeV2` instruction can also be used to create a Candy Machine that mints regular NFTs and, therefore, the `initialize` instruction is now deprecated. Note that no changes are needed for the Candy Guard program here since it delegates to the Candy Machine Core when minting the NFT.

Also, note that some optional accounts may be required depending on the token standard you choose. For example, the `ruleSet` account may be provided to assign a specific rule set to all minted Programmable NFTs. If no `ruleSet` account is provided, it will use the rule set of the Collection NFT if any. Otherwise, minted Programmable NFTs will simply not have any rule set assigned. On the other hand, the `ruleSet` account will be ignored when minting regular NFTs.

Additionally, the `collectionDelegateRecord` account should now refer to the new [Metadata Delegate Record](https://docs.rs/mpl-token-metadata/latest/mpl_token_metadata/state/struct.MetadataDelegateRecord.html) from Token Metadata.

<Accordion>
<AccordionItem title="Solita library" open={true}>
<div className="accordion-item-padding">

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

<Accordion>
<AccordionItem title="Solita library" open={true}>
<div className="accordion-item-padding">

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

<Accordion>
<AccordionItem title="Solita library" open={true}>
<div className="accordion-item-padding">

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

<Accordion>
<AccordionItem title="Solita library" open={true}>
<div className="accordion-item-padding">

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

- The `nftBurn` and `nftPayment` guards which now allow the burned/sent NFT to be a Programmable NFT.
- The `FreezeSolPayment` and `FreezeTokenPayment` guards. Since Programmable NFTs are by definition always frozen, they are Locked when minted via a Utility delegate and Unlocked when the thaw conditions have been met.

## Additional reading

You may find the following resources about Programmable NFTs and Candy Machines useful:

- [Programmable NFTs Guide](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/token-metadata/program/ProgrammableNFTGuide.md)
- [Candy Machine Core Program](https://github.com/metaplex-foundation/metaplex-program-library/tree/master/candy-machine-core/program)
- [Candy Guard Program](https://github.com/metaplex-foundation/mpl-candy-guard/tree/main)
- [Candy Machine Core JS Typedoc](https://metaplex-foundation.github.io/metaplex-program-library/docs/candy-machine-core/index.html)
- [Candy Guard JS Typedoc](https://metaplex-foundation.github.io/mpl-candy-guard/index.html)
