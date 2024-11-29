const VAULT_URL = "https://camelot.defiedge.io/s/arbitrum"
const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange"

const baseStrategy = (vaultAddress, { imageOverride, urlOverride }) => ({
  image: imageOverride || `${BASE_URL}/assets/defiedge/strategy-alo.svg`,
  url: urlOverride || `${VAULT_URL}/${vaultAddress}`,
})

const strategyTemplates = {
  ALO: (symbol, vaultAddress, overrides) => ({
    ...baseStrategy(vaultAddress, overrides),
    strategy: "ALO",
    fullname: `DefiEdge ${symbol}`,
    description: "Optimize your liquidity management with DeFiEdge's Automated Liquidity Optimization (ALO) solution. Designed to manage both narrow and wide ranges within a single strategy. ALO dynamically allocates liquidity in response to market volatility and fluctuations, aiming for consistent returns and reduced impermanent loss."
  }),
}

const createStrategy = ({strategy, symbol, vaultAddress, poolAddress}, overrides={}) => ({
  symbol,
  vaultAddress,
  poolAddress,
  ...strategyTemplates[strategy](symbol, vaultAddress, overrides)
})

module.exports = defiEdge = () => ({
  name: "DefiEdge",
  id: "defiedge",
  logo: `${BASE_URL}/assets/defiedge/logo.png`,
  logoSm: `${BASE_URL}/assets/defiedge/logo-sm.svg`,
  chains: [
    {
      chainId: 42161,
      api: "https://camelot-api.defiedge.io/arbitrum/details",
      proxyHelperAddress: "0xc4eb9fff53581130e65E3B60b31295C52509C11F",
      helperAddress: "0xc4eb9fff53581130e65E3B60b31295C52509C11F",
      strategies: [
        createStrategy({
          strategy: "ALO",
          symbol: "ARB-ETH",
          vaultAddress: "0x402FDFc475A6bEF3326dd074c3C0FeDb4f0ad0F1",
          poolAddress: "0xe51635ae8136aBAc44906A8f230C2D235E9c195F"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "GMX-ETH",
          vaultAddress: "0xb3e8C7ADF55ad36727DB62f1c881367D35A3153E",
          poolAddress: "0xC99be44383BC8d82357F5A1D9ae9976EE9d75bee"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "ARB-USDC",
          vaultAddress: "0x7Eb0747a2F4b4db80138729B462533787Bcaea2E",
          poolAddress: "0xfaE2AE0a9f87FD35b5b0E24B47BAC796A7EEfEa1"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "ETH-USDC",
          vaultAddress: "0x9c5AbA4f5c78E638572407a677259e32df7519cD",
          poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "KUJI-ETH",
          vaultAddress: "0xCCeE66fe04B1b403fFDeaBc4f3e12e390ec99497",
          poolAddress: "0x22427D20480DE289795Ca29c3ADDdb57A568e285"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "KUJI-USDC",
          vaultAddress: "0x6F72AA5e1b42F0d091Ba6C2b9fE3E326A3DF6160",
          poolAddress: "0xD8043be1668FAc205B9747E46D0C26c1Eae2708f"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "USH-ARB",
          vaultAddress: "0xaED65b3ab0AeC2F5E3f1a98E49c112c304fd15b6",
          poolAddress: "0xc805Ce3F48Ba9565DC402423004fb95226A8Eaca"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "PENDLE-ETH",
          vaultAddress: "0x29885581D40838d6b13a3BF008c9c652a883E8a3",
          poolAddress: "0xE461f84C3fE6BCDd1162Eb0Ef4284F3bB6e4CAD3"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "Silo-wstETH",
          vaultAddress: "0xF42Ad2CF57B09025846354075E5bE567f0b26489",
          poolAddress: "0x4b78Ab70D0F862117Ba933B99741cf71C6d0E4Af"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "Bonsai-ETH",
          vaultAddress: "0x22DeaaB767be6932860df7Db4CbC12c37D01B0Fb",
          poolAddress: "0x0943627eD56A33f6839856d3a781E73664Aa2138"
        })
      ]
    }
  ]
})