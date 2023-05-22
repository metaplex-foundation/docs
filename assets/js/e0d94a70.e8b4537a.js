"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3320],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var o=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},r=Object.keys(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(o=0;o<r.length;o++)n=r[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var l=o.createContext({}),c=function(t){var e=o.useContext(l),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=c(t.components);return o.createElement(l.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},h=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,r=t.originalType,l=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),h=c(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||r;return n?o.createElement(m,i(i({ref:e},u),{},{components:n})):o.createElement(m,i({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var r=n.length,i=new Array(r);i[0]=h;var s={};for(var l in e)hasOwnProperty.call(e,l)&&(s[l]=e[l]);s.originalType=t,s.mdxType="string"==typeof t?t:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},32431:function(t,e,n){n.r(e),n.d(e,{assets:function(){return l},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return r},metadata:function(){return s},toc:function(){return c}});var o=n(83117),a=(n(67294),n(3905));const r={sidebar_label:"How to get Your Mint List"},i='Mint Account List ("Hash List")',s={unversionedId:"guides/mint-lists",id:"guides/mint-lists",title:'Mint Account List ("Hash List")',description:'Third-party marketplaces often request a "hash list", more appropriately called a "mint list", of NFTs in order to create a collection for listing. This is due to the fact that there is currently no on-chain Collection standard on Mainnet Beta (Coming soon!). The "hash list" is a list of the mint accounts of all the NFTs in your collection and allows the marketplace to determine which NFTs belong in your collection and which do not.',source:"@site/docs/04-guides/02-mint-lists.md",sourceDirName:"04-guides",slug:"/guides/mint-lists",permalink:"/guides/mint-lists",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/04-guides/02-mint-lists.md",tags:[],version:"current",lastUpdatedAt:1684777e3,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:2,frontMatter:{sidebar_label:"How to get Your Mint List"},sidebar:"sidebar",previous:{title:"How to set up a CLI Wallet",permalink:"/guides/cli-wallet"},next:{title:"How to Airdrop Tokens",permalink:"/guides/airdrops"}},l={},c=[],u={toc:c};function p(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mint-account-list-hash-list"},'Mint Account List ("Hash List")'),(0,a.kt)("p",null,'Third-party marketplaces often request a "hash list", more appropriately called a "mint list", of NFTs in order to create a collection for listing. This is due to the fact that there is currently no on-chain Collection standard on Mainnet Beta (Coming soon!). The "hash list" is a list of the mint accounts of all the NFTs in your collection and allows the marketplace to determine which NFTs belong in your collection and which do not. '),(0,a.kt)("p",null,"The typical method to create the mint list is to a use a tool that finds all NFTs with a specific creator in the first position of the creators array. If your NFTs were minted with a candy machine this will be the candy machine creator id by default. If you have multiple candy machines that are part of the collection, you can create a separate mint list for each candy machine and combine them together to create a single mint list which you provide to the marketplace(s) you are listing with. "),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Candy Machine v2 has a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"candy_machine_id")," found in your cache file which identifies the candy machine on-chain, and a ",(0,a.kt)("inlineCode",{parentName:"p"},"candy_machine_creator_id")," that it uses to sign the NFT by placing it as a verified creator in the creators array. ")),(0,a.kt)("p",null,"If you minted through the storefront or modified your NFTs to accommodate Phantom's collection ordering requirements, you might instead need to search by your creator wallet, if it is in the first position of the creators array."),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Metaplex recommends only using tools that check for a ",(0,a.kt)("em",{parentName:"p"},"verified")," creator, otherwise fake NFTs could end up on your list. The tools below are the ones we know of currently that check for a verified creator. If you have a tool that supports this, contact us, and we'll add it to the list.")),(0,a.kt)("p",null,"The following third-party tools can be used to generate the mint list:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://famousfoxes.com/snapshot"},"Famous Foxes Snapshot"),"\nA web application to create mint lists as well as holder snapshots.")),(0,a.kt)("p",null,"Usage: input your first creator, candy machine creator id or collection key in the Mints tab with the appropriate option."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://sol-nft.tools"},"Sol-NFT Tools"),"\nA web-based tool that allows you to generate a mint list and has other useful features as well. Easiest to use for non-developers.")),(0,a.kt)("p",null,'Usage: put in your creator or candy machine creator id into the "Get Mint IDs" tab.'),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://magiceden.io/mintlist-tool"},"Magic Eden Hash List Finder"),"\nA web-based tool that allows you to generate a mint list.")),(0,a.kt)("p",null,"Usage: put in your verified candy machine creator id or verified first creator address."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/samuelvanderwaal/metaboss"},"Metaboss"),"\nA tool primarily targeted at developers which has a ",(0,a.kt)("inlineCode",{parentName:"li"},"snapshot mints")," command for getting mint lists and many other useful features.")),(0,a.kt)("p",null,"Usage: see ",(0,a.kt)("a",{parentName:"p",href:"https://metaboss.rs"},"https://metaboss.rs"),"."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Metaplex does not maintain the tools listed above. If you have issues with them please create issues in the appropriate GitHub repository, or ask in a general channel on the Discord to get help from community members.")))}p.isMDXComponent=!0}}]);