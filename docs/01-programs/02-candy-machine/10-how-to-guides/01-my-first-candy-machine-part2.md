---
description: "Shows how to create a basic mint page with Metaplex JS SDK"
---

import { Accordion, AccordionItem } from '/src/accordion.jsx';
import { AccordionCode } from '/src/accordion-code.jsx';

# How to create a Candy Machine v3 - Part 2 (JS SDK)
In this Guide, we will show you how to leverage the [Metaplex JS SDK](https://github.com/metaplex-foundation/js) to create a simple mint page to allow your users to mint from your Candy Machine v3. This will give you all the information to build that page by yourself given you have some web development experience.

## Prerequisite Knowledge

- You should have a basic understanding of how to find and use a terminal on your OS, including navigating directories, and running commands: an example of a terminal for macOS is [iTerm2](https://iterm2.com/).
- You should have basic familiarity with what Solana is but don't need advanced technical knowledge.
- You should have basic familiarity with the Metaplex Standard but, again, do not need advanced technical knowledge.
- You should have some experience with Web Development to fully leverage the Information provided in this tutorial.

## Install Node.js, NPM
Even though you will not necessarily have to use NPM to build a mint page we will use it in this tutorial since it is based on the [Metaplex JS SDK](https://github.com/metaplex-foundation/js). Following these steps is only required if you do not have Node.js already installed.

<Accordion>
<AccordionItem title="macOS & Linux" open={false}>
For Linux and Mac, it's best to use the node version manager (nvm). Run the install script:

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash
```
Then set it to use the current version:
```
nvm install --lts
```

</AccordionItem>
</Accordion>
<Accordion>
<AccordionItem title="Windows" open={false}>

1. Open PowerShell
2. run:
```
winget install CoreyButler.NVMforWindows
```
3. Restart PowerShell as Administrator
4. run:
```
nvm install lts
```

</AccordionItem>
</Accordion>

## Clone metaplex-foundation/js-examples
As a foundation, we will be using the metaplex-foundation/js-examples repository which contains multiple examples of how to use the JS SDK.

1. clone https://github.com/metaplex-foundation/js-examples
2. `cd connect-wallet` run `npm install`
3. `npm run dev` to test if it runs
4. 

*Coming soon…*

This page is not ready yet but we’re working hard on documenting it. Check back a bit later.

In the meantime, you can learn more about Candy Machine V3 minting via the [minting documentation](../minting)

Thank you!
