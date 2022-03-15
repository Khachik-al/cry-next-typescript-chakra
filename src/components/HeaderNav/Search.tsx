import {
  Box, CloseButton, Flex, Input, InputGroup, InputLeftElement,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'
import customLoader from '../../../custom-loader'

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
          <Image loader={customLoader} src='/assets/img/search_icon_input.svg' alt='search icon' height={20} width={20} />
        </InputLeftElement>
        <Input type='text' placeholder='What are you looking for?' />
      </InputGroup>
    </Box>
    <CloseButton onClick={onClose} size='lg' />
  </Flex>
)

export default Search
