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
          poolAddress: "0xe51635ae8136aBAc44906A8f230C2D235E9c195F",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "ETH-ARB",
          vaultAddress: "0x1b149C3963b9b70dacbE2255e815f69b107d467C",
          poolAddress: "0xe51635ae8136aBAc44906A8f230C2D235E9c195F",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "ETH-ARB",
          vaultAddress: "0x842b1cc396159aEB4fDb46536e671379e9347459",
          poolAddress: "0xe51635ae8136aBAc44906A8f230C2D235E9c195F",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "ETH-ARB",
          vaultAddress: "0x1A93EF2bAC520dD83083189d22c2Ba3F0EfcFb2c",
          poolAddress: "0xe51635ae8136aBAc44906A8f230C2D235E9c195F",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "ARB-USDC",
          vaultAddress: "0xa9A5504e90b5156404157D7b8b4cefdEDab91A69",
          poolAddress: "0xfaE2AE0a9f87FD35b5b0E24B47BAC796A7EEfEa1",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "ARB-USDC",
          vaultAddress: "0x432697Ca521244A0940259fc113274756750Fe70",
          poolAddress: "0xfaE2AE0a9f87FD35b5b0E24B47BAC796A7EEfEa1",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "ARB-USDC",
          vaultAddress: "0x46f4FC7f9C3F935C68f7Bd6C90aA61874C5f0B4a",
          poolAddress: "0xfaE2AE0a9f87FD35b5b0E24B47BAC796A7EEfEa1",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "ARB-USDC",
          vaultAddress: "0x260778877569d2f749569865D7D0652E768Ae5EB",
          poolAddress: "0xfaE2AE0a9f87FD35b5b0E24B47BAC796A7EEfEa1",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "WBTC-ETH",
          vaultAddress: "0x3AD43772B3E43cd9C6f59A8303546b23C41aA8c8",
          poolAddress: "0xd845f7D4f4DeB9Ff5bCf09D140Ef13718F6f6C71",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "WBTC-ETH",
          vaultAddress: "0x64B635FdC78fF0eD0861068B0B100Fc4322a47FA",
          poolAddress: "0xd845f7D4f4DeB9Ff5bCf09D140Ef13718F6f6C71",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "WBTC-ETH",
          vaultAddress: "0x5458D3A904069153e3282550E017965dE8989a51",
          poolAddress: "0xd845f7D4f4DeB9Ff5bCf09D140Ef13718F6f6C71",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "WBTC-ETH",
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
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "PENDLE-ETH",
          vaultAddress: "0x29c33beba01B02788eED7Aec4BAe1B5bF60A6fAe",
          poolAddress: "0xE461f84C3fE6BCDd1162Eb0Ef4284F3bB6e4CAD3",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "PENDLE-ETH",
          vaultAddress: "0xA7ADfA283D994397102Fa7f56E08d48d24BFcBfb",
          poolAddress: "0xE461f84C3fE6BCDd1162Eb0Ef4284F3bB6e4CAD3",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "PENDLE-ETH",
          vaultAddress: "0x41c509821f0127aA01CF5677022dAd92fbe10183",
          poolAddress: "0xE461f84C3fE6BCDd1162Eb0Ef4284F3bB6e4CAD3",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "PENDLE-ETH",
          vaultAddress: "0x952353bfCee82E50D6bA91895D67784D98148633",
          poolAddress: "0xE461f84C3fE6BCDd1162Eb0Ef4284F3bB6e4CAD3",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "ZRO-ETH",
          vaultAddress: "0x68cBe35B995d8A9582032823C8C861161450043E",
          poolAddress: "0x105ba85d9047dAF3f9FE941D8188d4b9A6900388",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "ZRO-ETH",
          vaultAddress: "0x5a7A8cE99532Bf117b4b776808069744Cf4BECA5",
          poolAddress: "0x105ba85d9047dAF3f9FE941D8188d4b9A6900388",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "ZRO-ETH",
          vaultAddress: "0x556f72F95Cc979119d6EaDd6A0fDeFE791e7f2Ea",
          poolAddress: "0x105ba85d9047dAF3f9FE941D8188d4b9A6900388",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "ZRO-ETH",
          vaultAddress: "0xeFE7b5cF1B3E7Cd5b77e4d3a7e850ea705001B80",
          poolAddress: "0x105ba85d9047dAF3f9FE941D8188d4b9A6900388",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "ETH-TIA",
          vaultAddress: "0x687b9602D97c5D18952490E2689d28d636173355",
          poolAddress: "0x1818FF61ba19C06A554C803eD98B603D5b7D1B43",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "ETH-TIA",
          vaultAddress: "0x82Ca42C39cD84a36C1F0FA58707439d4F615Bc41",
          poolAddress: "0x1818FF61ba19C06A554C803eD98B603D5b7D1B43",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "ETH-TIA",
          vaultAddress: "0xC9e0Cbc01f5f3769997637CBd4B71ebA5e4639Ee",
          poolAddress: "0x1818FF61ba19C06A554C803eD98B603D5b7D1B43",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "ETH-TIA",
          vaultAddress: "0xD23c1399d539d8fAF3010747d74628270c426175",
          poolAddress: "0x1818FF61ba19C06A554C803eD98B603D5b7D1B43",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "WINR-USDC.e",
          vaultAddress: "0x21D0C323D14c8aE2EBAF4aB2584948748e72e8dF",
          poolAddress: "0xc35AA1cEc34E02A8acc3E5f79c22BE364823094c",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "WINR-USDC.e",
          vaultAddress: "0x284FA5174C984b996654dC138777FBBf368EEf13",
          poolAddress: "0xc35AA1cEc34E02A8acc3E5f79c22BE364823094c",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "WINR-USDC.e",
          vaultAddress: "0x63E823647c8e1B72E7Dca8823203D47294C8198b",
          poolAddress: "0xc35AA1cEc34E02A8acc3E5f79c22BE364823094c",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "WINR-USDC.e",
          vaultAddress: "0x76107662eeD0d58a81b63A93d2D812cFc9a6D346",
          poolAddress: "0xc35AA1cEc34E02A8acc3E5f79c22BE364823094c",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "DMT-USDC.e",
          vaultAddress: "0x4FbFA6dd6ED25045181Fe6ec435F578f30841d8A",
          poolAddress: "0xe4E4aEA5150f0FA2b302b7B69427ecFb2A56133a",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "DMT-USDC.e",
          vaultAddress: "0xaa1e4547D9F93383120a7dc45f07A64b4f136bA6",
          poolAddress: "0xe4E4aEA5150f0FA2b302b7B69427ecFb2A56133a",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "DMT-USDC.e",
          vaultAddress: "0x277Cdb1aB914bE35C8a81999BCFAB2B0245983Ff",
          poolAddress: "0xe4E4aEA5150f0FA2b302b7B69427ecFb2A56133a",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "DMT-USDC.e",
          vaultAddress: "0xE245A4Bdb003F4d2F2f705840bB05c055027268C",
          poolAddress: "0xe4E4aEA5150f0FA2b302b7B69427ecFb2A56133a",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "GRAIL-USDC.e",
          vaultAddress: "0x298CCA01bcfdC48515bBc63f27d39bAb59cc6757",
          poolAddress: "0x8cc8093218bCaC8B1896A1EED4D925F6F6aB289F",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "GRAIL-USDC.e",
          vaultAddress: "0x5e0d7Ed0717B3c3B8BA5a36ddcFf8Ae0c9f1A6bD",
          poolAddress: "0x8cc8093218bCaC8B1896A1EED4D925F6F6aB289F",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "GRAIL-USDC.e",
          vaultAddress: "0x9945110B71888cdcf3710239a9c060C0fC8a2113",
          poolAddress: "0x8cc8093218bCaC8B1896A1EED4D925F6F6aB289F",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "GRAIL-USDC.e",
          vaultAddress: "0xF6534aB509fa89688C1DE2D7650B4592C2259920",
          poolAddress: "0x8cc8093218bCaC8B1896A1EED4D925F6F6aB289F",
        }),
        createStrategy({
          strategy: "SLPBEAR",
          symbol: "WETH-LINK",
          vaultAddress: "0xe0504586F96e707B5EdcBBCc51591E2104FFf417",
          poolAddress: "0xe8795cF9c2309eCfe05Df028eB0F21D5D6e3a951",
        }),
        createStrategy({
          strategy: "SLPNARROW",
          symbol: "WETH-LINK",
          vaultAddress: "0xe088076c0e937B11cDB66603dE0C5E27EFD6759d",
          poolAddress: "0xe8795cF9c2309eCfe05Df028eB0F21D5D6e3a951",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "WETH-LINK",
          vaultAddress: "0x145a5DB9DB9219ED61750a9E1238Ee0960258b12",
          poolAddress: "0xe8795cF9c2309eCfe05Df028eB0F21D5D6e3a951",
        }),
        createStrategy({
          strategy: "SLPBULL",
          symbol: "WETH-LINK",
          vaultAddress: "0x7c222247C3a1fAef78EFd83d48832E8Bb3c63FC2",
          poolAddress: "0xe8795cF9c2309eCfe05Df028eB0F21D5D6e3a951",
        }),
        createStrategy({
          strategy: "SLPWIDE",
          symbol: "BOOP-WETH",
          vaultAddress: "0xd4fa0d9Bbfa53D20988C185f8A8B625Dee87bF1A",
          poolAddress: "0x92d06120691219fF49Ba5d65777ad557Fd4f80D7",
        }),
      ],
    },
  ],
});
