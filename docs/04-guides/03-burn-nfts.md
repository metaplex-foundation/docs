---
sidebar_label: "How to burn NFTs"
---

# How to burn NFTs


## What is burning?
Completely destroying a Token/NFT is called burning. Burning will destroy the whole token and close the corresponding accounts. This results in
- The NFT being eliminated from the blockchain
- while the transactions around it obviously remain in the blockchain history
- giving you back some SOL that was reserved for account rent

## How to burn as a user?
To burn NFTs different calls can be done depending on which kind of NFTs you are using. You can not just burn it like a SPL token. This would not close all the token accounts required. Normal NFTs can be burned through the [`BurnNft` instruction](/programs/token-metadata/instructions#burn-a-nft). Editions require a different instruction which is currently being built. There are multiple options for you how to burn NFTs:

* **Web based tools**: there are web based tools created by the community which allow you to connect your wallet and burn NFTs like [sol-incinerator.com](https://www.sol-incinerator.com/).
* **Wallets**: Some wallets like Solflare allow you to directly burn a NFT in your wallet by choosing the NFT and clicking something like `close`
* **[Metaboss](https://metaboss.rs/burn.html)**: Metaboss is a CLI tool primarily targeted at developers which has a `burn` function. You can either burn a single NFT or burn a [list of NFTs](https://metaboss.rs/burn.html#burn-all).
Assumed that you have metaboss installed already you just have to run `metaboss burn one -k <OWNER_KEYPAIR> --account <MINT_ACCOUNT>` where `<OWNER_KEYPAIR>` is the path to your filesystem wallet and `<MINT_ACCOUNT>`the NFTs address.


## How to burn as a developer? 
* **[JS SDK](https://github.com/metaplex-foundation/js)**: The `@metaplex-foundation/js` SDK has a `delete()` function which can currently burn NFTs and soon also Editions. A simple NFT can burned like like shown in the following example. Depending on some conditions, like if it is part of a sized collection [some additional parameters](https://github.com/metaplex-foundation/js/blob/main/packages/js/src/plugins/nftModule/operations/deleteNft.ts#L45) have to be used.
```ts
import { Metaplex } from "@metaplex-foundation/js";
import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
const connection = new Connection(clusterApiUrl("devnet"));
const mx = Metaplex.make(connection);
const mintAddress = new PublicKey(address);
    const parameters = {
      mintAddress : mintAddress
    }
 mx.nfts().delete(parameters).run();
```

* **[Auto-generated JavaScript library](https://github.com/metaplex-foundation/metaplex-program-library/tree/master/token-metadata/js)**: There is also the auto-generated js package `@metaplex-foundation/mpl-token-metadata` which contains the [instructions](https://metaplex-foundation.github.io/metaplex-program-library/docs/token-metadata/index.html#createBurnNftInstruction) to burn NFTs.. This can technically be used, we advise to use the `@metaplex-foundation/js` package where possible though.
* **[Token Metadata Rust crate](https://crates.io/crates/mpl-token-metadata)**: If you want to work with Rust the [mpl-token-metadata](https://crates.io/crates/mpl-token-metadata) rust crate also contains the instructions [`burn_nft`](https://docs.rs/mpl-token-metadata/latest/mpl_token_metadata/instruction/fn.burn_nft.html) and ['burn_edition_nft'](https://docs.rs/mpl-token-metadata/latest/mpl_token_metadata/instruction/fn.burn_edition_nft.html).