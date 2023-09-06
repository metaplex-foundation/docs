"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5353],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return c}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return a.createElement(d.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),c=r,h=p["".concat(d,".").concat(c)]||p[c]||m[c]||i;return t?a.createElement(h,o(o({ref:n},u),{},{components:t})):a.createElement(h,o({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},96708:function(e,n,t){t.r(n),t.d(n,{assets:function(){return d},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return s}});var a=t(83117),r=(t(67294),t(3905));const i={},o="Sugar for Candy Machine V3",l={unversionedId:"developer-tools/sugar/guides/sugar-for-cmv3",id:"developer-tools/sugar/guides/sugar-for-cmv3",title:"Sugar for Candy Machine V3",description:"For Candy Machine V3 you have to use a Sugar version > v2.0",source:"@site/docs/03-developer-tools/00-sugar/03-guides/04-sugar-for-cmv3.md",sourceDirName:"03-developer-tools/00-sugar/03-guides",slug:"/developer-tools/sugar/guides/sugar-for-cmv3",permalink:"/developer-tools/sugar/guides/sugar-for-cmv3",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/03-guides/04-sugar-for-cmv3.md",tags:[],version:"current",lastUpdatedAt:1693996694,formattedLastUpdatedAt:"Sep 6, 2023",sidebarPosition:4,frontMatter:{},sidebar:"sidebar",previous:{title:"Configuration",permalink:"/developer-tools/sugar/guides/configuration"},next:{title:"Learning",permalink:"/developer-tools/sugar/learning/"}},d={},s=[{value:"Configuration",id:"configuration",level:2},{value:"Available Guards",id:"available-guards",level:2},{value:"Address Gate",id:"address-gate",level:3},{value:"Allocation",id:"allocation",level:3},{value:"Allow List",id:"allow-list",level:3},{value:"Bot Tax",id:"bot-tax",level:3},{value:"End Date",id:"end-date",level:3},{value:"Freeze Sol Payment",id:"freeze-sol-payment",level:3},{value:"Freeze Token Payment",id:"freeze-token-payment",level:3},{value:"Gatekeeper",id:"gatekeeper",level:3},{value:"Mint Limit",id:"mint-limit",level:3},{value:"NFT Burn",id:"nft-burn",level:3},{value:"NFT Gate",id:"nft-gate",level:3},{value:"NFT Payment",id:"nft-payment",level:3},{value:"Program Gate",id:"program-gate",level:3},{value:"Redeemed Amount",id:"redeemed-amount",level:3},{value:"Sol Payment",id:"sol-payment",level:3},{value:"Start Date",id:"start-date",level:3},{value:"Third Party Signer",id:"third-party-signer",level:3},{value:"Token Burn",id:"token-burn",level:3},{value:"Token Gate",id:"token-gate",level:3},{value:"Token Payment",id:"token-payment",level:3},{value:"Token2022 Payment",id:"token2022-payment",level:3},{value:"Deployment Commands",id:"deployment-commands",level:2},{value:"<code>add</code>",id:"add",level:3},{value:"<code>update</code>",id:"update",level:3},{value:"<code>show</code>",id:"show",level:3},{value:"<code>remove</code>",id:"remove",level:3},{value:"<code>withdraw</code>",id:"withdraw",level:3}],u={toc:s};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"sugar-for-candy-machine-v3"},"Sugar for Candy Machine V3"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"For Candy Machine V3 you have to use a Sugar version > v2.0 ")),(0,r.kt)("p",null,"The Candy Machine V3 is the latest iteration of the Metaplex Protocol's Candy Machine minting and distribution program. While the deploy of a Candy Machine V3 works largely similar to the previous V2 version, Sugar offers a set of new command to configure and manage a Candy Guard."),(0,r.kt)("p",null,"The Candy Machine V3 has a modular architecture, where the mint logic is separated from the mint access control ","\u2014"," check the ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/overview"},"overview")," to read more about Candy Machine V3 and Candy Guard."),(0,r.kt)("p",null,"This guide will walk through the changes in the configuration for a Candy Machine V3 and the commands used to set up and manage a Candy Guard. It assumes that you are already familiar with how Sugar works and have deployed a Candy Machine ","\u2014"," if that is not the case, we recommend to first complete the ",(0,r.kt)("a",{parentName:"p",href:"/developer-tools/sugar/tutorials/my-first-candy-machine"},"My First Candy Machine")," tutorial."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"Since the configuration of the mint process has moved to ",(0,r.kt)("strong",{parentName:"p"},"guards"),", Sugar's config file has changed. A basic configuration without any guards is shown bellow:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "number": 10,\n  "symbol": "TEST",\n  "sellerFeeBasisPoints": 500,\n  "isMutable": true,\n  "isSequential": false,\n  "creators": [\n    {\n      "address": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8",\n      "share": 100\n    }\n  ],\n  "uploadMethod": "bundlr",\n  "awsConfig": null,\n  "nftStorageAuthToken": null,\n  "shdwStorageAccount": null,\n  "pinataConfig": null,\n  "hiddenSettings": null,\n  "guards": null\n}\n')),(0,r.kt)("p",null,"There are two new elements in the configuration file:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isSequential"),": indicates to whether a sequential index generation should be used during mint or not (recommended to set this value to ",(0,r.kt)("inlineCode",{parentName:"li"},"false"),");"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"guards"),": indicates the configuration for the Candy Guard. If this value is set to ",(0,r.kt)("inlineCode",{parentName:"li"},"null"),", a Candy Guard will not be used and mint will only be possible using the ",(0,r.kt)("inlineCode",{parentName:"li"},"mint authority")," of the Candy Machine.")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You can use the Sugar's ",(0,r.kt)("inlineCode",{parentName:"p"},"create-config")," command to create a basic configuration file. The Candy Guard configuration needs to be added manually, further explained below.")),(0,r.kt)("h2",{id:"available-guards"},"Available Guards"),(0,r.kt)("p",null,"The Candy Guard ships with a total of ",(0,r.kt)("a",{parentName:"p",href:"../../../programs/candy-machine/available-guards"},"16 default guards"),". These guards can be used to define a single guard set, which will applied to every mint transaction, or to define groups. The example below shows a configuration file with 2 groups:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "number": 10,\n  "symbol": "TEST",\n  "sellerFeeBasisPoints": 500,\n  "isMutable": true,\n  "isSequential": false,\n  "creators": [\n    {\n      "address": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8",\n      "share": 100\n    }\n  ],\n  "uploadMethod": "bundlr",\n  "awsConfig": null,\n  "nftStorageAuthToken": null,\n  "shdwStorageAccount": null,\n  "pinataConfig": null,\n  "hiddenSettings": null,\n  "guards": {\n    "default": {\n      "botTax": {\n        "value": 0.01,\n        "lastInstruction": true\n      }\n    },\n    "groups": [\n      {\n        "label": "OGs",\n        "guards": {\n          "startDate": {\n            "date": "2022-10-20 12:00:00 +0000"\n          },\n          "tokenGate": {\n            "amount": 1,\n            "mint": "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf"\n          },\n          "solPayment": {\n            "value": 1,\n            "destination": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8"\n          }\n        }\n      },\n      {\n        "label": "Public",\n        "guards": {\n          "startDate": {\n            "date": "2022-10-20 18:00:00 +0000"\n          },\n          "solPayment": {\n            "value": 2,\n            "destination": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8"\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"In this example, there are 2 groups ",(0,r.kt)("inlineCode",{parentName:"p"},"OGs")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Public"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"OGs")," specifies that only transactions that are from an address which holds ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," token of the the SPL token ",(0,r.kt)("inlineCode",{parentName:"p"},"7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf")," are allowed to mint from the ",(0,r.kt)("inlineCode",{parentName:"p"},"2022-10-20 12:00:00 +0000"),"; the mint will be charged at ",(0,r.kt)("inlineCode",{parentName:"p"},"1 SOL"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Public")," group is open to any address from the ",(0,r.kt)("inlineCode",{parentName:"p"},"2022-10-20 18:00:00 +0000"),"; the mint will be charged at ",(0,r.kt)("inlineCode",{parentName:"p"},"2 SOL"),"."),(0,r.kt)("p",null,"For both groups, the ",(0,r.kt)("inlineCode",{parentName:"p"},"botTax")," guard specified in the ",(0,r.kt)("inlineCode",{parentName:"p"},"default")," guard set applies, so any transaction that fails the guard validation will be subject to a ",(0,r.kt)("inlineCode",{parentName:"p"},"0.01 SOL")," fee."),(0,r.kt)("p",null,'If we wanted to have a single "public" group, all the guard configuration can be added to the ',(0,r.kt)("inlineCode",{parentName:"p"},"default")," guard set:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "number": 10,\n  "symbol": "TEST",\n  "sellerFeeBasisPoints": 500,\n  "isMutable": true,\n  "isSequential": false,\n  "creators": [\n    {\n      "address": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8",\n      "share": 100\n    }\n  ],\n  "uploadMethod": "bundlr",\n  "awsConfig": null,\n  "nftStorageAuthToken": null,\n  "shdwStorageAccount": null,\n  "pinataConfig": null,\n  "hiddenSettings": null,\n  "guards": {\n    "default": {\n      "botTax": {\n        "value": 0.01,\n        "lastInstruction": true\n      },\n      "startDate": {\n        "date": "2022-10-20 18:00:00 +0000"\n      },\n      "solPayment": {\n        "value": 2,\n        "destination": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8"\n      }\n    },\n    "groups": null\n  }\n}\n')),(0,r.kt)("p",null,"Below is a list of the available guards and their configuration options."),(0,r.kt)("h3",{id:"address-gate"},"Address Gate"),(0,r.kt)("p",null,"The AddressGate guard restricts the mint to a single address \u2014 the address must match the payer's address of the mint transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"addressGate" : {\n    "address": "<PUBKEY>"\n}\n')),(0,r.kt)("h3",{id:"allocation"},"Allocation"),(0,r.kt)("p",null,"The Allocation guard allows to specify a limit on the overall number of mints for a group, either the default or a specific one. The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," configuration represents the unique identification for the limit \u2014 changing the id has the effect of restarting the limit, since a different tracking account will be created. The ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," indicates the maximum number of mints allowed within the group."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"allocation" : {\n    "id": number,\n    "limit": number\n}\n')),(0,r.kt)("h3",{id:"allow-list"},"Allow List"),(0,r.kt)("p",null,"The AllowList guard validates the payer's address against a merkle tree-based allow list of addresses. The hash should be specified as a hexadecimal value."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"allowList" : {\n    "merkleRoot": "<HASH>"\n}\n')),(0,r.kt)("h3",{id:"bot-tax"},"Bot Tax"),(0,r.kt)("p",null,"The BotTax guard is used to:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"charge a penalty for invalid transactions. The value of the penalty is specified by the lamports configuration."),(0,r.kt)("li",{parentName:"ul"},"validate that the mint transaction is the last transaction (last_instruction = true).")),(0,r.kt)("p",null,"The bot_tax is applied to any error that occurs during the validation of the guards."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"botTax" : {\n    "value": SOL value,\n    "lastInstruction": boolean\n}\n')),(0,r.kt)("h3",{id:"end-date"},"End Date"),(0,r.kt)("p",null,"The End Date guard is used to specify a date to end the mint. Any transaction received after the end date will fail."),(0,r.kt)("p",null,"The date needs to be specified using ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc3339"},"RFC 3339 standard"),'. In most cases, the format used will be "yyyy-mm-dd',(0,r.kt)("inlineCode",{parentName:"p"},"T"),"hh:mm:ss",(0,r.kt)("inlineCode",{parentName:"p"},"Z"),'", where ',(0,r.kt)("inlineCode",{parentName:"p"},"T")," is the separator between the full-date and full-time and ",(0,r.kt)("inlineCode",{parentName:"p"},"Z")," is the timezone offset from UTC (use ",(0,r.kt)("inlineCode",{parentName:"p"},"Z")," or +00:00 for UTC time)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"endDate" : {\n    "date": "string",\n}\n')),(0,r.kt)("h3",{id:"freeze-sol-payment"},"Freeze Sol Payment"),(0,r.kt)("p",null,"The Freeze Sol Payment guard allows minting frozen NFTs by charging the payer an amount in SOL. Frozen NFTs cannot be transferred or listed on any marketplaces until thawed. "),(0,r.kt)("p",null,"Frozen NFTs can be thawed by anyone as long as one of the following conditions is met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Candy Machine has minted out."),(0,r.kt)("li",{parentName:"ul"},"The Candy Machine was deleted."),(0,r.kt)("li",{parentName:"ul"},"The configured Freeze Period \u2014 which can be a maximum of 30 days \u2014 has passed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"freezeSolPayment" : {\n    "value": SOL value,\n    "destination": "<PUBKEY>"\n}\n')),(0,r.kt)("h3",{id:"freeze-token-payment"},"Freeze Token Payment"),(0,r.kt)("p",null,"The Freeze Token Payment guard allows minting frozen NFTs by charging the payer a specific amount of tokens from a certain mint account. Frozen NFTs cannot be transferred or listed on any marketplaces until thawed. The amount determines how many tokens are required."),(0,r.kt)("p",null,"Frozen NFTs can be thawed by anyone as long as one of the following conditions is met:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Candy Machine has minted out."),(0,r.kt)("li",{parentName:"ul"},"The Candy Machine was deleted."),(0,r.kt)("li",{parentName:"ul"},"The configured Freeze Period \u2014 which can be a maximum of 30 days \u2014 has passed.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"freezeTokenPayment" : {\n    "amount": number,\n    "mint": "<PUBKEY>",\n    "destinationAta": "<PUBKEY>"\n}\n')),(0,r.kt)("h3",{id:"gatekeeper"},"Gatekeeper"),(0,r.kt)("p",null,"The Gatekeeper guard validates if the payer of the transaction has a token from a specified gateway network ","\u2014"," in most cases, a token after completing a captcha challenge. The ",(0,r.kt)("inlineCode",{parentName:"p"},"expire_on_use")," configuration is used to indicate whether or not the token should expire after minting."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"gatekeeper" : {\n    "gatekeeperNetwork": "<PUBKEY>",\n    "expireOnUse": boolean\n}\n')),(0,r.kt)("h3",{id:"mint-limit"},"Mint Limit"),(0,r.kt)("p",null,"The Mint Limit guard allows to specify a limit on the number of mints for each individual address. The ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," configuration represents the unique identification for the limit \u2014 changing the id has the effect of restarting the limit, since a different tracking account will be created. The ",(0,r.kt)("inlineCode",{parentName:"p"},"limit")," indicates the maximum number of mints allowed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"mintLimit" : {\n    "id": number,\n    "limit": number\n}\n')),(0,r.kt)("h3",{id:"nft-burn"},"NFT Burn"),(0,r.kt)("p",null,"The NFT Burn guard restricts the mint to holders of another NFT (token), requiring that the NFT is burned in exchange of being allowed to mint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"nftBurn" : {\n    "requiredCollection": "<PUBKEY>",\n}\n')),(0,r.kt)("h3",{id:"nft-gate"},"NFT Gate"),(0,r.kt)("p",null,"The NFT Gate guard restricts the mint to holders of a specified ",(0,r.kt)("inlineCode",{parentName:"p"},"requiredCollection")," NFT collection. The payer is required to hold at least one NFT of the collection."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"nftGate" : {\n    "requiredCollection": "<PUBKEY>",\n}\n')),(0,r.kt)("h3",{id:"nft-payment"},"NFT Payment"),(0,r.kt)("p",null,"The NFT Payment guard is a payment guard that charges another NFT (token) from a specific collection for the mint. As a requirement of the mint, the specified NFT is transferred to the ",(0,r.kt)("inlineCode",{parentName:"p"},"destination")," address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"nftPayment" : {\n    "requiredCollection": "<PUBKEY>",\n    "destination": "<PUBKEY>"\n}\n')),(0,r.kt)("h3",{id:"program-gate"},"Program Gate"),(0,r.kt)("p",null,"The Program Gate guard allows to specify a group of programs (up to 5) that can be present in the same transaction of the mint instruction. This can be used to limit the programs that are allowed to CPI to mint from the Candy Machine."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"programGate" : {\n    "additional": ["<PUBKEY 1>", "<PUBKEY 2>", ..., "<PUBKEY 5>"],\n}\n')),(0,r.kt)("h3",{id:"redeemed-amount"},"Redeemed Amount"),(0,r.kt)("p",null,"The Redeemed Amount guard stops the mint when the number of ",(0,r.kt)("inlineCode",{parentName:"p"},"items_redeemed")," of the Candy Machine reaches the configured ",(0,r.kt)("inlineCode",{parentName:"p"},"maximum")," amount."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"redeemedAmount" : {\n    "maximum": number,\n}\n')),(0,r.kt)("h3",{id:"sol-payment"},"Sol Payment"),(0,r.kt)("p",null,"The Sol Payment guard is used to charge an amount in SOL for the mint. The funds are transferred to the configured ",(0,r.kt)("inlineCode",{parentName:"p"},"destination")," address."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"solPayment" : {\n    "value": SOL value,\n    "destination": "<PUBKEY>"\n}\n')),(0,r.kt)("h3",{id:"start-date"},"Start Date"),(0,r.kt)("p",null,"The Start Date guard determines the start date of the mint. If this guard is not specified, mint is allowed \u2014 similar to say any date is valid."),(0,r.kt)("p",null,"The date needs to be specified using ",(0,r.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/rfc3339"},"RFC 3339 standard"),'. In most cases, the format used will be "yyyy-mm-dd',(0,r.kt)("inlineCode",{parentName:"p"},"T"),"hh:mm:ss",(0,r.kt)("inlineCode",{parentName:"p"},"Z"),'", where ',(0,r.kt)("inlineCode",{parentName:"p"},"T")," is the separator between the full-date and full-time and ",(0,r.kt)("inlineCode",{parentName:"p"},"Z")," is the timezone offset from UTC (use ",(0,r.kt)("inlineCode",{parentName:"p"},"Z")," or +00:00 for UTC time)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"startDate" : {\n    "date": "string",\n}\n')),(0,r.kt)("h3",{id:"third-party-signer"},"Third Party Signer"),(0,r.kt)("p",null,"The Third Party Signer guard requires an extra signer on the transaction."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"thirdPartySigner" : {\n    "signerKey": "<PUBKEY>"\n}\n')),(0,r.kt)("h3",{id:"token-burn"},"Token Burn"),(0,r.kt)("p",null,"The Token Burn guard restricts the mint to holders of a specified SPL Token and requires the burn of the tokens. The ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," determines how many tokens are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"tokenBurn" : {\n    "amount": number,\n    "mint": "<PUBKEY>"\n}\n')),(0,r.kt)("h3",{id:"token-gate"},"Token Gate"),(0,r.kt)("p",null,"The Token Gate guard restricts the mint to holders of a specified SPL Token. The ",(0,r.kt)("inlineCode",{parentName:"p"},"amount")," determines how many tokens are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"tokenGate" : {\n    "amount": number,\n    "mint": "<PUBKEY>"\n}\n')),(0,r.kt)("h3",{id:"token-payment"},"Token Payment"),(0,r.kt)("p",null,"The Token Payment guard restricts the mint to holders of a specified SPL Token, transferring the required amount to the ",(0,r.kt)("inlineCode",{parentName:"p"},"destinationAta")," address. The amount determines how many tokens are required."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"tokenPayment" : {\n    "amount": number,\n    "mint": "<PUBKEY>",\n    "destinationAta": "<PUBKEY>"\n}\n')),(0,r.kt)("h3",{id:"token2022-payment"},"Token2022 Payment"),(0,r.kt)("p",null,"The Token2022 Payment guard allows minting by charging the payer some tokens from a configured Token-2022 mint account. Both the amount of tokens and the destination address can also be configured."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"token2022Payment" : {\n    "amount": number,\n    "mint": "<PUBKEY>",\n    "destinationAta": "<PUBKEY>"\n}\n')),(0,r.kt)("h2",{id:"deployment-commands"},"Deployment Commands"),(0,r.kt)("p",null,"The deployment of a Candy Machine V3 follows the same steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sugar validate")," to verify that all metadata is in place;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sugar upload")," to upload the metadata to the selected storage;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sugar deploy")," to create and deploy a Candy Machine;"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"sugar verify")," to verify that all information is on-chain.")),(0,r.kt)("p",null,"At this point, your Candy Machine is deployed and allows minting only from the ",(0,r.kt)("inlineCode",{parentName:"p"},"mint authority"),", which is the address that created the Candy Machine. The next step is to add a Candy Guard to the Candy Machine to specify the mint configuration (access control)."),(0,r.kt)("p",null,"There are 5 new commands in Sugar to create and interact with a Candy Guard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"add")," to create a new candy guard over a candy machine;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"update")," to update the configuration of an existing candy guard;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"show")," to print the current configuration;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"remove")," to remove the candy guard from a candy machine;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"withdraw")," to close a candy guard account and retrieve the rent funds.")),(0,r.kt)("h3",{id:"add"},(0,r.kt)("inlineCode",{parentName:"h3"},"add")),(0,r.kt)("p",null,"Once you completed the guards configuration in your Sugar config file, you can add a Candy Guard using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sugar guard add\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1/3] \ud83d\udd0d Looking up candy machine\n\nCandy machine ID: 7W9sWpDW4EJBpw2n8oqgJek4LcYDEM1JDPkoTZ7gPn4A\n\n[2/3] \ud83d\udee1  Initializing a candy guard\nSignature: 4fyVi6xj1a5qEzvVubhhNfEX875GFJZLbKfg2q42JLeTxi2pFQEn8GwWFkAWT31z6VxPTecHKRa5ZnKrt31ZCT8Q\n\nCandy guard ID: Bw66NeQ6FF6bnXopiv8hhvXPLaCQR7RC6UEntqVuzhdL\n\n[3/3] \ud83d\udce6 Wrapping\nSignature: 4ACcw1g8G4fE7yZdqqAMXrZtBx96W5zERXnyib694FgvKV9y5TLsuKVViKf8D4GN1jhyP1uqkBpLrwpcgN7Mt9hc\n\nThe candy guard is now the mint authority of the candy machine.\n\n\u2705 Command successful.\n")))),(0,r.kt)("p",null,"At this point, ",(0,r.kt)("inlineCode",{parentName:"p"},"sugar mint")," will stop working since the ",(0,r.kt)("inlineCode",{parentName:"p"},"mint authority")," is now the Candy Guard."),(0,r.kt)("h3",{id:"update"},(0,r.kt)("inlineCode",{parentName:"h3"},"update")),(0,r.kt)("p",null,"To update the Candy Guard configuration, you first need to make the required modification in the Sugar config file and the run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sugar guard update\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1/2] \ud83d\udd0d Loading candy guard\n\u25aa\u25aa\u25aa\u25aa\u25aa Done\nCandy guard ID: Bw66NeQ6FF6bnXopiv8hhvXPLaCQR7RC6UEntqVuzhdL\n\n[2/2] \ud83d\udda5  Updating configuration\nSignature: d8ge5n7rzpeYB68m6VEbJQTYrEmnHo4P3XKXAc5KNYMJnxvq63JegsUMAjMZgBiXAYEqxUrbg9D94D8hT92XH7k\n\n\u2705 Command successful.\n")))),(0,r.kt)("h3",{id:"show"},(0,r.kt)("inlineCode",{parentName:"h3"},"show")),(0,r.kt)("p",null,"To print the on-chain configuration of a Candy Guard, use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sugar guard show\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1/1] \ud83d\udd0d Loading candy guard\n\u25aa\u25aa\u25aa\u25aa\u25aa Done\n\n\ud83d\udee1  Candy Guard ID: Bw66NeQ6FF6bnXopiv8hhvXPLaCQR7RC6UEntqVuzhdL\n :\n :.. base: 7z6f7mq7qGjWu6dimqdAyYNhjG5iqGQ7DYnFV2ckpzoY\n :.. bump: 255\n :.. authority: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8\n :.. data:\n     :.. default:\n     :   :.. bot tax:\n     :   :   :.. lamports: 10000000 (\u25ce 0.01)\n     :   :   :.. last instruction: true\n     :   :.. sol payment: none\n     :   :.. token payment: none\n     :   :.. start date: none\n     :   :.. third party signer: none\n     :   :.. token gate: none\n     :   :.. gatekeeper: none\n     :   :.. end date: none\n     :   :.. allow list: none\n     :   :.. mint limit: none\n     :   :.. nft payment: none\n     :   :.. redeemed amount: none\n     :   :.. address gate: none\n     :   :.. nft gate: none\n     :   :.. nft burn: none\n     :   :.. token burn: none\n     :\n     :.. groups:\n          :.. label: OGslic\n          :   :.. bot tax: none\n          :   :.. sol payment:\n          :   :   :.. lamports: 1 (\u25ce 0.000000001)\n          :   :   :.. destination: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8\n          :   :.. token payment: none\n          :   :.. start date:\n          :   :   :.. date: Thu October 20 2022 12:00:00 UTC\n          :   :.. third party signer: none\n          :   :.. token gate:\n          :   :   :.. amount: 1000000000\n          :   :   :.. mint: 7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf\n          :   :.. gatekeeper: none\n          :   :.. end date: none\n          :   :.. allow list: none\n          :   :.. mint limit: none\n          :   :.. nft payment: none\n          :   :.. redeemed amount: none\n          :   :.. address gate: none\n          :   :.. nft gate: none\n          :   :.. nft burn: none\n          :   :.. token burn: none\n          :\n          :.. label: Public\n              :.. bot tax: none\n              :.. sol payment:\n              :   :.. lamports: 2000000000 (\u25ce 2)\n              :   :.. destination: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8\n              :.. token payment: none\n              :.. start date:\n              :   :.. date: Thu October 20 2022 18:00:00 UTC\n              :.. third party signer: none\n              :.. token gate: none\n              :.. gatekeeper: none\n              :.. end date: none\n              :.. allow list: none\n              :.. mint limit: none\n              :.. nft payment: none\n              :.. redeemed amount: none\n              :.. address gate: none\n              :.. nft gate: none\n              :.. nft burn: none\n              :.. token burn: none\n\n\u2705 Command successful.\n")))),(0,r.kt)("h3",{id:"remove"},(0,r.kt)("inlineCode",{parentName:"h3"},"remove")),(0,r.kt)("p",null,"To remove a Candy Guard from a Candy Machine, use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sugar guard remove\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1/1] \ud83d\udd29 Unwrapping\nSignature: 5hbySp2JPuFrdjauDFVu5P4Fa3EkV9pAyqtgqDRs38d6aVwgiSpsBEs33BKQjqPMvdyyteS2W7ApfmcGstRuajNz\n\nThe candy guard is no longer the mint authority of the candy machine.\n  -> New mint authority: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8\n\n\u2705 Command successful.\n")),(0,r.kt)("p",null,"At this point, the ",(0,r.kt)("inlineCode",{parentName:"p"},"mint authority")," is transferred back to the Candy Machine ",(0,r.kt)("inlineCode",{parentName:"p"},"authority"),". The Candy Guard account remains on-chain and can be reused."))),(0,r.kt)("h3",{id:"withdraw"},(0,r.kt)("inlineCode",{parentName:"h3"},"withdraw")),(0,r.kt)("p",null,"To close the Candy Guard account and retrieve the rent fee, use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sugar guard withdraw\n")),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Output"),(0,r.kt)("p",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"[1/2] \ud83d\udd0d Loading candy guard\n\u25aa\u25aa\u25aa\u25aa\u25aa Done\n\n[2/2] \ud83c\udfe7 Retrieving funds\nSignature: Yfm2kBbs5kygRzH6QDDTXyx2wxqGZ6P6RkTAHEMkHJ7PvpCZKUu2akkZBDHYfdy1TNyUPLywuNSJoPGWAmTSRuK\n\nReceived \u25ce 0.00268656 from rent fee.\n\n\u2705 Command successful.\n")))))}m.isMDXComponent=!0}}]);