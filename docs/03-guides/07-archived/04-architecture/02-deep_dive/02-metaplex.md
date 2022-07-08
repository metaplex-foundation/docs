# Metaplex

## Overview

The Metaplex is the contract that knows how the others tie together and understands what an NFT truly is, how to auction it off and how to redeem it for others. It also understands the concept of royalties and how to pay them out. It's job is to act is the orchestrator between a Vault full of tokens, an Auction primitive, a bunch of winners, creators, and an auctioneer, and make sure everybody gets what is deserved, whether it be monies or tokens (though in the end they are all tokens).

It's state is reproduced here:

```rust
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug, Copy)]
pub enum Key {
    Uninitialized,
    OriginalAuthorityLookupV1,
    BidRedemptionTicketV1,
    StoreV1,
    WhitelistedCreatorV1,
    PayoutTicketV1,
    SafetyDepositValidationTicketV1,
    AuctionManagerV1,
		PrizeTrackingTicketV1,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Debug)]
pub struct AuctionManager {
    pub key: Key,

    pub store: Pubkey,

    pub authority: Pubkey,

    pub auction: Pubkey,

    pub vault: Pubkey,

    pub accept_payment: Pubkey,

    pub state: AuctionManagerState,

    pub settings: AuctionManagerSettings,

		/// True if this is only winning configs of one item each, used for optimization in saving.
    pub straight_shot_optimization: bool,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Debug)]
pub struct AuctionManagerState {
    pub status: AuctionManagerStatus,
    /// When all configs are validated the auction is started and auction manager moves to Running
    pub winning_config_items_validated: u8,

    pub winning_config_states: Vec<WinningConfigState>,

    pub participation_state: Option<ParticipationState>,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Debug)]
pub struct AuctionManagerSettings {
    /// The safety deposit box index in the vault containing the winning items, in order of place
    /// The same index can appear multiple times if that index contains n tokens for n appearances (this will be checked)
    pub winning_configs: Vec<WinningConfig>,

    /// The participation config is separated because it is structurally a bit different,
    /// having different options and also because it has no real "winning place" in the array.
    pub participation_config: Option<ParticipationConfig>,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub struct ParticipationState {
    /// We have this variable below to keep track in the case of the participation NFTs, whose
    /// income will trickle in over time, how much the artists have in the escrow account and
    /// how much would/should be owed to them if they try to claim it relative to the winning bids.
    /// It's  abit tougher than a straightforward bid which has a price attached to it, because
    /// there are many bids of differing amounts (in the case of GivenForBidPrice) and they dont all
    /// come in at one time, so this little ledger here keeps track.
    pub collected_to_accept_payment: u64,

    /// Record of primary sale or not at time of auction creation, set during validation step
    pub primary_sale_happened: bool,

    pub validated: bool,

    /// An account for printing authorization tokens that are made with the one time use token
    /// after the auction ends. Provided during validation step.
    pub printing_authorization_token_account: Option<Pubkey>,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub struct ParticipationConfig {
    /// Setups:
    /// 1. Winners get participation + not charged extra
    /// 2. Winners dont get participation prize
    pub winner_constraint: WinningConstraint,

    /// Setups:
    /// 1. Non-winners get prize for free
    /// 2. Non-winners get prize but pay fixed price
    /// 3. Non-winners get prize but pay bid price
    pub non_winning_constraint: NonWinningConstraint,

    /// The safety deposit box index in the vault containing the template for the participation prize
    pub safety_deposit_box_index: u8,
    /// Setting this field disconnects the participation prizes price from the bid. Any bid you submit, regardless
    /// of amount, charges you the same fixed price.
    pub fixed_price: Option<u64>,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub enum WinningConstraint {
    NoParticipationPrize,
    ParticipationPrizeGiven,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq, Debug)]
pub enum NonWinningConstraint {
    NoParticipationPrize,
    GivenForFixedPrice,
    GivenForBidPrice,
}

#[repr(C)]
#[derive(Clone, PartialEq, BorshSerialize, BorshDeserialize, Copy, Debug)]
pub enum WinningConfigType {
		/// You may be selling your one-of-a-kind NFT for the first time, but not it's accompanying Metadata,
    /// of which you would like to retain ownership. You get 100% of the payment the first sale, then
    /// royalties forever after.
    ///
    /// You may be re-selling something like a Limited/Open Edition print from another auction,
    /// a master edition record token by itself (Without accompanying metadata/printing ownership), etc.
    /// This means artists will get royalty fees according to the top level royalty % on the metadata
    /// split according to their percentages of contribution.
    ///
    /// No metadata ownership is transferred in this instruction, which means while you may be transferring
    /// the token for a limited/open edition away, you would still be (nominally) the owner of the limited edition
    /// metadata, though it confers no rights or privileges of any kind.
    TokenOnlyTransfer,
    /// Means you are auctioning off the master edition record and it's metadata ownership as well as the
    /// token itself. The other person will be able to mint authorization tokens and make changes to the
    /// artwork.
    FullRightsTransfer,
    /// Means you are using authorization tokens to print off editions during the auction using
    /// from a MasterEditionV1
    PrintingV1,
    /// Means you are using the MasterEditionV2 to print off editions
    PrintingV2,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Debug)]
pub struct WinningConfig {
    // For now these are just array-of-array proxies but wanted to make them first class
    // structs in case we want to attach other top level metadata someday.
    pub items: Vec<WinningConfigItem>,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Debug)]
pub struct WinningConfigState {
    pub items: Vec<WinningConfigStateItem>,
    /// Ticked to true when money is pushed to accept_payment account from auction bidding pot
    pub money_pushed_to_accept_payment: bool,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Copy, Debug)]
pub struct WinningConfigItem {
    pub safety_deposit_box_index: u8,
    pub amount: u8,
    pub winning_config_type: WinningConfigType,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Copy, Debug)]
pub struct WinningConfigStateItem {
    /// Record of primary sale or not at time of auction creation, set during validation step
    pub primary_sale_happened: bool,
    /// Ticked to true when a prize is claimed by person who won it
    pub claimed: bool,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Debug, PartialEq)]
pub enum AuctionManagerStatus {
    Initialized,
    Validated,
    Running,
    Disbursing,
    Finished,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]
pub struct OriginalAuthorityLookup {
    pub key: Key,
    pub original_authority: Pubkey,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]
pub struct BidRedemptionTicket {
    pub key: Key,
    pub participation_redeemed: bool,
    pub items_redeemed: u8,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]
pub struct PayoutTicket {
    pub key: Key,
    pub recipient: Pubkey,
    pub amount_paid: u64,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]
pub struct Store {
    pub key: Key,
    pub public: bool,
    pub auction_program: Pubkey,
    pub token_vault_program: Pubkey,
    pub token_metadata_program: Pubkey,
    pub token_program: Pubkey,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]
pub struct WhitelistedCreator {
    pub key: Key,
    pub address: Pubkey,
    pub activated: bool,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Copy)]
pub struct SafetyDepositValidationTicket {
    pub key: Key,
    pub address: Pubkey,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, Copy, Debug)]
pub struct PrizeTrackingTicket {
    pub key: Key,
    pub metadata: Pubkey,
    pub supply_snapshot: u64,
    pub expected_redemptions: u64,
    pub redemptions: u64,
}
```

