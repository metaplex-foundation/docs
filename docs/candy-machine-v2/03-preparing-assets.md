---
sidebar_label: "3. Preparing your Assets"
---

# Preparing your Assets

The Candy Machine is a distribution program and in order to use it to mint NFTs, it needs to be loaded up with your project's artwork and metadata.

Your assets consist of a collection of images (e.g., `.png`) and metadata (`.json`) files organized in a 1:1 mapping - i.e., each image has a corresponding metadata file.

There are a multitude of unique ways to generate images and metadata, and in most scenarios, you will automate this process. In this guide we will cover the creation of a simple collection to illustrate the metadata requirements and Candy Machine distribution. You should familiarize yourself with the [Token Metadata Standard](/programs/token-metadata/token-standard).

## Example NFT Collection

A 10-item collection will have 20 files in total:

| Images  | Metadata |
| ------- | -------- |
| `0.png` | `0.json` |
| `1.png` | `1.json` |
| `2.png` | `2.json` |
| `3.png` | `3.json` |
| `4.png` | `4.json` |
| `5.png` | `5.json` |
| `6.png` | `6.json` |
| `7.png` | `7.json` |
| `8.png` | `8.json` |
| `9.png` | `9.json` |

Each pair `0.png` and `0.json` are combined to represent the first NFT in this example collection; `1.png` and `1.json` describe the second NFT and so forth. These files are typically grouped into a single folder, usually named `assets`, but that is not a hard requirement. Grouping them into a single folder simplifies next steps and is highly encouraged.

The content of the image files reflect the artwork you would like to display for each NFT and the content of the metadata files describe each of these pieces of artwork using the schema defined in the [Token Metadata Standard](/programs/token-metadata/token-standard).

> The first item in your collection must have the index `0`, the second `1` and so forth. In a `10000` NFT drop, will start with the pair `0.png` and `0.json`, and end with the pair `9999.png` and `9999.json`. The numbering must also be consecutive - i.e., should not have gaps in the numbering.

:::warning

It is important to double check that you do not skip any indices, e.g., `0.png`, `2.png`, `3.png` (missing `1.png`). Otherwise you will experience problems when minting your collection.

:::

## Sample Items of the Collection

Below are two simple examples of items in this collection:

#### • Image: `0.png`

![0.png](0.png)

#### • Metadata: `0.json`

```json
{
  "name": "Number #0001",
  "symbol": "NB",
  "description": "Collection of 10 numbers on the blockchain. This is the number 1/10.",
  "seller_fee_basis_points": 500,
  "image": "0.png",
  "attributes": [
    { "trait_type": "Layer-1", "value": "0" },
    { "trait_type": "Layer-2", "value": "0" },
    { "trait_type": "Layer-3", "value": "0" },
    { "trait_type": "Layer-4", "value": "1" }
  ],
  "properties": {
    "creators": [
      { "address": "N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw", "share": 100 }
    ],
    "files": [{ "uri": "0.png", "type": "image/png" }]
  },
  "collection": { "name": "numbers", "family": "numbers" }
}
```

#### • Image: `9.png`

![9.png](9.png)

#### • Metadata: `9.json`

```json
{
  "name": "Number #0010",
  "symbol": "NB",
  "description": "Collection of 10 numbers on the blockchain. This is the number 10/10.",
  "seller_fee_basis_points": 500,
  "image": "9.png",
  "attributes": [
    { "trait_type": "Layer-1", "value": "0" },
    { "trait_type": "Layer-2", "value": "0" },
    { "trait_type": "Layer-3", "value": "1" },
    { "trait_type": "Layer-4", "value": "0" }
  ],
  "properties": {
    "creators": [
      { "address": "N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw", "share": 100 }
    ],
    "files": [{ "uri": "9.png", "type": "image/png" }]
  },
  "collection": { "name": "numbers", "family": "numbers" }
}
```

Notice that the difference in the metadata between each image is on:

- `"name"` property: `"Number #0001"` in the first image and `"Number #0010"` in the last image
- `"description"` property: it shows `"number 1/10"` in the first image and `"number 10/10"` in the last image
- `"image"` property: `"0.png"` in the first image and `"9.png"` in the last image
- `"properties.files.uri"` property: `"0.png"` in the first image and `"9.png"` in the last image
- `"attributes"` property: the values for `"Layer-3"` and `"Layer-4"` trait-types are different, since they describe attributes of the images

It is also important to make sure that you set royalties percentage awarded to creators (`"seller_fee_basis_points"` property) is set and each creators' wallet is listed in the `"properties.creators"` property.

:::info

You can download the complete [sample collection](assets.zip) for testing and experimentation. Subsequent steps in this walkthrough will assume it's the collection in use.

:::

## Verifying Assets

Once you completed your project's artwork and metadata preparation, it is important to verify that the files are ready to be uploaded. The Candy Machine CLI provides the `verify_assets` command to check that the files in the assets folder are in the correct format. This involves verifying that:

1. Files types are supported (e.g., png, jpg, mp4). Note that the command does not verify the content of the files; it does a lightweight verification that the extension of the files are from a supported type.
2. For each image/audio/video file, there is a correspondent `json` metadata file using the correct index naming in the `image` and `animation_url` properties.
3. Creators have been consistently added to all metadata files. The command expects that all assets have the same creators.

To proceed with the verification process, you will execute the `verify_assets` command:

```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts verify_assets ./assets
```

The only required parameter is the directory of the assets&mdash;in this example, `./assets` is the name of the directory. Executing the command using the sample collection will produce the following output:

```bash
started at: 1646926416415
Verifying token metadata for 10 (img+json) pairs
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/0.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/1.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/2.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/3.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/4.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/5.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/6.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/7.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/8.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/9.json
ended at: Thu Mar 10 2022 15:33:36 GMT+0000 (Greenwich Mean Time). time taken: 00:00:00
```

The above represents an example of a successful verification. When the command finds any inconsistency, it will report an error under the filename (`0.json` in this case) where the error occurred, as shown below:

```bash
started at: 1646926416415
Verifying token metadata for 10 (img+json) pairs
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/0.json
We expected the `image` property in ~/metaplex/js/packages/cli/test/assets/0.json to be 0.jpg.
This will still work properly (assuming the URL is valid!), however, this image will not get uploaded to Arweave through the `metaplex upload` command.
If you want us to take care of getting this into Arweave, make sure to set `image`: "0.jpg"
The `metaplex upload` command will automatically substitute this URL with the Arweave URL location.

Checking manifest file: ~/metaplex/js/packages/cli/test/assets/1.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/2.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/3.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/4.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/5.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/6.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/7.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/8.json
Checking manifest file: ~/metaplex/js/packages/cli/test/assets/9.json
ended at: Thu Mar 10 2022 15:33:36 GMT+0000 (Greenwich Mean Time). time taken: 00:00:00
```

As soon as your assets are verified, you are ready to create your Candy Machine.
