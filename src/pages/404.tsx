import { Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import Main from '../styles/components/Main'

const NotFound: NextPage = () => (
  <PageMeta title='404'>
    <PageLayout>
      <Main mt={10}>
        <Text fontSize={20}>
          404 not found error
        </Text>
      </Main>
    </PageLayout>
  </PageMeta>
)

export default NotFound
