import { Box, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import PageLayout from '../../../../components/PageLayout/PageLayout'
import PageMeta from '../../../../components/PageMeta/PageMeta'
import Main from '../../../styles/components/Main'

type Props = {}

const pair: NextPage<Props> = () => (
  <PageMeta>
    <PageLayout>
      <Main mt={10}>
        <Text fontWeight='bold'>Pair</Text>
      </Main>
    </PageLayout>
  </PageMeta>
)

export default pair
