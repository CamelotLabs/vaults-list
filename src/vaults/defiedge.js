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
      strategies: [
        createStrategy({
          strategy: "ALO",
          symbol: "ETH-USDC.e",
          vaultAddress: "0x0D1c3645BDc77AfE77F14D54a01e26A47bD89BF2",
          poolAddress: "0x521aa84ab3fcc4c05cABaC24Dc3682339887B126"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "ARB-USDC.e",
          vaultAddress: "0x6977eeE64dFDf8A40984A1ca809A623075A48D42",
          poolAddress: "0x4E635D35bB02576d0eAb75eF5E7EBE61C12F3C76"
        }),
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
          symbol: "GRAIL-USDC.e",
          vaultAddress: "0x5A4628Be9f5E838aa634c45Cb2Fa258FCCBaF52d",
          poolAddress: "0x8cc8093218bCaC8B1896A1EED4D925F6F6aB289F"
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
          symbol: "UMAMI-ETH",
          vaultAddress: "0xB7cFaCb1412546FB7f7d52ad12F564109Ff1b6dF",
          poolAddress: "0x684773cE156147e28c3C095D00C6BC9da2444fBC"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "DPX-ETH",
          vaultAddress: "0x6DA519D8652308D28523906e0d8079DBc0e97c06",
          poolAddress: "0x59A327d948db1810324a04D69CBe9fe9884F8F28"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "JONES-ETH",
          vaultAddress: "0xFf0f334669DE1f1448f330D31E030d686815F07D",
          poolAddress: "0x0e878029D18cD7F630823439cf389d1601d9dbD9"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "fUSDC-ARB",
          vaultAddress: "0xCcDa8ab52c5F01d34C05250FE2195c027EFF0Bd7",
          poolAddress: "0x71BAd6240E1489FdDCc345CCD8B1fBA00085dd2E"
        }),
        createStrategy({
          strategy: "ALO",
          symbol: "ETH-LODE",
          vaultAddress: "0x1E7a8DdC79a5De638a1c63E41b41B4B25f64929c",
          poolAddress: "0x8280B08Dfb38E6926ffBb0F76F39DDAb8160D120"
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