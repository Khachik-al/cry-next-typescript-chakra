import { Text, Input, Box, Select, Flex, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

const Flow2: FC = () => {
  const router = useRouter()

  return (

    <>
      <Flex justify='center'>
        <Text fontSize='48px' mb={30} fontWeight='900'>Start your 7 day trial</Text>
      </Flex>
      <Flex>
        <Box width='100%' pr={5}>
          <Text fontSize={18} mb={30}>Personal Details</Text>
          <Text fontSize={12}>Full name</Text>
          <Input focusBorderColor='none' size='md' borderRadius={10} fontSize={12} />
          <Text fontSize={12} mt={3}>Email Address</Text>
          <Input focusBorderColor='none' size='md' borderRadius={10} fontSize={12} />
          <Text fontSize={12} mt={3}>Password</Text>
          <Input focusBorderColor='none' size='md' borderRadius={10} fontSize={12} />
        </Box>
        <Box width='100%' pl={5} pr={5}>
          <Text fontSize={18} mb={30}>Address</Text>
          <Text fontSize={12}>Address line 1</Text>
          <Input focusBorderColor='none' size='md' borderRadius={10} fontSize={12} />
          <Text fontSize={12} mt={3}>Address line 2</Text>
          <Input focusBorderColor='none' size='md' borderRadius={10} fontSize={12} />
          <Text fontSize={12} mt={3}>City</Text>
          <Input focusBorderColor='none' size='md' borderRadius={10} fontSize={12} />
        </Box>
        <Box width='100%' pl={5} pt='56px'>
          <Text fontSize={12}>State</Text>
          <Input focusBorderColor='none' size='md' borderRadius={10} fontSize={12} />
          <Text fontSize={12} mt={3}>Zipe Code</Text>
          <Input focusBorderColor='none' size='md' borderRadius={10} fontSize={12} />
          <Text fontSize={12} mt={3}>Country</Text>
          <Select focusBorderColor='none' size='md' borderRadius={10} fontSize={12} >
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Box>
      </Flex>
      <Flex justify='center' mt='50px'>
      <Button
          onClick={() => router.push('/signup?flow=3')}
          height='56px'
          width='344px'
          background='#3EAE7D'
          borderRadius='60px'
          boxShadow='0px 5px 15px rgba(62, 174, 125, 0.3)'
          color='#FCFCFC'
          fontSize='16px'
          _hover={{ opacity: '0.9' }}
        >
          Payment method
        </Button>
      </Flex>

    </>
  )
}

export default Flow2
