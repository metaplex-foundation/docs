# Installation

To create a storefront powered by Metaplex, you need to create a store on the Metaplex platform. This guide will outline
steps you need to take to create your store.

## Requirements {#requirements}

- [Node.js](https://nodejs.org/en/download/) version >= 14.17.0 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
- [Yarn](https://yarnpkg.com/en/). Yarn is a performant package manager for JavaScript and replaces the `npm` client.

### Apple M1 Chip

If you have Mac OS with the Apple M1 Chip, you'll need to install some additional dependencies.

- [brew](https://brew.sh/)

After installing brew, run the following: 

```bash
brew install pkg-config cairo pango libpng jpeg giflib librsvg
```
See additional information: https://github.com/Automattic/node-canvas/wiki/Installation%3A-Mac-OS-X


## Local setup

Clone the repo and install its dependencies.

```bash
git clone https://github.com/metaplex-foundation/metaplex.git
cd metaplex/js && yarn install && yarn bootstrap
```

<!-- ```bash
git clone --branch v1.1.1 https://github.com/metaplex-foundation/metaplex.git
cd metaplex/js && yarn install && yarn bootstrap
``` -->

Now run your store web server locally.

```bash
yarn start
```

After that you can open [http://localhost:3000/](http://localhost:3000/) in your browser to see a storefront (it may take a minute to load the first time).

