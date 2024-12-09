const VAULT_URL = "https://app.beefy.com/vault/camelot"
const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange"

const baseStrategy = (symbol, { imageOverride, urlOverride }) => ({
  image: imageOverride || `${BASE_URL}/assets/beefy/cowcentrated.png`,
  url: urlOverride || `${VAULT_URL}-${symbol.toLowerCase().replace(/^eth-/, 'weth-').replace(/-eth$/, '-weth')}`,
})

const strategyTemplates = {
  COWCENTRATED: (symbol, overrides) => ({
    ...baseStrategy(symbol, overrides),
    strategy: "Cowcentrated",
    fullname: `Beefy Cowcentrated ${symbol}`,
    description: "CLM maximizes utilization by creating both a 50/50 position with as many tokens as it can and an alternative single-side position with the remaining tokens, meaning no tokens are sold. The transaction costs for managing the position are socialized among all the product's users to maximize earnings."
  }),
}

const createStrategy = ({strategy, symbol, vaultAddress, poolAddress}, overrides={}) => ({
  symbol,
  vaultAddress,
  poolAddress,
  ...strategyTemplates[strategy](symbol, overrides)
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
      proxyHelperAddress: "0x5E26bA756e1E39429C8B2620263c20295535897A",
      helperAddress: "0x8aA8a6f0138880E687289941dA0738548F6184fE",
      strategies: [
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ETH-USDC",
          vaultAddress: "0xDa3E652A86B3FD320512cadd87D6504fa18aEC65",
          strategyAddress: "0x3C63B4357b2b8e1dd4F014100d8B9dF5C5f31f16",
          poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "USDe-USDC",
          vaultAddress: "0xC9a57BAD9AAbCC6f0c22474442985b7CF1eC6786",
          strategyAddress: "0x8226F89a8DE1Da1f39DfC945E7060d8da5eF99B1",
          poolAddress: "0xc23f308CF1bFA7efFFB592920a619F00990F8D74"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "USDC-USDT",
          vaultAddress: "0xb74d4161FA4CE44c5862053Ef7cf7fe5802fF40A",
          strategyAddress: "0x5ab4B262024Dba8eBE4362b45bF658c2577A5d0B",
          poolAddress: "0xa17aFCAb059F3C6751F5B64347b5a503C3291868"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ZRO-ETH",
          vaultAddress: "0x2a881c25E3F18093C36d2f8263469E2253bE1cA2",
          strategyAddress: "0x830e49CfdE43De5722Ca4F715D1DFc9DFA2BcE5C",
          poolAddress: "0x105ba85d9047dAF3f9FE941D8188d4b9A6900388"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "KUJI-ETH",
          vaultAddress: "0xf907c7348a03aF6732FbD2C9c8D4053DcB2C0112",
          strategyAddress: "0xF4be9B73F43235272272034BEAa2658f02e3D2A3",
          poolAddress: "0x22427D20480DE289795Ca29c3ADDdb57A568e285"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "PENDLE-ETH",
          vaultAddress: "0x6D5B6507E3AAA81c584E1ba086F50796B3F34F60",
          strategyAddress: "0xa0E19D86B9aDD283D201233C130d00Bfebe7FFAa",
          poolAddress: "0xE461f84C3fE6BCDd1162Eb0Ef4284F3bB6e4CAD3"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "GMX-ETH",
          vaultAddress: "0x3a81D849D3044d13665d383aA2bB1611C597fF64",
          strategyAddress: "0xD592bfCaf200A60044A2307CCdBa16cB9A8340Cb",
          poolAddress: "0xC99be44383BC8d82357F5A1D9ae9976EE9d75bee"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "RDNT-ETH",
          vaultAddress: "0x75acF1692b963De13Fe7018B16DE21959619ff87",
          strategyAddress: "0xC31f82969b0a8E870d18Cdb481DF81e91C83A97c",
          poolAddress: "0xD51F7383C906cfD995d7f24729F37933Ff264Fa6"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "MAGIC-ETH",
          vaultAddress: "0x3e440e83ba58125472fdA166C87577d479BFd25E",
          strategyAddress: "0xBb253d8d40E933a9aA38307d76E2d44f31b1aCD7",
          poolAddress: "0x1106dB7165A8d4a8559B441eCdEe14a5d5070DbC"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "SOL-USDC",
          vaultAddress: "0xc4BDb58F24247B51FD23B1FC225961eB3d86783C",
          strategyAddress: "0xA487f396384E84EFe9431879Ed6eeE25Fe4ad505",
          poolAddress: "0x622B5186384783BB805c12A808cCF07F41DE1Ff0"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "LINK-ETH",
          vaultAddress: "0x2Ba14a1308789322694a69C06acDFEbA824B7e2A",
          strategyAddress: "0xE9D2aB10BD4D896b4D537cd54d8f794838131370",
          poolAddress: "0xe8795cF9c2309eCfe05Df028eB0F21D5D6e3a951"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "USDT-ETH",
          vaultAddress: "0xf7ac5f7F05fB27AB4974607aa9EBcD24BBD2192a",
          strategyAddress: "0x9479d9d4BEd7eE7B6E386c9AAf8aba50f700A19e",
          poolAddress: "0x7CcCBA38E2D959fe135e79AEBB57CCb27B128358"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "weETH-ETH",
          vaultAddress: "0xEe839B08Ac1Fb711Fd4A583fB450EeD60ce52446",
          strategyAddress: "0xf249B3318E3183714EA9514A2CF173913dbD6878",
          poolAddress: "0x293DFD996d5cd72Bed712B0EEAb96DBE400c0416"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ARB-ETH",
          vaultAddress: "0x79899918e6AdA2cb5D984f444A9c188bd2B7daae",
          strategyAddress: "0xAca4378FE0E1c2bFc56eaCAA2acA7ffe3d2487B0",
          poolAddress: "0xe51635ae8136aBAc44906A8f230C2D235E9c195F"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ARB-USDC",
          vaultAddress: "0x8bc2AE3862617838357c329ccfd9eD8Fded58cfc",
          strategyAddress: "0xfa5C780103Ffe7AE4977E7e15ffb272Bb61F1002",
          poolAddress: "0xfaE2AE0a9f87FD35b5b0E24B47BAC796A7EEfEa1"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "WBTC-ETH",
          vaultAddress: "0x168285c55a871fd2219329F680EB0CA8fB8711e4",
          strategyAddress: "0x1aD37a03b3b58534Fef9c80f4Fa4018a473ba4C7",
          poolAddress: "0xd845f7D4f4DeB9Ff5bCf09D140Ef13718F6f6C71"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ezETH-ETH",
          vaultAddress: "0x663B0d9ddB6e86cB5E1F87ebCbDafb5A53a45798",
          strategyAddress: "0xb06192D63424F66Df01E52ca6ba81a90567C7588",
          poolAddress: "0xaA45265A94C93802BE9511E426933239117E658f"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "wstETH-ETH",
          vaultAddress: "0xc4AE801d239da28A9108a5E6caD9F5893Ad93CB2",
          strategyAddress: "0x82Ae0Efb77EbeEa5B20DB3e0841b868415DF65be",
          poolAddress: "0xdEb89DE4bb6ecf5BFeD581EB049308b52d9b2Da7"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "GNS-ETH",
          vaultAddress: "0xbdFf136395A96f2c09CBC3FbDf8F50FF9C42c21E",
          strategyAddress: "0x277bB9dbf8624c41032f453c1877E374EEBb4878",
          poolAddress: "0x9b6FF025AeE245D314c09F57B72f0dE6E231c3a6"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ETHFI-ETH",
          vaultAddress: "0x5D604056E2560a8515aB51a2D8e6f0620d955d36",
          strategyAddress: "0xa6c6D20dB1B12f5Bc767A31Cb75939F1CfB80e0b",
          poolAddress: "0x0f143FC50d6c71Fee95D6Ec1030e62D788507b84"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "rsETH-ETH",
          vaultAddress: "0xac8246F01197fB783Bf1A80960821835045Ec680",
          strategyAddress: "0x7E2D3da1303880d1461043d94fAE7A9860Ba7992",
          poolAddress: "0xb355ccE5CBAF411bd56e3b092F5AA10A894083ae"
        }),
        createStrategy({
          strategy: "COWCENTRATED",
          symbol: "ORDER-ETH",
          vaultAddress: "0x42cF53622B413B40cb24f78a79E0e76e587b7f33",
          strategyAddress: "0xfd9D31504f8a7FC38CA979ee04c0eCAa29d26d87",
          poolAddress: "0x256899bD2E99C6736B34caF298719Cc709925819"
        })
      ]
    }
  ]
})
