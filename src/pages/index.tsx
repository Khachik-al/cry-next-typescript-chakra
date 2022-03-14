import { Text, Skeleton, Container } from '@chakra-ui/react'
import type { NextPage } from 'next'
import PageLayout from '../components/PageLayout/PageLayout'
import PageMeta from '../components/PageMeta/PageMeta'

const Home: NextPage = () => (
  <PageMeta title='home'>
    <PageLayout>
      <Container variant='main'>
        <Text fontSize={20} mb={2}>Home page</Text>
        <Skeleton height='20px' mb={2} />
        <Skeleton height='20px' mb={2} />
        <Skeleton height='20px' />
      </Container>
    </PageLayout>
  </PageMeta>
)

export default Home
