"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9226],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=d(n),p=i,h=c["".concat(l,".").concat(p)]||c[p]||u[p]||r;return n?a.createElement(h,o(o({ref:t},m),{},{components:n})):a.createElement(h,o({ref:t},m))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return s},U:function(){return o}});var a=n(67294),i=n(45697),r=n.n(i);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function s(e){let{open:t,title:n,actions:i,keepAlive:r=!0,children:o}=e;const[s,d]=(0,a.useState)(t),m=s||r;return a.createElement("div",{className:["accordion-item",s?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>d(!s)},a.createElement("h3",null,a.createElement(l,{opened:s}),a.createElement("span",null,n)),i),a.createElement("div",{className:"accordion-item-content"},m&&o))}function l(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:r().any},s.propTypes={open:r().bool,title:r().string,children:r().any,actions:r().any,keepAlive:r().bool},l.propTypes={opened:r().bool}},92581:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return m}});var a=n(83117),i=(n(67294),n(3905)),r=n(38545);const o={description:"Explains how to mint from Candy Machines and how to handle pre-mint requirements."},s="Minting",l={unversionedId:"programs/candy-machine/minting",id:"programs/candy-machine/minting",title:"Minting",description:"Explains how to mint from Candy Machines and how to handle pre-mint requirements.",source:"@site/docs/01-programs/02-candy-machine/08-minting.md",sourceDirName:"01-programs/02-candy-machine",slug:"/programs/candy-machine/minting",permalink:"/programs/candy-machine/minting",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/08-minting.md",tags:[],version:"current",lastUpdatedAt:1684777e3,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:8,frontMatter:{description:"Explains how to mint from Candy Machines and how to handle pre-mint requirements."},sidebar:"sidebar",previous:{title:"Special Guard Instructions",permalink:"/programs/candy-machine/special-guard-instructions"},next:{title:"Programmable NFTs",permalink:"/programs/candy-machine/programmable-nfts"}},d={},m=[{value:"Introduction",id:"introduction",level:2},{value:"Basic Minting",id:"basic-minting",level:2},{value:"Minting With Guards",id:"minting-with-guards",level:2},{value:"Minting With Guard Groups",id:"minting-with-guard-groups",level:2},{value:"Minting With Pre-Validation",id:"minting-with-pre-validation",level:2},{value:"Using the route instruction",id:"using-the-route-instruction",level:3},{value:"Using external services",id:"using-external-services",level:3},{value:"Minting With Bot Taxes",id:"minting-with-bot-taxes",level:2},{value:"Conclusion",id:"conclusion",level:2}],u={toc:m};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"minting"},"Minting"),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"So far, we\u2019ve learned how to create and maintain Candy Machines. We\u2019ve seen how to configure them and how to set up complex minting workflows using guard and guard groups. It\u2019s about time we talk about the last piece of the puzzle: Minting!"),(0,i.kt)("h2",{id:"basic-minting"},"Basic Minting"),(0,i.kt)("p",null,"As mentioned ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-guards#why-another-program"},"in the Candy Guards page"),", there are two programs responsible for minting NFTs from Candy Machines: The Candy Machine Core program \u2014 responsible for minting the NFT \u2014 and the Candy Guard program which adds a configurable Access Control layer on top of it and can be forked to offer custom guards."),(0,i.kt)("p",null,"As such, there are two ways to mint from a Candy Machine:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"From a Candy Guard program")," which will then delegate the minting to the Candy Machine Core program. Most of the time, you will want to do this as it allows for much more complex minting workflows. You may need to pass extra remaining accounts and instruction data to the mint instruction based on the guards configured in the account. Fortunately, our SDKs make this easy by requiring a few extra parameters and computing the rest for us.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"Directly from the Candy Machine Core program"),". In this case, only the configured mint authority can mint from it and, therefore, it will need to sign the transaction."))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CandyMachinesV3-Minting1.png",src:n(79999).Z+"#radius",width:"2472",height:"1226"})),(0,i.kt)("p",null,"If everything went well, an NFT will be created following the parameters configured in the Candy Machine. For instance, if the given Candy Machine uses ",(0,i.kt)("strong",{parentName:"p"},"Config Line Settings")," with ",(0,i.kt)("strong",{parentName:"p"},"Is Sequential")," set to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", then we will get the next item at random."),(0,i.kt)("p",null,"Starting from version ",(0,i.kt)("inlineCode",{parentName:"p"},"1.0")," of the Candy Guard program, The mint instruction accepts an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"minter")," signer which can be different than the existing ",(0,i.kt)("inlineCode",{parentName:"p"},"payer")," signer. This allows us to create minting workflows where the wallet that mints the NFT is no longer requires to pay SOL fees \u2014 such as storage fees and SOL mint payments \u2014 as the ",(0,i.kt)("inlineCode",{parentName:"p"},"payer")," signer will abstract away those fees. Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"minter")," signer will still need to pay for token-based fees and will be used to validate the configured guards."),(0,i.kt)("p",null,"Please note that the latest mint instruction relies on the latest Token Metadata instructions which use a fair amount of compute units. As such, you may need to increase the compute unit limit of the transaction to ensure it is successful. Our SDKs may also help with this."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"To mint from a Candy Machine via a configured Candy Guard account, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mintV2")," function and provide the mint address and update authority of the collection NFT the minted NFT will belong to. A ",(0,i.kt)("inlineCode",{parentName:"p"},"minter")," signer and ",(0,i.kt)("inlineCode",{parentName:"p"},"payer")," signer may also be provided but they will default to Umi's identity and payer respectively."),(0,i.kt)("p",null,"As mentioned above, you may need to increase the compute unit limit of the transaction to ensure the ",(0,i.kt)("inlineCode",{parentName:"p"},"mintV2")," instruction is successful. You may do this by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"setComputeUnitLimit")," helper function on the ",(0,i.kt)("inlineCode",{parentName:"p"},"mpl-essentials")," Umi library as illustrated in the code snippet below."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { mintV2 } from "@metaplex-foundation/mpl-candy-machine";\nimport { setComputeUnitLimit } from "@metaplex-foundation/mpl-essentials";\nimport { transactionBuilder, generateSigner } from "@metaplex-foundation/umi";\n\nconst nftMint = generateSigner(umi);\nawait transactionBuilder()\n  .add(setComputeUnitLimit(umi, { units: 800_000 }))\n  .add(\n    mintV2(umi, {\n      candyMachine: candyMachine.publicKey,\n      nftMint,\n      collectionMint: collectionNft.publicKey,\n      collectionUpdateAuthority: collectionNft.metadata.updateAuthority,\n    })\n  )\n  .sendAndConfirm(umi);\n')),(0,i.kt)("p",null,"Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"mintV2")," instruction takes care of creating the Mint and Token accounts for us by default and will set the NFT owner to the ",(0,i.kt)("inlineCode",{parentName:"p"},"minter"),". If you wish to create these yourself beforehand, you may simply give the NFT mind address as a public key instead of a signer. Here's an example using the ",(0,i.kt)("inlineCode",{parentName:"p"},"createMintWithAssociatedToken")," function from the ",(0,i.kt)("inlineCode",{parentName:"p"},"mpl-essentials")," Umi library:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { mintV2 } from "@metaplex-foundation/mpl-candy-machine";\nimport {\n  createMintWithAssociatedToken,\n  setComputeUnitLimit,\n} from "@metaplex-foundation/mpl-essentials";\nimport { transactionBuilder, generateSigner } from "@metaplex-foundation/umi";\n\nconst nftMint = generateSigner(umi);\nconst nftOwner = generateSigner(umi).publicKey;\nawait transactionBuilder()\n  .add(setComputeUnitLimit(umi, { units: 800_000 }))\n  .add(createMintWithAssociatedToken(umi, { mint: nftMint, owner: nftOwner }))\n  .add(\n    mintV2(umi, {\n      candyMachine: candyMachine.publicKey,\n      nftMint: nftMint.publicKey,\n      collectionMint: collectionNft.publicKey,\n      collectionUpdateAuthority: collectionNft.metadata.updateAuthority,\n    })\n  )\n  .sendAndConfirm(umi);\n')),(0,i.kt)("p",null,"In the rare event that you wish to mint directly from the Candy Machine Core program, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mintFromCandyMachineV2")," function instead. This function requires the mint authority of the candy machine to be provided as a signer and accepts an explicit ",(0,i.kt)("inlineCode",{parentName:"p"},"nftOwner")," attribute."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { mintFromCandyMachineV2 } from "@metaplex-foundation/mpl-candy-machine";\nimport { setComputeUnitLimit } from "@metaplex-foundation/mpl-essentials";\nimport { transactionBuilder, generateSigner } from "@metaplex-foundation/umi";\n\nconst nftMint = generateSigner(umi);\nconst nftOwner = generateSigner(umi).publicKey;\nawait transactionBuilder()\n  .add(setComputeUnitLimit(umi, { units: 800_000 }))\n  .add(\n    mintFromCandyMachineV2(umi, {\n      candyMachine: candyMachine.publicKey,\n      mintAuthority: umi.identity,\n      nftOwner,\n      nftMint,\n      collectionMint: collectionNft.publicKey,\n      collectionUpdateAuthority: collectionNft.metadata.updateAuthority,\n    })\n  )\n  .sendAndConfirm(umi);\n')),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html"},"mintV2"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/mintFromCandyMachineV2.html"},"mintFromCandyMachineV2")))),(0,i.kt)(r.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The JS SDK is only compatible with Candy Machine V3 accounts whose account version is 1. That means, it does not support minting programmable NFTs and it is not compatible with Candy Machines created with the latest version of ",(0,i.kt)("a",{parentName:"p",href:"/developer-tools/sugar/overview/introduction"},"Sugar"),"."),(0,i.kt)("p",{parentName:"admonition"},"You may consider ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/getting-started#umi-library-recommended"},"using the Umi library")," instead which supports all account versions of Candy Machine V3. Alternatively, you may downgrade you Sugar version to ",(0,i.kt)("inlineCode",{parentName:"p"},"2.0.0")," or use the Solita-generated library."),(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/programmable-nfts"},"Programmable NFTs")," for more details.")),(0,i.kt)("p",null,"To mint via the JS SDK, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mint")," operation of the Candy Machine module.\nThe minimum required arguments are the ",(0,i.kt)("inlineCode",{parentName:"p"},"candyMachine")," model (or a subset of it) and the address of the ",(0,i.kt)("inlineCode",{parentName:"p"},"collectionUpdateAuthority"),". The reason we need the latter is that this information does not live in the ",(0,i.kt)("inlineCode",{parentName:"p"},"candyMachine")," model and it is required by the underlying mint instructions."),(0,i.kt)("p",null,"The JS SDK will know which program to interact with based on whether a Candy Guard account was created for the provided Candy Machine. It will also fetch most of the mint parameters from the candy guard data in the provided Candy Machine model."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"mint")," operation will, if everything went well, fetch and return the newly minted NFT."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const { nft } = await metaplex.candyMachines().mint({\n  candyMachine,\n  collectionUpdateAuthority,\n});\n")),(0,i.kt)("p",null,"By default, both the payer and the owner of the minted NFT will be set to the current identity. You may change either of these via the ",(0,i.kt)("inlineCode",{parentName:"p"},"payer")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"owner")," attributes respectively."),(0,i.kt)("p",null,"Note that, since the ",(0,i.kt)("inlineCode",{parentName:"p"},"payer")," attribute is used in every single operation, it must be provided within the ",(0,i.kt)("inlineCode",{parentName:"p"},"OperationOptions")," which are set in the second argument. It must also be passed as a signer since it needs to authorize the transaction."),(0,i.kt)("p",null,"Here\u2019s an example of how to mint using a custom payer and owner."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Keypair } from "@solana/web3.js";\n\nconst customPayer = Keypair.generate();\nconst customOwner = Keypair.generate();\nconst { nft } = await metaplex.candyMachines().mint(\n  {\n    candyMachine,\n    collectionUpdateAuthority,\n    owner: customOwner.publicKey,\n  },\n  {\n    payer: customPayer,\n  }\n);\n')),(0,i.kt)("p",null,"By default, Candy Machines created via the JS SDK will automatically be associated with a Candy Guard account. However, if your Candy Machine is purposefully not using a Candy Guard account, you will need to mint via the configured ",(0,i.kt)("strong",{parentName:"p"},"Mint Authority"),". You may do this in the JS SDK by providing the ",(0,i.kt)("inlineCode",{parentName:"p"},"mintAuthority")," attribute as a signer like so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const { nft } = await metaplex.candyMachines().mint({\n  candyMachine,\n  collectionUpdateAuthority,\n  mintAuthority: candyMachineMintAuthority,\n});\n")),(0,i.kt)("p",null,"There are plenty of other attributes that might be relevant to you so feel free to check them out in the API references."),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint"},"Transaction Builder"),".")))),(0,i.kt)("h2",{id:"minting-with-guards"},"Minting With Guards"),(0,i.kt)("p",null,"When minting from a Candy Machine that uses a bunch of guards, you may need to provide additional guard-specific information."),(0,i.kt)("p",null,"If you were to build the mint instruction manually, that information would be provided as a mixture of instruction data and remaining accounts. However, using our SDKs, each guard that requires additional information at mint time defines a set of settings that we call ",(0,i.kt)("strong",{parentName:"p"},"Mint Settings"),". These Mint Settings will then be parsed into whatever the program needs."),(0,i.kt)("p",null,"A good example of a guard that requires Mint Settings is the ",(0,i.kt)("strong",{parentName:"p"},"NFT Payment")," guard which requires the mint address of the NFT we should use to pay for the mint amongst other things."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CandyMachinesV3-Minting2.png",src:n(77958).Z+"#radius",width:"2472",height:"1128"})),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/available-guards"},"Each available guard")," contains its own documentation page and it will tell you whether or not that guard expects Mint Settings to be provided when minting."),(0,i.kt)("p",null,"If you were to only use guards that do not require Mint Settings, you may mint in the same way described by the \u201cBasic Minting\u201d section above. Otherwise, you\u2019ll need to provide an additional object attribute containing the Mint Settings of all guards that require them. Let\u2019s have a look at what that looks like in practice using our SDKs."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"When minting via the Umi library, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"mintArgs")," attribute to provide the required ",(0,i.kt)("strong",{parentName:"p"},"Mint Settings"),"."),(0,i.kt)("p",null,"Here\u2019s an example using the ",(0,i.kt)("strong",{parentName:"p"},"Third Party Signer")," guard which requires an additional signer and the ",(0,i.kt)("strong",{parentName:"p"},"Mint Limit")," guard which keeps track of how many times a wallet minted from the Candy Machine."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  some,\n  generateSigner,\n  transactionBuilder,\n} from "@metaplex-foundation/umi";\nimport { create, mintV2 } from "@metaplex-foundation/mpl-candy-machine";\nimport { setComputeUnitLimit } from "@metaplex-foundation/mpl-essentials";\n\n// Create a Candy Machine with guards.\nconst thirdPartySigner = generateSigner();\nawait create(umi, {\n  // ...\n  guards: {\n    thirdPartySigner: some({ signer: thirdPartySigner.publicKey }),\n    mintLimit: some({ id: 1, limit: 3 }),\n  },\n}).sendAndConfirm(umi);\n\n// Mint from the Candy Machine.\nconst nftMint = generateSigner(umi);\nawait transactionBuilder()\n  .add(setComputeUnitLimit(umi, { units: 800_000 }))\n  .add(\n    mintV2(umi, {\n      candyMachine: candyMachine.publicKey,\n      nftMint,\n      collectionMint: collectionNft.publicKey,\n      collectionUpdateAuthority: collectionNft.metadata.updateAuthority,\n      mintArgs: {\n        thirdPartySigner: some({ signer: thirdPartySigner }),\n        mintLimit: some({ id: 1 }),\n      },\n    })\n  )\n  .sendAndConfirm(umi);\n')),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html"},"mintV2"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetMintArgs.html"},"DefaultGuardSetMintArgs")))),(0,i.kt)(r.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The JS SDK is only compatible with Candy Machine V3 accounts whose account version is 1. That means, it does not support minting programmable NFTs and it is not compatible with Candy Machines created with the latest version of ",(0,i.kt)("a",{parentName:"p",href:"/developer-tools/sugar/overview/introduction"},"Sugar"),"."),(0,i.kt)("p",{parentName:"admonition"},"You may consider ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/getting-started#umi-library-recommended"},"using the Umi library")," instead which supports all account versions of Candy Machine V3. Alternatively, you may downgrade you Sugar version to ",(0,i.kt)("inlineCode",{parentName:"p"},"2.0.0")," or use the Solita-generated library."),(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/programmable-nfts"},"Programmable NFTs")," for more details.")),(0,i.kt)("p",null,"When minting via the JS SDK, you may use the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," attribute to provide the required ",(0,i.kt)("strong",{parentName:"p"},"Mint Settings"),". The operation will fail if Mint Settings are missing for any guard that requires them."),(0,i.kt)("p",null,"Since the JS SDK requires the whole Candy Machine model and its guard settings to be provided, it can infer most of the mint settings from that model and, therefore, its mint settings object is typically smaller than the other SDKs."),(0,i.kt)("p",null,"Here\u2019s an example using the ",(0,i.kt)("strong",{parentName:"p"},"Third Party Signer")," guard which requires an additional signer and the ",(0,i.kt)("strong",{parentName:"p"},"Mint Limit")," guard which keeps track of how many times a wallet minted from the Candy Machine."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Keypair } from "@solana/web3.js";\n\nconst thirdPartySigner = Keypair.generate();\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    thirdPartySigner: { signer: thirdPartySigner.publicKey },\n    mintLimit: { id: 1, limit: 3 },\n  },\n});\n\nconst { nft } = await metaplex.candyMachines().mint({\n  candyMachine,\n  collectionUpdateAuthority,\n  guards: {\n    thirdPartySigner: { signer: thirdPartySigner },\n  },\n});\n')),(0,i.kt)("p",null,"Notice how, even though the Mint Limit guard requires a PDA to be provided as remaining accounts, we do not need to pass any Mint Settings for that guard because the SDK can infer that information for us."),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint"},"Transaction Builder"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardMintSettings.html"},"Default Mint Settings"),".")))),(0,i.kt)("h2",{id:"minting-with-guard-groups"},"Minting With Guard Groups"),(0,i.kt)("p",null,"When minting from a Candy Machine using guard groups, ",(0,i.kt)("strong",{parentName:"p"},"we must explicitly select which group we want to mint from")," by providing its label."),(0,i.kt)("p",null,"Additionally, Mint Settings may also be required as explained in ",(0,i.kt)("a",{parentName:"p",href:"#minting-with-guards"},"the previous section"),". However, ",(0,i.kt)("strong",{parentName:"p"},"the Mint Settings will apply to the \u201cResolved Guards\u201d of the selected group"),"."),(0,i.kt)("p",null,"For instance, imagine a Candy Machine with the following guards:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Default Guards"),":",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Bot Tax"),(0,i.kt)("li",{parentName:"ul"},"Third Party Signer"),(0,i.kt)("li",{parentName:"ul"},"Start Date"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Group 1"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Label: \u201cnft\u201d"),(0,i.kt)("li",{parentName:"ul"},"Guards:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"NFT Payment"),(0,i.kt)("li",{parentName:"ul"},"Start Date"))))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Group 2"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Label: \u201cpublic\u201d"),(0,i.kt)("li",{parentName:"ul"},"Guards:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Sol Payment")))))),(0,i.kt)("p",null,"The Resolved Guards of Group 1 \u2014 labelled \u201cnft\u201d \u2014 are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bot Tax: from the ",(0,i.kt)("strong",{parentName:"li"},"Default Guards"),"."),(0,i.kt)("li",{parentName:"ul"},"Third Party Signer: from the ",(0,i.kt)("strong",{parentName:"li"},"Default Guards"),"."),(0,i.kt)("li",{parentName:"ul"},"NFT Payment: from ",(0,i.kt)("strong",{parentName:"li"},"Group 1"),"."),(0,i.kt)("li",{parentName:"ul"},"Start Date: from ",(0,i.kt)("strong",{parentName:"li"},"Group 1")," because it overrides the default guard.")),(0,i.kt)("p",null,"Therefore, the provided Mint Settings must be related to these Resolved Guards. In the example above, Mint Settings must be provided for the Third Party Signer guard and the NFT Payment guard."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CandyMachinesV3-Minting3.png",src:n(62707).Z+"#radius",width:"2472",height:"1392"})),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"When minting from a Candy Machine using guard groups, the label of the group we want to select must be provided via the ",(0,i.kt)("inlineCode",{parentName:"p"},"group")," attribute."),(0,i.kt)("p",null,"Additionally, the Mint Settings for the Resolved Guards of that group may be provided via the ",(0,i.kt)("inlineCode",{parentName:"p"},"mintArgs")," attribute."),(0,i.kt)("p",null,"Here is how we would use the Umi library to mint from the example Candy Machine described above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'// Create a Candy Machine with guards.\nconst thirdPartySigner = generateSigner();\nawait create(umi, {\n  // ...\n  guards: {\n    botTax: some({ lamports: sol(0.001), lastInstruction: true }),\n    thirdPartySigner: some({ signer: thirdPartySigner.publicKey }),\n    startDate: some({ date: dateTime("2022-10-18T17:00:00Z") }),\n  },\n  groups: [\n    {\n      label: "nft",\n      guards: {\n        nftPayment: some({ requiredCollection, destination: nftTreasury }),\n        startDate: some({ date: dateTime("2022-10-18T16:00:00Z") }),\n      },\n    },\n    {\n      label: "public",\n      guards: {\n        solPayment: some({ lamports: sol(1), destination: solTreasury }),\n      },\n    },\n  ],\n}).sendAndConfirm(umi);\n\n// Mint from the Candy Machine.\nconst nftMint = generateSigner(umi);\nawait transactionBuilder()\n  .add(setComputeUnitLimit(umi, { units: 800_000 }))\n  .add(\n    mintV2(umi, {\n      candyMachine: candyMachine.publicKey,\n      nftMint,\n      collectionMint: collectionNft.publicKey,\n      collectionUpdateAuthority: collectionNft.metadata.updateAuthority,\n      group: some("nft"),\n      mintArgs: {\n        thirdPartySigner: some({ signer: thirdPartySigner }),\n        nftPayment: some({\n          mint: nftFromRequiredCollection.publicKey,\n          destination: nftTreasury,\n          tokenStandard: TokenStandard.NonFungible,\n        }),\n      },\n    })\n  )\n  .sendAndConfirm(umi);\n')),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html"},"mintV2"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetMintArgs.html"},"DefaultGuardSetMintArgs")))),(0,i.kt)(r.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"The JS SDK is only compatible with Candy Machine V3 accounts whose account version is 1. That means, it does not support minting programmable NFTs and it is not compatible with Candy Machines created with the latest version of ",(0,i.kt)("a",{parentName:"p",href:"/developer-tools/sugar/overview/introduction"},"Sugar"),"."),(0,i.kt)("p",{parentName:"admonition"},"You may consider ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/getting-started#umi-library-recommended"},"using the Umi library")," instead which supports all account versions of Candy Machine V3. Alternatively, you may downgrade you Sugar version to ",(0,i.kt)("inlineCode",{parentName:"p"},"2.0.0")," or use the Solita-generated library."),(0,i.kt)("p",{parentName:"admonition"},"See ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/programmable-nfts"},"Programmable NFTs")," for more details.")),(0,i.kt)("p",null,"When minting from a Candy Machine using guard groups, the label of the group we want to select must be provided via the ",(0,i.kt)("inlineCode",{parentName:"p"},"group")," attribute."),(0,i.kt)("p",null,"Additionally, the Mint Settings for the Resolved Guards of that group may be provided via the ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," attribute."),(0,i.kt)("p",null,"Here is how we would use the JS SDK to mint from the example Candy Machine described above."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Keypair } from "@solana/web3.js";\n\nconst thirdPartySigner = Keypair.generate();\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    botTax: { lamports: sol(0.001), lastInstruction: true },\n    thirdPartySigner: { signer: thirdPartySigner.publicKey },\n    startDate: { date: toDateTime("2022-10-18T17:00:00Z") },\n  },\n  groups: [\n    {\n      label: "nft",\n      guards: {\n        nftPayment: { requiredCollection, destination: nftTreasury },\n        startDate: { date: toDateTime("2022-10-18T16:00:00Z") },\n      },\n    },\n    {\n      label: "public",\n      guards: {\n        solPayment: { amount: sol(1), destination: solTreasury },\n      },\n    },\n  ],\n});\n\nconst { nft } = await metaplex.candyMachines().mint({\n  candyMachine,\n  collectionUpdateAuthority,\n  group: "nft",\n  guards: {\n    thirdPartySigner: { signer: thirdPartySigner },\n    nftPayment: { mint: nftFromRequiredCollection.address },\n  },\n});\n')),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint"},"Transaction Builder"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardMintSettings.html"},"Default Mint Settings"),".")))),(0,i.kt)("h2",{id:"minting-with-pre-validation"},"Minting With Pre-Validation"),(0,i.kt)("p",null,"It is important to note that some guards may require additional verification steps before we can mint from their Candy Machine. This pre-validation step usually creates an account on the blockchain or rewards the wallet with a token that acts as proof of that verification."),(0,i.kt)("h3",{id:"using-the-route-instruction"},"Using the route instruction"),(0,i.kt)("p",null,"One way guards can require a pre-validation step is by using ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/special-guard-instructions"},"their own special instruction")," via the \u201croute\u201d instruction."),(0,i.kt)("p",null,"A good example of that is the ",(0,i.kt)("strong",{parentName:"p"},"Allow List")," guard. When using this guard, we must verify that our wallet belongs to a predefined list of wallets by calling the route instruction and providing a valid Merkle Proof. If this route instruction is successful, it will create an Allow List PDA for that wallet which the mint instruction can then read to validate the Allow List guard. ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/available-guards/allow-list"},"You can read more about the Allow List guard on its dedicated page"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CandyMachinesV3-Minting4.png",src:n(41474).Z+"#radius",width:"2472",height:"1106"})),(0,i.kt)("h3",{id:"using-external-services"},"Using external services"),(0,i.kt)("p",null,"Another way guards may perform that pre-validation step is by relying on an external solution."),(0,i.kt)("p",null,"For instance, when using the ",(0,i.kt)("strong",{parentName:"p"},"Gatekeeper")," guard, we must request a Gateway Token by performing a challenge \u2014 such as completing a Captcha \u2014 which depends on the configured Gatekeeper Network. The Gatekeeper guard will then check for the existence of such Gateway Token to either validate or reject the mint. ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/available-guards/gatekeeper"},"You can learn more about the Gatekeeper guard on its dedicated page"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CandyMachinesV3-Minting5.png",src:n(46405).Z+"#radius",width:"2472",height:"1106"})),(0,i.kt)("h2",{id:"minting-with-bot-taxes"},"Minting With Bot Taxes"),(0,i.kt)("p",null,"One guard you\u2019ll likely want to include in your Candy Machine is the Box Tax guard which protects your Candy Machine against bots by charging failed mints a configurable amount of SOL. This amount is usually small to hurt bots without affecting genuine mistakes from real users. All bot taxes will be transferred to the Candy Machine account so that, once minting is over, you can access these funds by deleting the Candy Machine account."),(0,i.kt)("p",null,"This guard is a bit special and affects the minting behaviour of all other guards. When the Bot Tax is activated and any other guard fails to validate the mint, ",(0,i.kt)("strong",{parentName:"p"},"the transaction will pretend to succeed"),". This means no errors will be returned by the program but no NFT will be minted either. This is because the transaction must succeed for the funds to be transferred from the bot to the Candy Machine account. ",(0,i.kt)("a",{parentName:"p",href:"/programs/candy-machine/available-guards/bot-tax"},"You can learn more about the Bot Tax guard on its dedicated page"),"."),(0,i.kt)("h2",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"Congratulations, you now know how Candy Machines work from A to Z!"),(0,i.kt)("p",null,"Here are some additional reading resources you might be interested in:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/programs/candy-machine/available-guards"},"All Available Guards"),": Have a look through all the guards available to you so you can cherry-pick the ones you need."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Create Your First Candy Machine (coming soon)"),": This How-To guide helps you upload your assets and create a new Candy Machine from scratch using a CLI tool called \u201c",(0,i.kt)("a",{parentName:"li",href:"/developer-tools/sugar/overview/introduction"},"Sugar"),"\u201d. It also uses our JS SDK to spin up a minting website for your Candy Machine.")))}c.isMDXComponent=!0},79999:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-Minting1-70314c81043314a74eaccbc91360426b.png"},77958:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-Minting2-8fe00d76c3345be27764834622b011ed.png"},62707:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-Minting3-9ddf8058e8abcd0896d90ca996efc565.png"},41474:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-Minting4-99b1c37fc8fcc6fd83d3b5a570d1b70a.png"},46405:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-Minting5-022b3ad9595e31caf4b3d187f13fd7da.png"}}]);