import {
  Button, Flex, Heading,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {

}

const Flow1: FC<Props> = () => {
  const router = useRouter()

  return (
    <>
      <Flex justify='center'>
        <Heading fontSize={['3xl', '4xl', '5xl']} mb={30}>Choose your plan</Heading>
      </Flex>
      <Flex justify='center' mt={12}>
        <Button
          onClick={() => router.push('/signup?flow=2')}
        >
          7 day trial for $7
        </Button>
      </Flex>
    </>
  )
}

export default Flow1
