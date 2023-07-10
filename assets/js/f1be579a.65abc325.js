"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[754],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),u=d(n),h=i,p=u["".concat(s,".").concat(h)]||u[h]||m[h]||o;return n?a.createElement(p,l(l({ref:t},c),{},{components:n})):a.createElement(p,l({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=u;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r.mdxType="string"==typeof e?e:i,l[1]=r;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},63687:function(e,t,n){n.d(t,{r:function(){return r}});var a=n(67294),i=n(45697),o=n.n(i),l=n(38545);function r(e){let{children:t,title:n="Code",open:i=!1}=e;return a.createElement(l.Q,{title:n,open:i},a.createElement("div",{className:"accordion-item-no-padding"},t))}r.propTypes={children:o().any,title:o().string,open:o().bool}},38545:function(e,t,n){n.d(t,{Q:function(){return r},U:function(){return l}});var a=n(67294),i=n(45697),o=n.n(i);function l(e){let{children:t}=e;return a.createElement("div",{className:"accordion"},t)}function r(e){let{open:t,title:n,actions:i,keepAlive:o=!0,children:l}=e;const[r,d]=(0,a.useState)(t),c=r||o;return a.createElement("div",{className:["accordion-item",r?"accordion-item-opened":"accordion-item-closed"].join(" ")},a.createElement("div",{className:"accordion-item-header",onClick:()=>d(!r)},a.createElement("h3",null,a.createElement(s,{opened:r}),a.createElement("span",null,n)),i),a.createElement("div",{className:"accordion-item-content"},c&&l))}function s(e){let{opened:t}=e;return t?a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M215.4,92.9A8,8,0,0,0,208,88H48a8,8,0,0,0-7.4,4.9,8.4,8.4,0,0,0,1.7,8.8l80,80a8.2,8.2,0,0,0,11.4,0l80-80A8.4,8.4,0,0,0,215.4,92.9Z"})):a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"192",height:"192",fill:"currentColor",viewBox:"0 0 256 256"},a.createElement("rect",{width:"256",height:"256",fill:"none"}),a.createElement("path",{d:"M181.7,122.3l-80-80a8.4,8.4,0,0,0-8.8-1.7A8,8,0,0,0,88,48V208a8,8,0,0,0,4.9,7.4,8.5,8.5,0,0,0,3.1.6,8.3,8.3,0,0,0,5.7-2.3l80-80A8.1,8.1,0,0,0,181.7,122.3Z"}))}l.propTypes={children:o().any},r.propTypes={open:o().bool,title:o().string,children:o().any,actions:o().any,keepAlive:o().bool},s.propTypes={opened:o().bool}},20950:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return r},default:function(){return u},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c}});var a=n(83117),i=(n(67294),n(3905)),o=n(38545);n(63687);const l={description:"Shows how to create a basic mint page with Metaplex JS SDK"},r="How to create a Candy Machine v3 - Part 2 (JS SDK)",s={unversionedId:"programs/candy-machine/how-to-guides/my-first-candy-machine-part2",id:"programs/candy-machine/how-to-guides/my-first-candy-machine-part2",title:"How to create a Candy Machine v3 - Part 2 (JS SDK)",description:"Shows how to create a basic mint page with Metaplex JS SDK",source:"@site/docs/01-programs/02-candy-machine/11-how-to-guides/01-my-first-candy-machine-part2.md",sourceDirName:"01-programs/02-candy-machine/11-how-to-guides",slug:"/programs/candy-machine/how-to-guides/my-first-candy-machine-part2",permalink:"/programs/candy-machine/how-to-guides/my-first-candy-machine-part2",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/01-programs/02-candy-machine/11-how-to-guides/01-my-first-candy-machine-part2.md",tags:[],version:"current",lastUpdatedAt:1688984188,formattedLastUpdatedAt:"Jul 10, 2023",sidebarPosition:1,frontMatter:{description:"Shows how to create a basic mint page with Metaplex JS SDK"},sidebar:"sidebar",previous:{title:"How to create a Candy Machine v3 - Part 2 (Umi)",permalink:"/programs/candy-machine/how-to-guides/my-first-candy-machine-part2-umi"},next:{title:"Conceptual Guides",permalink:"/programs/candy-machine/conceptual-guides"}},d={},c=[{value:"Prerequisite Knowledge",id:"prerequisite-knowledge",level:2},{value:"Install Node.js, NPM",id:"install-nodejs-npm",level:2},{value:"Clone connect-wallet example",id:"clone-connect-wallet-example",level:2},{value:"Add mint function",id:"add-mint-function",level:2},{value:"Create a new React Element for minting",id:"create-a-new-react-element-for-minting",level:3},{value:"Read the candy machine state",id:"read-the-candy-machine-state",level:3},{value:"Optional but recommended improvements",id:"optional-but-recommended-improvements",level:2},{value:"Add eligibility checks",id:"add-eligibility-checks",level:3},{value:"Add refresh listener",id:"add-refresh-listener",level:3},{value:"Further reading",id:"further-reading",level:2}],m={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-create-a-candy-machine-v3---part-2-js-sdk"},"How to create a Candy Machine v3 - Part 2 (JS SDK)"),(0,i.kt)("p",null,"In this Guide, we will show you how to leverage the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/js"},"Metaplex JS SDK")," to create a simple mint page to allow your users to mint from your Candy Machine v3. This will give you all the information to build that page by yourself given you have some web development experience. "),(0,i.kt)("p",null,"The code that you will see in this Guide and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/js-examples/tree/main/mint-ui-example"},"mint-example-ui code on Github")," is written to be as easily understandable as possible, and neither perfectly compliant with Next JS rules nor being as smart as possible, but instead to make it as easily readable as possible."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"This Guide is for Candy Machine v3 Account version v1. If you want to use the JS SDK the highest sugar version you can use is ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/sugar/releases/tag/v2.0.0"},"v2.0"),". With later versions you have to the ",(0,i.kt)("a",{parentName:"p",href:"./my-first-candy-machine-part2-umi"},"Umi Guide"),"."),(0,i.kt)("p",{parentName:"admonition"},"This guide does NOT support programmable NFT (pNFT, royalty enforcement)")),(0,i.kt)("h2",{id:"prerequisite-knowledge"},"Prerequisite Knowledge"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You should have a basic understanding of how to find and use a terminal on your OS, including navigating directories, and running commands: an example of a terminal for macOS is ",(0,i.kt)("a",{parentName:"li",href:"https://iterm2.com/"},"iTerm2"),"."),(0,i.kt)("li",{parentName:"ul"},"You should have basic familiarity with what Solana is but don't need advanced technical knowledge."),(0,i.kt)("li",{parentName:"ul"},"You should have basic familiarity with the Metaplex Standard but, again, do not need advanced technical knowledge."),(0,i.kt)("li",{parentName:"ul"},"You should have some experience with Web Development to fully leverage the Information provided in this tutorial.")),(0,i.kt)("h2",{id:"install-nodejs-npm"},"Install Node.js, NPM"),(0,i.kt)("p",null,"Even though you will not necessarily have to use NPM to build a mint page we will use it in this tutorial since it is based on the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/js"},"Metaplex JS SDK"),". Following these steps is only required if you do not have Node.js already installed."),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"macOS & Linux",open:!1,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},"For Linux and Mac, it's best to use the node version manager (nvm). Run the install script:",(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash\n")),(0,i.kt)("p",null,"Then set it to use the current version:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nvm install 16.14\n")))),(0,i.kt)(o.Q,{title:"Windows",open:!1,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open PowerShell"),(0,i.kt)("li",{parentName:"ol"},"run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"winget install CoreyButler.NVMforWindows\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Restart PowerShell as Administrator"),(0,i.kt)("li",{parentName:"ol"},"run:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"nvm install 16.14\n"))))),(0,i.kt)("h2",{id:"clone-connect-wallet-example"},"Clone connect-wallet example"),(0,i.kt)("p",null,"As a base, we will be using the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/js-examples"},"metaplex-foundation/js-examples repository")," which contains multiple examples of how to use the JS SDK. Since we want to interact with a user's Wallet we will use the ",(0,i.kt)("inlineCode",{parentName:"p"},"connect-wallet")," example as a basis and will have the ",(0,i.kt)("inlineCode",{parentName:"p"},"candy-machine-mint")," as result."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"clone ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/js-examples"},"https://github.com/metaplex-foundation/js-examples")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"cd connect-wallet")," run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm install")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"npm run dev")," to test if everything is set up correctly. You should see a blank page with a blue connect button. Try to connect your wallet."),(0,i.kt)("li",{parentName:"ol"},"To make your website more flexible we add a ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file in the ",(0,i.kt)("inlineCode",{parentName:"li"},"candy-machine-mint")," folder which contains a single line. Make sure to replace ",(0,i.kt)("inlineCode",{parentName:"li"},"<Candy Machine ID>")," with your actual Candy Machine ID: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"NEXT_PUBLIC_CANDY_MACHINE_ID=<Candy Machine ID>\n")),(0,i.kt)("p",null,"You should now have a website where you can connect your wallet, enter an NFT address, and see its image. That's a great starting point."),(0,i.kt)("h2",{id:"add-mint-function"},"Add mint function"),(0,i.kt)("p",null,"Now let's modify the website so that it can be used for minting."),(0,i.kt)("h3",{id:"create-a-new-react-element-for-minting"},"Create a new React Element for minting"),(0,i.kt)("p",null,"To be more flexible we will create a new react Element which will contain our minting section. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy the ",(0,i.kt)("inlineCode",{parentName:"li"},"ShowNFTs.js")," page and rename the copy to ",(0,i.kt)("inlineCode",{parentName:"li"},"MintNFTs.js")),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"MintNFTs.js")," rename the ",(0,i.kt)("inlineCode",{parentName:"li"},"ShowNFTs")," constant to ",(0,i.kt)("inlineCode",{parentName:"li"},"MintNFTs")),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"index.js")," add ",(0,i.kt)("inlineCode",{parentName:"li"},"import { MintNFTs } from './MintNFTs'")," near the top of the file"),(0,i.kt)("li",{parentName:"ol"},"In ",(0,i.kt)("inlineCode",{parentName:"li"},"index.js")," add ",(0,i.kt)("inlineCode",{parentName:"li"},"<MintNFTs onClusterChange={handleChange} />")," below the ",(0,i.kt)("inlineCode",{parentName:"li"},"ShowNFTs")," Element")),(0,i.kt)("p",null,"When starting the website and connecting the wallet now you should see the same element twice. Now let's go ahead and add the candy machine."),(0,i.kt)("h3",{id:"read-the-candy-machine-state"},"Read the candy machine state"),(0,i.kt)("p",null,"Let's find your candy machine so that we can use it for minting! Everything that's described in this section has to be done in ",(0,i.kt)("inlineCode",{parentName:"p"},"MintNFTs.js"),"."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add the following line to the ",(0,i.kt)("inlineCode",{parentName:"li"},"MintNFTs")," function. This will read the ",(0,i.kt)("inlineCode",{parentName:"li"},".env")," file and load your candy machines address:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const candyMachineAddress = new PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID);\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Below this line let's add a ",(0,i.kt)("inlineCode",{parentName:"li"},"checkEligibility")," function. This will be used to get the Candy Machines' state. E.g. if there are mints available:")),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"Details",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"At first, we'll add some variables before the ",(0,i.kt)("inlineCode",{parentName:"p"},"checkEligibility")," function that we will need later."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  let candyMachine;\n  let walletBalance;\n")),(0,i.kt)("p",null,"Then we'll add the actual ",(0,i.kt)("inlineCode",{parentName:"p"},"checkEligibility")," function which for now only reads the candy machine data from the chain using the ",(0,i.kt)("inlineCode",{parentName:"p"},"metaplex.candyMachines().findByAddress()")," function."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const checkEligibility = async () => {\n    candyMachine = await metaplex\n      .candyMachines()\n      .findByAddress({ address: candyMachineAddress });\n  };\n")),(0,i.kt)("p",null,"Before triggering the refresh function we have to make sure that a wallet is connected. Otherwise, the connection would fail and our user would see an error message. We can see the connection status in ",(0,i.kt)("inlineCode",{parentName:"p"},"wallet.connected"),", therefore our function call wrapper looks like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  if (!wallet.connected) {\n    return null;\n  } else {\n    checkEligibility();\n  }\n"))))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Now that we have our Candy Machine we should add the mint button. Since we used the ",(0,i.kt)("inlineCode",{parentName:"li"},"ShowNFTs")," as a Basis we can modify part of its code and replace the show with our mint Button:")),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"Details",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"Replace the ",(0,i.kt)("inlineCode",{parentName:"p"},"onClick")," function. Instead of showing a random NFT from our wallet, we will run  ",(0,i.kt)("inlineCode",{parentName:"p"},"metaplex.candyMachines().mint()")," - be aware that depending on the guards that you are using you will have to pass a ",(0,i.kt)("inlineCode",{parentName:"p"},"settings")," array. You can find more information on how to build that mint function on the ",(0,i.kt)("a",{parentName:"p",href:"../minting#minting-with-guards"},"minting page")," and the ",(0,i.kt)("a",{parentName:"p",href:"../available-guards"},"respective guard page"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const onClick = async () => {\n    const { nft } = await metaplex.candyMachines().mint({\n      candyMachine,\n      collectionUpdateAuthority,\n    });\n\n    setNft(nft);\n  };\n\nYou might have seen the `setMintedNft(nft);` line at the end. This one is handing over the freshly minted NFT data to our website and will show the image to the user.\n"))))),(0,i.kt)("p",null,"Technically you can already start up your website and mint since in Part 1 of this guide we only added Candy Guards which do not require special handling. But wait and please read the next section, too, so that your users do not waste their money."),(0,i.kt)("h2",{id:"optional-but-recommended-improvements"},"Optional but recommended improvements"),(0,i.kt)("h3",{id:"add-eligibility-checks"},"Add eligibility checks"),(0,i.kt)("p",null,"To improve the user experience we should "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"deactivate the mint button"),(0,i.kt)("li",{parentName:"ol"},"verify that your user will be able to mint"),(0,i.kt)("li",{parentName:"ol"},"activate the mint button to allow them to mint!")),(0,i.kt)("p",null,"The Details of how those sanity checks can and should look vary depending on which guards you are using. One check should always be done: If there are NFTs available. In the following example, we additionally describe how to do such checks for the guards that were added in Part 1: ",(0,i.kt)("inlineCode",{parentName:"p"},"MintLimit"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"SolPayment"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"StartDate"),"."),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"Details",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"add a new state constant ",(0,i.kt)("inlineCode",{parentName:"li"},"disableMint")," into the ",(0,i.kt)("inlineCode",{parentName:"li"},"MintNFTs")," function and add it as ",(0,i.kt)("inlineCode",{parentName:"li"},"disabled={disableMint}")," to the button to disable the button by default.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const [disableMint, setDisableMint] = useState(true);\n\n  ...\n\n  <button onClick={onClick} disabled={disableMint}>\n    mint NFT\n  </button>\n\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In the ",(0,i.kt)("inlineCode",{parentName:"li"},"checkEligibility")," function after finding the candy machine data with ",(0,i.kt)("inlineCode",{parentName:"li"},"metaplex.candyMachines().findByAddress()")," we can read the ",(0,i.kt)("inlineCode",{parentName:"li"},"itemsMinted")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"itemsAvailable")," overall. If we compare those we can see if there are items available and if not disable the mint with ",(0,i.kt)("inlineCode",{parentName:"li"},"setDisableMint(true)"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'    //enough items available?\n    if (\n      candyMachine.itemsMinted.toString(10) -\n        candyMachine.itemsAvailable.toString(10) >\n      0\n    ) {\n      console.error("not enough items available");\n      setDisableMint(true);\n      return;\n    }\n')),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Guard-specific checks: We'll also add some checks to see if one of the guards forbids the user to mint. In this Guide it is explained how to do it for the three Guards ",(0,i.kt)("inlineCode",{parentName:"li"},"MintLimit"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"SolPayment"),", and ",(0,i.kt)("inlineCode",{parentName:"li"},"StartDate"),", the example on GitHub contains info for all the guards. We'll add those checks to the ",(0,i.kt)("inlineCode",{parentName:"li"},"checkEligibility")," function, too, after the ",(0,i.kt)("inlineCode",{parentName:"li"},"itemsAvailable")," check.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'    //first check if the wallet already reached the mint Limit\n\n    if (guard.mintLimit != null) { // is the mintLimit guard activated?\n      // calculate the PDA where the amount of already minted \n      const mitLimitCounter = metaplex.candyMachines().pdas().mintLimitCounter({\n        id: 1,                                // use value from your config\n        user: metaplex.identity().publicKey,\n        candyMachine: candyMachine.address,\n        candyGuard: candyMachine.candyGuard.address,\n      });\n      //Read Data from chain\n      const mintedAmountBuffer = await metaplex.connection.getAccountInfo(mitLimitCounter, "processed");\n      const mintedAmount = mintedAmountBuffer.data.readUintLE(0, 1);\n      if (mintedAmount >= guard.mintLimit.limit) {\n        console.error("mintLimit: mintLimit reached!");\n        setDisableMint(true);\n        return;\n      }\n    }\n\n    if (guard.solPayment != null) {\n      walletBalance = await metaplex.connection.getBalance(\n        metaplex.identity().publicKey\n      );\n\n      const costInLamports = guard.solPayment.amount.basisPoints.toString(10);\n\n      if (costInLamports > walletBalance) {\n        console.error("solPayment: Not enough SOL!");\n        setDisableMint(true);\n        return;\n      }\n    }\n\n        if (guard.startDate != null) {\n      const candyStartDate = guard.startDate.date.toString(10);\n      if (solanaTime < candyStartDate) {\n        console.error("startDate: CM not live yet");\n        setDisableMint(true);\n        return;\n      }\n    }\n'))))),(0,i.kt)("h3",{id:"add-refresh-listener"},"Add refresh listener"),(0,i.kt)("p",null,"Now that we check if the user is allowed to mint they might open the website but are not allowed to mint yet. E.g. if the start date has not been reached. To improve the user experience we should automatically recheck the eligibility. In this example we will add listeners for three cases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The candy guard and therefore possibly the eligibility are modified"),(0,i.kt)("li",{parentName:"ol"},"The user's wallets content changes (e.g. if he gets sent more SOL so that they can afford mint)"),(0,i.kt)("li",{parentName:"ol"},"The start time has been reached"),(0,i.kt)("li",{parentName:"ol"},"The end time has been reached")),(0,i.kt)(o.U,{mdxType:"Accordion"},(0,i.kt)(o.Q,{title:"Details",open:!0,mdxType:"AccordionItem"},(0,i.kt)("div",{className:"accordion-item-padding"},(0,i.kt)("p",null,"To achieve this we introduce a new function ",(0,i.kt)("inlineCode",{parentName:"p"},"addListener")," before ",(0,i.kt)("inlineCode",{parentName:"p"},"checkEligibility"),":"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"& 2. In the first section, we add the ",(0,i.kt)("inlineCode",{parentName:"li"},"onAccountChange")," listener which listens for changes to our candy guard and the user's wallet. After a change is detected ",(0,i.kt)("inlineCode",{parentName:"li"},"checkEligibility")," will be called.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"  const addListener = async () => {\n    // add a listener to monitor changes to the candy guard\n    metaplex.connection.onAccountChange(candyMachine.candyGuard.address,\n      () => checkEligibility()\n    );\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Add a timer to recheck the eligibility after the start time has been reached")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    // add a listener to reevaluate if the user is allowed to mint if startDate is reached\n    const slot = await metaplex.connection.getSlot();\n    const solanaTime = await metaplex.connection.getBlockTime(slot);\n    const startDateGuard = candyMachine.candyGuard.guards.startDate;\n    if (startDateGuard != null) {\n      const candyStartDate = startDateGuard.date.toString(10);\n      const refreshTime = candyStartDate - solanaTime.toString(10);\n      if (refreshTime > 0) {\n        setTimeout(() => checkEligibility(), refreshTime * 1000);\n      }\n    }\n\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"and do the same if the end time has been reached:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"    // also reevaluate eligibility after endDate is reached\n    const endDateGuard = candyMachine.candyGuard.guards.endDate;\n    if (startDateGuard != null) {\n      const candyEndDate = endDateGuard.date.toString(10);\n      const refreshTime = solanaTime.toString(10) - candyEndDate;\n      if (refreshTime > 0) {\n        setTimeout(() => checkEligibility(), refreshTime * 1000);\n      }\n    }\n  };\n"))))),(0,i.kt)("h1",{id:"conclusion"},"Conclusion"),(0,i.kt)("p",null,"After following this guide you should be able to build a simple mint page yourself or use the one built here as an example."),(0,i.kt)("p",null,"If you are experiencing issues feel free to ask questions e.g. in our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/metaplex"},"discord"),"."),(0,i.kt)("h2",{id:"further-reading"},"Further reading"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you want to use this UI as a basis you can just clone it from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/js-examples/tree/main/mint-ui-example"},"mint-example-ui code on Github")),(0,i.kt)("li",{parentName:"ul"},"Additional code is required if you want to add guard groups. Find more information on the ",(0,i.kt)("a",{parentName:"li",href:"../minting"},"minting page")),(0,i.kt)("li",{parentName:"ul"},"Some guards require special handling. Get more info on the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.metaplex.com/programs/candy-machine/special-guard-instructions"},"special guard instructions page"),".")))}u.isMDXComponent=!0}}]);