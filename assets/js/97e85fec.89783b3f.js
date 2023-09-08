"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4252],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return c},U:function(){return o}});var a=n(67294),r=n(45697),i=n.n(r);function o(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function c(e){let{open:t,title:n,actions:r,keepAlive:i=!0,children:o}=e;const[c,l]=(0,a.useState)(t),p=c||i;return a.createElement("div",{className:["accordion-item",c?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>l(!c)},a.createElement("h3",null,a.createElement(s,{opened:c}),a.createElement("span",null,n)),r),a.createElement("div",{className:"accordion-item-content"},p&&o))}function s(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}o.propTypes={children:i().any},c.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},s.propTypes={opened:i().bool}},33359:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=n(83117),r=(n(67294),n(3905)),i=n(38545);const o={description:"Restricts the mint to holders of a specified token."},c="Token Gate",s={unversionedId:"programs/candy-machine/available-guards/token-gate",id:"programs/candy-machine/available-guards/token-gate",title:"Token Gate",description:"Restricts the mint to holders of a specified token.",source:"@site/docs/01-programs/02-candy-machine/10-available-guards/17-token-gate.md",sourceDirName:"01-programs/02-candy-machine/10-available-guards",slug:"/programs/candy-machine/available-guards/token-gate",permalink:"/programs/candy-machine/available-guards/token-gate",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/10-available-guards/17-token-gate.md",tags:[],version:"current",lastUpdatedAt:1694190861,formattedLastUpdatedAt:"Sep 8, 2023",sidebarPosition:17,frontMatter:{description:"Restricts the mint to holders of a specified token."},sidebar:"sidebar",previous:{title:"Token Burn",permalink:"/programs/candy-machine/available-guards/token-burn"},next:{title:"Token Payment",permalink:"/programs/candy-machine/available-guards/token-payment"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2}],d={toc:p};function u(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"token-gate"},"Token Gate"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"A newer version of this page is available in the Developer Hub. ",(0,r.kt)("a",{parentName:"strong",href:"https://developers.metaplex.com/candy-machine/guards/token-gate"},"Click here to read it"),"."))),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The ",(0,r.kt)("strong",{parentName:"p"},"Token Gate")," guard restricts minting to token holders of a configured mint account. If the payer does not have the required amount of tokens, minting will fail."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardsTokenGate.png",src:n(2800).Z+"#radius",width:"2472",height:"936"})),(0,r.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,r.kt)("p",null,"The Token Gate guard contains the following settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Amount"),": The number of tokens required."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mint"),": The address of the mint account defining the SPL Token we want to gate with.")),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s how we can set up a Candy Machine using the Token Gate guard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"create(umi, {\n  // ...\n  guards: {\n    tokenGate: some({\n      amount: 300,\n      mint: tokenMint.publicKey,\n    }),\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/TokenGateArgs.html"},"TokenGate")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s an example of how to set up a Candy Machine using the Token Gate guard."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { token } from "@metaplex-foundation/js";\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    tokenGate: {\n      amount: token(300),\n      mint: tokenMint.address,\n    },\n  },\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.TokenGateGuardSettings.html"},"Guard Settings"),".")))),(0,r.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,r.kt)("p",null,"The Token Gate guard contains the following Mint Settings:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mint"),": The address of the mint account defining the SPL Token we want to gate with.")),(0,r.kt)("p",null,"Note that, if you\u2019re planning on constructing instructions without the help of our SDKs, you will need to provide these Mint Settings and more as a combination of instruction arguments and remaining accounts. See the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/mpl-candy-machine/tree/main/programs/candy-guard#tokengate"},"Candy Guard\u2019s program documentation")," for more details."),(0,r.kt)(i.U,{mdxType:"Accordion"},(0,r.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"You may pass the Mint Settings of the Token Gate guard using the ",(0,r.kt)("inlineCode",{parentName:"p"},"mintArgs")," argument like so."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"mintV2(umi, {\n  // ...\n  mintArgs: {\n    tokenGate: some({ mint: tokenMint.publicKey }),\n  },\n});\n")),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/mintV2.html"},"mintV2"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/TokenGateMintArgs.html"},"TokenGateMintArgs")))),(0,r.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The JS SDK does not require any Mint Settings for the Token Gate guard since it can infer them from the provided Candy Machine model."))))),(0,r.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"The Token Gate guard does not support the route instruction.")))}u.isMDXComponent=!0},2800:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsTokenGate-401b0b50319d41b990cc6025ea57d311.png"}}]);