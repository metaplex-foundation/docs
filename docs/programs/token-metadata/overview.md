---
sidebar_position: 1
---

import ProgramAccount from '../../../src/program-account.jsx';

# Overview

The Token Metadata program is one of the most important program when dealing with NFTs on the Solana blockchain. Its main goal is to **attach additional data to Tokens** handled by [Solana’s Token program](https://spl.solana.com/token).

It achieves this using [Program Derived Addresses](https://docs.solana.com/developing/programming-model/calling-between-programs#program-derived-addresses) (PDAs) that are _derived_ from the address of Mint Accounts. If you’re not familiar with Solana’s Token program, _Mint Accounts_ are responsible for storing the information of a Token in Solana and _Token Accounts_ store the relationship between a wallet and a Mint Account.

![A simple diagram showing a user icon followed by three blue rectangles in a straight line. From left to right, the rectangles are labeled: “Wallet Account”, “Token Account” and “Mint Account”. The user icon points to the “Wallet Account”, the “Wallet Account” points to the “Token Account” and the “Mint Account” points to the “Token Account”. Under the “Wallet Account” reads “Someone’s wallet”. Under the “Token Account” reads “Stores the amount of tokens owned by the wallet”. Under the “Mint Account” reads “Stores information about the token itself. E.g. its current supply and its authorities.”.](./assets/Token-Metadata-Intro-1.png)

The account holding this extra data is called the **Metadata Account** and is derived from the Mint Account.

![Same as previous diagram but with a new “Metadata Account” brown rectangle and a new “PDA” brown pill. The “Mint Account” points upwards to the “PDA” pill which also points upwards to the “Metadata Account” rectangle. Above “Metadata Account” reads “Store additional data on the token such as its name, its symbol, its creators, etc.”.](./assets/Token-Metadata-Intro-2.png)

By attaching more data to the Mint Account, **the Token Metadata program is able to make Digital Assets** of regular on-chain Tokens.

For instance, say a Mint Account has the following properties:

- It has **a supply of 1**, meaning only one token is in circulation.
- It has **zero decimals**, meaning there cannot be such a thing as 0.5 tokens.
- It has **no mint authority**, meaning no one can ever mint additional tokens.

What we end up with is a token that cannot be traded with something of the same kind, which is the definition of a Non-Fungible Token (NFT). As such, the goal of the “Metadata Account” is to provide the actual data of that NFT in order to make it a useful Digital Asset.

![Same as previous diagram but without the subtexts next to the Rectangles. Instead, we add small white rectangles under the blue rectangles to represent their data. Under the “Token Account” rectangle, we have the following data: “Amount = 1”. Under the “Mint Account” rectangle, we have the following data: “Mint Authority = None”, “Supply = 1” and “Decimals = 0”.](./assets/Token-Metadata-Intro-3.png)

Note that a Fungible Token can also benefit from the extra data provided by the “Metadata Account”. In this situation, the standard for that extra data will vary slightly.

There is a lot more that you can do with the Token Metadata program but this introduction provides a good overview of its main purpose. In the following pages, we will go through additional features offered by this program but first, let’s go through the accounts and instructions it provides.

## Accounts

### Metadata

<ProgramAccount>

![Diagram showing a Metadata Account derived from a Mint Account with a list of data field under the Metadata Account that we are about to list below.](./assets/Token-Metadata-Account-Metadata.png)

The Metadata Account is responsible for storing the additional data attached to tokens. As every account in the Token Metadata program, it derives from the Mint Account using a PDA. Let’s take a look at all the different fields it contains.

</ProgramAccount>

### Master Edition

<!-- ![](Token%20Metadata%20-%205@2x.png) -->

TODO

### Edition

<!-- ![](Token%20Metadata%20-%206@2x.png) -->

TODO

### Edition Marker

<!-- ![](Token%20Metadata%20-%20Account%20-%20Edition%20Marker@2x.png) -->

TODO

### Collection Authority Record

<!-- ![](Token%20Metadata%20-%20Account%20-%20Collection%20Authority%20Record@2x.png) -->

TODO

### Use Authority Record

<!-- ![](Token%20Metadata%20-%20Account%20-%20Use%20Authority%20Record@2x.png) -->

TODO

## Instructions

### CreateMetadataAccountV2

<!-- ![](Token%20Metadata%20-%20Instruction%20-%20Create%20Metadata@2x.png) -->

TODO

### UpdateMetadataAccountV2

<!-- ![](Token%20Metadata%20-%20Instruction%20-%20Update%20Metadata@2x.png) -->

TODO

### UpdatePrimarySaleHappenedViaToken

<!-- ![](Token%20Metadata%20-%20Instruction%20-%20Update%20Primary%20Sale%20Flag@2x.png) -->

TODO

### SignMetadata and RemoveCreatorVerification

<!-- ![](<Token%20Metadata%20-%20Instruction%20-%20(Un)verify%20Creators@2x.png>) -->

TODO

### CreateMasterEditionV3

<!-- ![](Token%20Metadata%20-%20Instruction%20-%20Create%20Master%20Edition@2x.png) -->

TODO

### MintNewEditionFromMasterEditionViaToken

<!-- ![](Token%20Metadata%20-%20Instruction%20-%20Mint%20New%20Edition@2x.png) -->

TODO

### VerifyCollection and UnverifyCollection

<!-- ![](<Token%20Metadata%20-%20Instruction%20-%20(Un)verify%20Collection@2x.png>) -->

TODO

### ApproveCollectionAuthority

<!-- ![](Token%20Metadata%20-%20Instruction%20-%20Approve%20Collection%20Authority@2x.png) -->

TODO

### RevokeCollectionAuthority

<!-- ![](Token%20Metadata%20-%20Instruction%20-%20Revoke%20Collection%20Authority@2x.png) -->

TODO

### Utilize

<!-- ![](Token%20Metadata%20-%20Instruction%20-%20Utilize@2x.png) -->

TODO

### ApproveUseAuthority

<!-- ![](Token%20Metadata%20-%20Instruction%20-%20Approve%20Use%20Authority@2x.png) -->

TODO

### RevokeUseAuthority

<!-- ![](Token%20Metadata%20-%20Instruction%20-%20Revoke%20Use%20Authority@2x.png) -->

TODO

### Others

- MintNewEditionFromMasterEditionViaVaultProxy
- SetAndVerifyCollection
- ConvertMasterEditionV1ToV2
- PuffMetadata
- FreezeDelegatedAccount: Freezes a token account that has been fully delegated.
- ThawDelegatedAccount: Thaws a token account that has been fully delegated.

TODO

## Examples

TODO NFT / SFT Mention article here.