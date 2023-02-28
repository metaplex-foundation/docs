---
description: "Shows how to create a basic mint page with Metaplex JS SDK"
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';
import { AccordionCode } from '/src/accordion-code.jsx';

# How to create a Candy Machine v3 - Part 2 (JS SDK)
In this Guide, we will show you how to leverage the [Metaplex JS SDK](https://github.com/metaplex-foundation/js) to create a simple mint page to allow your users to mint from your Candy Machine v3. This will give you all the information to build that page by yourself given you have some web development experience. 

The code that you will see in this Guide and the [mint-example-ui code on Github](https://github.com/metaplex-foundation/js-examples/tree/main/mint-ui-example) is written to be as easily understandable as possible, and neither perfectly compliant with Next JS rules nor being as smart as possible, but instead to make it as easily readable as possible.

## Prerequisite Knowledge

- You should have a basic understanding of how to find and use a terminal on your OS, including navigating directories, and running commands: an example of a terminal for macOS is [iTerm2](https://iterm2.com/).
- You should have basic familiarity with what Solana is but don't need advanced technical knowledge.
- You should have basic familiarity with the Metaplex Standard but, again, do not need advanced technical knowledge.
- You should have some experience with Web Development to fully leverage the Information provided in this tutorial.

## Install Node.js, NPM
Even though you will not necessarily have to use NPM to build a mint page we will use it in this tutorial since it is based on the [Metaplex JS SDK](https://github.com/metaplex-foundation/js). Following these steps is only required if you do not have Node.js already installed.

<Accordion>
<AccordionItem title="macOS & Linux" open={false}>
<div className="accordion-item-padding">
For Linux and Mac, it's best to use the node version manager (nvm). Run the install script:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```
Then set it to use the current version:
```
nvm install 16.14
```

</div>
</AccordionItem>
<AccordionItem title="Windows" open={false}>
<div className="accordion-item-padding">

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

</div>
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

You should now have a website where you can connect your wallet, enter an NFT address, and see its image. That's a great starting point.

## Add mint function
Now let's modify the website so that it can be used for minting.

### Create a new React Element for minting

To be more flexible we will create a new react Element which will contain our minting section. 

1. Copy the `ShowNFTs.js` page and rename the copy to `MintNFTs.js`
2. In `MintNFTs.js` rename the `ShowNFTs` constant to `MintNFTs`
3. In `index.js` add `import { MintNFTs } from './MintNFTs'` near the top of the file
4. In `index.js` add `<MintNFTs onClusterChange={handleChange} />` below the `ShowNFTs` Element

When starting the website and connecting the wallet now you should see the same element twice. Now let's go ahead and add the candy machine.

### Read the candy machine state
Let's find your candy machine so that we can use it for minting! Everything that's described in this section has to be done in `MintNFTs.js`.

1. Add the following line to the `MintNFTs` function. This will read the `.env` file and load your candy machines address:

```js
const candyMachineAddress = new PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID);
```

2. Below this line let's add a `checkEligibility` function. This will be used to get the Candy Machines' state. E.g. if there are mints available:

<Accordion>
<AccordionItem title="Details" open={true}>
<div className="accordion-item-padding">

At first, we'll add some variables before the `checkEligibility` function that we will need later.

```js
  let candyMachine;
  let walletBalance;
```
Then we'll add the actual `checkEligibility` function which for now only reads the candy machine data from the chain using the `metaplex.candyMachines().findByAddress()` function.

```js
  const checkEligibility = async () => {
    candyMachine = await metaplex
      .candyMachines()
      .findByAddress({ address: candyMachineAddress });
  };
```
Before triggering the refresh function we have to make sure that a wallet is connected. Otherwise, the connection would fail and our user would see an error message. We can see the connection status in `wallet.connected`, therefore our function call wrapper looks like this:
```js
  if (!wallet.connected) {
    return null;
  } else {
    checkEligibility();
  }
```

</div>
</AccordionItem>
</Accordion>

3. Now that we have our Candy Machine we should add the mint button. Since we used the `ShowNFTs` as a Basis we can modify part of its code and replace the show with our mint Button:

<Accordion>
<AccordionItem title="Details" open={true}>
<div className="accordion-item-padding">

Replace the `onClick` function. Instead of showing a random NFT from our wallet, we will run  `metaplex.candyMachines().mint()` - be aware that depending on the guards that you are using you will have to pass a `settings` array. You can find more information on how to build that mint function on the [minting page](../minting#minting-with-guards) and the [respective guard page](../available-guards).


```js
  const onClick = async () => {
    const { nft } = await metaplex.candyMachines().mint({
      candyMachine,
      collectionUpdateAuthority,
    });

    setNft(nft);
  };

You might have seen the `setMintedNft(nft);` line at the end. This one is handing over the freshly minted NFT data to our website and will show the image to the user.
```
</div>
</AccordionItem>
</Accordion>

Technically you can already start up your website and mint since in Part 1 of this guide we only added Candy Guards which do not require special handling. But wait and please read the next section, too, so that your users do not waste their money.

## Optional but recommended improvements
### Add eligibility checks
To improve the user experience we should 
1. deactivate the mint button
2. verify that your user will be able to mint
3. activate the mint button to allow them to mint!

The Details of how those sanity checks can and should look vary depending on which guards you are using. One check should always be done: If there are NFTs available. In the following example, we additionally describe how to do such checks for the guards that were added in Part 1: `MintLimit`, `SolPayment`, and `StartDate`.

<Accordion>
<AccordionItem title="Details" open={true}>
<div className="accordion-item-padding">

1. add a new state constant `disableMint` into the `MintNFTs` function and add it as `disabled={disableMint}` to the button to disable the button by default.

```js
  const [disableMint, setDisableMint] = useState(true);

  ...

  <button onClick={onClick} disabled={disableMint}>
    mint NFT
  </button>

```

2. In the `checkEligibility` function after finding the candy machine data with `metaplex.candyMachines().findByAddress()` we can read the `itemsMinted` and `itemsAvailable` overall. If we compare those we can see if there are items available and if not disable the mint with `setDisableMint(true)`.

```js
    //enough items available?
    if (
      candyMachine.itemsMinted.toString(10) -
        candyMachine.itemsAvailable.toString(10) >
      0
    ) {
      console.error("not enough items available");
      setDisableMint(true);
      return;
    }
```

3. Guard-specific checks: We'll also add some checks to see if one of the guards forbids the user to mint. In this Guide it is explained how to do it for the three Guards `MintLimit`, `SolPayment`, and `StartDate`, the example on GitHub contains info for all the guards. We'll add those checks to the `checkEligibility` function, too, after the `itemsAvailable` check.

```js
    //first check if the wallet already reached the mint Limit

    if (guard.mintLimit != null) { // is the mintLimit guard activated?
      // calculate the PDA where the amount of already minted 
      const mitLimitCounter = metaplex.candyMachines().pdas().mintLimitCounter({
        id: 1,                                // use value from your config
        user: metaplex.identity().publicKey,
        candyMachine: candyMachine.address,
        candyGuard: candyMachine.candyGuard.address,
      });
      //Read Data from chain
      const mintedAmountBuffer = await metaplex.connection.getAccountInfo(mitLimitCounter, "processed");
      const mintedAmount = mintedAmountBuffer.data.readUintLE(0, 1);
      if (mintedAmount >= guard.mintLimit.limit) {
        console.error("mintLimit: mintLimit reached!");
        setDisableMint(true);
        return;
      }
    }

    if (guard.solPayment != null) {
      walletBalance = await metaplex.connection.getBalance(
        metaplex.identity().publicKey
      );

      const costInLamports = guard.solPayment.amount.basisPoints.toString(10);

      if (costInLamports > walletBalance) {
        console.error("solPayment: Not enough SOL!");
        setDisableMint(true);
        return;
      }
    }

        if (guard.startDate != null) {
      const candyStartDate = guard.startDate.date.toString(10);
      if (solanaTime < candyStartDate) {
        console.error("startDate: CM not live yet");
        setDisableMint(true);
        return;
      }
    }
```

</div>
</AccordionItem>
</Accordion>

### Add refresh listener
Now that we check if the user is allowed to mint they might open the website but are not allowed to mint yet. E.g. if the start date has not been reached. To improve the user experience we should automatically recheck the eligibility. In this example we will add listeners for three cases:

1. The candy guard and therefore possibly the eligibility are modified
2. The user's wallets content changes (e.g. if he gets sent more SOL so that they can afford mint)
3. The start time has been reached
4. The end time has been reached
 
<Accordion>
<AccordionItem title="Details" open={true}>
<div className="accordion-item-padding">

To achieve this we introduce a new function `addListener` before `checkEligibility`:

1. & 2. In the first section, we add the `onAccountChange` listener which listens for changes to our candy guard and the user's wallet. After a change is detected `checkEligibility` will be called.
```js
  const addListener = async () => {
    // add a listener to monitor changes to the candy guard
    metaplex.connection.onAccountChange(candyMachine.candyGuard.address,
      () => checkEligibility()
    );
```


3. Add a timer to recheck the eligibility after the start time has been reached

```js
    // add a listener to reevaluate if the user is allowed to mint if startDate is reached
    const slot = await metaplex.connection.getSlot();
    const solanaTime = await metaplex.connection.getBlockTime(slot);
    const startDateGuard = candyMachine.candyGuard.guards.startDate;
    if (startDateGuard != null) {
      const candyStartDate = startDateGuard.date.toString(10);
      const refreshTime = candyStartDate - solanaTime.toString(10);
      if (refreshTime > 0) {
        setTimeout(() => checkEligibility(), refreshTime * 1000);
      }
    }

```

4. and do the same if the end time has been reached:

```js
    // also reevaluate eligibility after endDate is reached
    const endDateGuard = candyMachine.candyGuard.guards.endDate;
    if (startDateGuard != null) {
      const candyEndDate = endDateGuard.date.toString(10);
      const refreshTime = solanaTime.toString(10) - candyEndDate;
      if (refreshTime > 0) {
        setTimeout(() => checkEligibility(), refreshTime * 1000);
      }
    }
  };
```

</div>
</AccordionItem>
</Accordion>

# Conclusion
After following this guide you should be able to build a simple mint page yourself or use the one built here as an example.

If you are experiencing issues feel free to ask questions e.g. in our [discord](https://discord.gg/metaplex).

## Further reading 
- If you want to use this UI as a basis you can just clone it from [mint-example-ui code on Github](https://github.com/metaplex-foundation/js-examples/tree/main/mint-ui-example)
- Additional code is required if you want to add guard groups. Find more information on the [minting page](../minting)
- Some guards require special handling. Get more info on the [special guard instructions page](https://docs.metaplex.com/programs/candy-machine/special-guard-instructions).
