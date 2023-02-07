const nonFungibleStandard = [
  {
    name: "name",
    type: "string",
    description: "Name of the asset.",
  },
  {
    name: "symbol",
    type: "string",
    description: "Symbol of the asset.",
  },
  {
    name: "description",
    type: "string",
    description: "Description of the asset.",
  },
  {
    name: "image",
    type: "string",
    description: "URI pointing to the asset's logo.",
  },
  {
    name: "animation_url",
    type: "string",
    description: "URI pointing to the asset's animation.",
  },
  {
    name: "external_url",
    type: "string",
    description:
      "URI pointing to an external URL defining the asset — e.g. the game's main site.",
  },
  {
    name: "attributes",
    type: "array",
    description:
      "Array of attributes defining the characteristics of the asset.",
    fields: [
      {
        name: "trait_type",
        type: "string",
        description: "The type of attribute.",
      },
      {
        name: "value",
        type: "string",
        description: "The value for that attribute.",
      },
    ],
  },
];

export default {
  fungible: [
    {
      name: "name",
      type: "string",
      description: "Name of the token.",
    },
    {
      name: "symbol",
      type: "string",
      description: "Symbol of the token.",
    },
    {
      name: "description",
      type: "string",
      description: "Description of the token.",
    },
    {
      name: "image",
      type: "string",
      description: "URI pointing to the token's logo.",
    },
  ],
  fungibleAsset: [
    {
      name: "name",
      type: "string",
      description: "Name of the asset.",
    },
    {
      name: "symbol",
      type: "string",
      description: "Symbol of the asset.",
    },
    {
      name: "description",
      type: "string",
      description: "Description of the asset.",
    },
    {
      name: "image",
      type: "string",
      description: "URI pointing to the asset's logo.",
    },
    {
      name: "animation_url",
      type: "string",
      description: "URI pointing to the asset's animation.",
    },
    {
      name: "external_url",
      type: "string",
      description:
        "URI pointing to an external URL defining the asset — e.g. the game's main site.",
    },
    {
      name: "attributes",
      type: "array",
      description:
        "Array of attributes defining the characteristics of the asset.",
      fields: [
        {
          name: "trait_type",
          type: "string",
          description: "The type of attribute.",
        },
        {
          name: "value",
          type: "string",
          description: "The value for that attribute.",
        },
      ],
    },
  ],
  nonFungible: nonFungibleStandard,
  programmableNonFungible: nonFungibleStandard,
};
