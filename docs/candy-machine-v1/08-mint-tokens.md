---
sidebar_label: "7. Mint Tokens"
---

# Mint Tokens

:::warning
The Candy Machine v1 is being deprecated on January 5th, 2022. Creating a new Candy Machine v1 will be disabled. Please use the [Candy Machine v2](../candy-machine-v2/introduction) instead.
:::

:::info
For now, only the owner of the Candy Machine can mint tokens
:::

## Preparation
1. Check that you have `devnet-temp`(if using devnet, it will say mainnet or otherwise on different networks) file in your `.cache` folder
2. Check that you have more than 1 SOL in your devnet wallet

## Mint one token
```
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts mint_one_token -k ~/.config/solana/devnet.json --env devnet
```

## Mint multiple tokens
- `--number` number of tokens
```
//For mainnet
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts mint_multiple_tokens -k ~/.config/solana/devnet.json --env mainnet-beta --number 2
//For devnet
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts mint_multiple_tokens -k ~/.config/solana/devnet.json --number 2

```
