"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5466],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=d(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||i;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=a[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},45335:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return p},default:function(){return m}});var n=a(83117),r=a(80102),i=(a(67294),a(3905)),l=["components"],o={sidebar_position:1},s="Token Metadata Standard",d={unversionedId:"token-metadata/Versions/v1.0.0/nft-standard",id:"token-metadata/Versions/v1.0.0/nft-standard",title:"Token Metadata Standard",description:"Wallets should support the display of metadata associated with tokens, in accordance with the standards described by the Metaplex Token Metadata contract. Wallets should pull both the on-chain data and the external JSON provided by the metadata's uri field and use them to display all relevant data.",source:"@site/docs/token-metadata/Versions/v1.0.0/nft-standard.md",sourceDirName:"token-metadata/Versions/v1.0.0",slug:"/token-metadata/Versions/v1.0.0/nft-standard",permalink:"/token-metadata/Versions/v1.0.0/nft-standard",editUrl:"https://github.com/metaplex/docs/tree/main/docs/token-metadata/Versions/v1.0.0/nft-standard.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"sidebar",previous:{title:"Overview",permalink:"/token-metadata/Versions/v1.1.0/overview"},next:{title:"Overview",permalink:"/architecture/overview"}},p=[{value:"Token Metadata Program",id:"token-metadata-program",children:[],level:2},{value:"URI JSON Schema",id:"uri-json-schema",children:[{value:"JSON Structure",id:"json-structure",children:[],level:3},{value:"Additonal suggestions",id:"additonal-suggestions",children:[{value:"CDN hosted files",id:"cdn-hosted-files",children:[],level:4},{value:"Collections",id:"collections",children:[],level:4},{value:"Order of JSON fields",id:"order-of-json-fields",children:[],level:4},{value:"Other arbitrary data",id:"other-arbitrary-data",children:[],level:4},{value:"Thanks",id:"thanks",children:[],level:4}],level:3}],level:2}],u={toc:p};function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"token-metadata-standard"},"Token Metadata Standard"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.solana.com/terminology#wallet"},"Wallets")," should support the display of metadata associated with ",(0,i.kt)("a",{parentName:"p",href:"https://docs.solana.com/terminology#token"},"tokens"),", in accordance with the standards described by the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex/tree/master/rust/token-metadata/program"},"Metaplex Token Metadata contract"),". Wallets should pull both the on-chain data and the external JSON provided by the metadata's uri field and use them to display all relevant data."),(0,i.kt)("p",null,"Follow the standards defined in this document to ensure your NFTs will be correctly displayed in most wallets and to allow usage of all functionalities related to NFTs."),(0,i.kt)("p",null,"Explorers, Wallets and Marketplaces should ensure they have these checks in place before choosing to display the token as an NFT"),(0,i.kt)("h2",{id:"token-metadata-program"},"Token Metadata Program"),(0,i.kt)("p",null,"The Token Metadata program provides decorator structs to a token mint. Basic information about the token is provided with the ",(0,i.kt)("inlineCode",{parentName:"p"},"Metadata")," struct, whose account address is a Program Derived Address (PDA) with a derived key of ",(0,i.kt)("inlineCode",{parentName:"p"},"['metadata', metadata_program_id, mint_id]"),"."),(0,i.kt)("p",null,"Your NFT should have the following information as on-chain metadata:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Field"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"How do we display it"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"name of the asset"),(0,i.kt)("td",{parentName:"tr",align:null},"grid view and single NFT view")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"symbol"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"symbol of the asset"),(0,i.kt)("td",{parentName:"tr",align:null},"not shown currently")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uri"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"URI to the external JSON representing the asset"),(0,i.kt)("td",{parentName:"tr",align:null},"linked in the single NFT view")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"creators"),(0,i.kt)("td",{parentName:"tr",align:null},"array"),(0,i.kt)("td",{parentName:"tr",align:null},"public key of each creator"),(0,i.kt)("td",{parentName:"tr",align:null},"shown in the single NFT view, resolved to twitter handles if they are connected via Solana Name Service")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"update_authority"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"public key of the metadata owner"),(0,i.kt)("td",{parentName:"tr",align:null},"shown in the single NFT view, can be updated in the send NFT modal")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"primary_sale_happened"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"flag describing whether the primary sale of the token happened"),(0,i.kt)("td",{parentName:"tr",align:null},"visible in the send NFT modal, can be updated")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"seller_fee_basis_points"),(0,i.kt)("td",{parentName:"tr",align:null},"number"),(0,i.kt)("td",{parentName:"tr",align:null},"royalties percentage awarded to creators"),(0,i.kt)("td",{parentName:"tr",align:null},"shown as a percentage received by each co-creator")))),(0,i.kt)("p",null,"The program also specifies optional structs used for the creation ",(0,i.kt)("inlineCode",{parentName:"p"},"Master Editions")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Editions"),"."),(0,i.kt)("h2",{id:"uri-json-schema"},"URI JSON Schema"),(0,i.kt)("p",null,"To display off-chain metadata of tokens, the on-chain struct needs to contain a URI as described above, which will allow wallets to find it."),(0,i.kt)("p",null,"The file below should be used as a reference."),(0,i.kt)("h3",{id:"json-structure"},"JSON Structure"),(0,i.kt)("p",null,"Here is an example of off-chain JSON metadata."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'{\n  "name": "Solflare X NFT",\n  "symbol": "",\n  "description": "Celebratory Solflare NFT for the Solflare X launch",\n  "seller_fee_basis_points": 0,\n  "image": "https://www.arweave.net/abcd5678?ext=png",\n  "animation_url": "https://www.arweave.net/efgh1234?ext=mp4",\n  "external_url": "https://solflare.com",\n  "attributes": [\n    {\n      "trait_type": "web",\n      "value": "yes"\n    },\n    {\n      "trait_type": "mobile",\n      "value": "yes"\n   },\n   {\n      "trait_type": "extension",\n      "value": "yes"\n    }\n  ],\n  "collection": {\n     "name": "Solflare X NFT",\n     "family": "Solflare"\n  },\n  "properties": {\n    "files": [\n      {\n        "uri": "https://www.arweave.net/abcd5678?ext=png",\n        "type": "image/png"\n      },\n      {\n        "uri": "https://watch.videodelivery.net/9876jkl",\n        "type": "unknown",\n        "cdn": true\n      },\n      {\n        "uri": "https://www.arweave.net/efgh1234?ext=mp4",\n        "type": "video/mp4"\n      }\n    ],\n    "category": "video",\n    "creators": [\n      {\n        "address": "xEtQ9Fpv62qdc1GYfpNReMasVTe9YW5bHJwfVKqo72u",\n        "share": 100\n      }\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"For the fields that match the on-chain metadata, on-chain information has priority."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description")," - Human readable description of the asset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"image")," - URL to the image of the asset. PNG, GIF and JPG file formats are supported. You may use the ",(0,i.kt)("inlineCode",{parentName:"li"},"?ext={file_extension}")," query to provide information on the file type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"animation_url")," - URL to a multi-media attachment of the asset. The supported file formats are MP4 and MOV for video, MP3, FLAC and WAV for audio, GLB for AR/3D assets, and HTML for HTML pages. You may use the ",(0,i.kt)("inlineCode",{parentName:"li"},"?ext={file_extension}")," query to provide information on the file type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"external_url")," - URL to an external application or website where users can also view the asset."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"properties.category")," - Supported categories:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"image"')," - PNG, GIF, JPG"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"video"')," - MP4, MOV"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"audio"')," - MP3, FLAC, WAV"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"vr"')," - 3D models; GLB, GLTF"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},'"html"')," - HTML pages; scripts and relative paths within the HTML page are also supported"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"properties.files")," - Object array, where an object should contain the ",(0,i.kt)("inlineCode",{parentName:"li"},"uri")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," of the file that is part of the asset. The type should match the file extension. The array should also include files specified in ",(0,i.kt)("inlineCode",{parentName:"li"},"image")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"animation_url")," fields, and any other that are associated with the asset.\nYou may use the ",(0,i.kt)("inlineCode",{parentName:"li"},"?ext={file_extension}")," query to provide information on the file type."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"attributes")," - Object array, where an object should contain ",(0,i.kt)("inlineCode",{parentName:"li"},"trait_type")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," fields. ",(0,i.kt)("inlineCode",{parentName:"li"},"value")," can be a string or a number.")),(0,i.kt)("h3",{id:"additonal-suggestions"},"Additonal suggestions"),(0,i.kt)("h4",{id:"cdn-hosted-files"},"CDN hosted files"),(0,i.kt)("p",null,"In addition to hosting your assets on a permanent service, you can also host your assets on a CDN (to provide faster loading times). Just use the ",(0,i.kt)("inlineCode",{parentName:"p"},"cdn")," boolean flag within the objects inside the ",(0,i.kt)("inlineCode",{parentName:"p"},"properties.files")," array."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  "properties": {\n    "files": [\n        ...\n        {\n          "uri": "https://watch.videodelivery.net/52a52c4a261c88f19d267931426c9be6",\n          "type": "unknown",\n          "cdn": true\n        },\n        ...\n    ]\n}\n')),(0,i.kt)("p",null,"If such a flag exists, that file is the primary option when selecting the multimedia-attachment (video, audio or 3D) that will be displayed to owners. If that file is no longer available, wallets should default to it using the URL in ",(0,i.kt)("inlineCode",{parentName:"p"},"animation_url")," field."),(0,i.kt)("h4",{id:"collections"},"Collections"),(0,i.kt)("p",null,"If the NFT belongs to a group of other unique NFTs, you can mark them with an additional ",(0,i.kt)("inlineCode",{parentName:"p"},"collection")," field that contains the name of the collection."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  "collection": {\n        "name": "Pigs on Solana Season #1",\n        "family": "Pigs on Solana"\n    }\n')),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"collection.family"),' represents the larger set of NFTs your asset can belong to, in the case you are making multiple variations on a theme. It should always be a unique identifier of your whole project and never a general term like "cars", "art" or similar.'),(0,i.kt)("p",null,"Wallets might group NFTs belonging to the same family and display the collection name on a single NFT view."),(0,i.kt)("h4",{id:"order-of-json-fields"},"Order of JSON fields"),(0,i.kt)("p",null,"Since your wallet will give users a direct link to the JSON file, it is recommended to keep the order of fields same as in the reference, so as to maintain good human readability of its contents."),(0,i.kt)("h4",{id:"other-arbitrary-data"},"Other arbitrary data"),(0,i.kt)("p",null,"Use the properties field to store other arbitrary data that will be used by specialized applications."),(0,i.kt)("p",null,"If your project would benefit with the expansion of this standard, do not hesitate to contact us with your suggestions."),(0,i.kt)("h4",{id:"thanks"},"Thanks"),(0,i.kt)("p",null,"Thanks to ",(0,i.kt)("a",{parentName:"p",href:"https://solflare.com/"},"Solflare")," for putting the first version of this document together."))}m.isMDXComponent=!0}}]);