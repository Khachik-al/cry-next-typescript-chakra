import {
  Heading, Container, Text, HStack, VStack, Box, Button,
  Flex, Portal, Show, Stack
} from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRef } from 'react'
import ChoosePlan from '../components/ChoosePlan'
import PageLayout from '../components/PageLayout/PageLayout'
import PageMeta from '../components/PageMeta/PageMeta'
import { exportableLoader } from '../image-loader'

const Home: NextPage = () => {
  const mobileBlock = useRef(null)
  const coinListBlock = useRef(null)
  const main = useRef(null)
  return (
    <PageMeta title='home'>
      <PageLayout>
        <Container variant='main' ref={main}>
          <Flex justify={[null, null, 'space-between']} flexDirection={['column', 'column', 'row']}>
            <VStack
              align={['center', 'center', 'start']}
              spacing={8} w={['100%', '100%', '45%']}
              textAlign={['center', 'center', 'start']}
            >
              <Heading fontSize={[32, 32, 36, 48]}>
                The Essential <Text as='span' color='primary.100'>Toolset</Text> For Crypto Investors
              </Heading>
              <Text color='secondary_text' fontSize={[12, 12, 14, 16]}>
                Cryptogic membership gives you access to premium tools,
                content and community to help you be a successful crypto investor.
              </Text>
              <Text color='primary.100' fontSize={[12, 12, 14, 16]}>
                Try It Today For Just $7
              </Text>
              <HStack>
                <Button>
                  Sign up
                </Button>
                <Button>
                  Learn more
                </Button>
              </HStack>
            </VStack>
            <Box
              w={['100%', '100%', '45%']}
              textAlign='end'
              mt={[10, 10, 0]}
              position='relative'
            >
              <Box ref={mobileBlock} position='relative'>
                <Portal containerRef={mobileBlock}>
                  <Flex
                    position='absolute'
                    h='100%' w='100%'
                    top={0}
                    justify='center'
                    align='center'
                  >
                    <Box w={10} h={10} position='relative'>
                      <Image
                        loader={exportableLoader}
                        src='/assets/img/video_circle.png'
                        alt='image'
                        layout='fill'
                      />
                    </Box>
                  </Flex>
                </Portal>
                <Image
                  loader={exportableLoader}
                  src='/assets/img/mobile.png'
                  alt='image'
                  layout='responsive'
                  width={526}
                  height={321}
                  priority
                />
              </Box>
            </Box>
          </Flex>
          <Flex
            justify={[null, null, 'space-between']}
            flexDirection={['column-reverse', 'column-reverse', 'row']}
            mt={24}
          >
            <Box
              ref={coinListBlock}
              w={['100%', '100%', '45%']}
              position='relative'
              left={[null, null, -7]}
              mt={[10, 10, 0]}
            >
              <Portal containerRef={coinListBlock}>
                <Box
                  position='absolute'
                  top={-5}
                  right={[0, 0, -5]}
                  w='44%'
                  maxW={223}
                >
                  <Image
                    loader={exportableLoader}
                    src='/assets/img/rating.png'
                    alt='image'
                    width={223}
                    height={150}
                    layout='responsive'
                  />
                </Box>
              </Portal>
              <Image
                loader={exportableLoader}
                src='/assets/img/coin_list.png'
                alt='image'
                layout='responsive'
                height={374}
                width={496}
                priority
              />
            </Box>
            <VStack
              align={['center', 'center', 'start']}
              spacing={8} w={['100%', '100%', '45%']}
              textAlign={['center', 'center', 'start']}
            >
              <Heading fontSize={[32, 32, 36, 48]}>
                Get Inside Access To Our Unique Platform <Text as='span' color='primary.100'>Platform</Text>
              </Heading>
              <Text color='secondary_text' fontSize={[12, 12, 14, 16]}>
                With Cryptogic membership, you will gain instant access to our premium platform,
                including our proprietary crypto ratings that you won’t find anywhere else.
              </Text>
            </VStack>
          </Flex>
          <VStack textAlign='center' mt={16} px='10%'>
            <Text color='primary.100' fontSize={[12, 12, 14]} fontWeight='black' mb={6}>
              FEATURE HIGHLIGHT PHRASE
            </Text>
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
          <ChoosePlan />
          <VStack textAlign='center' mt={16} px='15%'>
            <Text color='primary.100' fontSize={[12, 12, 14]} fontWeight='black' mb={6}>
              VIDEO HIGHLIGHT PHRASE
            </Text>
            <Heading fontSize={[32, 32, 36, 48]}>
              Latest videos
            </Heading>
            <Text color='secondary_text' fontSize={[12, 12, 14, 16]} mt={5}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam imperdiet tempor, ipsum amet eu quam cras nibh.
            </Text>
          </VStack>
          <Flex mt={16} flexWrap='wrap' marginX='auto' justify='center' gap={5} maxW='1200px'>
            {[1, 2, 3, 4, 5, 6].map(() =>
              <VStack align='start' >
                <Box position='relative'>
                    <Flex
                      position='absolute'
                      h='100%' w='100%'
                      top={0}
                      justify='center'
                      align='center'
                      zIndex={1}
                    >
                      <Box w={10} h={10} position='relative'>
                        <Image
                          loader={exportableLoader}
                          src='/assets/img/video_white_circle.svg'
                          alt='image'
                          layout='fill'
                        />
                      </Box>
                    </Flex>
                  <Image
                    loader={exportableLoader}
                    src='/assets/img/video_img.png'
                    alt='image'
                    height={196}
                    width={344}
                  />
                </Box>
                <Text fontSize={[16, 16, 18, 24]} w={80} fontWeight='black'>Video Title</Text>
                <Text color='secondary_text' fontSize={[12, 12, 14]} w={80}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam imperdiet tempor,
                  ipsum amet eu quam cras nibh.
                </Text>
              </VStack>
            )}
          </Flex>
          <Show above='xl'>
            <Portal containerRef={main}>
              <Box
                position='absolute'
                right={0}
                top={870}
              >
                <Image
                  loader={exportableLoader}
                  src='/assets/img/money.png'
                  alt='image'
                  height={450}
                  width={300}
                  priority
                />
              </Box>
            </Portal>
          </Show>
          <Show above='xl'>
            <Portal containerRef={main}>
              <Box
                position='absolute'
                left={0}
                top={1550}
              >
                <Image
                  loader={exportableLoader}
                  src='/assets/img/circle_gold.png'
                  alt='image'
                  height={350}
                  width={250}
                  priority
                />
              </Box>
            </Portal>
          </Show>
        </Container>
      </PageLayout>
    </PageMeta >
  )
}

export default Home
