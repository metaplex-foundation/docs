---
sidebar_position: 9
---

# FAQ

### How can I filter Metadata accounts by fields located after the `creators` array using `getProgramAccounts`?

When using [the `getProgramAccounts` method from the RPC API](https://docs.solana.com/developing/clients/jsonrpc-api#getprogramaccounts), it is common to want to filter accounts by fields using `memcmp` filters.

Since the `memcmp` filter compares arrays of bytes, this approach requires us to know the data structure of the account. Additionally, it requires that data structure to be of fixed length so we can find the position of the field we're looking for, for every single account.

Unfortunately, the `creators` field of the Metadata Account is a vector that can contains between one to five creators. This means, the position of every field after it will depend on how many creators the account has.

Note that adding new fields to an account without adding breaking change requires to append optional fields to the accounts. This unfortunately means that any new features we add to the Metadata Account will be after the `creators` field and therefore will be challenging to filter via `getProgramAccounts`.

There are several ways to solve this problem.

- If every single account we are trying to filter has **the same number of creators**, then we can figure out the offset of the next field. We can do this by adding `4 + 34 * n` to the `creators` offset, where `n` is the fixed number of creators and `4` is because 4 bytes are used to store the length of the vector. This unblocks us for every field of fixed length present after the `creators` field. Unfortunately, the problem reoccurs as soon as we reach another field of variable size such as another vector or an optional field. Therefore, this solution is only valid if we know the exact length of all variable fields before the field we are trying to filter with.
- Another solution is to **crawl transactions to find the accounts we're looking for**. This approach is a bit more complex and requires us to implement a custom procedure that fits our needs. For instance, we can use `getSignaturesForAddress` to get all transactions associated with an account and then use `getTransaction` on each of them to access their transaction data before filtering the ones that matter for our use case. It is also worth considering that this approach might not be the most future-proof solution since we might end up relying on instructions that could be deprecated in favour of new ones.
- Finally, **the most robust solution is to index the data we're looking for using a [Geyser Plugin](https://docs.solana.com/developing/plugins/geyser-plugins)**. This currently requires a significant setup but we end up with a reliable data store that mirrors the data in the Solana blockchain. Not only it fixes our filtering issue but it also provides a much more convenient and performant way to access our data.

### How can I filter Metadata accounts by collection using `getProgramAccounts`?

As mentioned in the question above, filtering by fields present after the `creators` array is a challenging task because it is not a field of fixed size.

Since **the `collection` field is located after the `creators` field**, this makes filtering Metadata accounts by collection harder than it should be.

The solutions listed above apply here too but, because this is a common problem, we have written a more detailed guide on how to use transaction crawling to access Metadata accounts of a given collection: **[Get Collection Methods](https://metaplex.notion.site/Get-Collection-Methods-1ff0b118e4ce4605971df60e753a8559)**.

### Why are the mint and freeze authorities transferred to the Edition PDA?

TODO

#### Mint Authority

TODO

#### Freeze Authority

TODO

### Why does the Metadata account have both on-chain and off-chain data?

TODO
