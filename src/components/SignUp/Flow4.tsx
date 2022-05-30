import {
  Box,
  Button, Flex, Heading, Input, Text, VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import { exportableLoader } from '../../image-loader'

interface Props {

}

const Flow4: FC<Props> = () => {
  const router = useRouter()
  return (
    <>
      <Flex justify='center'>
        <VStack spacing={4}>
          <Image loader={exportableLoader} src='/assets/img/order_placed.png' alt='image' height={288} width={369} unoptimized />
          <Heading fontSize={['3xl', '4xl', '5xl']} mb={30} fontWeight='black'>Order Placed</Heading>
          <Text color='primary.100' size='md'>Order #1344412</Text>
          <Text color='secondary_text' maxW={96} textAlign='center'>
            We have sent you a verification email.
            Just in case you haven’t received your verification email, you can resend it here in the form below
          </Text>
          <Box maxW={96}>
            <Text variant='label_input'>Email Address</Text>
            <Input
              name='email'
              type='email'
              placeholder='example@email.com'
            />
            <Button
              w='full'
              mt={6}
              onClick={() => router.push('/signup?flow=1')}
            >
              Resend Verification
            </Button>
          </Box>
        </VStack>
      </Flex>
    </>
  )
}

export default Flow4
