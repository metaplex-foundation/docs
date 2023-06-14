"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[105],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,h=p["".concat(l,".").concat(f)]||p[f]||c[f]||i;return n?r.createElement(h,o(o({ref:t},d),{},{components:n})):r.createElement(h,o({ref:t},d))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},98988:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return c},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(83117),a=(n(67294),n(3905));const i={sidebar_label:"How to use Metaplex Fusion",description:"Composable NFTs, powered by Metaplex."},o="How to use Metaplex Fusion",s={unversionedId:"guides/fusion",id:"guides/fusion",title:"How to use Metaplex Fusion",description:"Composable NFTs, powered by Metaplex.",source:"@site/docs/04-guides/06-fusion.md",sourceDirName:"04-guides",slug:"/guides/fusion",permalink:"/guides/fusion",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/04-guides/06-fusion.md",tags:[],version:"current",lastUpdatedAt:1686755726,formattedLastUpdatedAt:"Jun 14, 2023",sidebarPosition:6,frontMatter:{sidebar_label:"How to use Metaplex Fusion",description:"Composable NFTs, powered by Metaplex."},sidebar:"sidebar",previous:{title:"Community Guides",permalink:"/guides/community"},next:{title:"Archived",permalink:"/guides/archived"}},l={},u=[{value:"What is Fusion?",id:"what-is-fusion",level:2},{value:"Steps for Setup",id:"steps-for-setup",level:2},{value:"Create a parent NFT",id:"create-a-parent-nft",level:3},{value:"Write Render Schema",id:"write-render-schema",level:3},{value:"Setup Trifle",id:"setup-trifle",level:3}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-use-metaplex-fusion"},"How to use Metaplex Fusion"),(0,a.kt)("h2",{id:"what-is-fusion"},"What is Fusion?"),(0,a.kt)("p",null,"Fusion is Metaplex's answer for composable NFTs. Fusion is itself a composition of several Metaplex programs that enable fully dynamic NFTs to be created by projects, artists, or collectors. At the contract level, Fusion is powered by Trifle which manages the on-chain tracking and rule-based fuse/defuse operations of an NFT."),(0,a.kt)("h2",{id:"steps-for-setup"},"Steps for Setup"),(0,a.kt)("h3",{id:"create-a-parent-nft"},"Create a parent NFT"),(0,a.kt)("p",null,"Fusion is structured as a single NFT (the Fusion Parent) that owns all of the attributes it is composed of. The Fusion Parent will dynamically have its Metadata and Image re-rendered to reflect the layering of all of the Attribute Tokens tracked in its on-chain Trifle account. To enable seamless recomposition of the metadata, a static URI is created using a deterministic format."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"https://shdw-drive.genesysgo.net/<METAPLEX_BUCKET>/<TRIFLE_ADDRESS>")),(0,a.kt)("p",null,"The dynamic metadata and image are hosted on GenesysGo's Shadow Drive technology to take advantage of their decentralized data hosting and updatable storage format. This static URI allows for backend updates of all data without requiring actual updates to the NFT's Metadata account, which is permissioned to only allow the Update Authority to make updates. This allows Fusion users to have dynamic metadata without sharing any private keys. An example of Fusion Parent creation is outlined below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'const findTriflePda = async (\n  mint: PublicKey,\n  authority: PublicKey,\n) => {\n  return await PublicKey.findProgramAddress(\n    [\n      Buffer.from("trifle"),\n      mint.toBuffer(),\n      authority.toBuffer(),\n    ],\n    new PublicKey(PROGRAM_ADDRESS),\n  );\n};\n\nconst METAPLEX_BUCKET = "Jf27xwhv6bH1aaPYtvJxvHvKRHoDe3DyQVqe4CJyxsP";\nlet nftMint = Keypair.generate();\nlet trifleAddress = await findTriflePda(nftMint.publicKey, updateAuthority);\nlet result;\nresult = await metaplex!.nfts().create({\n    uri: "https://shdw-drive.genesysgo.net/" + METAPLEX_BUCKET + "/" + trifleAddress[0].toString() + ".json",\n    name: "Fusion NFT",\n    sellerFeeBasisPoints: 0,\n    useNewMint: nftMint\n});\n')),(0,a.kt)("h3",{id:"write-render-schema"},"Write Render Schema"),(0,a.kt)("p",null,"Fusion utilizes the ",(0,a.kt)("inlineCode",{parentName:"p"},"schema")," field of the Constraint Model account to determine the layer order to render the attributes in."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "layering",\n    "layers": ["base", "neck", "mouth", "nose"],\n    "defaults": {\n        "metadata": "https://shdw-drive.genesysgo.net/G6yhKwkApJr1YCCmrusFibbsvrXZa4Q3GRThSHFiRJQW/default.json"\n    }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"type"),": Defines what type of schema this represents and therefore how the backend server should render the Fusion Parent's image.\n",(0,a.kt)("inlineCode",{parentName:"p"},"layers"),": An array of slot names on the Trifle account. The ordering of the array defines in what order the layers should be rendered. It is not a requirement to use all the layers, allowing for invisible attributes.\n",(0,a.kt)("inlineCode",{parentName:"p"},"defaults"),": The default metadata to use as a baseline when combining the Fusion Parent's metadata. Metadata fields such ",(0,a.kt)("inlineCode",{parentName:"p"},"external_url")," can then be included in the metadata in this way."),(0,a.kt)("h3",{id:"setup-trifle"},"Setup Trifle"),(0,a.kt)("p",null,"Lastly, the Constraint Model and Trifle account should then be setup according to ",(0,a.kt)("a",{parentName:"p",href:"/programs/fusion/getting-started"},"these instructions"),"."),(0,a.kt)("p",null,"After the above steps, the Fusion Parent should be re-rendered after every ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer_in")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"transfer_out")," operation."))}c.isMDXComponent=!0}}]);