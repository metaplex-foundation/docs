"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2006],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?a.createElement(f,o(o({ref:t},d),{},{components:n})):a.createElement(f,o({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},48201:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return u}});var a=n(83117),r=n(80102),i=(n(67294),n(3905)),o=["components"],l={sidebar_label:"Overview",sidebar_position:0},s="Overview",c={unversionedId:"token-metadata/v1.1.0/overview",id:"token-metadata/v1.1.0/overview",title:"Overview",description:"The Metaplex Token Metadata Standard is an evolving standard for general token metadata on the Solana blockchain. This is the newest version of the standard and contains a number of improvements and additions to the standard while maintaining backwards compatibility.",source:"@site/docs/token-metadata/v1.1.0/overview.md",sourceDirName:"token-metadata/v1.1.0",slug:"/token-metadata/v1.1.0/overview",permalink:"/token-metadata/v1.1.0/overview",editUrl:"https://github.com/metaplex/docs/tree/main/docs/token-metadata/v1.1.0/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_label:"Overview",sidebar_position:0},sidebar:"sidebar",previous:{title:"Token Metadata Standard",permalink:"/token-metadata/v1.0.0/nft-standard"},next:{title:"Roadmap",permalink:"/token-metadata/v1.1.0/roadmap"}},d=[{value:"<strong>Summary of Changes from V1.1.0</strong>",id:"summary-of-changes-from-v110",children:[],level:3}],p={toc:d};function u(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"The Metaplex Token Metadata Standard is an evolving standard for general token metadata on the Solana blockchain. This is the newest version of the standard and contains a number of improvements and additions to the standard while maintaining backwards compatibility."),(0,i.kt)("h3",{id:"summary-of-changes-from-v110"},(0,i.kt)("strong",{parentName:"h3"},"Summary of Changes from V1.1.0")),(0,i.kt)("p",null,"Additions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"On-Chain Collections"),(0,i.kt)("li",{parentName:"ul"},"Token Standards"),(0,i.kt)("li",{parentName:"ul"},"Token Uses")),(0,i.kt)("p",null,"Addition of Instructions: To support Collections"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"CreateMetadataAccountV2 -> Same as CreateMetadataAccount, But allows Collections and Use , also sets ",(0,i.kt)("inlineCode",{parentName:"li"},"TokenStandard")),(0,i.kt)("li",{parentName:"ul"},"UpdateMetadataAccountV2 -> Same as UpdateMetadataAccount, But allows Collections and Use , also sets ",(0,i.kt)("inlineCode",{parentName:"li"},"TokenStandard")),(0,i.kt)("li",{parentName:"ul"},"CreateMasterEditionV3 -> Same as CreateMasterEdition, but sets the ",(0,i.kt)("inlineCode",{parentName:"li"},"TokenStandard")," on the NFT"),(0,i.kt)("li",{parentName:"ul"},"VerifyCollection -> Allows a collection ",(0,i.kt)("inlineCode",{parentName:"li"},"verified")," flag to become true on an NFT to represent a Certified Collection. Essentially this Officially Adds to a Collection."),(0,i.kt)("li",{parentName:"ul"},"UnVerifyCollection -> Allows a collection ",(0,i.kt)("inlineCode",{parentName:"li"},"verified")," flag to become false on an NFT to represent a Certified Collection, Essentially this Officially Removes from a Collection."),(0,i.kt)("li",{parentName:"ul"},'Utilize -> Allows a limited "Use" semantic. Can be used to represent a ticket, pass, game item or physical item redemption.'),(0,i.kt)("li",{parentName:"ul"},"ApproveUseAuthority -> Approve an authority to call ",(0,i.kt)("inlineCode",{parentName:"li"},"Utilize")),(0,i.kt)("li",{parentName:"ul"},"RevokeUseAuthority -> Remove a granted authority to call ",(0,i.kt)("inlineCode",{parentName:"li"},"Utilize"))),(0,i.kt)("p",null,"Deprecation:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Deprecation(not removal) of "collection" and "creators" field in the token metadata JSON'),(0,i.kt)("li",{parentName:"ul"},"Depreciation of V1 Instructions: These will now show a deprecation warning but will work fine"),(0,i.kt)("li",{parentName:"ul"},"CreateMetadataAccount"),(0,i.kt)("li",{parentName:"ul"},"UpdateMetadataAccount"),(0,i.kt)("li",{parentName:"ul"},"CreateMasterEdition -> This may be confusing that there is no ",(0,i.kt)("inlineCode",{parentName:"li"},"V2")," but for historical reasons this instruction is ",(0,i.kt)("inlineCode",{parentName:"li"},"V2"),". The V1 had its name changed in abackward incompatible way see ",(0,i.kt)("inlineCode",{parentName:"li"},"DeprecatedCreateMasterEdition"))),(0,i.kt)("p",null,"Removals:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Removal Of Deprecated Instructions"),(0,i.kt)("li",{parentName:"ul"},"DeprecatedCreateMasterEdition"),(0,i.kt)("li",{parentName:"ul"},"DeprecatedCreateReservationList"),(0,i.kt)("li",{parentName:"ul"},"DeprecatedMintPrintingTokensViaToken"),(0,i.kt)("li",{parentName:"ul"},"DeprecatedMintPrintingTokens")))}u.isMDXComponent=!0}}]);