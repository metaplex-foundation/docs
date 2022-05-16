const sharedSeeds = [
  {
    name: "metadata",
    type: "literal",
    value: "metadata",
    description: "The program's prefix for PDA seeds.",
  },
  {
    name: "token_metadata_program",
    type: "program",
  },
  {
    name: "mint",
    type: "variable",
    description: "The public key of the Mint Account to derive from.",
  },
];

const editionSeeds = [
  ...sharedSeeds,
  {
    name: "edition",
    type: "literal",
    value: "edition",
    description: "A literal to differentiate the Edition accounts.",
  },
];

export default {
  metadata: {
    title: "Metadata",
    seeds: sharedSeeds,
    fields: [
      {
        name: "key",
        size: 1,
        description:
          "The discriminator of the account as an enum. Equals to <code>MetadataV1(4)</code>.",
      },
      {
        name: "update_authority",
        size: 32,
        description: "The public key that is allowed to update this account.",
      },
      {
        name: "mint",
        size: 32,
        description: "The public key of the Mint Account it derives from.",
      },
      {
        name: "name",
        size: 36,
        description:
          'The on-chain name of the token, limited to 32 bytes. For instance "Degen Ape #1 ".',
      },
      {
        name: "symbol",
        size: 14,
        description:
          'The on-chain symbol of the token, limited to 10 bytes. For instance "DAPE".',
      },
      {
        name: "uri",
        size: 204,
        description:
          "The URI of the token, limited to 200 bytes. " +
          "<strong>This URI points to an off-chain JSON file that contains additional data following a certain standard.</strong> " +
          "You can learn more about this JSON standard here. The JSON file can either be stored in a traditional server " +
          "(e.g. using AWS) or using a permanent storage solution such as using Arweave.",
      },
      {
        name: "seller_fee_basis_points",
        size: 2,
        indicative: true,
        description:
          "The royalties shared by the creators in basis points — i.e. <code>550</code> means <code>5.5%</code>. " +
          "Whilst this field is used by virtually all NFT marketplaces, it is not enforced by the Token Metadata program itself.",
      },
      {
        name: "creators",
        description:
          "An array of creators and their share of the royalties. " +
          "This array is limited to 5 creators. Note that, because the " +
          "<code>Creators</code> field is an array of variable length, we cannot " +
          "guarantee the byte position of any field that follows (Notice the tilde " +
          "<code>~</code> in the fields below). Each creator contains the following fields.",
        fields: [
          {
            name: "address",
            offset: "~",
            size: 32,
            description: "The public key of the creator",
          },
          {
            name: "verified",
            offset: "~",
            size: 1,
            description:
              "A boolean indicating if the creator signed the NFT. " +
              "It is important to check this field to ensure the authenticity of the creator.",
          },
          {
            name: "share",
            offset: "~",
            size: 1,
            indicative: true,
            description:
              "The creator's shares of the royalties in percentage (1 byte) — i.e. <code>55</code> means <code>55%</code>. " +
              "Similarly to the <code>Seller Fee Basis Points</code> field, this is used by marketplaces but not enforced by the Token Metadata program.",
          },
        ],
      },
      {
        name: "primary_sale_happened",
        size: 1,
        indicative: true,
        description:
          "A boolean indicating if the token has already been sold at least once. " +
          "Once flipped to <code>True</code>, it cannot ever be <code>False</code> again. " +
          "This field can affect the way royalties are distributed.",
      },
      {
        name: "is_mutable",
        size: 1,
        description:
          "A boolean indicating if the Metadata Account can be updated. " +
          "Once flipped to <code>False</code>, it cannot ever be <code>True</code> again.",
      },
      {
        name: "edition_nonce",
        size: 2,
        optional: true,
        description:
          "A nonce used to verify the edition number of printed NFTs. " +
          "It will only be set on Edition NFTs and not Master Edition NFTs.",
      },
      {
        name: "token_standard",
        size: 2,
        optional: true,
        description:
          "This enum captures the fungibility of the token. You can [learn more about the token standard here](TODO).",
      },
      {
        name: "collection",
        size: 34,
        optional: true,
        description:
          "This field optionally links to the Mint address of another NFT that " +
          "acts as a Collection NFT. It contains the following sub-fields.",
        fields: [
          {
            name: "key",
            size: 32,
            description: "The public key of the Collection NFT’s Mint Account",
          },
          {
            name: "verified",
            size: 1,
            description:
              "A boolean indicating if the owner of the Collection NFT signed this NFT. " +
              "It is important to check this field to ensure the authenticity of the collection.",
          },
        ],
      },
      {
        name: "uses",
        size: 18,
        optional: true,
        description:
          'This field can make NFTs usable. Meaning you can load it with a certain amount of "uses" ' +
          "and use it until it has run out. You can [learn more about using NFTs here](TODO).",
      },
    ],
  },

  master_edition: {
    title: "Master Edition",
    seeds: editionSeeds,
    fields: [
      {
        name: "key",
        size: 1,
        description:
          "The discriminator of the account as an enum. Equals to: <code>MasterEditionV2(6)</code> " +
          "(or, for previous versions: <code>MasterEditionV1(2)</code>).",
      },
      {
        name: "supply",
        size: 8,
        description:
          "The amount of NFTs printed from this Master Edition. This field is automatically computed " +
          "by the program and cannot be manually updated. Once the <code>Supply</code> reaches the " +
          "<code>Max Supply</code>, no more prints can be made from this Master Edition.",
      },
      {
        name: "max_supply",
        optional: true,
        size: 9,
        description:
          "The maximum number of times NFTs can be printed from this Master Edition. " +
          "When set to <code>None</code>, the program will enable unlimited prints. " +
          "You can disable NFT printing by setting the <code>Max Supply</code> to <code>0</code>.",
      },
    ],
  },

  edition: {
    title: "Edition",
    seeds: editionSeeds,
    fields: [
      {
        name: "key",
        size: 1,
        description:
          "The discriminator of the account as an enum. Equals to: <code>EditionV1(1)</code>.",
      },
    ],
  },

  edition_marker: {
    title: "Edition Marker",
    fields: [
      {
        name: "key",
        size: 1,
        description:
          "The discriminator of the account as an enum. Equals to: <code>EditionMarker(7)</code>.",
      },
    ],
  },

  collection_authority_record: {
    title: "Collection Authority Record",
    fields: [
      {
        name: "key",
        size: 1,
        description:
          "The discriminator of the account as an enum. Equals to: <code>CollectionAuthorityRecord(9)</code>.",
      },
    ],
  },

  use_authority_record: {
    title: "Use Authority Record",
    fields: [
      {
        name: "key",
        size: 1,
        description:
          "The discriminator of the account as an enum. Equals to: <code>UseAuthorityRecord(8)</code>.",
      },
    ],
  },
};
