---
sidebar_position: 1
---

# Getting started

Metaplex JS is a library that allows you to:

- Load and Deserialize Accounts
- Create transactions
- `[In development]` Run Actions (mint NFT, create an auction, and so on)

It works both in NodeJS and Browser.

In order to get started with the Metaplex JS library, you'll need to install it and have a Solana wallet to work with.

### Installation

#### Requirements {#requirements}

- [Node.js](https://nodejs.org/en/download/) version >= 14.17.0 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
- [Yarn](https://yarnpkg.com/en/). Yarn is a performant package manager for JavaScript and replaces the `npm` client.

```sh
npm install @metaplex/js
```

### Your first request

The following code snippet is the most basic one you can use to get Metadata with this library:

```typescript
import { Connection, Metadata } from '@metaplex/js';

const connection = new Connection('devnet');
const assetsOwnerPublicKey = '56bMjFLPSvZztdBk7D9g3LYTZNw3ApN6HKwyrQRCrLbL';

const run = async () => {
  try {
    const ownedMetadata = await Metadata.findByOwnerV2(connection, assetsOwnerPublicKey);
    console.log(ownedMetadata);
  } catch {
    console.log('Failed to fetch metadata');
  }
};

run();
```