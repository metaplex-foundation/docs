"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2640],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=u(n),p=r,m=h["".concat(l,".").concat(p)]||h[p]||c[p]||i;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return s},U:function(){return o}});var a=n(67294),r=n(45697),i=n.n(r);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function s(e){let{open:t,title:n,actions:r,keepAlive:i=!0,children:o}=e;const[s,u]=(0,a.useState)(t),d=s||i;return a.createElement("div",{className:["accordion-item",s?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>u(!s)},a.createElement("h3",null,a.createElement(l,{opened:s}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},d&&o))}function l(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:i().any},s.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},l.propTypes={opened:i().bool}},18829:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return d}});var a=n(83117),r=(n(67294),n(3905)),i=n(38545);const o={description:"Set the price of the mint in token amount with a freeze period."},s="Freeze Token Payment",l={unversionedId:"programs/candy-machine/available-guards/freeze-token-payment",id:"programs/candy-machine/available-guards/freeze-token-payment",title:"Freeze Token Payment",description:"Set the price of the mint in token amount with a freeze period.",source:"@site/docs/01-programs/02-candy-machine/09-available-guards/06-freeze-token-payment.md",sourceDirName:"01-programs/02-candy-machine/09-available-guards",slug:"/programs/candy-machine/available-guards/freeze-token-payment",permalink:"/programs/candy-machine/available-guards/freeze-token-payment",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/09-available-guards/06-freeze-token-payment.md",tags:[],version:"current",lastUpdatedAt:1670832184,formattedLastUpdatedAt:"Dec 12, 2022",sidebarPosition:6,frontMatter:{description:"Set the price of the mint in token amount with a freeze period."},sidebar:"sidebar",previous:{title:"Freeze Sol Payment",permalink:"/programs/candy-machine/available-guards/freeze-sol-payment"},next:{title:"Gatekeeper",permalink:"/programs/candy-machine/available-guards/gatekeeper"}},u={},d=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2},{value:"Initialize the Freeze Escrow",id:"initialize-the-freeze-escrow",level:3},{value:"Thaw a Frozen NFT",id:"thaw-a-frozen-nft",level:3},{value:"Unlock Funds",id:"unlock-funds",level:3},{value:"Stop Freezing NFTs",id:"stop-freezing-nfts",level:2},{value:"Freeze Escrows and Guard Groups",id:"freeze-escrows-and-guard-groups",level:2}],c={toc:d};function h(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"freeze-token-payment"},"Freeze Token Payment"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Freeze Token Payment")," guard allows minting frozen NFTs by charging the payer a specific amount of tokens from a certain mint account. Frozen NFTs cannot be transferred or listed on any marketplaces until thawed."),(0,r.kt)("p",null,"Frozen NFTs can be thawed by anyone as long as one of the following conditions is met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Candy Machine has minted out."),(0,r.kt)("li",{parentName:"ul"},"The Candy Machine was deleted."),(0,r.kt)("li",{parentName:"ul"},"The configured Freeze Period \u2014 which can be a maximum of 30 days \u2014 has passed.")),(0,r.kt)("p",null,'The tokens are transferred to a "Freeze Escrow" account which must be initialized by the Candy Guard authority before minting can start. Once all Frozen NFTs have been thawed, the funds can be unlocked and transferred to the configured destination account by the Candy Guard authority.'),(0,r.kt)("p",null,"You may initialize the Freeze Escrow account, thaw NFTs and unlock funds ",(0,r.kt)("a",{parentName:"p",href:"#route-instruction"},"via the route instruction")," of this guard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeOverview.png",src:n(94710).Z+"#radius",width:"2520",height:"864"})),(0,r.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,r.kt)("p",null,"The Freeze Token Payment guard contains the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Amount"),": The number of tokens to charge the payer."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mint"),": The address of the mint account defining the SPL Token we want to pay with."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Destination Associated Token Address (ATA)"),": The address of the associated token account to eventually send the tokens to. We can get this address by finding the Associated Token Address PDA using the ",(0,r.kt)("strong",{parentName:"li"},"Mint")," attribute and the address of any wallet that should receive these tokens.")),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s how we can create a Candy Machine using the Freeze Token Payment guard via the JS SDK. Note that, in this example, we\u2019re using the current identity as the destination wallet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { token } from '@metaplex-foundation/js';\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    tokenPayment: {\n      amount: token(300),\n      mint: tokenMint.address,\n      destinationAta: metaplex.tokens().pdas().associatedTokenAccount({\n        mint: tokenMint.address,\n        owner: metaplex.identity().publicKey,\n      }),\n    },\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.FreezeTokenPaymentGuardSettings.html"},"Guard Settings"),".")))),(0,r.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Freeze Token Payment guard does not need Mint Settings.")),(0,r.kt)("p",null,"However, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to add the configured destination address to the remaining accounts of the mint instruction. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-guard#freezetokenpayment"},"Candy Guard\u2019s program documentation")," for more details."),(0,r.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,r.kt)("p",null,"The Freeze Token Payment route instruction supports the following features."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#initialize-the-freeze-escrow"},"Initialize the Freeze Escrow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#thaw-a-frozen-nft"},"Thaw a Frozen NFT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#unlock-funds"},"Unlock Funds"))),(0,r.kt)("h3",{id:"initialize-the-freeze-escrow"},"Initialize the Freeze Escrow"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Path: ",(0,r.kt)("inlineCode",{parentName:"em"},"initialize"))),(0,r.kt)("p",null,"When using the Freeze Token Payment guard, we must initialize the Freeze Escrow account before minting can start. This will create a PDA account derived from the Destination ATA attribute of the guard's settings."),(0,r.kt)("p",null,"The Freeze Escrow PDA account will keep track of several parameters such as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"How many Frozen NFTs were minted through this guard."),(0,r.kt)("li",{parentName:"ul"},"When was the first Frozen NFT minted via this guard as the Freeze Period starts counting after that.")),(0,r.kt)("p",null,"When initializing this Freeze Escrow account, we must provide the following arguments to the route instruction of the guard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Path")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"initialize"),": Selects the path to execute in the route instruction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Period"),": The amount of time in seconds that the Freeze Period should last. This can be a maximum of 30 days (2,592,000 seconds) and it will start from the very first Frozen NFT minted via this guard. The Freeze Period provides a safety mechanism to ensure Frozen NFTs can eventually be thawed even if the Candy Machine never mints out."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Candy Guard Authority"),": The authority of the Candy Guard account as a Signer.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeTokenPayment1.png",src:n(97614).Z+"#radius",width:"2472",height:"936"})),(0,r.kt)("p",null,"Last but not least, the Freeze Escrow PDA account will receive the tokens of all Frozen NFTs minted through this guard."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeTokenPayment2.png",src:n(74953).Z+"#radius",width:"2472",height:"936"})),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"In the example below, we initialize the Freeze Escrow account with a maximum Freeze Period of 15 days and we use the current identity as the Candy Guard authority."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"await metaplex.candyMachines().callGuardRoute({\n  candyMachine,\n  guard: 'freezeTokenPayment',\n  settings: {\n    path: 'initialize',\n    period: 15 * 24 * 60 * 60, // 15 days.\n    candyGuardAuthority: metaplex.identity(),\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.FreezeTokenPaymentGuardRouteSettings.html"},"Route Settings"),".")))),(0,r.kt)("h3",{id:"thaw-a-frozen-nft"},"Thaw a Frozen NFT"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Path: ",(0,r.kt)("inlineCode",{parentName:"em"},"thaw"))),(0,r.kt)("p",null,"Frozen NFTs can be thawed by anyone as long as one of the following conditions is met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Candy Machine has minted out."),(0,r.kt)("li",{parentName:"ul"},"The Candy Machine was deleted."),(0,r.kt)("li",{parentName:"ul"},"The configured Freeze Period \u2014 which can be a maximum of 30 days \u2014 has passed.")),(0,r.kt)("p",null,"Note that since the tokens in the Freeze Escrow are not transferrable until all NFTs are thawed, this creates an incentive for the treasury to thaw all NFTs as soon as possible."),(0,r.kt)("p",null,"To thaw a Frozen NFT, we must provide the following arguments to the route instruction of the guard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Path")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"thaw"),": Selects the path to execute in the route instruction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NFT Mint"),": The mint address of the Frozen NFT to thaw."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"NFT Owner"),": The address of the owner of the Frozen NFT to thaw.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeTokenPayment3.png",src:n(21122).Z+"#radius",width:"2472",height:"936"})),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"In the example below, we thaw a Frozen NFT that belongs to the current identity."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"import { toPublicKey } from '@metaplex-foundation/js';\n\nawait metaplex.candyMachines().callGuardRoute({\n  candyMachine,\n  guard: 'freezeTokenPayment',\n  settings: {\n    path: 'thaw',\n    nftMint: toPublicKey('GhFM53E6NEW7Ud8Gqh34WLBztkpe74PRtbHEU4b6cwWo'),\n    nftOwner: metaplex.identity().publicKey,\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.FreezeTokenPaymentGuardRouteSettings.html"},"Route Settings"),".")))),(0,r.kt)("h3",{id:"unlock-funds"},"Unlock Funds"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Path: ",(0,r.kt)("inlineCode",{parentName:"em"},"unlockFunds"))),(0,r.kt)("p",null,"Once all Frozen NFTs have been thawed, the treasury can unlock the funds from the Freeze Escrow account. This will transfer the tokens to the configured Destination ATA address."),(0,r.kt)("p",null,"To unlock the funds, we must provide the following arguments to the route instruction of the guard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Path")," = ",(0,r.kt)("inlineCode",{parentName:"li"},"unlockFunds"),": Selects the path to execute in the route instruction."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Candy Guard Authority"),": The authority of the Candy Guard account as a Signer.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeTokenPayment4.png",src:n(58207).Z+"#radius",width:"2472",height:"936"})),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"In the example below, we unlock the funds from the Freeze Escrow account using the current identity as the Candy Guard authority."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"await metaplex.candyMachines().callGuardRoute({\n  candyMachine,\n  guard: 'freezeTokenPayment',\n  settings: {\n    path: 'unlockFunds',\n    candyGuardAuthority: metaplex.identity(),\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#callGuardRoute"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CallCandyGuardRouteOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#callGuardRoute"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.FreezeTokenPaymentGuardRouteSettings.html"},"Route Settings"),".")))),(0,r.kt)("h2",{id:"stop-freezing-nfts"},"Stop Freezing NFTs"),(0,r.kt)("p",null,"It is possible to stop the freezing of NFTs within a Freeze Token Payment guard. In other words, new-minted NFTs will no longer be frozen but ",(0,r.kt)("strong",{parentName:"p"},"existing Frozen NFTs will remain frozen"),"."),(0,r.kt)("p",null,"There are several ways of achieving this, which can be separated into two categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u2600\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Can Thaw"),": Existing Frozen NFTs can be thawed by anyone using the ",(0,r.kt)("inlineCode",{parentName:"li"},"thaw")," path of the route instruction."),(0,r.kt)("li",{parentName:"ul"},"\u2744\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Cannot Thaw"),': Existing Frozen NFTs cannot be thawed yet and we have to wait for one "Can Thaw" condition to be met.')),(0,r.kt)("p",null,"With that in mind, here is the exhaustive list of ways to stop freezing NFTs and whether or not each of them allows thawing existing Frozen NFTs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Candy Machine has minted out \u2192 \u2600\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Can Thaw"),"."),(0,r.kt)("li",{parentName:"ul"},"The configured Freeze Period \u2014 which can be a maximum of 30 days \u2014 has passed \u2192 \u2600\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Can Thaw"),"."),(0,r.kt)("li",{parentName:"ul"},"The Candy Machine account was deleted \u2192 \u2600\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Can Thaw"),"."),(0,r.kt)("li",{parentName:"ul"},"The Candy Guard account was deleted \u2192 \u2744\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Cannot Thaw"),"."),(0,r.kt)("li",{parentName:"ul"},"The Freeze Token Payment guard was removed from the settings \u2192 \u2744\ufe0f ",(0,r.kt)("strong",{parentName:"li"},"Cannot Thaw"),".")),(0,r.kt)("h2",{id:"freeze-escrows-and-guard-groups"},"Freeze Escrows and Guard Groups"),(0,r.kt)("p",null,"When using multiple Freeze Token Payment guards within various ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/guard-groups"},"Guard Groups"),", it is important to understand the relationship between a Freeze Token Payment guard and a Freeze Escrow account."),(0,r.kt)("p",null,"The Freeze Escrow account is a PDA derived from a Destination ATA address. This means that if ",(0,r.kt)("strong",{parentName:"p"},"multiple Freeze Token Payment guards")," are configured to use the ",(0,r.kt)("strong",{parentName:"p"},"same Destination ATA address"),", they will all ",(0,r.kt)("strong",{parentName:"p"},"share the same Freeze Escrow account"),"."),(0,r.kt)("p",null,"Therefore, they will also share the same Freeze Period and all tokens will be collected by the same escrow account. This also means, we only need to call the ",(0,r.kt)("inlineCode",{parentName:"p"},"initialize")," route instruction once per configured Destination ATA address."),(0,r.kt)("p",null,"It is also possible to use multiple Freeze Token Payment guards with different Destination ATA addresses. In this case, each Freeze Token Payment guard will have its own Freeze Escrow account and its own Freeze Period."),(0,r.kt)("p",null,"The example below illustrates a Candy Machine with three Freeze Token Payment guards in three groups such that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Groups 1 and 2 share the same Destination ATA address and therefore the same Freeze Escrow account."),(0,r.kt)("li",{parentName:"ul"},"Group 3 has its own Destination ATA address and therefore its own Freeze Escrow account.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsFreezeTokenPayment5.png",src:n(73395).Z+"#radius",width:"2472",height:"1752"})))}h.isMDXComponent=!0},94710:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeOverview-536d8c604aaa037b663871a38f3f0244.png"},97614:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeTokenPayment1-8a59e17b19b21a33606cca1174f6de48.png"},74953:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeTokenPayment2-5cd19712aea4f5011fea764051549f03.png"},21122:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeTokenPayment3-3264ffd222260f88445afb3062fa22ea.png"},58207:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeTokenPayment4-920f2e766489ff9a7ea8b8b7a924d0a0.png"},73395:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsFreezeTokenPayment5-4f0aa01bd4e0badb88da614e68b9eb96.png"}}]);