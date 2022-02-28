import { Button, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {

}

const Flow4: FC<Props> = () => {
  const router = useRouter()
  return (
    <>
      <Flex justify='center'>
        <Text fontSize='5xl' mb={30} fontWeight='black'>Order Placed</Text>
      </Flex>
      <Flex justify='center' mt={12}>
        <Button
          onClick={() => router.push('/signup?flow=1')}
          _focus={{}}
          _hover={{ opacity: '0.9' }}
        >
          Resend Verification
        </Button>
      </Flex>
    </>
  )
}

export default Flow4
