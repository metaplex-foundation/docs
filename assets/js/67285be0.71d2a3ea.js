"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6513],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(f,o(o({ref:t},p),{},{components:n})):a.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},77506:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={sidebar_label:"Getting Started",sidebar_position:0},s="Getting Started",c={unversionedId:"token-metadata/getting-started",id:"token-metadata/getting-started",title:"Getting Started",description:"As a backward-compatible release, you are already using the 1.2.\\* version of the",source:"@site/docs/token-metadata/getting-started.md",sourceDirName:"token-metadata",slug:"/token-metadata/getting-started",permalink:"/token-metadata/getting-started",editUrl:"https://github.com/metaplex/docs/tree/main/docs/token-metadata/getting-started.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Getting Started",sidebar_position:0},sidebar:"sidebar",previous:{title:"History",permalink:"/about/history"},next:{title:"API",permalink:"/token-metadata/api"}},p=[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Setup",id:"setup",children:[],level:3},{value:"Running Commands",id:"running-commands",children:[{value:"<em>Help</em>",id:"help",children:[],level:4}],level:3}],u={toc:p};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"getting-started"},"Getting Started"),(0,i.kt)("p",null,"As a backward-compatible release, you are already using the 1.2.","*"," version of the\nspecification. It is implemented in the most recent version of the Token\nMetadata program. Metaplex is still working on implementing this\nspecification in all our products such as:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Candy Machine"),(0,i.kt)("li",{parentName:"ul"},"Auction House"),(0,i.kt)("li",{parentName:"ul"},"Gumdrop"),(0,i.kt)("li",{parentName:"ul"},"StoreFront")),(0,i.kt)("p",null,"This is not an exhaustive list. But you can get started using collections right away by using the NFT cli."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ts-node")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"git")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"yarn"))),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("p",null,"In order to get started with the NFT CLI please follow these steps."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"git clone https://github.com/metaplex-foundation/metaplex.git\ncd metaplex\ngit checkout v1.1.1\ncd js && yarn install && yarn bootstrap\ncd packages/cli\n")),(0,i.kt)("p",null,"Once you have cloned the repo and installed packages, make sure you have a local ",(0,i.kt)("inlineCode",{parentName:"p"},"Keypair")," setup. If you need help with that see these guides."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"https://docs.solana.com/cli/install-solana-cli-tools")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.solana.com/wallet-guide/file-system-wallet"},"https://docs.solana.com/wallet-guide/file-system-wallet"))),(0,i.kt)("h3",{id:"running-commands"},"Running Commands"),(0,i.kt)("p",null,"To run commands you will use\n",(0,i.kt)("inlineCode",{parentName:"p"},"ts-node src/ts-node src/cli-nft.ts")),(0,i.kt)("h4",{id:"help"},(0,i.kt)("em",{parentName:"h4"},"Help")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Usage: cli-nft [options] [command]\n\nOptions:\n  -V, --version                output the version number\n  -h, --help                   display help for command\n\nCommands:\n  mint [options]\n  update-metadata [options]\n  verify-collection [options]\n  show [options]\n  help [command]               display help for command\n")),(0,i.kt)("p",null,"The cli has great help text that can guide you through."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Minting a collection nft ",(0,i.kt)("inlineCode",{parentName:"li"},"mint")),(0,i.kt)("li",{parentName:"ol"},"Minting an nft to be a part of the collection ",(0,i.kt)("inlineCode",{parentName:"li"},"mint -c ")),(0,i.kt)("li",{parentName:"ol"},"Verifying the nft is a part of the collection. ",(0,i.kt)("inlineCode",{parentName:"li"},"verify-collection"))),(0,i.kt)("p",null,"Here is the code for the cli."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex/blob/master/js/packages/cli/src/cli-nft.ts"},"https://github.com/metaplex-foundation/metaplex/blob/master/js/packages/cli/src/cli-nft.ts")))}d.isMDXComponent=!0}}]);