const VAULT_URL = "https://app.gamma.xyz/vault/camelot/arbitrum/details"
const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange"

const baseStrategy = (abiOverride) => ({
  abi: abiOverride || `${BASE_URL}/abi/gamma/gammavault.json`,
})

const strategyTemplates = {
  WIDE: (symbol, { imageOverride, urlOverride, abiOverride }) => ({
    ...baseStrategy(abiOverride),
    strategy: "Wide",
    image: imageOverride || `${BASE_URL}/assets/gamma/strategy-wide.svg`,
    url: urlOverride || `${VAULT_URL}/${symbol.toLowerCase().replace(/^eth-/, 'weth-').replace(/-eth$/, '-weth')}-wide`,
    fullname: `Gamma Wide ${symbol}`,
    description: "The wide-range strategy will tend to earn less in fees and rewards, but may suffer less impermanent loss in a volatile environment. So while it may have less earning potential, it is likely to suffer less drawdowns."
  }),
  NARROW: (symbol, { imageOverride, urlOverride, abiOverride }) => ({
    ...baseStrategy(abiOverride),
    strategy: "Narrow",
    image: imageOverride || `${BASE_URL}/assets/gamma/strategy-narrow.svg`,
    url: urlOverride || `${VAULT_URL}/${symbol.toLowerCase().replace(/^eth-/, 'weth-').replace(/-eth$/, '-weth')}-narrow`,
    fullname: `Gamma Narrow ${symbol}`,
    description: "The narrow-range strategy will tend to earn more in fees and rewards, but may potentially incur greater losses in a highly volatile market. Narrow range strategies tend to do well when there is less volatility or when there are high fees and rewards."
  }),
  STABLE: (symbol, { imageOverride, urlOverride, abiOverride }) => ({
    ...baseStrategy(abiOverride),
    strategy: "Stable",
    image: imageOverride || `${BASE_URL}/assets/gamma/strategy-stable.svg`,
    url: urlOverride || `${VAULT_URL}/${symbol.toLowerCase().replace(/^eth-/, 'weth-').replace(/-eth$/, '-weth')}-stable`,
    fullname: `Gamma Narrow ${symbol}`,
    description: "Liquidity ranges are aimed to straddle 1 at various ranges depending on backtesting results. For more volatile stablecoin pairs, wider ranges will be used, and for blue-chip stables, narrower ranges will be used."
  }),
  PEGGED: (symbol, { imageOverride, urlOverride, abiOverride }) => ({
    ...baseStrategy(abiOverride),
    strategy: "Pegged",
    image: imageOverride || `${BASE_URL}/assets/gamma/strategy-pegged-price.svg`,
    url: urlOverride || `${VAULT_URL}/${symbol.toLowerCase().replace(/^eth-/, 'weth-').replace(/-eth$/, '-weth')}-pegged-price`,
    fullname: `Gamma Pegged Price ${symbol}`,
    description: "Liquidity is provided directly around the net asset value of a provided asset. For example, a wrapped, staked ETH derivative asset will be provided only within a fixed range around its net asset value."
  })
}

const createStrategy = ({strategy, symbol, address, poolAddress}, overrides={}) => ({
  symbol,
  address,
  poolAddress,
  ...strategyTemplates[strategy](symbol, overrides)
})

