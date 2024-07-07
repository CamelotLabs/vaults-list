const VAULT_URL = "https://app.beefy.com/vault/camelot"
const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange"

const baseStrategy = (symbol, { abiOverride, imageOverride, urlOverride }) => ({
  abi: abiOverride || `${BASE_URL}/abi/beefy/beefyvault.json`,
  image: imageOverride || `${BASE_URL}/assets/beefy/cowcentrated.png`,
  url: urlOverride || `${VAULT_URL}-${symbol.toLowerCase().replace(/^eth-/, 'weth-').replace(/-eth$/, '-weth')}`,
})

const strategyTemplates = {
  COWCENTRATED: (symbol, address, overrides) => ({
    ...baseStrategy(address, overrides),
    strategy: "Cowcentrated",
    fullname: `Beefy Cowcentrated ${symbol}`,
    description: "CLM maximizes utilization by creating both a 50/50 position with as many tokens as it can and an alternative single-side position with the remaining tokens, meaning no tokens are sold. The transaction costs for managing the position are socialized among all the product's users to maximize earnings."
  }),
}

const createStrategy = ({strategy, symbol, address, poolAddress}, overrides={}) => ({
  symbol,
  address,
  poolAddress,
  ...strategyTemplates[strategy](symbol, address, overrides)
})

module.exports = beefy = () => ({
  name: "Beefy",
  logo: `${BASE_URL}/assets/beefy/logo.svg`,
  logoSm: `${BASE_URL}/assets/beefy/logo-sm.svg`,
  chains: [
    {
      chainId: 42161,
      api: "https://api.beefy.finance/cow-vaults",
      depositProxy: "0x5E26bA756e1E39429C8B2620263c20295535897A",
      depositProxyAbi: `${BASE_URL}/abi/beefy/beefyproxyhelper.json`,
      strategies: [
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ETH-USDC",
          address: "0xDa3E652A86B3FD320512cadd87D6504fa18aEC65",
          poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
        })
      ]
    }
  ]
})
