# Introduction

The general process for creating and operating a Candy Machine is:

1. [Prepare your NFT Assets](./prepare-assets)
2. [Upload your Assets](./upload-assets)
3. [Verify your Upload](./verify-upload)
4. [Create your Candy Machine](./create-cm)
5. [Update your Candy Machine](./update-cm)
6. [Create your Candy Machine Mint Website](./create-mint-site)
7. [Operate your Candy Machine Drop](./operate-cm-drop)
<!-- 8. ...Sign, 8. ...etc -->

## Prerequisites

Before starting this journey, you'll need to install and understand how to operate a handful of developer tools.

### Developer Tooling Required

Ensure you have recent versions of `git`, `node`, `yarn` and `ts-node` installed:

* [Git Installation](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
* [Node Installation](https://nodejs.org/en/download/)
* [Yarn Installation](https://classic.yarnpkg.com/lang/en/docs/install)
* [ts-node Installation](https://www.npmjs.com/package/ts-node#installation)

We recommend confirming these tools are working before proceeding further. Some sensible tests are running the following commands:

```bash
$ git version
git version 2.31.1

$ node --version
v14.17.0

$ yarn --version
1.22.11

$ ts-node --version
v10.2.1
```

The specific version numbers don't matter that much, but make sure you're running something recent. The more important thing is confirming these tools are installed and on your [system PATH](https://janelbrandon.medium.com/understanding-the-path-variable-6eae0936e976) correctly.

### The Candy Machine Command Line Tool

Creating and controlling a Candy Machine is typically done through command line tool, currently distributed as source code in a GitHub repository.

You can clone this repository anywhere you like, but the recommended practice is:
```
$ git clone git@github.com:metaplex-foundation/metaplex.git ~/metaplex-foundation/metaplex
```

If you use a different location, you'll need to adjust for it in subsequent instructions.

You also need to install the projects node/npm dependencies. The recommended way of doing this is:

```
$ yarn install --cwd ~/metaplex-foundation/metaplex/js/
```

Future versions of this tooling will be "npx runnable". For now though, `ts-node` is recommended for most users.
After ensuring `ts-node` is installed and cloning the repo you'll need to run two commands to confirm everything installed correctly.
```
$ ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts --version
0.0.2
```

### Solana Tooling Required

The Candy Machine was built by Metaplex (and Solana) to operate on the Solana blockchain.

To work with it effectively you will need to understand tools and practices from that ecosystem.

To get started, we recommend you begin by:

* Reading the [Solana Command-line Guide](https://docs.solana.com/cli)
* [Installing the Solana Command-line Tools](https://docs.solana.com/cli/install-solana-cli-tools)
* And practice with the examples they provide in their documents.