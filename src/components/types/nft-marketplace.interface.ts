export type NFTMarketItem = {
  id: string
  logoUrl: string;
  rank: number;
  name: string;
  slug: string;
  fundamentalRating: number;
  technicalRating: number;
  floorPriceEth: number;
  floorPriceUsd: number;
  volumeChangePercent24h: number;
  volumeChange24hUsd: number;
  marketCapEth: number;
  marketCapUsd: number;
  volumeChange24hEth: number;
  ownersCount: number;
  itemsCount: number;
  marketCap: number;
  volume: number;
  turnOver: number;
  ownersToItems: number;
  website: string;
}

export type Marketplace = {
  assets: {
    address: string;
    imgUrl: string;
    name: string;
    permalink: string;
    price_eth: number;
    price_usd: number;
    token_id: string;
    traits: {
      trait_type: string;
      value: string;
    }[]
  }[];
  next: string;
  previous: string;
}
