# Create NFTs

Once you have finished with a store configuration, you will be able to **Create** and **Sell** NFTs.

![Header button](/img/mint-sell/intro.gif)

## Create NFT

After clicking on the **Create** button, you will be redirected to the Create section, intended for minting NFT assets.
Metaplex supports a wide variety of NFT types. In this article, we'll be focusing on image assets.

![Create welcome page](/img/mint-sell/create-welcome.png)

### Upload

First, you'll need to upload your image to [Arweave][]. Depending on file type, this can take up to 1 minute.

:::info

[Arweave][] is a decentralized storage service that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever.

:::

Upload an image directly or provide an absolute url to your file on the internet to use as your NFT image.

After you have finished uploading, you'll see the image name listed below the "Upload" section. Click on **Continue to Mint**

![Upload](/img/mint-sell/upload.png)

### Describe your item

Next you'll add your image **Title**, **Description**, **Maximum Supply** and **Attributes**.

![Describe asset](/img/mint-sell/describe-asset.png)

**Maximum Supply** allows you to choose between having a single NFT or multiple copies (prints) from this master edition asset. The main difference between Master Edition and prints is that each print is a numbered edition created from a master edition.

:::tip

You can read more about Master Edition and Maximum Supply in our [Architecture](/guides/archived/architecture/deep_dive/overview) docs.

:::

**Attributes** allow you to define custom properties (key/value pairs) that describe your asset. These attributes are later displayed when viewing the NFT in your wallet or marketplace of choice. For `display_type`, the default is `string` but you can also set this to `date` to hint to downstream tools to format this approprately.

When you are finished describing your item, click on **Continue to royalties**.

### Royalties

Royalties declare how you and/or your creators are compensated for your work.

#### Royalty Percentage

This option specifies, as a percentage, how much of each secondary sale (all sales after the initial sale) will be paid out to the creators. For example, 1%.

#### Creators Split

This option allows you to split proceeds from the initial sale between creators. To do this, you first need to add other creators to your store on the [admin page](http://localhost:3000/#/admin).

After you have finished defining royalties, click on **Continue to review**.

![Royalties](/img/mint-sell/royalties.png)

### Launch

We're on the final stage of minting a new NFT asset. Click on **PAY WITH SOL** to start minting, it will deduct the cost of the transaction from your wallet. Throughout the process of creation, it may ask you to approve transactions in the wallet. After the upload is finished, you will see it in your collection.

![Launch](/img/mint-sell/launch.png)

![Minting](/img/mint-sell/upload.gif)

:::tip

Running locally may require refreshing the page to see the item in Artworks.

:::

![Finish screen](/img/mint-sell/finish.png)

![Item](/img/mint-sell/item.png)

[arweave]: https://www.arweave.org/
