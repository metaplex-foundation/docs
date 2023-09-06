"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2619],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,h=u["".concat(l,".").concat(f)]||u[f]||d[f]||o;return r?a.createElement(h,i(i({ref:t},c),{},{components:r})):a.createElement(h,i({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},71112:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return p}});var a=r(83117),n=(r(67294),r(3905));const o={},i="Create NFTs",s={unversionedId:"deprecated/storefront/create",id:"deprecated/storefront/create",title:"Create NFTs",description:"Once you have finished with a store configuration, you will be able to Create and Sell NFTs.",source:"@site/docs/06-deprecated/04-storefront/02-create.md",sourceDirName:"06-deprecated/04-storefront",slug:"/deprecated/storefront/create",permalink:"/deprecated/storefront/create",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/04-storefront/02-create.md",tags:[],version:"current",lastUpdatedAt:1693996694,formattedLastUpdatedAt:"Sep 6, 2023",sidebarPosition:2,frontMatter:{},sidebar:"sidebar",previous:{title:"Init store",permalink:"/deprecated/storefront/init-store"},next:{title:"Sell NFTs",permalink:"/deprecated/storefront/sell"}},l={},p=[{value:"Create NFT",id:"create-nft",level:2},{value:"Upload",id:"upload",level:3},{value:"Describe your item",id:"describe-your-item",level:3},{value:"Royalties",id:"royalties",level:3},{value:"Royalty Percentage",id:"royalty-percentage",level:4},{value:"Creators Split",id:"creators-split",level:4},{value:"Launch",id:"launch",level:3}],c={toc:p};function d(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"create-nfts"},"Create NFTs"),(0,n.kt)("p",null,"Once you have finished with a store configuration, you will be able to ",(0,n.kt)("strong",{parentName:"p"},"Create")," and ",(0,n.kt)("strong",{parentName:"p"},"Sell")," NFTs."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Header button",src:r(70543).Z+"#radius",width:"2292",height:"1382"})),(0,n.kt)("h2",{id:"create-nft"},"Create NFT"),(0,n.kt)("p",null,"After clicking on the ",(0,n.kt)("strong",{parentName:"p"},"Create")," button, you will be redirected to the Create section, intended for minting NFT assets.\nMetaplex supports a wide variety of NFT types. In this article, we'll be focusing on image assets."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Create welcome page",src:r(7582).Z+"#radius#shadow",width:"2420",height:"1522"})),(0,n.kt)("h3",{id:"upload"},"Upload"),(0,n.kt)("p",null,"First, you'll need to upload your image to ",(0,n.kt)("a",{parentName:"p",href:"https://www.arweave.org/"},"Arweave"),". Depending on file type, this can take up to 1 minute."),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("a",{parentName:"p",href:"https://www.arweave.org/"},"Arweave")," is a decentralized storage service that backs data with sustainable and perpetual endowments, allowing users and developers to truly store data forever.")),(0,n.kt)("p",null,"Upload an image directly or provide an absolute url to your file on the internet to use as your NFT image."),(0,n.kt)("p",null,'After you have finished uploading, you\'ll see the image name listed below the "Upload" section. Click on ',(0,n.kt)("strong",{parentName:"p"},"Continue to Mint")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Upload",src:r(44635).Z+"#radius#shadow",width:"2648",height:"1736"})),(0,n.kt)("h3",{id:"describe-your-item"},"Describe your item"),(0,n.kt)("p",null,"Next you'll add your image ",(0,n.kt)("strong",{parentName:"p"},"Title"),", ",(0,n.kt)("strong",{parentName:"p"},"Description"),", ",(0,n.kt)("strong",{parentName:"p"},"Maximum Supply")," and ",(0,n.kt)("strong",{parentName:"p"},"Attributes"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Describe asset",src:r(87206).Z+"#radius#shadow",width:"2648",height:"1736"})),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Maximum Supply")," allows you to choose between having a single NFT or multiple copies (prints) from this master edition asset. The main difference between Master Edition and prints is that each print is a numbered edition created from a master edition."),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"You can read more about Master Edition and Maximum Supply in our ",(0,n.kt)("a",{parentName:"p",href:"/guides/archived/architecture/deep_dive/overview"},"Architecture")," docs.")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Attributes")," allow you to define custom properties (key/value pairs) that describe your asset. These attributes are later displayed when viewing the NFT in your wallet or marketplace of choice. For ",(0,n.kt)("inlineCode",{parentName:"p"},"display_type"),", the default is ",(0,n.kt)("inlineCode",{parentName:"p"},"string")," but you can also set this to ",(0,n.kt)("inlineCode",{parentName:"p"},"date")," to hint to downstream tools to format this appropriately."),(0,n.kt)("p",null,"When you are finished describing your item, click on ",(0,n.kt)("strong",{parentName:"p"},"Continue to royalties"),"."),(0,n.kt)("h3",{id:"royalties"},"Royalties"),(0,n.kt)("p",null,"Royalties declare how you and/or your creators are compensated for your work."),(0,n.kt)("h4",{id:"royalty-percentage"},"Royalty Percentage"),(0,n.kt)("p",null,"This option specifies, as a percentage, how much of each secondary sale (all sales after the initial sale) will be paid out to the creators. For example, 1%."),(0,n.kt)("h4",{id:"creators-split"},"Creators Split"),(0,n.kt)("p",null,"This option allows you to split proceeds from the initial sale between creators. To do this, you first need to add other creators to your store on the ",(0,n.kt)("a",{parentName:"p",href:"http://localhost:3000/#/admin"},"admin page"),"."),(0,n.kt)("p",null,"After you have finished defining royalties, click on ",(0,n.kt)("strong",{parentName:"p"},"Continue to review"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Royalties",src:r(60746).Z+"#radius#shadow",width:"2648",height:"1736"})),(0,n.kt)("h3",{id:"launch"},"Launch"),(0,n.kt)("p",null,"We're on the final stage of minting a new NFT asset. Click on ",(0,n.kt)("strong",{parentName:"p"},"PAY WITH SOL")," to start minting, it will deduct the cost of the transaction from your wallet. Throughout the process of creation, it may ask you to approve transactions in the wallet. After the upload is finished, you will see it in your collection."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Launch",src:r(61873).Z+"#radius#shadow",width:"2648",height:"1736"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Minting",src:r(21093).Z+"#radius#shadow",width:"2292",height:"1382"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"Running locally may require refreshing the page to see the item in Artworks.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Finish screen",src:r(63798).Z+"#radius#shadow",width:"2374",height:"1556"})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Item",src:r(46844).Z+"#radius#shadow",width:"2286",height:"1468"})))}d.isMDXComponent=!0},7582:function(e,t,r){t.Z=r.p+"assets/images/create-welcome-024dffff6d76fc52d399097a3cc58f92.png"},87206:function(e,t,r){t.Z=r.p+"assets/images/describe-asset-03803d4c14fee33b19c3f0f59fcebd3b.png"},63798:function(e,t,r){t.Z=r.p+"assets/images/finish-961f11d7e2fe41f0e769d76264d9217d.png"},70543:function(e,t,r){t.Z=r.p+"assets/images/intro-554377abde29ddfc864118f55312e960.gif"},46844:function(e,t,r){t.Z=r.p+"assets/images/item-4993764767d507d7e53960fef2e25f8a.png"},61873:function(e,t,r){t.Z=r.p+"assets/images/launch-966b68c62bdc9abd3416e7d3ffb643d6.png"},60746:function(e,t,r){t.Z=r.p+"assets/images/royalties-aca414f31d08cfa7c9709db88028705a.png"},21093:function(e,t,r){t.Z=r.p+"assets/images/upload-20e0c2d856c6350fa1be5d6c3cf37f27.gif"},44635:function(e,t,r){t.Z=r.p+"assets/images/upload-96cc791e06e0c8f602f239c79e118ce8.png"}}]);