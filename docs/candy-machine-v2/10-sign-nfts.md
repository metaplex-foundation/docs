---
sidebar_label: "10. Signing Your NFTs"
---

# Signing Your NFTs

Once you have finished minting, you'll want to proceed to this step. Signing your NFTs allows you to verify the creator. This is important since anyone can list an arbitrary address as a creator. Being verified means that the creator with that wallet address has signed the NFT, proving that they are the actual creator. 
It is also suggested to use a custom RPC for this step because it is a heavy command.

### Sign

```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts sign \
    -e devnet \
    -k ~/.config/solana/devnet.json \
    -m <metadata Address>
```

### Sign All

The command that uses `sign_all` can be used to sign an entire collection with the specified keypair.

```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts sign_all \
    -e devnet \
    -k ~/.config/solana/devnet.json \
    -c example
```

### Verified

Once verified, the verified value for the second creator will be changed from `0` to `1` as shown below. Remember that in the list of creators the first creator is the Candy Machine. If needed, you can specify the batch size using `-b`.

```bash
"address": //address of the Candy Machine
"verfied": 1
"share": 0

"address": //Adress of the creator
"verfied": 1 //This creator has been verified.
"share": 100 //Share of the creator. If you added multiple creators this may be different
```
While the collection hasn't been signed, the verified creator will be the Candy Machine by default. This has the benefit of allowing allowing storefronts, marketplaces, and CLIs to query for NFTs that were minted by a Candy Machine.

For more information about this command use `-h` or `--help`:
```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts sign_all -h
```
