"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6926],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return p}});var o=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e){if(null==t)return{};var n,o,r=function(t,e){if(null==t)return{};var n,o,r={},a=Object.keys(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)n=a[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=o.createContext({}),l=function(t){var e=o.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,d=s(t,["components","mdxType","originalType","parentName"]),f=l(n),p=r,m=f["".concat(c,".").concat(p)]||f[p]||u[p]||a;return n?o.createElement(m,i(i({ref:e},d),{},{components:n})):o.createElement(m,i({ref:e},d))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,i=new Array(a);i[0]=f;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}f.displayName="MDXCreateElement"},84099:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return a},metadata:function(){return s},toc:function(){return l}});var o=n(83117),r=(n(67294),n(3905));const a={description:"A deep dive on the instruction handlers."},i="Instructions",s={unversionedId:"programs/fusion/instructions",id:"programs/fusion/instructions",title:"Instructions",description:"A deep dive on the instruction handlers.",source:"@site/docs/01-programs/05-fusion/03-instructions.md",sourceDirName:"01-programs/05-fusion",slug:"/programs/fusion/instructions",permalink:"/programs/fusion/instructions",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/05-fusion/03-instructions.md",tags:[],version:"current",lastUpdatedAt:1684777e3,formattedLastUpdatedAt:"May 22, 2023",sidebarPosition:3,frontMatter:{description:"A deep dive on the instruction handlers."},sidebar:"sidebar",previous:{title:"Accounts",permalink:"/programs/fusion/accounts"},next:{title:"Constraint Types",permalink:"/programs/fusion/constraint-types"}},c={},l=[{value:"Create Escrow Constraint Model Account",id:"create-escrow-constraint-model-account",level:2},{value:"Create Trifle Account",id:"create-trifle-account",level:2},{value:"Transfer In",id:"transfer-in",level:2},{value:"Transfer Out",id:"transfer-out",level:2},{value:"Add None Constraint to Escrow Constraint Model",id:"add-none-constraint-to-escrow-constraint-model",level:2},{value:"Add Collection Constraint to Escrow Constraint Model",id:"add-collection-constraint-to-escrow-constraint-model",level:2},{value:"Add Tokens Constraint to Escrow Constraint Model",id:"add-tokens-constraint-to-escrow-constraint-model",level:2},{value:"Remove Constraint from Escrow Constraint Model",id:"remove-constraint-from-escrow-constraint-model",level:2}],d={toc:l};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,o.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"instructions"},"Instructions"),(0,r.kt)("h2",{id:"create-escrow-constraint-model-account"},"Create Escrow Constraint Model Account"),(0,r.kt)("p",null,"Creates a Constraint Model that can be used for Trifle accounts."),(0,r.kt)("h2",{id:"create-trifle-account"},"Create Trifle Account"),(0,r.kt)("p",null,"Creates a Trifle Account to be used on an NFT. A mandatory Constraint Model account must be passed in on creation for the Trifle account to check against."),(0,r.kt)("h2",{id:"transfer-in"},"Transfer In"),(0,r.kt)("p",null,"Transfer a token into the Creator Owned Escrow managed by the Trifle account. While it is possible to do a standard spl-token transfer to the COE, using this instruction is the only way for the Trifle account to manage and track the owned tokens. This instruction also performs checks against the Constraint Model to verify that the token being transferred in is valid."),(0,r.kt)("h2",{id:"transfer-out"},"Transfer Out"),(0,r.kt)("p",null,"Transfer a token out of the Creator Owned Escrow managed by the Trifle account. This instruction also performs checks against the Constraint Model to verify that the token being transferred out is allowed to be removed."),(0,r.kt)("h2",{id:"add-none-constraint-to-escrow-constraint-model"},"Add None Constraint to Escrow Constraint Model"),(0,r.kt)("p",null,"Create a None Constraint in the Constraint Model. Slot name and number of allowable tokens in the slot are defined at this time."),(0,r.kt)("h2",{id:"add-collection-constraint-to-escrow-constraint-model"},"Add Collection Constraint to Escrow Constraint Model"),(0,r.kt)("p",null,"Create a Collection Constraint in the Constraint Model. Slot name, allowable Collection and number of allowable tokens in the slot are defined at this time."),(0,r.kt)("h2",{id:"add-tokens-constraint-to-escrow-constraint-model"},"Add Tokens Constraint to Escrow Constraint Model"),(0,r.kt)("p",null,"Create a Collection Constraint in the Constraint Model. Slot name, allowable tokens and number of allowable tokens in the slot are defined at this time."),(0,r.kt)("h2",{id:"remove-constraint-from-escrow-constraint-model"},"Remove Constraint from Escrow Constraint Model"),(0,r.kt)("p",null,"Remove a Constraint from the Constraint Model by specifying which slot to clear by name."))}u.isMDXComponent=!0}}]);