module.exports = gamma = () => ({
  name: "Gamma",
  id: "gamma",
  logo: `${BASE_URL}/assets/gamma/logo.png`,
  logoSm: `${BASE_URL}/assets/gamma/logo-sm.svg`,
  chains: [
    {
      chainId: 42161,
      api: "https://wire2.gamma.xyz/camelot/arbitrum/hypervisors/allData",
      depositProxy: "0x851b3Fb3c3178Cd3FBAa0CdaAe0175Efa15a30f1",
      depositProxyAbi: `${BASE_URL}/abi/gamma/gammauniproxyhelper.json`,
      strategies: [
        createStrategy({
          strategy: "WIDE",
          symbol: "ETH-USDC.e",
          address: "0xA07770f83A7B0fD74510AEFe3E48749e3a0924Cc",
          poolAddress: "0x521aa84ab3fcc4c05cABaC24Dc3682339887B126"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "ETH-USDC.e",
          address: "0x809acD841cDEDCCCd881a5e8D764903aD8d6D837",
          poolAddress: "0x521aa84ab3fcc4c05cABaC24Dc3682339887B126"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "ETH-USDC",
          address: "0x199d37B97341e8C0ba2CAc059884bFd63B6867d0",
          poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "ETH-USDC",
          address: "0xd7Ef5Ac7fd4AAA7994F3bc1D273eAb1d1013530E",
          poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "ETH-USDT",
          address: "0x4E3019Be228b980DfF03b5a00aC9E736312Be559",
          poolAddress: "0x7CcCBA38E2D959fe135e79AEBB57CCb27B128358"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "ETH-USDT",
          address: "0x9330e26b5Fc0b7c417C6bD901528d5c65BE5cdf2",
          poolAddress: "0x7CcCBA38E2D959fe135e79AEBB57CCb27B128358"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "ARB-USDC",
          address: "0x9bEA41C900394F83375B9198D04Be6F63Db00090",
          poolAddress: "0xfaE2AE0a9f87FD35b5b0E24B47BAC796A7EEfEa1"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "ARB-USDC",
          address: "0x29237292F15BC3615BFCc0D958C265Aa64527FB2",
          poolAddress: "0xfaE2AE0a9f87FD35b5b0E24B47BAC796A7EEfEa1"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "ARB-ETH",
          address: "0x5694abF323EA8aa0Af514f588B0Ec727816f2611",
          poolAddress: "0xe51635ae8136aBAc44906A8f230C2D235E9c195F"
        }, {
          urlOverride: `${VAULT_URL}/weth-arb-wide`
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "ARB-ETH",
          address: "0x863cb3E55526Fa2F7e6b04ecf21Ea39143AC8056",
          poolAddress: "0xe51635ae8136aBAc44906A8f230C2D235E9c195F"
        }, {
          urlOverride: `${VAULT_URL}/weth-arb-narrow`
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "GRAIL-USDC.e",
          address: "0x1768eADFda4740F7Caa741C08dD6419ac4033623",
          poolAddress: "0x8cc8093218bCaC8B1896A1EED4D925F6F6aB289F"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "GRAIL-USDC.e",
          address: "0x36260CB6DF1cfdAa7522bddF7e2f9Ae8E86BEF58",
          poolAddress: "0x8cc8093218bCaC8B1896A1EED4D925F6F6aB289F"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "PNP-ETH",
          address: "0x23E60c9D50d64488C7C8c77aF43b306fe531B39D",
          poolAddress: "0x13BC35D101B646Cf1F566f95077E67a9f5b301a3"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "PNP-ETH",
          address: "0xf9403DeECBc3eDDa78DB2995DEa1a87Ffe141760",
          poolAddress: "0x13BC35D101B646Cf1F566f95077E67a9f5b301a3"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "DMT-USDC.e",
          address: "0xBFD344C1F8664b5E1a8BE936Ce9Ae2dfD1073661",
          poolAddress: "0xe4E4aEA5150f0FA2b302b7B69427ecFb2A56133a"
        }),
        createStrategy({
          strategy: "STABLE",
          symbol: "plsARB-ARB",
          address: "0x4D519650E86bc7fCab036314a160653FBcfE05C4",
          poolAddress: "0x47A52B2beE1a0cc9A34BB9EE34C357C054112c3E"
        }),
        createStrategy({
          strategy: "PEGGED",
          symbol: "EUROs-USDC.e",
          address: "0x8C37f053662c3e02288362B0c0f0c09487082D42",
          poolAddress: "0xc9AA2fEB84F0134a38d5D1c56b1E787191327Cb0"
        }, {
          urlOverride: `${VAULT_URL}/euros-usdc-pegged-price`
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "TST-ETH",
          address: "0x2f0d2E9265cf4C43C0105da8c03aEF2aE6d92DE4",
          poolAddress: "0x43994B979F67B0c51687b3d167b8dC9c6ED304F5"
        }, {
          urlOverride: `https://app.gamma.xyz/dashboard/camelot/arbitrum`
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "FLR-USDC.e",
          address: "0x075b6c049B12490809f8D450528465F444AE448F",
          poolAddress: "0xC6E932f9107A9EB2570E39697C1bEcF2c9551770"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "WBTC-ETH",
          address: "0x56c87c3892d3917895bAe1A4cAcf6ea23a4DB84d",
          poolAddress: "0xd845f7D4f4DeB9Ff5bCf09D140Ef13718F6f6C71"
        }),
        createStrategy({
          strategy: "STABLE",
          symbol: "USDT-USDC.e",
          address: "0x61A7b3dae70D943C6f2eA9ba4FfD2fEcc6AF15E4",
          poolAddress: "0x3AB5DD69950a948c55D1FBFb7500BF92B4Bd4C48"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "DAI-USDC",
          address: "0x2766Ba1B6772d23E1F58260a1dF57bFFB4661953",
          poolAddress: "0x45FaE8D0D2acE73544baab452f9020925AfCCC75"
        }, {
          urlOverride: `${VAULT_URL}/usdc-dai-narrow`
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "GMX-ETH",
          address: "0x9bdb8335619bA4E20Bea1321f8E32f45fD6e6e22",
          poolAddress: "0xC99be44383BC8d82357F5A1D9ae9976EE9d75bee"
        }, {
          urlOverride: `${VAULT_URL}/weth-gmx-narrow`
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "LINK-ETH",
          address: "0xF3557102C0cCBE07EE237B6eE70984f313886432",
          poolAddress: "0xe8795cF9c2309eCfe05Df028eB0F21D5D6e3a951"
        }, {
          urlOverride: `${VAULT_URL}/weth-link-narrow`
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "MAGIC-ETH",
          address: "0x6F8401bd348B3f8cDabc8C81dbD0Ac255abCB4e5",
          poolAddress: "0x1106dB7165A8d4a8559B441eCdEe14a5d5070DbC"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "RDNT-ETH",
          address: "0x5E2a78bAcDEE3b34aCc1242Dbc2daCEf794083Ea",
          poolAddress: "0xD51F7383C906cfD995d7f24729F37933Ff264Fa6"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "DPX-ETH",
          address: "0x610C18bA42FBCE096CD9A894a1025EA0B69B581a",
          poolAddress: "0x59A327d948db1810324a04D69CBe9fe9884F8F28"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "PENDLE-ETH",
          address: "0x05F3ABD2B008e8b36a410F3C42E703cB776CeCD0",
          poolAddress: "0xE461f84C3fE6BCDd1162Eb0Ef4284F3bB6e4CAD3"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "WINR-USDC.e",
          address: "0x7d89a94E486b6081E8683fbB879Aa0fdaFD1702d",
          poolAddress: "0xc35AA1cEc34E02A8acc3E5f79c22BE364823094c"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "GRAIL-ETH",
          address: "0x97D81162B96D57476CcF170595a39c1DC76676c9",
          poolAddress: "0x60451B6aC55E3C5F0f3aeE31519670EcC62DC28f"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "VELA-ETH",
          address: "0xDC4E868cb235833d4D4Fc7400bb199fA248d9E3C",
          poolAddress: "0x2d879f8A38648a05c2dba7DeE2A33d00F440e04B"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "LODE-ETH",
          address: "0x26c67eedEEdd0aa277CB6a721B23Fa8c4B34F9b3",
          poolAddress: "0x8280B08Dfb38E6926ffBb0F76F39DDAb8160D120"
        }, {
          urlOverride: `${VAULT_URL}/weth-lode-narrow`
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "UMAMI-ETH",
          address: "0x023059c196A1C692FE3fC543CF6a598d191a41DB",
          poolAddress: "0x684773cE156147e28c3C095D00C6BC9da2444fBC"
        }),
        createStrategy({
          strategy: "STABLE",
          symbol: "LUSD-USDC",
          address: "0x439e2D51BA26Fa062a1E4F0eDAA68F3B830Ca6da",
          poolAddress: "0x3d7412e255c04239285cAd57f82220D07D6874B0"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "SOL-USDC",
          address: "0x1cf4293125913cB3Dea4aD7f2bb4795B9e896CE9",
          poolAddress: "0x622B5186384783BB805c12A808cCF07F41DE1Ff0"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "TIG-ETH",
          address: "0xc01dF639b05F2d3E1e4AC8A72C607cd4857CA150",
          poolAddress: "0x7a35a6339d7Df4Fa7059549915346DAEBf12ef9e"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "rDPX-ETH",
          address: "0x7376467bfB370634085f5CFEf660DF24606a674B",
          poolAddress: "0x5DADE916E66470ED5397BEE7E2d1acC4D24cAa94"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "SILO-ETH",
          address: "0x51EF56b778BB92fB6c988FAA66ae7EB51FDaf5cA",
          poolAddress: "0xc7349Af293747DdF3336A05e16355E6A10E35b7E"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "MCB-USDC",
          address: "0x4d8b720f4625E083a313d13267A8b5e2F186e7a9",
          poolAddress: "0x9C9b3D48c813f253a8FE4D7804c127d7308C1c14"
        }),
        createStrategy({
          strategy: "PEGGED",
          symbol: "stEUR-USDC",
          address: "0x95fe2EC2C1797cae5210AbD9cc9f061d5bD1583e",
          poolAddress: "0xCC4E4c18bAd7E1cC63Bb98915eEb3f412939955E"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "stEUR-wstETH",
          address: "0xCA645ebB51D36d55EbC1211D3a229d80251d3977",
          poolAddress: "0x6C41A770583Fc7141FBeA9ac741f9015A4De6FDa"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "stEUR-ARB",
          address: "0xe7FB2aafc4C3AD3826FEB40EF0b03a6eca39c481",
          poolAddress: "0xcAE4a98685fD488e8D2fC3780BAABC7d472f9D01"
        }),
        createStrategy({
          strategy: "PEGGED",
          symbol: "wstETH-ETH",
          address: "0x3D53aC3Abec01827cAaE5Bc934d46b171cEa2206",
          poolAddress: "0xdEb89DE4bb6ecf5BFeD581EB049308b52d9b2Da7"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "JONES-ETH",
          address: "0x87153DAF9C7C11A59f779422711F8538F93Ec409",
          poolAddress: "0x0e878029D18cD7F630823439cf389d1601d9dbD9"
        },{
          urlOverride: "https://app.gamma.xyz/vault/camelot/arbitrum/"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "PLS-ETH",
          address: "0xd147148d4CdD129539226a041C15B44125DF2B98",
          poolAddress: "0x1FA5368CD1e6334D532447cb78b9090B59EceF66"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "PREMIA-ETH",
          address: "0x2f25C65815c4b9b80468C3a7228699D33a2d33f4",
          poolAddress: "0xc3e254E39c45c7886A12455cb8207c808486FAC3"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "LQTY-ETH",
          address: "0x141cF9AB0E5A3460d013De916734C47A9CD51CCf",
          poolAddress: "0x481aF19b9BF9688b2e9Db100206e868821a68b8B"
        },
        {
          urlOverride: `${VAULT_URL}/weth-lqty-narrow`
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "MOZ-ETH",
          address: "0xf4E4811417b2c60DBFb744800E5cE5259aA2aFa3",
          poolAddress: "0x25A9Ea8B6698782Ecd3707bb7626e606C46D75dd"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "Y2K-ETH",
          address: "0xf070b7C1eA646e4Dc2843901Ed8338cf016B072E",
          poolAddress: "0x7F30c49B6055e46Dd3186Ff1163Ab0Ac0D367035"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "BFR-ETH",
          address: "0x474177a7856Ddb08Cea7EDE9EE455e0cce3C819C",
          poolAddress: "0xB4Db1971cf593c80E79DE9c1E3563393f4D7ac09"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "AURY-USDC",
          address: "0x5EaD602D215F2d47B752E0e1D9dBFD49A92BA4aF",
          poolAddress: "0x0cc4f64F7BF5fD175919b76B0d3183f1C50e630C"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "GMBL-USDC",
          address: "0x527472949AC227861Fd7188a25F7156Af31a3F5A",
          poolAddress: "0x70EB6E93E1f8bFB850126E23A1964Fd3DB789948"
        }, {
          urlOverride: `${VAULT_URL}/usdc-gmbl-narrow`
        }),
        createStrategy({
          strategy: "PEGGED",
          symbol: "plsDPX-DPX",
          address: "0x3187a793B44E0173D5F8090795aF34F023F83131",
          poolAddress: "0x2F0bCb4a8bd714953eeFD5339326eE0Ff62C5b62"
        }, {
          urlOverride: `${VAULT_URL}/dpx-plsdpx-pegged-price`
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "ETH-jUSDC",
          address: "0x6222E32f7e32d8b61955019e5392Ca919516eBA5",
          poolAddress: "0x563d5Bd3512d36d1A427405f809F4b18dC8F66CF"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "jGLP-USDC.e",
          address: "0xdf2ea37D82FEB483813Ff49961b1B78d6e2E8a5A",
          poolAddress: "0x2CFE57fB80Fa7C00b0851F11a07FF173f9D990A3"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "MIM-ARB",
          address: "0x1164191754F726edB85466F84aE5f14f43C111a9",
          poolAddress: "0xb4E0a7698c7cfB03508787C80647419364CcB8D0"
        }, {
          urlOverride: `${VAULT_URL}/arb-mim-narrow`
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "RDO-ETH",
          address: "0xfa45Ab1023b24037a37359b90802BD5370bAe546",
          poolAddress: "0x1caB47198197A62Cc5f627CC5135f2bEA9610aE4"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "FCTR-USDC",
          address: "0xB0d36B93Fae34b2a62B1C8Fc56CdcF95D3f5304A",
          poolAddress: "0xc39D8c1F4e09133738A3f97C63C7E3300035d2bD"
        }, {
          urlOverride: "https://app.gamma.xyz/vault/camelot/arbitrum/"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "VRTX-USDC",
          address: "0xe79372260b6C1384d09c44026e65216969aC4b31",
          poolAddress: "0x3Cf4Cb6Ce8CF3b147E6c444CF66526F5F0c16B92"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "GOOD-USDC.e",
          address: "0x335C83471cCaB2A8508fafD6637c53C5362B9Cd0",
          poolAddress: "0xc4f131f9267831Fd83C88CC6772c37BC51c697Ad"
        }),
        createStrategy({
          strategy: "STABLE",
          symbol: "axlUSDC-USDC",
          address: "0xC4De6d8af8Ca8A17d6740eD105De43b32b1D993d",
          poolAddress: "0x83F210dDa8D968094a8ea2a27E2A16D2b364c78A"
        }, {
          urlOverride: `${VAULT_URL}/plsarb-arb-stable`
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "AXL-USDC",
          address: "0x03aadB89CD14cDB53883D0068346F22c9585D9C4",
          poolAddress: "0x070342A4B13289FF54881f2068b46b5Fcc7D29cD"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "STEAK-ETH",
          address: "0x1Ad305E3b7E02217F62975A44E6504Ae312ad160",
          poolAddress: "0xef5f1AaAD5ef09D29a381845161A5d188E6A37D3"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "wTAO-ETH",
          address: "0x8b9F49e80681C7C09e02DaeBeCF72640F2a48fc6",
          poolAddress: "0xD4540eE4821b72Fa131A1f95D3E0831092a86ec6"
        },{
          urlOverride: `${VAULT_URL}/weth-wtao-wide`
        }),
        createStrategy({
          strategy: "STABLE",
          symbol: "esRDNT-RDNT",
          address: "0xAfC57BcA555b5215E943CBcB7c5F5902a88B05Ab",
          poolAddress: "0x66a042c71d8fb550D2F048e517AaAa4F997b26D7"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "ECLIP-ETH",
          address: "0xCe226f5aF13DC215EaDC7827F5f476211a6291d3",
          poolAddress: "0x264bd241FCC0Fa14803db2930d6bDbc6661AFC27"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "XAI-ETH",
          address: "0x80569177c9B49a15bFaF1C73c83E67AAc791b1be",
          poolAddress: "0xba1CF57b1A7401Cc24622366808CeA1f209a2c50"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "COLLAB-ARB",
          address: "0x6365a617a6796cc8062d5581035097E900B88b2e",
          poolAddress: "0x212632eEC8327787181E8345c04c32Ad02f98ff5"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "COIN.dw-USDC",
          address: "0x62e4d6250f62B18FBb4d6bc9794f704c537F3a72",
          poolAddress: "0xd22a6d22796db1ce38235167560dfEB2812b2f8F"
        }, {
          urlOverride: `${VAULT_URL}/coindw-usdc-wide`
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "GLEND-ETH",
          address: "0x3785A6A3C370Bb37C58872bDdEfa1682d805D3ec",
          poolAddress: "0xE9d3e6811d1Be8ba40a9273EBEC6ff09fE2a6741"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "APEX-ETH",
          address: "0x25C9eA7d0dF00695B9734515305D75abb93A34Aa",
          poolAddress: "0xD5EDE52dDD347fAf45f1345968B3eE4e579239B4"
        }),
        createStrategy({
          strategy: "STABLE",
          symbol: "USDT-USDC",
          address: "0xf662d78C79F6a3a6Fa70160fcE1085A9218D114e",
          poolAddress: "0xa17aFCAb059F3C6751F5B64347b5a503C3291868"
        }, {
          urlOverride: `${VAULT_URL}/usdc-usdt-stable`
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "OPUL-USDC",
          address: "0xBB5336E2Ed57b9881c14735E9909c85Fca0ACE21",
          poolAddress: "0xDa36507865C676b489e35F1Fa97Dd7AEDF2ee8e3"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "GG-ETH",
          address: "0x8360E265F31aA5A7ea79Ab10b75892d021bf718E",
          poolAddress: "0x6b4a958b6AC212cE35Fddfb57ef4fAe0A123ED0b"
        }),
        createStrategy({
          strategy: "PEGGED",
          symbol: "rsETH-ETH",
          address: "0xF00Bf7c33eE9106d10661F7ecF5efc73F4C911E1",
          poolAddress: "0xb355ccE5CBAF411bd56e3b092F5AA10A894083ae"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "D2-ETH",
          address: "0x1f47E9eA77F4CfC9e12141888Aa056B5768D7e84",
          poolAddress: "0xf114fA468113a75046ce75dBC64cdDD02F7ff76C"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "TRADE-USDT",
          address: "0xb033Cc844C5d36EEaC96F9DB6e7a60750fFe78E4",
          poolAddress: "0x2B24f5cEe3Fdc3ed3F2B7b1d989A67452428ABF2"
        }),
        createStrategy({
          strategy: "PEGGED",
          symbol: "ezETH-ETH",
          address: "0xc0aeE8d1b04948f24beD717e92ec567521A24CDF",
          poolAddress: "0xaA45265A94C93802BE9511E426933239117E658f"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "ALGB-ETH",
          address: "0x7146d3A5411521A82b83e5Ef7F7997338A289BfC",
          poolAddress: "0x2C5744D52C9B9AAFD02f993B9898D17768A97515"
        }, {
          urlOverride: `${VAULT_URL}/weth-algb-wide`
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "PEAS-ETH",
          address: "0x923Ca1b4a71CBb98077A527f5a59CD6b9C8C9c35",
          poolAddress: "0x44cC8b40B1483e62e59EF937441Ba6aA8E584A77"
        }),
        createStrategy({
          strategy: "STABLE",
          symbol: "taoUSD-USDC",
          address: "0x75D75Da173126bC648ba799C91A8fca106fFeAe9",
          poolAddress: "0x94665D0572Fb4D4814e2aA0F78641fBbDa1F2Ce7"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "LOCUS-ETH",
          address: "0xed7C8670664D24912A59beAd864249f3EB3D2246",
          poolAddress: "0xB20471dF76d30F2Cc361A20B03a63F93E9906338"
        }, {
          urlOverride: `${VAULT_URL}/weth-locus-wide`
        }),
        createStrategy({
          strategy: "STABLE",
          symbol: "pxETH-ETH",
          address: "0x70d16CC68b529Dbc5F7CeC037537143064AC2784",
          poolAddress: "0x1d9E8E0a4B445cEfF9b8673eD5b219cCb38a4117"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "MOON-ETH",
          address: "0x1AF1b7ad0a6A7B76062ce945213D361D0127e859",
          poolAddress: "0x5e27A422ec06A57567a843FD65A1BBB06aC19FC0"
        }),
        createStrategy({
          strategy: "STABLE",
          symbol: "USDe-USDC",
          address: "0xbdaF890A5cEC0b00348DBcFab8f0c2e4fb9584CC",
          poolAddress: "0xc23f308CF1bFA7efFFB592920a619F00990F8D74"
        }),
        createStrategy({
          strategy: "PEGGED",
          symbol: "weETH-ETH",
          address: "0x85049C0052A5b41eC63a23B76a00646bc16A47B0",
          poolAddress: "0x293DFD996d5cd72Bed712B0EEAb96DBE400c0416"
        }),
        // url is broken
        createStrategy({
          strategy: "PEGGED",
          symbol: "milkTIA-TIA.n",
          address: "0xc5DbA7af47b13d23dd87F047baC95500c42845B3",
          poolAddress: "0x8Bf9C3975172c57E37b3D1c1348e9b5280FB3BaA"
        }, {
          urlOverride: `${VAULT_URL}/milktia-tia-stable`
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "wTIA-ETH",
          address: "0xd26290057BE2C6BB7b1403d39710862631e9a904",
          poolAddress: "0x6241A32429c5362012047Eceb8aA1395CC65Ee96"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "FLY-USDC",
          address: "0x32B6Eb43Aaa4cE2c22c5C7eE707b5467e2C1ff0c",
          poolAddress: "0xD42ef780e9B290Aa071C08B8e766f29A53A7f982"
        }),
        createStrategy({
          strategy: "NARROW",
          symbol: "WBTC-USDC",
          address: "0x5FA08E5A59DaEe3086a28068A143AFf990C67A0F",
          poolAddress: "0x02bE4f98FC9Ee4F612a139D84494CBf6c6c7F97f"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "KWENTA-ETH",
          address: "0xA1C92e407AA4b6A62A22f5dE30C136e75E9D7E46",
          poolAddress: "0xd5451D82882c324Dfc621d527ffA462f2C5Ea130"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "ODG-ETH",
          address: "0x43f2eB1EDE180DB1eE5268b041104698F4A6Bb86",
          poolAddress: "0xF935263c9950EB2881FF58Bd6a76c3D2564A78D5"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "OD-ETH",
          address: "0x831D3fEeD9Ae9516468C4F4972E89f201C5E27AF",
          poolAddress: "0x824959a55907d5350e73e151Ff48DabC5A37a657"
        }),
        createStrategy({
          strategy: "WIDE",
          symbol: "IPOR-ETH",
          address: "0xe526C003dCBECCA8dC97804D9eeFad4F56a3BD4F",
          poolAddress: "0xbb1bDf90a4ab42622F6fA0B28861B23C0d67E7c6"
        }),
        createStrategy({
          strategy: "STABLE",
          symbol: "USDV-USDC",
          address: "0x77a061c9827e685a01A6bF2F44911CE02Bb46B1D",
          poolAddress: "0xfa893368620a0a26eC2DA65836962768aB5BeB9a"
        }),
        createStrategy({
          strategy: "PEGGED",
          symbol: "uniETH-ETH",
          address: "0xB9A3D77c2381a9188507814c623Ae5dB9e7727cd",
          poolAddress: "0xaf1C69a3849824852868a5559Bf9BFD00921148D"
        })
      ]
    }
  ]
})