---
sidebar_label: "5. Create Candy Machine"
---

# Create Candy Machine

To create a Candy Machine, simply type:

```cmd
ts-node ~/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine --env devnet --keypair ~/.config/solana/devnet.json -p 1
```

Your keypair might have a different name, but it always ends with json extension. The `-p` at the end stands for price.

Make sure you copy the candy machine pubkey, you're gonna need it later on.
