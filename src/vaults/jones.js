const VAULT_URL = "https://app.jonesdao.io/smart-lp/42161";
const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange";

const baseStrategy = (poolAddress, { imageOverride, urlOverride }) => ({
  image: imageOverride || `${BASE_URL}/assets/jones/strategy-smartlp.png`,
  url: urlOverride || `${VAULT_URL}/${poolAddress}`,
});

const strategyTemplates = {
  SLPBEAR: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Bear",
    fullname: `Jones SLP Bear ${symbol}`,
    description:
      "This strategy concentrates liquidity in a way that favors downwards volatility. Users of the bear strategy concentrate more liquidity towards the secondary token in a pair, allowing them to earn more yield in downward volatility periods",
  }),
  SLPBULL: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Bull",
    fullname: `Jones SLP Bull ${symbol}`,
    description:
      "This strategy concentrates liquidity in a way that favors upwards volatility. Users of the bull strategy concentrate more liquidity towards the primary token in a pair, allowing them to experience most of the price appreciation & earn more yield in upward volatility periods",
  }),
  SLPNARROW: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Narrow",
    fullname: `Jones SLP Narrow ${symbol}`,
    description:
      "This strategy concentrates liquidity in a narrow range with no directional bias. The result is an increased yield, but an increase in potential rebalances, which can escalate impermanent loss during volatile periods",
  }),
  SLPWIDE: (symbol, poolAddress, overrides) => ({
    ...baseStrategy(poolAddress, overrides),
    strategy: "SLP Wide",
    fullname: `Jones SLP Wide ${symbol}`,
    description:
      "This strategy concentrates liquidity in a wide range with no directional bias. The result is a relatively lower yield, but a reduction in potential rebalances, which can mitigate impermanent loss during volatile periods",
  }),
};

const createStrategy = ({ strategy, symbol, vaultAddress, poolAddress }, overrides = {}) => ({
  symbol,
  vaultAddress, // use lpManager address here
  poolAddress,
  ...strategyTemplates[strategy](symbol, poolAddress, overrides),
});

