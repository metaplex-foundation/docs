---
sidebar_label: "3. Update Fair Launch"
---

# Update Fair Launch

You can get info of created Fair Launch by running this command:
```
ts-node ~/metaplex-foundation/metaplex/js/packages/cli/src/fair-launch-cli.ts update_fair_launch --env devnet --keypair ~/.config/solana/devnet.json --uuid "devnet" --fee 0.1 --price-range-start 0.1 --price-range-end 0.5 --phase-one-start-date "16 Dec 2021 11:30:00 UTC" --phase-one-end-date "16 Dec 2021 12:00:00 UTC" --phase-two-end-date "16 Dec 2021 12:30:00 UTC" --number-of-tokens 11 --tick-size 0.1 --lottery-duration 80000
```

expected output: 
```
Updated fair launch Done: FPnv9xr4r7vMNNBgvLVzLsvmQFYh1YmhuRWRGdRFecmb
```


