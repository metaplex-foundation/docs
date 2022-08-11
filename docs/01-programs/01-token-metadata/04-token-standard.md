---
description: "How the Token Standard works."
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';
import { AccordionTokenStandard } from '/src/accordion-token-standard.jsx';
import { AccordionCode } from '/src/accordion-code.jsx';
import tokenStandard from '/src/token-metadata/token-standard';

# Token Standard

## Introduction

As token usage has evolved on Solana, it has become clear that there are more types of tokens than simply "fungible" and "non-fungible" tokens.

An example is something the community is calling a "semi-fungible token", an SPL token with a supply greater than 1 but which has typical NFT attributes such as an image and an attributes array in the JSON metadata.

The consensus seems to be that these should be stored in wallets in the same view as standard NFTs, or in their own view but separate from "standard" fungible SPL tokens. These tokens are becoming popular in gaming contexts to support fungible items such as a kind of sword or a piece of wood, etc. but which are in a different league from typical fungible SPL tokens such as USDC.

## The Token Standard field

:::info

The below Token Standard was introduced in Token Metadata **v1.1.0**.

Many tokens may still conform to the [v1.0 JSON Standard](/programs/token-metadata/changelog/v1.0).

:::

In order to support this particular use-case but also to make the standard broad enough to allow expansion to other token types in the future, we keep track of the token's fungibility using the `Token Standard` enum on the Metadata account. This field maps to a particular JSON standard and is used to objectively differentiate token types.

This solves a pain point for third parties such as wallets which, before this field, had to apply inconsistent heuristics to determine what is and is not an "NFT".

The Token Standard field can have the following values:

- `NonFungible`: A non-fungible token with a Master Edition.
- `FungibleAsset`: A token with metadata that can also have attributes, sometimes called Semi-Fungible.
- `Fungible`: A token with simple metadata.
- `NonFungibleEdition`: A non-fungible token with an Edition account (printed from a Master edition).

It is important to note that the Token Standard is set automatically by the Token Metadata program and cannot be manually updated. It uses the following logic to apply the correct standard:

- If the token has a **Master Edition account**, it is a `NonFungible`.
- If the token has an **Edition account**, it is a `NonFungibleEdition`.
- If the token has no (Master) Edition account (ensuring its supply can be > 1) and **uses zero decimals places**, it is a `FungibleAsset`.
- If the token has no (Master) Edition account (ensuring its supply can be > 1) and **uses at least one decimal place**, it is a `Fungible`.

Each Token Standard type has its own JSON schema which is defined below.

## The Fungible Standard

These are simple SPL tokens with limited metadata and supply >= 0. Examples are USDC, GBTC and RAY.

<Accordion>
<AccordionTokenStandard
    fields={tokenStandard.fungible}
    open={true}
></AccordionTokenStandard>
<AccordionCode title="Example">

```json
{
  "name": "USD Coin",
  "symbol": "USDC",
  "description": "Fully reserved fiat-backed stablecoin created by Circle.",
  "image": "https://www.circle.com/hs-fs/hubfs/sundaes/USDC.png?width=540&height=540&name=USDC.png"
}
```

</AccordionCode>
</Accordion>

## The Fungible Asset Standard

These are fungible tokens with more extensive metadata and supply >= 0. An example of this kind of token is something the community has been calling "semi-fungible tokens" often used to represent a fungible but attribute-heavy in-game item such as a sword or a piece of wood.

<Accordion>
<AccordionTokenStandard
    fields={tokenStandard.fungibleAsset}
    open={true}
></AccordionTokenStandard>
<AccordionCode title="Example">

```json
{
  "name": "SolanaGame Steel Sword",
  "symbol": "SG-SS-1",
  "description": "SolanaGame steel sword available after Level 4",
  "image": "<https://arweave.net/26YdhY_eAzv26YdhY1uu9uiA3nmDZYwP8MwZAultcE?ext=jpeg>",
  "animation_url": "<https://arweave.net/ZAultcE_eAzv26YdhY1uu9uiA3nmDZYwP8MwuiA3nm?ext=glb>",
  "external_url": "<https://SolanaGame.io>",
  "attributes": [
    {
      "trait_type": "attack",
      "value": "4"
    },
    {
      "trait_type": "defense",
      "value": "3"
    },
    {
      "trait_type": "durability",
      "value": "47"
    },
    {
      "trait_type": "components",
      "value": "iron: 10; carbon: 1; wood: 2"
    }
  ]
}
```

</AccordionCode>
</Accordion>

## The Non-Fungible Standard

These are the "standard" non-fungible tokens the community is already familiar with and have both a Metadata PDA and a Master Edition (or Edition) PDA. Examples of these are Solana Monkey Business, Stylish Studs and Thugbirdz.

<Accordion>
<AccordionTokenStandard
    fields={tokenStandard.nonFungible}
    open={true}
></AccordionTokenStandard>
<AccordionCode title="Example">

```json
{
  "name": "SolanaArtProject #1",
  "description": "Generative art on Solana.",
  "image": "https://arweave.net/26YdhY_eAzv26YdhY1uu9uiA3nmDZYwP8MwZAultcE?ext=jpeg",
  "animation_url": "https://arweave.net/ZAultcE_eAzv26YdhY1uu9uiA3nmDZYwP8MwuiA3nm?ext=glb",
  "external_url": "https://example.com",
  "attributes": [
    {
      "trait_type": "trait1",
      "value": "value1"
    },
    {
      "trait_type": "trait2",
      "value": "value2"
    }
  ],
  "properties": {
    "files": [
      {
        "uri": "https://www.arweave.net/abcd5678?ext=png",
        "type": "image/png"
      },
      {
        "uri": "https://watch.videodelivery.net/9876jkl",
        "type": "unknown",
        "cdn": true
      },
      {
        "uri": "https://www.arweave.net/efgh1234?ext=mp4",
        "type": "video/mp4"
      }
    ],
    "category": "video",

    // @deprecated
    // Do not use - may be removed in a future release.
    // Use on-chain data instead.
    "collection": {
      "name": "Solflare X NFT",
      "family": "Solflare"
    },

    // @deprecated
    // Do not use - may be removed in a future release.
    // Use on-chain data instead.
    "creators": [
      {
        "address": "xEtQ9Fpv62qdc1GYfpNReMasVTe9YW5bHJwfVKqo72u",
        "share": 100
      }
    ]
  }
}
```

</AccordionCode>
</Accordion>
