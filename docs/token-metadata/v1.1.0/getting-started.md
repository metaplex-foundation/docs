---
sidebar_label: "Overview"
sidebar_position: 1
---

# Getting Started with V1.1.0

As a backward-compatible release, you are already using the 1.1.0 version of the specification. It is implemented in the most recent version of the TokenMetadata program. Metaplex is still working on implementing this specification in all our products such as:

- Candy Machine
- Auction House
- Gumdrop
- StoreFront

This is not an exhaustive list. But you can get started using collections right away by using the NFT cli.

### Prerequisites

- `ts-node`
- `git`
- `yarn`

### Setup

In order to get started with the NFT CLI please follow these steps.

```
git clone https://github.com/metaplex-foundation/metaplex.git
cd metaplex
git checkout v1.1.1
cd js && yarn install && yarn bootstrap
cd packages/cli
```

Once you have cloned the repo and installed packages, make sure you have a local `Keypair` setup. If you need help with that see these guides.

- https://docs.solana.com/cli/install-solana-cli-tools
- https://docs.solana.com/wallet-guide/file-system-wallet

### Running Commands

To run commands you will use
`ts-node src/ts-node src/cli-nft.ts`

#### _Help_

```
Usage: cli-nft [options] [command]

Options:
  -V, --version                output the version number
  -h, --help                   display help for command

Commands:
  mint [options]
  update-metadata [options]
  verify-collection [options]
  show [options]
  help [command]               display help for command
```

The cli has great help text that can guide you through.

1. Minting a collection nft `mint`
2. Minting an nft to be a part of the collection `mint -c `
3. Verifying the nft is a part of the collection. `verify-collection`

Here is the code for the cli.

https://github.com/metaplex-foundation/metaplex/blob/master/js/packages/cli/src/cli-nft.ts
