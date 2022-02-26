---
sidebar_label: "CLI"
sidebar_position: 4
---

# AuctionHouse CLI

### Prerequisites

- `ts-node`
- `git`
- `yarn`

### Setup

In order to get started with the AuctionHouse CLI please follow these steps.

```
git clone https://github.com/metaplex-foundation/metaplex.git
cd metaplex
git checkout v1.1.1
cd js && yarn install && yarn bootstrap
cd packages/cli
```

Once you have cloned the repo and installed packages, make sure you have a local `Keypair` setup. If you need help with that see these guides.

- https://docs.solana.com/cli/install-solana-cli-tools
- https://docs.solana.com/wallet-guide/file-system-wallet

### Running Commands

To run commands you will use
`ts-node src/ts-node src/auction-house-cli.ts`

#### _Help_

```
ts-node src/ts-node src/auction-house-cli.ts
Usage: auction-house-cli [options] [command]

Options:
-V, --version                     output the version number
-h, --help                        display help for command

Commands:
show_escrow [options]
withdraw [options]
sell [options]
withdraw_from_treasury [options]
withdraw_from_fees [options]
cancel [options]
execute_sale [options]
buy [options]
deposit [options]
show [options]
create_auction_house [options]
update_auction_house [options]
help [command]                    display help for command

```

#### _Create_

Creates an Auction House

See the command help with

```
ts-node src/auction-house-cli.ts help create_auction_house
```

Find your current Keypair, lets say it lives at `~/mywallet.key` or on windows `C:\Users\windowsuser\mywallet.key`. To create an Auction house you will run.

```
ts-node src/auction-house-cli.ts create_auction_house --keypair ~/mywallet.key -e devnet -sfbp 1000 -ccsp false -rso false
```

In this case we dont need to require signoff because we want to make a fully decentralized auctionhouse. Since we did not specify `-tm, --treasury-mint <string>` The currency for payment will be SOL.
Also the options below will default to being set as the public key of `~/mywallet.key`

```
-twd, --treasury-withdrawal-destination <string>
-fwd, --fee-withdrawal-destination <string>
```

IF all goes well you will see

```
wallet public key: Gsv13oph2i6nkJvNkVfuzkcbHWchz6viUtEg2vsxQMtM
No treasury withdrawal dest detected, using keypair
No fee withdrawal dest detected, using keypair
No treasury mint detected, using SOL.
Created auction house HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS <--- Your auction house key will be different
```

Save this key `HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS` since it is the public key of the solana account that holds your AuctionHouse. In all subsequent commands you will pass this key with the `-ah` option.

### _Show_

Prints the balances of the fee and treasury wallets configured for the auction house and its current settings options.

See the command help with

```
ts-node src/auction-house-cli.ts help show
```

Notice I switched `--keypair` for `-k` this is shorthand but works just the same.

```
ts-node src/auction-house-cli.ts show -k ~/mywallet.key -ah HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS
```

The output will differ but similar to the following.

```
No treasury mint detected, using SOL.
-----
Auction House: HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS
Mint: So11111111111111111111111111111111111111112
Authority: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3
Creator: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3
Fee Payer Acct: AcWpR41NPMq73FZUspCiXxoLrJnW7zytgHKY5xqtETkU
Treasury Acct: HFW5CY73qN3XK3qEP7ZFxbpBBkQtipPfPQzaDj3mbbY1
Fee Payer Withdrawal Acct: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3
Treasury Withdrawal Acct: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3
Fee Payer Bal: 0
Treasury Bal: 0
Seller Fee Basis Points: 1000
Requires Sign Off: false
Can Change Sale Price: false
AH Bump: 255
AH Fee Bump: 252
AH Treasury Bump: 254
```

#### Fee Account

In the above Show command you see a Fee Payer account.
This account can be used to pay the fees on chain for sales execution, transfers and account creation. For this excercise we will teach you how to fund that account by aridropping some SOL on devnet. Your Auction House fee account is used only when the Auction House authority is signing the transaction. This is usually only in the case of `Requires Sign Off`

```
$ solana airdrop 2 AcWpR41NPMq73FZUspCiXxoLrJnW7zytgHKY5xqtETkU
Requesting airdrop of 2 SOL
Signature: 4qYFoD8GN6TZLDjLsqyyt6mhjYEjwKF36LJCDLtL88nTD3y3bFzXmVFHP6Nczf5Dn4GnmBJYtbqV9tN2WbsYynpX
2 SOL
```

:::caution

