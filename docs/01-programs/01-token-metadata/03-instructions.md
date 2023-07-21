---
description: "A deep dive on the instruction handlers."
---

import ProgramInstruction from '/src/program-instruction.jsx';
import idl from '/src/token-metadata/idl.js';

# Instructions

:::info
Since version v1.7.0, a new set of instructions has been introduced to support the new Programmable NFT Token Standard. These instructions can be used for any Token Standard and will eventually replace some of the instructions listed below, and are listed in the `New Unified Handlers` section.

You can read more about these new instructions in [the Programmable NFTs guide](https://github.com/metaplex-foundation/metaplex-program-library/blob/master/token-metadata/program/ProgrammableNFTGuide.md).
:::

## Legacy Instructions

### Create a Metadata account

<ProgramInstruction idl={idl} instruction="CreateMetadataAccountV3">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Create-Metadata.png)

This instruction creates and initializes a new [Metadata](./accounts#metadata) account for a given Mint account. It is required that the Mint account has been created and initialized by the Token Program before executing this instruction.

</ProgramInstruction>

### Update a Metadata account

<ProgramInstruction idl={idl} instruction="UpdateMetadataAccountV2">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Update-Metadata.png)

This instruction enables us to update parts of the Metadata account. Note that some fields have constraints limiting how they can be updated. For instance, once the `Is Mutable` field is set to `False`, it cannot be changed back to `True`.

</ProgramInstruction>

### Burn a NFT

<ProgramInstruction idl={idl} instruction="BurnNft">

This instruction enables the owner of the NFT to completely burn it:

- burning the SPL token and closing the token account
- closing the metadata and edition accounts
- giving the owner the reclaimed funds from closing these accounts

This handler checks if the NFT is a member of a verified collection, and if it is, requires the collection metadata account be passed in so the size can be decremented.

This handler will not close metadata and edition accounts where the token has already been burned and the mint has a supply of 0. At that point there is no official "owner" of the NFT.

</ProgramInstruction>

### Burn an Edition NFT

<ProgramInstruction idl={idl} instruction="BurnEditionNft">

This instruction enables the owner of a Print Edition NFT to completely burn it:

- burning the SPL token and closing the token account
- closing the metadata and edition accounts
- giving the owner the reclaimed funds from closing these accounts

This handler checks if the NFT is a Print Edition and not a Master edition, and decrements the Master Edition supply fields after burning the NFT.

The Master Edition `supply` is decremented every time a Print Edition is burned. If the owner of the Master Edition is not the same as the owner of the Print Edition, the `max_supply` is also decremented.

Print Editions burned by the owner ("the creator") of the Master Edition can be reminted, but print editions burned by other owners ("users") cannot be reminted.

This handler will not close metadata and edition accounts where the token has already been burned and the mint has a supply of 0. At that point there is no official "owner" of the NFT.

</ProgramInstruction>

### Indicate the primary sale has happened

<ProgramInstruction idl={idl} instruction="UpdatePrimarySaleHappenedViaToken">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Update-Primary-Sale-Flag.png)

This instruction flips the `Primary Sale Happened` flag to `True`, indicating that the first sale has happened. Note that this field is [indicative](/programs/#indicative-fields) and is typically used by marketplaces to calculate royalties.

</ProgramInstruction>

### Verify a creator

<ProgramInstruction idl={idl} instruction="SignMetadata">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Verify-Creators.png)

This instruction verifies one creator on the Metadata account. As long as the provided `Creator` account signs the transaction, the `Verified` boolean will be set to `True` on the appropriate creator of the `Creators` array.

</ProgramInstruction>

### Unverify a creator

<ProgramInstruction idl={idl} instruction="RemoveCreatorVerification">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Unverify-Creators.png)

This instruction unverifies one creator on the Metadata account. As long as the provided `Creator` account signs the transaction, the `Verified` boolean will be set to `False` on the appropriate creator of the `Creators` array.

</ProgramInstruction>

### Create a Master Edition account

<ProgramInstruction idl={idl} instruction="CreateMasterEditionV3">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Create-Master-Edition.png)

