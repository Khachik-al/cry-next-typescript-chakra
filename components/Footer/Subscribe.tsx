import {
  Button, Input, Text, VStack,
} from '@chakra-ui/react'
import { FC } from 'react'

const Flow3: FC = () => (
  <VStack align='start' w='full' spacing={3}>
    <Text fontSize='14'>Interested to stay up-to-date with cryptocurrencies?</Text>
    <Text fontSize='12' color='secondary_text'>
      Get the latest crypto news, updates, and reports by subscribing to our free newsletter.
    </Text>
    <Input placeholder='example@email.com' maxWidth={64} />
    <Button>Subscribe</Button>
  </VStack>
)
export default Flow3
