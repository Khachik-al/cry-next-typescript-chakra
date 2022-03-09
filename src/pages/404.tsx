import { Container, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'

const NotFound: NextPage = () => (
  <PageMeta title='404'>
    <PageLayout>
      <Container variant='main'>
        <Text fontSize={20}>
          404 not found error
        </Text>
      </Container>
    </PageLayout>
  </PageMeta>
)

export default NotFound
