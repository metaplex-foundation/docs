---
description: "Uses a wallet address list to determine who is allowed to mint."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Allow List

## Overview

The **Allow List** guard validates the minting wallet against a predefined list of wallets. If the minting wallet is not part of this list, minting will fail.

Providing a big list of wallets in the settings of this guard would require a lot of storage on the blockchain and would likely need more than one transaction to insert them all. Therefore, the Allow List guard uses [**Merkle Trees**](https://en.m.wikipedia.org/wiki/Merkle_tree) to verify that the minting wallet is part of the preconfigured list of wallets.

This works by creating a binary tree of hashes where all leaves hash themselves two by two until we reach the final hash known as the **Merkle Root**. This means that if any leaf were to change, the final Merkle Root would be corrupted.

![CandyMachinesV3-GuardsAllowListMerkleTree1.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsAllowListMerkleTree1.png#radius)

To verify that a leaf is part of the tree, we simply need a list of all the intermediary hashes that allow us to go up the tree and re-compute the Merkle Root. We call this list of intermediary hashes a **Merkle Proof**. If the computed Merkle Root matches the stored Merkle Root, we can be sure that the leaf is part of the tree and therefore part of the original list.

![CandyMachinesV3-GuardsAllowListMerkleTree2.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsAllowListMerkleTree2.png#radius)

Therefore, the Allow List guard’s settings require a Merkle Root which acts as a source of truth for the preconfigured list of allowed wallets. For a wallet to prove it is on the allowed list, it must provide a valid Merkle Proof that allows the program to re-compute the Merkle Root and ensure it matches the guard’s settings.

Note that our SDKs provide helpers to make it easy to create Merkle Root and Merkle Proofs for a given list of wallets.

![CandyMachinesV3-GuardsAllowList.png](/assets/candy-machine-v3/CandyMachinesV3-GuardsAllowList.png#radius)

## Guard Settings

The Allow List guard contains the following settings:

- **Merkle Root**: The Root of the Merkle Tree representing the allow list.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

To help us manage Merkle Trees, the JS SDK provides two helper methods called `getMerkleRoot` and `getMerkleProof` that you may use like so.

```tsx
import { getMerkleProof, getMerkleRoot } from '@metaplex-foundation/js';

const allowList = [
  'Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB',
  'GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS',
  'AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy',
];

const merkleRoot = getMerkleRoot(allowList);
const validMerkleProof = getMerkleProof(allowList, 'Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB');
const invalidMerkleProof = getMerkleProof(allowList, 'invalid-address');
```

Once we have computed the Merkle Root of our allow list, we can use it to set up the Allow List guard on our Candy Machine.

```tsx
import { getMerkleRoot } from '@metaplex-foundation/js';

const allowList = [
  'Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB',
  'GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS',
  'AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy',
];

const { candyMachine } = await metaplex.candyMachines().create({
  // ...
  guards: {
    allowList: {
      merkleRoot: getMerkleRoot(allowList),
    },
  },
});
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create), [Input](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create), [Guard Settings](https://metaplex-foundation.github.io/js/types/js.AllowListGuardSettings.html).

</div>
</AccordionItem>
</Accordion>    

## Mint Settings

*The Allow List guard does not need Mint Settings.*

Note that, whilst no Mint Settings are required, **we must still validate the minting wallet by providing a Merkle Proof**. See [Validate a Merkle Proof](#validate-a-merkle-proof) below for more details.

Also note that, if you’re planning on constructing instructions without the help of our SDKs, you will need to add the Allow List Proof PDA to the remaining accounts of the mint instruction. See the [Candy Guard’s program documentation](https://github.com/metaplex-foundation/mpl-candy-guard#allowlist) for more details.

## Route Instruction

The Allow List route instruction supports the following features.

### Validate a Merkle Proof

*Path: `proof`*

Instead of passing the Merkle Proof directly to the mint instruction, the minting wallet must perform a [Pre-Validation](/programs/candy-machine/minting#minting-with-pre-validation) by using the route instruction of the Allow List guard.

This route instruction will compute the Merkle Root from the provided Merkle Proof and, if valid, will create a new PDA account acting as proof that the minting wallet is part of the allowed list. Therefore, when minting, the Allow List guard only needs to check for the existence of this PDA account to authorize or deny minting to the wallet.

So why can’t we just verify the Merkle Proof directly within the mint instruction? That’s simply because, for big allow lists, Merkle Proofs can end up being pretty lengthy. After a certain size, it becomes impossible to include it within the mint transaction that already contains a decent amount of instructions. By separating the validation process from the minting process, we make it possible for allow lists to be as big as we need them to be.

This path of the route instruction accepts the following arguments:

- **Path** = `proof`: Selects the path to execute in the route instruction.
- **Merkle Proof**: The list of intermediary hashes that should be used to compute the Merkle Root and verify that it matches the Merkle Root stored on the guard’s settings.

<Accordion>
<AccordionItem title="JS SDK" open={true}>
<div className="accordion-item-padding">

Here again, we can use the Merkle Tree helpers provided by the JS SDK to get the Merkle Proof for the minting wallet.

```tsx
import { getMerkleProof, getMerkleRoot } from '@metaplex-foundation/js';

const allowList = [
  'Ur1CbWSGsXCdedknRbJsEk7urwAvu1uddmQv51nAnXB',
  'GjwcWFQYzemBtpUoN5fMAP2FZviTtMRWCmrppGuTthJS',
  'AT8nPwujHAD14cLojTcB1qdBzA1VXnT6LVGuUd6Y73Cy',
];
const mintingWallet = metaplex.identity().publicKey.toBase58();

await metaplex.candyMachines().callGuardRoute({
  candyMachine,
  guard: 'allowList',
  settings: {
    path: 'proof',
    merkleProof: getMerkleProof(allowList, mintingWallet),
  },
});

// The `mintingWallet` is now allowed to mint from the Candy Machine.
```

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute), [Input](https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute), [Route Settings](https://metaplex-foundation.github.io/js/types/js.AllowListGuardRouteSettings.html).

</div>
</AccordionItem>
</Accordion>
