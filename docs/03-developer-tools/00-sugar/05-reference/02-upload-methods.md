# Upload Methods

There are currently four upload (storage) methods available in Sugar: `"aws"`, `"bundlr"`, `"nft_storage"` and `"shdw"`.

:::info

The upload methods in Sugar are designed using a Rust trait to make it easier for new methods to be added, therefore Sugar can support a wide-variety of upload methods&mdash;check the [**Bring your own uploader**](../developer/bring-your-own-uploader) section in the Developer Guide.

:::

## Amazon (AWS) S3

Configuration settings:

```json
{
  . . .
  "uploadMethod": "aws",
  . . .
  "awsConfig":
  {
    "bucket": "<BUCKET_NAME>",
    "profile": "<PROFILE_NAME>",
    "directory": "<DIRECTORY_NAME>",
    "domain": "<DOMAIN_NAME>"
  },
  . . .
}
```

This method uploads files to Amazon S3 storage. When using the `"aws"`, you need to specify the bucket, profile, and directory values in the configuration file under "awsConfig" and set up the credentials in your system. In most cases, this will involve creating a file `~/.aws/credentials` with the following properties:

```bash
[default]
aws_access_key_id=<ACCESS KEY ID>
aws_secret_access_key=<SECRET ACCESS KEY>
region=<REGION>
```

It is also important to set up the ACL permission of the bucket correctly to enable `"public-read"` and apply Cross-Origin Resource Sharing (CORS) rules to enable content access requested from a different origin (necessary to enable wallets and blockchain explorers load the metadata/media files). More information about these configurations can be found at:

- [Bucket policy examples](https://docs.aws.amazon.com/AmazonS3/latest/userguide/example-bucket-policies.html)
- [CORS configuration](https://aws.amazon.com/premiumsupport/knowledge-center/s3-configure-cors/)

The `profile` value allows you to specify which profile to read from your credentials file. The `directory` value is the name of the directory in the bucket where the files will be uploaded, allowing you to have multiple candy machine or collections in a single bucket separated by different directories. Leaving this as an empty string will upload the files to the root of the bucket. The `domain` (optional) allows you to specify a custom domain to serve the data from AWS &mdash; e.g., using the `domain` as `https://mydomain.com` will create links to files in the format `https://mydomain.com/0.json`. If you do not specify a `domain`, the default AWS S3 domain will be used (`https://<BUCKET_NAME>.s3.amazonaws.com`).

## Bundlr

Configuration settings:

```json
{
  . . .
  "uploadMethod": "bundlr",
  . . .
}
```

> **Note:** Files are only stored for 7 days when uploaded with Bundlr on `devnet`.

Uploads to [Arweave](https://www.arweave.org/) using [Bundlr Network](https://bundlr.network/) and payments are made in `SOL`.

## Pinata

Configuration settings:

```json
{
  . . .
  "uploadMethod": "pinata",
  . . .
  "pinataConfig":
  {
    "jwt": "<JWT>",
    "apiGateway": "<URL>",
    "contentGateway": "<URL>",
    "parallelLimit": "<NUMBER>"
  },
  . . .
}
```

This method uploads files to Pinata storage. When using the `"pinata"`, you need to specify the `jwt`, `apiGateway`, and `contentGateway` values in the configuration file under "pinataConfig":
- `jwt`: JWT authentication token
- `apiGateway`: URL to connect to Pinata API (use `https://api.pinata.cloud` for the public API endpoint)
- `contentGateway`: URL to use as the base for creating the asset links (use `https://gateway.pinata.cloud` for the public gateway)
- `parallelLimit`: (optional) number of concurrent upload, adjust this value to avoid rate limits.

:::info

The public gateways are not intended to be used in production &mdash; they are good to be used for testing. They are heavily rate limited and not designed for speed.

:::

## NFT.Storage

Configuration settings:

```json
{
  . . .
  "uploadMethod": "nft_storage",
  . . .
  "nftStorageAuthToken": "<AUTH_TOKEN>",
  . . .
}
```

[NFT.Storage](https://nft.storage) is a popular free service that uploads data on the public IPFS network. You will need to register an account to obtain an API key (token), which need to be specified by `"nftStorageAuthToken"` in the configuration file.

## Shadow Drive

Configuration settings:

```json
{
  . . .
  "uploadMethod": "shdw",
  . . .
  "shdwStorageAccount": "<STORAGE PUBKEY>",
  . . .
}
```

[Shadow Drive](https://shdw.genesysgo.com/shadow-infrastructure-overview/shadow-drive-overview) is a decentralized storage network built specifically for the Solana blockchain. In order to upload data to the Shadow Drive you will need to first create a storage account. This can be done using the [Shadow Drive CLI](https://shdw.genesysgo.com/using-shadow-drive/the-shadow-drive-platform/shadow-drive-cli). After creating a storage account, specify its pubkey address in the configuration file using the property `"shdwStorageAccount"`.

:::info

The Shadow Drive upload method is only available on `mainnet`.

:::
