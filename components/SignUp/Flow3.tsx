import { Button, Flex, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {

}

const Flow3: FC<Props> = () => {
  const router = useRouter()
  return (
    <>
      <Flex justify='center'>
        <Text fontSize='48px' mb={30} fontWeight='900'>Start your 7 day trial</Text>
      </Flex>
      <Flex justify='center' mt='50px'>
      <Button
          onClick={() => router.push('/signup?flow=4')}
          height='56px'
          width='344px'
          background='#3EAE7D'
          borderRadius='60px'
          boxShadow='0px 5px 15px rgba(62, 174, 125, 0.3)'
          color='#FCFCFC'
          fontSize='16px'
          _hover={{ opacity: '0.9' }}
        >
          Place Older
        </Button>
      </Flex>
    </>
  )
}

export default Flow3
