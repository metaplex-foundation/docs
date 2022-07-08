# Getting Started

Like any Solana program, one can interact with the Token Metadata program by sending UDP packets to the network or by using the API provided by RPC nodes. However, this is not a great developer experience and, as such, this page aims to help you get started with the Token Metadata program in a much more developer-friendly way.

## JavaScript SDK

When developing for the web or using [Node.js](https://nodejs.org/en/), one of the easiest ways to interact with the Token Metadata program — and other Metaplex programs — is to use our new JavaScript SDK.

It not only provides a great API to interact with programs but also abstracts away some of the pain points we have to deal with when interacting with the Solana blockchain. For instance, it encapsulates who is using the SDK via Identity Drivers and which storage provider we should use via Storage Drivers. On top of that, the SDK was built with modularity in mind so one can easily inject plugins and modules to extend its feature set.

**The main module that interacts with the Token Metadata program is the [NFT module](https://github.com/metaplex-foundation/js-next#nfts)**. It is composed of several methods that focus on real use cases to make our life easier. Here are some of them.

```ts
metaplex.nfts().findByMint(mint);
metaplex.nfts().findAllByMintList(mints);
metaplex.nfts().findAllByOwner(owner);
metaplex.nfts().findAllByCreator(creator, position);
metaplex.nfts().findAllByCandyMachine(candyMachine);
metaplex.nfts().uploadMetadata(metadata);
metaplex.nfts().create(onChainData);
metaplex.nfts().update(nft, onChainData);
metaplex.nfts().printNewEdition(originalMint, params);
```

Note that this SDK is fairly new and we are planning on adding more methods, modules and plugins in the future. For now, the entire documentation is written in the README of the GitHub repository. We will be writing more content as we go until the SDK is mature enough to have its own folder in this documentation.

🔗 **Helpful links:**

- [GitHub repository](https://github.com/metaplex-foundation/js-next)
- [Repository of examples using the JS SDK](https://github.com/metaplex-foundation/js-examples)
- [NPM package](https://www.npmjs.com/package/@metaplex-foundation/js-next)

## Auto-generated JavaScript library

Another way to interact with the Token Metadata program is to use its auto-generated JavaScript library. Whenever the program (written in Rust) gets updated and published, the library gets regenerated to match the latest version of the program. Note that this is what the JavaScript SDK mentioned above uses under the hood to interact with the program.

Therefore, these auto-generated libraries can be used by more advanced developers who wish to interact with the program at a lower level, i.e. by preparing instructions and sending transactions directly.

🔗 **Helpful links:**

- [GitHub repository](https://github.com/metaplex-foundation/metaplex-program-library/tree/master/token-metadata/js)
- [NPM package](https://www.npmjs.com/package/@metaplex-foundation/mpl-token-metadata)
- [API references](https://metaplex-foundation.github.io/metaplex-program-library/docs/token-metadata/index.html)

## Rust crate

If you are a Rust developer, you can also use a Rust crate to interact with the Token Metadata program. Since the program is written in Rust, this crate contains all of the program's logic, including helper methods that prepare instructions for us.

This can be helpful if you are developing a Rust client or if you want to make [CPI calls](https://solanacookbook.com/references/programs.html#how-to-do-cross-program-invocation) to the Token Metadata program within your program.

🔗 **Helpful links:**

- [GitHub repository](https://github.com/metaplex-foundation/metaplex-program-library/tree/master/token-metadata/program)
- [Crate page](https://crates.io/crates/mpl-token-metadata)
- [API references](https://docs.rs/mpl-token-metadata/latest/mpl_token_metadata/)
