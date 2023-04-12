---
description: "Provides a high-level overview of Candy Machines."
---

# Overview

:::info
This documentation refers to the latest iteration of Candy Machine known as Candy Machine V3. If you’re looking for Candy Machine V2, [please refer to this documentation instead](/deprecated/candy-machine-v2/).
:::

## Introduction

The Metaplex Protocol **Candy Machine** is the leading minting and distribution program for fair NFT collection launches on Solana. It allows creators to bring their digital assets on-chain in a secure and customisable way.

By September 2022, 78% of all NFTs in Solana were minted through Metaplex’s Candy Machine. This includes most of the well known NFT projects in the Solana ecosystem.

Here are some of the features it offers.

- Accept payments in SOL, NFTs or any Solana token.
- Restrict your launch via start/end dates, mint limits, third party signers, etc.
- Protect your launch against bots via configurable bot taxes and gatekeepers like Captchas.
- Restrict minting to specific NFT/Token holders or to a curated list of wallets.
- Create multiple minting groups with different sets of rules.
- Reveal your NFTs after the launch whilst allowing your users to verify that information.
- And so much more!

Interested? Let’s give you a little tour of how Candy Machines work!

## The Lifecycle of a Candy Machine

Much like its name suggests, you can think of a Candy Machine as a temporary structure which is first loaded by creators and then unloaded by buyers.

Thus, the very first step is for the creator to create a new Candy Machine and configure it however they want.

![Candy Machines V3 - Overview 1@2x.png](/assets/candy-machine-v3/CandyMachinesV3-Overview1.png#radius)

The created Candy Machine keeps track its own settings which helps us understand how all of its NFTs should be minted. For instance, there is a `creators` parameter which will be assigned to all NFTs minted from this Candy Machine. We will see how to create and configure Candy Machines in more details, including some code examples, in the following pages: [Candy Machine Settings](/programs/candy-machine/candy-machine-settings) and [Managing Candy Machines](/programs/candy-machine/managing-candy-machines).

However, we still don’t know which NFTs should be minted from that Candy Machine. In other words, the Candy Machine is not loaded. So our next step, is to insert items into the Candy Machine.

![Candy Machines V3 - Overview 2@2x.png](/assets/candy-machine-v3/CandyMachinesV3-Overview2.png#radius)

Each item is composed of two parameters:

- A `name`: The name of the NFT.
- A `uri`: The URI pointing to the [JSON metadata](https://docs.metaplex.com/programs/token-metadata/overview#a-json-standard) of the NFT. This implies that the JSON metadata has already been uploaded via either an on-chain (e.g. Arweave, IPFS) or off-chain (e.g. AWS, your own server) storage provider.

All other parameters are shared between all NFTs and are therefore kept in the settings of the Candy Machine directly to avoid repetition. See [Inserting Items](/programs/candy-machine/inserting-items) for more details.

Notice how, at this point, no real NFTs have been created yet. We are simply loading the Candy Machine with all the data it needs to **create NFTs on-demand**, at mint time. Which brings us to the next step.

![Candy Machines V3 - Overview 3@2x.png](/assets/candy-machine-v3/CandyMachinesV3-Overview3.png#radius)

Once the Candy Machine is loaded and all pre-configured conditions are met, users can start minting NFTs from it. It’s only at this point that an NFT is created on the Solana blockchain. Note that, before minting, some users may need to perform additional verification steps — such as doing a Captcha or sending a Merkle Proof. See [Minting](/programs/candy-machine/minting) for more details.

Once all NFTs have been minted from a Candy Machine, it has served its purpose and can safely be deleted to free some storage space on the blockchain and claim some rent back. See [Managing Candy Machines](/programs/candy-machine/managing-candy-machines) for more details.

![Candy Machines V3 - Overview 4@2x.png](/assets/candy-machine-v3/CandyMachinesV3-Overview4.png#radius)

## Candy Guards

Now that we understand how Candy Machines work, let’s dig into the various ways creators can protect and customise the mint process of their Candy Machine.

Creators can use what we call “**Guards**” to add various features to their Candy Machine. The Metaplex Candy Machine ships with an additional Solana Program called **Candy Guard** that ships with [**a total of 16 default guards**](/programs/candy-machine/available-guards). By using an additional program, it allows advanced developers to fork the default Candy Guard program to create their own custom guards whilst still being able to rely on the main Candy Machine program.

Each guard can be enabled and configured at will so creators can pick and choose the features they need. Disabling all guards would be equivalent to allowing anyone to mint our NFTs for free at any time, which is likely not what we want. So let’s have a look at a few guards to create a more realistic example.

Say a Candy Machine has the following guards:

- **Sol Payment**: This guard ensures the minting wallet has to pay a configured amount of SOL to a configured destination wallet.
- **Start Date**: This guard ensures minting can only start after the configured time.
- **Mint Limit**: This guard ensures each wallet cannot mint more than a configured amount.
- **Bot Tax**: This guard is a bit special. It doesn’t guard against anything but it changes the behaviour of a failed mint to prevent bots from minting Candy Machines. When this guard is activated, if any other activated guard fails to validate the mint, it will charge a small configured amount of SOL to the wallet that tried to mint.

What we end up with is a bot-protected Candy Machine that charges SOL, launches at a specific time and only allows a limited amount of mints per wallet. Here’s a concrete example.

![Candy Machines V3 - Overview 5@2x.png](/assets/candy-machine-v3/CandyMachinesV3-Overview5.png#radius)

As you can see, with more than 16 default guards and the ability to create custom guards, it enables creators to cherry-pick the features that matters to them and compose their perfect Candy Machine. This is such a powerful feature that we’ve dedicated many pages to it. The best place to start to know more about guards is the [Candy Guards](/programs/candy-machine/candy-guards) page.

## Next steps

Whilst this provides a good overview of Candy Machines, there is a lot more to discover and learn about them. Here’s what you can expect in the other pages of this Candy Machine documentation.

- [Getting Started](/programs/candy-machine/getting-started). Lists the various libraries and SDKs you can use to manage Candy Machines.
- [Candy Machine Settings](/programs/candy-machine/candy-machine-settings). Explains Candy Machine settings in great detail.
- [Managing Candy Machines](/programs/candy-machine/managing-candy-machines). Explains how to manage Candy Machines.
- [Inserting Items](/programs/candy-machine/inserting-items). Explains how to load items into Candy Machines.
- [Candy Guards](/programs/candy-machine/candy-guards). Explains how guards work and how to enable them.
- [Guard Groups](/programs/candy-machine/guard-groups). Explains how to configure multiple groups of guards.
- [Special Guard Instructions](/programs/candy-machine/special-guard-instructions). Explains how to execute guard-specific instructions.
- [Minting](/programs/candy-machine/minting). Explains how to mint from Candy Machines and how to handle pre-mint requirements.
- [Available Guards](/programs/candy-machine/available-guards). Lists all available default guards.
- [How-To Guides](/programs/candy-machine/how-to-guides). Lists practical articles relevant to Candy Machines.
- [Conceptual Guides](/programs/candy-machine/conceptual-guides). Lists theoretical articles relevant to Candy Machines.
- [References](/programs/candy-machine/references). Lists API References relevant to Candy Machines.
- [Updates](/programs/candy-machine/updates). Documents the latest changes.
