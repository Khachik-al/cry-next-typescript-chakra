import { Box, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'

const Exchanges: NextPage = () => {
  return (
    <PageMeta title='Exchanges'>
      <PageLayout>
        <Box mr='10%' ml='10%' mt={10}>
          <Text fontSize={20}>Exchanges</Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias nesciunt, atque quaerat eaque debitis aliquam provident, odio saepe a dolorem excepturi deserunt fuga? Fuga saepe eius, veritatis nihil eum itaque!
          </Text>
        </Box>
      </PageLayout>
    </PageMeta>
  )
}

export default Exchanges
