"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9348],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return h}});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function r(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function l(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):r(r({},a),e)),n},d=function(e){var a=u(e.components);return t.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||i;return n?t.createElement(m,r(r({ref:a},d),{},{components:n})):t.createElement(m,r({ref:a},d))}));function h(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=p;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return t.createElement.apply(null,r)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9807:function(e,a,n){n.r(a),n.d(a,{assets:function(){return s},contentTitle:function(){return r},default:function(){return c},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return u}});var t=n(83117),o=(n(67294),n(3905));const i={},r="My First Candy Machine",l={unversionedId:"developer-tools/sugar/tutorials/my-first-candy-machine",id:"developer-tools/sugar/tutorials/my-first-candy-machine",title:"My First Candy Machine",description:"This guide is for Candy Machine v2. You might want to follow the more up to date guide for Candy Machine v3.",source:"@site/docs/03-developer-tools/00-sugar/02-tutorials/00-my-first-candy-machine.md",sourceDirName:"03-developer-tools/00-sugar/02-tutorials",slug:"/developer-tools/sugar/tutorials/my-first-candy-machine",permalink:"/developer-tools/sugar/tutorials/my-first-candy-machine",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/02-tutorials/00-my-first-candy-machine.md",tags:[],version:"current",lastUpdatedAt:1693996694,formattedLastUpdatedAt:"Sep 6, 2023",sidebarPosition:0,frontMatter:{},sidebar:"sidebar",previous:{title:"Tutorials",permalink:"/developer-tools/sugar/tutorials/"},next:{title:"Guides",permalink:"/developer-tools/sugar/guides/"}},s={},u=[{value:"Prerequisite Knowledge",id:"prerequisite-knowledge",level:2},{value:"Setup",id:"setup",level:2},{value:"Install the Solana CLI Tool Suite",id:"install-the-solana-cli-tool-suite",level:3},{value:"Install Sugar",id:"install-sugar",level:2},{value:"Set Up Your Project",id:"set-up-your-project",level:2},{value:"Create a Config File",id:"create-a-config-file",level:2},{value:"Upload Images and Metadata to External Storage",id:"upload-images-and-metadata-to-external-storage",level:2},{value:"Deploy a Candy Machine",id:"deploy-a-candy-machine",level:2},{value:"Verify Successful Deployment",id:"verify-successful-deployment",level:2},{value:"Mint a NFT",id:"mint-a-nft",level:2}],d={toc:u};function c(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"my-first-candy-machine"},"My First Candy Machine"),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"This guide is for Candy Machine v2. You might want to follow the ",(0,o.kt)("a",{parentName:"p",href:"/programs/candy-machine/how-to-guides/my-first-candy-machine-part1"},"more up to date guide")," for Candy Machine v3.")),(0,o.kt)("p",null,"The goal of this tutorial is to take you from zero to one: you will learn to install Sugar and use its basic commands to configure and deploy a candy machine to Solana's devnet. It will provide you with a foothold on the basics and enough knowledge that you can then use the rest of the developer resources to learn the more advanced details for using Sugar."),(0,o.kt)("h2",{id:"prerequisite-knowledge"},"Prerequisite Knowledge"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You should have a basic understanding of how to find and use a terminal on your OS, including navigating directories, and running commands: an example of a terminal for macOS is ",(0,o.kt)("a",{parentName:"li",href:"https://iterm2.com/"},"iTerm2"),"."),(0,o.kt)("li",{parentName:"ul"},"You should have basic familiarity with what Solana is but don't need advanced technical knowledge."),(0,o.kt)("li",{parentName:"ul"},"You should have basic familiarity with the Metaplex Standard but, again, do not need advanced technical knowledge.")),(0,o.kt)("h2",{id:"setup"},"Setup"),(0,o.kt)("p",null,"This tutorial targets macOS, Linux, and Windows Subsystem Linux (WSL), but all commands and screenshots are from a macOS system. It should work on any of those three systems. For installing on Windows see the Windows method on the ",(0,o.kt)("a",{parentName:"p",href:"/developer-tools/sugar/overview/installation"},"installation page"),"."),(0,o.kt)("h3",{id:"install-the-solana-cli-tool-suite"},"Install the Solana CLI Tool Suite"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/cli/install-solana-cli-tools"},"Solana CLI Tool Suite")," is useful to have for Solana development, and we will use the config file to store our keypair file path and RPC node url to simplify the Sugar commands we run, by eliding those options."),(0,o.kt)("p",null,"To install, follow ",(0,o.kt)("a",{parentName:"p",href:"../../../guides/cli-wallet#setting-up-a-devnet-wallet-for-testing"},"this guide")," to install the Solana Tool Suite and set up a devnet wallet."),(0,o.kt)("p",null,"Once finished, come back here to resume the tutorial."),(0,o.kt)("h2",{id:"install-sugar"},"Install Sugar"),(0,o.kt)("p",null,"To install Sugar, simply copy and paste and run this command in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bash <(curl -sSf https://sugar.metaplex.com/install.sh)\n")),(0,o.kt)("p",null,"This will download and run an install script from the Metaplex Sugar repo. The install script checks your OS and downloads the correct binary for it and installs it on your system PATH, so you can run the Sugar command from any directory on your system."),(0,o.kt)("p",null,"Follow any instructions from the install script regarding updating your PATH. This may require closing and reopening your terminal. Once complete you should be able to run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"sugar")," in your terminal and get a list of available commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sugar-cli 0.6.0\nCommand line tool for creating and managing Metaplex Candy Machines.\n\nUSAGE:\nsugar [OPTIONS] <SUBCOMMAND>\n\nOPTIONS:\n\n-h, --help Print help information\n-l, --log-level <LOG_LEVEL> Log level: trace, debug, info, warn, error, off\n-V, --version Print version information\n\nSUBCOMMANDS:\n    bundlr            Interact with the bundlr network\n    collection        Manage the collection on the candy machine\n    create-config     Interactive process to create the config file\n    deploy            Deploy cache items into candy machine config on-chain\n    freeze            Commands for the Candy Machine Freeze feature\n    hash              Generate hash of cache file for hidden settings\n    help              Print this message or the help of the given subcommand(s)\n    launch            Create a candy machine deployment from assets\n    mint              Mint one NFT from candy machine\n    reveal            Reveal the NFTs from a hidden settings candy machine\n    show              Show the on-chain config of an existing candy machine\n    sign              Sign one or all NFTs from candy machine\n    thaw              Thaw an NFT or all NFTs in a candy machine\n    unfreeze-funds    Unlock treasury funds after freeze is turned off or expires\n    update            Update the candy machine config on-chain\n    upload            Upload assets to storage and creates the cache config\n    validate          Validate JSON metadata files\n    verify            Verify uploaded data\n    withdraw          Withdraw funds from candy machine account closing it\n")))),(0,o.kt)("h2",{id:"set-up-your-project"},"Set Up Your Project"),(0,o.kt)("p",null,"Next we are going to set up a simple project directory with some example assets which you can download from ",(0,o.kt)("a",{parentName:"p",href:"https://arweave.net/RhNCVZoqC6iO0xEL0DnsqZGPSG_CK_KeiU4vluOeIoI"},"here"),". Extract the zip file and rename the folder to 'assets'."),(0,o.kt)("p",null,'Create a folder for your project somewhere convenient on your OS. For this tutorial we are creating a folder called MyProject on the Desktop. Next, copy the "assets" folder you downloaded into this folder so your project directory looks like the following:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"MyProject/\n     assets/\n         0.png\n         0.json\n         1.png\n         1.json\n         . . .\n")),(0,o.kt)("p",null,"We will run all our Sugar commands from within the project directory and Sugar will create our config and cache files in that directory. If we do this, we can elide the cache and config files from our commands as Sugar will look in the current directory for ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json")," files."),(0,o.kt)("h2",{id:"create-a-config-file"},"Create a Config File"),(0,o.kt)("p",null,"The config file tells Sugar how to configure your candy machine with values such as number of assets, what creators to use, what settings to apply, etc. To create a config file we are going to use the Sugar ",(0,o.kt)("inlineCode",{parentName:"p"},"create-config")," interactive command."),(0,o.kt)("p",null,"Run the following command in your terminal from within your project directory:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar create-config\n")),(0,o.kt)("p",null,"We will now get a series of questions we need to answer to set up our config file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? What is the price of each NFT? \u203a\n")),(0,o.kt)("p",null,'This is the price we wish to charge for selling each of our NFTs. The price is either in SOL or in an SPL token we specify. For this tutorial we are just setting up a basic candy machine that charges users in SOL. Input your desired price and then press "enter" to go to the next step. Decimal values such as ',(0,o.kt)("inlineCode",{parentName:"p"},"1.33")," are ok."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'? Found 10 file pairs in "assets". Is this how many NFTs you will have in your candy machine? (y/n) \u203a\n')),(0,o.kt)("p",null,"This is the number of NFTs we are configuring our candy machine to mint and must match the number of asset pairs we have in our ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," directory. In this case, Sugar has detected we have 10 asset files pairs, so we can simply input ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," to confirm this is correct."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'? Found symbol "TEST" in your metadata file. Is this value correct? (y/n) \u203a\n\n')),(0,o.kt)("p",null,"Sugar has detected the symbol for our NFT from our assets files so once again we can just input ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," to confirm this is correct."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? What is the seller fee basis points? \u203a\n")),(0,o.kt)("p",null,'The seller fee basis points is the amount of royalty we want to charge on secondary sales (all sales after the candy machine minting). Basis points are percentage times 100, so e.g. 500 basis points is 5%, and 150 is 1.5%. Input the value you wish to use for this and press "enter" to go to the next step.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? What is your go live date? Enter it this format, YYYY-MM-DD HH:MM:SS [+/-]UTC-OFFSET or type 'now' for current time. For example 2022-05-02 18:00:00 +0000 for May 2, 2022 18:00:00 UTC. \u203a\n")),(0,o.kt)("p",null,'The candy machine "go live date" is when the candy machine becomes active and minting from it is allowed. We can either input a date here in the format specified or we can input "now" for the current time. Input "now" and hit enter to go to the next step.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? How many creator wallets do you have? (max limit of 4) \u203a\n")),(0,o.kt)("p",null,'Here we enter the number of creators who are part of this project and who we want to receive royalties from secondary sales. For this tutorial we will use one creator so input "1" and press enter.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? Enter creator wallet address #1 \u203a\n")),(0,o.kt)("p",null,"Now we need to provide the Solana wallet address for each creator. In this case, we only have one creator, and we are going to use our own address for that creator, so we can run ",(0,o.kt)("inlineCode",{parentName:"p"},"solana address")," in a separate terminal window to retrieve the address of the wallet we configured in a previous step. Input this value and press enter."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? Enter royalty percentage share for creator #1 (e.g., 70). Total shares must add to 100. \u203a\n")),(0,o.kt)("p",null,"We only have a single creator, so we put in ",(0,o.kt)("inlineCode",{parentName:"p"},"100")," here."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? Which extra features do you want to use? (use [SPACEBAR] to select options you want and hit [ENTER] when done) \u203a\n\u2714 SPL Token Mint\n\u2714 Gatekeeper\n\u2714 Whitelist Mint\n\u2714 End Settings\n\u2714 Hidden Settings\n\u2714 Freeze Settings\n")),(0,o.kt)("p",null,"This step allows us to configure advanced settings for our candy machine, but we are not using any of them in this tutorial, so we simply press ","[Enter]"," to continue on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? What is your SOL treasury address? \u203a\n")),(0,o.kt)("p",null,"Once again we will use the address of our keypair set in the Solana config in a previous step. If you have it handy you can enter it here, otherwise, you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"solana address")," again in a separate window to retrieve it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? What upload method do you want to use? \u203a\n\u276f Bundlr\nAWS\nNFT Storage\nSHDW\n")),(0,o.kt)("p",null,"This lets us choose which method we are using to store our off-chain NFT metadata (the images and data in the .json files for our assets). The simplest one to start with is ",(0,o.kt)("inlineCode",{parentName:"p"},"Bundlr")," as it does not require any extra configuration other than having a funded Solana address. Bundlr will upload our metadata and images to ",(0,o.kt)("a",{parentName:"p",href:"https://www.arweave.org/"},"Arweave"),", a blockchain designed for permanent and decentralized data storage."),(0,o.kt)("p",null,"Use the ","[SPACEBAR]"," to select the Bundlr option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? Do you want to retain update authority on your NFTs? We HIGHLY recommend you choose yes. (y/n) \u203a\n")),(0,o.kt)("p",null,"This is an advanced setting and lets us give away update authority to the owner of each NFT individually, but we do not recommend doing this initially as it will prevent you from fixing any mistakes you make in your candy machine after NFTs are minted. Select ",(0,o.kt)("inlineCode",{parentName:"p"},"yes")," for this case by inputting ",(0,o.kt)("inlineCode",{parentName:"p"},"y"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"? Do you want your NFTs to remain mutable? We HIGHLY recommend you choose yes. (y/n) \u203a\n")),(0,o.kt)("p",null,"Similarly, we recommend leaving your NFTs as mutable so you, the update authority, can fix any issues post-mint. You can always set your NFTs to be immutable later using a third-party tool such as ",(0,o.kt)("a",{parentName:"p",href:"https://metaboss.rs"},"Metaboss"),", but this is a one way street: once set immutable, you can never make them mutable again. Input ",(0,o.kt)("inlineCode",{parentName:"p"},"y")," to select yes and leave your NFTs mutable."),(0,o.kt)("p",null,"If all steps were followed correctly you should now see:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'[2/2] \ud83d\udcdd Saving config file\n\nSaving config to file: "config.json"\n\nSuccessfully generated the config file. \ud83c\udf89\n\n\u2705 Command successful.\n')),(0,o.kt)("p",null,"Open up the generated file, config.json, in your favorite text or code editor (e.g. ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),"). You should see a file similar to this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "price": 1.0,\n  "number": 10,\n  "gatekeeper": null,\n  "creators": [\n    {\n      "address": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8",\n      "share": 100\n    }\n  ],\n  "solTreasuryAccount": "PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8",\n  "splTokenAccount": null,\n  "splToken": null,\n  "goLiveDate": "11 Aug 2022 18:19:16 +0000",\n  "endSettings": null,\n  "whitelistMintSettings": null,\n  "hiddenSettings": null,\n  "freezeTime": null,\n  "uploadMethod": "bundlr",\n  "retainAuthority": true,\n  "isMutable": true,\n  "symbol": "TEST",\n  "sellerFeeBasisPoints": 500,\n  "awsS3Bucket": null,\n  "nftStorageAuthToken": null,\n  "shdwStorageAccount": null\n}\n')),(0,o.kt)("p",null,"Your values will be different depending on and what you input for various settings."),(0,o.kt)("h2",{id:"upload-images-and-metadata-to-external-storage"},"Upload Images and Metadata to External Storage"),(0,o.kt)("p",null,"In this step, we will upload all our assets file pairs to Arweave via Bundlr."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Solana is designed to be a high-throughput, low-latency blockchain that can host smart contracts, but one of the design tradeoffs is that storing data on Solana is fairly expensive. For NFTs, we only store basic information about the NFT, such as the name, symbol, creators, and seller fee basis points. For the image and all the other metadata, we have a URL on-chain on Solana that points to an external JSON file containing all that information."),(0,o.kt)("p",{parentName:"admonition"},"This URL can point to any JSON file anywhere. It can be a decentralized file storage blockchain like Arweave or Filecoin, a peer-to-peer distributed file system like IPFS, or even a centralized cloud server like AWS."),(0,o.kt)("p",{parentName:"admonition"},"Sugar currently supports four upload methods: Arweave via Bundlr, IPFS via NFT Storage, Shadow Drive and AWS.")),(0,o.kt)("p",null,"In our previous step we selected ",(0,o.kt)("inlineCode",{parentName:"p"},"Bundlr")," as our upload method, and we saw this in the config file when we viewed it. Now, all we have to do is run the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sugar upload\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[1/4] \ud83d\uddc2 Loading assets\nFound 10 asset pair(s), uploading files:\n+--------------------+\n| images | 10 |\n| metadata | 10 |\n+--------------------+\n\n[2/4] \ud83d\udda5 Initializing upload\n\u25aa\u25aa\u25aa\u25aa\u25aa Connected\nFunding address:\n-> pubkey: PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8\n-> lamports: 5939049 (\u25ce 0.005939049)\nSignature: 5zeJw5WerTFVDTWEoCGDH6WwRcdFcsjAswKvZ6QB6vzSVtaWKK4QVRH3BsKHjHeCASXiN7W8ni7BsYxFuMAmjVUD\n\n[3/4] \ud83d\udce4 Uploading image files\n\nSending data: (Ctrl+C to abort)\n[00:00:09] Upload successful \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 10/10\n\n[4/4] \ud83d\udce4 Uploading metadata files\n\nSending data: (Ctrl+C to abort)\n[00:00:00] Upload successful \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 10/10\n\n10/10 asset pair(s) uploaded.\n\n\u2705 Command successful.\n")))),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Sugar commands are designed to be robust and commands such as ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," will pick up where they left off when you run them again. You may occasionally get an error such as:"),(0,o.kt)("p",{parentName:"admonition"},"\ud83d\uded1 Error running command (re-run needed): Blockhash not found"),(0,o.kt)("p",{parentName:"admonition"},"In such cases it's safe to rerun the command until it succeeds.")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"However, some upload methods such as Bundlr, do cost funds to upload and store the data. If you successfully upload your data and then run it again, it will charge you again. If you do this repeatedly with a large amount of data it can cost you a significant amount of SOL. Once you have successfully uploaded your data you should not have to do it again, as the cache file will store all the links to the data. Ask on the Metaplex Discord if you run into any unexpected issues.")),(0,o.kt)("p",null,"When uploading is finished, sugar will have created a ",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json")," file in our project directory. Open this file, and you will see something similar to:"),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "program": {\n    "candyMachine": "",\n    "candyMachineCreator": "",\n    "collectionMint": ""\n  },\n  "items": {\n    "0": {\n      "name": "Studious Crab #1",\n      "image_hash": "6f16570562658640b3dc6b6dd7e5b94190d2f8bd5c5a0aa0a4d0bba20c7fd612",\n      "image_link": "https://arweave.net/i-aYA4PmPGO5mKydXnuaUqIs-ZhSvVWwe9rcWCtMJxk",\n      "metadata_hash": "8d83d51e36ea47a9a5009dbe927ef53cddcdf0c2bc029e369e96ca436a012dd7",\n      "metadata_link": "https://arweave.net/35nZmuuUlK1iY9G-dn5u_raI_lwGoNoR9TrhOKUPez0",\n      "onChain": false\n    },\n    "1": {\n      "name": "Studious Crab #2",\n      "image_hash": "d527d7faf0e0064e2c527909a740aaec670ea505ad07b109e940099d5e5781e2",\n      "image_link": "https://arweave.net/PfEGR3UjmlZIptOoDbdVvga4jjZEF7tT9PHWBbimGL0",\n      "metadata_hash": "add6c7b82e45da98eb53dafc9f3ebdef4fe6587680f6904da4be39cc4666320b",\n      "metadata_link": "https://arweave.net/KxSO5JKmCkRurA_KVFrP1K08Cqh7zFlGT_xvsxMJM4E",\n      "onChain": false\n    },\n    "2": {\n      "name": "Studious Crab #3",\n      "image_hash": "82763aecbf910695ef0bf1311152e2b6c2e9578a8d0d85f3ada320abb9b3551b",\n      "image_link": "https://arweave.net/XXUFcltx3bgpLXZfqxdUYmUuRoRS25eK9nAyoVKDijI",\n      "metadata_hash": "0f0ffd8b65e11347410ea6f8b1fabd04cf3a67d705e1787c6841a38c66f0ce4e",\n      "metadata_link": "https://arweave.net/kUVqhDRs6qmTmQq0vfHH8RJVkALCdVqwju2MTpyD22I",\n      "onChain": false\n    },\n    "3": {\n      "name": "Studious Crab #4",\n      "image_hash": "05d9bed9f734103efc131a0ad0a88b0dbbf46afdd8f7a6b179e8ea7e1b37f046",\n      "image_link": "https://arweave.net/-PwwpoZI9pPcK-X6z7Wha-7d2g78uXAJ2sCvcr8lIjM",\n      "metadata_hash": "44b3407c7da4f0aa004326b231c0e19ee9ef939febc0ef98ff14aebb7508012d",\n      "metadata_link": "https://arweave.net/-RBIW6Xj3NmSfkQXfY-9Zb7AK7IBKLw6OC0pXpxmle4",\n      "onChain": false\n    },\n    "4": {\n      "name": "Studious Crab #5",\n      "image_hash": "92906e1988a4c58125799c3636a567ec47fca77e15ef6a326be07bc4d8a0522c",\n      "image_link": "https://arweave.net/k94CDnb0kU_IWgpFmApNM82GCopduhzPEHStaHctzaQ",\n      "metadata_hash": "0c34fecf846ae872e4f25fb51ca7e3fcf1ec09a3b2a2af99334bc88947ee640b",\n      "metadata_link": "https://arweave.net/64dDlYU8s3oEtSBNA5YHviie0EeIyyvhTnxfx8wrg2Q",\n      "onChain": false\n    },\n    "5": {\n      "name": "Studious Crab #6",\n      "image_hash": "ecf8012c1bedc8d481d20540d47813318c02edfef1080b712155896147b056d9",\n      "image_link": "https://arweave.net/a6rCPvyG_5AM6awHhV9nFDvZuwSubp9lV1l1lbvxnA8",\n      "metadata_hash": "6d6be3c1aeaef771ba38e77e1cd4b942ddee2fff7ffcfa27625244aaff595d7e",\n      "metadata_link": "https://arweave.net/WfYBOi4xA7dfeaJX5xS7l24pcV6tjsMLiOUBplQCrrw",\n      "onChain": false\n    },\n    "6": {\n      "name": "Studious Crab #7",\n      "image_hash": "ffe705980fde6a9fbc6cb29b3505d467499c4e78af08f486bf2cd6f7b3f27151",\n      "image_link": "https://arweave.net/Euy4L7kHX7y-2vgZnUJTtdtZ44IxFZcM7-Q2JvJY8_8",\n      "metadata_hash": "1d9df60037af5fba50222362ba2ec215d117ca622d894d2c16f86936a67e1559",\n      "metadata_link": "https://arweave.net/mWtcYmaT4cfphOUCa78yxSVqB81HpSsSMYCKYGDLe5A",\n      "onChain": false\n    },\n    "7": {\n      "name": "Studious Crab #8",\n      "image_hash": "babd4f81cf056ce35bae9b1330c9c1b13f440ad2a3632c862e5594994a30a5b7",\n      "image_link": "https://arweave.net/CxxgV_nIt0DkN3yGym62KXeyS02l-S9p4r78WRWfjzQ",\n      "metadata_hash": "6ca0b7e89e89dfa586ac13580df046f327c658010f7cd932ca2f8af980611319",\n      "metadata_link": "https://arweave.net/_Vvxf0FrLBf4nUfYKcMdWnpbVBAIfCjgl_Ke6f6r9gA",\n      "onChain": false\n    },\n    "8": {\n      "name": "Studious Crab #9",\n      "image_hash": "c95e11874e94a27b547e5e7457f974a8d299c8c0066f3bf4430aa9c24e03835f",\n      "image_link": "https://arweave.net/ed4IrMGpSuP-EVVVwU7s2plrI3bjDNQl2n09WLROeLU",\n      "metadata_hash": "30c2856dc20bd0a92c16128107e4aba43e4dd88bfe3a2d2e3142b5b958d539c6",\n      "metadata_link": "https://arweave.net/w0uAaDzmLVheaEYyb2c2lw929aKIIun015wcy9-qrl8",\n      "onChain": false\n    },\n    "9": {\n      "name": "Studious Crab #10",\n      "image_hash": "4c16db39492bc794fbde16cf0aa0abe5f172fa88a45bd2e4afdfea782af241d5",\n      "image_link": "https://arweave.net/1cFuW_wwZcZF-a72zga_koleo8y7rcLTc2f5YuaHhcU",\n      "metadata_hash": "517b9e282e2db08ad6bc722e378b983e111d8eba14a62bc964b1177521eac3c5",\n      "metadata_link": "https://arweave.net/Ns82pK1nX9tCCsZiBUKg8VvlketUjR9-BaCRbMcWOfg",\n      "onChain": false\n    }\n  }\n}\n')))),(0,o.kt)("p",null,"Each asset from our ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," directory has been uploaded to Arweave and a link to it stored in the cache file. You can open one of these links in the browser to see what this looks like. Within the data in the metadata link, there is another link to the image. Both of these links are stored for each item in the cache file."),(0,o.kt)("p",null,"If you look at the candy machine values at the top, you'll see they are empty because we have not actually created a candy machine yet. We will do that next."),(0,o.kt)("h2",{id:"deploy-a-candy-machine"},"Deploy a Candy Machine"),(0,o.kt)("p",null,"To create and deploy a candy machine, run the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar deploy\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)("p",null,"[1/2] \ud83c\udf6c Creating candy machine Candy machine ID: Ews3L5NoAjjLEHYqEu47DqQ77nsqgNQs3NuELjBCd5bb",(0,o.kt)("p",null,"[2/2]"," \ud83d\udcdd Writing config lines\nSending config line(s) in 1 transaction(s): (Ctrl+C to abort)\n","[00:00:03]"," Write config lines successful \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 1/1"),(0,o.kt)("p",null,"\u2705 Command successful."))),(0,o.kt)("p",null,"Once this finishes, if you open up the cache.json file again you will see that the candy machine values have been filled in as we now have a candy machine created on-chain."),(0,o.kt)("h2",{id:"verify-successful-deployment"},"Verify Successful Deployment"),(0,o.kt)("p",null,"Once the deployment finishes, we can verify successful deployment with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar verify\n")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)("p",null,"\u25aa\u25aa\u25aa\u25aa\u25aa Completed",(0,o.kt)("p",null,"[2/2]"," \ud83d\udcdd Verification\nVerifying 10 config line(s): (Ctrl+C to abort)\n","[00:00:01]"," Config line verification successful \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588 10/10"),(0,o.kt)("p",null,"Verification successful. You're good to go!"),(0,o.kt)("p",null,"See your candy machine at:\n-> ",(0,o.kt)("a",{parentName:"p",href:"https://www.solaneyes.com/address/Ews3L5NoAjjLEHYqEu47DqQ77nsqgNQs3NuELjBCd5bb?cluster=devnet"},"https://www.solaneyes.com/address/Ews3L5NoAjjLEHYqEu47DqQ77nsqgNQs3NuELjBCd5bb?cluster=devnet")),(0,o.kt)("p",null,"\u2705 Command successful."))),(0,o.kt)("p",null,"Our candy machine is now successfully deployed!"),(0,o.kt)("h2",{id:"mint-a-nft"},"Mint a NFT"),(0,o.kt)("p",null,"Finally, to round off this tutorial we will mint an NFT from our candy machine to ensure it works as expected. Run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar mint\n")),(0,o.kt)("p",null,"to mint one NFT to your wallet address."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Output"),(0,o.kt)("p",null,"[1/2] \ud83d\udd0d Loading candy machine Candy machine ID: Ews3L5NoAjjLEHYqEu47DqQ77nsqgNQs3NuELjBCd5bb \u25aa\u25aa\u25aa\u25aa\u25aa Done",(0,o.kt)("p",null,"[2/2]"," \ud83c\udf6c Minting from candy machine"),(0,o.kt)("p",null,"Minting to PanbgtcTiZ2PveV96t2FHSffiLHXXjMuhvoabUUKKm8\n\u25aa\u25aa\u25aa\u25aa\u25aa Signature: jAUVJv4ezyumvKYWvuEsMcDtWRujCK4xFL9q8MCe7PmDiVuAGHNY5PFGKUH5hY4PnqtGMyvDjX821xxCiGAChzQ"),(0,o.kt)("p",null,"\u2705 Command successful."))),(0,o.kt)("p",null,"Now you can open your wallet in an explorer like ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.solana.com/?cluster=devnet"},"Solana Explorer"),' and view the NFT you just minted by clicking on the "Tokens" tab.'),(0,o.kt)("p",null,"To set up a front end to allow users to mint from your candy machine, see the ",(0,o.kt)("a",{parentName:"p",href:"../../../guides/candy-machine-ui"},"Mint UI Guide")),(0,o.kt)("p",null,"Congratulations! You have successfully configured, created, and deployed your first candy machine!"))}c.isMDXComponent=!0}}]);