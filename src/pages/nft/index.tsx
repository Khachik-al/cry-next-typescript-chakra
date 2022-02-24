import { Box, Text } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout/PageLayout'
import PageMeta from '../../../components/PageMeta/PageMeta'


interface Props {
  data: any[];
}

const Nfts: NextPage<Props> = ({ data }) => {
  return (
    <PageMeta title='Nfts'>
      <PageLayout>
        <Box mr='10%' ml='10%' mt={10}>
          <Text fontSize={20} fontWeight='bold'>
            Top NFT Rankings
          </Text>
          {data.map((el) =>
            <Link href={`/nft/${el.ticker}`}>
              <Text cursor='pointer' _hover={{ textDecoration: 'underline' }} mt={5}>
                {el.name}
              </Text>
            </Link>
          )}
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = [
    { name: 'Cryptopunks', ticker: 'cryptopunks' },
    { name: 'Azuki', ticker: 'azuki' },
    { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
    { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
    { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
    { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
    { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
    { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
    { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
  ]

  return {
    props: { data }
  }
}

export default Nfts