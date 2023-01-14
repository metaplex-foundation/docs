---
sidebar_label: "How to set up a Minting UI"
---

# A Front End Minting Experience

:::warning
This guide is for Candy Machine v2. If you create a Candy Machine v3 follow [the v3 guide](/programs/candy-machine/how-to-guides/my-first-candy-machine-part2) instead!
:::

This guide assumes you have already uploaded and deployed your Candy Machine. 
If you haven't yet done this, check out [Sugar CLI](/developer-tools/sugar/) to get started!


While the Candy Machine is ready to mint after being deployed, in most cases you will want to provide a front end experience to allow your
community the chance to mint, too.

You can use the Candy Machine UI, which is in
the [metaplex-foundation/candy-machine-ui](https://github.com/metaplex-foundation/candy-machine-ui) repository.

To download, run

```bash
git clone https://github.com/metaplex-foundation/candy-machine-ui ~/candy-machine-ui/
```

## Setting up

Open the file `.env.example` located at the root of the new folder `~/candy-machine-ui` and modify the following:

- Set the value of `REACT_APP_CANDY_MACHINE_ID` to match the `ID` of your Candy Machine. The `ID` was in the output of
  the `sugar deploy` command and can also be found by running `sugar show` in the same directory that you made your Candy Machine in.

- Specify the intended network you wish to use. In this example we are using the `devnet`:
    ```bash
    REACT_APP_CANDY_MACHINE_ID=<YOUR CANDY MACHINE PROGRAM ID>

    REACT_APP_SOLANA_NETWORK=devnet
    REACT_APP_SOLANA_RPC_HOST=https://metaplex.devnet.rpcpool.com/
    ```
- Once your `REACT_APP_CANDY_MACHINE_ID` has been updated. Rename `.env.example` to `.env`

:::warning

The public RPC endpoints (`https://api.mainnet-beta.solana.com` and `https://api.devnet.solana.com`) are not suitable
for Candy Machine mints and may cause significant issues to your minting site. We **strongly** recommend that you use a
custom RPC endpoint for your mint. You can find more information about the custom RPC solutions in the RPC section of
our [community docs](/resources/rpc-providers).

:::

After these changes are made, run the command `yarn install && yarn start` inside the
folder `~/metaplex/js/packages/candy-machine-ui`. This will start a local server with a front end experience. From here,
you should customize the mint page and deploy it in your host service.

:::warning

We **strongly** recommend that you keep the standard implementation for the mint button functionality when using
captcha (`gatekeeper`) settings. This will guarantee that the captcha tokens are issued at the correct time (e.g., after
the mint begins). The `CMv2` is designed to reject captcha tokens that are created before the mint is live to avoid bots
pre-solving captchas - your transaction will fail if the token is created at the wrong time.

:::

## User Interface

The UI supports all different configurations of your Candy Machine v2, including whitelist (presale + discount) and end
settings&mdash;e.g., it automatically adapts the UI components depending on whether the whitelist token is detected or
not, discount for whitelist users is set and displays a countdown to the end of mint when end settings `"date"=true` is
used.

### Default Mint

Before `goLiveDate` is reached:

![Mint Countdown](/assets/candy-machine-ui/Mint-1.png#radius#shadow)

When mint is live:

![Mint Live](/assets/candy-machine-ui/Mint-2.png#radius#shadow)

### Whitelist Mint

Whitelist token not detected, mint is not active before `goLiveDate`:

![Whitelist + No Token](/assets/candy-machine-ui/Whitelist-1.png#radius#shadow)

Whitelist token detected and whitelist settings set to presale and discount price:

![Whitelist Presale + Discount](/assets/candy-machine-ui/Whitelist-2.png#radius#shadow)

Whitelist only mint:

![Whitelist Only](/assets/candy-machine-ui/Whitelist-3.png#radius#shadow)

Whitelist + presale and `goLiveDate` set to `null`:

![Whitelist + No Token](/assets/candy-machine-ui/Whitelist-4.png#radius#shadow)

### End Settings Mint

Countdown to the end of the mint:

![End Settings](/assets/candy-machine-ui/EndSettings-1.png#radius#shadow)

End settings `date` reached, mint stopped:

![End Settings Complete](/assets/candy-machine-ui/EndSettings-2.png#radius#shadow)

