import {
  Box,
  Heading, HStack, Text, VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'
import { exportableLoader } from '../../image-loader'

const ContactInfo: FC = () => (
  <VStack spacing={5} align='start' w='full'>
    <Link href='/' passHref>
      <Heading as='h2' size='lg' cursor='pointer'>
        Cryptogic
      </Heading>
    </Link>
    <Text fontSize='14'>
      <Image loader={exportableLoader} src='/assets/img/location.svg' alt='location icon' height={15} width={15} />
      {' '}
      Headquarters: Evanston, IL
    </Text>
    <Text fontSize='14'>
      <Image loader={exportableLoader} src='/assets/img/sms.svg' alt='sms icon' height={15} width={15} />
      {' '}
      Email:
      {' '}
      <Link href={'mailto:info@cryptogic.com'} passHref >
        <Text as='span' variant='link'>info@cryptogic.com</Text>
      </Link>
    </Text>
    <Text fontSize='14'>
      <Image loader={exportableLoader} src='/assets/img/call.svg' alt='call icon' height={15} width={15} />
      {' '}
      Phone: + 1 000-000-0000
    </Text>
    <HStack spacing={3}>
      <Box cursor='pointer'>
        <Link href={'https://www.linkedin.com/company/cryptogic-com/'} passHref>
          <Image
            loader={exportableLoader}
            src='/assets/img/linkedin.svg'
            alt='linkedin icon'
            height={25}
            width={25}
          />
        </Link>
      </Box>
      <Box cursor='pointer'>
        <Link href={'https://www.facebook.com/cryptogic/'} passHref>
          <Image
            loader={exportableLoader}
            src='/assets/img/facebook.svg'
            alt='facebook icon'
            height={25}
            width={25}
          />
        </Link>
      </Box>
      <Box cursor='pointer'>
        <Link href={'https://twitter.com/cryptogic_com'} passHref>
          <Image
            loader={exportableLoader}
            src='/assets/img/twitter.svg'
            alt='twitter icon'
            height={25}
            width={25}
          />
        </Link>
      </Box>
      <Box cursor='pointer'>
        <Link href={'https://www.youtube.com/Cryptogic'} passHref>
          <Image
            loader={exportableLoader}
            src='/assets/img/yootube.svg'
            alt='yootube icon'
            height={25}
            width={25}
          />
        </Link>
      </Box>
    </HStack>
  </VStack>
)
export default ContactInfo
