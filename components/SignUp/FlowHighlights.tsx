import { Box, Flex, Text } from '@chakra-ui/react'
import React, { FC } from 'react'

interface Props {
  flow: string
}

const FlowHighlights: FC<Props> = ({ flow }) => (
  <>
    <Flex mr="10%" ml="10%" mt={10} justify='center'>
      <Text fontSize='14px' mb='24px' color='#3EAE7D' fontWeight='900'>Signup flow Highlight</Text>
    </Flex>
    <Flex justify='center'>
      <Box textAlign='center'>
        <Text fontSize='10px'>Plan</Text>
        <Box height='4px' width='79px' borderRadius='8px' background={flow === '1' ? '#3EAE7D' : '#ECECEC'} />
      </Box>
      <Box textAlign='center' ml='5px'>
        <Text fontSize='10px'>Details</Text>
        <Box height='4px' width='79px' borderRadius='8px' background={flow === '2' ? '#3EAE7D' : '#ECECEC'} />
      </Box>
      <Box textAlign='center' ml='5px'>
        <Text fontSize='10px'>Checkout</Text>
        <Box height='4px' width='79px' borderRadius='8px' background={flow === '3' ? '#3EAE7D' : '#ECECEC'} />
      </Box>
    </Flex>
  </>
)

export default FlowHighlights
