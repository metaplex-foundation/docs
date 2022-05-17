---
sidebar_position: 4
---

import ProgramInstruction from '../../../src/program-instruction.jsx';
import instructions from './instructions.js';

# Instructions

## Create a Metadata account

<ProgramInstruction instruction={instructions.CreateMetadataAccountV2}>

![](./assets/Token-Metadata-Instruction-Create-Metadata.png)

TODO

</ProgramInstruction>

## Update a Metadata account

<ProgramInstruction instruction={instructions.UpdateMetadataAccountV2}>

![](./assets/Token-Metadata-Instruction-Update-Metadata.png)

TODO

</ProgramInstruction>

## Indicate the primary sale has happened

<ProgramInstruction instruction={instructions.UpdatePrimarySaleHappenedViaToken}>

![](./assets/Token-Metadata-Instruction-Update-Primary-Sale-Flag.png)

TODO

</ProgramInstruction>

## Verify a creator

<ProgramInstruction instruction={instructions.SignMetadata}>

![](./assets/Token-Metadata-Instruction-Verify-Creators.png)

TODO

</ProgramInstruction>

## Unverify a creator

<ProgramInstruction instruction={instructions.RemoveCreatorVerification}>

![](./assets/Token-Metadata-Instruction-Verify-Creators.png)

TODO

</ProgramInstruction>

## Create a Master Edition account

<ProgramInstruction instruction={instructions.CreateMasterEditionV3}>

![](./assets/Token-Metadata-Instruction-Create-Master-Edition.png)

TODO

</ProgramInstruction>

## Print a new Edition from a Master Edition

### Via owning the token

<ProgramInstruction instruction={instructions.MintNewEditionFromMasterEditionViaToken}>

![](./assets/Token-Metadata-Instruction-Mint-New-Edition.png)

TODO

</ProgramInstruction>

### Via a Vault proxy

`MintNewEditionFromMasterEditionViaVaultProxy`

TODO

## Verify the collection

<ProgramInstruction instruction={instructions.VerifyCollection}>

![](./assets/Token-Metadata-Instruction-Verify-Collection.png)

TODO

</ProgramInstruction>

## Unverify the collection

<ProgramInstruction instruction={instructions.UnverifyCollection}>

![](./assets/Token-Metadata-Instruction-Verify-Collection.png)

TODO

</ProgramInstruction>

## Set and verify the collection

`SetAndVerifyCollection`

TODO

## Approve a new Collection Authority

<ProgramInstruction instruction={instructions.ApproveCollectionAuthority}>

![](./assets/Token-Metadata-Instruction-Approve-Collection-Authority.png)

TODO

</ProgramInstruction>

## Revoke an existing Collection Authority

<ProgramInstruction instruction={instructions.RevokeCollectionAuthority}>

![](./assets/Token-Metadata-Instruction-Revoke-Collection-Authority.png)

TODO

</ProgramInstruction>

## Reduce the number of uses

<ProgramInstruction instruction={instructions.Utilize}>

![](./assets/Token-Metadata-Instruction-Utilize.png)

TODO

</ProgramInstruction>

## Approve a new Use Authority

<ProgramInstruction instruction={instructions.ApproveUseAuthority}>

![](./assets/Token-Metadata-Instruction-Approve-Use-Authority.png)

TODO

</ProgramInstruction>

## Revoke an existing Use Authority

<ProgramInstruction instruction={instructions.RevokeUseAuthority}>

![](./assets/Token-Metadata-Instruction-Revoke-Use-Authority.png)

TODO

</ProgramInstruction>

## Freeze the token account as a delegate

<ProgramInstruction instruction={instructions.FreezeDelegatedAccount}>

TODO: Freezes a token account that has been fully delegated.

</ProgramInstruction>

## Thaw the token account as a delegate

<ProgramInstruction instruction={instructions.ThawDelegatedAccount}>

TODO: Thaws a token account that has been fully delegated.

</ProgramInstruction>

## Add padding to Metadata account fields

<ProgramInstruction instruction={instructions.PuffMetadata}>

TODO

</ProgramInstruction>

## Upgrade Master Edition from V1 to V2

<ProgramInstruction instruction={instructions.ConvertMasterEditionV1ToV2}>

TODO

</ProgramInstruction>
