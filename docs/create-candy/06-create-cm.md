---
sidebar_label: "5. Create Candy Machine"
---

# Create Candy Machine

To create a Candy Machine, simply type:

```cmd
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts create_candy_machine --env devnet --keypair ~/.config/solana/devnet.json -p 1
```

Your keypair might have a different name, but it always ends with json extension. The `-p` at the end stands for price.

expected output:
```
wallet public key: 5oXkroDifHqo91UPsPCQa3Bge4DvGZpJZ88S7WpDzDQE
create_candy_machine finished. candy machine pubkey: AsgXHgnJM6G6U5BXA9GxBdf3JJVuxRhbgRdYAcnKTW5u
```

Make sure you copy the candy machine pubkey, you're gonna need it later on.
