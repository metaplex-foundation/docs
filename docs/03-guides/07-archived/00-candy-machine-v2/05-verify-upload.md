---
sidebar_label: "5. Verify Upload"
---
# Verify Upload

:::info

We strongly recommend you do not skip this step.

:::

The Candy Machine provides a command to verify if the metadata URI on chain has been successfully uploaded.

```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts verify_upload \
    -e devnet \
    -k ~/.config/solana/devnet.json \
    -c example
```

The command will check that each entry in the cache file matches the URI stored on-chain. A successful execution will generated an output similar to:

```
Key size 10
Name Number #0001 with https://arweave.net/AVmNYNiiJcsjMwICLnrZQacxn5duJJCQoEeksrz2VC4 checked out
Name Number #0002 with https://arweave.net/AQ5jvijKSIfiWt49w-Xf4OTwWS1WzXK2kq9gT8CCYeM checked out
Name Number #0003 with https://arweave.net/jC6Cz-6VtQSWp0kJMurdxp5BPeNHHoXmjOXl6G7bFeI checked out
Name Number #0004 with https://arweave.net/-u8Uikbe-K0RKTvJWXEf2s0vXkRJmbM-XxJb2ijCqD4 checked out
Name Number #0005 with https://arweave.net/oC0S6XNiAOo97SS0qhVbeoXEBC5TmlklWOZMJLD0URM checked out
Name Number #0006 with https://arweave.net/YoGpQYv7SGGF0_46n0pmLitXfjiY20mXDa8ezgpo0j4 checked out
Name Number #0007 with https://arweave.net/fvXr1-3RnTDj7C7rJ4I32SHbH_MDMs9O6Eunzzu1vk4 checked out
Name Number #0008 with https://arweave.net/lWnzWX_Mh7Lxy3f6drrJvtfi1_zN6xfNVS7gCF0hY1A checked out
Name Number #0009 with https://arweave.net/YtHXX8vJ-3dAFINUoeLEKpNBtP32LVyj6_kH6nFFdPw checked out
Name Number #0010 with https://arweave.net/FJDIqjMi1R-ut0n08QNCADvvfLKT-j7g2qNS2fkr5EQ checked out
uploaded (10) out of (10)
ready to deploy!
```

If any of the URI entries do not match the information on the chain, you will get an error:

```
Error: not all NFTs checked out. check out logs above for details
```

In this case, you will need to re-run the upload command. Only after the verify command succeeds should you make your Candy Machine live.