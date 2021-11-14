---
sidebar_label: "3. Upload NFT Assets"
---

# Upload NFT Assets

This section assumes you have completed the [prerequisites identified in the introduction](introduction#prerequisites). It also works with the [example collection](prepare-assets#example-two-item-collection) defined in the previous section, downloadable as [simple-collection.zip](./simple-collection.zip).

<!-- 1. Download and unzip [simple-collection.zip](./simple-collection.zip)
1. `cd` into the directory that creates
1. run upload commands -->

The commands in this section are long and use lots of arguments and flags. To avoid challenges this creates, it's helpful to keep the help documentation for this step handy. To view the help documentation, run:

command: 
```
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/candy-machine-cli.ts help upload
```

expected output:
```
Usage: candy-machine-cli upload [options] <directory>

Arguments:
  directory                          Directory containing images named from 0-n

Options:
  -e, --env <string>                 Solana cluster env name (default:
                                     "devnet")
  -k, --keypair <path>               Solana wallet location (default:
                                     "--keypair not provided")
  -l, --log-level <string>           log level
  -c, --cache-name <string>          Cache file name (default: "temp")
  -n, --number <number>              Number of images to upload
  -s, --storage <string>             Database to use for storage (arweave,
                                     ipfs, aws) (default: "arweave")
  --ipfs-infura-project-id <string>  Infura IPFS project id (required if using
                                     IPFS)
  --ipfs-infura-secret <string>      Infura IPFS scret key (required if using
                                     IPFS)
  --aws-s3-bucket <string>           (existing) AWS S3 Bucket name (required if
                                     using aws)
  --no-retain-authority              Do not retain authority to update metadata
  --no-mutable                       Metadata will not be editable
  -h, --help                         display help for command
```

## Example: Default Arweave Upload

In this example, we will be uploading files from our "assets" folder onto the devnet using Arweave as the storage function.

command:
```
ts-node ~/metaplex/js/packages/cli/src/candy-machine-cli.ts upload ./assets --env devnet --keypair ~/.config/solana/devnet.json
```

expected output:
```
Beginning the upload for 1 (png+json) pairs
started at: 1634804679287
wallet public key: FGq8YtRMq441ceVV155WzUMW6maKq3ARYi7n12MPLB53
Processing file: 0
initializing config
initialized config for a candy machine with publickey: CmYWoxZLBv9GoabpFqyNv1pv3CwKdCLn85cPRo4hHNbJ
Writing indices 0-0
Done. Successful = true.
ended at: 2021-10-21T08:25:13.179Z. time taken: 00:00:33
```
