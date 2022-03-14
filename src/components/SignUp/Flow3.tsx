import {
  Box, Button, Flex, Heading, HStack, Input, Select, Stack, Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React, { FC } from 'react'

interface Props {

}

const Flow3: FC<Props> = () => {
  const router = useRouter()
  return (
    <>
      <Flex justify='center'>
        <Heading fontSize={['3xl', '4xl', '5xl']} mb={30}>Start your 7 day trial</Heading>
      </Flex>
      <Stack direction={['column', 'column', 'row']} spacing={5} px={[null, null, null, null, 56]}>
        <Box w='full'>
          <Text fontSize={18} mb={30}>Payment Method</Text>
          <Text fontSize='sm'>Card Number</Text>
          <Input />
          <HStack spacing={5}>
            <Box w='full'>
              <Text fontSize='sm' mt={3}>Expiry Date</Text>
              <Input />
            </Box>
            <Box w='full'>
              <Text fontSize='sm' mt={3}>CVC/CVV</Text>
              <Input />
            </Box>
          </HStack>
        </Box>
        <Box w='full'>
          <Text fontSize={18} mb={30}>Order Summary</Text>
          <Text fontSize={12}>Select Plan</Text>
          <Select>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
        </Box>
      </Stack>
      <Flex justify='center' mt={12}>
        <Button
          onClick={() => router.push('/signup?flow=4')}

        >
          Place Older
        </Button>
      </Flex>
    </>
  )
}

export default Flow3
