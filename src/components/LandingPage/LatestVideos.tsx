import { Box, Flex, Grid, GridItem, Heading, Skeleton, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { FC } from 'react'
import { exportableLoader } from '../../image-loader'
import { latestVideos } from './data'

const LatestVideos: FC = () => {
  return (
    <>
      <VStack textAlign='center' mt={16} px='15%'>
        <Flex justify='center'><Skeleton h={4} mt={16} w={32} /></Flex>
        <Heading fontSize={[32, 32, 36, 48]}>
          Latest videos
        </Heading>
        <Flex justify='center'><Skeleton h={4} w={56} /></Flex>
      </VStack>
      <Grid
        mt={16}
        gap={5}
        templateColumns={
          ['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'repeat(2, 1fr)', 'repeat(3, 1fr)']
        }
      >
        {latestVideos.map((el, i) =>
          <GridItem justifySelf='center' key={i}>
            <VStack align='start'>
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
                  src={`/assets/img/${el.video}`}
                  alt='image'
                  height={196}
                  width={344}
                  priority
                />
              </Box>
              <Text fontSize={[16, 16, 18, 24]} w={80} fontWeight='black'>Video Title</Text>
              <Text color='secondary_text' fontSize={[12, 12, 14]} w={80}>
                <Skeleton h={4} mb={1}/>
                <Skeleton h={4}/>
              </Text>
            </VStack>
          </GridItem>,
        )}
      </Grid>
    </>
  )
}
export default LatestVideos
