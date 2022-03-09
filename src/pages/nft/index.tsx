import { Container, Text } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout/PageLayout'
import PageMeta from '../../../components/PageMeta/PageMeta'

interface Props {
  data: any[];
}

const Nfts: NextPage<Props> = ({ data }) => (
  <PageMeta title='Nfts'>
    <PageLayout>
      <Container variant='main'>
        <Text fontSize={20} fontWeight='bold'>
          Top NFT Rankings
        </Text>
        {data.map((el) => (
          <Link href={`/nft/${el.ticker}`} passHref>
            <Text cursor='pointer' _hover={{ textDecoration: 'underline' }} mt={5}>
              {el.name}
            </Text>
          </Link>
        ))}
      </Container>
    </PageLayout>
  </PageMeta>
)

export const getStaticProps: GetStaticProps = async () => {
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
    props: { data },
  }
}

export default Nfts
