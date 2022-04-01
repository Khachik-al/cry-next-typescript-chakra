import { Box, Container, Flex, Heading, Skeleton, Stack, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'
import { exportableLoader } from '../../image-loader'

const CryptogicFeatures: FC = () => {
  return (
    <>
      <VStack textAlign='center' mt={20} px='10%'>
        <Flex justify='center'><Skeleton h={4} mt={16} w={32} /></Flex>
        <Heading fontSize={[32, 32, 36, 48]}>
          Cryptogic <Text as='span' color='primary.100'>Features</Text>
        </Heading>
        <Text color='secondary_text' fontSize={[12, 12, 14, 16]} mt={5}>
          Our platform is built by a team of passionate crypto investors with deep experience in
          computer science, data modeling, and financial markets. We’ve built an exclusive platform
          with premium features that you can’t find anywhere else:
        </Text>
      </VStack>
      <Stack direction={['column', 'column', 'row']} spacing={7} mt={10}>
        <Container variant='card' p={5}>
          <VStack align='start'>
            <Stack direction={['row', 'column']} spacing={7} align={['center', 'start']}>
              <Box h={20} w={20} position='relative'>
                <Image
                  loader={exportableLoader}
                  src='/assets/img/target.svg'
                  alt='image'
                  layout='fill'
                />
              </Box>
              <Text fontWeight='black'>
                Crypto Ratings
              </Text>
            </Stack>
            <Text color='secondary_text' >
              Browse ratings in real-time. Cryptogic provides both Fundamental ratings as well as Technical ratings for over 1,200 cryptocurrencies.
            </Text>
          </VStack>
        </Container>
        <Container variant='card' p={5}>
          <VStack align='start'>
            <Stack direction={['row', 'column']} spacing={7} align={['center', 'start']}>
              <Box h={20} w={20} position='relative'>
                <Image
                  loader={exportableLoader}
                  src='/assets/img/star.svg'
                  alt='image'
                  layout='fill'
                />
              </Box>
              <Text fontWeight='black'>
                Customizable Watchlist
              </Text>
            </Stack>
            <Text color='secondary_text' >
              Create your own watchlist of your favorite cryptocurrencies, so you can stay up to date with our intuitive platform.
            </Text>
          </VStack>
        </Container>
        <Container variant='card' p={5}>
          <VStack align='start'>
            <Stack direction={['row', 'column']} spacing={7} align={['center', 'start']}>
              <Box h={20} w={20} position='relative'>
                <Image
                  loader={exportableLoader}
                  src='/assets/img/notify_heart.svg'
                  alt='image'
                  layout='fill'
                />
              </Box>
              <Text fontWeight='black'>
                Premium Community
              </Text>
            </Stack>
            <Text color='secondary_text' >
              Interact with other bold crypto investors and Cryptogic analysts. Our premium members-only chat is available 24/7.
            </Text>
          </VStack>
        </Container>
      </Stack>
    </>
  )
}
export default CryptogicFeatures
