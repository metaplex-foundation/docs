# Upload Methods

There are currently four upload (storage) methods available in Sugar: `"aws"`, `"bundlr"`, `"nft_storage"` and `"shdw"`.

:::info
The upload methods in Sugar are designed using a Rust trait to make it easier for new methods to be added, therefore Sugar can support a wide-variety of upload methods&mdash;check the [**Bring your own uploader**](developer/bring-your-own-uploader) section in the Developer Guide.
:::

## Amazon (AWS) S3

> Configuration settings:
>
> - `uploadMethod="aws"`
> - `awsS3Bucket="<BUCKET NAME>"`

Uploads files to Amazon S3 storage. When using the `"aws"`, you need to specify the bucket name `"awsS3Bucket"` in the configuration file and set up the credentials in your system. In most cases, this will involve creating a file `~/.aws/credentials` with the following properties:

```bash
[default]
aws_access_key_id=<ACCESS KEY ID>
aws_secret_access_key=<SECRET ACCESS KEY>
region=<REGION>
```

It is also important to set up the ACL permission of the bucket correctly to enable `"public-read"` and apply Cross-Origin Resource Sharing (CORS) rules to enable content access requested from a different origin (necessary to enable wallets and blockchain explorers load the metadata/media files). More information about these configurations can be found at:
- [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html)
- [CORS configuration](https://aws.amazon.com/premiumsupport/knowledge-center/s3-configure-cors/)

## Bundlr

> Configuration settings:
>
> - `uploadMethod="bundlr"`
>
> **Note:** Files are only stored for 7 days when uploaded with Bundlr on `devnet`.

Uploads to [Arweave](https://www.arweave.org/) using [Bundlr Network](https://bundlr.network/) and payments are made in `SOL`.

## NFT.Storage

> Configuration settings:
>
> - `uploadMethod="nft_storage"`
> - `nftStorageAuthToken="<AUTH TOKEN>"`

[NFT.Storage](https://nft.storage) is a popular free service that uploads data on the public IPFS network. You will need to register an account to obtain an API key (token), which need to be specified by `"nftStorageAuthToken"` in the configuration file.

## Shadow Drive

> Configuration settings:
>
> - `uploadMethod="shdw"`
> - `shdwStorageAccount="<STORAGE PUBKEY>"`

[Shadow Drive](https://shdw.genesysgo.com/shadow-infrastructure-overview/shadow-drive-overview) is a decentralized storage network built specifically for the Solana blockchain. In order to upload data to the Shadow Drive you will need to first create an storage account. This can be done using the [Shadow Drive CLI](https://shdw.genesysgo.com/using-shadow-drive/the-shadow-drive-platform/shadow-drive-cli). After creating an storage account, specify its pubkey address in the configuration file using the property `"shdwStorageAccount"`.

:::info
The Shadow Drive upload method is only available on `mainnet`.
:::