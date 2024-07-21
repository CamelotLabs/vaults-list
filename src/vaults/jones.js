const VAULT_URL = "https://app.jonesdao.io/smart-lp/42161"
const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange"

const baseStrategy = (poolAddress, { abiOverride, imageOverride, urlOverride }) => ({
  abi: abiOverride || `${BASE_URL}/abi/jones/jonesstrategyrouter.json`,
  image: imageOverride || `${BASE_URL}/assets/jones/strategy-smartlp.png`,
  url: urlOverride || `${VAULT_URL}/${poolAddress}`,
})

const strategyTemplates = {
  SLPBEAR: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Bear",
    fullname: `Jones SLP Bear ${symbol}`,
    description: "A strategy whose liquidity concentration helps protect against downwards volatility"
  }),
  SLPBULL: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Bull",
    fullname: `Jones SLP Bull ${symbol}`,
    description: "A strategy whose liquidity concentration favors upwards volatility"
  }),
  SLPNARROW: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Narrow",
    fullname: `Jones SLP Narrow ${symbol}`,
    description: "A strategy that can generate high yield, with a higher chance to rebalance as a tradeoff"
  }),
  SLPWIDE: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Wide",
    fullname: `Jones SLP Wide ${symbol}`,
    description: "A strategy with less risk, with a wider range, decreasing the chance of a rebalance"
  })
}

const createStrategy = ({strategy, symbol, address, poolAddress}, overrides={}) => ({
  symbol,
  address,
  poolAddress,
  ...strategyTemplates[strategy](symbol, poolAddress, overrides)
})

module.exports = jones = () => ({
  name: "Jones",
  logo: `${BASE_URL}/assets/jones/logo.png`,
  logoSm: `${BASE_URL}/assets/jones/logo-sm.svg`,
  chains: [{
    chainId: 42161,
    api: "https://app.jonesdao.io/api/smart-lp/pools?dex=camelot",
    depositProxy: "0xc4eb9fff53581130e65E3B60b31295C52509C11F",
    depositProxyAbi: `${BASE_URL}/abi/jones/jonesproxyhelper.json`,
    strategies: [
      createStrategy({
        strategy: "SLPBEAR",
        symbol: "ETH-USDC",
        address: "0xf4d6D1c0478e61E78d35d47F64059583a6045591",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "SLPBULL",
        symbol: "ETH-USDC",
        address: "0x40c185D85ef08D778ccFD6c491127169AD279Dc7",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "SLPNARROW",
        symbol: "ETH-USDC",
        address: "0x4BeB043DD2a093365cb286680fB894206844cDD2",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "SLPWIDE",
        symbol: "ETH-USDC",
        address: "0x05D6A930730e17957C65f0C3BeE7a43782e31799",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
    ]
  }]
})