# Introduction

The second iteration of the well-known Candy Machine, a fully on-chain generative NFT distribution program, provides many improvements over its predecessor. The new version also allows you to create a whole new set of distribution scenarios and offers protection from bot attacks, while providing the same easy-to-use experience.

:::info

 Throughout this guide, we will refer to the Candy Machine v1 as `CMv1` and the newer Candy Machine v2 as `CMv2`

:::
## New Features

- ***Unpredictable mint index:*** In the `CMv1` it is possible to estimate what item would be minted, since the mint happens in a sequential order. This created the opportunity to be able to choose which item to mint, given that all information about the items is available on-chain. Although this is not straightforward, it gives an advantage to a select few.

    The `CMv2` eliminates this possibility by using an unpredictable (sort of random) mint index, which it is not possible to determine in advance - a guarantee of a level playing field when it comes to minting rarer items.

- ***Whitelist:*** You now have the possibility to create several different configurations for whitelists. You can allow whitelist users to mint before the start date, mint at a discounted price, or restrict the mint entirely to only whitelist users. Any SPL Token can be used to create whitelists and you choose how they are distributed.

- ***Captcha Settings:*** Integration with captcha to limit the mint to humans - sorry, bots no more!

- ***Larger collections and hide-and-reveal drops:*** It is possible to create super large and hide-and-reveal drops by specifying a single hash, which is used by all mints. While the hash is the same across all mints, the name of each item is specified with a unique number, allowing an off-chain process to later update the metadata with the actual item.

There are also improvements to how you configure the Candy Machine and new settings that allow the definition of rules to pause the mint at a certain point. On top of it, every configuration value can be updated at any point.