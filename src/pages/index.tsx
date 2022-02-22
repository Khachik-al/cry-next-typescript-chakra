import { Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout';
import PageMeta from '../../components/PageMeta/PageMeta';


const Home: NextPage = () => {
  return (
    <PageMeta title='home'>
      <PageLayout>
        <Box ml={100} mt={10}>
          <Text fontSize={20}>
            Home page
          </Text>
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

export default Home;
