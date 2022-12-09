---
description: "A deep dive on the instruction handlers."
---

# Instructions

## Create Escrow Constraint Model Account
Creates a Constraint Model that can be used for Trifle accounts.

## Create Trifle Account
Creates a Trifle Account to be used on an NFT. A mandatory Constraint Model account must be passed in on creation for the Trifle account to check against.

## Transfer In
Transfer a token into the Creator Owned Escrow managed by the Trifle account. While it is possible to do a standard spl-token transfer to the COE, using this instruction is the only way for the Trifle account to manage and track the owned tokens. This instruction also performs checks against the Constraint Model to verify that the token being transferred in is valid.

## Transfer Out
Transfer a token out of the Creator Owned Escrow managed by the Trifle account. This instruction also performs checks against the Constraint Model to verify that the token being transferred out is allowed to be removed.

## Add None Constraint to Escrow Constraint Model
Create a None Constraint in the Constraint Model. Slot name and number of allowable tokens in the slot are defined at this time.

## Add Collection Constraint to Escrow Constraint Model
Create a Collection Constraint in the Constraint Model. Slot name, allowable Collection and number of allowable tokens in the slot are defined at this time.

## Add Tokens Constraint to Escrow Constraint Model
Create a Collection Constraint in the Constraint Model. Slot name, allowable tokens and number of allowable tokens in the slot are defined at this time.

## Remove Constraint from Escrow Constraint Model
Remove a Constraint from the Constraint Model by specifying which slot to clear by name.