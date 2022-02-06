---
sidebar_label: "What is AuctionHouse"
sidebar_position: 1
---

# What is Auction House

AuctionHouse is a protocol for marketplaces to implement a decentralized sales contract. It is simple, fast and very cheap. AuctionHouse is a Solana program available on Mainnet Beta and Devnet. Anyone can create an AuctionHouse and accept any SPL token they wish. 

:::info
The AuctionHouse Solana program resides within the Metaplex Program Library here:

https://github.com/metaplex-foundation/metaplex-program-library

The AuctionHouse CLI resides in the Metaplex monorepo here:

https://github.com/metaplex-foundation/metaplex/blob/master/js/packages/cli/src/auction-house-cli.ts

The Javascript SDK (coming soon) which has highlevel Auction House functions resides here:

https://github.com/metaplex-foundation/js
:::




Let's dive into AuctionHouse's main features.
:::info
    AuctionHouse is a completely separate program than the storefront Auction program.
:::
### Escrowless
For the NFT Seller the NFT doesn't leave their wallet until the sale completes. This is due to the use of Solana Token Delegates, and it allows them to list their NFT on other Marketplaces that implement the AuctionHouse protocol. The AuctionHouse program is the delegate, so whichever marketplace has a matching bid can execute the sale, and they get their fee, the buyer gets the NFT and the seller gets the money. This is all done in the execution of the sale. The buyer and seller never need to claim anything like in our other auction system.

### AuctionHouse Authority Features
When you create an AuctionHouse a new `Instance` of an AuctionHouse is made. This `Instance` is owned and oprated by an `Authority`. 
Meaning the Public Key you set in the `authority` section of the `CreateAuctionHouse` instruction is the `Authority` that can update the auction house. Metaplex uses this `Authority` pattern in many contracts to create `Access Control` on certain features and functions. When you create an auction house, you can set the following parameters:


- Treasury Withdraw Destination - The wallet that receives the AuctionHouse fees.
- Fee Withdraw Destination - A wallet that is used to pay for Solana fees for the seller and buyer if the marketplace choses to execute the sale in the background.
- Seller Fee Basis Points - The share of the sale the auction house takes on all NFTs.
- Requires Sign Off - The auction house must sign all sales orders.
- Can Change Sale Price - If the buyer intentionally lists their NFT for a price of 0 the Auction House can change the sale price to match a matching Bid that is greater than 0. This allows the Auction house to do complicated order matching to find the best price for the seller. 
- Treasury Mint - The SPL token you accept as the purchase currency

:::warning 
`Can Change Sale Price` is only intended to be used with AuctionHouses that `Requires Sign Off`
:::

#### Requires Sign Off Feature
This feature allows a marketplace to restrict which NFTs get sold on their platform. It is useful for more centralized marketplaces or a marketplace that has order matching algorithms that the user has allowed them to use (enabled by listing the NFT at the price of 0). 

Marketplaces who want to stay decentralized and not require signoff may restrict what their user interfaces show via other means, but behind the scenes, someone can still list an NFT on your Auction House. You may in this scenario build Allow Lists using merkele trees or chose to restrict what your UI shows via other means.

### Any SPL Token
AuctionHouse allows you to accept any SPL token as the tender that the buyer deposits into their Buyer Escrow in order to accomplish a sale. 

Now that you know what the AuctionHouse is, take a look at our [Getting Started](/auction-house/getting_started) guide.
