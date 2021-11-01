---
sidebar_position: 4
label: "Adding new adapters"
---

# Adding new adapters
For creating new adapter you need only implement interface
```ts
IDataAdapter<TWriter extends IWriter, TReader extends IReader>
```

Where `IDataAdapter` initializes and add access to `TWriter` which implements `IWriter` and `TReader` which imlements `IReader`.

```ts
export interface IWriter {
  networkName: string;
  init(): Promise<void>;
  listenModeOn(): void;
  flush(): Promise<void>;
  persist: UpdateStateValueFunc;
}

export interface IReader {
  readonly networkName: string;
  init(): Promise<void>;
  subscribeIterator(
    prop: MetaTypes,
    key?: string | FilterFn<IEvent> | undefined,
  ): ResolverFn;
  loadUserAccounts(ownerId: string): Promise<TokenAccount[]>;
  storesCount(): Promise<number>;
  creatorsCount(): Promise<number>;
  artworksCount(): Promise<number>;
  auctionsCount(): Promise<number>;
  getStoreIds(): Promise<string[]>;
  getStores(): Promise<Store[]>;
  getStore(storeId: string): Promise<Store | null>;
  getCreatorIds(): Promise<string[]>;
  getCreators(storeId: string): Promise<WhitelistedCreator[]>;
  getCreator(
    storeId: string,
    creatorId: string,
  ): Promise<WhitelistedCreator | null>;
  getArtworks(args: NexusGenInputs['ArtworksInput']): Promise<Metadata[]>;
  getArtwork(artId: string): Promise<Metadata | null>;
  getEdition(id?: string): Promise<Edition | null>;
  getMasterEdition(
    id?: string,
  ): Promise<MasterEditionV1 | MasterEditionV2 | null>;
}
```

For inspiration see [`js/packages/graphql/src/adapters/mongo`](https://github.com/metaplex-foundation/metaplex/tree/master/js/packages/graphql/src/adapters/mongo) folder.
