---
description: "Explains how to mint Programmable NFTs from candy machines."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';

# Programmable NFTs

## Introduction

Version `1.7` of Token Metadata introduced a [new type of asset class called Programmable NFTs](programs/token-metadata/overview#programmable-nfts) allowing, amongts other things, creators to enforce royalties on secondary sales.

Since version `0.2` of Candy Machine Core and version `0.4` of Candy Guard, it is now possible to **mint Programmable NFTs from candy machines** and even update the token standard of existing candy machines.

:::info
Note that, for JavaScript clients, the rest of the documentation currently provides examples using the Metaplex JS SDK. However, Programmable NFTs will not be supported on the JS SDK as we are working on a new JavaScript client framework that will be released soon.

In the meantime, you can use the Solita-generated libraries [mpl-candy-machine-core](https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-machine-core) and [mpl-candy-guard](https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-guard) since these are the ones the current JS SDK use under the hood. Thus, we will use these libraries to provide examples in this page.
:::

## For new candy machines

TODO

- initializeV2 for CM

## For existing candy machines

TODO

- setCollectionV2
- setTokenStandardV2

## A new minting instruction

TODO

- mintV1 for both programs

<Accordion>
<AccordionItem title="Solita library" open={true}>
<div className="accordion-item-padding">

TODO

API References: [Operation](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint), [Input](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html), [Output](https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html), [Transaction Builder](https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint).

</div>
</AccordionItem>
</Accordion>
