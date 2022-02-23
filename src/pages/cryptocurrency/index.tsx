import { Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Link from 'next/link';
import PageLayout from '../../../components/PageLayout/PageLayout';
import PageMeta from '../../../components/PageMeta/PageMeta';


const Cryptocurrency: NextPage = () => {
  return (
    <PageMeta title='Coins'>
      <PageLayout>
        <Box mr='10%' ml='10%' mt={10}>
          <Text fontSize={20} fontWeight='bold' mb={5}>
            Today's Cryptocurrency Prices by Market Cap
          </Text>
          {[
            { name: 'Bitcoin', ticker: 'bitcoin' },
            { name: 'Etherium', ticker: 'etherium' },
            { name: 'BNB', ticker: 'bnb' },
            { name: 'Tether', ticker: 'tether' },
            { name: 'Tether', ticker: 'tether' },
            { name: 'Tether', ticker: 'tether' },
            { name: 'Tether', ticker: 'tether' },
            { name: 'Tether', ticker: 'tether' },
            { name: 'Tether', ticker: 'tether' },
          ].map((el) =>
            <Link href={`/cryptocurrency/${el.ticker}`}>
              <Text cursor='pointer' _hover={{ textDecoration: 'underline' }} mb={5}>
                {el.name}
              </Text>
            </Link>
          )}
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

export default Cryptocurrency;
