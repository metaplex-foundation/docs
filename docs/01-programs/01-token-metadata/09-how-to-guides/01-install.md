---
sidebar_label: Install Umi
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';
import { AccordionCode } from '/src/accordion-code.jsx';


# Install Umi for Token Metadata

If you want to use the Token Metadata program with umi you first need to install `umi` and the `mpl-token-metadata@alpha` package with a node package manager like npm or yarn.

<Accordion>
<AccordionItem title="Install Packages" open={true}>
<div className="accordion-item-padding">
The following command installs all required packages for this section. The last ones are optional and not always required.
```sh
npm install \
  @metaplex-foundation/umi \
  @metaplex-foundation/umi-bundle-defaults \
  @metaplex-foundation/mpl-token-metadata@alpha \
  @solana/web3.js
```

Then, you can create a new Umi instance using the createUmi function of the default bundle and add the `mplTokenMetadata` Program to it.

```js
import { createUmi } from '@metaplex-foundation/umi-bundle-defaults';
import { mplTokenMetadata } from "@metaplex-foundation/mpl-token-metadata";

const umi = createUmi('https://api.mainnet-beta.solana.com')
  .use(mplTokenMetadata());
```
</div>
</AccordionItem>
<AccordionItem title="Add Keypair Signer" open={true}>
<div className="accordion-item-padding">

If you want to do something that will write to chain you will also have to add a [`signer`](https://github.com/metaplex-foundation/umi/blob/main/docs/publickeys-signers.md). This can for example be a keypair or a browser wallet.

**Keypair**
To use your keypair, for example one that has been read from a local file in a node environment you can use the following code:
```js
// use a keypair
  const myKeypair = umi.eddsa.createKeypairFromSecretKey(mySecretKey); // e.g. Keypair that has been read from file
  umi.use(keypairIdentity(myKeypair));                           // Tell umi to use the signer
```

**Browser Wallet**
If you want to use a browser wallet like Backpack or Solflare instead you will have to leverage the wallet adapter. The following example is using the react adapter. 

First install some additional packages:
```sh
npm install \
  @metaplex-foundation/umi \
  @metaplex-foundation/umi-bundle-defaults \
  @metaplex-foundation/mpl-token-metadata@alpha \
  @solana/wallet-adapter-react \
  @metaplex-foundation/umi-signer-wallet-adapters \
  @solana/wallet-adapter-base \
  @solana/wallet-adapter-react-ui

```

Initialize the wallet adapter as you might be used to. If you don't know how you can find an [example](https://github.com/solana-labs/wallet-adapter/blob/master/APP.md) in the [wallet adapter repository](https://github.com/solana-labs/wallet-adapter) which also points to more docs. 

Then you can use the `walletAdapterIdentity` function to add the wallet adapter to umi.
```js
const wallet = useWallet();
umi.use(walletAdapterIdentity(wallet))
```

</div>
</AccordionItem>
</Accordion>

After that you are ready to go and can use umi to interact with the Token Metadata program.