This instruction creates and initializes a new [Master Edition](./accounts#master-edition) account for a given Mint account. It requires the following conditions to be met:

- The Mint account has been created and initialized by the Token Program.
- The Mint account has zero decimals.
- The Mint account has a supply of exactly 1 token.

If these conditions are met, **it will transfer the Mint Authority and the Freeze Authority from the Mint account** to the Master Edition PDA ([Check the FAQ to understand why](./faq#why-are-the-mint-and-freeze-authorities-transferred-to-the-edition-pdaO)).

</ProgramInstruction>

### Print a new Edition from a Master Edition

#### Via owning the token

<ProgramInstruction idl={idl} instruction="MintNewEditionFromMasterEditionViaToken">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Mint-New-Edition.png)

Given a Masted Edition, this instruction creates a new Edition derived from a new Mint account.

It requires the owner of the Master Edition's Token account to sign the transaction, to prove they are allowed to print new editions from it.

It requires the same conditions as the Master Edition account regarding the Mint account, and it will also **transfer the Mint Authority and the Freeze Authority from the Mint account** to the new Edition PDA ([Check the FAQ to understand why](./faq#why-are-the-mint-and-freeze-authorities-transferred-to-the-edition-pda)).

</ProgramInstruction>

#### Via a Vault proxy

<ProgramInstruction idl={idl} instruction="MintNewEditionFromMasterEditionViaVaultProxy">

This instruction is very similar to the one above, but it uses a Vault proxy instead of a Token account to prove we are allowed to print new editions from the given Master Edition.

It requires the same conditions as the Master Edition account regarding the Mint account, and it will also **transfer the Mint Authority and the Freeze Authority from the Mint account** to the new Edition PDA ([Check the FAQ to understand why](./faq#why-are-the-mint-and-freeze-authorities-transferred-to-the-edition-pda)).

</ProgramInstruction>

### Verify a collection item

<ProgramInstruction idl={idl} instruction="VerifyCollection">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Verify-Collection.png)

This instruction verifies the collection of a Metadata account for unsized parent NFTs, by setting the `Verified` boolean to `True` on the `Collection` field. Calling it on a collection whose parent NFT has a size field will throw an error.

Clients should detect if a NFT is part of a sized collection or not and call the appropriate handler for the user to abstract away this detail.

</ProgramInstruction>

### Verify a sized collection item

<ProgramInstruction idl={idl} instruction="VerifySizedCollectionItem">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Verify-Sized-Collection.png)

This instruction verifies the collection of a Metadata account, by setting the `Verified` boolean to `True` on the `Collection` field, and increments the size field of the parent NFT. Calling it on a collection whose parent NFT does not have a size field will throw an error.

Clients should detect if a NFT is part of a sized collection or not and call the appropriate handler for the user to abstract away this detail.

</ProgramInstruction>

### Unverify a collection item

<ProgramInstruction idl={idl} instruction="UnverifyCollection">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Unverify-Collection.png)

This instruction unverifies the collection of a Metadata account for unsized parent NFTs, by setting the `Verified` boolean to `False` on the `Collection` field. Calling it on a collection whose parent NFT has a size field will throw an error.

Clients should detect if a NFT is part of a sized collection or not and call the appropriate handler for the user to abstract away this detail.

</ProgramInstruction>

### Unverify a sized collection item

<ProgramInstruction idl={idl} instruction="UnverifySizedCollectionItem">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Unverify-Sized-Collection.png)

This instruction unverifies the collection of a Metadata account, by setting the `Verified` boolean to `False` on the `Collection` field, and increments the size field of the parent NFT. Calling it on a collection whose parent NFT does not have a size field will throw an error.

Clients should detect if a NFT is part of a sized collection or not and call the appropriate handler for the user to abstract away this detail.

</ProgramInstruction>

### Set and verify the collection

<ProgramInstruction idl={idl} instruction="SetAndVerifyCollection">

This instruction updates the `Collection` field of a Metadata account using the provided `Collection Mint` account as long as its `Collection Authority` signs the transaction and the parent NFT does not have the collection details field populated (unsized).

Clients should detect if a NFT is part of a sized collection or not and call the appropriate handler for the user to abstract away this detail.

</ProgramInstruction>

### Set and verify a sized collection item

<ProgramInstruction idl={idl} instruction="SetAndVerifySizedCollectionItem">

This instruction updates the `Collection` field of a Metadata account for sized collections using the provided `Collection Mint` account as long as its `Collection Authority` signs the transaction and the parent NFT has the collection details field populated (sized).

Clients should detect if a NFT is part of a sized collection or not and call the appropriate handler for the user to abstract away this detail.

</ProgramInstruction>

### Approve a new Collection Authority

<ProgramInstruction idl={idl} instruction="ApproveCollectionAuthority">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Approve-Collection-Authority.png)

This instruction allows the provided `New Collection Authority` account to update the `Collection` field of a Metadata account.

The program keeps track of all the collection authorities that have been approved using [Collection Authority Record](./accounts#collection-authority-record) PDAs.

</ProgramInstruction>

### Revoke an existing Collection Authority

<ProgramInstruction idl={idl} instruction="RevokeCollectionAuthority">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Revoke-Collection-Authority.png)

This instruction revokes an existing collection authority, meaning they will no longer be able to update the `Collection` field of the Metadata account associated with that Mint account.

It does this by deleting the provided `Collection Authority Record` PDA.

</ProgramInstruction>

### Reduce the number of uses

<ProgramInstruction idl={idl} instruction="Utilize">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Utilize.png)

