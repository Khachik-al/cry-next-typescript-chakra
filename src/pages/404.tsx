import { Box, Center, Text, VStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/image'
import PageLayout from '../components/PageLayout/PageLayout'
import PageMeta from '../components/PageMeta/PageMeta'
import { exportableLoader } from '../image-loader'

const NotFound: NextPage = () => (
  <PageMeta title='404'>
    <PageLayout>
      <Center pt={[52, 52, 52, 52, 52, 72]} pb={80}>
        <VStack w={430} textAlign='center' position='relative'>
          <Text fontSize={144} fontWeight='extrabold' color='secondary_text' lineHeight={1}>
            404
          </Text>
          <Text fontSize={18} px={[9, 0]}>
            You didn’t break the internet, but we can’t find the missing puzzle piece you are looking for.
          </Text>
        </VStack>
        <Box
          display={['none', 'none', 'none', 'block']}
          position='absolute'
          h={49}
          w={49}
          right={173}
          top={228}
        >
          <Image
            loader={exportableLoader}
            src='/assets/img/puzzle.png'
            alt='puzzle'
            layout='fill'
            unoptimized
          />
        </Box>
        <Box
          display={['block', 'block', 'block', 'none']}
          position='absolute'
          h={34}
          w={34}
          right={39}
          top={132}
        >
          <Image
            loader={exportableLoader}
            src='/assets/img/min_puzzle.png'
            alt='puzzle'
            layout='fill'
            unoptimized
          />
        </Box>
        <Box
          display={['none', 'none', 'none', 'block']}
          position='absolute'
          h={223}
          w={223}
          left={[null, null, null, '8%', '12%']}
          top={264}
        >
          <Image
            loader={exportableLoader}
            src='/assets/img/puzzle.png'
            alt='puzzle'
            layout='fill'
            unoptimized
          />
        </Box>
        <Box
          display={['block', 'block', 'block', 'none']}
          position='absolute'
          h={171}
          w={95}
          left={0}
          top={150}
        >
          <Image
            loader={exportableLoader}
            src='/assets/img/md_puzzle.png'
            alt='puzzle'
            layout='fill'
            unoptimized
          />
        </Box>
        <Box
          position='absolute'
          h={[300, 300, 300, 500]}
          w={[300, 300, 300, 500]}
          right={0}
          top={[558, 530.5, 530.5, 394.5, 394.5, 475]}
        >
          <Image
            loader={exportableLoader}
            src='/assets/img/big_puzzle.png'
            alt='puzzle'
            layout='fill'
            unoptimized
          />
        </Box>
      </Center>
    </PageLayout>
  </PageMeta>
)

export default NotFound
