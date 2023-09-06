"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1701],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,h=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return s},U:function(){return o}});var a=n(67294),r=n(45697),i=n.n(r);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function s(e){let{open:t,title:n,actions:r,keepAlive:i=!0,children:o}=e;const[s,c]=(0,a.useState)(t),u=s||i;return a.createElement("div",{className:["accordion-item",s?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>c(!s)},a.createElement("h3",null,a.createElement(l,{opened:s}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},u&&o))}function l(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:i().any},s.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},l.propTypes={opened:i().bool}},31062:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var a=n(83117),r=(n(67294),n(3905)),i=n(38545);const o={description:"Configurable tax to charge invalid transactions."},s="Bot Tax",l={unversionedId:"programs/candy-machine/available-guards/bot-tax",id:"programs/candy-machine/available-guards/bot-tax",title:"Bot Tax",description:"Configurable tax to charge invalid transactions.",source:"@site/docs/01-programs/02-candy-machine/10-available-guards/03-bot-tax.md",sourceDirName:"01-programs/02-candy-machine/10-available-guards",slug:"/programs/candy-machine/available-guards/bot-tax",permalink:"/programs/candy-machine/available-guards/bot-tax",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/10-available-guards/03-bot-tax.md",tags:[],version:"current",lastUpdatedAt:1693996694,formattedLastUpdatedAt:"Sep 6, 2023",sidebarPosition:3,frontMatter:{description:"Configurable tax to charge invalid transactions."},sidebar:"sidebar",previous:{title:"Allow List",permalink:"/programs/candy-machine/available-guards/allow-list"},next:{title:"End Date",permalink:"/programs/candy-machine/available-guards/end-date"}},c={},u=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2}],d={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"bot-tax"},"Bot Tax"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Bot Tax")," guard charges a penalty for invalid transactions to discourage bots from attempting to mint NFTs. This amount is usually small to hurt bots without affecting genuine mistakes from real users. All bot taxes will be transferred to the Candy Machine account so that, once minting is over, you can access these funds by deleting the Candy Machine account."),(0,r.kt)("p",null,"This guard is a bit special and affects the minting behaviour of all other guards. When the Bot Tax is activated and any other guard fails to validate the mint, ",(0,r.kt)("strong",{parentName:"p"},"the transaction will pretend to succeed"),". This means no errors will be returned by the program but no NFT will be minted either. This is because the transaction must succeed for the funds to be transferred from the bot to the Candy Machine account."),(0,r.kt)("p",null,"Additionally, the Bot Tax guard enables us to ensure the mint instruction was the last instruction of the transaction. This prevents bots from adding malicious instructions after the mint and returns an error to avoid paying the tax."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsBotTax.png",src:n(15362).Z+"#radius",width:"2472",height:"936"})),(0,r.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,r.kt)("p",null,"The Bot Tax guard contains the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Lamports"),": The amount in SOL (or lamports) to charge for an invalid transaction. We recommend setting a fairly small amount to avoid affecting real users who made a genuine mistake. Client-side validation can also help reduce affecting real users."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Last Instruction"),": Whether or not we should forbid minting and charge a bot tax when the mint instruction is not the last instruction of the transaction. We recommend setting this to ",(0,r.kt)("inlineCode",{parentName:"li"},"true")," to be better protected against bots.")),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s how we can set up a Candy Machine using the Bot Tax guard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"create(umi, {\n  // ...\n  guards: {\n    botTax: some({\n      lamports: sol(0.01),\n      lastInstruction: true,\n    }),\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/BotTax.html"},"BotTax")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s how we can set up a Candy Machine using the Bot Tax guard via the JS SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { sol } from "@metaplex-foundation/js";\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    botTax: {\n      lamports: sol(0.01),\n      lastInstruction: true,\n    },\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.BotTaxGuardSettings.html"},"Guard Settings"),".")))),(0,r.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Bot Tax guard does not need Mint Settings.")),(0,r.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Bot Tax guard does not support the route instruction.")))}p.isMDXComponent=!0},15362:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsBotTax-c01d9bbed0ef2f161dd336ec96d68cd6.png"}}]);