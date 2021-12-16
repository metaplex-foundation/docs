---
sidebar_label: "1. Create Fair Launch"
---

# Create Fair Launch
- `-e, --env`: Solana cluster env name.
- `-k, --keypair`: Solana wallet location.
- `-u, --uuid`: 6 character alphanumeric string (must be unique relative to your keypair)
- `-f, --fee`: The fee that every person has to pay.
- `-s, --price-range-start`: Minimum price accepted for bidding.
- `-pe, --price-range-end`: Maximum price accepted for bidding.
- `-pos, --phase-one-start-date`: Phase 1 starting date.
- `-poe, --phase-one-end-date`: Phase 1 ending date.
- `-pte, --phase-two-end-date`: Phase 2 ending date.
- `-n, --number-of-tokens`: Number of tokens to sell.
- `-ts, --tick-size`: Tick size.
- `-ld, --lottery-duration`: Duration of lottery.
- `-arbp, --anti-rug-reserve-bp`: Anti-rug treasury reserve, the percent of the treasury that will be locked to pay refunds (50% = 5000) .
- `-atc, --anti-rug-token-requirement`: Anti-rug token requirement, when the total remaining tokens is equal or lower than this number, the treasury will be unlocked and not more refunds will be issued.
- `-sd, --self-destruct-date`: Anti-rug self destruct date, if the NFTs were not provided by this date the users can start getting refunds.

You can create Fair Launch by running this command: 
```
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/fair-launch-cli.ts new_fair_launch --env devnet --keypair ~/.config/solana/devnet.json --uuid "devnet" --fee 0.1 --price-range-start 0.1 --price-range-end 0.5 --phase-one-start-date "16 Dec 2021 11:30:00 UTC" --phase-one-end-date "16 Dec 2021 12:00:00 UTC" --phase-two-end-date "16 Dec 2021 12:30:00 UTC" --number-of-tokens 11 --tick-size 0.1 --lottery-duration 80000
```

expected output: 
```
create fair launch Done: FPnv9xr4r7vMNNBgvLVzLsvmQFYh1YmhuRWRGdRFecmb
```