This instruction reduces the number of uses of a Metadata account.

This can either be done by the owner of the NFT or by an approved `Use Authority`.

</ProgramInstruction>

### Approve a new Use Authority

<ProgramInstruction idl={idl} instruction="ApproveUseAuthority">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Approve-Use-Authority.png)

This instruction allows the provided `User` account to utilize a Metadata account.

The program keeps track of all the use authorities that have been approved via [Use Authority Record](./accounts#use-authority-record) PDAs.

</ProgramInstruction>

### Revoke an existing Use Authority

<ProgramInstruction idl={idl} instruction="RevokeUseAuthority">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Revoke-Use-Authority.png)

This instruction revokes an existing use authority, meaning they will no longer be able to reduce the uses of the Metadata account associated with that Mint account.

It does this by deleting the provided `Use Authority Record` PDA.

</ProgramInstruction>

### Freeze the token account as a delegate

<ProgramInstruction idl={idl} instruction="FreezeDelegatedAccount">

This instruction freezes a Token account but only if you are the Delegate Authority of the Token account.

Because Mint Authority and Freeze Authority of NFTs are transferred to the Master Edition / Edition PDA, this instruction is the only way for a delegate to prevent the owner of an NFT to transfer it.

This enables a variety of use-cases such as preventing someone to sell its NFT whilst being listed in an escrowless marketplace.

Here's a small guide on [how to freeze a Token account using this instruction](https://github.com/metaplex-foundation/metaplex-program-library/issues/470#issuecomment-1132700105).

</ProgramInstruction>

### Thaw the token account as a delegate

<ProgramInstruction idl={idl} instruction="ThawDelegatedAccount">

This instruction reverts the instruction above by unfreezing a Token account, only if you are the Delegate Authority of the Token account.

</ProgramInstruction>

### Add padding to Metadata account fields

<ProgramInstruction idl={idl} instruction="PuffMetadata">

This instruction adds padding to the `Name`, `Symbol` and `URI` strings of the provided Metadata account. As a result, these fields will have a fixed size and will be easier to filter.

Note that, this is automatically done by the Token Metadata program when creating and updating Metadata accounts. This instruction serves as a migration tool for old NFTs that do not have that padding.

</ProgramInstruction>

### Upgrade Master Edition from V1 to V2

<ProgramInstruction idl={idl} instruction="ConvertMasterEditionV1ToV2">

This instruction serves as a migration tool that upgrades a Master Edition account of an NFT from V1 to V2.

</ProgramInstruction>

### Set collection size

<ProgramInstruction idl={idl} instruction="SetCollectionSize">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Set-Collection-Size.png)

This instruction allows the update authority of a collection parent NFT to set the size of the collection **once** in order to allow existing unsized collections to be updated to track size. Once a collection is sized it can only be verified and unverified by the sized handlers and can't be changed back to unsized.

</ProgramInstruction>

### Set token standard

<ProgramInstruction idl={idl} instruction="SetTokenStandard">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Set-Token-Standard.png)

This instruction allows an update authority to pass in a metadata account with an optional edition account and then it determines what the correct TokenStandard type is and writes it to the metadata. See [Token Standard](./token-standard) for more information.

</ProgramInstruction>

## New Unified Handlers V1.7+

### Burn

<ProgramInstruction idl={idl} instruction="Burn">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Burn.png)

Burns an asset, closing associated accounts.

Supports burning the following asset types:

- `ProgrammableNonFungible`
- `NonFungible`
- `NonFungibleEdition`
- `Fungible`
- `FungibleAsset`

Parent accounts are only required for burning print editions and are the accounts for the master edition associated with the print edition. Parent edition is the master edition account, parent mint is the mint account of the master edition NFT etc.

The Token Record account is required for burning a `ProgrammableNonFungible` asset.

This handler closes the following accounts:

For `ProgrammableNonFungible` assets:

- `Metadata`, `Edition`, `Token`, `TokenRecord`

For `NonFungible` assets:

- `Metadata`, `Edition`, `Token`

For `NonFungibleEdition` assets:

- `Metadata`, `Edition`, `Token`, and the `EditionMarker`, if all prints for it are burned.

For `Fungible` and `FungibleAsset` assets:

- Only the token account, if all tokens are burned.

Mint accounts are owned by the immutable Token program and cannot be closed.

</ProgramInstruction>

### Update

<ProgramInstruction idl={idl} instruction="Update">

![](/assets/programs/token-metadata/Token-Metadata-Instruction-Update.png)

Updates the metadata of an asset.

This handler supports the following asset types:

