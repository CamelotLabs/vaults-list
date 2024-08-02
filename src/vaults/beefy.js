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
  id: "beefy",
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
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "USDe-USDC",
          address: "0xC9a57BAD9AAbCC6f0c22474442985b7CF1eC6786",
          poolAddress: "0xc23f308CF1bFA7efFFB592920a619F00990F8D74"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "USDC-USDT",
          address: "0xb74d4161FA4CE44c5862053Ef7cf7fe5802fF40A",
          poolAddress: "0xa17aFCAb059F3C6751F5B64347b5a503C3291868"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ZRO-ETH",
          address: "0x2a881c25E3F18093C36d2f8263469E2253bE1cA2",
          poolAddress: "0x105ba85d9047dAF3f9FE941D8188d4b9A6900388"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "KUJI-ETH",
          address: "0xf907c7348a03aF6732FbD2C9c8D4053DcB2C0112",
          poolAddress: "0x22427D20480DE289795Ca29c3ADDdb57A568e285"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "PENDLE-ETH",
          address: "0x6D5B6507E3AAA81c584E1ba086F50796B3F34F60",
          poolAddress: "0xE461f84C3fE6BCDd1162Eb0Ef4284F3bB6e4CAD3"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "GMX-ETH",
          address: "0x3a81D849D3044d13665d383aA2bB1611C597fF64",
          poolAddress: "0xC99be44383BC8d82357F5A1D9ae9976EE9d75bee"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "RDNT-ETH",
          address: "0x75acF1692b963De13Fe7018B16DE21959619ff87",
          poolAddress: "0xD51F7383C906cfD995d7f24729F37933Ff264Fa6"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "MAGIC-ETH",
          address: "0x3e440e83ba58125472fdA166C87577d479BFd25E",
          poolAddress: "0x1106dB7165A8d4a8559B441eCdEe14a5d5070DbC"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "SOL-USDC",
          address: "0xc4BDb58F24247B51FD23B1FC225961eB3d86783C",
          poolAddress: "0x622B5186384783BB805c12A808cCF07F41DE1Ff0"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "LINK-ETH",
          address: "0x2Ba14a1308789322694a69C06acDFEbA824B7e2A",
          poolAddress: "0xe8795cF9c2309eCfe05DF028eB0F21D5D6e3a951"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "USDT-ETH",
          address: "0xf7ac5f7F05fB27AB4974607aa9EBcD24BBD2192a",
          poolAddress: "0x7CcCBA38E2D959fe135e79AEBB57CCb27B128358"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "weETH-ETH",
          address: "0xEe839B08Ac1Fb711Fd4A583fB450EeD60ce52446",
          poolAddress: "0x293DFD996d5cd72Bed712B0EEAb96DBE400c0416"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ARB-ETH",
          address: "0x79899918e6AdA2cb5D984f444A9c188bd2B7daae",
          poolAddress: "0xe51635ae8640cD7F1a92c01839911B90bb0"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ARB-USDC",
          address: "0x8bc2AE3862617838357c329ccfd9eD8Fded58cfc",
          poolAddress: "0xfaE2AE0a9f87FD35b5b0E24B47BAC796A7EEfEa1"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "WBTC-ETH",
          address: "0x168285c55a871fd2219329F680EB0CA8fB8711e4",
          poolAddress: "0xd845f7D4f4DeB9ff5bCf09D140Ef13718F6f6C71"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ezETH-ETH",
          address: "0x663B0d9ddB6e86cB5E1F87ebCbDafb5A53a45798",
          poolAddress: "0xaA45265A94C93802BE9511E426933239117E658f"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "wstETH-ETH",
          address: "0xc4AE801d239da28A9108a5E6caD9F5893Ad93CB2",
          poolAddress: "0xdEb89DE4bb6ecf5BFeD581EB049308b52d9b2Da7"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "GNS-ETH",
          address: "0xbdFf136395A96f2c09CBC3FbDf8F50FF9C42c21E",
          poolAddress: "0x9b6FF025AeE245D314c09F57B72f0dE6E231c3a6"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ETHFI-ETH",
          address: "0x5D604056E2560a8515aB51a2D8e6f0620d955d36",
          poolAddress: "0x0f143FC50d6c71Fee95D6Ec1030e62D788507b84"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "rsETH-ETH",
          address: "0xac8246F01197fB783Bf1A80960821835045Ec680",
          poolAddress: "0xb355ccE5CBAF411bd56e3b092F5AA10A894083ae"
        })
      ]
    }
  ]
})
