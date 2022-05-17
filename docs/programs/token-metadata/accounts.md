---
sidebar_position: 3
---

import ProgramAccount from '../../../src/program-account.jsx';
import idl from './idl.js';

# Accounts

## Metadata

<ProgramAccount idl={idl} account="Metadata">

![Diagram showing a Metadata Account derived from a Mint Account with a list of data field under the Metadata Account that are listed on the fields table below.](./assets/Token-Metadata-Account-Metadata.png)

The Metadata Account is responsible **for storing additional data attached to tokens**. As every account in the Token Metadata program, it derives from the Mint Account of the token using a PDA.

It stores a variety of information for different use-cases and, thus, the reader might benefit from reading the "fields" table below to learn more about them. Additionally, dedicated feature pages have been written to provide more documentation on what can be done with these fields. Their description will contain a link to the appropriate page when available.

One particular field to notice is the `Uri` field that points to an off-chain JSON file which, itself, contains more data. [That data is standardized](TODO) so applications and marketplaces can reliably find information on a given token. If you're wondering why the Metadata account provides two data stores — one off-chain and one on-chain — you might want to [take a look at the FAQ here](TODO).

</ProgramAccount>
