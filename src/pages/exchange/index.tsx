import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout/PageLayout'
import PageMeta from '../../../components/PageMeta/PageMeta'

const Exchanges: NextPage = () => {
  return (
    <PageMeta title='Exchanges'>
      <PageLayout>
        <Box mr='10%' ml='10%' mt={10}>
          <Text fontSize={20} fontWeight='bold'>
            Top Cryptocurrency Exchanges
          </Text>
          {[
            { name: 'Binance', ticker: 'binance' },
            { name: 'OKX', ticker: 'okx' },
            { name: 'Coinbase Exchange', ticker: 'coinbase_exchange' },
            { name: 'Coinbase Exchange', ticker: 'coinbase_exchange' },
            { name: 'Coinbase Exchange', ticker: 'coinbase_exchange' },
            { name: 'Coinbase Exchange', ticker: 'coinbase_exchange' },
            { name: 'Coinbase Exchange', ticker: 'coinbase_exchange' },
          ].map((el) =>
            <Link href={`/exchange/${el.ticker}`}>
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

export default Exchanges
