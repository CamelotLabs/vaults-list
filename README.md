# camelot-roundtable-list

This GitHub repo contains the active v3 vaults list on Camelot.

## Adding your vaults

To add your vaults to an existing integration on Camelot frontend, you should create your entry and submit a PR with it. 

**1. Fork this repo**

**2. Add your protocol in the relevant "protocol".json file in src/vaults/.**

**3. Add your ABI files in src/<protocol>/.**

**4. Provide the following required information for your vaults.**

- name (string): must be unique
- logo (string): url, large format img, should have the image and the name of the protocol
- logoSm (string): url, small format img, will be used to identify your pairs, svg preferred

- chainId (id)
- depositProxy
- description (string)
- pools (array): list of your vaults

**4. Provide the following optional links for each of your vault.**

- symbol (string): vault symbol
- strategy (string): strategy short name
- fullname (string): full name of the strategy
- address (string): contract address of the vault
- abi (string): relative path to your abi file
- image (string)
- url (string)
- description (string)

### Disclaimer

Note filing an issue does not guarantee addition to the vaults list, 
and is reserved to already approved partners only.
