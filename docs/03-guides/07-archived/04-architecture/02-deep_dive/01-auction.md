# Auction

## Overview

The Auction contract is a primitive that is meant to be used in conjunction with another smart contract that understands the context of the resource for which the auction is being held. It contains mechanics for collecting payment from bidders, for keeping track of a winners list, and handling bid placement and cancellation, but it has no opinions on what the resource being bid on should be, or how it gets divided.

While it currently has support for English Auctions and Open Edition Auctions, it will in the future support other types of auctions such as Vickrey and Dutch Auctions. The state for the contract is reproduced here:

```rust
/// Structure with pricing floor data.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub enum PriceFloor {
    /// Due to borsh on the front end disallowing different arguments in enums, we have to make sure data is
    /// same size across all three
    /// No price floor, any bid is valid.
    None([u8; 32]),
    /// Explicit minimum price, any bid below this is rejected.
    MinimumPrice([u64; 4]),
    /// Hidden minimum price, revealed at the end of the auction.
    BlindedPrice(Hash),
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub struct AuctionData {
    /// Pubkey of the authority with permission to modify this auction.
    pub authority: Pubkey,
    /// Pubkey of the resource being bid on.
    /// TODO try to bring this back some day. Had to remove this due to a stack access violation bug
    /// interactin that happens in metaplex during redemptions due to some low level rust error
    /// that happens when AuctionData has too many fields. This field was the least used.
    ///pub resource: Pubkey,
    /// Token mint for the SPL token being used to bid
    pub token_mint: Pubkey,
    /// The time the last bid was placed, used to keep track of auction timing.
    pub last_bid: Option<UnixTimestamp>,
    /// Slot time the auction was officially ended by.
    pub ended_at: Option<UnixTimestamp>,
    /// End time is the cut-off point that the auction is forced to end by.
    pub end_auction_at: Option<UnixTimestamp>,
    /// Gap time is the amount of time in slots after the previous bid at which the auction ends.
    pub end_auction_gap: Option<UnixTimestamp>,
    /// Minimum price for any bid to meet.
    pub price_floor: PriceFloor,
    /// The state the auction is in, whether it has started or ended.
    pub state: AuctionState,
    /// Auction Bids, each user may have one bid open at a time.
    pub bid_state: BidState,
}

// Further storage for more fields. Would like to store more on the main data but due
// to a borsh issue that causes more added fields to inflict "Access violation" errors
// during redemption in main Metaplex app for no reason, we had to add this nasty PDA.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub struct AuctionDataExtended {
    /// Total uncancelled bids
    pub total_uncancelled_bids: u64,
    // Unimplemented fields
    /// Tick size
    pub tick_size: Option<u64>,
    /// gap_tick_size_percentage - two decimal points
    pub gap_tick_size_percentage: Option<u8>,
}

/// Define valid auction state transitions.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub enum AuctionState {
    Created,
    Started,
    Ended,
}

/// Bids associate a bidding key with an amount bid.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub struct Bid(pub Pubkey, pub u64);

/// BidState tracks the running state of an auction, each variant represents a different kind of
/// auction being run.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub enum BidState {
    EnglishAuction { bids: Vec<Bid>, max: usize },
    OpenEdition { bids: Vec<Bid>, max: usize },
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub enum WinnerLimit {
    Unlimited(usize),
    Capped(usize),
}

/// Models a set of metadata for a bidder, meant to be stored in a PDA. This allows looking up
/// information about a bidder regardless of if they have won, lost or cancelled.
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub struct BidderMetadata {
    // Relationship with the bidder who's metadata this covers.
    pub bidder_pubkey: Pubkey,
    // Relationship with the auction this bid was placed on.
    pub auction_pubkey: Pubkey,
    // Amount that the user bid.
    pub last_bid: u64,
    // Tracks the last time this user bid.
    pub last_bid_timestamp: UnixTimestamp,
    // Whether the last bid the user made was cancelled. This should also be enough to know if the
    // user is a winner, as if cancelled it implies previous bids were also cancelled.
    pub cancelled: bool,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq)]
pub struct BidderPot {
    /// Points at actual pot that is a token account
    pub bidder_pot: Pubkey,
    /// Originating bidder account
    pub bidder_act: Pubkey,
    /// Auction account
    pub auction_act: Pubkey,
    /// emptied or not
    pub emptied: bool,
}

```

