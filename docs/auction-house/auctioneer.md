---
sidebar_label: "Auctioneer Interface"
sidebar_position: 6
---

# What is Auctioneer

Auction House is a protocol for marketplaces to implement a decentralized sales contract. It is simple, fast and very cheap, not to mention secure. The current Auction House implementation is designed with instant sales in mind and currently has no features that enable the various auction types that have become popular in the Solana ecosystem.

Rather than add additional complexity to the secure and robust Auction House contract, features and restrictions such as timed auctions, minimum bid prices, and highest bid tracking can all be implemented via a new contract type, called an Auctioneer. Auctioneer will use the composability pattern to control an individual Auction House instance. Additionally, to prevent the program complexity and cost that results by adding configuration controls for each type of timed auction, an Auctioneer is intended to be a customized contract type, written by the user, and utilized with their specific Auction House instance.

## Delegating an Auctioneer
To fully enable Auctioneer to use an Auction House instance's instructions, it must be explicitly delegated. The `DelegateAuctioneer` command is used to tell the Auction House instance which program will be using the `auctioneer_<method>` instructions. An Auction House with a delegated Auctioneer will no longer be able to use the normal instructions. This is a safety mechanism put in place because the Auctioneer is capable of introducing additional restrictions on bids and listings. By preventing non-Auctioneer calls from executing a sale, malicious actors are prevented from bypassing any restrictions added by the Auctioneer.

## Auctioneer Scopes
By default, the Auctioneer contract has control over the following Auction House methods via the `auctioneer_<method>` instructions.
* Buy
* Public Buy
* Sell
* Execute Sale
* Cancel
* Deposit
* Withdraw

As previously stated, delegating control of these instructions to the Auctioneer prevents the normal Auction House from executing them. The concept of Auctioneer Scopes makes the implementation more flexible by allowing each individual instruction to be delegated separately. To disable the delegation of one of the above instructions exclude its enum value from the scope argument passed in to `DelegateAuctioneer`.