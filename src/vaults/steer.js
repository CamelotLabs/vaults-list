const VAULT_URL = "https://app.steer.finance/vault"
const BASE_URL = process.env.BASE_URL || "https://vaults-list.camelot.exchange"

const baseStrategy = (address, { abiOverride, imageOverride, urlOverride }) => ({
  abi: abiOverride || `${BASE_URL}/abi/steer/steervault.json`,
  image: imageOverride || `${BASE_URL}/assets/steer/strategy-stable.svg`,
  url: urlOverride || `${VAULT_URL}/${address}`,
})

const strategyTemplates = {
  MVCS: (symbol, address, overrides) => ({
    ...baseStrategy(address, overrides),
    strategy: "MVCS",
    fullname: `Steer Moving Volatility Channel ${symbol}`,
    description: "The Moving Volatility Channel Strategy harnesses the power of the Keltner Channel to monitor asset price volatility and trend direction. By setting boundaries based on average true ranges and moving averages, this strategy provides a responsive channel that adjusts to the asset's price fluctuations. Ideal for LPs who wish to optimize their positions in a dynamic market, it facilitates the identification of potential breakout or consolidation phases, ensuring you're always aligned with the market's rhythm."
  }),
  CRSV: (symbol, address, overrides) => ({
    ...baseStrategy(address, overrides),
    strategy: "CRSV",
    fullname: `Steer Classic Rebalance ${symbol}`,
    description: "The Classic Rebalance Strategy offers a dynamic approach to liquidity provision. By establishing a predetermined position size around the asset's current price, it ensures consistent market engagement. When the asset's price drifts beyond this active range, the strategy can promptly reposition, aligning the new position around the prevailing price. While this rebalancing method may expose users to some degree of impermanent loss, it's tailored for specific use cases where such a trade-off is desired, offering a unique balance between market engagement and return potential."
  }),
  GSSS: (symbol, address, overrides) => ({
    ...baseStrategy(address, overrides),
    strategy: "GSSS",
    fullname: `Steer Generic Static Stable ${symbol}`,
    description: "Static stable strategies are designed for assets pegged at a theoretical price. Various widths and depths can be achieved to give users the desired liquidity shape while market making. These strategies are incredibly safe and resistant to IL given their nature."
  }),
  HLCS: (symbol, address, overrides) => ({
    ...baseStrategy(address, overrides),
    strategy: "HLCS",
    fullname: `Steer High Low Channel ${symbol}`,
    description: "The High Low Channel Strategy is a sophisticated LP approach that utilizes the Donchian channel as its foundation. By considering the highest high and the lowest low over a designated period, this strategy forms a robust price channel. An optional multiplier can be applied to widen the channel, offering more flexibility and potential to capitalize on larger price movements. With this strategy, LPs can dynamically adapt to market volatility and position themselves advantageously within the evolving price landscape."
  }),
  EES: (symbol, address, overrides) => ({
    ...baseStrategy(address, overrides),
    strategy: "EES",
    fullname: `Steer Elastic Expansion ${symbol}`,
    description: "The Elastic Expansion Strategy employs the Bollinger Channel to determine potential price fluctuations within a specified range. By focusing on the inherent volatility of an asset, this strategy creates a responsive and adaptive position for LPs. It aims to capture optimal yield by identifying and adjusting to price expansions and contractions. This strategy not only offers a perspective on potential price peaks and troughs but also ensures that liquidity is placed where it's most likely to be utilized, maximizing returns for liquidity providers."
  }),
  MSS: (symbol, address, overrides) => ({
    ...baseStrategy(address, overrides),
    strategy: "MSS",
    fullname: `Steer MIM-USDC Stable USDC-MIM`,
    description: "This strategy is designed for the MIM / USDC pool on Camelot DEX. Positions are set according to statistical likelihood of supporting trade volume."
  }),
  HLCSV: (symbol, address, overrides) => ({
    ...baseStrategy(address, overrides),
    strategy: "HLCSV",
    fullname: `Steer High Low Channel V2 ${symbol}`,
    description: "The High Low Channel Strategy is a sophisticated LP approach that utilizes the Donchian channel as its foundation. By considering the highest high and the lowest low over a designated period, this strategy forms a robust price channel. An optional multiplier can be applied to widen the channel, offering more flexibility and potential to capitalize on larger price movements. With this strategy, LPs can dynamically adapt to market volatility and position themselves advantageously within the evolving price landscape."
  }),
  SSSV: (symbol, address, overrides) => ({
    ...baseStrategy(address, overrides),
    strategy: "SSSV",
    fullname: `Steer Static Stable ${symbol}`,
    description: "Static stable strategies are designed for assets pegged at a theoretical price. Various widths and depths can be achieved to give users the desired liquidity shape while market making. These strategies are incredibly safe and resistant to IL given their nature."
  }),
}

