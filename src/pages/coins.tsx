import { Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next'
import Link from 'next/link';
import PageLayout from '../../components/PageLayout/PageLayout';
import PageMeta from '../../components/PageMeta/PageMeta';


const Coins: NextPage = () => {
  return (
    <PageMeta title='Coins'>
      <PageLayout>
        <Box ml={100} mt={10}>
          <Text fontSize={20} fontWeight='bold'>
            Coins
          </Text>
          <Link href='/ticker/bitcoin'>
            <Text cursor='pointer' _hover={{ textDecoration: 'underline' }}>
              Bitcoin
            </Text>
          </Link>
          <Link href='/ticker/etherium'>
            <Text cursor='pointer' _hover={{ textDecoration: 'underline' }}>
              Etherium
            </Text>
          </Link>
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

export default Coins;
