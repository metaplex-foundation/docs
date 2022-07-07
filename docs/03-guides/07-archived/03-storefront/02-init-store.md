# Init store

### Setting Up the Store ID

When opening a store for the first time you will be asked to connect your wallet. Click the **Connect** button and follow the steps to get connected.

Once connected, the store will first run some checks to see if you've already set up a store. After a minute or so, a welcome screen is presented with an **Init Store** button.

![Init store](/img/installation/init-store.png)

From the wallet dropdown (Phantom pictured below), select a network (mainnet for production, testnet or devnet for practice).

![Select network](/img/installation/select-wallet.png)

:::tip

Before proceeding, you must have some SOL on your wallet to be able to pay the Init Store transaction fee. In the case of using devnet or testnet you can airdrop SOL to yourself via [Sol Faucet](https://solfaucet.com/).

:::

Click the **Init Store** button. This starts the store initialization process by prompting you to approve a transaction from your wallet. After approval, your store initialization begins which may take 1-2 minutes.

![Approve transaction](/img/installation/approve-transaction.png)

After store initialization completes, you must save your new store addresses. In the **Store configuration** section on the store page click on the **Copy** button and paste in the `.env` file in `js/packages/web`.

![Save env](/img/installation/save-env.png)

![Set env](/img/installation/set-env.png)

Now restart your webserver (_Ctrl + C_ + `yarn start`) for the `.env` changes to take affect.

