import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import SignUpComp from '../../components/SignUp/SignUpComp'

const SignUp: NextPage = () => (
  <PageMeta title='home'>
    <PageLayout>
      <Box mt={10}>
        <SignUpComp />
      </Box>
    </PageLayout>
  </PageMeta>
)

export default SignUp
