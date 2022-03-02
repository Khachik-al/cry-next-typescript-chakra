import {
  Box, Flex, HStack, Text,
} from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
  flow: string
}

const FlowHighlights: FC<Props> = ({ flow }) => (
  <>
    <Flex mx='10%' mt={10} justify='center'>
      <Text fontSize='sm' mb={6} color='green.100' fontWeight='black'>Signup flow Highlight</Text>
    </Flex>
    <HStack spacing={2} justify='center'>
      <Box textAlign='center'>
        <Text fontSize={10}>Plan</Text>
        <Box h={1} w={20} borderRadius='xl' background={flow === '1' ? 'green.100' : 'grey.light'} />
      </Box>
      <Box textAlign='center'>
        <Text fontSize={10}>Details</Text>
        <Box h={1} w={20} borderRadius='xl' background={flow === '2' ? 'green.100' : 'grey.light'} />
      </Box>
      <Box textAlign='center'>
        <Text fontSize={10}>Checkout</Text>
        <Box h={1} w={20} borderRadius='xl' background={flow === '3' ? 'green.100' : 'grey.light'} />
      </Box>
    </HStack>
  </>
)

export default FlowHighlights
