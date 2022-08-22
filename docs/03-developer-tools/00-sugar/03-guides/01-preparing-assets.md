# Preparing your Assets

The Candy Machine is a distribution program and in order to use it to mint NFTs, it needs to be loaded up with your
project's artwork and metadata.

Your assets consist of a collection of images (e.g., `.png`) and metadata (`.json`) files organized in a 1:1 mapping -
i.e., each image has a corresponding metadata file.

There are a multitude of unique ways to generate images and metadata, and in most scenarios, you will automate this
process. A good example of an image generation tool is [HashLips](https://github.com/HashLips/hashlips_art_engine). In
this guide we will cover the creation of a simple collection to illustrate the metadata requirements and
Candy Machine distribution. You should familiarize yourself with
the [Token Metadata Standard](/programs/token-metadata/token-standard).

## Example NFT Collection

A 10-item collection will have 20 regular files in total plus 2 additional collection files:

| Images           | Metadata          |
|------------------|-------------------|
| `0.png`          | `0.json`          |
| `1.png`          | `1.json`          |
| `2.png`          | `2.json`          |
| `3.png`          | `3.json`          |
| `4.png`          | `4.json`          |
| `5.png`          | `5.json`          |
| `6.png`          | `6.json`          |
| `7.png`          | `7.json`          |
| `8.png`          | `8.json`          |
| `9.png`          | `9.json`          |
| `collection.png` | `collection.json` |

:::note

If you don't want Sugar to automatically set an on-chain collection for your Candy Machine, don't include
a `collection.png` or `collection.json` in your `assets` folder

:::

Each pair of image and metadata are combined to represent an NFT. E.g. `0.png` and `0.json` represent the
 first NFT in this example collection, `1.png` and `1.json` describe the second NFT and so forth. These files are typically grouped into a single folder, usually named `assets`.

The content of the image files reflect the artwork you would like to display for each NFT and the content of the
metadata files describe each of these pieces of artwork using the schema defined in
the [Token Metadata Standard](/programs/token-metadata/token-standard).

> The first item in your collection must have the index `0`, the second `1` and so forth. In a `10000` NFT drop, will
> start with the pair `0.png` and `0.json`, and end with the pair `9999.png` and `9999.json`. The numbering must also be
> consecutive - i.e., should not have gaps in the numbering.

:::warning

It is important to double-check that you do not skip any indices, e.g., `0.png`, `2.png`, `3.png` (missing `1.png`).
Otherwise you will experience problems when minting your collection.

:::

## Sample Items of the Collection

Below are two simple examples of items in this collection:

#### • Image: `0.png`

![0.png](/assets/candy-machine/0.png#radius#shadow)

#### • Metadata: `0.json`

```json
{
  "name": "Number #0001",
  "symbol": "NB",
  "description": "Collection of 10 numbers on the blockchain. This is the number 1/10.",
  "image": "0.png",
  "attributes": [
    {
      "trait_type": "Number",
      "value": "0"
    }
  ],
  "properties": {
    "files": [
      {
        "uri": "0.png",
        "type": "image/png"
      }
    ]
  }
}
```

#### • Image: `9.png`

![9.png](/assets/candy-machine/9.png#radius#shadow)

#### • Metadata: `9.json`

```json
{
  "name": "Number #0010",
  "symbol": "NB",
  "description": "Collection of 10 numbers on the blockchain. This is the number 10/10.",
  "image": "9.png",
  "attributes": [
    {
      "trait_type": "Number",
      "value": "10"
    }
  ],
  "properties": {
    "files": [
      {
        "uri": "9.png",
        "type": "image/png"
      }
    ]
  }
}
```

#### • Image: `collection.png`

![collection.png](/assets/candy-machine/collection.png#radius#shadow)

#### • Metadata: `collection.json`

```json
{
  "name": "Numbers Collection",
  "symbol": "NB",
  "description": "Collection of 10 numbers on the blockchain.",
  "image": "collection.png",
  "attributes": [],
  "properties": {
    "files": [
      {
        "uri": "collection.png",
        "type": "image/png"
      }
    ]
  }
}
```

Notice that the difference in the metadata between each image is on:

- `"name"` property: `"Number #0001"` in the first image and `"Number #0010"` in the last image
- `"description"` property: it shows `"number 1/10"` in the first image and `"number 10/10"` in the last image
- `"image"` property: `"0.png"` in the first image and `"9.png"` in the last image
- `"properties.files.uri"` property: `"0.png"` in the first image and `"9.png"` in the last image
- `"attributes"` property: the values are different, since they describe attributes of the images

The `collection.json` file is also a bit different and doesn't have to include any attributes if you don't want.

:::info

You can download the complete [sample collection](/assets/candy-machine/assets.zip) for testing and experimentation.
Subsequent steps in this
walk through will assume it's the collection in use.

:::
