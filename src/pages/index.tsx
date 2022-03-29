import { Container, Box, Portal, Show, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import { useRef } from 'react'
import ChoosePlan from '../components/ChoosePlan'
import CryptogicFeatures from '../components/LandingPage/CryptogicFeatures'
import LatestVideos from '../components/LandingPage/LatestVideos'
import ToolsetAndPlatform from '../components/LandingPage/ToolsetAndPlatform'
import UserTestimonials from '../components/LandingPage/UserTestimonials'
import PageLayout from '../components/PageLayout/PageLayout'
import PageMeta from '../components/PageMeta/PageMeta'
import { exportableLoader } from '../image-loader'

const Home: NextPage = () => {
  const main = useRef(null)
  return (
    <PageMeta title='home'>
      <PageLayout>
        <Container variant='main' ref={main}>
          <ToolsetAndPlatform />
          <CryptogicFeatures />
          <Text mt={16} color='primary.100' fontSize={[12, 12, 14]} fontWeight='black' textAlign='center'>
            PLAN HIGHLIGHT PHRASE
          </Text>
          <ChoosePlan />
          <LatestVideos />
          <UserTestimonials />
          <Show above='xl'>
            <Portal containerRef={main}>
              <Box
                position='absolute'
                right={0}
                top={250}
              >
                <Box w={96} h={16} bg='dark.50' />
                <Box
                  w={96} h={6} bg='dark.50' mt={3}
                  bgGradient='linear(90.34deg, #A67415 49.71%, #DCB938 93.23%)'
                />
                <Box w={96} h={2.5} bg='dark.50' mt={3} />
              </Box>
            </Portal>
          </Show>
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
                top={[null, null, 1550, 1600, 1600, 1900]}
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
