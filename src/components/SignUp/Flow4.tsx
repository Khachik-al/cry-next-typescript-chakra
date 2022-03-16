import {
  Button, Flex, Heading,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {

}

const Flow4: FC<Props> = () => {
  const router = useRouter()
  return (
    <>
      <Flex justify='center'>
        <Heading fontSize={['3xl', '4xl', '5xl']} mb={30} fontWeight='black'>Order Placed</Heading>
      </Flex>
      <Flex justify='center' mt={12}>
        <Button
          onClick={() => router.push('/signup?flow=1')}
        >
          Resend Verification
        </Button>
      </Flex>
    </>
  )
}

export default Flow4
