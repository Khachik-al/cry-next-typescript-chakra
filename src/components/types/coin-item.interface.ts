export type CoinItem = {
  rank: number | null;
  id: string;
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
  circulatingSupplyChangePercent24h: number | null;
  totalSupply: number;
  maxSupply: number;
  fullyDiluted: number | null;
  fullyDilutedChangePercent24h: number | null;
  volumeMarketCapRatio: number;
  low24h: number;
  high24h: number;
  marketDominance: number;
  website: string[];
  explorers: string[];
  community: string[];
  sourceCode: string[];
}