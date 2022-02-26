---
sidebar_label: "8. Update the Candy Machine"
---
# Update the Candy Machine

**Most** configuration settings can be updated in a `CMv2` with a single command, with the exception of:

- `number` of items in the Candy Machine can only be updated when `hiddenSettings` are being used.

- switching to use `hiddenSettings` is only possible if the `number` of items is equal to `0`. After the switch, you will be able to update the `number` of items.

In case you require to change the `number` of items after creating a `CMv2` without `hiddenSettings`, you can withdraw rent of your current `CMv2` and then create a new one. 

:::warning

You need to be careful when updating a live Candy Machine, since setting a wrong value will immediately affect its functionality.

:::

## Update Settings

You will need to prepare a config file with the updated setting values. For example, if we want to change the mint price from the original value of `1` to `0.5` SOL and keep all other values unchanged, we would modify our `config.json` file to:

```json
{
    "price": 0.5,
    "number": 10,
    "gatekeeper": null,
    "solTreasuryAccount": "<YOUR WALLET ADDRESS>",
    "splTokenAccount": null,
    "splToken": null,
    "goLiveDate": "25 Dec 2021 00:00:00 GMT",
    "endSettings": null,
    "whitelistMintSettings": null,
    "hiddenSettings": null,
    "storage": "arweave",
    "ipfsInfuraProjectId": null,
    "ipfsInfuraSecret": null,
    "awsS3Bucket": null,
    "noRetainAuthority": false,
    "noMutable": false
}
```

With the updated config file, we need to run the `update_candy_machine` command:

```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts update_candy_machine \
    -e devnet \
    -k ~/.config/solana/devnet.json \
    -cp config.json \
    -c example
```

If successful, the command will output the message with the update transaction confirmation:

```
update_candy_machine finished 2zT344ZjS5FSJFsZRYE7Yu7Fg9sBtDQESSzPv1kNGezP7Mx8vDbf8geDQGvC3iMdbfo2GWCdPrZbsq58ZwmQ8136
```

## Update Authority

You can also update the authority of the Candy Machine, which is equivalent to giving away the control of the Candy Machine.

```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts update_candy_machine \
    -e devnet \
    -k ~/.config/solana/devnet.json \
    -cp config.json \
    -c example \
    --new-authority 7idYCnwadSG8quKNr2qqtt2WVTGy8xwTF5uFvAuHyY1g
```

The command above transfers the authority of the Candy Machine to the wallet `7idYCnwadSG8quKNr2qqtt2WVTGy8xwTF5uFvAuHyY1g`. After this point, only the owner of that wallet can operate the Candy Machine.

:::warning

This operation is irreversible, once you change the authority of the Candy Machine, you will lose the right to operate it.

:::

## Show Settings

To verify your updates were successful, you can run the `show` command:

```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts show \
    -e devnet \
    -k ~/.config/solana/devnet.json \
    -c example
```

This will get the candy machine settings and print them to the console.