import {
  Text, Input, Box, Select, Flex, Button, Stack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

const Flow2: FC = () => {
  const router = useRouter()

  return (

    <>
      <Flex justify='center'>
        <Text fontSize={['3xl', '4xl', '5xl']} mb={30} fontWeight='black'>Start your 7 day trial</Text>
      </Flex>
      <form>
        <Stack spacing={10} direction={['column', 'column', 'row']}>
          <Box w='full'>
            <Text fontSize={18} mb={30}>Personal Details</Text>
            <Text fontSize={12}>Full name</Text>
            <Input focusBorderColor='none' borderRadius='xl' fontSize='sm' />
            <Text fontSize={12} mt={3}>Email Address</Text>
            <Input focusBorderColor='none' borderRadius='xl' fontSize='sm' />
            <Text fontSize={12} mt={3}>Password</Text>
            <Input focusBorderColor='none' borderRadius='xl' fontSize='sm' />
          </Box>
          <Box w='full'>
            <Text fontSize={18} mb={30}>Address</Text>
            <Text fontSize={12}>Address line 1</Text>
            <Input focusBorderColor='none' borderRadius='xl' fontSize='sm' />
            <Text fontSize={12} mt={3}>Address line 2</Text>
            <Input focusBorderColor='none' borderRadius='xl' fontSize='sm' />
            <Text fontSize={12} mt={3}>City</Text>
            <Input focusBorderColor='none' borderRadius='xl' fontSize='sm' />
          </Box>
          <Box w='full'>
            <Text fontSize={12} mt={[null, null, '56px']}>State</Text>
            <Input focusBorderColor='none' borderRadius='xl' fontSize='sm' />
            <Text fontSize={12} mt={3}>Zipe Code</Text>
            <Input focusBorderColor='none' borderRadius='xl' fontSize='sm' />
            <Text fontSize={12} mt={3}>Country</Text>
            <Select focusBorderColor='none' borderRadius='xl' fontSize='sm'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </Box>
        </Stack>
      </form>
      <Flex justify='center' mt={10}>
        <Button
          onClick={() => router.push('/signup?flow=3')}
          _focus={{}}
          _hover={{ opacity: '0.9' }}
        >
          Payment method
        </Button>
      </Flex>
    </>
  )
}

export default Flow2