The instruction set for metaplex can be found here: [https://github.com/metaplex-foundation/metaplex-program-library/blob/master/metaplex/program/src/instruction.rs](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/metaplex/program/src/instruction.rs)

## Types

### AuctionManager

This is the top level struct of the entire contract and serves as a container for "all the things." When you make auctions on Metaplex, you are actually really making these ultimately. An AuctionManager has a single authority (you, the auctioneer), a store, which is the storefront struct, an Auction from the auction contract, and a Vault from the vault contract. It also has a token account called `accept_payment` that serves as a central clearing escrow for all tokens that it will collect in the future from the winning bidders and all payments for fixed price participation nfts from all non-winners in the auction.

It contains embedded within it a separate `state` and `settings` struct. It is seeded with the `settings` on initialization by the caller, while the `state` is derived from `settings` on initialization. AuctionManager goes through several states:

**Initialized:** This is the state it begins in. You provide a **Created** auction and a **Combined** vault. You can't start the auction yet though because you need to prove to this AuctionManager that the configurations you provided in your settings match the tokens in the vault.

**Validated:** You have now proven that each winning configuration in your settings match the tokens in your vault, and you can start the auction via a proxy call.

**Running:** The underlying Auction is now running.

**Disbursing**: The underlying Auction is over and now the AuctionManager is in the business of disbursing royalties to the auctioneer and creators, prizes and participation NFTs to the winners, and possibly participation NFTs to the non-winners.

**Finished:** All funds and prizes disbursed.

This state is not currently in use as switching to it requires an iteration over prizes to review all items for claimed-ness and this costs CPU that is too precious during the redemption call OR adding new endpoint that is not guaranteed to be called. We will revisit it later to bring it back during a refactoring, for now it is considered a NOOP state.

AuctionManagers always have PDAs of seed `['metaplex', metaplex_program_id, auction_id]` where metaplex_program_id is the id of the Metaplex contract and `auction_id` is the address of the Auction being passed to the AuctionManager.

### AuctionManagerSettings

AuctionManagerSettings is an embedded struct inside AuctionManager but is deserving of it's own section. This struct is actually provided by the user in the `init_auction_manager` call to parameterize the AuctionManager with who is winning what and whether or not there is a participation NFT. It is fairly straightforward - for each entry in the WinningConfig vec, it stands for a given winning place in the Auction. The 0th entry is the WinningConfig for the 1st place winner. A WinningConfig has many WinningConfigItems. For each WinningConfigItem in the 0th WinningConfig, it is a mapping to a Vault SafetyDepositBox that the 1st place winner gets items from. You can therefore configure quite arbitrary Auctions this way.

This setup is actually quite redundant and will likely change in the future to a setup where a WinningConfigItem is the top level structure and it simply declares which winners will receive it, because if you wish for multiple winners to receive prints from the same Master Edition, the WinningConfigItem must right now be duplicated across each WinningConfig.

The Participation Config is optional, but has enums describing how it will behave for winners and for non-winners, whether or not it has a price associated with it, and what safety deposit box contains its printing tokens.

Notice that AuctionManagerSettings really doesn't contain settings about the auction. It really only breaks down how to divvy up the Vault. This is the separation of concerns in action - the Auction is parameterized with auction settings, while the AuctionManager understands how to divvy up rewards to winners and is parameterized that way. The Auction does not understand how to divvy up rewards, and the Metaplex contract does not understand how to do Auctions, only how to read winners off of it.

### AuctionManagerState

I consciously made the decision to keep AuctionManagerSettings identical to what you send up when you initialize AuctionManager. However, other things related to WinningConfigs, WinningConfigItems, etc change as the AuctionManager moves through its motions. These changes are recorded in AuctionManagerState, a kind of mirror object that is instantiated during the `init_auction_manager` action.

Specifically, for each WinningConfigItem, we need to record at the time of creation whether the primary sale had happened for later royalties measurement (because this could be changed during auction) and we need to record whether or not this particular WinningConfigItem has been claimed by the winner yet. We do similar things for Participation prize in it's own config.

### BidRedemptionTicket

This is created once per bid and keeps track of whether a given bidder has redeemed their main bid and their participation NFT. This is how the Metaplex contract guarantees a given bidder gets something in exchange for their BidderMetadata PDA in the Auction contract.

BidRedemptionTickets always have PDAs of `['metaplex', auction_id, bidder_metadata_key]` where the `auction_id` is the address of the Auction and the `bidder_metadata_key` is the address of the BidderMetadata PDA that the Auction contract produced.

### PayoutTicket

For each creator, for each metadata(WinningConfigItem), for each winning place(WinningConfig) in an Auction, a PayoutTicket is created to record the sliver of income generated for that creator. There is also one made for the Auctioneer for every such case. And yes, it really is that specific. This means that a given creator may have quite a few PayoutTickets for a single AuctionManager, but each one represents a slightly different royalty payout.

For instance, 1st place may have three items with 3 unique metadata won while 2nd place may have 4 metadata from 4 items, every item with a single unique creator. The split of funds in the 1st place is going to be 3 ways, while in 2nd place would be 4 ways. Even if 1st and 2nd place bids are the same, we want two records to reflect the royalties paid from 1st and 2nd place, because they would be different numbers in this case, and we want to preserve history.

PayoutTickets always have PDAs of `['metaplex', auction_manager_id, winning_config_index, winning_config_item_index, creator_index, safety_deposit_key, destination_owner]` where `auction_manager_id` is the address of the AuctionManager account, `winning_config_index` is the 0-based index of the WinningConfig in the AuctionManager settings you paid out in this ticket, `winning_config_item_index` is the 0-based index of the WinningConfigItem in that WinningConfig, `creator_index` is the 0-based creator index in that Metadata's creator array that you paid out for that WinningConfigItem (or 'auctioneer' if paying the auctioneer for this item), `safety_deposit_key` is the address to the safety deposit box for this item, and `destination_owner` is the owner of the destination account where the monies are being sent. Yeah, I know, painful.

### Store

Every person who forks the repository to make their own storefront should have a unique store struct that is seeded by their own administrative wallet. These are created and updated by the idempotent `set_store` endpoint. Each store can choose to use it's own token, token-metadata, token-vault and auction programs if it so chooses, though right now we've got a hard check that the token program is actually the global spl-token program. The store also can be either public or private, which determines whether or not AuctionManagers can sell items that have all non-whitelisted creators on them or not. We take a "bouncer-knows-your-friend-and-lets-you-in" approach to selling items in whitelist-only stores - if an item has at least one _verified_ Whitelisted Creator, then it can be sold.

Store PDAs are always a PDA seed of `['metaplex', metaplex_program_id, admin_wallet]` where `metaplex_program_id` is the address of the Metaplex contract and `admin_wallet` is the wallet that is administering this store.

### WhitelistedCreator

A cousin of the simple Creator struct from the Metadata program, this is a foreign key connector between a creator address and a store. It denotes whether or not this creator is currently active in the store and if they are, allows items from them to be sold in it.

WhitelistedCreator PDAs are always a PDA seed of `['metaplex', metaplex_program_id, store_key, creator_key]` where `metaplex_program_id` is the address of the Metaplex contract, `store_key` is the address of the storefront, and `creator_key` is obviously the address of the creator's wallet you are whitelisting.

### SafetyDepositValidationTicket

This PDA solely exists to prevent validating a safety deposit box twice, which could present security vulnerabilities. It is created for each safety deposit box when it is presented for validation.

SafetyDepositValidationTickets are always PDAs with seed of `['metaplex', metaplex_program_id, auction_manager_id, safety_deposit_key]`where `metaplex_program_id` is the address of the Metaplex contract, `auction_manager_id` is the address of the AuctionManager, and `safety_deposit_key` is the address of the SafetyDepositBox being validated.

### OriginalAuthorityLookup

These are created during FullRightsTransfers. When a FullRightsTransfer is happening, the Metadata `updateAuthority` is shifted from the Auctioneer to the AuctionManager so that it can grant it in turn to the winner, and this record is created to keep track of who the original `updateAuthority` was to return it later if the item is not sold. That functionality (returns) is not implemented as of this writing but will be in the near future.

OriginalAuthorityLookups always have PDAs with seed of `['metaplex', auction_id, metadata_key]` where `auction_id` is the address of the Auction and `metadata_key` is the address of the actual Metadata struct.

### PrizeTrackingTicket

Created on a distinct WinningConfigItem basis (ie by WinningConfigType AND mint) across all WinningConfigs, one PrizeTrackingTicket is created to keep track of how many expected redemptions there will be across all winners for a given MasterEdition, and what the supply was when the first person hit redeem, to keep track of the relative edition offsets each person should get relative to winner #1, #2, etc. This is used for redeeming PrintingV2 bids, to ensure winner #1 gets edition #1, and so on.

## Concepts

### Types of Token Sales

There are five major types of token sales supported by the Metaplex protocol. Four are covered in the WinningConfigType enum, but this is a bit limiting as it is really only considering sales to _winners_, and leaves out the all-important Participation NFT which is a different kind of sale we will consider separately.

**TokenOnlyTransfer:** Probably the easiest to understand, this is a straight up `spl_token::transfer` command wrapped in a bunch of Metaplex magic. At the end of the day, the auctioneer still owns the Metadata struct and any other associated PDAs, but someone else now has the physical token in their wallets. These tokens will still show up and work just fine in Phantom and other supported wallet clients because those clients can still look up the Metadata. This is the difference between owning the Metadata and owning the token. For a token that is an Edition, the difference is nominal, as an Edition has zero printing rights and is immutable. However, for a token that is a MasterEdition, the difference is _substantial_, as the owner of the Metadata can rename it, change its symbol, it's URI, and creators array.

Note that owning the token itself is the _only_ requirement for using the `update_primary_sale_happened_via_token` endpoint on the token metadata program _and_ for using the `mint_new_edition_from_master_edition_via_token`.

**FullRightsTransfer:** This is a TokenOnlyTransfer, except in addition, the `updateAuthority` on the Metadata struct is set to the new owner as well, so they now have all the rights and privileges associated with the original owner, including the right to mint printing tokens. They can even change the name and URI of your token, so be careful!

**PrintingV1:** This token type represents a deprecated logic flow that will be removed in future editions and can only be accessed if using a MasterEditionV1 type of NFT. In this case, the safety deposit box in question does not contain the actual token, but a token from the token's Master Edition's `printing_mint`. This printing token gives the bearer the authorization to label any mint they have that has a supply of one and decimals zero as a child Edition of that Master Edition one time. This is how Metaplex used to do a Printing sale. It doesn't grant the winning bidder a Limited Edition NFT. It grants them a printing token, they make their own mint/token account combo, and take the printing token to the token metadata contract and label it themselves.

**PrintingV2:** The Auction holds the Master Edition in the safety deposit box and uses it via the special `mint_new_edition_from_master_edition_via_vault_proxy` call on Token Metadata to mint editions for auction winners. Once all bids have been redeemed, the auction releases the Master Edition from this escrow via the `withdraw_master_edition` call on Metaplex. This flow makes use of the PrizeTrackingTicket to keep track of the starting supply when the first redemption happens so that as each bidder comes in to redeem, everybody gets the correct offset for their edition relative to the #1 winner.

**Participation NFTs:** Treated just like a PrintingV2, except these are first-come-first-serve as far as edition-numbering goes. This endpoint will also collect payment if the participation config has a fixed price setting or is using the "use last bid" setting to charge the user based on their last bid. Note that charging users for participation NFTs only can happen if they lose. Since the user previously cancelled their bid if they lost, they will net no change or net the difference between their last bid and the fixed price.

### Royalties

Metadata come locked and stocked with arrays of creators, each with their own `share` and all guaranteed to sum to 100. The Metadata itself has a `seller_fee_basis_points` field that represents the share creators get out of the proceeds in any secondary sale and a `primary_sale_happened` boolean that distinguishes to the world whether or not this particular Metadata has experienced it's first sale or not. With all of this, Metaplex is able to do complete Royalty calculations after an Auction is over. It was mentioned above that on initialization, the Metaplex contract snapshots for each Metadata being sold the `primary_sale_happened` just in case the boolean is flipped during the auction so that royalties are calculated as-of initiation - this is important to note.

At the end of the auction, anybody (permissionless) can cycle through each winning bid in the contract and ask the Metaplex contract to use its authority to call the Auction contract and pump the winning bid monies into the `accept_payment` escrow account via `claim_bid`. Once all winning bids have been settled into here, royalties are eligible to be paid out. We'll cover payouts of fixed price Participation NFTs separately.

Now, anybody (permissionless) can cycle through each creator PLUS the auctioneer on each item in each winning bid and call `empty_payment_account` with an Associated Token Account that is owned by that creator or auctioneer and that action will calculate, using the creator's share or auctioneer's share of that item's metadata, and the fractional percentage of that item of the overall winning basket, to payout the creator or auctioneer from the escrow.

Our front end implementation immediately calls the `update_primary_sale_happened` endpoint on token metadata for any token once redeemed for users so that if they re-sell, the `primary_sale_happened` boolean is taken into account in the `empty_payment_account` logic and only the basis points given in `seller_fee_basis_points` goes to the creators instead of the whole pie. The remaining part of the pie goes to the auctioneer doing the reselling.

We don't do weighted items in winning baskets right now - if a winning basket has 3 unique metadata in it right now, it is split three ways, even if one of the metadata is disbursing 3 tokens while the other is disbursing 2. This may come in a future version. Once this cycle is complete, the escrow account is usually empty.

Things get a little complex when participation NFTs come into play. When a participation NFT has a fixed price, it is only paid in the case of non-winners. What they first do is cancel their bid, getting a refund, and then they redeem their participation bid with the `redeem_participation_bid` endpoint. This charges them the fixed price and dumps those funds into the `accept_payment` account. At intervals, someone must come and turn the crank to dump the proceeds to the creators of the Participation NFT from the latest redeemers of that NFT because they will only receive proceeds as people come and redeem and pay for them.

Note because our front end implementation chooses to use SOL instead of a generic SPL token, we use a Wrapped SOL ATA account for creators. They are then forced to use a drop down menu to liquidate and close the Wrapped SOL ATA account when they next login, absorbing the Wrapped SOL back into their normal SOL wallets. If you choose not to use SOL in your implementation, you will not have this difficulty.

### Validation

Just because you provide a vault to an AuctionManager and an AuctionManagerSettings declaring this vault is filled with wonderful prizes _does not_ believe that Metaplex will believe you. For every safety deposit box indexed in a WinningConfigItem, there must be a call to `validate_safety_deposit_box` after initiation where the safety deposit box is provided for inspection to the Metaplex contract so that it can verify that there are enough tokens, and of the right type, to pay off all winners in the auction.

Given how irritating this process is, we may in the future merge token-vault with metaplex, or simply copy over the parts of it that are relevant, leaving token-vault out for those interested in experimenting with fractionalization.

### Unwon Items

Any Token Only Transfer item, or MasterEditionV1/MasterEditionV2 stored for a Full Rights Transfer unwon in an Auction can be returned to the Auction Manager by calling the `redeem_unused_winning_config_items_as_auctioneer` end point. It acts as a proxy, calling the `redeem_bid` or `redeem_full_rights_transfer_bid` depending on how it is parameterized, and passing in a winning_index that overrides the actual winning_index that would be detected for the bidder_info key being passed in (which is the auctioneer's in this case.) In this way the auctioneer acts not as a winning bidder but as a generic "non-bidder" who empties each prize that has no bidder using the same redemption flow. For MasterEditionV2s stored for PrintingV2 or Participation prizes, these can be withdrawn using `withdraw_edition`.
