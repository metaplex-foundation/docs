---
sidebar_position: 5
label: "Environmental variables"
---

# Environmental variables
- `ENTRY` - (`mongo-server`, `mongo-ingester`, `memory-server-ingester`, `generate`) starting the application with different roles using one entry point
- `PORT` - (default: `4000`) - port for graphql server
- `MONGO_DB` - using only for `mongo` mode. The connection string to MongoDB
- `NETWORK` - (`devnet`, `testnet`, `mainnet-beta`) by default app caches all networks, but we can specify one of them to use.
