---
sidebar_position: 3
---

# Init store

### Setting Up the Store ID

When opening a store for the first time you should see a welcome screen with **Init Store** button.

Select a network in Phantom's dropdown and click on the **Init Store** button.

![Select network](/img/installation/select-wallet.png)

![Init store](/img/installation/init-store.png)

Click on this button to start the store initialization process, it is going to take some time (around 1-2 minutes).

:::tip

You must have some SOL on your wallet to be able to pay a transaction fee. In the case of using devnet or testnet it's possible to airdrop SOL via [Sol Faucet](https://solfaucet.com/).

:::

If you are using [Phantom](https://phantom.app/) wallet, it will ask you to approve a transaction.

![Approve transaction](/img/installation/approve-transaction.png)

After the store initialization is done, you need to save addresses. In the **Store configuration** section on the store page click on the **Copy** button and paste in the `.env` file in `js/packages/web`.

![Save env](/img/installation/save-env.png)

![Set env](/img/installation/set-env.png)

Stop webserver (_Ctrl + C_) and run it again for `.env` changes to take place.

```bash
$ yarn start
```
