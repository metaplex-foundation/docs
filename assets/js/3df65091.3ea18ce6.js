"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1745],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return c}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(a),c=r,h=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},38545:function(e,t,a){a.d(t,{Q:function(){return l},U:function(){return i}});var n=a(67294),r=a(45697),o=a.n(r);function i(e){let{children:t}=e;return n.createElement("div",{className:"accordion"},t)}function l(e){let{open:t,title:a,actions:r,keepAlive:o=!0,children:i}=e;const[l,u]=(0,n.useState)(t),p=l||o;return n.createElement("div",{className:["accordion-item",l?"accordion-item-opened":"accordion-item-closed"].join(" ")},n.createElement("div",{className:"accordion-item-header",onClick:()=>u(!l)},n.createElement("h3",null,n.createElement(s,{opened:l}),n.createElement("span",null,a)),r),n.createElement("div",{className:"accordion-item-content"},p&&i))}function s(e){let{opened:t}=e;return t?n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},n.createElement("rect",{width:"256",height:"256",fill:"none"}),n.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},n.createElement("rect",{width:"256",height:"256",fill:"none"}),n.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}i.propTypes={children:o().any},l.propTypes={open:o().bool,title:o().string,children:o().any,actions:o().any,keepAlive:o().bool},s.propTypes={opened:o().bool}},88074:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=a(83117),r=(a(67294),a(3905)),o=a(38545);const i={description:"Explains how to configure multiple groups of guards."},l="Guard Groups",s={unversionedId:"programs/candy-machine/guard-groups",id:"programs/candy-machine/guard-groups",title:"Guard Groups",description:"Explains how to configure multiple groups of guards.",source:"@site/docs/01-programs/02-candy-machine/06-guard-groups.md",sourceDirName:"01-programs/02-candy-machine",slug:"/programs/candy-machine/guard-groups",permalink:"/programs/candy-machine/guard-groups",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/06-guard-groups.md",tags:[],version:"current",lastUpdatedAt:1681287912,formattedLastUpdatedAt:"Apr 12, 2023",sidebarPosition:6,frontMatter:{description:"Explains how to configure multiple groups of guards."},sidebar:"sidebar",previous:{title:"Candy Guards",permalink:"/programs/candy-machine/candy-guards"},next:{title:"Special Guard Instructions",permalink:"/programs/candy-machine/special-guard-instructions"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"How Do Groups Work?",id:"how-do-groups-work",level:2},{value:"Default Guards",id:"default-guards",level:2},{value:"Parallel Groups",id:"parallel-groups",level:2},{value:"Conclusion",id:"conclusion",level:2}],d={toc:p};function m(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"guard-groups"},"Guard Groups"),(0,r.kt)("h2",{id:"introduction"},"Introduction"),(0,r.kt)("p",null,"On ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-guards"},"the previous page"),", we introduced guards and used them to define the access control of our Candy Machines. We\u2019ve seen that using guards, we can for instance add payments of 1 SOL per mint and ensure the mint start after a certain date. But what if we also wanted to charge 2 SOL after a second date? What if we wanted to allow certain token holders to mint for free or at a discounted price?"),(0,r.kt)("p",null,"What if we could define multiple sets of guards that each have their own requirements? For that reason, we\u2019ve created ",(0,r.kt)("strong",{parentName:"p"},"Guard Groups"),"!"),(0,r.kt)("h2",{id:"how-do-groups-work"},"How Do Groups Work?"),(0,r.kt)("p",null,"Remember ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-guards#creating-a-candy-machine-with-guards"},"how we can set up guards on any Candy Machine")," by simply providing the settings of the guards we want to enable? Well, Guard Groups work the same way, except you must also give them a unique ",(0,r.kt)("strong",{parentName:"p"},"Label")," to identify them."),(0,r.kt)("p",null,"Therefore, each Guard Group has the following attributes:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label"),": A unique text identifier. This cannot be longer than 6 characters."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Guards"),": The settings for all activated guards within that group. This works just like setting up guards directly on the Candy Machine.")),(0,r.kt)("p",null,"Let\u2019s take a quick example. Say we wanted to charge 1 SOL from 4 pm to 5 pm and then 2 SOL from 5 pm until the Candy Machine is exhausted. All of that whilst making sure we are protected against bots via the Bot Tax guard. Here\u2019s how we could set up our guards:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Group 1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label"),": \u201cearly\u201d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Guards"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sol Payment: 1 SOL"),(0,r.kt)("li",{parentName:"ul"},"Start Date: 4 pm (ignoring the actual date here for the sake of simplicity)"),(0,r.kt)("li",{parentName:"ul"},"End Date: 5 pm"),(0,r.kt)("li",{parentName:"ul"},"Bot Tax: 0.001 SOL"))))),(0,r.kt)("li",{parentName:"ul"},"Group 2:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label"),": \u201clate\u201d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Guards"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sol Payment: 2 SOL"),(0,r.kt)("li",{parentName:"ul"},"Start Date: 5 pm"),(0,r.kt)("li",{parentName:"ul"},"Bot Tax: 0.001 SOL")))))),(0,r.kt)("p",null,"And just like that, we\u2019ve created a customized 2-tier minting process!"),(0,r.kt)("p",null,"Now, whenever someone tries to mint from our Candy Machine, ",(0,r.kt)("strong",{parentName:"p"},"they will have to explicitly tell us which group they are minting from"),". Asking for the group label when minting is important because:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"It ensures buyers do not experience unexpected minting behaviour. Say we tried to mint for 1 SOL at the very end of the first group\u2019s end date but, by the time the transaction executes, we\u2019re now past that date. If we didn\u2019t ask for the group label, the transaction would succeed and we would be charged 2 SOL even though we expected to only be charged 1 SOL."),(0,r.kt)("li",{parentName:"ul"},"It makes it possible to support parallel groups. We\u2019ll talk more about this later on this page.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardGroups1.png",src:a(9528).Z+"#radius",width:"2472",height:"1298"})),(0,r.kt)("p",null,"Now let\u2019s see how we can create and update groups using our SDKs."),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"To create Candy Machines with guard groups, simply provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," array to the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," function. Each item of this array must contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"guards")," object containing the settings of all guards we wish to activate in that group."),(0,r.kt)("p",null,"Here\u2019s how we\u2019d implement the above example using the Umi library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { some, sol, dateTime } from "@metaplex-foundation/umi";\n\nawait create(umi, {\n  // ...\n  groups: [\n    {\n      label: "early",\n      guards: {\n        solPayment: some({ lamports: sol(1), destination: treasury }),\n        startDate: some({ date: dateTime("2022-10-18T16:00:00Z") }),\n        endDate: some({ date: dateTime("2022-10-18T17:00:00Z") }),\n        botTax: some({ lamports: sol(0.001), lastInstruction: true }),\n      },\n    },\n    {\n      label: "late",\n      guards: {\n        solPayment: some({ lamports: sol(2), destination: treasury }),\n        startDate: some({ date: dateTime("2022-10-18T17:00:00Z") }),\n        botTax: some({ lamports: sol(0.001), lastInstruction: true }),\n      },\n    },\n  ],\n}).sendAndConfirm(umi);\n')),(0,r.kt)("p",null,"To update groups, simply provide that same ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," attribute to the ",(0,r.kt)("inlineCode",{parentName:"p"},"updateCandyGuard")," function.\nPlease note that the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"guards")," object and ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," array will be updated meaning ",(0,r.kt)("strong",{parentName:"p"},"it will override all existing data"),"!"),(0,r.kt)("p",null,"Therefore, make sure to provide the settings for all your groups, even if their settings are not changing. You may want to fetch the latest candy guard account data beforehand to avoid overwriting any existing settings."),(0,r.kt)("p",null,"Here\u2019s an example, changing the SOL payment guard for the \u201clate\u201d group to 3 SOL instead of 2 SOL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { some, sol, dateTime } from "@metaplex-foundation/umi";\n\nconst candyGuard = await fetchCandyGuard(umi, candyMachine.mintAuthority);\nawait updateCandyGuard(umi, {\n  candyGuard: candyGuard.publicKey,\n  guards: candyGuard.guards,\n  groups: [\n    {\n      label: "early",\n      guards: {\n        solPayment: some({ lamports: sol(1), destination: treasury }),\n        startDate: some({ date: dateTime("2022-10-18T16:00:00Z") }),\n        endDate: some({ date: dateTime("2022-10-18T17:00:00Z") }),\n        botTax: some({ lamports: sol(0.001), lastInstruction: true }),\n      },\n    },\n    {\n      label: "late",\n      guards: {\n        solPayment: some({ lamports: sol(3), destination: treasury }),\n        startDate: some({ date: dateTime("2022-10-18T17:00:00Z") }),\n        botTax: some({ lamports: sol(0.001), lastInstruction: true }),\n      },\n    },\n  ],\n}).sendAndConfirm(umi);\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/updateCandyGuard.html"},"updateCandyGuard"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetArgs.html"},"DefaultGuardSetArgs")))),(0,r.kt)(o.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"To create Candy Machines with guard groups, simply provide the ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," array to the ",(0,r.kt)("inlineCode",{parentName:"p"},"create")," operation. Each item of this array must contain a ",(0,r.kt)("inlineCode",{parentName:"p"},"label")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"guards")," object containing the settings of all guards we wish to activate in that group.\nHere\u2019s how we\u2019d implement the above example using the JS SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { sol, toDateTime } from "@metaplex-foundation/js";\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  groups: [\n    {\n      label: "early",\n      guards: {\n        solPayment: { amount: sol(1), destination: treasury },\n        startDate: { date: toDateTime("2022-10-18T16:00:00Z") },\n        endDate: { date: toDateTime("2022-10-18T17:00:00Z") },\n        botTax: { lamports: sol(0.001), lastInstruction: true },\n      },\n    },\n    {\n      label: "late",\n      guards: {\n        solPayment: { amount: sol(2), destination: treasury },\n        startDate: { date: toDateTime("2022-10-18T17:00:00Z") },\n        botTax: { lamports: sol(0.001), lastInstruction: true },\n      },\n    },\n  ],\n});\n')),(0,r.kt)("p",null,"To update groups, simply provide that same ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," attribute to the ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," operation.\nPlease note that the entire ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," array will be updated meaning ",(0,r.kt)("strong",{parentName:"p"},"it will override all existing groups"),"!\nTherefore, make sure to provide the settings for all your groups, even if their settings are not changing.\nHere\u2019s an example, changing the SOL payment guard for the \u201clate\u201d group to 3 SOL instead of 2 SOL."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { sol, toDateTime } from "@metaplex-foundation/js";\n\nawait metaplex.candyMachines().update({\n  candyMachine,\n  groups: [\n    {\n      label: "early",\n      guards: {\n        solPayment: { amount: sol(1), destination: treasury },\n        startDate: { date: toDateTime("2022-10-18T16:00:00Z") },\n        endDate: { date: toDateTime("2022-10-18T17:00:00Z") },\n        botTax: { lamports: sol(0.001), lastInstruction: true },\n      },\n    },\n    {\n      label: "late",\n      guards: {\n        solPayment: { amount: sol(3), destination: treasury },\n        startDate: { date: toDateTime("2022-10-18T17:00:00Z") },\n        botTax: { lamports: sol(0.001), lastInstruction: true },\n      },\n    },\n  ],\n});\n')),(0,r.kt)("p",null,"API References:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create: ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),"."),(0,r.kt)("li",{parentName:"ul"},"Update: ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#update"},"Operation"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/types/js.UpdateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#update"},"Transaction Builder"),"."),(0,r.kt)("li",{parentName:"ul"},"Guard Settings: ",(0,r.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardSettings.html"},"Default Candy Guard Settings"),"."))))),(0,r.kt)("h2",{id:"default-guards"},"Default Guards"),(0,r.kt)("p",null,"Notice how, in the example above, we had to provide the same ",(0,r.kt)("strong",{parentName:"p"},"Bot Tax")," guard to both groups. This can be simplified by leveraging the global ",(0,r.kt)("strong",{parentName:"p"},"Guards")," that are set on a Candy Machine."),(0,r.kt)("p",null,"When using Guard Groups, the global Guards of a Candy Machine \u2014 as explained on ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/candy-guards"},"the previous page")," \u2014 ",(0,r.kt)("strong",{parentName:"p"},"act as default guards"),"! That means groups will default to using the same guard settings as the global guards unless they are overriding them by explicitly enabling them in the group."),(0,r.kt)("p",null,"Here\u2019s a quick recap:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If a guard is enabled on the default guards but not on the group\u2019s guards, the group uses the guard ",(0,r.kt)("strong",{parentName:"li"},"as defined in the default guards"),"."),(0,r.kt)("li",{parentName:"ul"},"If a guard is enabled on the default guards ",(0,r.kt)("em",{parentName:"li"},"and")," on the group\u2019s guards, the group uses the guard ",(0,r.kt)("strong",{parentName:"li"},"as defined in the group\u2019s guards"),"."),(0,r.kt)("li",{parentName:"ul"},"If a guard is not enabled on the default guards or the group\u2019s guards, the group does not use this guard.")),(0,r.kt)("p",null,"To illustrate that, let\u2019s take our example from the previous section and move the ",(0,r.kt)("strong",{parentName:"p"},"Bot Tax")," guard to the default guards."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default Guards:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Bot Tax: 0.001 SOL"))),(0,r.kt)("li",{parentName:"ul"},"Group 1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label"),": \u201cearly\u201d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Guards"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sol Payment: 1 SOL"),(0,r.kt)("li",{parentName:"ul"},"Start Date: 4 pm"),(0,r.kt)("li",{parentName:"ul"},"End Date: 5 pm"))))),(0,r.kt)("li",{parentName:"ul"},"Group 2:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label"),": \u201clate\u201d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Guards"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sol Payment: 2 SOL"),(0,r.kt)("li",{parentName:"ul"},"Start Date: 5 pm")))))),(0,r.kt)("p",null,"As you can see, default guards are useful to avoid repetition within your groups."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"CandyMachinesV3-GuardGroups2.png",src:a(77423).Z+"#radius",width:"2472",height:"1368"})),(0,r.kt)("p",null,"Note that, even when using default guards, a group must be provided when minting. That means, when using guard groups, ",(0,r.kt)("strong",{parentName:"p"},"it is not possible to mint using the default guards only"),"."),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"To use default guards in the Umi library, simply use the ",(0,r.kt)("inlineCode",{parentName:"p"},"guards")," attribute in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," array when creating or updating a Candy Machine. For instance, here\u2019s how you\u2019d create a Candy Machine using the guard settings described above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { some, sol, dateTime } from "@metaplex-foundation/umi";\n\nawait create(umi, {\n  // ...\n  guards: {\n    botTax: some({ lamports: sol(0.001), lastInstruction: true }),\n  },\n  groups: [\n    {\n      label: "early",\n      guards: {\n        solPayment: some({ lamports: sol(1), destination: treasury }),\n        startDate: some({ date: dateTime("2022-10-18T16:00:00Z") }),\n        endDate: some({ date: dateTime("2022-10-18T17:00:00Z") }),\n      },\n    },\n    {\n      label: "late",\n      guards: {\n        solPayment: some({ lamports: sol(2), destination: treasury }),\n        startDate: some({ date: dateTime("2022-10-18T17:00:00Z") }),\n      },\n    },\n  ],\n}).sendAndConfirm(umi);\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetArgs.html"},"DefaultGuardSetArgs")))),(0,r.kt)(o.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"To use default guards in the JS SDK, simply use the ",(0,r.kt)("inlineCode",{parentName:"p"},"guards")," attribute in conjunction with the ",(0,r.kt)("inlineCode",{parentName:"p"},"groups")," array when creating or updating a Candy Machine.\nFor instance, here\u2019s how you\u2019d create a Candy Machine using the guard settings described above."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { sol, toDateTime } from "@metaplex-foundation/js";\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    botTax: { lamports: sol(0.001), lastInstruction: true },\n  },\n  groups: [\n    {\n      label: "early",\n      guards: {\n        solPayment: { amount: sol(1), destination: treasury },\n        startDate: { date: toDateTime("2022-10-18T16:00:00Z") },\n        endDate: { date: toDateTime("2022-10-18T17:00:00Z") },\n      },\n    },\n    {\n      label: "late",\n      guards: {\n        solPayment: { amount: sol(2), destination: treasury },\n        startDate: { date: toDateTime("2022-10-18T17:00:00Z") },\n      },\n    },\n  ],\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardSettings.html"},"Default Candy Guard Settings"),".")))),(0,r.kt)("h2",{id:"parallel-groups"},"Parallel Groups"),(0,r.kt)("p",null,"One really interesting benefit of requiring the group label when minting is the ability to have ",(0,r.kt)("strong",{parentName:"p"},"more than one valid group at a given time"),". This removes any ambiguity for the program and allows the buyer to select which group they would like to try to mint from."),(0,r.kt)("p",null,"Let\u2019s illustrate that with a new example. Say we have an NFT collection called \u201cInnocent Bird\u201d and we want to offer a discounted price of 1 SOL to anyone holding an \u201cInnocent Bird\u201d NFT and charge anyone else 2 SOL. We want both of these groups to be able to start minting at the same time \u2014 say 4 pm \u2014 and we also want to be protected against bots for both groups. Here\u2019s how we could configure our guards:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Default Guards:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Start Date: 4 pm"),(0,r.kt)("li",{parentName:"ul"},"Bot Tax: 0.001 SOL"))),(0,r.kt)("li",{parentName:"ul"},"Group 1:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label"),": \u201cnft\u201d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Guards"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sol Payment: 1 SOL"),(0,r.kt)("li",{parentName:"ul"},"NFT Gate: \u201cInnocent Bird\u201d Collection"))))),(0,r.kt)("li",{parentName:"ul"},"Group 2:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Label"),": \u201cpublic\u201d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Guards"),":",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Sol Payment: 2 SOL")))))),(0,r.kt)("p",null,"As you can see, with these guard settings, it is possible for both groups to mint at the same time. It is even possible for an NFT holder to pay the full 2 SOL should they decide to mint from the \u201cpublic\u201d group. However, it is in their best interest to select the \u201cnft\u201d group if they can."),(0,r.kt)(o.U,{mdxType:"Accordion"},(0,r.kt)(o.Q,{title:"JavaScript \u2014 Umi library (recommended)",open:!0,mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s how you\u2019d create a Candy Machine using the guard settings described above via the Umi library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { some, sol, dateTime } from "@metaplex-foundation/umi";\n\nawait create(umi, {\n  // ...\n  guards: {\n    botTax: some({ lamports: sol(0.001), lastInstruction: true }),\n    startDate: some({ date: dateTime("2022-10-18T16:00:00Z") }),\n  },\n  groups: [\n    {\n      label: "early",\n      guards: {\n        solPayment: some({ amount: sol(1), destination: treasury }),\n        nftGate: some({\n          requiredCollection: innocentBirdCollectionNft.publicKey,\n        }),\n      },\n    },\n    {\n      label: "late",\n      guards: {\n        solPayment: some({ amount: sol(2), destination: treasury }),\n      },\n    },\n  ],\n}).sendAndConfirm(umi);\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/functions/create.html"},"create"),", ",(0,r.kt)("a",{parentName:"p",href:"https://mpl-candy-machine-js-docs.vercel.app/types/DefaultGuardSetArgs.html"},"DefaultGuardSetArgs")))),(0,r.kt)(o.Q,{title:"JavaScript \u2014 SDK",mdxType:"AccordionItem"},(0,r.kt)("div",{className:"accordion-item-padding"},(0,r.kt)("p",null,"Here\u2019s how you\u2019d create a Candy Machine using the guard settings described above via the JS SDK."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import { sol, toDateTime } from "@metaplex-foundation/js";\n\nconst { candyMachine } = await metaplex.candyMachines().create({\n  // ...\n  guards: {\n    botTax: { lamports: sol(0.001), lastInstruction: true },\n    startDate: { date: toDateTime("2022-10-18T16:00:00Z") },\n  },\n  groups: [\n    {\n      label: "early",\n      guards: {\n        solPayment: { amount: sol(1), destination: treasury },\n        nftGate: { requiredCollection: innocentBirdCollectionNft.address },\n      },\n    },\n    {\n      label: "late",\n      guards: {\n        solPayment: { amount: sol(2), destination: treasury },\n      },\n    },\n  ],\n});\n')),(0,r.kt)("p",null,"API References: ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineClient.html#create"},"Operation"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineInput.html"},"Input"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.CreateCandyMachineOutput.html"},"Output"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachineBuildersClient.html#create"},"Transaction Builder"),", ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/types/js.DefaultCandyGuardSettings.html"},"Default Candy Guard Settings"),".")))),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Guard groups bring a whole new dimension to our Candy Machines by allowing us to define sequential and/or parallel minting workflows tailored to our needs."),(0,r.kt)("p",null,"On ",(0,r.kt)("a",{parentName:"p",href:"/programs/candy-machine/special-guard-instructions"},"the next page"),", we\u2019ll see yet another exciting feature about guards: Guard instructions!"))}m.isMDXComponent=!0},9528:function(e,t,a){t.Z=a.p+"assets/images/CandyMachinesV3-GuardGroups1-27caf62ffcd42e571fbef261952f0fb5.png"},77423:function(e,t,a){t.Z=a.p+"assets/images/CandyMachinesV3-GuardGroups2-d92741d40f99f37b12e42d413ae3360e.png"}}]);