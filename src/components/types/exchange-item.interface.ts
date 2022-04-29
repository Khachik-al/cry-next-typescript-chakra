export type ExchangeItemType = {
  slug: string;
  logo: string;
  name: string;
  valume24h: number;
}

export type ExchangeMarket = {
  coins: {
    id: string;
    liquidity: number | null;
    logo: string;
    minus2Depth: number;
    pair: string;
    plus2Depth: number;
    price: number;
    rank: number | null;
    source: string;
    volume24h: number;
    volume24hPercent: number;
  }[];
  count: number;
}