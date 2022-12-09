# Upload Methods

Solana is a blockchain that is optimized for speed and scalability and writing data, but one of the trade-offs involved with this is that actually storing data on Solana is quite expensive. Storing 1 kb of data on Solana costs ~0.008 SOL. This adds up very quickly when you have thousands of NFTs each with metadata and and an image. To get around this issue, each NFT only stores critical data on the Solana blockchain: name, symbol, creators array, seller_fee_basis_point and an URI that points to an external JSON file that stores the rest of the NFT data, including traits and image and/or animation file. 

For more on storage providers see the [storage providers page](../../../resources/storage-providers).

To create a candy machine through Sugar, you need to choose a [supported upload method](../reference/upload-methods) and add any configuration values required for that particular method. Then, when you run the `sugar upload` command, it will take all the items in your assets folder and upload them to that paricular service, storing links to the data in the cache file (typically `cache.json`). Sugar will then then use these values to store the data to each NFT in the candy machine on-chain configuration when the `sugar deploy` command is run.
