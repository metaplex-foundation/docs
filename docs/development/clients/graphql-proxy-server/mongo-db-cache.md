---
sidebar_position: 3
label: "MongoDb cache"
---

# MongoDb cache
MongoDb cache layer much better than in-memory solution, because of API server doesn't depend on ingester process.
There are 3 services in this mode.
- mongo: the instance of MongoDB for caching layer
- ingester: the process which fills Database layer
- server: graphql server, which is available at [http://localhost:4000/](http://localhost:4000/)

```
┌──────────┐    ┌─────────┐    ┌────────────────┐
│ ingester │--->│ MongoDB │<---│ GraphQL server │
└──────────┘    └─────────┘    └────────────────┘
     │        ┌───────────────────────┐     │
     └────────│ Metaplex/Solana data  │─────┘
              │ over http / websocket │
              └───────────────────────┘
```

## Requirements {#requirements}

- [Node.js](https://nodejs.org/en/download/) version >= 14.17.0 or above (which can be checked by running `node -v`). You can use [nvm](https://github.com/nvm-sh/nvm) for managing multiple Node versions on a single machine installed.
- [Yarn](https://yarnpkg.com/en/). Yarn is a performant package manager for JavaScript and replaces the `npm` client.
- [MongoDb](https://www.mongodb.com/). MongoDB’s document data model naturally supports JSON and its expressive query language is simple for developers to learn and use. Functionality such as automatic failover, horizontal scaling, and the ability to assign data to a location are built-in.


You have to start mongo instance. For local development to run this command will be enough.
```sh
mongod
```
Also we need to start the process that fill the database with data.
```sh
yarn start:mongo:ingester
```

And our graphql-server is started with
```sh
yarn start:mongo:server
```
