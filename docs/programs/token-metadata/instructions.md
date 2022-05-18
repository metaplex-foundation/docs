---
sidebar_position: 4
---

import ProgramInstruction from '../../../src/program-instruction.jsx';
import idl from './idl.js';

# Instructions

## Create a Metadata account

<ProgramInstruction idl={idl} instruction="CreateMetadataAccountV2">

![](./assets/Token-Metadata-Instruction-Create-Metadata.png)

TODO

</ProgramInstruction>

## Update a Metadata account

<ProgramInstruction idl={idl} instruction="UpdateMetadataAccountV2">

![](./assets/Token-Metadata-Instruction-Update-Metadata.png)

TODO

</ProgramInstruction>

## Indicate the primary sale has happened

<ProgramInstruction idl={idl} instruction="UpdatePrimarySaleHappenedViaToken">

![](./assets/Token-Metadata-Instruction-Update-Primary-Sale-Flag.png)

TODO

</ProgramInstruction>

## Verify a creator

<ProgramInstruction idl={idl} instruction="SignMetadata">

![](./assets/Token-Metadata-Instruction-Verify-Creators.png)

TODO

</ProgramInstruction>

## Unverify a creator

<ProgramInstruction idl={idl} instruction="RemoveCreatorVerification">

![](./assets/Token-Metadata-Instruction-Verify-Creators.png)

TODO

</ProgramInstruction>

## Create a Master Edition account

<ProgramInstruction idl={idl} instruction="CreateMasterEditionV3">

![](./assets/Token-Metadata-Instruction-Create-Master-Edition.png)

TODO

</ProgramInstruction>

## Print a new Edition from a Master Edition

### Via owning the token

<ProgramInstruction idl={idl} instruction="MintNewEditionFromMasterEditionViaToken">

![](./assets/Token-Metadata-Instruction-Mint-New-Edition.png)

TODO

</ProgramInstruction>

### Via a Vault proxy

`MintNewEditionFromMasterEditionViaVaultProxy`

TODO

## Verify the collection

<ProgramInstruction idl={idl} instruction="VerifyCollection">

![](./assets/Token-Metadata-Instruction-Verify-Collection.png)

TODO

</ProgramInstruction>

## Unverify the collection

<ProgramInstruction idl={idl} instruction="UnverifyCollection">

![](./assets/Token-Metadata-Instruction-Verify-Collection.png)

TODO

</ProgramInstruction>

## Set and verify the collection

`SetAndVerifyCollection`

TODO

## Approve a new Collection Authority

<ProgramInstruction idl={idl} instruction="ApproveCollectionAuthority">

![](./assets/Token-Metadata-Instruction-Approve-Collection-Authority.png)

TODO

</ProgramInstruction>

## Revoke an existing Collection Authority

<ProgramInstruction idl={idl} instruction="RevokeCollectionAuthority">

![](./assets/Token-Metadata-Instruction-Revoke-Collection-Authority.png)

TODO

</ProgramInstruction>

## Reduce the number of uses

<ProgramInstruction idl={idl} instruction="Utilize">

![](./assets/Token-Metadata-Instruction-Utilize.png)

TODO

</ProgramInstruction>

## Approve a new Use Authority

<ProgramInstruction idl={idl} instruction="ApproveUseAuthority">

![](./assets/Token-Metadata-Instruction-Approve-Use-Authority.png)

TODO

</ProgramInstruction>

## Revoke an existing Use Authority

<ProgramInstruction idl={idl} instruction="RevokeUseAuthority">

![](./assets/Token-Metadata-Instruction-Revoke-Use-Authority.png)

TODO

</ProgramInstruction>

## Freeze the token account as a delegate

<ProgramInstruction idl={idl} instruction="FreezeDelegatedAccount">

TODO: Freezes a token account that has been fully delegated.

</ProgramInstruction>

## Thaw the token account as a delegate

<ProgramInstruction idl={idl} instruction="ThawDelegatedAccount">

TODO: Thaws a token account that has been fully delegated.

</ProgramInstruction>

## Add padding to Metadata account fields

<ProgramInstruction idl={idl} instruction="PuffMetadata">

TODO

</ProgramInstruction>

## Upgrade Master Edition from V1 to V2

<ProgramInstruction idl={idl} instruction="ConvertMasterEditionV1ToV2">

TODO

</ProgramInstruction>
