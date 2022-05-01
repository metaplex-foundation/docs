# Upload Methods

There are currently two upload (storage) methods available in Sugar: `"bundlr"` and `"aws"`. Uploading in Sugar is designed as a Rust trait to make it easier to for new methods to be added. We plan to release a developer guide for how to do this so we can support a wide-variety of upload methods.

## Bundlr

Uploads to [Arweave](https://www.arweave.org/) using [Bundlr Network](https://bundlr.network/) and payments are made in `SOL`.

> **Note:** Files are only stored for 7 days when uploaded with Bundlr on `devnet`.

## Amazon (AWS) S3

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