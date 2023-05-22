"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3816],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},17462:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return p}});var r=n(83117),o=(n(67294),n(3905));const a={},i="Init store",s={unversionedId:"deprecated/storefront/init-store",id:"deprecated/storefront/init-store",title:"Init store",description:"Setting Up the Store ID",source:"@site/docs/06-deprecated/04-storefront/01-init-store.md",sourceDirName:"06-deprecated/04-storefront",slug:"/deprecated/storefront/init-store",permalink:"/deprecated/storefront/init-store",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/06-deprecated/04-storefront/01-init-store.md",tags:[],version:"current",lastUpdatedAt:1684777e3,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Installation",permalink:"/deprecated/storefront/installation"},next:{title:"Create NFTs",permalink:"/deprecated/storefront/create"}},c={},p=[{value:"Setting Up the Store ID",id:"setting-up-the-store-id",level:3}],l={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"init-store"},"Init store"),(0,o.kt)("h3",{id:"setting-up-the-store-id"},"Setting Up the Store ID"),(0,o.kt)("p",null,"When opening a store for the first time you will be asked to connect your wallet. Click the ",(0,o.kt)("strong",{parentName:"p"},"Connect")," button and follow the steps to get connected."),(0,o.kt)("p",null,"Once connected, the store will first run some checks to see if you've already set up a store. After a minute or so, a welcome screen is presented with an ",(0,o.kt)("strong",{parentName:"p"},"Init Store")," button."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Init store",src:n(68057).Z+"#radius#shadow",width:"2710",height:"1772"})),(0,o.kt)("p",null,"From the wallet dropdown (Phantom pictured below), select a network (mainnet for production, testnet or devnet for practice)."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Select network",src:n(14784).Z+"#radius#shadow",width:"2710",height:"1772"})),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Before proceeding, you must have some SOL on your wallet to be able to pay the Init Store transaction fee. In the case of using devnet or testnet you can airdrop SOL to yourself via ",(0,o.kt)("a",{parentName:"p",href:"https://solfaucet.com/"},"Sol Faucet"),".")),(0,o.kt)("p",null,"Click the ",(0,o.kt)("strong",{parentName:"p"},"Init Store")," button. This starts the store initialization process by prompting you to approve a transaction from your wallet. After approval, your store initialization begins which may take 1-2 minutes."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Approve transaction",src:n(27926).Z+"#radius#shadow",width:"472",height:"682"})),(0,o.kt)("p",null,"After store initialization completes, you must save your new store addresses. In the ",(0,o.kt)("strong",{parentName:"p"},"Store configuration")," section on the store page click on the ",(0,o.kt)("strong",{parentName:"p"},"Copy")," button and paste in the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in ",(0,o.kt)("inlineCode",{parentName:"p"},"js/packages/web"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Save env",src:n(4711).Z+"#radius#shadow",width:"2624",height:"1716"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Set env",src:n(8431).Z+"#radius#shadow",width:"2726",height:"1728"})),(0,o.kt)("p",null,"Now restart your webserver (",(0,o.kt)("em",{parentName:"p"},"Ctrl + C")," + ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start"),") for the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," changes to take effect."))}u.isMDXComponent=!0},27926:function(e,t,n){t.Z=n.p+"assets/images/approve-transaction-22bfae825bc87ab87f753cda1e4ddef3.png"},68057:function(e,t,n){t.Z=n.p+"assets/images/init-store-81f85d48f20fbd8de51823fa57c58bc7.png"},4711:function(e,t,n){t.Z=n.p+"assets/images/save-env-779ff7bc440083b9183767d984da70f0.png"},14784:function(e,t,n){t.Z=n.p+"assets/images/select-wallet-ab28292cdc0183e16595d7c0057da183.png"},8431:function(e,t,n){t.Z=n.p+"assets/images/set-env-601f5c84f96f63beef7068cfbcec2e01.png"}}]);