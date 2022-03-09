import {
  Container, Text, Stack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'
import Flow1 from './comps/Flow1'
import Flow2 from './comps/Flow2'
import Flow3 from './comps/Flow3'
import warningText from './comps/Helpers'

type Props = {}

const Footer: FC<Props> = () => (
  <>
    <Container variant='important_disclaimer'>
      <Image src='/danger.svg' height={15} width={15} />
      <Text as='span' color='#F04C4C'> IMPORTANT DISCLAIMER: </Text>
      {warningText}
    </Container>
    <Container variant='footer'>
      <Stack direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']} spacing={9}>
        <Flow1 />
        <Flow2 />
        <Flow3 />
      </Stack>
    </Container>
  </>
)

export default Footer
