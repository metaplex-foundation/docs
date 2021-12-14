---
sidebar_label: "7. Mint Tokens"
---

# Mint Tokens
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
//Forr mainnet
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts mint_multiple_tokens -k ~/.config/solana/devnet.json --env mainnet-beta --number 2
//For devnet
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts mint_multiple_tokens -k ~/.config/solana/devnet.json --number 2

```
