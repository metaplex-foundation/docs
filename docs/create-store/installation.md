---
sidebar_position: 2
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
git clone https://github.com/metaplex-foundation/metaplex.git
```

### Running store web server

Run `yarn start` to spin up a web server locally.

```bash
cd metaplex
cd js
yarn install
yarn bootstrap
yarn start
```

After that you can open [http://localhost:3000/](http://localhost:3000/) in the browser to see a storefront.
