# Protocol Fees

The Metaplex Foundation currently charges the following protocol fees:

| Instruction       | Program         | Typical Payer   | Amount (SOL) | Notes |
|-------------------|-----------------|---------|--------------|---------|
| Create            | Token Metadata  | Collector  | 0.01         | The minter for most NFTs created on Solana are the individual collectors minting from new drops. Creators that mint many NFTs may consider using compression for radically lower mint costs. |
| Update            | Token Metadata  | Creator | 0.002*       | This fee applies only to the update instructions that are NOT called during the initial mint of an NFT.|
| Verify            | Token Metadata  | Creator | 0.001*       ||
| Freeze delegate   | Token Metadata  | Collector | 0.001*       | This is NOT the spl-token freeze and applies only to NonFungible tokens (regular NFTs). This fee is paid by the person granting the authority to freeze their NFT, e.g. for staking |
| Thaw delegate     | Token Metadata  | Collector | 0.001*       | This is NOT the spl-token freeze and applies only to NonFungible tokens (regular NFTs). This fee is paid by the person granting the authority to thaw their NFT, e.g. for staking |
| Combine           | Fusion (Trifle) | Collector | 0.002        ||
| Split             | Fusion (Trifle) | Collector | 0.002        ||
| Edit constraint   | Fusion (Trifle) | Creator | 0.01         ||

*These fees are currently under review and may not be the final amounts at launch.

## FAQs

### Will the fee amounts change over time?

We are constantly monitoring community feedback related to the fees and may change the fee amounts over time. Our goal is for fees to be minimally disruptive and promote the growth and usage of the protocol.

### How much will it cost me, as a creator, in Token Metadata fees to launch a 10k NFT collection through Candy Machine?

- Standard 10k drop: Create: 0 SOL, fees are spread amongst the collectors
- [Optional] If using CMv3's reveal feature:
  - Freeze: 0 SOL, fees are spread amongst the collectors
  - Reveal: Update 20* SOL
  - Thaw: 10* SOL

### Do the freeze and thaw fees impact pNFT transfers?

No.


