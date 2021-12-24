"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8179],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),p=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},d=function(t){var e=p(t.components);return a.createElement(s.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),u=p(n),c=i,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||r;return n?a.createElement(g,l(l({ref:e},d),{},{components:n})):a.createElement(g,l({ref:e},d))}));function c(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var p=2;p<r;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},45834:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return u}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),l=["components"],o={},s="Configuration",p={unversionedId:"candy-machine-v2/Configuration",id:"candy-machine-v2/Configuration",title:"Configuration",description:"The configuration in CMv2 is now specified in a single JSON file. This allows you to save and reuse the configuration across multiple drops. Additionally, there is a single account on-chain that holds all the configuration of a Candy Machine and the values can be updated at any point. The way the Candy Machine operates depends on the settings used, and therefore it is the most important part in setting up your Candy Machine. It is crucial to understand how the settings work to decide which ones to use for your project.",source:"@site/docs/candy-machine-v2/03-Configuration.md",sourceDirName:"candy-machine-v2",slug:"/candy-machine-v2/Configuration",permalink:"/candy-machine-v2/Configuration",editUrl:"https://github.com/metaplex/docs/tree/main/docs/candy-machine-v2/03-Configuration.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{},sidebar:"sidebar",previous:{title:"Getting Started",permalink:"/candy-machine-v2/GettingStarted"},next:{title:"Preparing your Assets",permalink:"/candy-machine-v2/PreparingAssets"}},d=[{value:"Minimal Configuration",id:"minimal-configuration",children:[],level:2},{value:"Captcha Settings (Gateway)",id:"captcha-settings-gateway",children:[],level:2},{value:"Hidden Settings",id:"hidden-settings",children:[],level:2},{value:"End Settings",id:"end-settings",children:[],level:2},{value:"Whitelist Settings",id:"whitelist-settings",children:[],level:2},{value:"Finishing up",id:"finishing-up",children:[],level:2}],m={toc:d};function u(t){var e=t.components,n=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"The configuration in ",(0,r.kt)("inlineCode",{parentName:"p"},"CMv2")," is now specified in a single JSON file. This allows you to save and reuse the configuration across multiple drops. Additionally, there is a single account on-chain that holds all the configuration of a Candy Machine and the values can be updated at any point. The way the Candy Machine operates depends on the settings used, and therefore it is the ",(0,r.kt)("strong",{parentName:"p"},"most important part in setting up your Candy Machine"),". It is crucial to understand how the settings work to decide which ones to use for your project."),(0,r.kt)("p",null,"We will discuss a few examples on how to setup a Candy Machine, starting with the settings to configure a ",(0,r.kt)("inlineCode",{parentName:"p"},"CMv2")," to operate in a similar way as a ",(0,r.kt)("inlineCode",{parentName:"p"},"CMv1"),"."),(0,r.kt)("p",null,"The table below provides an overview of the settings available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Setting"),(0,r.kt)("th",{parentName:"tr",align:null},"Options"),(0,r.kt)("th",{parentName:"tr",align:null},"Accepted Values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"price"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"The amount in SOL or SPL token for a mint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of items in the Candy Machine")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"gatekeeper"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"gatekeeperNetwork"),(0,r.kt)("td",{parentName:"tr",align:null},"Address"),(0,r.kt)("td",{parentName:"tr",align:null},"Captcha provider address")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"expireOnUse"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Requires a new captcha after a use")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"solTreasuryAccount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PublicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"SOL wallet to receive proceedings SOL payments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"splTokenAccount"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PublicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"SPL token wallet to receive proceedings from SPL token payments")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"splToken"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"PublicKey"),(0,r.kt)("td",{parentName:"tr",align:null},"Mint address of the token accepted as payment")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"goLiveDate"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Datetime"),(0,r.kt)("td",{parentName:"tr",align:null},"Timestamp when minting is allowed \u2013 the Candy Machine authority and whitelists can bypass this constraint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endSettings"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled the use of a date to stop the mint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"amount"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Enable stopping the mint after a specific amount is minted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"String / Integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Either specify a date string (if date = true) or a integer value (if amount = true)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"whitelistMintSettings"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u201cburnEveryTime\u201d : true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whitelist token is burned after the mint")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u201cneverBurn\u201d : true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whitelist token is returned to holder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"mint"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Mint address of the whitelist token")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"presale"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether whitelist token holders can mint before goLiveDate (presale)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"discountPrice"),(0,r.kt)("td",{parentName:"tr",align:null},"Number"),(0,r.kt)("td",{parentName:"tr",align:null},"Price for whitelist token holders")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hiddenSettings"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the mint. The number of the mint will be appended to the name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"uri"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Single URI to all mints")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"hash"),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"32 character hash \u2013 in most cases this is the hash of the cache file with the mapping between mint number and metadata so that the order can be verified when the mint is complete")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"storage"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Storage type to upload images and metadata")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u201carweave-sol\u201d"),(0,r.kt)("td",{parentName:"tr",align:null},"Uploads to arweave and payment are made in SOL (only works in mainnet)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u201carweave-bundle\u201d"),(0,r.kt)("td",{parentName:"tr",align:null},"Uploads to arweave and payment are made in AR (only work in mainnet and requires an Arweave wallet)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u201carweave\u201d"),(0,r.kt)("td",{parentName:"tr",align:null},"Uploads to arweave")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u201cipfs\u201d"),(0,r.kt)("td",{parentName:"tr",align:null},"Uploads to IPFS (must specify either Infura Project ID or Secret Key)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u201caws\u201d"),(0,r.kt)("td",{parentName:"tr",align:null},"Uploads to AWS (must specify AWS Bucket name)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ipfsInfuraProjectId"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Infura Project ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ipfsInfuraSecret"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Infure Project Secret")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arweaveJwk"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"Arweave JWK wallet file")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"awsS3Bucket"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"String"),(0,r.kt)("td",{parentName:"tr",align:null},"AWS bucket name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"noRetainAuthority"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicates whether the candy machine authority has the update authority for each mint or not")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"noMutable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Indicated whether each mint is mutable or not")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Any setting that is not used must be set to null to avoid errors from the CLI."))),(0,r.kt)("h2",{id:"minimal-configuration"},"Minimal Configuration"),(0,r.kt)("p",null,"A minimal Candy Machine config settings looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "price": 1.0,\n    "number": 10,\n    "gatekeeper": null,\n    "solTreasuryAccount": "<YOUR WALLET ADDRESS>",\n    "splTokenAccount": null,\n    "splToken": null,\n    "goLiveDate": "25 Dec 2021 00:00:00 GMT",\n    "endSettings": null,\n    "whitelistMintSettings": null,\n    "hiddenSettings": null,\n    "storage": "arweave",\n    "ipfsInfuraProjectId": null,\n    "ipfsInfuraSecret": null,\n    "awsS3Bucket": null,\n    "noRetainAuthority": false,\n    "noMutable": false\n}\n')),(0,r.kt)("p",null,"The above settings will configure a ",(0,r.kt)("inlineCode",{parentName:"p"},"CMv2")," to operate in a similar way as a ",(0,r.kt)("inlineCode",{parentName:"p"},"CMv1")," \u2013 although the mint order will be unpredictable. In other words, even the most simple v2 configuration provides an improvement over v1. You can view this as the minimum set of settings required to create a Candy Machine. Many projects will be using a similar set of settings, as this already provides a fully-working on-chain distribution mechanism."),(0,r.kt)("p",null,"The settings that are specified in this example are:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"price"),(0,r.kt)("li",{parentName:"ul"},"number"),(0,r.kt)("li",{parentName:"ul"},"solTreasureAccount"),(0,r.kt)("li",{parentName:"ul"},"goLiveDate"),(0,r.kt)("li",{parentName:"ul"},"noRetainAuthority"),(0,r.kt)("li",{parentName:"ul"},"noMutable")),(0,r.kt)("p",null,"If this satisfies the requirement for your project, save these settings to a file (e.g., ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json"),") and you are ready to start uploading your items and create a Candy Machine. Below we will discuss other configuration examples that represent specific use-cases. These examples will use the settings above as a starting point."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"It is important that the ",(0,r.kt)("inlineCode",{parentName:"p"},"number")," setting value matches the number of items in your Candy Machine.")),(0,r.kt)("h2",{id:"captcha-settings-gateway"},"Captcha Settings (Gateway)"),(0,r.kt)("p",null,"While the unpredictable mint index provides some protection against bots, bots are still able to mint directly from the Candy Machine. If you want to make sure that only humans can mint from your project, you can enable the gatekeeper settings in your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," with the following values:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"gatekeeper": {\n    "gatekeeperNetwork" : "ignREusXmGrscGNUesoU9mxfds9AiYTezUKex2PsZV6",\n    "expireOnUse" : true\n}\n')),(0,r.kt)("p",null,"This will enable a captcha challenge once the mint button is clicked - only after passing the captcha you will be allowed to mint."),(0,r.kt)("p",null,"When you use a captcha, you will not be able to mint from the CLI command ",(0,r.kt)("inlineCode",{parentName:"p"},"mint_one_token"),". If you want to pre-mint from a ",(0,r.kt)("inlineCode",{parentName:"p"},"CMv2")," and are planning to use a captcha, you should set the ",(0,r.kt)("inlineCode",{parentName:"p"},"goLiveDate")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," and turn captcha (temporarily) off. This will allow you to mint from the command line, but only ",(0,r.kt)("strong",{parentName:"p"},"you")," as the ",(0,r.kt)("inlineCode",{parentName:"p"},"CMv2")," authority. Once you complete the pre-mint, turn captch on and set the correct ",(0,r.kt)("inlineCode",{parentName:"p"},"goLiveDate"),"."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your Candy Machine is ",(0,r.kt)("strong",{parentName:"p"},"live")," and is has ",(0,r.kt)("strong",{parentName:"p"},"no captcha"),", it is open to bots attacks. The unpredictable mint index only prevents knowing which item to mint, but bots can still snipe a large volume of items."))),(0,r.kt)("h2",{id:"hidden-settings"},"Hidden Settings"),(0,r.kt)("p",null,"Hidden settings serve two purposes. First, it allows the creation of larger drops (20k+), since the metadata is not stored on-chain. In turn, this also allows the creation of hide-and-reveal drops, where users discover which item(s) they minted after the mint is complete."),(0,r.kt)("p",null,"To enable hidden settings, you need to provide the details for the ",(0,r.kt)("em",{parentName:"p"},"hiddenSettings")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"hiddenSettings": {\n    "name":"My Hidden Collection ",\n    "uri":"uri",\n    "hash":"44kiGWWsSgdqPMvmqYgTS78Mx2BKCWzd"\n}\n')),(0,r.kt)("p",null,"Once hidden settings are enabled, every mint will have the same URI and the name will be created by appending the mint number (e.g., \u201c#45\u201d) to the name specified. The hash is expected to be a 32 character string corresponding to the hash of a cache file that has the mapping between a mint number and the actual metadata URI. This allows the order of the mint to be verified by others after the mint is complete."),(0,r.kt)("p",null,"Since the metadata is not on-chain, it is possible to create very large drops. The only caveat is that there is a need for an off-chain process to update the metadata for each item. This is important otherwise all items will have the same metadata."),(0,r.kt)("h2",{id:"end-settings"},"End Settings"),(0,r.kt)("p",null,"End Settings provides a mechanism to stop the mint if a certain condition is met without interaction. There are two conditions that can be specified."),(0,r.kt)("p",null,"Stop a mint at a specific timestamp (e.g., at the end of a specific day):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"endSettings": {\n    "endSettingType": { "date":true },\n    "value":"25 Dec 2021 23:59:00 GMT"\n}\n')),(0,r.kt)("p",null,"Stop a mint after a certain amount of item have been minted (e.g., 10 items minted):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"endSettings": {\n    "endSettingType": { "amount":true },\n    "value":10\n}\n')),(0,r.kt)("h2",{id:"whitelist-settings"},"Whitelist Settings"),(0,r.kt)("p",null,"Whitelist settings provide a variety of different use cases and revolve around the idea of using custom SPL tokens to offer special rights to token holders - how said SPL token is distributed is up to you. We will discuss a few scenarios below."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"In all the examples below, you will need to change the ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," settings address ",(0,r.kt)("inlineCode",{parentName:"p"},'"7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf"')," with the mint address of your SPL token.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Creating a whitelist ",(0,r.kt)("strong",{parentName:"p"},"only")," for presale and burning the whitelist token each time. Once the sales begin, whitelist do not have any privileges."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"whitelistMintSettings": {\n    "mode" : { "burnEveryTime": true },\n    "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",\n    "presale" : true,\n    "discountPrice" : null\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Creating a whitelist for presale, burning the whitelist token each time and provides users with a 0.5 SOL price tag instead. Once the sales begin (i.e., everyone can mint), the whitelist gets you only the discount."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"whitelistMintSettings": {\n    "mode" : { "burnEveryTime": true },\n    "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",\n    "presale" : true,\n    "discountPrice" : 0.5\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Creating a whitelist for presale, not burning the whitelist token (you will be able to reuse it) and gives users a 0.5 SOL price tag instead. Once the sales begin (i.e., everyone can mint), the whitelist gets you only the discount."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"whitelistMintSettings": {\n    "mode" : { "neverBurn": true },\n    "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",\n    "presale" : true,\n    "discountPrice" : 0.5\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Creating a whitelist, not burning the whitelist token (you will be able to reuse it) and gives users a 0.5 SOL price tag instead - i.e., the whitelist ",(0,r.kt)("strong",{parentName:"p"},"only")," gets you the discount."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"whitelistMintSettings": {\n    "mode" : { "neverBurn": true },\n    "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",\n    "presale" : false,\n    "discountPrice" : 0.5\n}\n'))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Creating a whitelist, burning the whitelist token each time, running the white list during the sale. This in effect restrict any user without the whitelist token from minting at all - this is why ",(0,r.kt)("inlineCode",{parentName:"p"},"presale")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"discountPrice")," set to ",(0,r.kt)("inlineCode",{parentName:"p"},"null"),". The only purpose of the whitelist is to restrict the mint."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'"whitelistMintSettings": {\n    "mode" : { "burnEveryTime": true },\n    "mint" : "7nE1GmnMmDKiycFkpHF7mKtxt356FQzVonZqBWsTWZNf",\n    "presale" : false,\n    "discountPrice" : null\n}\n')))),(0,r.kt)("h2",{id:"finishing-up"},"Finishing up"),(0,r.kt)("p",null,"Once you have decided which settings are suitable for your project, save your settings in a json file - in this guide we will be using a file called ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json"),". At this point, you are ready to start uploading your assets to the Candy Machine."))}u.isMDXComponent=!0}}]);