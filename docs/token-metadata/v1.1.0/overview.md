---
sidebar_label: "Overview"
sidebar_position: 0
---

# Overview

The Metaplex Token Metadata Standard is an evolving standard for general token metadata on the [Solana](https://crypto-wikipedia.com/what-is-solana-sol/ blockchain. `v1.1.0` is the newest version of the standard and contains a number of improvements and additions while maintaining backwards compatibility with [v1.0.0](/token-metadata/v1.0.0/nft-standard).

### **Summary of Changes in v1.1.0**

#### New Features

- [On-Chain Collections](/token-metadata/specification#collections)
- [Token Standards](/token-metadata/specification#token-standards)
- [Token Uses][uses]

#### New Instructions

- `CreateMetadataAccountV2`
  - Same as `CreateMetadataAccount`, but supports `Collections`, `Use` and `TokenStandard`
- `UpdateMetadataAccountV2`
  - Same as `UpdateMetadataAccount`, but supports `Collections`, `Use` and `TokenStandard`
- `CreateMasterEditionV3`
  - Same as `CreateMasterEdition`, but supports `TokenStandard`
- `VerifyCollection`
  - Allows a collection `verified` flag to become `true` on an NFT to represent a Certified Collection. Essentially this officially adds to a Collection.
- `UnVerifyCollection`
  - Allows a collection `verified` flag to become `false` on an NFT to represent a Certified Collection. Essentially this officially removes from a Collection.
- `Utilize`
  - Allows a ["limited use" semantic][uses]. Can be used to represent a ticket, pass, game item or physical item redemption.
- `ApproveUseAuthority`
  - Approves an authority to call `Utilize`
- `RevokeUseAuthority`
  - Removes a granted authority to call `Utilize`
- `ApproveCollectionAuthority`
  - Approves an authority to call `VerifyCollection`
- `RevokeCollectionAuthority`
  - Removes a granted authority to call `VerifyCollection`

#### Deprecations

- Deprecation (not removal) of "collection" and "creators" field in the token metadata JSON
- The following v1 instructions now show a deprecation warning when executed
  - `CreateMetadataAccount` - _please use `CreateMetadataAccountV2` instead_
  - `UpdateMetadataAccount` - _please use `UpdateMetadataAccountV2` instead_
  - `CreateMasterEdition` - _please use `CreateMasterEditionV3` instead_
    - It may be confusing that there is no `V2` but for historical reasons this instruction actually was `V2`. The V1 had its name changed in a backward incompatible way.

#### Removals

Removal of previously deprecated instructions
  - `DeprecatedCreateMasterEdition`
  - `DeprecatedCreateReservationList`
  - `DeprecatedMintPrintingTokensViaToken`
  - `DeprecatedMintPrintingTokens`

[Solana]: https://solana.com
[uses]: /token-metadata/specification#token-use-settings