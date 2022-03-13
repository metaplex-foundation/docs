---
sidebar_position: 2
---

# The Contracts

## Token Metadata

This is the bedrock contract of the entire ecosystem. All that you need to interact with it is your own mint for which you have the mint authority. It is primarily a "mint decorator." It allows you to decorate your mint with a Metadata PDA that gives it a name, symbol, uri, list of creators with royalty splits, and whether or not it's been sold. You can do this with any mint with any supply. Phantom Wallet uses this Metadata account and it's URI field, which often links to a Manifest.json file of a certain format, to display NFTs in their Collections category on their UI.

Furthermore, if your mint has one token in its supply, you can give it an additional decoration PDA, of type MasterEdition. This PDA denotes the mint as a special type of object that can mint other mints - which we call Editions (as opposed to MasterEditions because they can't print other mints themselves). This makes this mint like the "master records" that record studios used to use to make new copies of records back in the day. The MasterEdition PDA will take away minting and freezing authority from you in the process and will contain information about total supply, maximum possible supply, etc.

The existence of Metadata and its sister PDA MasterEdition makes a very powerful combination for a mint that enables the entire rest of the Metaplex contract stack. Now you can create:

- Normal mints that just have names (Metadata but no MasterEdition)
- One of a kind NFTs (Metadata + MasterEdition with `max_supply` of 0)
- NFTs that can print limited edition child NFTs (Metadata + MasterEdition with `max_supply` of say 10)
- NFTs that can print unlimited open edition NFTs (Metadata + MasterEdition with unlimited `max_supply`)

You can also easily transfer ownership of these PDA records with the `updateAuthority` key on Metadata between parties, so you can sell printing rights to another party, or just give them the token itself while retaining the printing rights.

## Token Vault

A token vault is a collection of arbitrary token allotments. It acts like a safe-escrow for these tokens.

You can create a vault object and insert any number of tokens from any number of mints into safety deposit boxes and then activate the vault. 

The vault has a few different states, the most important ones being **Activated** and **Combined**.

Activated - When the vault is locked and nobody can access its contents.

Combined - when the vault has essentially been opened and the vault authority can withdraw the contents.

You can switch from an Activated state to a Combined state as long as there are no outstanding fractional shares in circulation.

If you issue 0 fractional shares, then you can go straight from Activated to Combined. This what the Metaplex front-end contract does during Auction creation.

Once the vault is Activated, you can then mint treasury shares that represent fractional ownership of the tokens inside the vault. 

The treasury shares are valued based on the vault's price oracle. This oracle is an external price indicator account and does not need to be owned by the vault.

Shares can be sold in a DEX or in an AMM based on the prices identified by this oracle.

This allows you, as the vault owner, to take your NFT(s) and turn them into a sort of corporation and sell partial ownership to other parties. 

If the external price oracle has its price driven by a proper third party such as a DEX or other price discovery mechanism, then the entire system is balanced.

When there are outstanding shares, you cannot, as the vault owner, **Combine** the vault, and retrieve your tokens, until you buy out the shares in circulation. 

To unlock the vault, you have to deposit the buy-out amount. This amount is calculated as follows:

Buyout amount = number_of_shares_outstanding * price_from_oracle

This amount will allow unlocking vault. Then shareholders can return at their leisure to trade in shares for their winnings.

## Auction

The auction contract allows performing auctions on any assets that are identified by a resource address. The auction doesn't need to know anything else about the resource it is trying to auction.

It currently supports English and Open Edition Auctions. An Open Edition Auction is one where each bid is tracked but no winners are announced.

The auction contract is only concerned with identifying the auction rankings for bids and collecting the wins.

Anytime you place a bid or cancel it, it is the auction contract you're interacting with.

Redemption is not a part of the auction contract. As far as the auction contract is concerned, it only recognizes your position in the bid.

The Metaplex contract allows redemption because it can identify how the resource being auctioned off is divided up between winners.

The auction contract will be expanded in the future to include other auction types. It will also contain better guarantees between the provider and the winner. For e.g. it will ensure that the winner can sign a PDA asserting that they have received the prize. 

Right now this primitive contract should _not_ be used in isolation, but in companionship with another contract such as Metaplex in our case, because it makes such guarantees that prizes are delivered if prizes are won.


## Metaplex

This is the granddaddy contract of them all. The primary product of the Metaplex contract are AuctionManagers, and they are the nexus of the other three contract's structs. The purpose of an AuctionManager is to understand that an Auction object is auctioning off the contents of a Vault, and that the contents of a Vault are different types of NFT arrangements, such as:

- Limited Edition Prints (Printing a new child edition from limited supply)
- Open Edition Prints (Printing a new child edition from unlimited supply)
- Full Rights Transfers (Giving away token + metadata ownership)
- Single Token Transfers (Giving away a token but not metadata ownership)

It orchestrates disbursements of those contents to winners of an auction. An AuctionManager requires both a Vault and an Auction to run, and it requires that the Auction's resource key be set to the Vault.

Due to each type of NFT transfer above requiring slightly different nuanced handling and checking, Metaplex handles knowing about those things, and making the different CPI calls to the Token Metadata contract to make those things happen as required during the redemption phase. It also has full authority over all the objects like Vault and Auction, and handles all royalties payments by collecting funds from the auction into its own central escrow account and then disbursing to artists.
