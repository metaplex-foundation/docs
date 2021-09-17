# Metadata Standard

#### Huge thanks to SolFlare for putting this together!

SPL wallets should support the displaying of _metadata_ associated with SPL tokens, in accordance with the standards described by the Metaplex Token Metadata contract. Wallets should pull both the on-chain data and the external JSON provided by the metadata's `uri` field and use them to display all relevant data.

We recommend following the Metaplex standards and standards defined in this document to ensure your NFT will be correctly displayed in your wallets and to allow usage of all functionalities related to NFTs.

## Token Metadata Program

The concept of the Token Metadata program is to provide decorator structs to a token mint. Basic info about the SPL token is provided with the `Metadata` struct, whose account address is a PDA with a derived key of `['metadata', metadata_program_id, mint_id]`.

Your wallet should be using the following information from the on-chain metadata:

| Field                   | Type    | Description                                                    | How do we display it                                                                                    |
| ----------------------- | ------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| name                    | string  | name of the asset                                              | grid view and single NFT view                                                                           |
| symbol                  | string  | symbol of the asset                                            | not shown currently                                                                                     |
| uri                     | string  | URI to the external JSON representing the asset                | linked in the single NFT view                                                                           |
| creators                | array   | public key of each creator                                     | shown in the single NFT view, resolved to twitter handles if they are connected via Solana Name Service |
| update_authority        | string  | public key of the metadata owner                               | shown in the single NFT view, can be updated in the send NFT modal                                      |
| primary_sale_happened   | boolean | flag describing whether the primary sale of the token happened | visible in the send NFT modal, can be updated                                                           |
| seller_fee_basis_points | number  | royalties percentage awarded to creators                       | shown as a percentage received by each co-creator                                                       |

The program also specifies optional structs used for the creation `Master Editions` and `Editions`. If these accounts exist, your wallet should display the Edition number (in case of a unique edition token) and whether a token is a `Master Edition`.

!!! info
You can explore the metadata standard in more detail on the [Metaplex project page](https://github.com/metaplex-foundation/metaplex) and in their developer guide.

## URI JSON Schema

To display off-chain metadata of SPL tokens, the on-chain struct needs to contain a URI as described above, which will allow your wallet to find it.

Your wallet should be using the JSON standard as described in the Metaplex Developer Guide. You should also also supports additional optional fields, such as the `attributes` field, as described in the OpenSea NFT Standard.

The file below should be used as a reference.

### JSON Structure

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
        "address": "SOLFLR15asd9d21325bsadythp547912501b",
        "share": 100
      }
    ]
  }
}
```

For the fields that match the on-chain metadata, on-chain information has priority.

- `description` - Human readable description of the asset.
- `image` - URL to the image of the asset. PNG, GIF and JPG file formats are supported. You may use the `?ext={file_extension}` query to provide information on the file type.
- `animation_url` - URL to a multi-media attachment of the asset. The supported file formats are MP4 and MOV for video, MP3, FLAC and WAV for audio and GLB for AR/3D assets. You may use the `?ext={file_extension}` query to provide information on the file type.
- `external_url` - URL to an external application or website where users can also view the asset.
- `properties.category` - Supported categories:
  - `"image"` - PNG, GIF, JPG
  - `"video"` - MP4, MOV
  - `"audio"` - MP3, FLAC, WAV
  - `"vr"` - 3D models; GLB, GLTF
- `properties.files` - Object array, where an object should contain the `uri` and `type` of the file that is part of the asset. The type should match the file extension. The array will also include files specified in `image` and `animation_url` fields, and any other that are associated with the asset.
  You may use the `?ext={file_extension}` query to provide information on the file type.
- `attributes` - Object array, where an object should contain `trait_type` and `value` fields. `value` can be a string or a number.

### Additonal suggestions

#### CDN hosted files

If you wish to provide additional hosting for your files to provide users a better experience (for example hosting your multi-media attachment on a CDN to provide faster loading times, in addition to hosting it on a permanent service), you can use the `cdn` boolean flag within the objects inside the `properties.files` array.

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

If such a flag exists, that file is the primary option when selecting the multimedia-attachment (video, audio or 3D) that will be displayed to owners. If that file is no longer available, you wallet should default to it using the URL in `animation_url` field.

#### Collections

If the NFT belongs to a group of other unique NFTs, you can mark them with an additional `collection` field that contains the name of the collection.

```
  "collection": {
		"name": "Pigs on Solana Season #1",
		"family": "Pigs on Solana"
	}
```

`collection.family` represents the larger set of NFTs your asset can belong to, in the case you are making multiple variations on a theme. It should always be a unique identifier of your whole project and never a general term like "cars", "art" or similar.

You wallet should be able to group NFTs belonging to the same family and display the collection name on a single NFT view.

#### Additional attributes specification

In addition to current fields available for specifying attributes, your wallet should integrate additional fields for describing attributes.
Some of them are:

- `display_type: "Date"` - will display the `value` as a date, use a unix timestamp to specify it
- `max_value: Number` - if the `value` is also a number, it will be displayed as a bar chart with a maximum value
- `trait_count: Number` - if the asset is part of a collection, this number represents the total count of other assets with the same trait type and value

The only mandatory fields to describe an attribute are: `trait_type` and `trait_value`.

#### Order of JSON fields

Since you wallet will give users a direct link to the JSON file, it is recommended to keep the order of fields same as in the reference, so as to maintain good human readability of its contents.

#### Other arbitrary data

We suggest using the properties field to store other arbitrary data that will be used by specialized applications.

If your project would benefit with the expansion of this standard, do not hesitate to contact us with your suggestions.
