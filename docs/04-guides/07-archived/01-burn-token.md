---
description: "OUTDATED: How to burn a token."
sidebar_label: "Burn Token"
---
:::warning
There is a full burn instruction now which allows to fully burn Metaplex Tokens. If you use the guide below not all Accounts will be closed and you will not get back all rent SOL!

You can find the new guide [here](../burn-nfts).
:::

# Burn Token

You can also get rid of NFTs (or any token) by using the [`spl-token burn`](https://spl.solana.com/token#burning) command available in your terminal after installing Solana. 

:::info
This does not remove the token mint acount or delete the metadata or master edition/edition accounts. It only deletes the token stored at your token account so it will not show up in your wallet anymore. 
:::

First, using the `spl-token accounts` command, list the account data in your wallet. You'll see your NFT (in this case `9w9Qe8GxkrFnSJYKfQMJug9k8ufpfzxW6o7kXTFKpXrK`) as well as it's token `Account` address.

```
spl-token accounts
Token                                         Account                                       Balance
----------------------------------------------------------------------------------------------------------
9w9Qe8GxkrFnSJYKfQMJug9k8ufpfzxW6o7kXTFKpXrK  wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN   1
```

We need the value in the `Account` column to burn the given token using the `burn` command.

```
> spl-token burn --help

spl-token-burn
Burn tokens from an account

USAGE:
    spl-token burn [FLAGS] [OPTIONS] <SOURCE_TOKEN_ACCOUNT_ADDRESS> <TOKEN_AMOUNT>

FLAGS:
        --dump-transaction-message    Display the base64 encoded binary transaction message in sign-only mode
    -h, --help                        Prints help information
        --sign-only                   Sign the transaction offline
    -V, --version                     Prints version information
    -v, --verbose                     Show additional information

OPTIONS:
        --blockhash <BLOCKHASH>                   Use the supplied blockhash
    -C, --config <PATH>
            Configuration file to use [default: /Users/aaron/.config/solana/cli/config.yml]

        --fee-payer <KEYPAIR>
            Specify the fee-payer account. This may be a keypair file, the ASK keyword
            or the pubkey of an offline signer, provided an appropriate --signer argument
            is also passed. Defaults to the client keypair.
    -u, --url <URL_OR_MONIKER>
            URL for Solana's JSON RPC or moniker (or their first letter): [mainnet-beta, testnet, devnet, localhost]
            Default from the configuration file.
        --with-memo <MEMO>                        Specify a memo string to include in the transaction.
        --mint-address <MINT_ADDRESS>
            Address of mint that token account is associated with. Required by --sign-only

        --mint-decimals <MINT_DECIMALS>
            Decimals of mint that token account is associated with. Required by --sign-only

        --multisig-signer <MULTISIG_SIGNER>...    Member signer of a multisig account
        --nonce <PUBKEY>
            Provide the nonce account to use when creating a nonced
            transaction. Nonced transactions are useful when a transaction
            requires a lengthy signing process. Learn more about nonced
            transactions at https://docs.solana.com/offline-signing/durable-nonce
        --nonce-authority <KEYPAIR>
            Provide the nonce authority keypair to use when signing a nonced transaction

        --output <FORMAT>
            Return information in specified output format [possible values: json, json-compact]

        --owner <SOURCE_TOKEN_OWNER_KEYPAIR>
            Specify the source token owner account. This may be a keypair file, the ASK keyword. Defaults to the client
            keypair.
        --signer <PUBKEY=SIGNATURE>...            Provide a public-key/signature pair for the transaction

ARGS:
    <SOURCE_TOKEN_ACCOUNT_ADDRESS>    The token account address to burn from
    <TOKEN_AMOUNT>                    Amount to burn, in tokens
```

Example

```
> spl-token burn -v wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN 1

Burn 1 tokens
  Source: wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN

Signature: 4hAbU8NcXNF9XGtfqkLKY2hqpuF2EDqWSNFrrydKeQNH74ufBcG8JLnNCuKZJ8w66wWRhxsRLKjCC6JrYkPQuqfP
```

That's it. To confirm, rerun the `spl-token accounts` command to show the Balance is now zero.

```
spl-token accounts -v
Token                                         Account                                       Balance
----------------------------------------------------------------------------------------------------------
9w9Qe8GxkrFnSJYKfQMJug9k8ufpfzxW6o7kXTFKpXrK  wZj7agA6CWN99A5GEsTsitAqfPUfGhvJgLKdXBpxHDN   0
```