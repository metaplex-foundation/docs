---
sidebar_label: "5. Withdraw Funds"
---

# Withdraw Funds

:::warning

Candy Machine v1 has been deprecated. Creating a new instance of Candy Machine v1 is no longer possible. Please use [Candy Machine v2](../candy-machine-v2/introduction) instead.

:::

Candy Machine v1s rely on a special account called the config account. This account stores the big list of pointers to assets that will be minted. 
This data is useless after the `CMv1` has been fully minted. You can drain this account by using the `withdraw` command.

```
Usage: candy-machine-v1-cli withdraw [options]

Options:
  -e, --env <string>              Solana cluster env name (default: "devnet")
  -k, --keypair <path>            Solana wallet location (default: "--keypair
                                  not provided")
  -l, --log-level <string>        log level
  -c, --cache-name <string>       Cache file name (default: "temp")
  -d ,--dry                       Show Candy Machine withdraw amount without
                                  withdrawing.
  -ch, --charity <string>         Which charity? (default: "")
  -cp, --charityPercent <string>  Which percent to charity? (default: "0")
  -r, --rpc-url <string>          custom rpc url since this is a heavy command
  -h, --help                      display help for command
 ```
 
 ## Example
 To use this command, make sure you have the keypair that you made the candy machine with. Pass that keypair in as the `-k` argument. This command will find all the candy machine config accounts made by that keypair and attempt to drain them. 
 Its a good idea to first run this with `-d` to see how much you have locked up in those accounts and to make sure you arent draining an account you need. You can also donate a percentage of this money to charity. **BE CAREFUL!** This will actually take money out of the keypair you pass in and transfer it to the address you set as the `--charity` option.
 
 ### NOTE
 Your Keypair must have a little sol in it to pay the transaction fee to withdraw.
 
If it all works like it should, you should see something like:

```
Total Number of Candy Machine Config Accounts to drain 50.03644952 SOL locked up in configs
WARNING: This command will drain ALL of the Candy Machine config accounts that are owned by your current KeyPair, this will break your Candy Machine if its still in use.
...
HSLcb56y2wQEdaTcNoybcPJRrXuxRe3AnAXhpvJmZkMo has been withdrawn. 
...
Congratulations, 1 config accounts have been successfully drained.
Now you kinda rich, please consider supporting Open Source developers.
```
