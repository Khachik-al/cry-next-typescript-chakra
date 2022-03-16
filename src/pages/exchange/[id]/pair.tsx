import { Container, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import PageLayout from '../../../components/PageLayout/PageLayout'
import PageMeta from '../../../components/PageMeta/PageMeta'

type Props = {}

const pair: NextPage<Props> = () => (
  <PageMeta>
    <PageLayout>
      <Container variant='main'>
        <Text fontWeight='bold'>Pair</Text>
      </Container>
    </PageLayout>
  </PageMeta>
)

export default pair
