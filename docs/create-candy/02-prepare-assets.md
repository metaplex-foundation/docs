---
sidebar_label: "1. Prepare NFT Assets"
---

# Prepare NFT Assets

To mint NFTs, your Candy Machine needs to be loaded up with your project's artwork and metadata.

The artwork is generally a collection of `.png` files and the metadata is a series of `.json` files that correspond 1:1 for each image in your collection.

Many projects choose to generate their artwork and metadata. This approach is powerful, but also advanced.

Before getting into the more advanced process, it's important to understand what simple collections can look like.

A two item collection would contain four files.

- `0.png`
- `0.json`
- `1.png`
- `1.json`

`0.png` and `0.json` are combined to represent the first NFT in this example collection. 
`1.png` and `1.json` describe the second NFT. 

The content of the image files reflect the artwork you would like to display.
The content of the metadata files desribe each of these pieces of artwork using the schema defined in the [Token Metadata Standard](../nft-standard.md).

Theses files are typically grouped in to a single folder, usually named `assets`, but that is not a hard requirement. Grouping them into a single folder simplifies next steps and is highly encouraged.

Larger collections follow these same conventions. For example, a 10k profile picture drop would look like this:

- `assets/0.png`
- `assets/0.json`
- `assets/1.png`
- `assets/1.json`
- ...
- `assets/9998.png`
- `assets/9998.json`
- `assets/9999.png`
- `assets/9999.json`

## Example: Two item collection

To make this concrete and relatable, we'll walk through a real two item collection using the following assets:

### Simple NFT #1

`simple-collection/0.png`
> ![simple-collection/0.png](./simple-collection/0.png)

`simple-collection/0.json`
```json
{
  "name": "Simple NFT #1",
  "image": "0.png",
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
### Simple NFT #2

`simple-collection/1.png`
> ![simple-collection/1.png](./simple-collection/1.png)

`simple-collection/1.json`
```json
{
  "name": "Simple NFT #2",
  "image": "1.png",
  "properties": {
    "files": [
      {
        "uri": "1.png",
        "type": "image/png"
      }
    ]
  }
}
```

Notice that we don't use every possible field defined by the [Token Metadata Standard](../nft-standard.md). It's best practice to just use what you need, and this example collection doesn't need much.

Also notice there are three changes between `0.json` and `1.json`:

1. The `.name` property changes from
    - `Simple NFT #1` to
    - `Simple NFT #2`

2. The `.image` property changes from
    - `0.png` to
    - `1.png`

3. And `.properties.files.uri` changes from
    - `0.png` to
    - `1.png`


`diff simple-collection/0.json simple-collection/1.json`, a command line utility, can be used to confirm the changes as well. Recommended for advanced users:

```diff
2,3c2,3
<   "name": "Simple NFT #1",
<   "image": "0.png",
---
>   "name": "Simple NFT #2",
>   "image": "1.png",
7c7
<         "uri": "0.png",
---
>         "uri": "1.png",
```

[simple-collection.zip](./simple-collection.zip) can be downloaded for testing.