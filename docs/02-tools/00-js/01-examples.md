# Examples

## Wallet

```ts
import { getPhantomWallet } from "@solana/wallet-adapter-wallets";

// Connect wallet in browser
const wallet = getPhantomWallet();
const adapter = wallet.adapter();
await adapter.connect();

// Get wallet balance in LAMPORTS
const balance = await connection.getBalance(adapter.publicKey);
```

## Store

```ts
// Init store
const { storeId } = await actions.initStore({
  connection,
  wallet,
});

// Get existing store id
const storeId = await Store.getPDA(publicKey as AnyPublicKey);
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

// Get bidder metadata(i.e. to display bids)
const bidderMetadata = await Promise.all(
  auctions.map((a) => a.getBidderMetadata(connection))
);

// Watch auction changes(i.e. new bids)
const auctionKey = new PublicKey(
  "7C4jsPZpht42Tw6MjXWF56Q5RQUocjBBmciEjDa8HRtp"
);
connection.onAccountChange(auctionKey, async (data) => {
  const auction = new Auction(auctionKey, data);
});
```

## Vaults

Getting auction vaults:

```ts
// Get auction vault
const vaults = await Promise.all(
  auctionManagers.map((am) => Vault.load(connection, am.data.vault))
);

// Get safety deposit boxes
const safetyDepositBoxes = await Promise.all(
  vaults.map((v) => v.getSafetyDepositBoxes(connection))
);
```

## Metadata

Getting store metadata:

```ts
// Load store
const store = await Store.load(connection, storeId);

// Get all whitelisted creators
const creators = await store.getWhitelistedCreators(connection);

// Get creator PDA addresses
const creatorPDAs = await Promise.all(
  creators.map((creator) =>
    WhitelistedCreator.getPDA(store.pubkey, creator.data.address)
  )
);

// Filter store creators
const storeCreators = creators.filter(
  (creator, index) =>
    creatorPDAs[index].toBase58() === creator.pubkey.toBase58()
);

// Get store metadata
const storeMetadata = await Metadata.findMany(connection, {
  creators: storeCreators.map((sc) => sc.data.address),
});
```
