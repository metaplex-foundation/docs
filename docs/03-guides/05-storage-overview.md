# NFT Storage Overview

NFTs are meant to live forever, being bought, sold, held and enjoyed for the
rest of time. As such, the storage on which your assets are written should be
_permanent_.  NFTs created through Metaplex are written to scalable, durable,
permanent, censorship resistant storage by default, but there are other options
available too. Let's take a look.

## Storage options

### Arweave

:::tip

Arweave is the default storage option

:::

[Arweave][] is a decentralized, trust-minimized, censorship-resistant data
storage network designed to retain data permanently, making it a great fit for
NFTs.  To cover the cost of storing your media forever, storage and mining fees
are paid at the time of upload and distributed to storage providers
participating in the network.

#### Arweave storage fees

Storage fees are based on the total size of the files you upload to the network during NFT creation. Each NFT consists of three files:

1. The asset itself (image, video, audio, etc)
1. The accompanying metadata file (attributes etc.)
1. A generated [manifest which creates a logical grouping][arweave path manifest] or relationship between your files

The cumulative size of these files (in bytes) is submitted to the [Arweave
storage cost estimation service][arweave price service] which returns the real
time estimated fee for storage, priced in [winstons][]. We then convert the
winstons to SOL for payment.

##### Arweave storage calculator

Here's a calculator to help you estimate your NFT creation costs:

import ArweaveCostCalc from '../../src/arweave-cost-calc.jsx'

<ArweaveCostCalc />

### NFT.Storage

[NFT.Storage](https://nft.storage) is a free service that provides long-term NFT data storage on the decentralized [Filecoin](https://filecoin.io) network with fast retrieval through [IPFS][IPFS].

NFT.Storage currently supports files up to 31 Gib and does not charge for storage.

#### Using NFT.Storage

NFT.Storage is currently supported in [Sugar][sugar]. Please see the [configuration guide][cmv2 config guide] for details about the configuration settings to use.

Note that when using the `nft-storage` configuration setting, you can optionally also set an `nftStorageKey` to an NFT.Storage API token. Setting an `nftStorageKey` will allow you to view uploads in your NFT.Storage account's file listing. 

If you do not provide an API key, the Solana keypair used for the `upload` command will be used to sign an upload request message, which is used to authenticate the upload with NFT.Storage. This allows you to upload without an NFT.Storage account, but you will not be able to manage the upload using the NFT.Storage service afterwards.

For more information about using NFT.Storage with CandyMachine, see the [NFT.Storage documentation on Metaplex][nft.storage metaplex doc]

### IPFS

The [InterPlantetary File System][IPFS], or IPFS, is a decentralized,
trust-minimized, censorship-resistant, peer-to-peer hypermedia protocol designed
to preserve and grow humanity's knowledge by making the web upgradeable,
resilient, and more open. It's P2P design allows for file deduplication and
other efficiencies. IPFS is not designed to store files permanently and so is
therefore not the default storage option.

#### Using IPFS

IPFS storage is currently only supported within the Candy Machine `upload` command.

Please run `ts-node candy-machine-v2-cli.ts upload --help` from the `js/packages/cli/src` directory for details about the command line flags you'll need to set.

#### IPFS storage fees

Please visit https://infura.io/docs/ipfs for details.

### AWS S3

[Amazon Web Services S3][S3] is a global, affordable but centralized storage
provider. Because S3 is centralized, NFTs stored there are not censorship
resistant. If AWS receives legal threats, decides they no longer support NFTs,
goes out of business, or you stop making payments, they can remove your assets
from their service, potentially leaving holders of your NFTs without their
media. For NFTs which are meant to be censorship resistant and permanent, we do
not recommend using S3. However, it is an affordable option so depending on your
needs may be what you need.

#### Using AWS S3

AWS S3 storage is currently only supported within the CandyMachine `upload` command.

Please run `ts-node candy-machine-v2-cli.ts upload --help` from the `js/packages/cli/src` directory for details about the command line flags you'll need to set.

If the console logs a successful upload, but no assets are actually uploaded to your bucket you must configure your [ACL settings](https://docs.aws.amazon.com/AmazonS3/latest/userguide/managing-acls.html) to enable it. 

#### S3 storage fees

Please visit https://aws.amazon.com/s3/pricing/ for details.

### Looking for another storage option?

Please open a Pull Request on the [metaplex-foundation/metaplex][repo] repository
and then add documentation to [this
page](https://github.com/metaplex-foundation/docs/blob/main/docs/overviews/storage_overview.md).


[Arweave]: https://arweave.org
[arweave price service]: https://node1.bundlr.network/price/0
[repo]: https://github.com/metaplex-foundation/metaplex
[IPFS]: https://ipfs.io/
[winstons]: https://docs.arweave.org/developers/server/http-api#ar-and-winston
[S3]: https://aws.amazon.com/s3/
[arweave path manifest]: https://github.com/ArweaveTeam/arweave/wiki/Path-Manifests
[cmv2 config guide]: /guides/archived/candy-machine-v2/configuration
[nft.storage metaplex doc]: https://nft.storage/docs/how-to/mint-solana
[sugar]: /tools/sugar/introduction
