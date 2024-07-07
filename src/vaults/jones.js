const VAULT_URL = "https://app.jonesdao.io/labs"
const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange"

const baseStrategy = (address, { abiOverride, imageOverride, urlOverride }) => ({
  abi: abiOverride || `${BASE_URL}/abi/defiedge/defiedgevault.json`,
  image: imageOverride || `${BASE_URL}/assets/jones/strategy-smartlp.svg`,
  url: urlOverride || `${VAULT_URL}/${address}`,
})

const strategyTemplates = {
  SMARTLP: (symbol, address, overrides) => ({
    ...baseStrategy(address, overrides),
    strategy: "Smart LP",
    fullname: `Jones Smart LP ${symbol}`,
    description: "Smart LP automatically compounds & rebalances V3-style LP positions. These strategies aim to find the right balance between maximized yield and keeping the pair in the chosen range. As such, rebalances range accordingly to parameters such as time & volatility."
  })
}

const createStrategy = ({strategy, symbol, address, poolAddress}, overrides={}) => ({
  symbol,
  address,
  poolAddress,
  ...strategyTemplates[strategy](symbol, address, overrides)
})

module.exports = jones = () => ({
  name: "Jones",
  logo: `${BASE_URL}/assets/jones/logo.png`,
  logoSm: `${BASE_URL}/assets/jones/logo-sm.svg`,
  chains: [{
    chainId: 42161,
    api: "https://camelot-api.defiedge.io/arbitrum/details",
    depositProxy: "0xc4eb9fff53581130e65E3B60b31295C52509C11F",
    depositProxyAbi: `${BASE_URL}/abi/defiedge/defiedgeproxyhelper.json`,
    strategies: [
      createStrategy({
        strategy: "SMARTLP",
        symbol: "ETH-USDC",
        address: "0xDB1EC4538569aa6600Ea86Dbda14AF187AD9942E",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "SMARTLP",
        symbol: "GRAIL-USDC.e",
        address: "0x8a7423F47D98bc122100C55abbB1E4107E9876Af",
        poolAddress: "0x8cc8093218bCaC8B1896A1EED4D925F6F6aB289F"
      }),
      createStrategy({
        strategy: "SMARTLP",
        symbol: "ETH-ARB",
        address: "0xa6Da7d01D33a05770461bB416b968C37928d97f4",
        poolAddress: "0xe51635ae8136aBAc44906A8f230C2D235E9c195F"
      })
    ]
  }]
})