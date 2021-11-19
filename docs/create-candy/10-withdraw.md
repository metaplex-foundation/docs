---
sidebar_label: "10. Withdraw Funds"
---

# Withdraw Funds
Candy machines rely on a special account called the config account. This account stores the big list of pointers to assest that will be minted. 
This data is useless after the candy machine has been fully minted. You can drain this account by using the `withdraw` command.

```
Usage: candy-machine-cli withdraw [options]

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
 Its a good idea to first run this with `-d` to see how much you have locked up in those accounts and to make sure you arent draining an account you need. You can also donate a percentage of this money to charity "BE CAREFUL" this actually will take money out of the keypair you pass in and transfer it to the address you set as the `--charity` option.
