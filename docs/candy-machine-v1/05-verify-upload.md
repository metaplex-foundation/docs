---
sidebar_label: "4. Verify Upload"
---

# Verify Upload

:::warning
The Candy Machine v1 is being deprecated on January 5th, 2022. Creating a new Candy Machine v1 will be disabled. Please use the [Candy Machine v2](../candy-machine-v2/introduction) instead.
:::

To verify that the upload was successful, simply type:

```cmd
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts verify --keypair ~/.config/solana/devnet.json
```

The command output will show the total count of successful uploads.

You can also check the cache file created during upload to check for on-cahin true or false. Additionally, please note that if any were set to null after running verify you will have to delete them and reupload. 
