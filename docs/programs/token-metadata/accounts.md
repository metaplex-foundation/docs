---
sidebar_position: 2
---

import ProgramAccount from '../../../src/program-account.jsx';
import accounts from './accounts.js';

# Accounts

## Metadata

<ProgramAccount account={accounts.metadata}>

![Diagram showing a Metadata Account derived from a Mint Account with a list of data field under the Metadata Account that are listed on the fields table below.](./assets/Token-Metadata-Account-Metadata.png)

The Metadata Account is responsible for storing the additional data attached to tokens. As every account in the Token Metadata program, it derives from the Mint Account using a PDA.

</ProgramAccount>

## Master Edition

<ProgramAccount account={accounts.master_edition}>

![Diagram showing TODO.](./assets/Token-Metadata-Account-Master-Edition.png)

TODO

</ProgramAccount>

## Edition

<ProgramAccount account={accounts.edition}>

![Diagram showing TODO.](./assets/Token-Metadata-Account-Edition.png)

TODO

</ProgramAccount>

## Edition Marker

<ProgramAccount account={accounts.edition_marker}>

![Diagram showing TODO.](./assets/Token-Metadata-Account-Edition-Marker.png)

TODO

</ProgramAccount>

## Collection Authority Record

<ProgramAccount account={accounts.collection_authority_record}>

![Diagram showing TODO.](./assets/Token-Metadata-Account-Collection-Authority-Record.png)

TODO

</ProgramAccount>

## Use Authority Record

<ProgramAccount account={accounts.use_authority_record}>

![Diagram showing TODO.](./assets/Token-Metadata-Account-Use-Authority-Record.png)

TODO

</ProgramAccount>
