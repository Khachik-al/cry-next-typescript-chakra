export const nftList = async ({ offset, limit, sort, order }: { offset: number, limit: number, sort: string, order: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft?offset=${offset}&limit=${limit}&sort=${sort}&order=${order}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const nftItem = async ({ slug }: { slug: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft/details/${slug}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const nftAll = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft?limit=2000`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const nftMarketplace = async ({ slug, limit, offset }: { slug: string, limit: number, offset: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft/market/${slug}?limit=${limit}&offset=${offset}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const coinList = async ({ offset, limit }: { offset?: number, limit?: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token?offset=${offset}&limit=${limit}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null

}

export const coinItem = async ({ slug }: { slug: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token/details/${slug}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const coinAll = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token?limit=250`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const coinMarkets = async ({ slug, limit, offset }: { slug: string, limit: number, offset: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/token/market/${slug}?limit=${limit}&offset=${offset}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const exchangeList = async ({ offset, limit }: { offset?: number, limit?: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange?offset=${offset}&limit=${limit}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null

}

export const exchangeItem = async ({ slug }: { slug: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange/details/${slug}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const exchangeAll = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const exchangeMarket = async ({ slug, limit, offset }: { slug: string, limit: number, offset: number }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/exchange/market/${slug}?limit=${limit}&offset=${offset}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}