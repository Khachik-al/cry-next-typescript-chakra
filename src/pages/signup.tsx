import { NextPage } from 'next'
import React from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import SignUpComp from '../../components/SignUp/SignUpComp'
import { Main } from '../styles/components/Customs'

const SignUp: NextPage = () => (
  <PageMeta title='home'>
    <PageLayout>
      <Main>
        <SignUpComp />
      </Main>
    </PageLayout>
  </PageMeta>
)

export default SignUp
