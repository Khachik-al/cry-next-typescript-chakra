import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'

const NotFound: NextPage = () => {
  return (
    <PageMeta title='404'>
      <PageLayout>
        <Box mr='10%' ml='10%' mt={10}>
          <Text fontSize={20}>
            404 not found error
          </Text>
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

export default NotFound;