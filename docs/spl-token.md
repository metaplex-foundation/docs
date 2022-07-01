---
sidebar_position: 11
---

# SPL Token

The [`SPL token`](https://spl.solana.com) is developed by Solana and is used on mainnet. Currently, most implementations of the Solana SPL token in the Metaplex programs will require a fungible token. 

## Creating A Fungible Token

You will start by running the command to create the token:
```bash
spl-token create-token
Creating token ASesqG18noSFhHHe3ytDFZRdGLDWNYkYTL9dTsEHNeMA
```
You will receive a string that identifies this new token. In the example the identifier: ASesqG18noSFhHHe3ytDFZRdGLDWNYkYTL9dTsEHNeMA. To mint an SPL-token you begin by running the following with your identifier:

```bash
spl-token create-account ASesqG18noSFhHHe3ytDFZRdGLDWNYkYTL9dTsEHNeMA
```
This creates a new account that can now hold your SPL-token. The command to mint a token is: 

```bash
spl-token mint ASesqG18noSFhHHe3ytDFZRdGLDWNYkYTL9dTsEHNeMA 10
```
The 10 at the end is the number of tokens that will be created. You can then check your supply with:

```bash
spl-token supply
```
And your balance with:
```bash
spl-token balance
```
