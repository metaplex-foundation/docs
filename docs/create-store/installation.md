---
sidebar_position: 1
---

# Installation

To create a storefront powered by Metaplex, you need to create a store on the Metaplex platform. This guide will outline
steps you need to take to create your store.

## Requirements {#requirements}

- [Node.js](https://nodejs.org/en/download/) version >= 14.17.0 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed
- [Yarn](https://yarnpkg.com/en/). Yarn is a performant package manager for JavaScript and replaces the `npm` client.

## Local setup

Clone the repo.

```bash
$ git clone https://github.com/metaplex-foundation/metaplex.git
```

### Setting Up the Store ID

To create a store, you must first derive the store ID given your public address. The Metaplex devs have already created
an environment variable for you to utilize - `REACT_APP_STORE_OWNER_ADDRESS_ADDRESS` - which you should set to be your
wallet public address. To do this, you can edit a `.env` file in `js/packages/web`, and set
`REACT_APP_STORE_OWNER_ADDRESS_ADDRESS` to be your wallet public address in there. You can get setup on [Phantom](https://phantom.app/) and create your wallet address there

### Running store web server

Run `yarn start` to spin up a web server locally

```bash
$ cd metaplex
$ cd js
$ yarn install
$ yarn bootstrap
$ yarn start
```

After that you can open [http://localhost:3000/](http://localhost:3000/) in browser to see a storefront.
