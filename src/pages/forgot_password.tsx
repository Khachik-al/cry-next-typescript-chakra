import { Box, Button, Center, Input, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React from 'react'
import PageLayout from '../components/PageLayout/PageLayout'
import PageMeta from '../components/PageMeta/PageMeta'

const ForgotPassword: NextPage = () => (
  <PageMeta title='home'>
    <PageLayout>
      <Box pt={36} pb={700}>
        <Center>
          <Box w={383}>
            <Text fontSize={20}>Forgot Password?</Text>
            <Text size='sm' color='secondary_text'>Enter your e-mail address</Text>
            <Text variant='label_input' mt={7}>Email</Text>
            <Input
              type='email'
              name='email'
              placeholder='example@email.com'
            />
            <Button w='full' mt={7}>
              Reset Password
            </Button>
          </Box>
        </Center>
      </Box>

    </PageLayout>
  </PageMeta>
)

export default ForgotPassword
