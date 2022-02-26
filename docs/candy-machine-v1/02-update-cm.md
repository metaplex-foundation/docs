---
sidebar_label: "1. Update Candy Machine"
---

# Update Candy Machine

:::warning

Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use [Candy Machine v2](../candy-machine-v2/introduction) instead.

:::

To update an existing `CMv1`, type
```cmd
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-v1-cli.ts \
  update_candy_machine \
  --env mainnet-beta \
  --keypair ~/.config/solana/wallet.json \
  -p 1 \
  --date "10 Jan 2022 00:00:00 GMT"
```

Your keypair might have a different name, but it always ends with the .json extension. The `-p` at the end stands for price. 

Make sure the `--date` option is set to when you want your mint to begin. Setting the date in the past will allow anyone to mint your NFTs. 

Your result should look like:
```
wallet public key: <public key>
 - updated startDate timestamp: <timestamp>
 - updated price: <price>
update_candy_machine finished <transaction_id>
```

You can look up your transaction id by going to the [Solana Explorer](https://explorer.solana.com/). Once there, paste in your `<transaction_id>` into the search bar.
