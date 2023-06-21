"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9182],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),m=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,h=u["".concat(l,".").concat(d)]||u[d]||s[d]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var m=2;m<o;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63687:function(e,t,n){n.d(t,{r:function(){return c}});var r=n(67294),a=n(45697),o=n.n(a),i=n(38545);function c(e){let{children:t,title:n="Code",open:a=!1}=e;return r.createElement(i.Q,{title:n,open:a},r.createElement("div",{className:"accordion-item-no-padding"},t))}c.propTypes={children:o().any,title:o().string,open:o().bool}},38545:function(e,t,n){n.d(t,{Q:function(){return c},U:function(){return i}});var r=n(67294),a=n(45697),o=n.n(a);function i(e){let{children:t}=e;return r.createElement("div",{className:"accordion"},t)}function c(e){let{open:t,title:n,actions:a,keepAlive:o=!0,children:i}=e;const[c,m]=(0,r.useState)(t),p=c||o;return r.createElement("div",{className:["accordion-item",c?"accordion-item-opened":"accordion-item-closed"].join(" ")},r.createElement("div",{className:"accordion-item-header",onClick:()=>m(!c)},r.createElement("h3",null,r.createElement(l,{opened:c}),r.createElement("span",null,n)),a),r.createElement("div",{className:"accordion-item-content"},p&&i))}function l(e){let{opened:t}=e;return t?r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},r.createElement("rect",{width:"256",height:"256",fill:"none"}),r.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},r.createElement("rect",{width:"256",height:"256",fill:"none"}),r.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}i.propTypes={children:o().any},c.propTypes={open:o().bool,title:o().string,children:o().any,actions:o().any,keepAlive:o().bool},l.propTypes={opened:o().bool}},33085:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var r=n(83117),a=(n(67294),n(3905));n(38545),n(63687);const o={description:"Shows how to create a basic mint page with Metaplex Umi"},i="How to create a Candy Machine v3 - Part 2 (Umi)",c={unversionedId:"programs/candy-machine/how-to-guides/my-first-candy-machine-part2-umi",id:"programs/candy-machine/how-to-guides/my-first-candy-machine-part2-umi",title:"How to create a Candy Machine v3 - Part 2 (Umi)",description:"Shows how to create a basic mint page with Metaplex Umi",source:"@site/docs/01-programs/02-candy-machine/11-how-to-guides/01-my-first-candy-machine-part2-umi.md",sourceDirName:"01-programs/02-candy-machine/11-how-to-guides",slug:"/programs/candy-machine/how-to-guides/my-first-candy-machine-part2-umi",permalink:"/programs/candy-machine/how-to-guides/my-first-candy-machine-part2-umi",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/11-how-to-guides/01-my-first-candy-machine-part2-umi.md",tags:[],version:"current",lastUpdatedAt:1687370114,formattedLastUpdatedAt:"Jun 21, 2023",sidebarPosition:1,frontMatter:{description:"Shows how to create a basic mint page with Metaplex Umi"},sidebar:"sidebar",previous:{title:"How to create a Candy Machine v3 - Part 1 (Sugar)",permalink:"/programs/candy-machine/how-to-guides/my-first-candy-machine-part1"},next:{title:"How to create a Candy Machine v3 - Part 2 (JS SDK)",permalink:"/programs/candy-machine/how-to-guides/my-first-candy-machine-part2"}},l={},m=[],p={toc:m};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-create-a-candy-machine-v3---part-2-umi"},"How to create a Candy Machine v3 - Part 2 (Umi)"),(0,a.kt)("p",null,"A guide on how to create a simple mint page will follow here."))}s.isMDXComponent=!0}}]);