- `ProgrammableNonFungible`
- `NonFungible`
- `NonFungibleEdition`
- `Fungible`
- `FungibleAsset`

Fields the caller wishes to update are passed in via `UpdateArgs`. Values that are set to `None` are not changed.  Any value set to `Some(...)` will have its value updated. There are properties that have three valid states, and use a "toggle" type that allows the value to be set, cleared, or remain the same.

The asset's update authority can update all user-modifiable metadata items.  Metadata delegates are only authorized to use specific subsets of the metadata.  This is enforced through the variants of `UpdateArgs`.

To maintain backwards compatibility, the asset's update authority and a Programmable Config delegate are allowed to use `UpdateArgs::V1`.  The handler will fail if the Programmable Config delegate attempts to update anything other than the `rule_set`.

All of the V2 variants of `UpdateArgs` contain only the fields authorized for that authority type, as shown in the table below.

The token holder is currently supported as an authority type that can be passed in, but will result in a "Feature not supported" error.  Lastly, token delegates are not authorized to update an asset's metadata.

| Authority type                                            | Authorized `UpdateArgs` variants                      | Authorized `UpdateArgs` fields |
| --------------------------------------------------------- | ----------------------------------------------------- | ------------------------------ |
| Asset's Update Authority                                  | `UpdateArgs::V1`*, `UpdateArgs::UpdateAuthorityV2`    | All fields for self only (includes `uses` and `collection_details`, which cannot be changed by delegates) |
| `AuthorityItem` delegate                                  | `UpdateArgs::AuthorityItemDelegateV2`                 |`new_update_authority`, `primary_sale_happened`, `is_mutable`, `token_standard` for self only |
| `DataItem` delegate                                       | `UpdateArgs::DataItemDelegateV2`                      |`data` for self only |
| `MetadataDelegateRole` delegate                           | `UpdateArgs::DataDelegateV2`                          |`data` for self and any children assets if this is a collection parent |
| `CollectionItem` delegate                                 | `UpdateArgs::CollectionItemDelegateV2`                |`collection` for self only |
| `Collection` delegate                                     | `UpdateArgs::CollectionDelegateV2`                    |`collection` for self and any children assets if this is a collection parent |
| `ProgrammableConfigItem` delegate                         | `UpdateArgs::ProgConfigItemDelegateV2`                |`rule_set` for self only |
| `ProgrammableConfig` delegate                             | `UpdateArgs::V1`*, `UpdateArgs::ProgConfigDelegateV2` |`rule_set` for self and any children assets if this is a collection parent |
| Token holder                                              | Not currently supported                               | Not applicable |
| All token delegates (`TokenDelegateRole::Transfer`, etc.) | None                                                  | Not applicable |

_*For backwards compatibility._

#### Specific limitations
- Creators and collections cannot be set to verified by this instruction if they already in the asset's metadata as unverified.  Conversely, this instruction cannot unverify creators or collections if they are already in the asset's metadata as verified.
- `primary_sale_happened` can only be switched from `False` to `True` and cannot be switched back.
- `is_mutable` can only be switched from `True` to `False` and cannot be switched back.
- If the token standard is inferred to be or already set to `Fungible` or `FungibleAsset`, the item update authority or the `MetadataDelegateRole::Authority` can freely switch the asset between those two standard types (see below for more on token standard inference).
- `collection_details` can only be used to set size on an unsized collection, and only once.  Once the collection size is set it is managed by the token-metadata program when items are added/removed from the collection using other instructions (i.e., `Verify`, `Burn`).

#### Token standard inference
If the asset's token standard is unknown (because it was created with legacy instructions that did not set it), then this handler will infer and set the appropriate standard, based on whether the asset has an edition account as the mint authority, the type of the edition account, the current supply, and decimals.

If the asset's mint authority is a master edition account, but the master edition account was not provided to the `Update` handler, the handler will detect this and fail rather than erroneously inferring the asset is a `FungibleAsset`.

#### Specifying optional accounts
- The `delegate_record` optional account is only required if using a delegate.
- The `token` optional account is required if the `RuleSet` is being changed.  This is because we do not allow for a `RuleSet` to be changed if the token currently has a delegate.  The `token` account is also needed if the authority is the owner/holder.  However, note that owner/holder authorization is not useful at present, as updates by the owner/holder are currently not supported.
- The `edition` optional account must be passed in if the token standard is currently not set and the asset is truly a `NonFungible`, or `NonFungibleEdition` asset type with mint authority set to the `edition` account already.  The `Update` handler will use the `edition` account to infer the token standard.
- Both the `authorization_rules_program` and `authorization_rules` optional accounts are required if the asset is a `ProgrammableNonFungible` and the item has a `RuleSet` stored in its metadata.

</ProgramInstruction>
