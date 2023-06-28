const base = [
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
];

const fullStandard = [
  ...base,
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
  {
    name: "properties",
    type: "object",
    description: "Additional properties that define the asset.",
    fields: [
      {
        name: "files",
        type: "array",
        description: "Additional files to include with the asset.",
        fields: [
          {
            name: "uri",
            type: "string",
            description: "The file's URI.",
          },
          {
            name: "type",
            type: "string",
            description: "The file's type. E.g. `image/png`, `video/mp4`, etc.",
          },
          {
            name: "cdn",
            type: "boolean",
            description: "(Optional) Whether the file is served from a CDN.",
          },
        ],
      },
      {
        name: "category",
        type: "string",
        description:
          "A media category for the asset. E.g. `video`, `image`, etc.",
      },
    ],
  },
];

export default {
  fungible: base,
  fungibleAsset: fullStandard,
  nonFungible: fullStandard,
  programmableNonFungible: fullStandard,
};
