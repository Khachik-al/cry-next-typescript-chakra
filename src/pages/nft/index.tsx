import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout/PageLayout'
import PageMeta from '../../../components/PageMeta/PageMeta'


const Nfts: NextPage = () => {
  return (
    <PageMeta title='Nfts'>
      <PageLayout>
        <Box mr='10%' ml='10%' mt={10}>
          <Text fontSize={20} fontWeight='bold'>
            Top NFT Rankings
          </Text>
          {[
            { name: 'Cryptopunks', ticker: 'cryptopunks' },
            { name: 'Azuki', ticker: 'azuki' },
            { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
            { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
            { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
            { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
            { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
            { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
            { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
          ].map((el) =>
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

export default Nfts
