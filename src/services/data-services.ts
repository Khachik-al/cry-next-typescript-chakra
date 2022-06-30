import { UTCTimestamp } from 'lightweight-charts'

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
    return data.items
  }
  return []
}

export const nftMarketplace = async ({ slug, limit, offset }: { slug: string, limit: number, offset: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft/market/${slug}?limit=${limit}&offset=${offset}`)
  if (res.status === 200) {
    const { data } = await res.json()
    return data
  }
  return null
}

export const nftChartData = async ({ slug, range }: { slug: string, range: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft/charts/${slug}`)
  if (res.status === 200) {
    const { data }: { data: { charts: { timestamp: number, floorPrice: number }[] } } = await res.json()
    const list = data.charts.map((el) => ({ time: (el.timestamp / 1000) as UTCTimestamp, value: el.floorPrice }))
    const today = new Date()
    const prevDay = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1).getTime() / 1000
    const prevWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7).getTime() / 1000
    const prevMonth = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate()).getTime() / 1000
    const prev3Month = new Date(today.getFullYear(), today.getMonth() - 3, today.getDate()).getTime() / 1000
    const prevYear = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate()).getTime() / 1000
    const prevYTD = new Date(today.getFullYear().toString()).getTime() / 1000

    switch (range) {
      case ('1D'): return list.filter((el) => prevDay < el.time)
      case ('7D'): return list.filter((el) => prevWeek < el.time)
      case ('1M'): return list.filter((el) => prevMonth < el.time)
      case ('3M'): return list.filter((el) => prev3Month < el.time)
      case ('1Y'): return list.filter((el) => prevYear < el.time)
      case ('YTD'): return list.filter((el) => prevYTD < el.time)
      default: return list
    }
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
    return data.items
  }
  return []
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
