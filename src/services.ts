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

export const nftMarketPlace = async ({ slug, limit, cursor }: { slug: string, limit: number, cursor: string }) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_CRYPTOGIC_API}/section/nft/market/${slug}?limit=${limit}&cursor=${cursor}`)
  const { data } = await res.json()
  return data
}