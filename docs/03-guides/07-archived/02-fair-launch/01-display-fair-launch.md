---
sidebar_label: "2. Display Fair Launch"
---

# Display created Fair Launch

You can get info of created Fair Launch by running this command:
```
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/fair-launch-cli.ts show --env devnet --keypair ~/.config/solana/devnet.json --fair-launch FPnv9xr4r7vMNNBgvLVzLsvmQFYh1YmhuRWRGdRFecmb
```

expected output: 
```
UUID devnet
Token Mint 8avTozbzUG3FWH3mUUi1vpwQhUeuEgJuLFDk7qoRp1wM
Treasury 7DwnvVT18YxPKFxdbh5g2YGUBFuLs6NJFjJhGJJHRTFa
Treasury Mint undefined
Participation Mint undefined
Authority 7crim3zBdwd3wsR65Tf3Y7q8wYWHqZwEU1ATi98XQ7e7
Bump 254
Treasury Bump 255
Token Mint Bump 252
Participation Modulo 0
Anti-Rug Settings: None
Price Range Start         100000000
Price Range End           500000000
Tick Size                 100000000
Fees                      100000000
Current Treasury Holdings 0
Treasury Snapshot At Peak undefined
Phase One Start    2021-12-16T11:30:00.000Z
Phase One End      2021-12-16T12:00:00.000Z
Phase Two End      2021-12-16T12:30:00.000Z
Lottery Period End 2021-12-17T10:43:20.000Z
Number of Tokens 11
Number of Tickets Un-Sequenced      0
Number of Tickets Sold              0
Number of Tickets Dropped           0
Number of Tickets Punched           0
Number of Tickets Dropped + Punched 0
Number of Tokens Refunded           0
Number of Tokens Preminted          0
Phase Three Started false
Current Eligible Holders 0
Current Median 0
Counts at Each Tick
100000000 : 0
200000000 : 0
300000000 : 0
400000000 : 0
500000000 : 0
```


