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

const createStrategy = ({strategy, symbol, address, compounderAddress, poolAddress}, overrides={}) => ({
  symbol,
  address,
  compounderAddress,
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
    depositProxy: "0x9220D07c1e8b5C170FA6011DB8a729E9898b6245",
    depositProxyAbi: `${BASE_URL}/abi/jones/jonesproxyhelper.json`,
    viewer: "0xcd0505BdC1Afd7F859B00CbE9EA3Dc4D79667955",
    viewerAbi: `${BASE_URL}/abi/jones/viewer.json`,
    strategies: [
      createStrategy({
        strategy: "SLPBEAR",
        symbol: "ETH-USDC",
        address: "0x840Dd18aC8510f43Fd0B52EDc73D74d012cDc174",
        compounderAddress: "0x8e916c8ccE1F11705a06272086c077Be8274F23A",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "SLPBULL",
        symbol: "ETH-USDC",
        address: "0xAC181bC9e6217dA5753a426bE7aB90c062A78A7f",
        compounderAddress: "0xaC2AE4C5d3F65A923a499D3328D4078a7760Ea2F",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "SLPNARROW",
        symbol: "ETH-USDC",
        address: "0x969D0296Ea7E06AbDA2E7B95CD40718484eCe450",
        compounderAddress: "0xF1C9D085Ac5965e522cde4Ba192BA2B25Cc2760d",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "SLPWIDE",
        symbol: "ETH-USDC",
        address: "0x94C36a1b7d7736fC14F00d008a56E1B589d55f2f",
        compounderAddress: "0xDDa2577A145399bF88a27e3dEBcae39FCdc2Be0C",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
    ]
  }]
})