---
sidebar_label: "6. Update Candy Machine"
---

# Update Candy Machine

To update a Candy Machine, type
```cmd
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts \
  update_candy_machine \
  --env devnet \
  --keypair ~/.config/solana/devnet.json \
  -p 1 \
  --date "17 Oct 2021 00:00:00 GMT"
```

Your keypair might have a different name, but it always ends with json extension. The `-p` at the end stands for price.

Your result should look like:
```
wallet public key: <public key>
 - updated startDate timestamp: <timestamp>
 - updated price: <price>
update_candy_machine finished <transaction_id>
```

You can look up your transaction id by going to the [Solana Devnet Explorer](https://explorer.solana.com/?cluster=devnet). Once there, paste in your `<transaction_id>` into the search bar.
