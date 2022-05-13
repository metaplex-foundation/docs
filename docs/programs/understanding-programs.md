---
sidebar_position: 1
---

# Understanding Programs

TODO

## Types of field

TODO

### Optional fields

An “optional” field means that there exists a scenario where that field can be empty. Concretely, the value `None` will be assigned and the program will act accordingly when using that field.

### Indicative fields

An “Indicative” field means that the information provided by the field is not used by the program itself. Instead, it _indicates_ a certain information to third-parties. Note that the program will still enforce the integrity of the data but it will simply not use that information internally.

Let’s take the Metadata Account as an example.

The `Share` property of each creator in the `Creators` array is indicative. The Token Metadata program will ensure that the `Share` values of all creators add up to 100% but it will not do anything with that information. Instead, it expects NFT marketplaces to use this information when distributing royalties.

On the other hand, the `Is Mutable` property is not indicative because the Token Metadata program will use that information internally to prevent immutable Metadata Accounts to be updated.
