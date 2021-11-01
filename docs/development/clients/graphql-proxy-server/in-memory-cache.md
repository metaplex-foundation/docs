---
sidebar_position: 2
label: "In memory cache"
---

# In memory cache
In memory cache has a lot of trade-off and it's recommended don't use it in production.

- for mainnet-beta instance need near 8Gb memory
- very slow cold-start

## Requirements {#requirements}

- [Node.js](https://nodejs.org/en/download/) version >= 14.17.0 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
- [Yarn](https://yarnpkg.com/en/). Yarn is a performant package manager for JavaScript and replaces the `npm` client.

## Start

To run in `memory` mode:
```sh
yarn start:memory
```
