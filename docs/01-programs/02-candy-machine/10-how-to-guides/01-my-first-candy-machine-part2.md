---
description: "Shows how to create a basic mint page with Metaplex JS SDK"
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';
import { AccordionCode } from '/src/accordion-code.jsx';

# How to create a Candy Machine v3 - Part 2 (JS SDK)
In this Guide, we will show you how to leverage the [Metaplex JS SDK](https://github.com/metaplex-foundation/js) to create a simple mint page to allow your users to mint from your Candy Machine v3. This will give you all the information to build that page by yourself given you have some web development experience.

## Prerequisite Knowledge

- You should have a basic understanding of how to find and use a terminal on your OS, including navigating directories, and running commands: an example of a terminal for macOS is [iTerm2](https://iterm2.com/).
- You should have basic familiarity with what Solana is but don't need advanced technical knowledge.
- You should have basic familiarity with the Metaplex Standard but, again, do not need advanced technical knowledge.
- You should have some experience with Web Development to fully leverage the Information provided in this tutorial.

## Install Node.js, NPM
Even though you will not necessarily have to use NPM to build a mint page we will use it in this tutorial since it is based on the [Metaplex JS SDK](https://github.com/metaplex-foundation/js). Following these steps is only required if you do not have Node.js already installed.

<Accordion>
<AccordionItem title="macOS & Linux" open={false}>
For Linux and Mac, it's best to use the node version manager (nvm). Run the install script:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```
Then set it to use the current version:
```
nvm install 16.14
```

</AccordionItem>
</Accordion>
<Accordion>
<AccordionItem title="Windows" open={false}>

1. Open PowerShell
2. run:
```
winget install CoreyButler.NVMforWindows
```
3. Restart PowerShell as Administrator
4. run:
```
nvm install 16.14
```

</AccordionItem>
</Accordion>

## Clone connect-wallet example
As a base, we will be using the [metaplex-foundation/js-examples repository](https://github.com/metaplex-foundation/js-examples) which contains multiple examples of how to use the JS SDK. Since we want to interact with a user's Wallet we will use the `connect-wallet` example as a basis and will have the `candy-machine-mint` as result.

1. clone https://github.com/metaplex-foundation/js-examples
2. `cd connect-wallet` run `npm install`
3. `npm run dev` to test if everything is set up correctly. You should see a blank page with a blue connect button. Try to connect your wallet.
4. To make your website more flexible we add a `.env` file in the `candy-machine-mint` folder which contains a single line. Make sure to replace `<Candy Machine ID>` with your actual Candy Machine ID: 

```
NEXT_PUBLIC_CANDY_MACHINE_ID=<Candy Machine ID>
```

You should now have a website where you can connect your wallet, enter a NFT address and see its image. That's a great starting point.

## Add mint function
Now let's modify the website so that it can be used for minting.

### Create a new React Element for minting

To be more flexible we will create a new react Element which will contain our minting section. 

1. Copy the `ShowNFTs.js` page and rename the copy to `MintNFTs.js`
2. In `MintNFTs.js` rename the `ShowNFTs` constant to `MintNFTs`
3. In `index.js` add `<MintNFTs onClusterChange={handleChange} />` below the `ShowNFTs` Element

When starting the website and connecting the wallet now you should see the same element twice. Now let's go ahead and add the candy machine.

### Read the candy machine state
Let's find your candy machine so that we can use it for minting! Everything that's described in this section has to be done in `MintNFTs.js`.

1. Add the following line into the `MintNFTs` function. This will read the `.env` file and load your candy machines address:

```js
const candyMachineAddress = new PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID);
```

2. Below this line let's add a `refreshStatus` function. This will be used to get the Candy Machines state. E.g. if there are mints available:

<Accordion>
<AccordionItem title="Details" open={true}>
<div className="accordion-item-padding">

At first, we'll add some variables that we will need later.`disableMint` is the most important one since this one will tell the mint button at the end if it should allow the user to try to mint. By default the mint button is deactivated.

```js
  const [disableMint, setDisableMint] = useState(true);
  let candyMachine;
  let collectionNft;
  let collectionUpdateAuthority;
  let walletBalance;
```
Then we'll add the actual `refreshStatus` function which for now only reads the candy machine data from the chain using the `metaplex.candyMachines().findByAddress()` function.

To mint we will also need to know the update authority of the on chain collection which we will also read in this function:

```js
  const refreshStatus = async () => {
    candyMachine = await metaplex
      .candyMachines()
      .findByAddress({ address: candyMachineAddress });

    collectionNft = await metaplex
      .nfts()
      .findByMint({ mintAddress: candyMachine.collectionMintAddress });
    collectionUpdateAuthority = collectionNft.updateAuthorityAddress;
  };
```
Before triggering the refresh function we have to make sure that a wallet is connected. Otherwise the connection would fail and our user would see an error message. We can see the connection status in `wallet.connected`, therefore our function call wrapper looks like this:
```js
  if (!wallet.connected) {
    return null;
  } else {
    refreshStatus();
  }
```

</div>
</AccordionItem>
</Accordion>

3. Now that we have our Candy Machine we should add the mint button. Since we used the `ShowNFTs` as Basis we can modify part of its code and replace the show with our mint Button:

<Accordion>
<AccordionItem title="Details" open={true}>
<div className="accordion-item-padding">
1. Replace the onClick function. Instead of showing a random NFT from our wallet, we will run  `metaplex.candyMachines().mint()`

```js
  const onClick = async () => {
    const { nft } = await metaplex.candyMachines().mint({
      candyMachine,
      collectionUpdateAuthority,
    });

    setNft(nft);
  };

2. You might have seen the `setMintedNft(nft);` line at the end. This one is handing over the freshly minted NFT data to our website and will show the image to the user.
```
</div>
</AccordionItem>
</Accordion>

Technically you can now already start up your website and mint since in Part 1 of this guide we only added Candy Guards which do not require special handling. But wait and please read the next section, too, so that your users do not waste their money.

## Add sanity checks
To improve the user experience we should 
1. deactivate the mint button
2. verify that your user will be able to mint
3. Allow them to mint!
