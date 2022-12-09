---
description: "A comprehensive look at the account structs."
---

# Accounts

## Escrow Constraint Model
A Constraint Model is a set of restrictions and requirements that can be evaluated to allow for transmission into and out of the Trifle account. On transfer, the contract will check against the constraint model to determine what checks need to be performed against the token being transferred to or from the TOE. One Constraint Model can serve many different NFTs and their Trifle accounts.

The Constraint Model can be viewed as a set of Constraints, defined as slots. Each slot consists of a Slot Name, the type of constraint (None/Collection/TokenSet), and the number of allowable tokens in the slot. Constraints are stored as a `HashMap` with the Key being the Slot Name and the Value being the Constraint Type and Token Limit.

## Trifle
The Trifle account is what tracks tokens owned by the COE on-chain. It also links to the Constraint Model being used. The Trifle account manages tokens as an internal HashMap which reflects the slot semantics of the Constraint Model.