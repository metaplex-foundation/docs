"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1440],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},70415:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return d}});var a=n(83117),i=(n(67294),n(3905));const r={sidebar_label:"Android SDK"},o="Introduction",l={unversionedId:"sdks/android/index",id:"sdks/android/index",title:"Introduction",description:"The Metaplex Android SDK is a library that allows you to:",source:"@site/docs/02-sdks/00-android/index.md",sourceDirName:"02-sdks/00-android",slug:"/sdks/android/",permalink:"/sdks/android/",draft:!1,editUrl:"https://github.com/metaplex/docs/tree/main/docs/02-sdks/00-android/index.md",tags:[],version:"current",lastUpdatedAt:1693996694,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{sidebar_label:"Android SDK"},sidebar:"sidebar",previous:{title:"SDKs",permalink:"/sdks/"},next:{title:"iOS SDK",permalink:"/sdks/ios/"}},s={},d=[{value:"Stability",id:"stability",level:2},{value:"References",id:"references",level:2},{value:"Getting started",id:"getting-started",level:2},{value:"Installation",id:"installation",level:3},{value:"Requirements",id:"requirements",level:4},{value:"JitPack Release",id:"jitpack-release",level:2},{value:"Setup",id:"setup",level:3},{value:"Setup",id:"setup-1",level:2},{value:"NFTs",id:"nfts",level:2},{value:"Your first request",id:"your-first-request",level:3},{value:"The <code>Nft</code> model",id:"the-nft-model",level:3},{value:"Auctions",id:"auctions",level:2},{value:"findAuctionHouseByAddress",id:"findauctionhousebyaddress",level:3},{value:"findAuctionHouseByCreatorAndMint",id:"findauctionhousebycreatorandmint",level:3},{value:"Identity",id:"identity",level:2},{value:"GuestIdentityDriver",id:"guestidentitydriver",level:3},{value:"KeypairIdentityDriver",id:"keypairidentitydriver",level:3},{value:"ReadOnlyIdentityDriver",id:"readonlyidentitydriver",level:3},{value:"Storage",id:"storage",level:2},{value:"OkHttpSharedStorageDriver",id:"okhttpsharedstoragedriver",level:3},{value:"MemoryStorageDriver",id:"memorystoragedriver",level:3},{value:"Sample app",id:"sample-app",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/android/"},"Metaplex Android SDK")," is a library that allows you to:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Load and Deserialize Accounts"),(0,i.kt)("li",{parentName:"ul"},"Create transactions"),(0,i.kt)("li",{parentName:"ul"},"Run Actions (mint NFT, create an auction, and so on)")),(0,i.kt)("p",null,"It works both in Android and other platforms that support kotlin."),(0,i.kt)("h2",{id:"stability"},"Stability"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/resources/stability-index"},"Stability 1 - Experimental")),(0,i.kt)("p",null,"This project is in development. ",(0,i.kt)("strong",{parentName:"p"},"All")," interfaces are ",(0,i.kt)("em",{parentName:"p"},"very likely")," to change very frequently. Please use caution when making use of this library. Bugs or behavior changes may surprise users when Experimental API modifications occur."),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://metaplex-foundation.github.io/android/"},"API documentation")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/metaplex-foundation/metaplex-android"},"Source code"))),(0,i.kt)("h2",{id:"getting-started"},"Getting started"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("h4",{id:"requirements"},"Requirements"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Android 21+")),(0,i.kt)("p",null,"I recommend using the GitHub recommended way to load Artifacts. First get a GitHub Token from your ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/settings/tokens"},"account settings"),"."),(0,i.kt)("p",null,"Inside settings.gradle add a maven repository:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'repositories {\n    ...\n    maven {\n       name = "GitHubPackages"\n       url = "https://github.com/metaplex-foundation/metaplex-android"\n       credentials {\n           username = "<YOUR_GITHUB_USERNAME>"\n           password = "<YOUR_GITHUB_TOKENS>"\n       }\n    }\n}\n \n')),(0,i.kt)("p",null,"Then at your build.gradle:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dependencies {\n    ...\n    implementation 'com.metaplex:metaplex:+' // Set version\n}\n")),(0,i.kt)("p",null,"After that gradle sync."),(0,i.kt)("h2",{id:"jitpack-release"},"JitPack Release"),(0,i.kt)("p",null,"The library is now is available through JitPack.io"),(0,i.kt)("p",null,"First, add the JitPack repository to your build:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\nrepositories {\n    ...\n    maven { url 'https://jitpack.io' }\n}\n\n")),(0,i.kt)("p",null,"Then add the dependency to the 'build.gradle' file for your app/module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dependencies {\n    ...\n    implementation 'com.github.metaplex-foundation:metaplex-android:{version}'\n}\n")),(0,i.kt)("h3",{id:"setup"},"Setup"),(0,i.kt)("h2",{id:"setup-1"},"Setup"),(0,i.kt)("p",null,"The entry point to the Android SDK is a ",(0,i.kt)("inlineCode",{parentName:"p"},"Metaplex")," instance that will give you access to its API."),(0,i.kt)("p",null,"Set the ",(0,i.kt)("inlineCode",{parentName:"p"},"SolanaConnectionDriver")," and set up your environment. Provide a ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageDriver")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"IdentityDriver"),". You can also use the concrete implementations OkHttpSharedStorageDriver for OKHttp and ReadOnlyIdentityDriver for a read only Identity Driver. "),(0,i.kt)("p",null,"You can customize who the SDK should interact on behalf of and which storage provider to use when uploading assets. We might provide a default and simple implementation in the future."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'val ownerPublicKey = PublicKey("<Any PublicKey>")\nval solanaConnection = SolanaConnectionDriver(RPCEndpoint.mainnetBetaSolana)\nval solanaIdentityDriver = ReadOnlyIdentityDriver(ownerPublicKey, solanaConnection.solanaRPC)\nval storageDriver = OkHttpSharedStorageDriver()\nval metaplex = Metaplex(solanaConnection, solanaIdentityDriver, storageDriver)\n')),(0,i.kt)("h1",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Once properly configured, that ",(0,i.kt)("inlineCode",{parentName:"p"},"Metaplex")," instance can be used to access modules providing different sets of features. Currently, there is only one NFT module that can be accessed via the ",(0,i.kt)("inlineCode",{parentName:"p"},"nft")," property. From that module, you will be able to find, create and update NFTs with more features to come."),(0,i.kt)("h2",{id:"nfts"},"NFTs"),(0,i.kt)("p",null,"The NFT module can be accessed via ",(0,i.kt)("inlineCode",{parentName:"p"},"Metaplex.nft")," and provide the following methods. Currently, we only support reading methods. Writing and creating NFTs will be supported on the future."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"findByMint(mint, callback)"),(0,i.kt)("li",{parentName:"ul"},"findAllByMintList(mints, callback)"),(0,i.kt)("li",{parentName:"ul"},"findAllByOwner(owner, callback)"),(0,i.kt)("li",{parentName:"ul"},"findAllByCreator(creator, position = 1, callback)"),(0,i.kt)("li",{parentName:"ul"},"findAllByCandyMachine(candyMachine, version = 2, callback)")),(0,i.kt)("p",null,"All the methods return a callback. It's also possible to wrap them inside either RX or Async Result. We only provide this interface since is the most compatible without forcing any specific framework. "),(0,i.kt)("h3",{id:"your-first-request"},"Your first request"),(0,i.kt)("p",null,"The following code snippet is a basic one you can use to get NFTs from a publicKey. This use case maybe very common for a Wallet:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"metaplex.nft.findByMint(mintPublicKey){\n    it.onSuccess { \n        ...\n    }.onFailure { \n        ...\n    }\n}\n")),(0,i.kt)("p",null,"This will return an array of NFTs owned by that specific public key."),(0,i.kt)("h3",{id:"the-nft-model"},"The ",(0,i.kt)("inlineCode",{parentName:"h3"},"Nft")," model"),(0,i.kt)("p",null,"All of the methods above either return or interact with an ",(0,i.kt)("inlineCode",{parentName:"p"},"Nft")," object. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Nft")," object is a read-only data representation of your NFT that contains all the information you need at the top level."),(0,i.kt)("p",null,"You can see its full data representation by checking the code but here is an overview of the properties that are available on the ",(0,i.kt)("inlineCode",{parentName:"p"},"Nft")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"class NFT(\n    val metadataAccount: MetadataAccount,\n    val masterEditionAccount: MasterEditionAccount?\n) {\n\n    val updateAuthority: PublicKey = metadataAccount.update_authority\n    val mint: PublicKey = metadataAccount.mint\n    val name: String = metadataAccount.data.name\n    val symbol: String = metadataAccount.data.symbol\n    val uri: String = metadataAccount.data.uri\n    val sellerFeeBasisPoints: Int = metadataAccount.data.sellerFeeBasisPoints\n    val creators: Array<MetaplexCreator> = metadataAccount.data.creators\n    val primarySaleHappened: Boolean = metadataAccount.primarySaleHappened\n    val isMutable: Boolean = metadataAccount.isMutable\n    val editionNonce: Int? = metadataAccount.editionNonce\n    val tokenStandard: MetaplexTokenStandard? = metadataAccount.tokenStandard\n    val collection: MetaplexCollection? = metadataAccount.collection\n    ...\n}\n")),(0,i.kt)("p",null,"As you can see, some of the properties are loaded on demand. This is because they are not always needed and/or can be expensive to load."),(0,i.kt)("p",null,"In order to load these properties, you may run the ",(0,i.kt)("inlineCode",{parentName:"p"},"metadata")," properties of the ",(0,i.kt)("inlineCode",{parentName:"p"},"Nft")," object."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"nft..metadata(metaplex) { result -> \n    it.onSuccess { \n        ...\n    }.onFailure { \n        ...\n    }\n}\n")),(0,i.kt)("h2",{id:"auctions"},"Auctions"),(0,i.kt)("p",null,"The Metaplex Auction House protocol allows anyone to implement a decentralized sales contract and accept ay SPL token they desire. "),(0,i.kt)("p",null,"The Auctions module can be accessed via ",(0,i.kt)("inlineCode",{parentName:"p"},"Metaplex.auctions")," and provide the following methods. Currently we only support read methods. Auction House creation, and the ability to interact with and create bids and listings will be supported in the future."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#findAuctionHouseByAddress"},(0,i.kt)("inlineCode",{parentName:"a"},"findAuctionHouseByAddress(address)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#findAllByMintList"},(0,i.kt)("inlineCode",{parentName:"a"},"findAuctionHouseByCreatorAndMint(creator, treasuryMint)"))),(0,i.kt)("li",{parentName:"ul"},"more coming soon!")),(0,i.kt)("p",null,"All methods are provided as composable ",(0,i.kt)("a",{parentName:"p",href:"https://kotlinlang.org/docs/composing-suspending-functions.html"},"suspending functions")," to provide more flexibility and compatibility in your application.   "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note:")," These suspend functions provided by the Auctions API are an architectural change for the library. We have previously only provided async-callback methods. We highly recommend that everyone migrate to the new suspending functions, however we have also provided async-callback implementations of the available methods. Note that these methods are provided as a interim and may be deprecated in the future:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#findAuctionHouseByAddress"},(0,i.kt)("inlineCode",{parentName:"a"},"findAuctionHouseByAddress(address, callback)"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#findAllByMintList"},(0,i.kt)("inlineCode",{parentName:"a"},"findAuctionHouseByCreatorAndMint(creator, treasuryMint, callback)")))),(0,i.kt)("h3",{id:"findauctionhousebyaddress"},"findAuctionHouseByAddress"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"findAuctionHouseByAddress")," method accepts a public key and returns an AuctionHouse object, or an error if no AuctionHouse was found for the given address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val theAuctionHouse: AuctionHouse? = metaplex.auctions.findAuctionHouseByAddress(addressPublicKey).getOrNull()\n")),(0,i.kt)("h3",{id:"findauctionhousebycreatorandmint"},"findAuctionHouseByCreatorAndMint"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"findAuctionHouseByCreatorAndMint")," method accepts a public key and returns an AuctionHouse object, or an error if no AuctionHouse was found for the given address."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"val theAuctionHouse: AuctionHouse? = metaplex.auctions.findAuctionHouseByCreatorAndMint(creatorPublicKey, mintPublicKey).getOrNull()\n")),(0,i.kt)("p",null,"The returned ",(0,i.kt)("inlineCode",{parentName:"p"},"AuctionHouse")," model will contain details about the Auction House account on chain. In the future, this model will be used to construct an ",(0,i.kt)("inlineCode",{parentName:"p"},"AuctionHouseClient")," instance to interact with the auction and perform trades. "),(0,i.kt)("h2",{id:"identity"},"Identity"),(0,i.kt)("p",null,"The current identity of a ",(0,i.kt)("inlineCode",{parentName:"p"},"Metaplex")," instance can be accessed via ",(0,i.kt)("inlineCode",{parentName:"p"},"metaplex.identity()")," and provide information on the wallet we are acting on behalf of when interacting with the SDK."),(0,i.kt)("p",null,"This method returns an identity object with the following interface. All the methods required a solana api instance"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface IdentityDriver {\n    val publicKey: PublicKey\n    fun sendTransaction(transaction: Transaction, recentBlockHash: String? = null, onComplete: ((Result<String>) -> Unit))\n    fun signTransaction(transaction: Transaction, onComplete: (Result<Transaction>) -> Unit)\n    fun signAllTransactions(transactions: List<Transaction>, onComplete: (Result<List<Transaction?>>) -> Unit)\n}\n")),(0,i.kt)("p",null,"The implementation of these methods depends on the concrete identity driver being used. For example use a KeypairIdentity or a Guest(no publickey added)"),(0,i.kt)("p",null,"Let\u2019s have a quick look at the concrete identity drivers available to us."),(0,i.kt)("h3",{id:"guestidentitydriver"},"GuestIdentityDriver"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"GuestIdentityDriver")," driver is the simplest identity driver. It is essentially a ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," driver that can be useful when we don\u2019t need to send any signed transactions. It will return failure if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"signTransaction")," methods."),(0,i.kt)("h3",{id:"keypairidentitydriver"},"KeypairIdentityDriver"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"KeypairIdentityDriver")," driver accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"Account")," object as a parameter."),(0,i.kt)("h3",{id:"readonlyidentitydriver"},"ReadOnlyIdentityDriver"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"KeypairIdentityDriver")," driver accepts a ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey")," object as a parameter. It's a read only similar to the GUestIdentity, but it has a provided ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey"),". It will return failure if you use ",(0,i.kt)("inlineCode",{parentName:"p"},"signTransaction")," methods."),(0,i.kt)("h2",{id:"storage"},"Storage"),(0,i.kt)("p",null,"You may access the current storage driver using ",(0,i.kt)("inlineCode",{parentName:"p"},"metaplex.storage()")," which will give you access to the following interface."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},"interface StorageDriver {\n    fun download(url: URL, onComplete: (ResultWithCustomError<NetworkingResponse, StorageDriverError>) -> Unit)\n}\n")),(0,i.kt)("p",null,"Currently its only used to retrieve json data off-chain. "),(0,i.kt)("h3",{id:"okhttpsharedstoragedriver"},"OkHttpSharedStorageDriver"),(0,i.kt)("p",null,"This will use OkHttp networking. Which is the most popular Android networking implementation library. This maybe the most useful implementation."),(0,i.kt)("h3",{id:"memorystoragedriver"},"MemoryStorageDriver"),(0,i.kt)("p",null,"This will use return Empty Data object with 0 size. "),(0,i.kt)("h2",{id:"sample-app"},"Sample app"),(0,i.kt)("p",null,"The SDK comes with a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/metaplex-android/tree/main/sample"},"sample app"),". Please clone it run it on your phone and take what is can help you. "))}p.isMDXComponent=!0}}]);