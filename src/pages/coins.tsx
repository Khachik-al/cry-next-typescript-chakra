import { Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Link from 'next/link';
import PageLayout from '../../components/PageLayout/PageLayout';
import PageMeta from '../../components/PageMeta/PageMeta';


const Coins: NextPage = () => {
  return (
    <PageMeta title='Coins'>
      <PageLayout>
        <Box mr='10%' ml='10%' mt={10}>
          <Text fontSize={20} fontWeight='bold'>
            Coins
          </Text>
          {[
            { name: 'Bitcoin', ticker: 'bitcoin' },
            { name: 'Etherium', ticker: 'etherium' },
            { name: 'BNB', ticker: 'bnb' },
          ].map((el) =>
            <Link href={`/ticker/${el.ticker}`}>
              <Text cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                {el.name}
              </Text>
            </Link>
          )}
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

export default Coins;
