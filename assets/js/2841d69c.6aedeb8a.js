"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3643],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return l},U:function(){return o}});var a=n(67294),i=n(45697),r=n.n(i);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function l(e){let{open:t,title:n,actions:i,keepAlive:r=!0,children:o}=e;const[l,c]=(0,a.useState)(t),p=l||r;return a.createElement("div",{className:["accordion-item",l?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>c(!l)},a.createElement("h3",null,a.createElement(s,{opened:l}),a.createElement("span",null,n)),i),a.createElement("div",{className:"accordion-item-content"},p&&o))}function s(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:r().any},l.propTypes={open:r().bool,title:r().string,children:r().any,actions:r().any,keepAlive:r().bool},s.propTypes={opened:r().bool}},65853:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(83117),i=(n(67294),n(3905)),r=n(38545);const o={description:"Set the price of the mint as an NFT of a specified collection."},l="NFT Payment",s={unversionedId:"programs/candy-machine/available-guards/nft-payment",id:"programs/candy-machine/available-guards/nft-payment",title:"NFT Payment",description:"Set the price of the mint as an NFT of a specified collection.",source:"@site/docs/01-programs/02-candy-machine/10-available-guards/11-nft-payment.md",sourceDirName:"01-programs/02-candy-machine/10-available-guards",slug:"/programs/candy-machine/available-guards/nft-payment",permalink:"/programs/candy-machine/available-guards/nft-payment",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/10-available-guards/11-nft-payment.md",tags:[],version:"current",lastUpdatedAt:1688984188,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:11,frontMatter:{description:"Set the price of the mint as an NFT of a specified collection."},sidebar:"sidebar",previous:{title:"NFT Gate",permalink:"/programs/candy-machine/available-guards/nft-gate"},next:{title:"Redeemed Amount",permalink:"/programs/candy-machine/available-guards/redeemed-amount"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2}],m={toc:p};function u(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"nft-payment"},"NFT Payment"),(0,i.kt)("h2",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The ",(0,i.kt)("strong",{parentName:"p"},"NFT Payment")," guard allows minting by charging the payer an NFT from a specified NFT collection. The NFT will be transferred to a predefined destination."),(0,i.kt)("p",null,"If the payer does not own an NFT from the required collection, minting will fail."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"CandyMachinesV3-GuardsNFTPayment.png",src:n(12815).Z+"#radius",width:"2472",height:"936"})),(0,i.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,i.kt)("p",null,"The NFT Payment guard contains the following settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Required Collection"),": The mint address of the required NFT Collection. The NFT we use to pay with must be part of this collection."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Destination"),": The address of the wallet that will receive all NFTs.")),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here\u2019s an example of how to set up a Candy Machine using the NFT Payment guard. You may use any wallet as a destination but, in this example, we\u2019ll use the address of the current identity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"create(umi, {\n  // ...\n  guards: {\n    nftPayment: some({\n      requiredCollection: requiredCollectionNft.publicKey,\n      destination: umi.identity.publicKey,\n    }),\n  },\n});\n")),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/NftPayment.html"},"NftPayment")))),(0,i.kt)(r.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Here\u2019s an example of how to set up a Candy Machine using the NFT Payment guard. You may use any wallet as a destination but, in this example, we\u2019ll use the address of the current identity."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    nftPayment: {\n      requiredCollection: requiredCollectionNft.address,\n      destination: metaplex.identity().publicKey,\n    },\n  },\n});\n")),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.NftPaymentGuardSettings.html"},"Guard Settings"),".")))),(0,i.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,i.kt)("p",null,"The NFT Payment guard contains the following Mint Settings:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Destination"),": The address of the wallet that will receive all NFTs."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Mint"),": The mint address of the NFT to pay with. This must be part of the required collection and must belong to the minter."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Token Standard"),": The token standard of the NFT used to pay."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Token Account")," (optional): You may optionally provide the token account linking the NFT with its owner explicitly. By default, the associated token account of the payer will be used."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rule Set")," (optional): The Rule Set of the NFT used to pay, if we are paying using a Programmable NFT with a Rule Set.")),(0,i.kt)("p",null,"Note that, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#nftpayment"},"Candy Guard\u2019s program documentation")," for more details."),(0,i.kt)(r.U,{mdxType:"Accordion"},(0,i.kt)(r.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"You may pass the Mint Settings of the NFT Payment guard using the ",(0,i.kt)("inlineCode",{parentName:"p"},"mintArgs")," argument like so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},'import { TokenStandard } from "@metaplex-foundation/mpl-token-metadata";\n\nmintV2(umi, {\n  // ...\n  mintArgs: {\n    nftPayment: some({\n      destination,\n      mint: nftToPayWith.publicKey,\n      tokenStandard: TokenStandard.NonFungible,\n    }),\n  },\n});\n')),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html"},"mintV2"),", ",(0,i.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/NftPaymentMintArgs.html"},"NftPaymentMintArgs")))),(0,i.kt)(r.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"When minting via the JS SDK, simply provide the mint address of the NFT to pay with via the ",(0,i.kt)("inlineCode",{parentName:"p"},"mint")," attribute like so."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const { nft } = await metaplex.candyMachines().mint({\n  // ...\n  guards: {\n    nftPayment: {\n      mint: nftToPayWith.address,\n    },\n  },\n});\n")),(0,i.kt)("p",null,"You may also provide the ",(0,i.kt)("inlineCode",{parentName:"p"},"tokenAccount")," attribute explicitly should the NFT not use an associated token account."),(0,i.kt)("p",null,"API References: ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint"},"Operation"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html"},"Input"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html"},"Output"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint"},"Transaction Builder"),", ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.NftPaymentGuardMintSettings.html"},"Mint Settings"),".")))),(0,i.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"The NFT Payment guard does not support the route instruction.")))}u.isMDXComponent=!0},12815:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsNFTPayment-b409397f9952318f1b434cd5e70b0acd.png"}}]);