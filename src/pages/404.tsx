import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'

const NotFound: NextPage = () => {
  return (
    <PageMeta title='404'>
      <PageLayout>
        <Box ml={100} mt={10}>
          <Text fontSize={20}>
            Got 404 not found error
          </Text>
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

export default NotFound;
