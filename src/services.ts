import { GetStaticPropsContext, PreviewData } from 'next'
import { ParsedUrlQuery } from 'querystring'

export const nftList = async (offset: number, limit: number) => {
  try {
    const res = await fetch(`${process.env.CRYPTOGIC_API}/section/nft?offset=${offset}&limit=${limit}`)
    const { data } = await res.json()
    return data
  } catch {

  }
}

export const nftItem = async (context: GetStaticPropsContext<ParsedUrlQuery, PreviewData>) => {
  try {
    const res = await fetch(`${process.env.CRYPTOGIC_API}/section/nft/details/${context?.params?.id}`)
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
