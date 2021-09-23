---
sidebar_position: 2
---

# Mint NFTs

Once you have finished with a store configuration, you will be able to see the **Create** and the **Sell** buttons.

![Header button](/img/mint-sell/header.png)

## Create NFT

After clicking on the **Create** button, you will be redirected to a Create section. It's intended for minting NFT assets.
As you may see, Metaplex supports a big amount of different NFT types. In this article, we'll be focusing on image assets.

![Create welcome page](/img/mint-sell/create-welcome.png)

### Upload

Firstly, you need to upload your file. The file will be uploaded to the decentralized web via Arweave. Depending on file type, can take up to 1 minute. Arweave is a new type of storage that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever – for the very first time.

It's possible to upload an image directly or to put an absolute url to it.

After you have done, click on **Continue to Mint**

![Upload](/img/mint-sell/upload.png)

### Describe your item

On this screen you can describe the item, by adding **Title**, **Description**, **Maximum Supply** and **Attributes**

**Maximum Supply** allows having multiple copies (prints) from this master edition asset. The main difference is that each print is a numbered edition created from a master edition.

You can read more about Master Edition and Maximum Supply in our [Architecture](../architecture/deep_dive/overview.md) docs.

**Attributes** allow you to define custom properties that attribute your asset.

After you have done, click on **Continue to royalties** to move on.

![Describe asset](/img/mint-sell/describe-asset.png)

### Royalties

Royalties ensure that you continue to get compensated for your work after its initial sale. So, you will be able to receive percentage after every secondary sale.

#### Creators Split

This option allows you to split proceeds from the initial sale between creators. To do this, you need to add other creators to your store on an [admin page](http://localhost:3000/#/admin).

After you have done, click on **Continue to review** to move on.

![Royalties](/img/mint-sell/royalties.png)

### Launch

We're on the final stage of minting a new NFT asset. Click on **PAY WITH SOL** to start minting, it will deduct the cost of the transaction from your wallet. Throughout the process of creation, it may ask you to approve transactions in the wallet. After the upload is finished, you will see it in your collection.

![Minting](/img/mint-sell/minting.png)

:::tip

Running locally may require refreshing the page to see the item in Artworks.

:::

![Finish screen](/img/mint-sell/finish.png)

![Item](/img/mint-sell/item.png)
