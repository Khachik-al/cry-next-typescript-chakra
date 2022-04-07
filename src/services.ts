export const nftList = async ({ offset, limit }: { offset: number, limit: number }) => {
  try {
    const res = await fetch(`${process.env.CRYPTOGIC_API}/section/nft?offset=${offset}&limit=${limit}`)
    const { data } = await res.json()
    return data
  } catch {

  }
}

export const nftItem = async ({ slug }: { slug: string }) => {
  try {
    const res = await fetch(`${process.env.CRYPTOGIC_API}/section/nft/details/${slug}`)
    const { data } = await res.json()
    return data
  } catch {

  }
}

export const nftAll = async () => {
  try {
    const res = await fetch(`${process.env.CRYPTOGIC_API}/section/nft`)
    const { data } = await res.json()
    return data
  } catch {

  }
}
