const VAULT_URL = "https://app.jonesdao.io/smart-lp/42161"
const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange"

const baseStrategy = (poolAddress, { imageOverride, urlOverride }) => ({
  image: imageOverride || `${BASE_URL}/assets/jones/strategy-smartlp.png`,
  url: urlOverride || `${VAULT_URL}/${poolAddress}`,
})

const strategyTemplates = {
  SLPBEAR: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Bear",
    fullname: `Jones SLP Bear ${symbol}`,
    description: "This strategy concentrates liquidity in a way that favors downwards volatility. Users of the bear strategy concentrate more liquidity towards the secondary token in a pair, allowing them to earn more yield in downward volatility periods"
  }),
  SLPBULL: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Bull",
    fullname: `Jones SLP Bull ${symbol}`,
    description: "This strategy concentrates liquidity in a way that favors upwards volatility. Users of the bull strategy concentrate more liquidity towards the primary token in a pair, allowing them to experience most of the price appreciation & earn more yield in upward volatility periods"
  }),
  SLPNARROW: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Narrow",
    fullname: `Jones SLP Narrow ${symbol}`,
    description: "This strategy concentrates liquidity in a narrow range with no directional bias. The result is an increased yield, but an increase in potential rebalances, which can escalate impermanent loss during volatile periods"
  }),
  SLPWIDE: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Wide",
    fullname: `Jones SLP Wide ${symbol}`,
    description: "This strategy concentrates liquidity in a wide range with no directional bias. The result is a relatively lower yield, but a reduction in potential rebalances, which can mitigate impermanent loss during volatile periods"
  })
}

const createStrategy = ({strategy, symbol, vaultAddress, poolAddress}, overrides={}) => ({
  symbol,
  vaultAddress, // use lpManager address here
  poolAddress,
  ...strategyTemplates[strategy](symbol, poolAddress, overrides)
})

module.exports = jones = () => ({
  name: "Jones",
  id: "jones",
  logo: `${BASE_URL}/assets/jones/logo.png`,
  logoSm: `${BASE_URL}/assets/jones/logo-sm.svg`,
  chains: [{
    chainId: 42161,
    api: "https://app.jonesdao.io/api/smart-lp/pools?dex=camelot",
    proxyHelperAddress: "0x9220D07c1e8b5C170FA6011DB8a729E9898b6245",
    viewerAddress: "0xcd0505BdC1Afd7F859B00CbE9EA3Dc4D79667955",
    strategies: [
      createStrategy({
        strategy: "SLPBEAR",
        symbol: "ETH-USDC",
        vaultAddress: "0x840Dd18aC8510f43Fd0B52EDc73D74d012cDc174",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "SLPBULL",
        symbol: "ETH-USDC",
        vaultAddress: "0xAC181bC9e6217dA5753a426bE7aB90c062A78A7f",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "SLPNARROW",
        symbol: "ETH-USDC",
        vaultAddress: "0x969D0296Ea7E06AbDA2E7B95CD40718484eCe450",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "SLPWIDE",
        symbol: "ETH-USDC",
        vaultAddress: "0x94C36a1b7d7736fC14F00d008a56E1B589d55f2f",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
    ]
  }]
})
