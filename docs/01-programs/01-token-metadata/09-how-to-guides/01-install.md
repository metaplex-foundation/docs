---
sidebar_label: Install Umi
---

# Install Umi for Token Metadata

If you want to use the Token Metadata program with umi you first need to install `umi` and the `mpl-token-metadata@alpha` package with a node package manager like npm or yarn.

<Accordion>
<AccordionItem title="JavaScript — Umi library" open={true}>
<div className="accordion-item-padding">
The following command installs all required packages for this section. The last ones are optional and not always required.
```sh
npm install \
  @metaplex-foundation/umi \
  @metaplex-foundation/umi-bundle-defaults \
  @metaplex-foundation/mpl-token-metadata@alpha \
  @solana/wallet-adapter-react \
  @metaplex-foundation/umi-signer-wallet-adapters
```

Then, you can create a new Umi instance using the createUmi function of the default bundle and add the `mplTokenMetadata` Program to it.

```js
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";

const umi = createUmi('https://api.mainnet-beta.solana.com')
  .use(mplTokenMetadata());
```

If you want to do something that will write to chain you will also have to add a [`signer`](https://github.com/metaplex-foundation/umi/blob/main/docs/publickeys-signers.md). This can for example be a keypair or a browser wallet.

```js
// use a keypair
  const myKeypair = umi.eddsa.createKeypairFromSecretKey(mySecretKey);
  const myKeypairSigner = createSignerFromKeypair(myKeypair);
  umi.use(keypairIdentity(myKeypairSigner));

// use a browser wallet
import { walletAdapterIdentity } from "@metaplex-foundation/umi-signer-wallet-adapters";
import { useWallet } from "@solana/wallet-adapter-react";
  const wallet = useWallet();
  umi.use(walletAdapterIdentity(wallet))
```

After that you are ready to go.
</div>
</AccordionItem>

In some cases it might make sense to use additional Umi plugins like `@metaplex-foundation/umi-uploader-bundlr` to upload files to Arweave through Bundlr.

🔗 **Helpful links:**

