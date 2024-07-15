# Camelot DEX - Whitelisted ALM strategies

This GitHub repo contains the active v3 vaults list on Camelot.

## Registering an ALM and adding strategies

To add your vaults to an existing integration on Camelot frontend, you should create your entry and submit a PR with it. 

**1. Fork this repo**

**2. Add your protocol in the relevant "protocol".js file in src/vaults/.** 

Create the file if it doesn't exist, and add the corresponding entry in src/buildList.js

**3. (Optional) Add your ABI files in src/abi/your_protocol_name/.**

*The URI ABI paths in your_protocol_name.json file should start with BASE_URL (cf example-alm.json)*

**4. (Optional) Add your assets in src/assets/your_protocol_name/.**

*The URI asset paths in your_protocol_name.json file should start with BASE_URL (cf example-alm.json)*

**5. Provide the following required information for your protocol.**

- name (string): must be unique
- logo (string): url, large format img, should have the image and the name of the protocol
- logoSm (string): url, small format img, will be used to identify your pairs, svg preferred
- chains (array): list of your supported chains

**6. Provide the following required information for your supported chains.**
- chainId (integer)
- api (string): url, your API endpoint, should be implemented on Camelot's app beforehand
- depositProxy (string): contract address, spNFT proxy used by Camelot for deposits
- depositProxyAbi (string): url, ABI for the deposit proxy
- strategies (array): list of your strategies

**7. Provide the following optional links for each of your strategies.**

Follow the composition approach as demonstrated in each protocol file for adding strategies.

Each strategy is composed via `createStrategy`. The first argument should be an object containing `strategy`, `symbol`, `address` & `poolAddress`. The second argument should be an object containing OPTIONAL override properties for the given strategy- `imageOverride`, `urlOverride`, `abiOverride`.

Use override values if the default computed values for `image`, `url` or `abi` will be incorrect. These values can be computed differently based on the protocol, for example, Gamma uses `symbol` inside the vault URL but sometimes it's in the opposite order of `symbol`, breaking the computed value.

The `strategy` should directly map to a strategy key under `strategyTemplates`, which contains all the strategy specific information.

`baseStrategy` contains the information that should be common across all strategies.

For every pair involving ETH or a stable coin, the `symbol` should always start with the other token. `GRAIL-ETH` or `GRAIL-USDC`

Ultimately, each strategy will contain:
- symbol (string): strategy symbol
- strategy (string): strategy short name
- fullname (string): strategy full name
- address (string): contract address of the vault
- abi (string): url, link to your abi file
- image (string): url, link to your strategy illustration
- url (string): url, link to the strategy page on your app
- description (string)

### Disclaimer

Note filing an issue does not guarantee addition to the strategies list, 
and is reserved to already approved and integrated partners only.
