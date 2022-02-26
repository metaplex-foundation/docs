---
sidebar_label: "9. Withdraw Rent"
---
# Withdraw Rent

Candy Machines use an account to store configuration and a (potentially) large list for pointers to assets to control the mint. To have this data stored on-chain, you need to pay rent in SOL - this is the cost associated to set up a Candy Machine. After a Candy Machine is fully minted, this data is useless and there is no need to continue to pay rent.

To drain the account of a Candy Machine and recover the rent SOL, you can use the `withdraw` command.

:::info

The `withdraw` command is also useful in cases where you made mistakes in the creation of the `CMv2` as it provides a way to retrieve the SOL used in the set up of the Candy Machine.

:::

:::warning

You should not withdraw the rent of a live Candy Machine, as the Candy Machine will stop working when you drain its account.

:::

## Requirements

The `withdraw` command must be executed with the keypair that created the Candy Machine and the Candy Machine ID you want to drain. Below is the argument and options for the `withdraw` command:

| argument                         | description                                               |
| -------------------------------- | --------------------------------------------------------- |
| `<candy_machine_id>`             | The Candy Machine ID you want to drain                    |

| option                           | description                                               |
| -------------------------------- | --------------------------------------------------------- |
| `-k, --keypair <PublicKey>`      | SOL wallet that created the Candy Machine                 |
| `-e, --env <string>`             | Solana cluster environment (default: `devnet`)            |
| `-d, --dry`                      | Show the withdraw amount without withdrawing the rent     |
| `-ch, --charity <PublicKey>`     | SOL wallet for donation                                   |
| `-cp, --charityPercent <number>` | Donation percentage of the total SOL drained              |
| `-r, --rpc-url <string>`         | custom RPC as the withdraw is a network-intensive command |

The `withdraw_all` command will find all Candy Machines accounts made by this keypair and attempt to drain them. Below are the options used in most cases for the `withdraw_all` command:

| option                           | description                                               |
| -------------------------------- | --------------------------------------------------------- |
| `-k, --keypair <PublicKey>`      | SOL wallet that created the Candy Machine                 |
| `-e, --env <string>`             | Solana cluster environment (default: `devnet`)            |
| `-d, --dry`                      | Show the withdraw amount without withdrawing the rent     |
| `-ch, --charity <PublicKey>`     | SOL wallet for donation                                   |
| `-cp, --charityPercent <number>` | Donation percentage of the total SOL drained              |
| `-r, --rpc-url <string>`         | custom RPC as the withdraw is a network-intensive command |


> The `withdraw_all` command drains all Candy Machine accounts made by the specified keypair. You need to make sure that you want to drain all Candy Machines before you proceed. It is **strongly advised** that you first run the command with the option `--dry` to see how much you have locked up in those accounts and to make sure you are not draining an account you need. 

You can also donate a percentage of the retrieved SOL to charity. But **BE CAREFUL**, this will actually take money out of the keypair you pass in and transfer it to the address you set as the `--charity` option.

## Execution

To start the withdraw process, execute the `withdraw` command:

```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts withdraw <candy_machine_id> \
    -e devnet \
    -k ~/.config/solana/devnet.json
```

To start the withdraw_all process, execute the `withdraw_all` command:

```bash
ts-node ~/metaplex/js/packages/cli/src/candy-machine-v2-cli.ts withdraw_all \
    -e devnet \
    -k ~/.config/solana/devnet.json
```

:::tip

The example commands are directed at devnet with the `-e devnet` option. To target your withdraw command to Mainnet Beta, replace that option with `-e mainnet-beta`.

:::

If there are Candy Machine accounts to be drained, you will see an output similar to:

```
Total Number of Candy Machine Config Accounts to drain 50.03644952 SOL locked up in configs
WARNING: This command will drain ALL of the Candy Machine config accounts that are owned by your current KeyPair, this will break your Candy Machine if its still in use.
...
HSLcb56y2wQEdaTcNoybcPJRrXuxRe3AnAXhpvJmZkMo has been withdrawn. 
...
Congratulations, 1 config accounts have been successfully drained.
Now you kinda rich, please consider supporting Open Source developers.
```