---
sidebar_position: 6
---

# Auction Sale

Metaplex currently supports four types of auctions that are all derived from English auctions.

Basic parameters include:

- Auction start time
- Auction end time
- Reservation price

Additionally, Metaplex includes a novel concept of the participation NFT. Each bidding participant can be rewarded a unique NFT for participating in the auction.

The creator of an auction also has the ability to configure a minimal price that should be charged for redemption, with the option to set it as "free".

![Select type](/img/sell/select-type.png)

## Open Edition

An open edition auction requires the offering of a Master Edition NFT that specifically has no set supply. The auction will only create Prints of this item for bidders: each bidder is guaranteed to get a print, as there are no true "winners" of this auction type.

An open edition auction can either have a set fixed price (equivalent to a Buy Now sale), can be set to the bid price (Pay what you want), or can be free (Make any bid to get it for free).

#### Select which item to sell

![Select item](/img/auction/select-item.png)

#### Set the price

Set the price floor and bid tick. Bid tick is the amount of price increment for each bid.

![Set the price](/img/auction/choose-price.png)

#### Initial phase

The initial phase setting allows you to delay the start of the auction.

![Initial phase](/img/auction/initial-phase.png)

#### Ending phase

Set the auction duration and gap time for the ending phase if needed.

![Ending phase](/img/auction/ending-phase.png)

#### Publish

Publish the auction and observe it under **Explore** section.

You will be asked to approve a transaction, so it will reduce a transaction fee in SOL from your wallet.

![Publish](/img/auction/publish.png)

![Auction page](/img/auction/auction-page.png)

## Limited Edition

For a limited edition auction, a Master Edition NFT (of limited or unlimited supply) may be provided to the auction with a number of copies as the set amount of winning places.

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

A tiered auction can contain a mix of the other three auction types as winning placements. For instance, the first place winner could win a Print of Limited Edition NFT A, while the second-place winner could win Normal NFT, and so on. Additionally, all participants who did not win any place could get a Participation NFT Print from a Master Edition (if the Master Edition had no supply limit).

#### Select the number of winners

![Participation](/img/auction/tiered-select-count.png)

#### Select tiers

On this screen, you can create several tiers to put winners in them. In our example, the first winner will get **Full Rights** transfer for an NFT. The second and third winners will get a **Print** of other NFT.

![Select tier 1](/img/auction/tiered-select-tiers-1.png)
![Select tier 2](/img/auction/tiered-select-tiers-2.png)