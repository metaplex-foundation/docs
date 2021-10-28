---
sidebar_position: 2
---

# Examples

## Store

```ts
// Get store id
const { storeId } = await actions.initStore({
  connection,
  wallet,
});
```

## Auctions

Getting existing auctions:

```ts
// Get Auction data
const auctionManagers = await AuctionManager.findMany(connection, {
  store: storeId,
});
const auctions = await Promise.all(
  auctionManagers.map((m) => m.getAuction(connection))
);

// Get Auction extended data(instansSalePrice, totalUncancelledBids, tickSize...)
const auctionsExtKeys = await Promise.all(
  auctionManagers.map((am) => AuctionExtended.getPDA(am.data.vault))
);
const auctionsExt = await Promise.all(
  auctionsExtKeys.map((k) => AuctionExtended.load(connection, k))
);
```

## Vaults

Getting auction vaults:

```ts
// Get auction vault
const vaults = await Promise.all(auctionManagers.map(am => Vault.load(connection, am.data.vault)));

// Get safety deposit boxes
const safetyDepositBoxes = await Promise.all(vaults.map(v => v.getSafetyDepositBoxes(connection)));
```

## Metadata

Getting store metadatas:

```ts
// Load store
const store = await Store.load(connection, storeId);
// Get all whitelisted creators
const creators = await store.getWhitelistedCreators(connection);
// Get creator PDA addresses
const creatorPDAs = await Promise.all(
  creators.map((creator) => WhitelistedCreator.getPDA(store.pubkey, creator.data.address))
);
// Filter store creators
const storeCreators = creators.filter(
  (creator, index) => creatorPDAs[index].toBase58() === creator.pubkey.toBase58()
);
// Get store metadata
const storeMetadata = await Metadata.findMany(connection, { creators: storeCreators.map(sc => sc.data.address) });
```
