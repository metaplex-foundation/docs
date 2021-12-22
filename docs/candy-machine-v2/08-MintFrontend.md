# Mint Frontend

While the Candy Machine is ready to mint, in most cases you will want to provide a frontend to give your community the chance to mint, too.

You can use the frontend of the [Fair Launch Protocol](./fair-launch/introduction), which is already in the Metaplex repository and downloaded when you executed the `git clone` command.

## Setting up

Open the file `.env` located in the folder `~/metaplex/js/packages/fair-launch` and modify the following:

- Set the value of `REACT_APP_CANDY_MACHINE_ID` to match the `ID` of your Candy Machine. The `ID` was in the output of the `upload` command and can also be found inside your Candy Machine cache file - this is located in the same directory that you executed the `upload` command (e.g., `.cache/devnet-example`)
- Set the correct network to use. Since in this example we are using the `devnet`, you need to uncomment lines 3-4 (and comment lines 6-7):
    ```
    REACT_APP_CANDY_MACHINE_ID=ABceMmLMwmSfL5mL1cCrpPMKGupMXUezEY3JyZ1JSd6h

    REACT_APP_SOLANA_NETWORK=devnet
    REACT_APP_SOLANA_RPC_HOST=https://api.devnet.solana.com

    #REACT_APP_SOLANA_NETWORK=mainnet-beta
    #REACT_APP_SOLANA_RPC_HOST=https://trashpandas.rpcpool.com
    ```

After these changes are made, run the commands `yearn install` and `yearn start` inside the folder `~/metaplex/js/packages/fair-launch`. This will start a local server with a mint front end.  From here, you should customise the mint page and deploy it your host service. 