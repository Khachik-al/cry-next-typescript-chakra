import { Box, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import PageLayout from '../../../../components/PageLayout/PageLayout'
import PageMeta from '../../../../components/PageMeta/PageMeta'

type Props = {}

const pair: NextPage<Props> = () => (
  <PageMeta>
    <PageLayout>
      <Box mt={10}>
        <Text fontWeight='bold'>Pair</Text>
      </Box>
    </PageLayout>
  </PageMeta>
)

export default pair
