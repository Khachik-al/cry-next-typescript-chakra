import {
  Box,
  Heading, HStack, Text, VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

const ContactInfo: FC = () => (
  <VStack spacing={5} align='start' w='full'>
    <Link href='/' passHref>
      <Heading as='h2' size='lg' cursor='pointer'>
        Cryptogic
      </Heading>
    </Link>
    <HStack align='start' spacing={1}>
      <Image src='/assets/img/location.svg' height={15} width={15} layout='fixed' />
      <Text fontSize='14'>Address line1, Address line 2, Postcode, City, State, Country</Text>
    </HStack>
    <Text fontSize='14'>
      <Image src='/assets/img/sms.svg' height={15} width={15} />
      {' '}
      Email: info@cryptogic.com
    </Text>
    <Text fontSize='14'>
      <Image src='/assets/img/call.svg' height={15} width={15} />
      {' '}
      Phone: + 1 000-000-0000
    </Text>
    <HStack spacing={3}>
      <Box><Image src='/assets/img/linkedin.svg' height={25} width={25} layout='fixed' /></Box>
      <Box><Image src='/assets/img/facebook.svg' height={25} width={25} layout='fixed' /></Box>
      <Box><Image src='/assets/img/twitter.svg' height={25} width={25} layout='fixed' /></Box>
      <Box><Image src='/assets/img/yootube.svg' height={25} width={25} layout='fixed' /></Box>
    </HStack>
  </VStack>
)
export default ContactInfo
