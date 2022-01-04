---
sidebar_position: 1
---

# Token Metadata Standard

[Wallets](https://docs.solana.com/terminology#wallet) should support the display of metadata associated with [tokens](https://docs.solana.com/terminology#token), in accordance with the standards described by the [Metaplex Token Metadata contract](https://github.com/metaplex-foundation/metaplex/tree/master/rust/token-metadata/program). Wallets should pull both the on-chain data and the external JSON provided by the metadata's uri field and use them to display all relevant data.

Follow the standards defined in this document to ensure your NFTs will be correctly displayed in most wallets and to allow usage of all functionalities related to NFTs.

## What is the difference between a Fungible Token with Metadata and an NFT?
A token must pass 4 out of the 5 following checks to qualify as an nft.

1. It must be a spl token (Required)
2. It must have a Token Metadata PDA derivable from the mint address. (Required)
3. It must have a supply of 1 (Required)
4. It must have a decimals value on the mint of 0 (Optional)
5. It must have a master edition/or limited edition PDA associated with it. (Required)

A fungible Token with metadata must only satisfy bullets 1,2.

Explorers, Wallets and Marketplaces should ensure they have these checks in place before choosing to display the token as an NFT
## Token Metadata Program

The Token Metadata program provides decorator structs to a token mint. Basic information about the token is provided with the `Metadata` struct, whose account address is a Program Derived Address (PDA) with a derived key of `['metadata', metadata_program_id, mint_id]`.

Your NFT should have the following information as on-chain metadata:

| Field                   | Type    | Description                                                    | How do we display it                                                                                    |
| ----------------------- | ------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| name                    | string  | name of the asset                                              | grid view and single NFT view                                                                           |
| symbol                  | string  | symbol of the asset                                            | not shown currently                                                                                     |
| uri                     | string  | URI to the external JSON representing the asset                | linked in the single NFT view                                                                           |
| creators                | array   | public key of each creator                                     | shown in the single NFT view, resolved to twitter handles if they are connected via Solana Name Service |
| update_authority        | string  | public key of the metadata owner                               | shown in the single NFT view, can be updated in the send NFT modal                                      |
| primary_sale_happened   | boolean | flag describing whether the primary sale of the token happened | visible in the send NFT modal, can be updated                                                           |
| seller_fee_basis_points | number  | royalties percentage awarded to creators                       | shown as a percentage received by each co-creator                                                       |

The program also specifies optional structs used for the creation `Master Editions` and `Editions`.

## URI JSON Schema

To display off-chain metadata of tokens, the on-chain struct needs to contain a URI as described above, which will allow wallets to find it.


The file below should be used as a reference.

### JSON Structure
Here is an example of off-chain JSON metadata.

```
{
  "name": "Solflare X NFT",
  "symbol": "",
  "description": "Celebratory Solflare NFT for the Solflare X launch",
  "seller_fee_basis_points": 0,
  "image": "https://www.arweave.net/abcd5678?ext=png",
  "animation_url": "https://www.arweave.net/efgh1234?ext=mp4",
  "external_url": "https://solflare.com",
  "attributes": [
    {
      "trait_type": "web",
      "value": "yes"
    },
    {
      "trait_type": "mobile",
      "value": "yes"
   },
   {
      "trait_type": "extension",
      "value": "yes"
	}
  ],
  "collection": {
     "name": "Solflare X NFT",
     "family": "Solflare"
  },
  "properties": {
    "files": [
      {
        "uri": "https://www.arweave.net/abcd5678?ext=png",
        "type": "image/png"
      },
      {
        "uri": "https://watch.videodelivery.net/9876jkl",
        "type": "unknown",
        "cdn": true
      },
      {
        "uri": "https://www.arweave.net/efgh1234?ext=mp4",
        "type": "video/mp4"
      }
    ],
    "category": "video",
    "creators": [
      {
        "address": "xEtQ9Fpv62qdc1GYfpNReMasVTe9YW5bHJwfVKqo72u",
        "share": 100
      }
    ]
  }
}
```

For the fields that match the on-chain metadata, on-chain information has priority.

- `description` - Human readable description of the asset.
- `image` - URL to the image of the asset. PNG, GIF and JPG file formats are supported. You may use the `?ext={file_extension}` query to provide information on the file type.
- `animation_url` - URL to a multi-media attachment of the asset. The supported file formats are MP4 and MOV for video, MP3, FLAC and WAV for audio, GLB for AR/3D assets, and HTML for HTML pages. You may use the `?ext={file_extension}` query to provide information on the file type.
- `external_url` - URL to an external application or website where users can also view the asset.
- `properties.category` - Supported categories:
  - `"image"` - PNG, GIF, JPG
  - `"video"` - MP4, MOV
  - `"audio"` - MP3, FLAC, WAV
  - `"vr"` - 3D models; GLB, GLTF
  - `"html"` - HTML pages; scripts and relative paths within the HTML page are also supported
- `properties.files` - Object array, where an object should contain the `uri` and `type` of the file that is part of the asset. The type should match the file extension. The array should also include files specified in `image` and `animation_url` fields, and any other that are associated with the asset.
  You may use the `?ext={file_extension}` query to provide information on the file type.
- `attributes` - Object array, where an object should contain `trait_type` and `value` fields. `value` can be a string or a number.

### Additonal suggestions

#### CDN hosted files

In addition to hosting your assets on a permanent service, you can also host your assets on a CDN (to provide faster loading times). Just use the `cdn` boolean flag within the objects inside the `properties.files` array.

```
  "properties": {
    "files": [
		...
		{
          "uri": "https://watch.videodelivery.net/52a52c4a261c88f19d267931426c9be6",
          "type": "unknown",
          "cdn": true
		},
		...
	]
}
```

If such a flag exists, that file is the primary option when selecting the multimedia-attachment (video, audio or 3D) that will be displayed to owners. If that file is no longer available, wallets should default to it using the URL in `animation_url` field.

#### Collections

If the NFT belongs to a group of other unique NFTs, you can mark them with an additional `collection` field that contains the name of the collection.

```
  "collection": {
		"name": "Pigs on Solana Season #1",
		"family": "Pigs on Solana"
	}
```

`collection.family` represents the larger set of NFTs your asset can belong to, in the case you are making multiple variations on a theme. It should always be a unique identifier of your whole project and never a general term like "cars", "art" or similar.

Wallets might group NFTs belonging to the same family and display the collection name on a single NFT view.


#### Order of JSON fields

Since your wallet will give users a direct link to the JSON file, it is recommended to keep the order of fields same as in the reference, so as to maintain good human readability of its contents.


#### Other arbitrary data

Use the properties field to store other arbitrary data that will be used by specialized applications.

If your project would benefit with the expansion of this standard, do not hesitate to contact us with your suggestions.

#### Thanks

Thanks to [Solflare](https://solflare.com/) for putting the first version of this document together.
