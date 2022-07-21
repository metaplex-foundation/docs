---
sidebar_label: "2. Mint Tokens"
---

# Mint Tokens

:::warning

Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use [Candy Machine v2](../candy-machine-v2/introduction) instead.

:::

:::info

For now, only the owner of the `CMv1` can mint tokens

:::

## Preparation
1. Check that you have `mainnet-beta-temp`(if using mainnet-beta; it will say devnet or otherwise on different networks) file in your `.cache` folder
2. Check that you have more than 1 SOL in your mainnet-beta wallet

## Mint one token
```
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-v1-cli.ts mint_one_token -k ~/.config/solana/wallet.json --env mainnet-beta
```

## Mint multiple tokens
- `--number` number of tokens
```
//For mainnet
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-v1-cli.ts mint_multiple_tokens -k ~/.config/solana/wallet.json --env mainnet-beta --number 2
//For devnet
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-v1-cli.ts mint_multiple_tokens -k ~/.config/solana/wallet.json --env devnet --number 2 

```
