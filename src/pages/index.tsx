import { Box, Text, Skeleton } from '@chakra-ui/react'
import type { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'

const Home: NextPage = () => (
  <PageMeta title="home">
    <PageLayout>
      <Box mr="10%" ml="10%" mt={10}>
        <Text fontSize={20} mb={2}>Home page</Text>
        <Skeleton height="20px" width="400px" mb={2} />
        <Skeleton height="20px" width="700px" mb={2} />
        <Skeleton height="20px" />
      </Box>
    </PageLayout>
  </PageMeta>
)

export default Home
