---
description: "Lists the various libraries and SDKs you can use to manage Candy Machines."
---

# Getting Started

This page aims to help you get started with Candy Machines by listing all relevant SDKs and libraries that interact with them.

## SDKs

SDKs are the most developer-friendly way to interact with Metaplex programs. They provide layers of abstractions that match the mental model of this documentation. On top of that, they offer various helper modules and can be extended via plugins.

### JavaScript SDK

If you are developing for the web or using [Node.js](https://nodejs.org/en/), then our JavaScript SDK is a great way to interact with Metaplex programs. [You can read more about it here](https://github.com/metaplex-foundation/js#metaplex-javascript-sdk).

Once the JS SDK installed, you can access its Candy Machine module via `metaplex.candyMachines()`. It is composed of several methods that focus on real use-cases to make our life easier. Here are some of them.

```tsx
metaplex.candyMachines().create();
metaplex.candyMachines().update();
metaplex.candyMachines().insertItems();
metaplex.candyMachines().delete();
metaplex.candyMachines().mint();
metaplex.candyMachines().findByAddress();
metaplex.candyMachines().callGuardRoute();
```

Note that the rest of this documentation will provide code examples using this JavaScript SDK.

🔗 **Helpful Links:**

- [GitHub Repository](https://github.com/metaplex-foundation/js)
- [NPM Package](https://www.npmjs.com/package/@metaplex-foundation/js)
- [API References](https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html)

### Swift SDK

*Coming soon.*

### Kotlin SDK

*Coming soon.*

## Program Libraries

Program Libraries are auto-generated from the Program’s IDL using [Solita](https://github.com/metaplex-foundation/solita). Whilst they require you to [understand Solana programs](/programs/understanding-programs) and wire your own instructions, they have the advantage of immediately using the latest features when SDKs might take a bit longer to implement them.

Note that Candy Machine is composed of the following two programs which means you will need one library for each of them.

- **Candy Machine Core**: The main program that allows managing Candy Machines and minting without guards.
- **Candy Guard**: The default Candy Guard program that ships with a large selection of guards to chose from.

### JavaScript Program Libraries

- **Candy Machine Core**
    - [GitHub Repository](https://github.com/metaplex-foundation/metaplex-program-library/tree/master/candy-machine-core/js)
    - [NPM Package](https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-machine-core)
    - API References
- **Candy Guard**
    - [GitHub Repository](https://github.com/metaplex-foundation/mpl-candy-guard/tree/main/js)
    - [NPM Package](https://www.npmjs.com/package/@metaplex-foundation/mpl-candy-guard)
    - API References

### Swift Program Libraries

*Coming soon.*

### Kotlin Program Libraries

*Coming soon.*

## Rust Crates

If you are developing in Rust, you can also use the Rust crates to interact with Metaplex’s programs. Since our programs are written in Rust, theses crates should contain everything you need to parse accounts and build instructions.

This can be helpful when developing Rust clients but also when making [CPI calls](https://solanacookbook.com/references/programs.html#how-to-do-cross-program-invocation) to Metaplex programs within your own program.

- **Candy Machine Core**
    - [GitHub Repository](https://github.com/metaplex-foundation/metaplex-program-library/tree/master/candy-machine-core/program)
    - [Crate Page](https://crates.io/crates/mpl-candy-machine-core)
    - [API References](https://docs.rs/mpl-candy-machine-core/0.1.0/mpl_candy_machine_core/)
- **Candy Guard**
    - [GitHub Repository](https://github.com/metaplex-foundation/mpl-candy-guard)
    - [Crate Page](https://crates.io/crates/mpl-candy-guard)
    - [API References](https://docs.rs/mpl-candy-guard/0.1.0/mpl_candy_guard/)