module.exports = jones = () => ({
  name: "Jones",
  id: "jones",
  logo: `${BASE_URL}/assets/jones/logo.png`,
  logoSm: `${BASE_URL}/assets/jones/logo-sm.svg`,
  chains: [
    {
      chainId: 42161,
      api: "https://app.jonesdao.io/api/smart-lp/pools?dex=camelot",
      proxyHelperAddress: "0x9220D07c1e8b5C170FA6011DB8a729E9898b6245",
      viewerAddress: "0xcd0505BdC1Afd7F859B00CbE9EA3Dc4D79667955",
      strategies: [
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "ETH-USDC",
          vaultAddress: "0x840Dd18aC8510f43Fd0B52EDc73D74d012cDc174",
          poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "ETH-USDC",
          vaultAddress: "0x969D0296Ea7E06AbDA2E7B95CD40718484eCe450",
          poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "ETH-USDC",
          vaultAddress: "0x94C36a1b7d7736fC14F00d008a56E1B589d55f2f",
          poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "ETH-USDC",
          vaultAddress: "0xAC181bC9e6217dA5753a426bE7aB90c062A78A7f",
          poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "ETH-ARB",
          vaultAddress: "0x719447648d0031a85cCd2585C0d81E73A35D9057",
          poolAddress: "0xe51635ae8136abac44906a8f230c2d235e9c195f",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "ETH-ARB",
          vaultAddress: "0x1b149C3963b9b70dacbE2255e815f69b107d467C",
          poolAddress: "0xe51635ae8136abac44906a8f230c2d235e9c195f",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "ETH-ARB",
          vaultAddress: "0x842b1cc396159aEB4fDb46536e671379e9347459",
          poolAddress: "0xe51635ae8136abac44906a8f230c2d235e9c195f",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "ETH-ARB",
          vaultAddress: "0x1A93EF2bAC520dD83083189d22c2Ba3F0EfcFb2c",
          poolAddress: "0xe51635ae8136abac44906a8f230c2d235e9c195f",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "ARB-USDC",
          vaultAddress: "0xa9A5504e90b5156404157D7b8b4cefdEDab91A69",
          poolAddress: "0xfae2ae0a9f87fd35b5b0e24b47bac796a7eefea1",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "ARB-USDC",
          vaultAddress: "0x432697Ca521244A0940259fc113274756750Fe70",
          poolAddress: "0xfae2ae0a9f87fd35b5b0e24b47bac796a7eefea1",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "ARB-USDC",
          vaultAddress: "0x46f4FC7f9C3F935C68f7Bd6C90aA61874C5f0B4a",
          poolAddress: "0xfae2ae0a9f87fd35b5b0e24b47bac796a7eefea1",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "ARB-USDC",
          vaultAddress: "0x260778877569d2f749569865D7D0652E768Ae5EB",
          poolAddress: "0xfae2ae0a9f87fd35b5b0e24b47bac796a7eefea1",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "BTC-ETH",
          vaultAddress: "0x3AD43772B3E43cd9C6f59A8303546b23C41aA8c8",
          poolAddress: "0xd845f7D4f4DeB9Ff5bCf09D140Ef13718F6f6C71",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "BTC-ETH",
          vaultAddress: "0x64B635FdC78fF0eD0861068B0B100Fc4322a47FA",
          poolAddress: "0xd845f7D4f4DeB9Ff5bCf09D140Ef13718F6f6C71",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "BTC-ETH",
          vaultAddress: "0x5458D3A904069153e3282550E017965dE8989a51",
          poolAddress: "0xd845f7D4f4DeB9Ff5bCf09D140Ef13718F6f6C71",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "BTC-ETH",
          vaultAddress: "0x68c21B93AaC599F00daed734642b1d7e2041f429",
          poolAddress: "0xd845f7D4f4DeB9Ff5bCf09D140Ef13718F6f6C71",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "ETH-USDT",
          vaultAddress: "0x683a85a52E614d307eec6443f4EF7f807346c24D",
          poolAddress: "0x7CcCBA38E2D959fe135e79AEBB57CCb27B128358",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "ETH-USDT",
          vaultAddress: "0xFf9F1Ad7a4D35fd98516b8DC42449261265b21a0",
          poolAddress: "0x7CcCBA38E2D959fe135e79AEBB57CCb27B128358",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "ETH-USDT",
          vaultAddress: "0xb6618F214453635e980Ee7b7DB94D25f90499945",
          poolAddress: "0x7CcCBA38E2D959fe135e79AEBB57CCb27B128358",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "ETH-USDT",
          vaultAddress: "0x4766418bA5498F9CD35Ee9304A80f33aEb062FA7",
          poolAddress: "0x7CcCBA38E2D959fe135e79AEBB57CCb27B128358",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "ETH-GMX",
          vaultAddress: "0x38b5b55d653d26fE3b962579c9C4c1f42a36b7Ec",
          poolAddress: "0xC99be44383BC8d82357F5A1D9ae9976EE9d75bee",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "ETH-GMX",
          vaultAddress: "0x1b53D23c0aB582ECBcafeB839358FEE3f69A4A6A",
          poolAddress: "0xC99be44383BC8d82357F5A1D9ae9976EE9d75bee",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "ETH-GMX",
          vaultAddress: "0x17eE5A3063FE99A278ad70ae66e5Ad79F51D0EA9",
          poolAddress: "0xC99be44383BC8d82357F5A1D9ae9976EE9d75bee",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "ETH-GMX",
          vaultAddress: "0x5d345084593a57D3c78cC9a68318053337156917",
          poolAddress: "0xC99be44383BC8d82357F5A1D9ae9976EE9d75bee",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "SOL-USDC",
          vaultAddress: "0xbf4Ca8D5Dde9FAB923085A39cA5F0B79fF43EAdf",
          poolAddress: "0x622B5186384783BB805c12A808cCF07F41DE1Ff0",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "SOL-USDC",
          vaultAddress: "0xa547E075eD52451a2C52d02B06BA3aCc3771631a",
          poolAddress: "0x622B5186384783BB805c12A808cCF07F41DE1Ff0",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "SOL-USDC",
          vaultAddress: "0x0C663Fcce8d9d364Ae3f03Ee1Feda85D16bb6BFc",
          poolAddress: "0x622B5186384783BB805c12A808cCF07F41DE1Ff0",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "SOL-USDC",
          vaultAddress: "0x99C75A534186bDf4aa56Fc41169EAD165aDc314c",
          poolAddress: "0x622B5186384783BB805c12A808cCF07F41DE1Ff0",
        }),
      ],
    },
  ],
});
