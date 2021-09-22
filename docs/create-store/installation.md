---
sidebar_position: 1
---

# Installation

To create a storefront powered by Metaplex, you need to create a store on the Metaplex platform. This guide will outline
steps you need to take to create your store.

## Requirements {#requirements}

- [Node.js](https://nodejs.org/en/download/) version >= 14.17.0 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
- [Yarn](https://yarnpkg.com/en/). Yarn is a performant package manager for JavaScript and replaces the `npm` client.

## Local setup

Clone the repo.

```bash
$ git clone https://github.com/metaplex-foundation/metaplex.git
```

### Running store web server

Run `yarn start` to spin up a web server locally.

```bash
$ cd metaplex
$ cd js
$ yarn install
$ yarn bootstrap
$ yarn start
```

After that you can open [http://localhost:3000/](http://localhost:3000/) in the browser to see a storefront.

### Setting Up the Store ID

When opening a store for the first time you should see a welcome screen with **Init Store** button.

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
