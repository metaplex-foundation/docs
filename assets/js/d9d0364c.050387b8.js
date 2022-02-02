"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7050],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,i=function(t,e){if(null==t)return{};var n,a,i={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var s=a.createContext({}),d=function(t){var e=a.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,i=t.mdxType,r=t.originalType,s=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=i,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||r;return n?a.createElement(h,l(l({ref:e},p),{},{components:n})):a.createElement(h,l({ref:e},p))}));function c(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var r=n.length,l=new Array(r);l[0]=m;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},88466:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),l=["components"],o={sidebar_label:"Specification",sidebar_position:2},s="Specification",d={unversionedId:"token-metadata/specification",id:"token-metadata/specification",title:"Specification",description:"The Token Metadata program provides decorator structs to a token mint. Basic information about the token is provided with the Metadata struct, whose account address is a Program Derived Address (PDA) with a derived key of ['metadata', metadataprogramid, mint_id].",source:"@site/docs/token-metadata/specification.md",sourceDirName:"token-metadata",slug:"/token-metadata/specification",permalink:"/token-metadata/specification",editUrl:"https://github.com/metaplex/docs/tree/main/docs/token-metadata/specification.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Specification",sidebar_position:2},sidebar:"sidebar",previous:{title:"API",permalink:"/token-metadata/api"},next:{title:"Overview",permalink:"/token-metadata/Versions/v1.2.*/overview"}},p=[{value:"Full Metadata Struct",id:"full-metadata-struct",children:[],level:2},{value:"<strong>Token Standards</strong>",id:"token-standards",children:[],level:2},{value:"<strong>Collections</strong>",id:"collections",children:[{value:"<strong>On-Chain Representation of a Collection</strong>",id:"on-chain-representation-of-a-collection",children:[{value:"Collection struct fields",id:"collection-struct-fields",children:[],level:4}],level:3},{value:"Delegate Collection Authority Record",id:"delegate-collection-authority-record",children:[],level:3}],level:2},{value:"Token Use Settings",id:"token-use-settings",children:[{value:"Delegate Use Authority",id:"delegate-use-authority",children:[],level:3}],level:2}],u={toc:p};function m(t){var e=t.components,n=(0,i.Z)(t,l);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"specification"},"Specification"),(0,r.kt)("p",null,"The Token Metadata program provides decorator structs to a token mint. Basic information about the token is provided with the ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata")," struct, whose account address is a Program Derived Address (PDA) with a derived key of ",(0,r.kt)("inlineCode",{parentName:"p"},"['metadata', metadata_program_id, mint_id]"),".\nYour NFT should have the following information as on-chain metadata:"),(0,r.kt)("h2",{id:"full-metadata-struct"},"Full Metadata Struct"),(0,r.kt)("p",null,"The below code snippet is the representation on chain of the full metadata struct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Metadata {\n    pub key: Key,\n    pub update_authority: Pubkey,\n    pub mint: Pubkey,\n    pub data: Data,\n    // Immutable, once flipped, all sales of this metadata are considered secondary.\n    pub primary_sale_happened: bool,\n    // Whether or not the data struct is mutable, default is not\n    pub is_mutable: bool,\n    /// nonce for easy calculation of editions, if present\n    pub edition_nonce: Option<u8>,\n    /// Since we cannot easily change Metadata, we add the new DataV2 fields here at the end.\n    /// Collection\n    pub collection: Option<Collection>,\n    /// Uses\n    pub uses: Option<Uses>,\n    /// Token Standard is deterministic and will change from SemiFungible to NonFungible if\n    /// you call the create master edition call and it succeeds.\n    pub token_standard: Option<TokenStandard>,\n}\n")),(0,r.kt)("p",null,"The URI filed contains a pointer to the rest of the metadata. This metadata is stored off chain in most cases and the URI is usually a ",(0,r.kt)("inlineCode",{parentName:"p"},"https:")," link to some decentralized storage.\nThis uri must point to a JSON file that conforms to one of our Token Standards."),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"NOTE: The below Token Standards were introduced in Token Metadata v1.1.0.\nMany tokens will still conform to the v1.0.0 ",(0,r.kt)("inlineCode",{parentName:"p"},"NonFungible")," json standard ",(0,r.kt)("a",{parentName:"p",href:"/token-metadata/Versions/v1.0.0/nft-standard"},"V1.0.0")))),(0,r.kt)("h2",{id:"token-standards"},(0,r.kt)("strong",{parentName:"h2"},"Token Standards")),(0,r.kt)("p",null,'As token usage has evolved on Solana, it has become clear that there are more types of tokens than simply "fungible" and "non-fungible" tokens. An example is something the community is calling a "semi-fungible token", a SPL token with a supply greater than 1 but which has typical NFT attributes such as an image and an attributes array in the JSON metadata. The consensus seems to be that these should be stored in wallets in the same view as standard NFTs, or in their own view but separate from "standard" fungible SPL tokens. These tokens are becoming popular in gaming contexts to support fungible items such as a kind of sword or a piece of wood, etc. but which are in a different league from typical fungible SPL tokens such as USDC.'),(0,r.kt)("p",null,"In order to support this particular use-case but also to make the standard broad enough to allow expansion to other token types in the future, we are adding a ",(0,r.kt)("inlineCode",{parentName:"p"},"token_standard")," field to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata")," struct which will map to particular JSON metadata standards and will be used to objectively differentiate token types."),(0,r.kt)("p",null,'This solves a current pain-point for third parties such as wallets which are applying inconsistent and varying heuristics to determine what is and is not an "NFT".'),(0,r.kt)("p",null,"Token Standards are defined by a Rust enum:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub enum TokenStandard {\n    NonFungible,   // This is a master edition\n    FungibleAsset, // A token with metadata that can also have attributes, sometimes called Semi Fungible\n    Fungible,      // A token with simple metadata\n    NonFungibleEdition, // This is a limited edition\n}\n")),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"token_standard")," field is added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata")," struct representing what type of token each NFT is."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"token_standard")," field is set automatically by the contract corresponding to the following logic:"),(0,r.kt)("p",null,"If the token has a master edition it is a ",(0,r.kt)("inlineCode",{parentName:"p"},"NonFungible"),".\nIf the token has no master edition(ensuring its supply can be > 1) and decimals of 0 it is a ",(0,r.kt)("inlineCode",{parentName:"p"},"FungibleAsset"),".\nIf the token has no master edition(ensuring its supply can be > 1) and decimals of > 0 it is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Fungible"),".\nIf the token is a limited edition of a MasterEditon it is a ",(0,r.kt)("inlineCode",{parentName:"p"},"NonFungibleEdition"),"."),(0,r.kt)("p",null,"Each Token Standard type will have its own JSON schema which are defined below."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fungible")),(0,r.kt)("p",null,"These are simple SPL tokens with limited metadata and supply >= 0. Examples are USDC, GBTC and RAY."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol of the token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the token.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI pointing to token logo.")))),(0,r.kt)("p",null,"Example Fungible token JSON metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "USD Coin",\n  "symbol": "USDC",\n  "description": "Fully reserved fiat-backed stablecoin created by Circle.",\n  "image": "https://www.circle.com/hs-fs/hubfs/sundaes/USDC.png?width=540&height=540&name=USDC.png"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Fungible Asset")),(0,r.kt)("p",null,'These are fungible tokens with more extensive metadata and supply >= 0. An example of this kind of token is something the community has been calling "semi-fungible tokens" often used to represent a fungible but attribute-heavy in-game item such as a sword or a piece of wood.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol of the asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI pointing to asset image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"animation_url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI pointing to asset animation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI pointing to an external url defining the asset, the game's main site, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of attributes defining the characteristics of the asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attribute")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trait_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute value.")))),(0,r.kt)("p",null,"Example Fungible Asset JSON metadata:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SolanaGame Steel Sword",\n  "symbol": "SG-SS-1",\n  "description": "SolanaGame steel sword available after Level 4",\n  "image": "<https://arweave.net/26YdhY_eAzv26YdhY1uu9uiA3nmDZYwP8MwZAultcE?ext=jpeg>",\n  "animation_url": "<https://arweave.net/ZAultcE_eAzv26YdhY1uu9uiA3nmDZYwP8MwuiA3nm?ext=glb>",\n  "external_url": "<https://SolanaGame.io>",\n  "attributes": [\n    {\n      "trait_type": "attack",\n      "value": "4"\n    },\n    {\n      "trait_type": "defense",\n      "value": "3"\n    },\n    {\n      "trait_type": "durability",\n      "value": "47"\n    },\n    {\n      "trait_type": "components",\n      "value": "iron: 10; carbon: 1; wood: 2"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Non-Fungible Token / Fungible Edition")),(0,r.kt)("p",null,'These are the "standard" non-fungible tokens the community is already familiar with and have both a Metadata PDA and a Master Edition PDA. Examples of these are Solana Monkey Business, Stylish Studs and Thugbirdz.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"name"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Name of the asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"symbol"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Symbol of the asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"description"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Description of the asset.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"image"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI pointing to asset image.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"animation_url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI pointing to asset animation.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"external_url"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"URI pointing to an external url defining the asset, the game's main site, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"attributes"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"Array of attributes defining the characteristics of the asset.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Attribute")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trait_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of attribute.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The attribute value.")))),(0,r.kt)("p",null,"Example Non-Fungible Token JSON metadata:\nNote: Creators, Symbol"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "SolanaArtProject #1",\n  "description": "Generative art on Solana.",\n  "image": "https://arweave.net/26YdhY_eAzv26YdhY1uu9uiA3nmDZYwP8MwZAultcE?ext=jpeg",\n  "animation_url": "https://arweave.net/ZAultcE_eAzv26YdhY1uu9uiA3nmDZYwP8MwuiA3nm?ext=glb",\n  "external_url": "https://example.com",\n  "attributes": [\n    {\n      "trait_type": "trait1",\n      "value": "value1"\n    },\n    {\n      "trait_type": "trait2",\n      "value": "value2"\n    }\n  ],\n  //@deprecated -> do not use - may be removed in a future release\n  "collection": {\n    "name": "Solflare X NFT",\n    "family": "Solflare"\n  },\n  "properties": {\n    "files": [\n      {\n        "uri": "https://www.arweave.net/abcd5678?ext=png",\n        "type": "image/png"\n      },\n      {\n        "uri": "https://watch.videodelivery.net/9876jkl",\n        "type": "unknown",\n        "cdn": true\n      },\n      {\n        "uri": "https://www.arweave.net/efgh1234?ext=mp4",\n        "type": "video/mp4"\n      }\n    ],\n    "category": "video",\n    //@deprecated -> do not use - may be removed in a future release\n    "creators": [\n      {\n        "address": "xEtQ9Fpv62qdc1GYfpNReMasVTe9YW5bHJwfVKqo72u",\n        "share": 100\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"collections"},(0,r.kt)("strong",{parentName:"h2"},"Collections")),(0,r.kt)("p",null,"Introduced in v1.1.0 of the token metadata standard, ",(0,r.kt)("em",{parentName:"p"},"on-chain collections"),"\nreplace the ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," field previously defined in external JSON metadata.\nGone are the ad-hoc community heuristics for determining a collection,\nsuperseded with an objective, easy-to-use on-chain implementation."),(0,r.kt)("h3",{id:"on-chain-representation-of-a-collection"},(0,r.kt)("strong",{parentName:"h3"},"On-Chain Representation of a Collection")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," is an NFT. It has the same data layout on-chain as any other NFT."))),(0,r.kt)("p",null,"An NFT is linked to a collection in a belongs_to style where the NFT has a\nreference back to the collection. This is implemented through the addition of\na new ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," field in the ","[Token Metadata][]"," struct."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Metadata {\n    pub key: Key,\n    pub update_authority: Pubkey,\n    pub mint: Pubkey,\n    pub data: Data,\n    // Immutable, once flipped, all sales of this metadata are considered secondary.\n    pub primary_sale_happened: bool,\n    // Whether or not the data struct is mutable, default is not\n    pub is_mutable: bool,\n    /// nonce for easy calculation of editions, if present\n    pub edition_nonce: Option<u8>,\n    /// Since we cannot easily change Metadata, we add the new DataV2 fields here at the end.\n    /// Collection\n    pub collection: Option<Collection>,\n    ...\n}\n\n#[derive(BorshSerialize, BorshDeserialize, PartialEq, Debug, Clone)]\npub struct Collection {\n  pub verified: bool, // Whether or not the collection is verified\n  pub key: Pubkey,    // The SPL token mint account of the collection NFT\n}\n")),(0,r.kt)("p",null,"The metadata ",(0,r.kt)("inlineCode",{parentName:"p"},"collection")," field maps to the Mint Address of the collection NFT and is\nrepresented as the Rust type ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<Collection>")," where a value of ",(0,r.kt)("inlineCode",{parentName:"p"},"None")," is\ninterpreted to mean the NFT does not belong to any collection. The ",(0,r.kt)("inlineCode",{parentName:"p"},"Collection"),"\nstruct has the fields ",(0,r.kt)("inlineCode",{parentName:"p"},"verified")," denoting whether or not the collection is\nverified (see below) and ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," which points to the ",(0,r.kt)("inlineCode",{parentName:"p"},"mint")," account of the collection NFT."),(0,r.kt)("h4",{id:"collection-struct-fields"},"Collection struct fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Field"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"verified"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the collection is verified or not.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"Pubkey"),(0,r.kt)("td",{parentName:"tr",align:null},"The SPL token mint account")))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"EXTREMELY IMPORTANT:"),(0,r.kt)("p",{parentName:"div"},"Explorers, Wallets and Marketplaces, MUST CHECK IF ",(0,r.kt)("inlineCode",{parentName:"p"},"verified")," is true. Verified can only be set true if the Authority on the Collection NFT has run the ",(0,r.kt)("inlineCode",{parentName:"p"},"verify_collection")," instruction over the NFT."),(0,r.kt)("p",{parentName:"div"},"This is the exact same pattern as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Creators")," field where ",(0,r.kt)("inlineCode",{parentName:"p"},"verified")," must be true in order to validate the NFT."))),(0,r.kt)("p",null,"This implementation has the following advantages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Easy to identify which collection any given NFT belongs to without making additional on-chain calls"),(0,r.kt)("li",{parentName:"ul"},"Possible to find all NFTs that belong to a given collection by making a ",(0,r.kt)("inlineCode",{parentName:"li"},"getProgramAccounts")," call"),(0,r.kt)("li",{parentName:"ul"},"Uses existing padding at the end of ",(0,r.kt)("inlineCode",{parentName:"li"},"Metadata")," so adds no on-chain rent storage costs")),(0,r.kt)("h3",{id:"delegate-collection-authority-record"},"Delegate Collection Authority Record"),(0,r.kt)("p",null,"Update Authorities on a Collection NFT can delegate the authority to call the\n",(0,r.kt)("inlineCode",{parentName:"p"},"verify_collection")," instruction. This allows you to delegate the ability to add\nNFTs to your collection to many parties. You can do this by calling the\n",(0,r.kt)("inlineCode",{parentName:"p"},"approve_collection_authority")," instruction. To revoke you can call the\n",(0,r.kt)("inlineCode",{parentName:"p"},"revoke_collection_authority")," instruction."),(0,r.kt)("p",null,"To accomplish setting and verifying a collection with one instruction use the ",(0,r.kt)("inlineCode",{parentName:"p"},"set_and_verify_collection")," instruction introduced in 1.2.0."),(0,r.kt)("h2",{id:"token-use-settings"},"Token Use Settings"),(0,r.kt)("p",null,'To support gaming applications, the concept of "token usage" has been implemented, where a new ',(0,r.kt)("inlineCode",{parentName:"p"},"uses")," field has been added to the token ",(0,r.kt)("inlineCode",{parentName:"p"},"Metadata")," struct. This field is a Rust ",(0,r.kt)("inlineCode",{parentName:"p"},"Option<Uses>")," where ",(0,r.kt)("inlineCode",{parentName:"p"},"Uses")," is a Rust struct with a ",(0,r.kt)("inlineCode",{parentName:"p"},"UseMethod")," enum:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct Uses {\n    pub use_method: UseMethod,\n    pub remaining: u64,\n    pub available: u64,\n}\n\npub enum UseMethod {\n    Burn,\n    Single,\n    Multiple(u64)\n}\n")),(0,r.kt)("p",null,"This allows projects to set different limits on usage of gaming tokens: burn, single, and multiple use. Burn allows a token to be used once and then burned forever. Single allows a single use but does not burn the token. Multiple allows up to ",(0,r.kt)("inlineCode",{parentName:"p"},"u64")," number of uses of the token."),(0,r.kt)("h3",{id:"delegate-use-authority"},"Delegate Use Authority"),(0,r.kt)("p",null,"Owners of NFTs can now allow a program to ",(0,r.kt)("inlineCode",{parentName:"p"},"Use")," their token without them being online. This is available via the ",(0,r.kt)("inlineCode",{parentName:"p"},"approve_use_authority")," instruction. It is very similar to the Collection Authority system but the party who can approve and revoke is the current holder of the NFT."))}m.isMDXComponent=!0}}]);