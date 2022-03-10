import {
  Container, Text, Stack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'
import ContactInfo from './ContactInfo'
import Links from './Links'
import Subscribe from './Subscribe'
import disclaimer from './Disclaimer'

type Props = {}

const Footer: FC<Props> = () => (
  <>
    <Container variant='disclaimer'>
      <Image src='/assets/img/danger.svg' height={15} width={15} />
      <Text as='span' color='danger'> IMPORTANT DISCLAIMER: </Text>
      {disclaimer}
    </Container>
    <Container variant='footer'>
      <Stack direction={['column-reverse', 'column-reverse', 'column-reverse', 'row']} spacing={9}>
        <ContactInfo />
        <Links />
        <Subscribe />
      </Stack>
    </Container>
  </>
)

export default Footer
