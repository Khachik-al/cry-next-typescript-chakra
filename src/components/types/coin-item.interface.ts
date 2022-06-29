export type CoinItem = {
  rank: number;
  id: string;
  coinId: string;
  icon: string;
  name: string;
  price: number;
  priceChangePercent24h: number;
  fundamentalRating: number;
  technicalRating: number;
  volume24h: number;
  marketCap: number;
  marketCapChangePercent24h: number;
  circulatingSupply: number;
  circulatingSupplyChangePercent24h: number;
  totalSupply: number;
  maxSupply: number;
  fullyDiluted: number;
  fullyDilutedChangePercent24h: number;
  volumeMarketCapRatio: number;
  low24h: number;
  high24h: number;
  marketDominance: number;
  website: string[];
  explorers: string[];
  community: string[];
  sourceCode: { github: string[] };
}

export type CoinMarkets = {
  tickers: {
    id: string;
    liquidity: number;
    logo: string;
    minus2Depth: number;
    pair: string;
    plus2Depth: number;
    price: number;
    rank: number;
    source: string;
    volume24h: number;
    volume24hPercent: number;
  }[]
}