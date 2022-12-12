"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3740],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,y=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},50118:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var r=n(83117),a=(n(67294),n(3905));const o={},i="Quick Start",s={unversionedId:"programs/hydra/quick-start",id:"programs/hydra/quick-start",title:"Quick Start",description:"To get started with Hydra, you'll need the package for your programming environment.",source:"@site/docs/01-programs/06-hydra/01-quick-start.md",sourceDirName:"01-programs/06-hydra",slug:"/programs/hydra/quick-start",permalink:"/programs/hydra/quick-start",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/06-hydra/01-quick-start.md",tags:[],version:"current",lastUpdatedAt:1670832184,formattedLastUpdatedAt:"Dec 12, 2022",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Introduction",permalink:"/programs/hydra/intro"},next:{title:"Fixed-price-sale",permalink:"/programs/fixed-price-sale/"}},c={},u=[{value:"Quick Start - JS",id:"quick-start---js",level:2}],l={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"quick-start"},"Quick Start"),(0,a.kt)("p",null,"To get started with Hydra, you'll need the package for your programming environment."),(0,a.kt)("p",null,"If you are using Rust grab the crate here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://crates.io/crates/hydra_wallet"},"https://crates.io/crates/hydra_wallet")),(0,a.kt)("p",null,"If you are using Javascript, grab the package here:"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/@glasseaters/hydra-sdk"},"https://www.npmjs.com/package/@glasseaters/hydra-sdk")),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Everything is brand new so expect frequent changes.\nWe don't support the use of the Anchor TS library, we only support the Hydra SDK. This is because we can add accounts\nand arguments without breaking backward compatibility.")),(0,a.kt)("h2",{id:"quick-start---js"},"Quick Start - JS"),(0,a.kt)("p",null,"Install the package from npm:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @glasseaters/hydra-sdk\n")),(0,a.kt)("p",null,"This is how you'd set up a Hydra with the Wallet ",(0,a.kt)("a",{parentName:"p",href:"./intro#adding-members"},"membership model"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { Connection, Keypair, LAMPORTS_PER_SOL } from "@solana/web3.js";\nimport { ASSOCIATED_TOKEN_PROGRAM_ID, Token, TOKEN_PROGRAM_ID } from "@solana/spl-token";\nimport { airdrop } from "@metaplex-foundation/amman";\nimport {\n  Fanout,\n  FanoutClient,\n  FanoutMembershipMintVoucher,\n  FanoutMembershipVoucher,\n  FanoutMint,\n  MembershipModel\n} from "@glasseaters/hydra-sdk";\n\n\nconst connection = new Connection("devnet", "confirmed");\nconst authorityWallet = Keypair.generate();\n\nawait airdrop(connection, authorityWallet.publicKey, LAMPORTS_PER_SOL * 2);\n\nconst fanoutSdk = new FanoutClient(\n  connection,\n  new NodeWallet(new Account(authorityWallet.secretKey))\n);\n\n// Initialize the Hydra Wallet\nconst { fanout, nativeAccount } = await fanoutSdk.initializeFanout({\n  totalShares: 100,\n  name: `Your Globally Unique Wallet Name`,\n  membershipModel: MembershipModel.Wallet,\n});\n\n// fanout is your fanout config address\n// nativeAccount is your account address\n\n// Retrieve the On-chain Hydra Wallet\nconst fanoutAccount = await fanoutSdk.fetch<Fanout>(\n  fanout,\n  Fanout\n);\n\nconsole.log(fanoutAccount); // Shows you all the parameters in your Hydra\n\n// This is your Hydra Wallet Address\nlet HydraAccountKey = fanoutAccount.accountKey // this is the same thing as nativeAccount above\n\n\n// If you only know the Hydra name, this is how you can retrieve the account key\nlet name = `Your Globally Unique Wallet Name`\nlet [key, bump] = await fanoutSdk.fanoutKey(name)\nlet [holdingAccount, bump] = await fanoutSdk.nativeAccount(key)\n\n\n// Add members\n\nconst member1 = new Keypair();\nconst { membershipAccount1 } = await fanoutSdk.addMemberWallet({\n  fanout: init.fanout,\n  fanoutNativeAccount: init.nativeAccount,\n  membershipKey: member1.publicKey,\n  shares: 10\n});\n\n//Repeat for all members until sum(shares) == totalShares from initialization\n...\n\n// Send some Sol to the Hydra Wallet so you can distribute\nawait airdrop(connection, HydraAccountKey, 2);\n\n// Generate the distribution instructions\nlet distMember1 = await fanoutSdk.distributeWalletMemberInstructions(\n  {\n    distributeForMint: false,\n    member: member1.wallet.publicKey,\n    fanout: fanout,\n    payer: authorityWallet.publicKey, // This can be changed to whoever sends the tx\n  },\n);\n\n// Send the distribution instructions\nconst tx = await fanoutSdk.sendInstructions(\n  [...distMember1.instructions],\n  [authorityWallet],\n  authorityWallet.publicKey\n);\nif (!!tx.RpcResponseAndContext.value.err) {\n  const txdetails = await connection.getConfirmedTransaction(tx.TransactionSignature);\n  console.log(txdetails, tx.RpcResponseAndContext.value.err);\n}\n\n// Member1 Should have 0.2 more sol in their wallet\n\n')))}p.isMDXComponent=!0}}]);