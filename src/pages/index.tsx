import { Box, Text } from '@chakra-ui/react';
import type { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout';
import PageMeta from '../../components/PageMeta/PageMeta';


const Home: NextPage = () => {
  return (
    <PageMeta title='home'>
      <PageLayout>
        <Box mr='10%' ml='10%' mt={10}>
          <Text fontSize={20}>Home page</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt, atque quaerat eaque debitis aliquam provident, odio saepe a dolorem excepturi deserunt fuga? Fuga saepe eius, veritatis nihil eum itaque!
          </Text>
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

export default Home;
