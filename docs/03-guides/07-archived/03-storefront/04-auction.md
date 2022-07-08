# Auction Sale

Metaplex currently supports four types of auctions that are all derived from English auctions. English auction, sometimes referred to an open auction, is the same type of auction that eBay uses. Participants of the auction can see the Price Floor (ie, the minimum bid that you are willing to sell your NFT). 

Basic parameters include:

- Auction start time
- Auction end time
- Reservation price

Additionally, Metaplex includes a novel concept of the participation NFT, which you can use for your own auction. Each bidding participant can be rewarded a unique NFT for participating in the auction. Keep in mind that there are costs (ie, minting of participation NFTs) associated with using this feature.

The creator of an auction also has the ability to configure a minimal price that should be charged for redemption, with the option to set it as "free". As mentioned before, participants of your auction are able to see this price.

![Select type](/img/sell/select-type.png)

## Open Edition
Print as many as you want!

An open edition auction requires the offering of a Master Edition NFT that specifically has no set supply. The auction will only create Prints of this item for bidders: each bidder is guaranteed to get a print, as there are no true "winners" of this auction type.

An open edition auction can either have a set fixed price (equivalent to a Buy Now sale), can be set to the bid price (Pay what you want), or can be free (Make any bid to get it for free).

#### Select which item to sell

![Select item](/img/auction/select-item.png)

#### Set the price

Set the price floor and bid tick. Bid tick is the amount of price increment for each bid.

![Set the price](/img/auction/choose-price.png)

#### Initial phase

The initial phase setting allows you to delay the start of the auction. If you are launching multiple NFTs or an NFT collection, setting a specific date is recommended. 

![Initial phase](/img/auction/initial-phase.png)

#### Ending phase

When would you like your auction to end? We’ve seen projects that set their auction duration from anywhere from a few hours (ie, 3 hours) to a few days (no more than 3 days) have the most success. 

![Ending phase](/img/auction/ending-phase.png)

##### Gap Time
Gap Time is a more advanced feature and most auctions don’t use it. If you anticipate that your community will have lots of competitive bids at the very end, you can use the Gap Time feature. Each new higher bid resets the countdown clock for when the auction ends. Based on feedback from recent projects, we recommend setting Gap Time to a few minutes and no more than 5 or 10 minutes. 

##### Tick Size
Tick Size for Ending Phase is another more advanced feature and most auctions don’t use it. Tick Size dictates how much higher the next bid must be to beat out the previous bid. Outside of Ending Phase, Tick Size is an amount of Sol. In Ending Phase, it’s defined as a percentage higher. 

#### Publish

Publish the auction and observe it under **Explore** section.

You will be asked to approve a transaction, so it will reduce a transaction fee in SOL from your wallet.

![Publish](/img/auction/publish.png)

![Auction page](/img/auction/auction-page.png)

## Limited Edition

Keep your NFTs rare! For a limited edition auction, a Master Edition NFT (of limited or unlimited supply) may be provided to the auction with a number of copies as the set amount of winning places.

For each prize place, a Print will be minted in order of prize place, and awarded to the winning bidder of that place.

For example, the first place winner will win Print #1; the second place winner Print #2; and so on.

It is required for limited supply NFTs that there is at least as much supply remaining as there are desired winners in the auction.

Flow is identical to the Open Edition auction, with only a difference in the item selection screen.
There you can provide the number of copies to sell.

![Limited edition page](/img/auction/limited-edition.png)

## Single Item

This type of auction can be used to sell normal NFTs and re-sell Prints, as well as the sale of Master Edition themselves (and the associated printing rights) if the artist so wishes.

![Sell item](/img/auction/sell-item.png)

On the **Participation NFT** each bidding participant can be rewarded a unique Open Edition NFT for participating in the auction.

![Participation](/img/auction/participation.png)

## Tiered Auction
Tiered Auctions is a useful tool for awarding multiple winners (ie, first, second, third place) with NFTs. This can be editions of the same NFTs or different NFTs as runner up prizes.

A tiered auction can contain a mix of the other three auction types as winning placements. For instance, the first place winner could win a Print of Limited Edition NFT A, while the second-place winner could win Normal NFT, and so on. Additionally, all participants who did not win any place could get a Participation NFT Print from a Master Edition (if the Master Edition had no supply limit).

#### Select the number of winners

![Participation](/img/auction/tiered-select-count.png)

#### Select tiers

On this screen, you can create several tiers to put winners in them. In our example, the first winner will get **Full Rights** transfer for an NFT. The second and third winners will get a **Print** of other NFT.

![Select tier 1](/img/auction/tiered-select-tiers-1.png)
![Select tier 2](/img/auction/tiered-select-tiers-2.png)
