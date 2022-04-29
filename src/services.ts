export const nftList = async ({ offset, limit }: { offset: number, limit: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft?offset=${offset}&limit=${limit}`)
  const { data } = await res.json()
  return data
}

export const nftItem = async ({ slug }: { slug: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft/details/${slug}`)
  const { data } = await res.json()
  return data
}

export const nftAll = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft`)
  const { data } = await res.json()
  return data
}

export const nftMarketplace = async ({ slug, limit, offset }: { slug: string, limit: number, offset: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft/market/${slug}?limit=${limit}&offset=${offset}`)
  const { data } = await res.json()
  return data
}

export const coinList = async ({ offset, limit }: { offset?: number, limit?: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token?offset=${offset}&limit=${limit}`)
  const { data } = await res.json()
  return data

}

export const coinItem = async ({ slug }: { slug: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token/details/${slug}`)
  const { data } = await res.json()
  return data
}

export const coinAll = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token`)
  const { data } = await res.json()
  return data
}

export const coinMarkets = async ({ slug, limit, offset }: { slug: string, limit: number, offset: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token/market/${slug}?limit=${limit}&offset=${offset}`)
  const { data } = await res.json()
  return data
}

export const exchangeList = async ({ offset, limit }: { offset?: number, limit?: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange?offset=${offset}&limit=${limit}`)
  const { data } = await res.json()
  return data

}

export const exchangeItem = async ({ slug }: { slug: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange/details/${slug}`)
  const { data } = await res.json()
  return data
}

export const exchangeAll = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange`)
  const { data } = await res.json()
  return data
}

export const exchangeMarket = async ({ slug, limit, offset }: { slug: string, limit: number, offset: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange/market/${slug}?limit=${limit}&offset=${offset}`)
  const { data } = await res.json()
  return data
}