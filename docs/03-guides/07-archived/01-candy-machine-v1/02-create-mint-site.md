---
sidebar_label: "3. Create Mint Website"
---

# Create Mint Website

:::warning

Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use [Candy Machine v2](../candy-machine-v2/introduction) instead.

:::

Once you have finished uploading your assets and creating the Candy Machine, you can start to create the mint website. You can use the [Exiled Apes Repository](https://github.com/exiled-apes/candy-machine-mint) for this step. You will first clone the repository.
```
git clone https://github.com/exiled-apes/candy-machine-mint.git
```
Open the folder in your IDE of choice or use 'cd' to change directory.
```
cd candy-machine-mint
```
Install yarn.
```
yarn install
```
Open the .env.example folder. The contents should look like this:
``` 
REACT_APP_CANDY_MACHINE_CONFIG=__PLACEHOLDER__
REACT_APP_CANDY_MACHINE_ID=__PLACEHOLDER__
REACT_APP_TREASURY_ADDRESS=__PLACEHOLDER__
REACT_APP_CANDY_START_DATE=__PLACEHOLDER__

REACT_APP_SOLANA_NETWORK=
REACT_APP_SOLANA_RPC_HOST=
```
Change the folder's name to .env
We will replace the four "__PLACEHOLDER__" values with the following in this order:
1. candy machine with publickey number
2. candy machine pubkey
3. pubkey (this is the address of the wallet you made)
4. timestamp number(time from setting a mintdate)

The network depends on whether you use mainnet-beta or devnet.
You can also add your custom rpc after the "REACT_APP_SOLANA_RPC_HOST" value.

:::caution

A Candy Machine mint can be network intensive, and may become rate limited on the default RPC if there is enough traffic. We **highly** recommend using a custom RPC. You can find a list of custom RPC services in our [community docs](/guides/community#rpc).

:::


To run the website locally run:
```
yarn start
```
A website should open here: localhost:3000/
You can now connect to your wallet and mint. If you succeeded it should show up in your collectibles.
Once you are ready to upload the app run

```
yarn build
```
This will create a build folder which can be used when deploying your website.
