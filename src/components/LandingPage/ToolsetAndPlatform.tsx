import { Box, Button, Flex, Heading, HStack, Portal, Text, useColorMode, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { FC, useRef } from 'react'
import { exportableLoader } from '../../image-loader'

const ToolsetAndPlatform: FC = () => {
  const mobileBlock = useRef(null)
  const coinListBlock = useRef(null)
  const imageBlock = useRef(null)
  const router = useRouter()
  const { colorMode } = useColorMode()

  return (
    <>
      <Flex justify={[null, null, 'space-between']} flexDirection={['column', 'column', 'row']}>
        <VStack
          align={['center', 'center', 'start']}
          spacing={6} w={['100%', '100%', '45%']}
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
          <HStack spacing={5}>
            <Button
              onClick={() => router.push('/signup')}>
              Sign up
            </Button>
            <Button variant='outline'>
              Learn more
            </Button>
          </HStack>
        </VStack>
        <Box
          w={['100%', '100%', '45%']}
          textAlign='end'
          mt={[10, 10, 0]}
          position='relative'
          ref={imageBlock}
        >
          <Portal containerRef={imageBlock}>
            <Box ref={mobileBlock} position='relative' zIndex={1}>
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
                      unoptimized
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
                unoptimized
              />
            </Box>
          </Portal>
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
                src={`/assets/img/${colorMode === 'light' ? 'rating' : 'ratingdark'}.png`}
                alt='image'
                width={223}
                height={150}
                layout='responsive'
                unoptimized
              />
            </Box>
          </Portal>
          {colorMode === 'light' ? <Image
            loader={exportableLoader}
            src='/assets/img/coin_list.png'
            alt='image'
            layout='responsive'
            height={374}
            width={496}
            priority
            unoptimized
          />
            :
            <Image
              loader={exportableLoader}
              src='/assets/img/coin_listdark.png'
              alt='image'
              layout='responsive'
              height={374}
              width={496}
              priority
              unoptimized
            />}
        </Box>
        <VStack
          align={['center', 'center', 'start']}
          spacing={7} w={['100%', '100%', '45%']}
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
    </>
  )
}
export default ToolsetAndPlatform
