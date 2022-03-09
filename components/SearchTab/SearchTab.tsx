import {
  Box, HStack, Input, InputGroup, InputLeftElement, Text, useMediaQuery,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'
import { SearchTabBlock } from '../../src/styles/components/Customs'

interface Props { }

const SearchTab: FC<Props> = () => {
  const [isBrowser] = useMediaQuery('(min-width: 1110px)')
  return (
    <SearchTabBlock
      minH={isBrowser ? 16 : 10}
      h={isBrowser ? 16 : 10}
      pt={isBrowser ? 32 : 20}
      pb={isBrowser ? 8 : 4}
    >
      <HStack spacing={[3, 7]}>
        {[
          { name: 'Cryptos', value: ' 17,275' },
          { name: 'Exchanges', value: ' 457' },
          { name: 'Marketcap', value: ' $1,730,091,106,147' },
        ].map((el) => (
          <Box fontSize={[11, 12]}>
            {el.name}
            :
            {' '}
            <Text color='primary.100' display='inline'>{el.value}</Text>
          </Box>
        ))}
        {[
          { name: 'BTC', value: ' $37,490.48' },
          { name: 'ETH', value: ' $2,669.99' },
        ].map((el) => (
          <Box fontSize={12} display={['none', 'none', 'block']}>
            {el.name}
            :
            {' '}
            <Text color='primary.100' display='inline'>{el.value}</Text>
          </Box>
        ))}
      </HStack>
      {isBrowser && (
        <Box>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
            >
              <Image src='/search_icon_input.svg' height={20} width={20} />
            </InputLeftElement>
            <Input type='text' placeholder='Serach' />
          </InputGroup>
        </Box>
      )}
    </SearchTabBlock>
  )
}

export default SearchTab
