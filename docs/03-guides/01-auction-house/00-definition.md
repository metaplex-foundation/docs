---
sidebar_label: "What is Auction House"
---

# What is Auction House

Auction House is a protocol for marketplaces to implement a decentralized sales contract. It is simple, fast and very cheap. Auction House is a Solana program available on Mainnet Beta and Devnet. Anyone can create an Auction House and accept any SPL token they wish.

:::info

The Auction House Solana program resides within the Metaplex Program Library here:

https://github.com/metaplex-foundation/metaplex-program-library

The Auction House CLI resides in the Metaplex monorepo here:

https://github.com/metaplex-foundation/metaplex/blob/master/js/packages/cli/src/auction-house-cli.ts

The MPL Js SDK (low level web3 sdk) lives here and is a great starting point for advanced web3 devs

https://www.npmjs.com/package/@metaplex-foundation/mpl-auction-house

The High Level Javascript SDK (coming soon) which has highlevel Auction House functions resides here:

https://github.com/metaplex-foundation/js

:::

Let's dive into Auction House's main features.

:::info

Auction House is a completely separate program than the storefront Auction program.

:::

### Escrowless

For the NFT Seller the NFT doesn't leave their wallet until the sale completes. This is due to the use of Solana Token Delegates, and it allows them to list their NFT on other Marketplaces that implement the Auction House protocol. The Auction House program is the delegate, so whichever marketplace has a matching bid can execute the sale, and they get their fee, the buyer gets the NFT and the seller gets the money. This is all done in the execution of the sale. The buyer and seller never need to claim anything like in our other auction system.

### Auction House Authority Features

When you create an Auction House a new `Instance` of an Auction House is made. This `Instance` is owned and operated by an `Authority`.
Meaning the Public Key you set in the `authority` section of the `CreateAuction House` instruction is the `Authority` that can update the auction house. Metaplex uses this `Authority` pattern in many contracts to create `Access Control` on certain features and functions. When you create an auction house, you can set the following parameters:

- Treasury Withdraw Destination - The wallet that receives the Auction House fees.
- Fee Withdraw Destination - A wallet that is used to pay for Solana fees for the seller and buyer if the marketplace choses to execute the sale in the background.
- Seller Fee Basis Points - The share of the sale the auction house takes on all NFTs.
- Requires Sign Off - The auction house must sign all sales orders.
- Can Change Sale Price - If the buyer intentionally lists their NFT for a price of 0 the Auction House can change the sale price to match a matching Bid that is greater than 0. This allows the Auction house to do complicated order matching to find the best price for the seller.
- Treasury Mint - The SPL token you accept as the purchase currency

:::warning

`Can Change Sale Price` is only intended to be used with Auction Houses that `Requires Sign Off`

:::

#### Requires Sign Off Feature

This feature allows a marketplace to restrict which NFTs get sold on their platform. It is useful for more centralized marketplaces or a marketplace that has order matching algorithms that the user has allowed them to use (enabled by listing the NFT at the price of 0).

Marketplaces who want to stay decentralized and not require signoff may restrict what their user interfaces show via other means, but behind the scenes, someone can still list an NFT on your Auction House. You may in this scenario build Allow Lists using merkele trees or chose to restrict what your UI shows via other means.

### Any SPL Token

Auction House allows you to accept any SPL token as the tender that the buyer deposits into their Buyer Escrow in order to accomplish a sale.

Now that you know what the Auction House is, take a look at our [Getting Started](./getting-started) guide.

### Auction House Receipts

To aid transaction tracking, Auction House supports the generation of receipts for listings, bids, and sales. To generate these receipts, the receipt printing function should be called immediately after the corresponding transaction (`PrintListingReceipt`, `PrintBidReceipt`, and `PrintPurchaseReceipt`). Additionally, the `CancelListingReceipt` and `CancelBidReceipt` instructions should be called in the case of canceled listing add bids. Calling these two instructions will fill the `canceled_at` fields of the `ListingReceipt` and `BidReceipt` accounts.

:::info

While the receipts can be retrieved using the standard getProgramAccounts data flow, the official recommendation is to use Solana's [AccountsDB](https://docs.solana.com/developing/plugins/geyser-plugins) plug-in to index and track the generated receipts.
:::

### Partial Order Fulfillment

:::info
Currently only available on devnet
:::

A seller can create a sell order of `FungibleAssets` with a `token_size` quantity greater than 1. The buyer can then create a buy order of said assets that is less than the `token_size` of the sell order. In order for `ExecutePartialSale` to succeed, the buy order must have been created with both a `token_size` and a `sale_price` both lower than the sell order `token_size` and `sale_price`. In `ExecutePartialSale`, `partial_order_price` must match the division of `token_size` in the full order and the `sale_price` times the `partial_order_size`. `partial_order_size` must not be greater than the `token_size` in the original sell order. If there is no partial order needing to take place, `partital_order_price` and `partial_order_size` must be passed in as `None`.

:::info

Example:

1. Alice creates a sell order of 6 Alice tokens for 6 SOL.
2. Bob creates a buy order to purchase 3 Alice tokens for 3 SOL.
3. Bob now owns 3 Alice tokens and there are 3 remaining for someone else to buy.
4. John creates a buy order for the remaining 3 Alice tokens for 3 SOL.
5. John now owns the remaining 3 Alice tokens and the listing is now closed.
:::
