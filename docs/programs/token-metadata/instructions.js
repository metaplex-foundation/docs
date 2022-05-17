export default {
  UpdatePrimarySaleHappenedViaToken: {
    name: "UpdatePrimarySaleHappenedViaToken",
    accounts: [
      {
        name: "metadata",
        isMut: true,
        isSigner: false,
        desc: "Metadata key (pda of ['metadata', program id, mint id])",
      },
      {
        name: "owner",
        isMut: false,
        isSigner: true,
        desc: "Owner on the token account",
      },
      {
        name: "token",
        isMut: false,
        isSigner: false,
        desc: "Account containing tokens from the metadata's mint",
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 4,
    },
  },
  SignMetadata: {
    name: "SignMetadata",
    accounts: [
      {
        name: "metadata",
        isMut: true,
        isSigner: false,
        desc: "Metadata (pda of ['metadata', program id, mint id])",
      },
      {
        name: "creator",
        isMut: false,
        isSigner: true,
        desc: "Creator",
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 7,
    },
  },
  MintNewEditionFromMasterEditionViaToken: {
    name: "MintNewEditionFromMasterEditionViaToken",
    accounts: [
      {
        name: "newMetadata",
        isMut: true,
        isSigner: false,
        desc: "New Metadata key (pda of ['metadata', program id, mint id])",
      },
      {
        name: "newEdition",
        isMut: true,
        isSigner: false,
        desc: "New Edition (pda of ['metadata', program id, mint id, 'edition'])",
      },
      {
        name: "masterEdition",
        isMut: true,
        isSigner: false,
        desc: "Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition'])",
      },
      {
        name: "newMint",
        isMut: true,
        isSigner: false,
        desc: "Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY",
      },
      {
        name: "editionMarkPda",
        isMut: true,
        isSigner: false,
        desc: "Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).",
      },
      {
        name: "newMintAuthority",
        isMut: false,
        isSigner: true,
        desc: "Mint authority of new mint",
      },
      {
        name: "payer",
        isMut: true,
        isSigner: true,
        desc: "payer",
      },
      {
        name: "tokenAccountOwner",
        isMut: false,
        isSigner: true,
        desc: "owner of token account containing master token (#8)",
      },
      {
        name: "tokenAccount",
        isMut: false,
        isSigner: false,
        desc: "token account containing token from master metadata mint",
      },
      {
        name: "newMetadataUpdateAuthority",
        isMut: false,
        isSigner: false,
        desc: "Update authority info for new metadata",
      },
      {
        name: "metadata",
        isMut: false,
        isSigner: false,
        desc: "Master record metadata account",
      },
      {
        name: "tokenProgram",
        isMut: false,
        isSigner: false,
        desc: "Token program",
      },
      {
        name: "systemProgram",
        isMut: false,
        isSigner: false,
        desc: "System program",
      },
      {
        name: "rent",
        isMut: false,
        isSigner: false,
        desc: "Rent info",
      },
    ],
    args: [
      {
        name: "mintNewEditionFromMasterEditionViaTokenArgs",
        type: {
          defined: "MintNewEditionFromMasterEditionViaTokenArgs",
        },
      },
    ],
    discriminant: {
      type: "u8",
      value: 11,
    },
  },
  ConvertMasterEditionV1ToV2: {
    name: "ConvertMasterEditionV1ToV2",
    accounts: [
      {
        name: "masterEdition",
        isMut: true,
        isSigner: false,
        desc: "Master Record Edition V1 (pda of ['metadata', program id, master metadata mint id, 'edition'])",
      },
      {
        name: "oneTimeAuth",
        isMut: true,
        isSigner: false,
        desc: "One time authorization mint",
      },
      {
        name: "printingMint",
        isMut: true,
        isSigner: false,
        desc: "Printing mint",
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 12,
    },
  },
  MintNewEditionFromMasterEditionViaVaultProxy: {
    name: "MintNewEditionFromMasterEditionViaVaultProxy",
    accounts: [
      {
        name: "newMetadata",
        isMut: true,
        isSigner: false,
        desc: "New Metadata key (pda of ['metadata', program id, mint id])",
      },
      {
        name: "newEdition",
        isMut: true,
        isSigner: false,
        desc: "New Edition (pda of ['metadata', program id, mint id, 'edition'])",
      },
      {
        name: "masterEdition",
        isMut: true,
        isSigner: false,
        desc: "Master Record Edition V2 (pda of ['metadata', program id, master metadata mint id, 'edition']",
      },
      {
        name: "newMint",
        isMut: true,
        isSigner: false,
        desc: "Mint of new token - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY",
      },
      {
        name: "editionMarkPda",
        isMut: true,
        isSigner: false,
        desc: "Edition pda to mark creation - will be checked for pre-existence. (pda of ['metadata', program id, master metadata mint id, 'edition', edition_number]) where edition_number is NOT the edition number you pass in args but actually edition_number = floor(edition/EDITION_MARKER_BIT_SIZE).",
      },
      {
        name: "newMintAuthority",
        isMut: false,
        isSigner: true,
        desc: "Mint authority of new mint",
      },
      {
        name: "payer",
        isMut: true,
        isSigner: true,
        desc: "payer",
      },
      {
        name: "vaultAuthority",
        isMut: false,
        isSigner: true,
        desc: "Vault authority",
      },
      {
        name: "safetyDepositStore",
        isMut: false,
        isSigner: false,
        desc: "Safety deposit token store account",
      },
      {
        name: "safetyDepositBox",
        isMut: false,
        isSigner: false,
        desc: "Safety deposit box",
      },
      {
        name: "vault",
        isMut: false,
        isSigner: false,
        desc: "Vault",
      },
      {
        name: "newMetadataUpdateAuthority",
        isMut: false,
        isSigner: false,
        desc: "Update authority info for new metadata",
      },
      {
        name: "metadata",
        isMut: false,
        isSigner: false,
        desc: "Master record metadata account",
      },
      {
        name: "tokenProgram",
        isMut: false,
        isSigner: false,
        desc: "Token program",
      },
      {
        name: "tokenVaultProgram",
        isMut: false,
        isSigner: false,
        desc: "Token vault program",
      },
      {
        name: "systemProgram",
        isMut: false,
        isSigner: false,
        desc: "System program",
      },
      {
        name: "rent",
        isMut: false,
        isSigner: false,
        desc: "Rent info",
      },
    ],
    args: [
      {
        name: "mintNewEditionFromMasterEditionViaTokenArgs",
        type: {
          defined: "MintNewEditionFromMasterEditionViaTokenArgs",
        },
      },
    ],
    discriminant: {
      type: "u8",
      value: 13,
    },
  },
  PuffMetadata: {
    name: "PuffMetadata",
    accounts: [
      {
        name: "metadata",
        isMut: true,
        isSigner: false,
        desc: "Metadata account",
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 14,
    },
  },
  UpdateMetadataAccountV2: {
    name: "UpdateMetadataAccountV2",
    accounts: [
      {
        name: "metadata",
        isMut: true,
        isSigner: false,
        desc: "Metadata account",
      },
      {
        name: "updateAuthority",
        isMut: false,
        isSigner: true,
        desc: "Update authority key",
      },
    ],
    args: [
      {
        name: "updateMetadataAccountArgsV2",
        type: {
          defined: "UpdateMetadataAccountArgsV2",
        },
      },
    ],
    discriminant: {
      type: "u8",
      value: 15,
    },
  },
  CreateMetadataAccountV2: {
    name: "CreateMetadataAccountV2",
    accounts: [
      {
        name: "metadata",
        isMut: true,
        isSigner: false,
        desc: "Metadata key (pda of ['metadata', program id, mint id])",
      },
      {
        name: "mint",
        isMut: false,
        isSigner: false,
        desc: "Mint of token asset",
      },
      {
        name: "mintAuthority",
        isMut: false,
        isSigner: true,
        desc: "Mint authority",
      },
      {
        name: "payer",
        isMut: true,
        isSigner: true,
        desc: "payer",
      },
      {
        name: "updateAuthority",
        isMut: false,
        isSigner: false,
        desc: "update authority info",
      },
      {
        name: "systemProgram",
        isMut: false,
        isSigner: false,
        desc: "System program",
      },
      {
        name: "rent",
        isMut: false,
        isSigner: false,
        desc: "Rent info",
      },
    ],
    args: [
      {
        name: "createMetadataAccountArgsV2",
        type: {
          defined: "CreateMetadataAccountArgsV2",
        },
      },
    ],
    discriminant: {
      type: "u8",
      value: 16,
    },
  },
  CreateMasterEditionV3: {
    name: "CreateMasterEditionV3",
    accounts: [
      {
        name: "edition",
        isMut: true,
        isSigner: false,
        desc: "Unallocated edition V2 account with address as pda of ['metadata', program id, mint, 'edition']",
      },
      {
        name: "mint",
        isMut: true,
        isSigner: false,
        desc: "Metadata mint",
      },
      {
        name: "updateAuthority",
        isMut: false,
        isSigner: true,
        desc: "Update authority",
      },
      {
        name: "mintAuthority",
        isMut: false,
        isSigner: true,
        desc: "Mint authority on the metadata's mint - THIS WILL TRANSFER AUTHORITY AWAY FROM THIS KEY",
      },
      {
        name: "payer",
        isMut: true,
        isSigner: true,
        desc: "payer",
      },
      {
        name: "metadata",
        isMut: true,
        isSigner: false,
        desc: "Metadata account",
      },
      {
        name: "tokenProgram",
        isMut: false,
        isSigner: false,
        desc: "Token program",
      },
      {
        name: "systemProgram",
        isMut: false,
        isSigner: false,
        desc: "System program",
      },
      {
        name: "rent",
        isMut: false,
        isSigner: false,
        desc: "Rent info",
      },
    ],
    args: [
      {
        name: "createMasterEditionArgs",
        type: {
          defined: "CreateMasterEditionArgs",
        },
      },
    ],
    discriminant: {
      type: "u8",
      value: 17,
    },
  },
  VerifyCollection: {
    name: "VerifyCollection",
    accounts: [
      {
        name: "metadata",
        isMut: true,
        isSigner: false,
        desc: "Metadata account",
      },
      {
        name: "collectionAuthority",
        isMut: true,
        isSigner: true,
        desc: "Collection Update authority",
      },
      {
        name: "payer",
        isMut: true,
        isSigner: true,
        desc: "payer",
      },
      {
        name: "collectionMint",
        isMut: false,
        isSigner: false,
        desc: "Mint of the Collection",
      },
      {
        name: "collection",
        isMut: false,
        isSigner: false,
        desc: "Metadata Account of the Collection",
      },
      {
        name: "collectionMasterEditionAccount",
        isMut: false,
        isSigner: false,
        desc: "MasterEdition2 Account of the Collection Token",
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 18,
    },
  },
  Utilize: {
    name: "Utilize",
    accounts: [
      {
        name: "metadata",
        isMut: true,
        isSigner: false,
        desc: "Metadata account",
      },
      {
        name: "tokenAccount",
        isMut: true,
        isSigner: false,
        desc: "Token Account Of NFT",
      },
      {
        name: "mint",
        isMut: true,
        isSigner: false,
        desc: "Mint of the Metadata",
      },
      {
        name: "useAuthority",
        isMut: true,
        isSigner: true,
        desc: "A Use Authority / Can be the current Owner of the NFT",
      },
      {
        name: "owner",
        isMut: false,
        isSigner: false,
        desc: "Owner",
      },
      {
        name: "tokenProgram",
        isMut: false,
        isSigner: false,
        desc: "Token program",
      },
      {
        name: "ataProgram",
        isMut: false,
        isSigner: false,
        desc: "Associated Token program",
      },
      {
        name: "systemProgram",
        isMut: false,
        isSigner: false,
        desc: "System program",
      },
      {
        name: "rent",
        isMut: false,
        isSigner: false,
        desc: "Rent info",
      },
      {
        name: "useAuthorityRecord",
        isMut: true,
        isSigner: false,
        desc: "Use Authority Record PDA If present the program Assumes a delegated use authority",
        optional: true,
      },
      {
        name: "burner",
        isMut: false,
        isSigner: false,
        desc: "Program As Signer (Burner)",
        optional: true,
      },
    ],
    args: [
      {
        name: "utilizeArgs",
        type: {
          defined: "UtilizeArgs",
        },
      },
    ],
    discriminant: {
      type: "u8",
      value: 19,
    },
  },
  ApproveUseAuthority: {
    name: "ApproveUseAuthority",
    accounts: [
      {
        name: "useAuthorityRecord",
        isMut: true,
        isSigner: false,
        desc: "Use Authority Record PDA",
      },
      {
        name: "owner",
        isMut: true,
        isSigner: true,
        desc: "Owner",
      },
      {
        name: "payer",
        isMut: true,
        isSigner: true,
        desc: "Payer",
      },
      {
        name: "user",
        isMut: false,
        isSigner: false,
        desc: "A Use Authority",
      },
      {
        name: "ownerTokenAccount",
        isMut: true,
        isSigner: false,
        desc: "Owned Token Account Of Mint",
      },
      {
        name: "metadata",
        isMut: false,
        isSigner: false,
        desc: "Metadata account",
      },
      {
        name: "mint",
        isMut: false,
        isSigner: false,
        desc: "Mint of Metadata",
      },
      {
        name: "burner",
        isMut: false,
        isSigner: false,
        desc: "Program As Signer (Burner)",
      },
      {
        name: "tokenProgram",
        isMut: false,
        isSigner: false,
        desc: "Token program",
      },
      {
        name: "systemProgram",
        isMut: false,
        isSigner: false,
        desc: "System program",
      },
      {
        name: "rent",
        isMut: false,
        isSigner: false,
        desc: "Rent info",
      },
    ],
    args: [
      {
        name: "approveUseAuthorityArgs",
        type: {
          defined: "ApproveUseAuthorityArgs",
        },
      },
    ],
    discriminant: {
      type: "u8",
      value: 20,
    },
  },
  RevokeUseAuthority: {
    name: "RevokeUseAuthority",
    accounts: [
      {
        name: "useAuthorityRecord",
        isMut: true,
        isSigner: false,
        desc: "Use Authority Record PDA",
      },
      {
        name: "owner",
        isMut: true,
        isSigner: true,
        desc: "Owner",
      },
      {
        name: "user",
        isMut: false,
        isSigner: false,
        desc: "A Use Authority",
      },
      {
        name: "ownerTokenAccount",
        isMut: true,
        isSigner: false,
        desc: "Owned Token Account Of Mint",
      },
      {
        name: "mint",
        isMut: false,
        isSigner: false,
        desc: "Mint of Metadata",
      },
      {
        name: "metadata",
        isMut: false,
        isSigner: false,
        desc: "Metadata account",
      },
      {
        name: "tokenProgram",
        isMut: false,
        isSigner: false,
        desc: "Token program",
      },
      {
        name: "systemProgram",
        isMut: false,
        isSigner: false,
        desc: "System program",
      },
      {
        name: "rent",
        isMut: false,
        isSigner: false,
        desc: "Rent info",
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 21,
    },
  },
  UnverifyCollection: {
    name: "UnverifyCollection",
    accounts: [
      {
        name: "metadata",
        isMut: true,
        isSigner: false,
        desc: "Metadata account",
      },
      {
        name: "collectionAuthority",
        isMut: true,
        isSigner: true,
        desc: "Collection Authority",
      },
      {
        name: "collectionMint",
        isMut: false,
        isSigner: false,
        desc: "Mint of the Collection",
      },
      {
        name: "collection",
        isMut: false,
        isSigner: false,
        desc: "Metadata Account of the Collection",
      },
      {
        name: "collectionMasterEditionAccount",
        isMut: false,
        isSigner: false,
        desc: "MasterEdition2 Account of the Collection Token",
      },
      {
        name: "collectionAuthorityRecord",
        isMut: false,
        isSigner: false,
        desc: "Collection Authority Record PDA",
        optional: true,
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 22,
    },
  },
  ApproveCollectionAuthority: {
    name: "ApproveCollectionAuthority",
    accounts: [
      {
        name: "collectionAuthorityRecord",
        isMut: true,
        isSigner: false,
        desc: "Collection Authority Record PDA",
      },
      {
        name: "newCollectionAuthority",
        isMut: false,
        isSigner: false,
        desc: "A Collection Authority",
      },
      {
        name: "updateAuthority",
        isMut: true,
        isSigner: true,
        desc: "Update Authority of Collection NFT",
      },
      {
        name: "payer",
        isMut: true,
        isSigner: true,
        desc: "Payer",
      },
      {
        name: "metadata",
        isMut: false,
        isSigner: false,
        desc: "Collection Metadata account",
      },
      {
        name: "mint",
        isMut: false,
        isSigner: false,
        desc: "Mint of Collection Metadata",
      },
      {
        name: "systemProgram",
        isMut: false,
        isSigner: false,
        desc: "System program",
      },
      {
        name: "rent",
        isMut: false,
        isSigner: false,
        desc: "Rent info",
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 23,
    },
  },
  RevokeCollectionAuthority: {
    name: "RevokeCollectionAuthority",
    accounts: [
      {
        name: "collectionAuthorityRecord",
        isMut: true,
        isSigner: false,
        desc: "Collection Authority Record PDA",
      },
      {
        name: "updateAuthority",
        isMut: true,
        isSigner: true,
        desc: "Update Authority of Collection NFT",
      },
      {
        name: "metadata",
        isMut: false,
        isSigner: false,
        desc: "Metadata account",
      },
      {
        name: "mint",
        isMut: false,
        isSigner: false,
        desc: "Mint of Metadata",
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 24,
    },
  },
  SetAndVerifyCollection: {
    name: "SetAndVerifyCollection",
    accounts: [
      {
        name: "metadata",
        isMut: true,
        isSigner: false,
        desc: "Metadata account",
      },
      {
        name: "collectionAuthority",
        isMut: true,
        isSigner: true,
        desc: "Collection Update authority",
      },
      {
        name: "payer",
        isMut: true,
        isSigner: true,
        desc: "Payer",
      },
      {
        name: "updateAuthority",
        isMut: false,
        isSigner: false,
        desc: "Update Authority of Collection NFT and NFT",
      },
      {
        name: "collectionMint",
        isMut: false,
        isSigner: false,
        desc: "Mint of the Collection",
      },
      {
        name: "collection",
        isMut: false,
        isSigner: false,
        desc: "Metadata Account of the Collection",
      },
      {
        name: "collectionMasterEditionAccount",
        isMut: false,
        isSigner: false,
        desc: "MasterEdition2 Account of the Collection Token",
      },
      {
        name: "collectionAuthorityRecord",
        isMut: false,
        isSigner: false,
        desc: "Collection Authority Record PDA",
        optional: true,
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 25,
    },
  },
  FreezeDelegatedAccount: {
    name: "FreezeDelegatedAccount",
    accounts: [
      {
        name: "delegate",
        isMut: true,
        isSigner: true,
        desc: "Delegate",
      },
      {
        name: "tokenAccount",
        isMut: true,
        isSigner: false,
        desc: "Token account to freeze",
      },
      {
        name: "edition",
        isMut: false,
        isSigner: false,
        desc: "Edition",
      },
      {
        name: "mint",
        isMut: false,
        isSigner: false,
        desc: "Token mint",
      },
      {
        name: "tokenProgram",
        isMut: false,
        isSigner: false,
        desc: "Token Program",
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 26,
    },
  },
  ThawDelegatedAccount: {
    name: "ThawDelegatedAccount",
    accounts: [
      {
        name: "delegate",
        isMut: true,
        isSigner: true,
        desc: "Delegate",
      },
      {
        name: "tokenAccount",
        isMut: true,
        isSigner: false,
        desc: "Token account to thaw",
      },
      {
        name: "edition",
        isMut: false,
        isSigner: false,
        desc: "Edition",
      },
      {
        name: "mint",
        isMut: false,
        isSigner: false,
        desc: "Token mint",
      },
      {
        name: "tokenProgram",
        isMut: false,
        isSigner: false,
        desc: "Token Program",
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 27,
    },
  },
  RemoveCreatorVerification: {
    name: "RemoveCreatorVerification",
    accounts: [
      {
        name: "metadata",
        isMut: true,
        isSigner: false,
        desc: "Metadata (pda of ['metadata', program id, mint id])",
      },
      {
        name: "creator",
        isMut: false,
        isSigner: true,
        desc: "Creator",
      },
    ],
    args: [],
    discriminant: {
      type: "u8",
      value: 28,
    },
  },
};
