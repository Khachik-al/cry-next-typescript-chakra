import {
  Button, Flex, Heading, Text, VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import React, { FC, useCallback, useState } from 'react'
import { exportableLoader } from '../../image-loader'
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

const Flow4: FC<Props> = () => {
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const onCloseLogin = useCallback(() => setIsOpenLogin(false), [])

  return (
    <>
      <Flex justify='center'>
        <VStack spacing={4}>
          <Image loader={exportableLoader} src='/assets/img/order_placed.png' alt='image' height={288} width={369} unoptimized />
          <Heading fontSize={['3xl', '4xl', '5xl']} mb={30} fontWeight='black'>Order Placed</Heading>
          <Text color='primary.100' size='md'>Order #1344412</Text>
          <Button
            w='full'
            mt={6}
            onClick={() => setIsOpenLogin(true)}
          >
            Log in
          </Button>
          <Login isOpen={isOpenLogin} onClose={onCloseLogin} />
        </VStack>
      </Flex>
    </>
  )
}

export default Flow4