const createStrategy = ({strategy, symbol, address, poolAddress}, overrides={}) => ({
  symbol,
  address,
  poolAddress,
  ...strategyTemplates[strategy](symbol, address, overrides)
})

module.exports = steer = () => ({
  name: "Steer",
  logo: `${BASE_URL}/assets/steer/logo.svg`,
  logoSm: `${BASE_URL}/assets/steer/logo-sm.png`,
  chains: [{
    chainId: 42161,
    api: "https://api.steer.finance/camelot/vaults",
    depositProxy: "0x5864962AE89B700F44E0552930da9455DA3B25F2",
    depositProxyAbi: `${BASE_URL}/abi/steer/steerproxyhelper.json`,
    strategies: [
      createStrategy({
        strategy: "MVCS",
        symbol: "ARB-USDC",
        address: "0x11290316a4dc61C89c0Fa082Dd272744f656fb49",
        poolAddress: "0xfaE2AE0a9f87FD35b5b0E24B47BAC796A7EEfEa1"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "ARB-USDC",
        address: "0x127e3Ee25DfD74D2e03559bb29356eAF3186c931",
        poolAddress: "0xfaE2AE0a9f87FD35b5b0E24B47BAC796A7EEfEa1"
      }),
      createStrategy({
        strategy: "GSSS",
        symbol: "WBTC-svBTC",
        address: "0x19bDb97b8e57534eFE410A3bB8E73C980F4c30bF",
        poolAddress: "0xA27cb8a8ACf2DE50f3174cb68ec0bD3180D53921"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "MAGIC-ETH",
        address: "0x1A18770DE331D56F121EdBf92D5809A5bE1471A0",
        poolAddress: "0x1106dB7165A8d4a8559B441eCdEe14a5d5070DbC"
      }),
      createStrategy({
        strategy: "HLCS",
        symbol: "ETH-ARB",
        address: "0x1AB39C875e00eF63758c571C3f6292C3D94dDD28",
        poolAddress: "0xe51635ae8136aBAc44906A8f230C2D235E9c195F"
      }),
      createStrategy({
        strategy: "HLCS",
        symbol: "WINR-USDC",
        address: "0x1Ac72fDdf41397FdA7845b03199DF62e113D8D44",
        poolAddress: "0xc35AA1cEc34E02A8acc3E5f79c22BE364823094c"
      }),
      createStrategy({
        strategy: "EES",
        symbol: "ETH-LINK",
        address: "0x1dF9A6Cb4f0148e7041aAfabf102Dd12BC5E8F3a",
        poolAddress: "0xe8795cF9c2309eCfe05Df028eB0F21D5D6e3a951"
      }),
      createStrategy({
        strategy: "GSSS",
        symbol: "LUSD-USDC",
        address: "0x33500181093086c26F581E9D835f5B6CE829Cc26",
        poolAddress: "0x3d7412e255c04239285cAd57f82220D07D6874B0"
      }),
      createStrategy({
        strategy: "MSS",
        symbol: "USDC-MIM",
        address: "0x38B44bB001456091bfac7b0E3eBeaBfC7DA6E626",
        poolAddress: "0x0e7AC13617Cc1A289B222E4602BdAaA53ea4dc61"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "DPX-ETH",
        address: "0x3d30d2a197a7F4738cED55d269c5C37F267bb136",
        poolAddress: "0x59A327d948db1810324a04D69CBe9fe9884F8F28"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "PENDLE-ETH",
        address: "0x5e5b8B96F09c372a7D216e268bB89170CeCd6b9B",
        poolAddress: "0xE461f84C3fE6BCDd1162Eb0Ef4284F3bB6e4CAD3"
      }),
      createStrategy({
        strategy: "GSSS",
        symbol: "USDC-DAI",
        address: "0x5f033d4d786eC5592FDbb5B289000A2B9A466D32",
        poolAddress: "0x45FaE8D0D2acE73544baab452f9020925AfCCC75"
      }),
      createStrategy({
        strategy: "EES",
        symbol: "ETH-USDC",
        address: "0x801B4184de0CDF298ce933b042911500FADA1de6",
        poolAddress: "0xB1026b8e7276e7AC75410F1fcbbe21796e8f7526"
      }),
      createStrategy({
        strategy: "EES",
        symbol: "ETH-GMX",
        address: "0x843a07b949820eaA8362d52d4b600f367C6D7312",
        poolAddress: "0xC99be44383BC8d82357F5A1D9ae9976EE9d75bee"
      }),
      createStrategy({
        strategy: "HLCS",
        symbol: "RDNT-ETH",
        address: "0x974c148d09d6E6d00A7aB4680DbDaF7bEAAf2be5",
        poolAddress: "0xD51F7383C906cfD995d7f24729F37933Ff264Fa6"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "stEUR-wstETH",
        address: "0x97c7605AF1cf301D440EB9Aff359C4d80Fe1d430",
        poolAddress: "0x6C41A770583Fc7141FBeA9ac741f9015A4De6FDa"
      }),
      createStrategy({
        strategy: "HLCS",
        symbol: "GRAIL-USDC",
        address: "0x980694538542CdB70C2F791f6d406a5E89EE6FaA",
        poolAddress: "0x8cc8093218bCaC8B1896A1EED4D925F6F6aB289F"
      }),
      createStrategy({
        strategy: "HLCSV",
        symbol: "VELA-ETH",
        address: "0x9ad0e71AaD6deBEAB4f6131Bb75D53ACf74f8ed4",
        poolAddress: "0x2d879f8A38648a05c2dba7DeE2A33d00F440e04B"
      }),
      createStrategy({
        strategy: "MVCS",
        symbol: "stEUR-ARB",
        address: "0xa02e191eFd6B1BaCc9a8e133c4B9580F46863254",
        poolAddress: "0xcAE4a98685fD488e8D2fC3780BAABC7d472f9D01"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "Silo-ETH",
        address: "0xAd5EDf3b5B6224A62Fe6Df7Fc2469F473509B207",
        poolAddress: "0xc7349Af293747DdF3336A05e16355E6A10E35b7E"
      }),
      createStrategy({
        strategy: "HLCS",
        symbol: "stEUR-USDC",
        address: "0xaE3776AaDF76Cb25d63Cd059d9CA82dAFdF4840C",
        poolAddress: "0xCC4E4c18bAd7E1cC63Bb98915eEb3f412939955E"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "plsARB-ARB",
        address: "0xB67f53988103AF01E2AA7A67461D86893BC7ff26",
        poolAddress: "0x47A52B2beE1a0cc9A34BB9EE34C357C054112c3E"
      }),
      createStrategy({
        strategy: "MVCS",
        symbol: "ETH-GMX",
        address: "0xb8732Ed168102E48A18C56745bb1c8d05d5b0a27",
        poolAddress: "0xC99be44383BC8d82357F5A1D9ae9976EE9d75bee"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "ETH-USDT",
        address: "0xC9296F25E907943E50a98e12a05c4672901d7bC2",
        poolAddress: "0x7CcCBA38E2D959fe135e79AEBB57CCb27B128358"
      }),
      createStrategy({
        strategy: "EES",
        symbol: "ETH-USDT",
        address: "0xcF3BB5741fa421CbD961F4BD4E921b1D7BCF1Cb1",
        poolAddress: "0x7CcCBA38E2D959fe135e79AEBB57CCb27B128358"
      }),
      createStrategy({
        strategy: "HLCS",
        symbol: "WBTC-ETH",
        address: "0xdA0E522FdA5245fA5AF9274790E8A519b6F25023",
        poolAddress: "0xd845f7D4f4DeB9Ff5bCf09D140Ef13718F6f6C71"
      }),
      createStrategy({
        strategy: "GSSS",
        symbol: "USDC-USDC",
        address: "0xE5a04695c017558e071494Cc547ab4c3fc990DBa",
        poolAddress: "0xc86Eb7B85807020b4548EE05B54bfC956eEbbfCD"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "GRAIL-ETH",
        address: "0xEf8CbDEe27cC9fe2fC7EC2bBc840BECbf83f0c3c",
        poolAddress: "0x60451B6aC55E3C5F0f3aeE31519670EcC62DC28f"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "PLS-ETH",
        address: "0xf9a3AAF97631080103Ec451E4d1e093ED7e7ca6b",
        poolAddress: "0x1FA5368CD1e6334D532447cb78b9090B59EceF66"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "wstETH-ETHx",
        address: "0x80a1FE04e7C2CFB62cfEE67361d1A3B57902766A",
        poolAddress: "0xeeDB8542778f37A273D16B8FA46A007b9f6f5854"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "USDT-USDC",
        address: "0xfaCC26b61728Fc1930291e3c8Ff589e82a277A27",
        poolAddress: "0x3AB5DD69950a948c55D1FBFb7500BF92B4Bd4C48"
      }),
      createStrategy({
        strategy: "CRSV",
        symbol: "stEUR-FLR",
        address: "0x5aB717389bae00029223eA86bBd21db58C390543",
        poolAddress: "0x37779cf6A027959228DA273fBC2Ab708A01638d6"
      }),
      createStrategy({
        strategy: "SSSV",
        symbol: "fUSDC-USDC",
        address: "0x88bb76fE46977a9B627222694d7958F1955bd881",
        poolAddress: "0xAc07ed4CbdDA2cB17F9AEca2919c825dCb2882B9"
      }),
      createStrategy({
        strategy: "SSSV",
        symbol: "fUSDC-USDC.e",
        address: "0xcdf750Bf7e2a5EbcF0a8771cf1a3AD0a9ded48Af",
        poolAddress: "0xEA5b743dEd9d2E85c6eBebcc90a7a06031575708"
      }),
      createStrategy({
        strategy: "SSSV",
        symbol: "stEUR-flrEUR",
        address: "0x3Df13f8430B9DBd148a178f0Fe361b18A38A01d1",
        poolAddress: "0x37779cf6A027959228DA273fBC2Ab708A01638d6"
      }),
      createStrategy({
        strategy: "SSSV",
        symbol: "ETH+-WETH",
        address: "0x9d9C0A46E0A84f8e64Df60A07F217F2A53DAEEa3",
        poolAddress: "0x8DD043B553F96Fb8f30d6B97aCAD12A940A9c384"
      }),
      createStrategy({
        strategy: "SSSV",
        symbol: "rgUSD-USDC",
        address: "0xba3eBf55d96CAc487A11B49477840c190f36E419",
        poolAddress: "0x8359f9ABC3164ffd59964d3dac7052a40418A8a2"
      }),
      createStrategy({
        strategy: "SSSV",
        symbol: "eUSD-rgUSD",
        address: "0xF2c44473799aF5EE16703A509Ff5D9dF95f7764C",
        poolAddress: "0x5263f9cAC15CeEE736dAd4D014af26D8F6ea8D41"
      }),
      createStrategy({
        strategy: "SSSV",
        symbol: "KNOX-rgUSD",
        address: "0xC8fB6F6dDaD4df2D15F342C591f7a88cC5e14F63",
        poolAddress: "0x5C77A1740baf754A532739FDAEd89F5FC74B869D"
      }),
      createStrategy({
        strategy: "SSSV",
        symbol: "USDe-USDC",
        address: "0xF8137C8CF3e049998dfD83C7B2FB680269e31b55",
        poolAddress: "0xc23f308CF1bFA7efFFB592920a619F00990F8D74"
      }),
    ]
  }]
})