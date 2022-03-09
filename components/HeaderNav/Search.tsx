import { Search2Icon } from '@chakra-ui/icons'
import {
  Box, CloseButton, Flex, Input, InputGroup, InputLeftElement,
} from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
  onClose: () => void;
}

const Search: FC<Props> = ({ onClose }) => (
  <Flex justify='space-between'>
    <Box w={[64, 72]}>
      <InputGroup>
        <InputLeftElement
          pointerEvents='none'
        >
          <Search2Icon color='gray.300' />
        </InputLeftElement>
        <Input type='text' placeholder='What are you looking for?' />
      </InputGroup>
    </Box>
    <CloseButton onClick={onClose} size='lg' />
  </Flex>
)

export default Search
