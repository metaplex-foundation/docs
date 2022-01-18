---
sidebar_label: "Overview"
sidebar_position: 0
---

# Overview

The Metaplex Token Metadata Standard is an evolving standard for general token metadata on the Solana blockchain. This is the newest version of the standard and contains a number of improvements and additions to the standard while maintaining backwards compatibility.

### **Summary of Changes from V1.1.0**

Additions:

- On-Chain Collections
- Token Standards
- Token Uses

Addition of Instructions:

- CreateMetadataAccountV2 -> Same as CreateMetadataAccount, But allows Collections and Use , also sets `TokenStandard`
- UpdateMetadataAccountV2 -> Same as UpdateMetadataAccount, But allows Collections and Use , also sets `TokenStandard`
- CreateMasterEditionV3 -> Same as CreateMasterEdition, but sets the `TokenStandard` on the NFT
- VerifyCollection -> Allows a collection `verified` flag to become true on an NFT to represent a Certified Collection. Essentially this Officially Adds to a Collection.
- UnVerifyCollection -> Allows a collection `verified` flag to become false on an NFT to represent a Certified Collection, Essentially this Officially Removes from a Collection.
- Utilize -> Allows a limited "Use" semantic. Can be used to represent a ticket, pass, game item or physical item redemption.
- ApproveUseAuthority -> Approve an authority to call `Utilize`
- RevokeUseAuthority -> Remove a granted authority to call `Utilize`
- ApproveCollectionAuthority -> Approve an authority to call `VerifyCollection`
- RevokeCollectionAuthority -> Remove a granted authority to call `VerifyCollection`

Deprecation:

- Deprecation(not removal) of "collection" and "creators" field in the token metadata JSON
- Depreciation of V1 Instructions: These will now show a deprecation warning but will work fine
- CreateMetadataAccount
- UpdateMetadataAccount
- CreateMasterEdition -> This may be confusing that there is no `V2` but for historical reasons this instruction is `V2`. The V1 had its name changed in a backward incompatible way see `DeprecatedCreateMasterEdition`

Removals:

- Removal Of Deprecated Instructions
- DeprecatedCreateMasterEdition
- DeprecatedCreateReservationList
- DeprecatedMintPrintingTokensViaToken
- DeprecatedMintPrintingTokens
