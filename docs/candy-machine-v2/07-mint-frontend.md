---
sidebar_label: "7. Minting Website"
---
# A Front End Experience for Candy Machine v2

While the Candy Machine is ready to mint, in most cases you will want to provide a front end experience to allow your community the chance to mint, too.

You can use the Candy Machine v2 front end experience, which is already in the Metaplex repository and downloaded when you executed the `git clone` command.

## Setting up

Open the file `.env.example` located in the folder `~/metaplex/js/packages/candy-machine-ui` and modify the following:

- Set the value of `REACT_APP_CANDY_MACHINE_ID` to match the `ID` of your Candy Machine. The `ID` was in the output of the `upload` command and can also be found inside your Candy Machine cache file - this is located in the same directory that you executed the `upload` command (e.g., `.cache/devnet-example`)
- Specify the intended network you wish to use. In this example we are using the `devnet`:
    ```bash
    REACT_APP_CANDY_MACHINE_ID=<YOUR CANDY MACHINE PROGRAM ID>

    REACT_APP_SOLANA_NETWORK=devnet
    REACT_APP_SOLANA_RPC_HOST=https://api.devnet.solana.com
    ```
- Once your `REACT_APP_CANDY_MACHINE_ID` has been updated. Rename `.env.example` to `.env`

After these changes are made, run the command `yarn install && yarn start` inside the folder `~/metaplex/js/packages/candy-machine-ui`. This will start a local server with a front end experience.  From here, you should customize the mint page and deploy it in your host service. 