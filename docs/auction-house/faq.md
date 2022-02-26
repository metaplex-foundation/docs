---
sidebar_label: "FAQ"
sidebar_position: 3
---

# AuctionHouse FAQ


## Can I get fees when NFTs get sold-on my Auction House?
Yes, An AuctionHouse may be configured to take `seller fee basis points`. This is part of the create and update command; see the CLI use it.

Fees are paid to Creators,Then the Auction house and the seller gets the remainder of the sale. This is easy to calculate on your UI by taking the NFT royalties, Sale price, Auction House fee and displaying to the buyer what their total gains will be.

## Does the AuctionHouse restrict the user from selling their NFT on another Non-AuctionHouse marketplace?
No, the AuctionHouse cannot stop users from sending their NFT even if they have a for-sale listing. If this happens, the `execute_sale` operation will fail and the buyer can get their finds back by canceling their bid.
Marketplaces creating a AuctionHouse experience will need to track the Buy/Sell trade state accounts and watch the TokenAccounts of sellers so they can automatically cancel the listing and bids on that NFTs.

Specifically Marketplaces should currently store:

1. Trade Stade Account Keys
2. Trade State Token Size and Price parts of the seed
3. Token Account Keys that are stored in the trade state

Specifically Marketplaces need to track these two events on Token Accounts:

1. Ownership has changed from the original Seller of the NFT
2. Token Account Amount has changed to 0

If these events happen the AuctionHouse Authority can call instructions to cancel the bids and listings without the seller or buyer needing to be present.

## Can people view the settings of my AuctionHouse
Yes anyone can and should be able to verofy the settings of your AuctionHouse especially the `Can Change Sale Price` parameter.
This can be done on the cli with the `show`


## Can the AuctionHouse change the sale price on my NFT
Yes but only in a certain scenario. These things need to happen in order for a Auction House to be able to use this feature.

1. The AuctionHouse instance must have `Can Change Sale Price` set to `true`
2. You as the NFT seller must list your NFT for sale at a price of 0. 
:::warning

Don't worry not even the Auction House can sell it for 0 unless you sign the transaction with your key.

:::

3. The AuctionHouse now can use the `0` priced trade state you made in #2 to create new `sale` listings at different prices. 