The instruction set for auction can be found here: [https://github.com/metaplex-foundation/metaplex-program-library/blob/master/auction/program/src/instruction.rs](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/auction/program/src/instruction.rs)

## Types

### AuctionData

This is the core data representing an auction in this program. It contains (almost) all of the configuration representing an auction. You'll notice that it has a `token_mint` field which means any spl_token can be used as the base mint for an auction, so you can bid in any currency! It also keeps track of a few other goodies, so let's break them down one by one:

`last_bid`: Every time someone bids, this is set. Useful for doing math with the gap time feature.

`ended_at` : This is when the auction actually will end or has ended. It can be set at any time.

`end_auction_at` : This is actually a duration and is a little confusing. If you're planning to start your auction at a later point in time, you can set this as a duration, and when you finally start your auction, ended_at will be set to now + this duration. Useful, right? Maybe poorly named. Our bad.

`end_auction_gap` : Used in conjunction with `last_bid` - if this is set to 1 minute, then let's say someone makes a bid in the last 5 seconds of an auction. The auction is then extended by 55 seconds from it's original end time (+ 1 minute from the last bid.) If someone then makes another bid within that time period, it's another + 1 minute from that bid. And so on.

`price_floor` : Various options for price floor, but essentially you can use this to set no price floor, a minimum price floor, or a blind price floor on the auction. See the enum for more.

AuctionData accounts always have PDA addresses of `['auction', auction_program_id, resource_id]` where `resource_id` is the thing being auctioned off and `auction_program_id` is the id of the auction contract.

### Bid State

Bid State is technically not a top level struct, but an embedded one within AuctionData. I thought it was good to give it a section anyway because it's a complex little beast. It's actually an enum that holds a bid vector and a maximum size denoting how many of those bids are actually "valid winners" vs just placeholders.

It's reversed, which is to say that the number one winner is always at the end of the vec. It's also always bigger generally than the number of winners so that if a bid is cancelled, we have some people who got bumped out of top spots that can be moved back into them without having to cancel and replace their bids. When a bid is placed, it is inserted in the proper position based on it's amount and then the lowest bidder is bumped off the 0th position of the vec if the vec is at max size, so the vec remains sorted at all times.

In the case of open edition, the max is always zero, ie there are never any winners, and we are just accepting bids and creating BidderMetadata tickets and BidderPots to accept payment for (probably) fixed price Participation NFTs.

We would prefer that OpenEdition enum have no bid vector and no max, but unfortunately borsh-js does not support enums with different internal data structures, so all data structures in an enum must be identical (even if unused.) Keep that in mind when designing your own end to end borsh implementations!

### BidderMetadata

This is created and/or updated during the `place_bid` and `cancel_bid` endpoints of the contract, and acts as proof to other contracts and this one that a bidder actually placed a bid, because there is no guarantee that this bidder will have an entry in the actual BidState as they could've gotten knocked off the array in high periods of bidder activity.

BidderMetadata always has a PDA of `['auction', auction_program_id, auction_id, bidder_key, 'metadata']` where `auction_program_id` is the program id of the auction contract, `auction_id` is the key of the auction, and `bidder_key` is the wallet making the bid.

### BidderPot

This ended up being a bit of a redundant struct, but this serves as a join table between the actual token account containing the funds collected by the auction for a given bidder, the bidder's sol wallet, and an auction. In the future we may merge this struct into BidderMetadata. There is also an `emptied` boolean on it to track whether or not the bidder pot has been claimed by the auctioneer for easy lookup.

BidderPot always has a PDA of `['auction', auction_program_id, auction_id, bidder_key]`where `auction_program_id` is the program id of the auction contract, `auction_id` is the key of the auction, and `bidder_key` is the wallet making the bid.

### AuctionDataExtended

If you've read this far, you now get to witness my personal shame. So as it turns out, if you build a complex enough program with enough structs flying around, there is some kind of weird interaction in the Metaplex contract that causes it to blow out with an access violation if you add more than a certain number of keys to one particular struct (AuctionData), and _only_ during the redemption endpoint calls. We were unable to discern why this was across 3 days of debugging. We had a theory it was due to some issue with borsh but it is not 100% certain, as we're not experts with that library's internals.

Instead, our work-around was to introduce AuctionDataExtended to add new fields that we needed to AuctionData without breaking this hidden bug that seems to exist. What is odd about the whole thing is adding fields to _other_ structs doesn't cause any issues. In the future I'd love to have someone who knows way more than me about these subjects weigh in and tell me what I did wrong here to resolve this split-brain problem! We also don't have reverse lookup capability (Resource key on AuctionData) because of this bug - adding it would cause the blow out I mentioned.

Another note here is `gap_tick_size_percentage` as of the time of this writing has not been implemented yet, it is just a dummy field.

AuctionDataExtended accounts always have PDA addresses of `['auction', auction_program_id, resource_id, 'extended']` where `resource_id` is the thing being auctioned off and `auction_program_id` is the id of the auction contract.

## Concepts

### Incompleteness

The contract currently has a deficiency in it's implementation where an auctioneer can claim the funds for a winning bid without the winner having signed off on having received some sort of prize for that bid - which is why we mention the "conjunction" above in the Overview. Metaplex guarantees through the interaction with the Metaplex contract that all users of Metaplex + Auction combination get a prize, but use of Auction by itself does not guarantee a winner gets a prize for a bid, because this functionality does not exist in this contract alone yet. A future version of this contract will require the winning bidders to create a PDA admitting they have received a prize before the auctioneer can withdraw funds, making this a complete primitive that can be used without any other contract making guarantees.

The way Metaplex makes such a guarantee is that it controls the Vault resource being bid on, and if you present the Metaplex contract with a BidderMetadata account from the Auction that represents a winning bid, it will disburse the proper NFT to you from the Vault. You can do the same with your own custom implementation.

### Cancelling before Placing a Bid

Currently you cannot change or place a new bid until you cancel the old one. Just keep that in mind - it makes for easier logic all around. This may change in the future as we add support for bidders not being able to cancel once a bid is placed, or not being able to bid less than they previously bid.

### Claiming bids

Pulling money out of the auction contract as an auctioneer can only be done after an auction has ended and must be done for each winning bid, one after the other. You provide a destination token account and drain each bidder pot to it via the `claim_bid` endpoint.

### Refunds

Refunds work by cancelling bids. Currently, any bidder can cancel any time during an auction, but only non-winners of the auction can cancel after it ends. When users cancel, they receive full refunds. The "refund bid" button on the front end just cancels the bid.

### Turning the Crank

The `place_bid` will turn the state of the auction to **Ended** if someone places a bid after the auction's `ended_at` date passes. It will then return `Ok(())` in a kind of silent pass without actually placing a bid. Once the auction is in the **Ended** state, bid funds can be claimed by the auctioneer. This is actually how an auction is really ended - it does not end on it's own accord, someone has to turn the crank! In theory, an auction will remain open for all eternity, past its own end date, if nobody touches it, but nobody can do any invalid things to it. It's kind of like Schrodinger's Cat. However, even if an auction is not officially in **Ended** state but it is past its `ended_at`, winners will not be allowed to cancel bids.
