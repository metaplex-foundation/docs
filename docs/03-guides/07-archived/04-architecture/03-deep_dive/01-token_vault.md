# Token Vault

## Overview

The Token Vault serves two purposes in the Metaplex ecosystem: Storing tokens for safe-keeping for the Auction Manager, and as a fractionalization service for NFTs. It has two primary concepts, that of the Vault and of the Safety Deposit Box. A Vault can have any number of Safety Deposit Boxes, one per unique mint being stored. A Vault goes through many phases in life-cycle, but the two important ones are when it's **Activated** and when it is **Combined**. When it is **Activated**, new fractional shares can be minted and distributed for partial ownership, and when it is **Combined**, fractional owners can burn their shares in exchange for remuneration and the vault authority can retrieve the stored tokens in the Vault.

Below is the Rust state stored on chain:

```rust
#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq)]
pub enum Key {
    Uninitialized,
    SafetyDepositBoxV1,
    ExternalAccountKeyV1,
    VaultV1,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize, PartialEq)]
pub enum VaultState {
    Inactive,
    Active,
    Combined,
    Deactivated,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize)]
pub struct Vault {
    pub key: Key,
    /// Store token program used
    pub token_program: Pubkey,
    /// Mint that produces the fractional shares
    pub fraction_mint: Pubkey,
    /// Authority who can make changes to the vault
    pub authority: Pubkey,
    /// treasury where fractional shares are held for redemption by authority
    pub fraction_treasury: Pubkey,
    /// treasury where monies are held for fractional share holders to redeem(burn) shares once buyout is made
    pub redeem_treasury: Pubkey,
    /// Can authority mint more shares from fraction_mint after activation
    pub allow_further_share_creation: bool,

    /// Must point at an ExternalPriceAccount, which gives permission and price for buyout.
    pub pricing_lookup_address: Pubkey,
    /// In inactive state, we use this to set the order key on Safety Deposit Boxes being added and
    /// then we increment it and save so the next safety deposit box gets the next number.
    /// In the Combined state during token redemption by authority, we use it as a decrementing counter each time
    /// The authority of the vault withdrawals a Safety Deposit contents to count down how many
    /// are left to be opened and closed down. Once this hits zero, and the fraction mint has zero shares,
    /// then we can deactivate the vault.
    pub token_type_count: u8,
    pub state: VaultState,

    /// Once combination happens, we copy price per share to vault so that if something nefarious happens
    /// to external price account, like price change, we still have the math 'saved' for use in our calcs
    pub locked_price_per_share: u64,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize)]
pub struct SafetyDepositBox {
    // Please note if you change this struct, be careful as we read directly off it
    // in Metaplex to avoid serialization costs...
    /// Each token type in a vault has it's own box that contains it's mint and a look-back
    pub key: Key,
    /// Key pointing to the parent vault
    pub vault: Pubkey,
    /// This particular token's mint
    pub token_mint: Pubkey,
    /// Account that stores the tokens under management
    pub store: Pubkey,
    /// the order in the array of registries
    pub order: u8,
}

#[repr(C)]
#[derive(Clone, BorshSerialize, BorshDeserialize)]
pub struct ExternalPriceAccount {
    pub key: Key,
    pub price_per_share: u64,
    /// Mint of the currency we are pricing the shares against, should be same as redeem_treasury.
    /// Most likely will be USDC mint most of the time.
    pub price_mint: Pubkey,
    /// Whether or not combination has been allowed for this vault.
    pub allowed_to_combine: bool,
}

```

