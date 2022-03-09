import { Container } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import SignUpComp from '../../components/SignUp/SignUpComp'

const SignUp: NextPage = () => (
  <PageMeta title='home'>
    <PageLayout>
      <Container variant='main'>
        <SignUpComp />
      </Container>
    </PageLayout>
  </PageMeta>
)

export default SignUp
