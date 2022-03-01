import { Button, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {

}

const Flow1: FC<Props> = () => {
  const router = useRouter()

  return (
    <>
      <Flex justify='center'>
        <Text fontSize={['3xl', '4xl', '5xl']} mb={30} fontWeight='black'>Choose your plan</Text>
      </Flex>
      <Flex justify='center' mt={12}>
        <Button
          onClick={() => router.push('/signup?flow=2')}
          _hover={{ opacity: '0.9' }}
          _focus={{}}
        >
          7 day trial for $7
        </Button>
      </Flex>
    </>
  )
}

export default Flow1
