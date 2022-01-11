---
sidebar_label: "Overview"
sidebar_position: 0
---
# Overview

The Metaplex Token Medtata Standard is an evolving standard for general token metadata on the Solana blockchain. This is the newest version of the standard and contains a number of improvements and additions to the standard while maintaining backwards compatibility.

### **Summary of Changes from V1.0.0**

Additions:

- On-Chain Collections
- Token Standards
- Token Uses

Addition of Instructions: To support Collections

- CreateMetadataV2Account
- UpdateMetadataV2Account
- UpgradeMetadata

Deprecation:

- Deprecation of "collection" field in the token metadata JSON
- Depreciation of V1 Instructions: These will now show a deprecation warning but will work fine
- CreateMetadataAccount
- UpdateMetadataAccount

Removals:

- Removal Of Deprecated Instructions
- DeprecatedCreateMasterEdition
- DeprecatedCreateReservationList
- DeprecatedMintPrintingTokensViaToken
- DeprecatedMintPrintingTokens
