---
description: "How the Uses field works."
---


# Using NFTs

## Introduction

To better support gaming applications, the Token Metadata program supports the concept of "token usage". That means, any token — fungible or not — can be loaded with a certain amount of uses that will decrease over time until it has no uses left.

:::info

This feature has been added to the Token Metadata program in [version 1.1](./changelog/v1.1).

:::

## The Uses field

To support this feature, the Metadata account contains an optional `Uses` field. When this field is set to `None`, it means the token is not leveraging this feature. When this field is set, it contains further nested fields that define the token's usage. Namely, it contains the following fields:

- `Use Method`: This field is an enum that defines a "token usage" strategy. It can be one of the following:
  - `Burn`: This strategy allows a token to be used once and then burned forever.
  - `Single`: This strategy allows a single use but does not burn the token.
  - `Multiple`: This strategy allows a pre-defined amount of uses of the token.
- `Remaining`: This field holds the number of uses remaining for the token.
- `Total`: This field holds the number of uses initially available for the token.

Once the `Uses` field is set up, we may "use the token" by calling the following instruction:

- [Reduce the number of uses](./instructions#reduce-the-number-of-uses)

## Delegating the Use Authority

By default, only the owner of the NFT is allowed to reduce the number of uses of a token. However, it is possible to delegate this responsibility to other trusted authorities. These delegated "Use Authorities" can then reduce the number of uses via the instruction mentioned in the previous section.

The following instructions enable us to approve and revoke a Use Authority:

- [Approve a new Use Authority](./instructions#approve-a-new-use-authority)
- [Revoke an existing Use Authority](./instructions#revoke-an-existing-use-authority)

Note that this is very similar to the [Collection Authority system](./certified-collections#delegating-the-collection-authority) but the party who can approve and revoke authorities is the current token holder of the NFT, as opposed to the Update Authority for collections.