The instruction set for the vault can be found here: [https://github.com/metaplex-foundation/metaplex-program-library/blob/master/token-vault/program/src/instruction.rs](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/token-vault/program/src/instruction.rs)

## Types

### Vault

The Big Kahuna and namesake of this contract, the Vault is really a container of many concepts. The Vault can be used without any fractional share emissions as a kind of escrow service for many different tokens of different mint types, and indeed, this is what Metaplex uses it for when performing Auctions. However it can also be used to provide partial ownership of NFTs to interested investors. Let's break down the keys in the Vault's state one by one.

**Fractional shares:** It points at a `fractional_mint` and `fractional_treasury`, which allows the vault authority to mint new fractional shares to a treasury account before (or optionally after) **Activation** of the vault. Shares inside the treasury don't count towards the cost of **Combining** the vault.

**Redeem treasury:** This account is used to hold in escrow the funds used to pay off fractional shareholders when the vault authority wishes to **Combine** the vault and regain possession of the stored assets inside. The vault authority has to pay shares_in_circulation\*price_of_shares into this redeem treasury. The mint of the treasury is completely decidable by the vault authority, we make no opinions on that.

**Pricing Lookup Address:** This is a pointer to an ExternalLookupAccount, which while its struct is defined by the Token Vault program, the account itself does not need to be owned by the vault program or anything within it. It is meant to be an external pricing oracle that is independent of the vault authority or vault that provides pricing data on the fractional share price so that the fractional share owners get a fair buyout by the vault authority.

Token Vaults do not have PDA addresses.

### Safety Deposit Box

A safety deposit box keeps track of the token account containing the tokens, its vault, and what order in the vault it maintains. If it was inserted 3rd, it's order is 2 (0-based.) It's a pretty simple setup. And yes, you should be aware the safety deposit box doesn't _actually_ store any tokens - it contains a `store` key that points to an spl-token account that contains the tokens. It's more of a foreign key join table between the vault and the store.

Safety Deposit Boxes always have PDA addresses of type `['vault', vault_key, mint_key]`.

### External Price Account

The External Price Account is meant to be used as an external oracle. It is provided to a Vault on initialization and doesn't need to be owned or controlled by the vault authority (though it can be.) It can provide data on the `price_per_share` of fractional shares, whether or not the vault authority is currently allowed to **Combine** the vault and reclaim the contents, and what the `price_mint` of the vault is.

ExternalPriceAccounts do not have PDA addresses.

## Concepts

### Vault State Machine

A Vault begins its journey in the **Inactive** state. It is in this state that tokens can be added, and fractional shares can be minted into the fractional treasury. The idea is this phase is the "prep" where we are getting the Vault ready for use as an escrow or as a holding corporation for fractional ownership of NFTs.

Once the vault is **Activated**, the Vault is closed, and the vault authority may _not_ remove the tokens from the Vault. Furthermore, no new fractional shares may be minted unless during initialization the special `allow_further_share_creation` boolean was set. Some fractional share owners may not be too enthused about buying into a vault only to be diluted later, so we make this a one-time thing during initialization where the vault authority gets to choose what kind of vault it gets to be. The vault authority _can_ however, remove shares from the treasury and give them to whomever they want, or start a dex with them, or an AMM, or what have you. These shares represent partial ownership of the vault now!

Let's now say that the vault authority now wants to regain access to the Vault's contents. To do this, first, the ExternalPriceAccount tied to the vault needs to have `allowed_to_combine` set to true. If this is the case, the vault authority can then **Combine** the Vault, providing a token account with enough tokens to pay off all outstanding fractional share holders to the Vault. The Vault will drain this account to the `redeem_treasury` and the Vault will move to the **Combined** state. The Vault will use the `price_per_share` on the ExternalPriceAccount for this calculation. If no shares are outstanding, this **Combination** operation is free. During **Combination**, the vault authority also has the option to transmit vault authority to a new authority. Also note that all shares remaining in the fractional treasury are burned in this step.

Once **Combined**, the Vault's contents can now be emptied by the vault authority, and fractional share owners can redeem (and burn) their fractional share tokens for tokens from the `redeem_treasury`. When all tokens in all safety deposit boxes have been removed, and all fractional tokens have been burned, the Vault will automatically move to the **Deactivated** state.
