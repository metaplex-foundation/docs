---
sidebar_label: "6. Mint Tokens"
---
# Mint Tokens

At this point, your Candy Machine is ready to mint tokens. Depending on your configurations, it is either restricted to whitelist users or the `goLiveDate` has not been reached yet. In all cases, the owner (authority) of the Candy Machine - i.e., the wallet that created the Candy Machine - can mint tokens.

> The only exception is when captcha is enabled. In this case, it is not possible to mint tokens from the command line. If you would like to mint tokens, update the `goLiveDate` to `null` and temporarily disable the captcha settings.

## Mint One Token

Minting one token can be done using the command `mint_one_token`:

```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts mint_one_token \
    -e devnet \
    -k ~/.config/solana/devnet.json \
    -c example
```

If successful, the output will be similar to:

```bash
wallet public key: N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw
mint_one_token finished 3R9XADK91RWESj3FZdzB2QXHchpjwcS5khdwZVoSd3petHyqt2T6MjntMxozX2meRFyaFZEsqjPxbCUjxz5eL5z9
```

You can check that the mint was successful by using the `spl-token` command to check the accounts available on your wallet:

```bash
spl-token accounts
```

If the mint was successful, you will see a new account in your wallet:

```bash
Token                                         Balance
---------------------------------------------------------------
G1zDZMHjU6bs4ibrZdeaM85dHYtno1B1xUmZ1VR7XCsQ  1
```

## Mint Multiple Tokens

You can also mint multiple tokens using the command `mint_multiple_tokens` and specifying the `number` of tokens to be minted:

```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts mint_multiple_tokens \
    -e devnet \
    -k ~/.config/solana/devnet.json \
    -c example \
    --number 2
```

If successful, the output will be similar to following output:

```
Minting 2 tokens...
wallet public key: N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw
transaction 1 complete 37e4NjN5yPWevAus1m3XyCNgRPAxanQ5YdePn732U73XPa2MsHccJamoqkUFi6AtPwU8j3CATT84qq9G7ciAfRSU
minting another token...
wallet public key: N4f6zftYsuu4yT7icsjLwh4i6pB1zvvKbseHj2NmSQw
transaction 2 complete 5emunaycm99shUXuH3Xs6vCbTe6c8X6UqGoQYJ8qkwUd2mVppvojXyz2bxuYPmLVriuoqobBRNwFkp5Q2zCRV6pu
minted 2 tokens
mint_multiple_tokens finished
```

You can follow the steps above to verify that the tokens are in your wallet.