import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'


const Nfts: NextPage = () => {
  return (
    <PageMeta title='Nfts'>
      <PageLayout>
        <Box ml={100} mt={10}>
          <Text fontSize={20}>
            Nfts
          </Text>
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

export default Nfts
