const VAULT_URL = "https://app.jonesdao.io/labs"
const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange"

const baseStrategy = (vaultAddress, { imageOverride, urlOverride }) => ({
  image: imageOverride || `${BASE_URL}/assets/jones/legacy/strategy-smartlp.svg`,
  url: urlOverride || `${VAULT_URL}/${vaultAddress}`,
})

const strategyTemplates = {
  SMARTLP: (symbol, vaultAddress, overrides) => ({
    ...baseStrategy(vaultAddress, overrides),
    strategy: "Smart LP Legacy",
    fullname: `Jones Smart LP Legacy ${symbol}`,
    description: "Smart LP Legacy automatically compounds & rebalances V3-style LP positions. These strategies aim to find the right balance between maximized yield and keeping the pair in the chosen range. As such, rebalances range accordingly to parameters such as time & volatility."
  })
}

const createStrategy = ({strategy, symbol, vaultAddress, poolAddress}, overrides={}) => ({
  symbol,
  vaultAddress,
  poolAddress,
  ...strategyTemplates[strategy](symbol, vaultAddress, overrides)
})

module.exports = jones = () => ({
  name: "Jones (Legacy)",
  id: "joneslegacy",
  logo: `${BASE_URL}/assets/jones/legacy/logo.png`,
  logoSm: `${BASE_URL}/assets/jones/legacy/logo-sm.png`,
  chains: [{
    chainId: 42161,
    api: "https://camelot-api.defiedge.io/arbitrum/details",
    proxyHelperAddress: "0xc4eb9fff53581130e65E3B60b31295C52509C11F",
    helperAddress: "0xc4eb9fff53581130e65E3B60b31295C52509C11F",
    strategies: [
      createStrategy({
        strategy: "SMARTLP",
        symbol: "ETH-USDC",
        vaultAddress: "0xDB1EC4538569aa6600Ea86Dbda14AF187AD9942E",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "SMARTLP",
        symbol: "GRAIL-USDC.e",
        vaultAddress: "0x8a7423F47D98bc122100C55abbB1E4107E9876Af",
        poolAddress: "0x8cc8093218bCaC8B1896A1EED4D925F6F6aB289F"
      }),
      createStrategy({
        strategy: "SMARTLP",
        symbol: "ETH-ARB",
        vaultAddress: "0xa6Da7d01D33a05770461bB416b968C37928d97f4",
        poolAddress: "0xe51635ae8136aBAc44906A8f230C2D235E9c195F"
      })
    ]
  }]
})