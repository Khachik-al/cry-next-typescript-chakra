import {
  Box,
  Button, Flex, Heading, Input, Text, VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC, useCallback, useState } from 'react'
import { exportableLoader } from '../../image-loader'
import { verifyCode } from '../../services'
import Login from '../Login'

interface Props {
  state: {
    full_name: string,
    email: string,
    password: string,
    address_1: string,
    address_2: string,
    city: string,
    state: string,
    zipe_code: string,
    country: string,
  }
}

const Flow4: FC<Props> = ({ state }) => {
  const router = useRouter()
  const [verificationCode, setVerificationCode] = useState('')
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const onCloseLogin = useCallback(() => setIsOpenLogin(false), [])

  const handleConfirmSignUp = async () => {
    await verifyCode({ type: 'ConfirmSignUp', email: state.email, code: verificationCode, router })
  }
  return (
    <>
      <Flex justify='center'>
        <VStack spacing={4}>
          <Image loader={exportableLoader} src='/assets/img/order_placed.png' alt='image' height={288} width={369} />
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
              value={verificationCode}
              onChange={(e) => setVerificationCode(e.target.value)}
            />
            <Button
              w='full'
              mt={6}
              onClick={() => handleConfirmSignUp()}
            >
              Resend Verification
            </Button>
            <Login isOpen={isOpenLogin} onClose={onCloseLogin} />
          </Box>
        </VStack>
      </Flex>
    </>
  )
}

export default Flow4
