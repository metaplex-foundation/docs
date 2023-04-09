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

const sharedFields = {
  updateAuthority: {
    size: 32,
    description: "The public key that is allowed to update this account.",
  },
  primarySaleHappened: {
    size: 1,
    indicative: true,
    description:
      "A boolean indicating if the token has already been sold at least once. " +
      "Once flipped to <code>True</code>, it cannot ever be <code>False</code> again. " +
      "This field can affect the way royalties are distributed.",
  },
  isMutable: {
    size: 1,
    description:
      "A boolean indicating if the Metadata Account can be updated. " +
      "Once flipped to <code>False</code>, it cannot ever be <code>True</code> again.",
  },
  maxSupply: {
    size: 9,
    description:
      "The maximum number of times NFTs can be printed from this Master Edition. " +
      "When set to <code>None</code>, the program will enable unlimited prints. " +
      "You can disable NFT printing by setting the <code>Max Supply</code> to <code>0</code>.",
  },
  edition: {
    size: 8,
    description:
      "The edition number of this printed edition. For instance, the 10th printed NFT " +
      "will have <code>Edition = 10</code>.",
  },
};

export default {
  types: {
    Data: {
      description: "A data object containing the following attributes.",
      fields: {
        name: {
          size: 36,
          description:
            'The on-chain name of the token, limited to 32 bytes. For instance "Degen Ape #1 ".',
        },
        symbol: {
          size: 14,
          description:
            'The on-chain symbol of the token, limited to 10 bytes. For instance "DAPE".',
        },
        uri: {
          size: 204,
          description:
            "The URI of the token, limited to 200 bytes. " +
            "<strong>This URI points to an off-chain JSON file that contains additional data following a certain standard.</strong> " +
            "You can learn more about this JSON standard <a href='/programs/token-metadata/token-standard'>here</a>." +
            "The JSON file can either be stored in a traditional server " +
            "(e.g. using AWS) or using a permanent storage solution such as using Arweave.",
        },
        sellerFeeBasisPoints: {
          size: 2,
          indicative: true,
          description:
            "The royalties shared by the creators in basis points — i.e. <code>550</code> means <code>5.5%</code>. " +
            "Whilst this field is used by virtually all NFT marketplaces, it is not enforced by the Token Metadata program itself.",
        },
        creators: {
          description:
            "An array of creators and their share of the royalties. " +
            "This array is limited to 5 creators. Note that, because the " +
            "<code>Creators</code> field is an array of variable length, we cannot " +
            "guarantee the byte position of any field that follows (Notice the tilde " +
            "<code>~</code> in the fields below). Each creator contains the following fields.",
        },
      },
    },
    get DataV2() {
      return this.Data;
    },
    Creator: {
      fields: {
        address: {
          offset: "~",
          size: 32,
          description: "The public key of the creator",
        },
        verified: {
          offset: "~",
          size: 1,
          description:
            "A boolean indicating if the creator signed the NFT. " +
            "It is important to check this field to ensure the authenticity of the creator.",
        },
        share: {
          offset: "~",
          size: 1,
          indicative: true,
          description:
            "The creator's shares of the royalties in percentage (1 byte) — i.e. <code>55</code> means <code>55%</code>. " +
            "Similarly to the <code>Seller Fee Basis Points</code> field, this is used by marketplaces " +
            "but not enforced by the Token Metadata program.",
        },
      },
    },
    Collection: {
      size: 34,
      description:
        "This field optionally links to the Mint address of another NFT that " +
        "acts as a Collection NFT. It contains the following sub-fields.",
      fields: {
        key: {
          size: 32,
          description: "The public key of the Collection NFT's Mint Account",
        },
        verified: {
          size: 1,
          description:
            "A boolean indicating if the owner of the Collection NFT signed this NFT. " +
            "It is important to check this field to ensure the authenticity of the collection.",
        },
      },
    },
    Uses: {
      size: 18,
      description:
        'This field can make NFTs usable. Meaning you can load it with a certain amount of "uses" ' +
        'and use it until it has run out. You can <a href="/programs/token-metadata/using-nfts">learn more about using NFTs here</a>.',
      fields: {
        useMethod: {
          size: 1,
          description:
            "An enum defining the use behaviour for the NFT. It can be one of the following: " +
            "<code>Burn</code>, <code>Multiple</code> or <code>Single</code>. ",
        },
        remaining: {
          size: 8,
          description: "The remaining amount of uses.",
        },
        total: {
          size: 8,
          description: "The total amount of uses allowed in the first place.",
        },
      },
    },
    CollectionDetails: {
      size: 10,
      description:
        "This optional enum allows us to differentiate Collection NFTs from Regular NFTs whilst adding additional context " +
        "such as the amount of NFTs that are linked to the Collection NFT. " +
        'You can <a href="/programs/token-metadata/certified-collections#differentiating-regular-nfts-from-collection-nfts">learn more about the sized collections here</a>',
      fields: {
        size: {
          size: 8,
          description: "The number of NFTs attached to this Collection NFT.",
        },
      },
    },
    ProgrammableConfig: {
      size: 35,
      description:
        "This optional enum stores any data relevant to Programmable NFTs. " +
        "The different variants of the enum are used as versions so we can " +
        "add more features later on without introducing breaking changes. " +
        "The latest version `V1` optionally contains the address of the " +
        "RuleSet defining authorization rules for the Programmable NFT. " +
        "If no RuleSet is provided, then all operations are allowed.",
    },
    CreateMetadataAccountArgsV3: {
      description:
        "An object containing all the arguments for the <code>CreateMetadataAccountV3</code> instruction.",
      fields: {
        isMutable: sharedFields.isMutable,
      },
    },
    UpdateMetadataAccountArgsV2: {
      description:
        "An object containing all the arguments for the <code>UpdateMetadataAccountV2</code> instruction.",
      fields: {
        updateAuthority: sharedFields.updateAuthority,
        primarySaleHappened: sharedFields.primarySaleHappened,
        isMutable: sharedFields.isMutable,
      },
    },
    CreateMasterEditionArgs: {
      description:
        "An object containing all the arguments for the <code>CreateMasterEditionV3</code> instruction.",
      fields: {
        maxSupply: sharedFields.maxSupply,
      },
    },
    MintNewEditionFromMasterEditionViaTokenArgs: {
      description:
        "An object containing all the arguments necessary to print a new edition.",
      fields: {
        edition: sharedFields.edition,
      },
    },
    UtilizeArgs: {
      description:
        "An object containing all the arguments necessary to utilize the NFT",
      fields: {
        numberOfUses: {
          size: 8,
          description: "The number of uses to reduce.",
        },
      },
    },
    ApproveUseAuthorityArgs: {
      description:
        "An object containing all the arguments necessary to approve a new Use Authority.",
      fields: {
        numberOfUses: {
          size: 8,
          description:
            "The total number of uses allowed for the new authority.",
        },
      },
    },
  },
  accounts: {
    Metadata: {
      seeds: sharedSeeds,
      fields: {
        key: {
          size: 1,
          description:
            "The discriminator of the account as an enum. Equals to <code>MetadataV1(4)</code>.",
        },
        updateAuthority: sharedFields.updateAuthority,
        mint: {
          size: 32,
          description: "The public key of the Mint Account it derives from.",
        },
        data: {
          flatten: true,
        },
        primarySaleHappened: sharedFields.primarySaleHappened,
        isMutable: sharedFields.isMutable,
        editionNonce: {
          size: 2,
          description:
            "A nonce used to verify the edition number of printed NFTs. " +
            "It will only be set on Edition NFTs and not Master Edition NFTs.",
        },
        tokenStandard: {
          size: 2,
          description:
            'This enum captures the fungibility of the token. You can <a href="/programs/token-metadata/token-standard">learn more about the token standard here</a>.',
        },
      },
    },
    MasterEditionV2: {
      seeds: editionSeeds,
      fields: {
        key: {
          size: 1,
          description:
            "The discriminator of the account as an enum. Equals to: <code>MasterEditionV2(6)</code> " +
            "(or, for previous versions: <code>MasterEditionV1(2)</code>).",
        },
        supply: {
          size: 8,
          description:
            "The amount of NFTs printed from this Master Edition. This field is automatically computed " +
            "by the program and cannot be manually updated. Once the <code>Supply</code> reaches the " +
            "<code>Max Supply</code>, no more prints can be made from this Master Edition.",
        },
        maxSupply: sharedFields.maxSupply,
      },
    },
    Edition: {
      seeds: editionSeeds,
      fields: {
        key: {
          size: 1,
          description:
            "The discriminator of the account as an enum. Equals to: <code>EditionV1(1)</code>.",
        },
        parent: {
          size: 32,
          description:
            "The public key of the Master Edition account that printed this edition.",
        },
        edition: sharedFields.edition,
      },
    },
    EditionMarker: {
      seeds: [
        ...editionSeeds,
        {
          name: "edition_marker",
          type: "variable",
          description:
            "The edition number divided by <code>248</code> rounded down.",
        },
      ],
      fields: {
        key: {
          size: 1,
          description:
            "The discriminator of the account as an enum. Equals to: <code>EditionMarker(7)</code>.",
        },
        ledger: {
          size: 31,
          description:
            "An array of 31 bytes keeping track of the editions that have been printed within the marker's range. " +
            "With 31 bytes, each marker keep track of 248 editions using a bitmask.",
        },
      },
    },
    TokenRecord: {
      seeds: [
        ...sharedSeeds,
        {
          name: "token_record_prefix",
          type: "literal",
          value: "token_record",
          description: "A literal to differentiate Token Record accounts.",
        },
        {
          name: "token",
          type: "variable",
          description: "The public key of the Token Account to derive from.",
        },
      ],
      fields: {
        key: {
          size: 1,
          description:
            "The discriminator of the account as an enum. Equals to: <code>TokenRecord(11)</code>.",
        },
        bump: {
          size: 1,
          description:
            "The bump that was used to create the PDA of this account.",
        },
        state: {
          size: 1,
          description:
            "The state of the token account as defined by the <code>TokenState</code> enum. " +
            "You can read more about the different states and what their behaviour in the " +
            "<a href='https://github.com/metaplex-foundation/metaplex-program-library/blob/master/token-metadata/program/ProgrammableNFTGuide.md#token-delegate'>Programmable NFT guide</a>.",
        },
        ruleSetRevision: {
          size: 9,
          offset: "~",
          description:
            "The current rule set revision attached to the token, if any. " +
            "This ensures that, if the rule set changes on the Metadata account, " +
            "the token continues to use the current rule set until it has been unlocked.",
        },
        delegate: {
          size: 33,
          offset: "~",
          description: "The address of the delegate authority, if any.",
        },
        delegateRole: {
          size: 2,
          offset: "~",
          description:
            "The role of the delegate authority as defined by the <code>TokenDelegateRole</code> enum.",
        },
        lockedTransfer: {
          size: 33,
          offset: "~",
          description:
            "The only address of the <code>LockedTransfer</code> delegate is allowed to transfer to.",
        },
      },
    },
    MetadataDelegateRecord: {
      seeds: [
        ...sharedSeeds,
        {
          name: "metadata_delegate_role",
          type: "variable",
          description:
            "The role of the delegate authority as defined by the <code>MetadataDelegateRole</code> enum.",
        },
        {
          name: "update_authority",
          type: "variable",
          description:
            "The address of the current update authority of the Metadata account.",
        },
        {
          name: "delegate",
          type: "variable",
          description: "The address of the delegate authority.",
        },
      ],
      fields: {
        key: {
          size: 1,
          description:
            "The discriminator of the account as an enum. Equals to: <code>MetadataDelegate(12)</code>.",
        },
        bump: {
          size: 1,
          description:
            "The bump that was used to create the PDA of this account.",
        },
        mint: {
          size: 32,
          description: "The address of the Mint Account.",
        },
        delegate: {
          size: 32,
          description: "The address of the delegate authority.",
        },
        updateAuthority: {
          size: 32,
          description:
            "The address of the Update Authority for which this delegate record is valid.",
        },
      },
    },
    CollectionAuthorityRecord: {
      seeds: [
        ...sharedSeeds,
        {
          name: "collection_authority_prefix",
          type: "literal",
          value: "collection_authority",
          description:
            "A literal to differentiate the Collection Authority Record accounts.",
        },
        {
          name: "collection_authority",
          type: "variable",
          description:
            "The public key of the authority that is now allowed to verify collections on that NFT.",
        },
      ],
      fields: {
        key: {
          size: 1,
          description:
            "The discriminator of the account as an enum. Equals to: <code>CollectionAuthorityRecord(9)</code>.",
        },
        bump: {
          size: 1,
          description:
            "The bump that was used to create the PDA of this account.",
        },
      },
    },
    UseAuthorityRecord: {
      seeds: [
        ...sharedSeeds,
        {
          name: "user_prefix",
          type: "literal",
          value: "user",
          description:
            "A literal to differentiate the Use Authority Record accounts.",
        },
        {
          name: "user",
          type: "variable",
          description:
            "The public key of the authority that is now allowed to use that NFT.",
        },
      ],
      fields: {
        key: {
          size: 1,
          description:
            "The discriminator of the account as an enum. Equals to: <code>UseAuthorityRecord(8)</code>.",
        },
        allowedUses: {
          size: 8,
          description:
            "The amount of <code>uses</code> this authority is allowed to use.",
        },
        bump: {
          size: 1,
          description:
            "The bump that was used to create the PDA of this account.",
        },
      },
    },
  },
  instructions: {
    //
  },
};
