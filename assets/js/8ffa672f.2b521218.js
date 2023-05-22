"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3210],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},d),{},{components:n})):r.createElement(h,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38545:function(e,t,n){n.d(t,{Q:function(){return o},U:function(){return s}});var r=n(67294),a=n(45697),i=n.n(a);function s(e){let{children:t}=e;return r.createElement("div",{className:"accordion"},t)}function o(e){let{open:t,title:n,actions:a,keepAlive:i=!0,children:s}=e;const[o,c]=(0,r.useState)(t),d=o||i;return r.createElement("div",{className:["accordion-item",o?"accordion-item-opened":"accordion-item-closed"].join(" ")},r.createElement("div",{className:"accordion-item-header",onClick:()=>c(!o)},r.createElement("h3",null,r.createElement(l,{opened:o}),r.createElement("span",null,n)),a),r.createElement("div",{className:"accordion-item-content"},d&&s))}function l(e){let{opened:t}=e;return t?r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},r.createElement("rect",{width:"256",height:"256",fill:"none"}),r.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},r.createElement("rect",{width:"256",height:"256",fill:"none"}),r.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}s.propTypes={children:i().any},o.propTypes={open:i().bool,title:i().string,children:i().any,actions:i().any,keepAlive:i().bool},l.propTypes={opened:i().bool}},64114:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var r=n(83117),a=(n(67294),n(3905)),i=n(38545);const s={description:"Requires an additional signer on the transaction."},o="Third Party Signer",l={unversionedId:"programs/candy-machine/available-guards/third-party-signer",id:"programs/candy-machine/available-guards/third-party-signer",title:"Third Party Signer",description:"Requires an additional signer on the transaction.",source:"@site/docs/01-programs/02-candy-machine/10-available-guards/15-third-party-signer.md",sourceDirName:"01-programs/02-candy-machine/10-available-guards",slug:"/programs/candy-machine/available-guards/third-party-signer",permalink:"/programs/candy-machine/available-guards/third-party-signer",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/10-available-guards/15-third-party-signer.md",tags:[],version:"current",lastUpdatedAt:1684777e3,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:15,frontMatter:{description:"Requires an additional signer on the transaction."},sidebar:"sidebar",previous:{title:"Start Date",permalink:"/programs/candy-machine/available-guards/start-date"},next:{title:"Token Burn",permalink:"/programs/candy-machine/available-guards/token-burn"}},c={},d=[{value:"Overview",id:"overview",level:2},{value:"Guard Settings",id:"guard-settings",level:2},{value:"Mint Settings",id:"mint-settings",level:2},{value:"Route Instruction",id:"route-instruction",level:2}],p={toc:d};function u(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"third-party-signer"},"Third Party Signer"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Third Party Signer")," guard requires a predefined address to sign each mint transaction. The signer will need to be passed within the mint settings of this guard."),(0,a.kt)("p",null,"This allows for more centralized mints where every single mint transaction has to go through a specific signer."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"CandyMachinesV3-GuardsThirdPartySigner.png",src:n(36499).Z+"#radius",width:"2472",height:"936"})),(0,a.kt)("h2",{id:"guard-settings"},"Guard Settings"),(0,a.kt)("p",null,"The Third Party Signer guard contains the following settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Signer Key"),": The address of the signer that will need to sign each mint transaction.")),(0,a.kt)(i.U,{mdxType:"Accordion"},(0,a.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"Here\u2019s how we can set up a Candy Machine using the Third Party Signer guard."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const myConfiguredSigner = generateSigner(umi);\n\ncreate(umi, {\n  // ...\n  guards: {\n    thirdPartySigner: some({ signerKey: myConfiguredSigner.publicKey }),\n  },\n});\n")),(0,a.kt)("p",null,"API References: ",(0,a.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,a.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/ThirdPartySigner.html"},"ThirdPartySigner")))),(0,a.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"Here\u2019s how we can set up a Candy Machine using the Third Party Signer guard via the JS SDK."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    thirdPartySigner: {\n      signerKey: someWallet.publicKey,\n    },\n  },\n});\n")),(0,a.kt)("p",null,"In this example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"someWallet")," wallet will need to sign every mint transaction."),(0,a.kt)("p",null,"API References: ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.ThirdPartySignerGuardSettings.html"},"Guard Settings"),".")))),(0,a.kt)("h2",{id:"mint-settings"},"Mint Settings"),(0,a.kt)("p",null,"The Third Party Signer guard contains the following Mint Settings:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Signer"),": The required third-party signer. The address of this signer must match the Signer Key in the guard settings.")),(0,a.kt)(i.U,{mdxType:"Accordion"},(0,a.kt)(i.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"When minting via the Umi library, simply provide the third-party signer via the ",(0,a.kt)("inlineCode",{parentName:"p"},"signer")," attribute like so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"create(umi, {\n  // ...\n  guards: {\n    thirdPartySigner: some({ signer: myConfiguredSigner }),\n  },\n});\n")))),(0,a.kt)(i.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,a.kt)("div",{className:"accordion-item-padding"},(0,a.kt)("p",null,"When minting via the JS SDK, simply provide the third-party signer via the ",(0,a.kt)("inlineCode",{parentName:"p"},"signer")," attribute like so."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const { nft } = await metaplex.candyMachines().mint({\n  // ...\n  guards: {\n    thirdPartySigner: {\n      signer: someWallet,\n    },\n  },\n});\n")),(0,a.kt)("p",null,"API References: ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#mint"},"Operation"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineInput.html"},"Input"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.MintFromCandyMachineOutput.html"},"Output"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#mint"},"Transaction Builder"),", ",(0,a.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.ThirdPartySignerGuardMintSettings.html"},"Mint Settings"),".")))),(0,a.kt)("h2",{id:"route-instruction"},"Route Instruction"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The Third Party Signer guard does not support the route instruction.")))}u.isMDXComponent=!0},36499:function(e,t,n){t.Z=n.p+"assets/images/CandyMachinesV3-GuardsThirdPartySigner-9559b7ab19a43ad78ed30fda879553bf.png"}}]);