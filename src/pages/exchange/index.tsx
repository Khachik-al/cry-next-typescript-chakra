import { Box, Text } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout/PageLayout'
import PageMeta from '../../../components/PageMeta/PageMeta'

interface Props {
  data: any[]
}

const Exchanges: NextPage<Props> = ({ data }) => (
  <PageMeta title='Exchanges'>
    <PageLayout>
      <Box mt={10}>
        <Text fontSize={20} fontWeight='bold'>
          Top Cryptocurrency Exchanges
        </Text>
        {data.map((el) => (
          <Link href={`/exchange/${el.ticker}`} passHref>
            <Text cursor='pointer' _hover={{ textDecoration: 'underline' }} mt={5}>
              {el.name}
            </Text>
          </Link>
        ))}
      </Box>
    </PageLayout>
  </PageMeta>
)

export const getStaticProps: GetStaticProps = async () => {
  const data = [
    { name: 'Binance', ticker: 'binance' },
    { name: 'OKX', ticker: 'okx' },
    { name: 'Coinbase Exchange', ticker: 'coinbase_exchange' },
    { name: 'Coinbase Exchange', ticker: 'coinbase_exchange' },
    { name: 'Coinbase Exchange', ticker: 'coinbase_exchange' },
    { name: 'Coinbase Exchange', ticker: 'coinbase_exchange' },
    { name: 'Coinbase Exchange', ticker: 'coinbase_exchange' },
  ]

  return {
    props: { data },
  }
}

export default Exchanges