The `solana airdrop` command is sometimes unreliable. If the command doesn't work, you can use the airdrop tool at https://solfaucet.com.

:::

### _Sell_

Place and NFT UP for sale.

See the command help with

```
ts-node src/auction-house-cli.ts help sell
```

Place an NFT for sale by its mint address with the auction house for 1 SOL.

```
ts-node src/auction-house-cli.ts sell \
  -k ~/mywallet.key \
  -ah HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS \
  --buy-price 1 \
  --mint F7fejo7cT1fRyJxj1W2aWy3aeJz8iqLU9YvbBAzwJGh2 \
  --token-size 1
```

Output

```
wallet public key: CCJC2s8FDGAs8GqmngE9gviusEuNnkdUwchcYMZ8ZmHB
wallet public key: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3
Set 1 F7fejo7cT1fRyJxj1W2aWy3aeJz8iqLU9YvbBAzwJGh2 for sale for 1 from your account with Auction House Ee53kiwLVw5XG98gSLNHoQRi4J22XEhz3zsKYY2ttsb7
```

#### Require Signoff

If the auction house is setup to require sign off its wallet, as well as the seller are provided to the command.
Do this using the `-ak` option.

See the command help with

```
ts-node src/auction-house-cli.ts help sell
```

In a production scenerio where the keypair for the auction house is stored on a sever managed by the organization hosting the auction house the transaction should be partial signed by the seller from the client then passed to the server for signing by the auction house before submitting to Solana.

### _Buy_

Place an offer on an NFT by its mint address at some price in SOL when using native SOL as the mint.

See the command help with

```
ts-node src/auction-house-cli.ts help buy
```

The buy command is an offer on the NFT and will not result in a sale until the `execute_sale` action is triggered. This command offers 2 SOL for the NFT.

```
ts-node src/auction-house-cli.ts buy \
  -k ~/mywallet.key \
  -ah HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS \
  --buy-price 2 \
  --token-size 1 \
  --mint 7v8kcqCHLih31bp2xwMojGWTMdrcFfzZsYXNbiLiRYgE
wallet public key: 3DikCrEsfAVHv9rXENg2Hdmc16L71EjveQEF4NbSfRak
wallet public key: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3
Made offer for  2
```

### _Execute Sale_

Sell an NFT to a buyer at the price set by the seller.

::: info
If your AuctionHouse does not require signoff then this action is `permissionless` meaning anyone can call this instruction with two matching (price must match) orders (bid/sell). This is great because you can program your UI to execute the sale once an order matches on the client side or have a backend process or bot finish the process.

```
$ ts-node src/auction-house-cli.ts execute_sale
  -k ~/mywallet.key \
  -ah HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS \
  --buy-price 2 \
  --mint DCqt9QQ3ot3qv53EhWrYAWFuh4XgSvFJvLRjgsDnhLTp \
  --buyer-wallet 3DikCrEsfAVHv9rXENg2Hdmc16L71EjveQEF4NbSfRak \
  --seller-wallet CCJC2s8FDGAs8GqmngE9gviusEuNnkdUwchcYMZ8ZmHB \
  --token-size 1
wallet public key: CCJC2s8FDGAs8GqmngE9gviusEuNnkdUwchcYMZ8ZmHB
wallet public key: DCDcpZaJUghstQNMHy9VAPnwQe1cGsHq7fbeqkti4kM3
Accepted 1 DCqt9QQ3ot3qv53EhWrYAWFuh4XgSvFJvLRjgsDnhLTp sale from wallet CCJC2s8FDGAs8GqmngE9gviusEuNnkdUwchcYMZ8ZmHB to 3DikCrEsfAVHv9rXENg2Hdmc16L71EjveQEF4NbSfRak for 2 from your account with Auction House HsKwc8dQtm8KLxshw67dwsNePkH6wMXo5Lwn1FuKjVYVS
```

### Other Actions

Other actions are documented in the CLI and can be found using the `help` and `<command> help` subcommand:

- _Cancel_ - Potential buyer revokes their offer.

- _Show Escrow_ - Print out the balance of an auction house escrow account for a given wallet.

- _Withdraw_ - Transfer funds from user's buyer escrow account for the auction house to their wallet.

- _Deposit_ - Add funds to user's buyer escrow account for the auction house.

- _Withdraw from Fee_ - Transfer funds from auction house fee wallet to the auction house authority.

- _Widthraw from Treasury_ - Transfer funds from the auction house treasury wallet to the auction house authority.

- _Update Auction House_ - Update any of the auction house settings including it's authority or saller fee.
