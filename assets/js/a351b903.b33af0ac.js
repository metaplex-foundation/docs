"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6797],{3905:function(e,a,n){n.d(a,{Zo:function(){return d},kt:function(){return h}});var t=n(67294);function o(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function i(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?i(Object(n),!0).forEach((function(a){o(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function r(e,a){if(null==e)return{};var n,t,o=function(e,a){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||(o[n]=e[n]);return o}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),c=function(e){var a=t.useContext(s),n=a;return e&&(n="function"==typeof e?e(a):l(l({},a),e)),n},d=function(e){var a=c(e.components);return t.createElement(s.Provider,{value:a},e.children)},u={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},p=t.forwardRef((function(e,a){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),p=c(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||u[h]||i;return n?t.createElement(m,l(l({ref:a},d),{},{components:n})):t.createElement(m,l({ref:a},d))}));function h(e,a){var n=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=p;var r={};for(var s in a)hasOwnProperty.call(a,s)&&(r[s]=a[s]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var c=2;c<i;c++)l[c]=n[c];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},44469:function(e,a,n){n.r(a),n.d(a,{assets:function(){return s},contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return i},metadata:function(){return r},toc:function(){return c}});var t=n(83117),o=(n(67294),n(3905));const i={},l="Commands",r={unversionedId:"developer-tools/sugar/reference/commands",id:"developer-tools/sugar/reference/commands",title:"Commands",description:"This section is a reference to all of the Sugar commands and a brief description of how to use them and what they do.",source:"@site/docs/03-developer-tools/00-sugar/05-reference/01-commands.md",sourceDirName:"03-developer-tools/00-sugar/05-reference",slug:"/developer-tools/sugar/reference/commands",permalink:"/developer-tools/sugar/reference/commands",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/03-developer-tools/00-sugar/05-reference/01-commands.md",tags:[],version:"current",lastUpdatedAt:1693996694,formattedLastUpdatedAt:"Sep 6, 2023",sidebarPosition:1,frontMatter:{},sidebar:"sidebar",previous:{title:"Configuration Values",permalink:"/developer-tools/sugar/reference/configuration"},next:{title:"Upload Methods",permalink:"/developer-tools/sugar/reference/upload-methods"}},s={},c=[{value:"bundlr",id:"bundlr",level:2},{value:"collection",id:"collection",level:2},{value:"config",id:"config",level:2},{value:"create",id:"create",level:3},{value:"set",id:"set",level:3},{value:"update",id:"update",level:3},{value:"deploy",id:"deploy",level:2},{value:"freeze",id:"freeze",level:2},{value:"enable",id:"enable",level:3},{value:"disable",id:"disable",level:3},{value:"hash",id:"hash",level:2},{value:"launch",id:"launch",level:2},{value:"mint",id:"mint",level:2},{value:"reveal",id:"reveal",level:2},{value:"show",id:"show",level:2},{value:"sign",id:"sign",level:2},{value:"thaw",id:"thaw",level:2},{value:"unfreeze-funds",id:"unfreeze-funds",level:2},{value:"update",id:"update-1",level:2},{value:"upload",id:"upload",level:2},{value:"validate",id:"validate",level:2},{value:"verify",id:"verify",level:2},{value:"withdraw",id:"withdraw",level:2},{value:"Further Reading",id:"further-reading",level:2}],d={toc:c};function u(e){let{components:a,...n}=e;return(0,o.kt)("wrapper",(0,t.Z)({},d,n,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"commands"},"Commands"),(0,o.kt)("p",null,"This section is a reference to all of the Sugar commands and a brief description of how to use them and what they do."),(0,o.kt)("h2",{id:"bundlr"},"bundlr"),(0,o.kt)("p",null,"When you use ",(0,o.kt)("inlineCode",{parentName:"p"},"bundlr")," as your upload method, Sugar automatically funds your account on the Bundlr Network to cover the storage costs. Once the upload is completed, there could be leftover funds in your Bundlr account. You can verify your balance on the Bundlr Network with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar bundlr balance\n")),(0,o.kt)("p",null,"This will retrieve the balance for the current keypair. You can specify an alternative keypair using the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--keypair"),". The remaining balance (if there is any) can be withdrawn:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar bundlr withdraw\n")),(0,o.kt)("p",null,"At the end of the withdrawal, the funds available on the Bundlr Network will be transferred to your Solana address."),(0,o.kt)("h2",{id:"collection"},"collection"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"collection")," commands to manually set or remove the collection NFT. You can only modify the collection on your Candy Machine before any NFTs have been minted from it."),(0,o.kt)("p",null,"You can set a preexisting collection NFT on your candy machine with the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar collection set <COLLECTION MINT ID>\n")),(0,o.kt)("p",null,"where the ",(0,o.kt)("inlineCode",{parentName:"p"},"<COLLECTION MINT ID>")," is the mint ID of the collection NFT, which is the address you use to view the NFT in explorers."),(0,o.kt)("p",null,"To remove the collection NFT:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar collection remove\n")),(0,o.kt)("h2",{id:"config"},"config"),(0,o.kt)("p",null,"Manage candy machine configurations."),(0,o.kt)("h3",{id:"create"},"create"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Interactive process to create a config file\n\nUSAGE:\n    sugar config create [OPTIONS] [ASSETS_DIR]\n\nARGS:\n    <ASSETS_DIR>    Path to the directory with the assets [default: assets]\n\nOPTIONS:\n    -c, --config <CONFIG>          Path to the config file\n    -h, --help                     Print help information\n    -k, --keypair <KEYPAIR>        Path to the keypair file [default: solana config or\n                                   "~/.config/solana/id.json"]\n    -l, --log-level <LOG_LEVEL>    Log level: trace, debug, info, warn, error, off\n    -r, --rpc-url <RPC_URL>        RPC Url\n')),(0,o.kt)("p",null,"By default, Sugar looks for a ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," file in the current directory to load the Candy Machine configuration ","\u2014"," the configuration file name can be specified with a ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"--config")," option."),(0,o.kt)("p",null,"You can either create this file manually, following the instructions above, or use the ",(0,o.kt)("inlineCode",{parentName:"p"},"config create")," command."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar config create\n")),(0,o.kt)("p",null,"Executing the command starts an interactive process consisting in a sequence of prompts to gather information about all configuration options. At the end of it, a configuration file is saved (default to ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),") or its content is displayed on screen. To specify a custom file name, use the option ",(0,o.kt)("inlineCode",{parentName:"p"},"-c"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar config create -c my-config.json\n")),(0,o.kt)("h3",{id:"set"},"set"),(0,o.kt)("p",null,"This command supports changing the type of asset your Candy Machine mints: either NFTs or pNFTs using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--token-standard")," option.\nIt also allows you to specify a rule set for minted pNFTs."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'sugar-config-set \nSet specific candy machine config values\n\nUSAGE:\n    sugar config set [OPTIONS]\n\nOPTIONS:\n        --cache <CACHE>\n            Path to the cache file, defaults to "cache.json" [default: cache.json]\n\n        --candy-machine <CANDY_MACHINE>\n            Address of candy machine to update\n\n    -h, --help\n            Print help information\n\n    -k, --keypair <KEYPAIR>\n            Path to the keypair file, uses Sol config or defaults to "~/.config/solana/id.json"\n\n    -l, --log-level <LOG_LEVEL>\n            Log level: trace, debug, info, warn, error, off\n\n    -r, --rpc-url <RPC_URL>\n            RPC Url\n\n        --rule-set <RULE_SET>\n            Address of the rule set to use\n\n    -t, --token-standard <TOKEN_STANDARD>\n            Token Standard to set\n')),(0,o.kt)("h3",{id:"update"},"update"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'Update the candy machine config on-chain\n\nUSAGE:\n    sugar config update [OPTIONS]\n\nOPTIONS:\n    -c, --config <CONFIG>\n            Path to the config file, defaults to "config.json" [default: config.json]\n\n        --cache <CACHE>\n            Path to the cache file, defaults to "cache.json" [default: cache.json]\n\n        --candy-machine <CANDY_MACHINE>\n            Address of candy machine to update\n\n    -h, --help\n            Print help information\n\n    -k, --keypair <KEYPAIR>\n            Path to the keypair file, uses Sol config or defaults to "~/.config/solana/id.json"\n\n    -l, --log-level <LOG_LEVEL>\n            Log level: trace, debug, info, warn, error, off\n\n    -n, --new-authority <NEW_AUTHORITY>\n            Pubkey for the new authority\n\n    -r, --rpc-url <RPC_URL>\n            RPC Url\n')),(0,o.kt)("h2",{id:"deploy"},"deploy"),(0,o.kt)("p",null,"Once all assets are uploaded and the cache file is successfully created, you are ready to deploy your items to Solana:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar deploy\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command will write the information of your cache file to the Candy Machine account on-chain. This effectively creates the Candy Machine and displays its on-chain ID ","\u2014"," use this ID to query its information on-chain using an ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.solana.com/"},"explorer"),". You can specify the path for the configuration file with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," option (default ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),") and the name of the cache file with the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--cache")," (default ",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json"),") in case you are not using the default names."),(0,o.kt)("p",null,"After a successful deployment, the Candy Machine is ready to be minted according to its ",(0,o.kt)("inlineCode",{parentName:"p"},"goLiveDate")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"whitelistMintSettings"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," The authority wallet (the one used to create the Candy Machine) can mint bypassing the ",(0,o.kt)("inlineCode",{parentName:"p"},"goLiveDate")," setting.")),(0,o.kt)("h2",{id:"freeze"},"freeze"),(0,o.kt)("p",null,"Subcommand that allows enabling or disabling the freeze feature on a candy machine."),(0,o.kt)("h3",{id:"enable"},"enable"),(0,o.kt)("p",null,"Turn on the freeze settings for a candy machine that has not started minting yet."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sugar freeze enable\n")),(0,o.kt)("h3",{id:"disable"},"disable"),(0,o.kt)("p",null,"Turn off the freeze settings for a candy machine."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar freeze disable\n")),(0,o.kt)("p",null,"Both commands default to using the candy machine in the cache file but take an optional <candy_machine> arg."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sugar freeze enable 4j7JaycXWPiwgv7aodQpvW9iXGiZ9hfgdUEPbS8B6ncp\n")),(0,o.kt)("h2",{id:"hash"},"hash"),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"hiddenSettings"),", this command computes a hash of the cache file and updates the hash value in the config file. Hash values are automatically updated by the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command when using ",(0,o.kt)("inlineCode",{parentName:"p"},"hiddenSettings"),", but this command allows updating for advanced use-cases when users are modifying the cache file manually."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar hash\n")),(0,o.kt)("p",null,"It also allows comparing a published hash value with the value from a cache file with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--compare")," option. The cache file can be specified manually with ",(0,o.kt)("inlineCode",{parentName:"p"},"--cache"),", or it will default to the ",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json")," file in the current directory."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar hash --compare 44oZ3goi9ivakeUnbjWbWJpvdgcWCrsi\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar hash --compare 44oZ3goi9ivakeUnbjWbWJpvdgcWCrsi --cache my_custom_cache.json\n")),(0,o.kt)("h2",{id:"launch"},"launch"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"launch")," command is a convenience command that runs four other commands consecutively:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"create-config"),(0,o.kt)("li",{parentName:"ul"},"validate"),(0,o.kt)("li",{parentName:"ul"},"upload"),(0,o.kt)("li",{parentName:"ul"},"deploy"),(0,o.kt)("li",{parentName:"ul"},"verify")),(0,o.kt)("p",null,"These five commands allow you to start from a project folder with an assets subfolder in it and go through the entire process of setting up and creating a candy machine, so it's meant as a quickstart command if you don't want to run the steps individually."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar launch\n")),(0,o.kt)("h2",{id:"mint"},"mint"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"mint")," command mints NFTs from a Candy Machine from the command-line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar mint\n")),(0,o.kt)("p",null,"if you are using the default cache file name (",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json"),") or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar mint --cache <CACHE>\n")),(0,o.kt)("p",null,"to specify a different cache file path. You can specify the number of NFTs to mint using the option ",(0,o.kt)("inlineCode",{parentName:"p"},"-n"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar mint -n 10\n")),(0,o.kt)("p",null,"The above command will mint 10 NFTs from the Candy Machine."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," It is not possible to mint tokens from the command line if you have ",(0,o.kt)("inlineCode",{parentName:"p"},"gatekeeper")," settings enabled. If you would like to mint tokens, update the ",(0,o.kt)("inlineCode",{parentName:"p"},"goLiveDate")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," and temporarily disable the ",(0,o.kt)("inlineCode",{parentName:"p"},"gatekeeper")," settings.")),(0,o.kt)("h2",{id:"reveal"},"reveal"),(0,o.kt)("p",null,"When using ",(0,o.kt)("inlineCode",{parentName:"p"},"hiddenSettings")," to do a mint and reveal, this command can be used to update all minted NFTs with the values from the cache file. It will find all NFTs minted from the candy machine and then match them up to the values in the cache file by NFT number and then update the NFT data. The command checks if a NFTs URI already matches that in the cache file, and if it does, it skips updating, so the command be rerun to only update newly mintd NFTs or to retry ones that failed to update the first run."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar reveal\n")),(0,o.kt)("h2",{id:"show"},"show"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"show")," command displays the on-chain config of an existing candy machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar show <CANDY MACHINE>\n")),(0,o.kt)("p",null,"where the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CANDY MACHINE>")," is the Candy Machine ID ","\u2014"," the ID given by the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command."),(0,o.kt)("h2",{id:"sign"},"sign"),(0,o.kt)("p",null,"This command allows signing all NFTs with a creator's keypair, to verify that creator in the creators array in the NFT metadata. Each creator can only sign for themself and only one creator can sign at a time with this command. The creator's keypair can be passed in with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--keypair")," option, otherwise it defaults to using whatever keypair is specified in your Solana CLI config."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar sign\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar sign -k creator.json\n")),(0,o.kt)("h2",{id:"thaw"},"thaw"),(0,o.kt)("p",null,"This command thaws a single frozen NFT, or all frozen NFTs from a candy machine, if the candy machine's freeze settings allow it."),(0,o.kt)("p",null,"Thaw a single NFT:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar thaw --candy-machine-id <candy_machine_id> <mint_account>\n")),(0,o.kt)("p",null,"Thaw all NFTs from a candy machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar thaw --all --candy-machine-id <candy_machine_id>\n")),(0,o.kt)("p",null,"In both commands, the candy machine id is optional, and if left off Sugar will default to the id it finds in the cache file."),(0,o.kt)("p",null,"E.g.:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar thaw --all\n")),(0,o.kt)("h2",{id:"unfreeze-funds"},"unfreeze-funds"),(0,o.kt)("p",null,"Unfreeze a candy machine's treasury funds by closing the freeze PDA and transferring the funds back to the treasury address. This can only be done when the freeze time has elapsed, or the candy machine is fully minted out, and all NFTs are unthawed."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar unfreeze-funds\n")),(0,o.kt)("p",null,"It defaults to using the candy machine specified in the cache but can optionally take a candy machine address as an argument."),(0,o.kt)("p",null,"Using it with an optional candy machine arg:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar unfreeze-funds <candy_machine>\n")),(0,o.kt)("h2",{id:"update-1"},"update"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," command is used to modify the current configuration of a Candy Machine. Most configuration settings can be updated in a CMv2 with a single command, except:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"number")," of items in the Candy Machine can only be updated when ",(0,o.kt)("inlineCode",{parentName:"li"},"hiddenSettings")," are being used;"),(0,o.kt)("li",{parentName:"ul"},"switching to use ",(0,o.kt)("inlineCode",{parentName:"li"},"hiddenSettings")," is only possible if the ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," of items is equal to ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),". After the switch, you will be able to update the ",(0,o.kt)("inlineCode",{parentName:"li"},"number")," of items.")),(0,o.kt)("p",null,"To update the configuration, modify your ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json")," (or equivalent) file and execute:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar update\n")),(0,o.kt)("p",null,"if you are using the default cache file name (",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json"),") and configuration file (",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),"). Otherwise, use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar update -c <CONFIG> --cache <CACHE>\n")),(0,o.kt)("p",null,"where ",(0,o.kt)("inlineCode",{parentName:"p"},"<CONFIG>")," is the path to the configuration file and ",(0,o.kt)("inlineCode",{parentName:"p"},"<CACHE>")," is the path to the cache file."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You need to be careful when updating a live Candy Machine, since setting a wrong value will immediately affect its functionality.")),(0,o.kt)("h2",{id:"upload"},"upload"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command uploads assets to the specified storage and creates the cache file for the Candy Machine:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar upload\n")),(0,o.kt)("p",null,"if your assets are in a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar upload <ASSETS DIR>\n")),(0,o.kt)("p",null,"There is also the option to specify the path for the configuration file with the ",(0,o.kt)("inlineCode",{parentName:"p"},"-c")," option (default ",(0,o.kt)("inlineCode",{parentName:"p"},"config.json"),") and the name of the cache file with the option ",(0,o.kt)("inlineCode",{parentName:"p"},"--cache")," (default ",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json"),")."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command can be resumed (re-run) at any point in case the upload is not completed successfully ","\u2014"," only files that have not yet been uploaded are processed. It also automatically detects when the content of media/metadata files changes and re-uploads them, updating the cache file accordingly. In other words, if you need to change a file, you only need to copy the new (modified) file to your assets folder and re-run the ",(0,o.kt)("inlineCode",{parentName:"p"},"upload")," command. There is no need to manually edit the cache file."),(0,o.kt)("h2",{id:"validate"},"validate"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"validate")," command is used to check that all files in the assets folder are in the correct format:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar validate\n")),(0,o.kt)("p",null,"if your assets are in a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"assets")," or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar validate <ASSETS_DIR>\n")),(0,o.kt)("p",null,"to specify a custom asset ",(0,o.kt)("inlineCode",{parentName:"p"},"<ASSETS DIR>")," folder name."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"Note:")," It is important to validate your assets before the upload to avoid having to repeat the upload process.")),(0,o.kt)("h2",{id:"verify"},"verify"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"verify")," command checks that all items in your cache file have been successfully written on-chain:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar verify\n")),(0,o.kt)("p",null,"if you are using the default cache file name (",(0,o.kt)("inlineCode",{parentName:"p"},"cache.json"),") or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar verify --cache <CACHE>\n")),(0,o.kt)("p",null,"to specify a different cache file path. If you deploy has been successfully, the verification return no errors. At this point, you can set up your ",(0,o.kt)("a",{parentName:"p",href:"/guides/candy-machine-ui"},"minting webpage")," to allow your community the chance to mint."),(0,o.kt)("h2",{id:"withdraw"},"withdraw"),(0,o.kt)("p",null,"When the mint from a Candy Machine is complete, it is possible to recover the funds used to pay rent for the data stored on-chain. To initiate the withdrawal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar withdraw <CANDY MACHINE>\n")),(0,o.kt)("p",null,"where the ",(0,o.kt)("inlineCode",{parentName:"p"},"<CANDY MACHINE>")," is the Candy Machine ID ","\u2014"," the ID given by the ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command. It is possible to withdraw funds from all Candy Machines associated with the current keypair:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar withdraw\n")),(0,o.kt)("p",null,"or list all Candy Machines and their associated funds from the current keypair:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sugar withdraw --list\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"You should not withdraw the rent of a live Candy Machine, as the Candy Machine will stop working when you drain its account.")),(0,o.kt)("h2",{id:"further-reading"},"Further Reading"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/deprecated/candy-machine-js-cli/introduction"},"Candy Machine v2 documentation")," provides a more detailed explanation of each step of the deployment of a Candy Machine. Although there a differences in Sugar commands, the overall process is similar."))}u.isMDXComponent=!0}}]);