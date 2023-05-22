"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9681],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return p}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,l=r(e,["components","mdxType","originalType","parentName"]),h=c(n),p=a,m=h["".concat(u,".").concat(p)]||h[p]||d[p]||i;return n?o.createElement(m,s(s({ref:t},l),{},{components:n})):o.createElement(m,s({ref:t},l))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=h;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:a,s[1]=r;for(var c=2;c<i;c++)s[c]=n[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return r},U:function(){return s}});var o=n(67294),a=n(45697),i=n.n(a);function s(e){let{children:t}=e;return o.createElement("div",{className:"accordion"},t)}function r(e){let{open:t,title:n,actions:a,keepAlive:i=!0,children:s}=e;const[r,c]=(0,o.useState)(t),l=r||i;return o.createElement("div",{className:["accordion-item",r?"accordion-item-opened":"accordion-item-closed"].join(" ")},o.createElement("div",{className:"accordion-item-header",onClick:()=>c(!r)},o.createElement("h3",null,o.createElement(u,{opened:r}),o.createElement("span",null,n)),a),o.createElement("div",{className:"accordion-item-content"},l&&s))}function u(e){let{opened:t}=e;return t?o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},o.createElement("rect",{width:"256",height:"256",fill:"none"}),o.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},o.createElement("rect",{width:"256",height:"256",fill:"none"}),o.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}s.propTypes={children:i().any},r.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},u.propTypes={opened:i().bool}},33063:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return r},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var o=n(83117),a=(n(67294),n(3905)),i=n(38545);const s={description:"Explains how to manage Auction Houses."},r="Managing Auction Houses",u={unversionedId:"programs/auction-house/managing-auction-house",id:"programs/auction-house/managing-auction-house",title:"Managing Auction Houses",description:"Explains how to manage Auction Houses.",source:"@site/docs/01-programs/03-auction-house/03-managing-auction-house.md",sourceDirName:"01-programs/03-auction-house",slug:"/programs/auction-house/managing-auction-house",permalink:"/programs/auction-house/managing-auction-house",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/03-auction-house/03-managing-auction-house.md",tags:[],version:"current",lastUpdatedAt:1684777e3,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:3,frontMatter:{description:"Explains how to manage Auction Houses."},sidebar:"sidebar",previous:{title:"Auction House Settings",permalink:"/programs/auction-house/auction-house-settings"},next:{title:"Trading Assets on Auction House",permalink:"/programs/auction-house/trading-assets-on-auction-house"}},c={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Create Auction Houses",id:"create-auction-houses",level:2},{value:"Auction House Account",id:"auction-house-account",level:2},{value:"Fetch Auction Houses",id:"fetch-auction-houses",level:2},{value:"Update Settings",id:"update-settings",level:2},{value:"Withdraw Funds",id:"withdraw-funds",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:l};function h(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"managing-auction-houses"},"Managing Auction Houses"),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/programs/auction-house/auction-house-settings"},"On the previous page"),", we went through the various settings of an Auction House. So now, let\u2019s see how we can use these settings to create and update Auction Houses. "),(0,a.kt)("p",null,"We'll also talk about different ways of fetching Auction House. Lastly, we'll go see how to withdraw funds from the Auction House fee and treasury accounts."),(0,a.kt)("h2",{id:"create-auction-houses"},"Create Auction Houses"),(0,a.kt)("p",null,"An Auction House can be created with all the settings discussed in the previous page. The created Auction House account is referred to as an Auction House ",(0,a.kt)("strong",{parentName:"p"},"Instance"),"."),(0,a.kt)(i.U,{mdxType:"Accordion"},(0,a.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"Let's go through an example of using the Metaplex JS SDK to create an Auction House. Note that by default the current identity is used as the authority of the Auction House. Moreover, by default ",(0,a.kt)("inlineCode",{parentName:"p"},"SOL")," will be set as the ",(0,a.kt)("inlineCode",{parentName:"p"},"treasuryMint"),". Lastly, helper accounts discussed in the last page will be automatically generated by the Auction House, but they can also be set manually while Auction House creation."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const auctionHouseSettings = await metaplex\n    .auctionHouse()\n    .create({\n        sellerFeeBasisPoints: 500 // 5% fee\n        authority: metaplex.identity(),\n        requireSignOff: true,\n        canChangeSalePrice: true,\n        hasAuctioneer: true, // to enable auctioneer\n        auctioneerAuthority: metaplex.identity(),\n    });\n"))))),(0,a.kt)("h2",{id:"auction-house-account"},"Auction House Account"),(0,a.kt)("p",null,"Now that we\u2019ve created an Auction House instance, let\u2019s see what data is stored inside it."),(0,a.kt)("p",null,"Firstly, it stores all the settings that we have already discussed. In addition to these settings, the Auction House account stores a ",(0,a.kt)("inlineCode",{parentName:"p"},"creator")," field, which points to the address of the wallet used to create the Auction House instance."),(0,a.kt)("p",null,"Lastly, the Auction House instance also stores some PDA bumps, which are used to derive the addresses of the PDA accounts."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"When building with PDAs, it is common to store the bump seed in the account data itself. This allows developers to easily validate a PDA without having to pass in the bump as an instruction argument.")),(0,a.kt)(i.U,{mdxType:"Accordion"},(0,a.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"The Auction House account model can be explored in the ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.AuctionHouse.html"},"API References of the ",(0,a.kt)("inlineCode",{parentName:"a"},"AuctionHouse")," model"),"."),(0,a.kt)("p",null,"Here\u2019s a small code example showcasing some of the Auction House attributes."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { auctionHouse } = await metaplex.auctionHouse().create({...});\n\nauctionHouse.address;                   // The public key of the Auction House account              \nauctionHouse.auctionHouseFeeAccount;    // The public key of the Auction House Fee account\nauctionHouse.feeWithdrawalDestination;  // The public key of the account to withdraw funds from Auction House fee account\nauctionHouse.treasuryMint;              // The mint address of the token to be used as the Auction House currency\nauctionHouse.authority;                 // The public key of the Auction House authority\nauctionHouse.creator;                   // The public key of the account used to create the Auction House instance\nauctionHouse.bump;                      // The `Bump` of the Auction House instance\nauctionHouse.feePayerBump;              // The `Bump` of the fee account\nauctionHouse.treasuryBump;              // The `Bump` of the treasury account\nauctionHouse.auctioneerAddress;         // he public key of the `Auctioneer` account\n"))))),(0,a.kt)("h2",{id:"fetch-auction-houses"},"Fetch Auction Houses"),(0,a.kt)("p",null,"Once created, the Auction House instance can be fetched. An Auction House can be uniquely identified by its PDA account address or a combination of its creator address and the treasury mint address."),(0,a.kt)(i.U,{mdxType:"Accordion"},(0,a.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"An Auction House can be fetched using two ways:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"By address"),": using the Auction House address"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"By creator and mint"),": using the combination of the ",(0,a.kt)("inlineCode",{parentName:"li"},"creator")," address and the treasury mint. Note that when the Auction House has Auctioneer enabled, the ",(0,a.kt)("inlineCode",{parentName:"li"},"auctioneerAuthority")," is also required in addition to the creator and the mint.")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'// by address\nconst auctionHouse = await metaplex\n    .auctionHouse()\n    .findByAddress({ address: new PublicKey("Gjwc...thJS") });\n\n// by creator and mint\n// in this example, we assume that the Auction House\n// does not have Auctioneer enabled\nconst auctionHouse = await metaplex\n    .auctionHouse()\n    .findByCreatorAndMint({\n        creator: new PublicKey("Gjwc...thJS"),\n        treasuryMint: new PublicKey("DUST...23df")\n    });\n'))))),(0,a.kt)("h2",{id:"update-settings"},"Update Settings"),(0,a.kt)("p",null,"As in the case of Candy Machine, once an Auction House instance is created, you can update most of its settings later on as long as you are the authority of the Auction House instance. The following settings can be updated: ",(0,a.kt)("inlineCode",{parentName:"p"},"authority"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"sellerFeeBasisPoints"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"requiresSignOff"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"canChangeSalePrice"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"feeWithdrawalDestination"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"treasuryWithdrawalDestination"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"auctioneerScopes"),"."),(0,a.kt)("p",null,"As we've already discussed, the authority of the Auction House is one of the settings that can be updated, as long as the current authority is the signer and the address of the new authority is mentioned."),(0,a.kt)(i.U,{mdxType:"Accordion"},(0,a.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"To update the settings, we need the full model in order to compare the current data with the provided data. For instance, if you only want to update the ",(0,a.kt)("inlineCode",{parentName:"p"},"feeWithdrawalDestination"),", you need to send an instruction that updates the data whilst keeping all other properties the same."),(0,a.kt)("p",null,"Also, by default, ",(0,a.kt)("inlineCode",{parentName:"p"},"feeWithdrawalDestination")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"treasuryWithdrawalDestination")," are set to ",(0,a.kt)("inlineCode",{parentName:"p"},"metaplex.identity()"),", ie., the same wallet which is set as the authority and the creator by default."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import { Keypair } from "@solana/web3.js";\n\nconst currentAuthority = Keypair.generate();\nconst newAuthority = Keypair.generate();\nconst newFeeWithdrawalDestination = Keypair.generate();\nconst newTreasuryWithdrawalDestination = Keypair.generate();\nconst auctionHouse = await metaplex\n    .auctionHouse()\n    .findByAddress({...});\n\nconst updatedAuctionHouse = await metaplex\n    .auctionHouse()\n    .update({\n        auctionHouse,\n        authority: currentAuthority,\n        newAuthority: newAuthority.address,\n        sellerFeeBasisPoints: 100,\n        requiresSignOff: true,\n        canChangeSalePrice: true,\n        feeWithdrawalDestination: newFeeWithdrawalDestination,\n        treasuryWithdrawalDestination: newTreasuryWithdrawalDestination\n    });\n'))))),(0,a.kt)("h2",{id:"withdraw-funds"},"Withdraw Funds"),(0,a.kt)("p",null,"We have discussed in the previous page about the different helper accounts of Auction House. These are the ",(0,a.kt)("strong",{parentName:"p"},"Fee Account")," and the ",(0,a.kt)("strong",{parentName:"p"},"Treasury Account"),"."),(0,a.kt)("p",null,'Funds from both these accounts can be transferred back to "destination" wallets. These withdrawal destination accounts can be set by the Auction House authority.'),(0,a.kt)(i.U,{mdxType:"Accordion"},(0,a.kt)(i.Q,{title:"JS SDK",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"Here's a code snippet which transfers funds."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Auction House Fee Wallet to the Fee Withdrawal Destination Wallet."),(0,a.kt)("li",{parentName:"ol"},"Transfers funds from Auction House Treasury Wallet to the Treasury Withdrawal Destination Wallet.")),(0,a.kt)("p",null,"In both the cases, The Auction House from which the funds are being transferred and the amount of funds to withdrawn need to be specified. This amount can either be in SOL or in the SPL token used by the Auction House as a currency."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"// withdraw funds from fee account\nawait metaplex\n    .auctionHouse()\n    .withdrawFromFeeAccount({\n        auctionHouse,\n        amount: 5\n    });\n\n// withdraw funds from treasury account\nawait metaplex\n    .auctionHouse()\n    .withdrawFromTreasuryAccount({\n        auctionHouse,\n        amount: 10\n    });\n"))))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"At this point we've gone over the Auction House settings, the data an Auction House instance stores and how to create and update this data. However, we still don't know how assets are traded on Auction Houses. We'll talk about this in the ",(0,a.kt)("a",{parentName:"p",href:"/programs/auction-house/trading-assets-on-auction-house"},"next page"),"."))}h.isMDXComponent=!0}}]);