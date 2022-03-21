import { Box, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import LineChart from '../../components/Chart/LineChart'
import { chartData } from '../../components/Chart/chartdata'
import Image from 'next/image'
import { exportableLoader } from '../../image-loader'
import { useState } from 'react'

type TData = {
  name: string;
  ticker: string;
}

interface Props {
  data: TData;
}

const NftItem: NextPage<Props> = ({ data }) => {
  const { query } = useRouter()
  const [chartTimePicker, setChartTimePicker] = useState<string>('1D')
  
  return (
    data && <PageMeta title={`${query.id}`}>
      <PageLayout>
        <Container variant='main'>
          <HStack align='start' whiteSpace='nowrap' overflowX='auto'>
            <VStack align='start' pr={14}>
              <HStack spacing={4} minW='44'>
                <Image
                  loader={exportableLoader}
                  src={`/assets/img/${data.ticker}.svg`}
                  alt='icon'
                  height={50}
                  width={50}
                />
                <VStack spacing={1}>
                  <Heading as='h2' fontSize={20}>{data.name}</Heading>
                  <Container variant='nft_rank'>Rank #2</Container>
                </VStack>
              </HStack>
              <Container variant='nft_link'>
                <Image
                  loader={exportableLoader}
                  src='/assets/img/link.svg'
                  alt='icon'
                  height={12}
                  width={12}
                />
                <Text mx={1}>azuki.com</Text>
                <Image
                  loader={exportableLoader}
                  src='/assets/img/export.svg'
                  alt='icon'
                  height={10}
                  width={10}
                />
              </Container>
            </VStack>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>Floor Price</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>18.19 ETH</Text>
              <Text size='md' color='secondary_text'>$53,351.51</Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>24h %</Text>
              <Text pb={3.5} size='lg' color='primary.100' fontWeight='extrabold'>8.21%</Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>Market Cap</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>326,710.59 ETH</Text>
              <Text pb={6} size='md' color='secondary_text'>$958,246,560.54</Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>24h Volume</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>745.3 ETH</Text>
              <Text size='md' color='secondary_text'>$2,080,165.84</Text>
              <Text size='md' color='primary.100'>0.02%</Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>Owners</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>3.4K</Text>
            </Container>
            <Container variant='nft_item_info' border='none'>
              <Text pb={2} size='sm' color='secondary_text'>Items</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>10.0K</Text>
            </Container>
          </HStack>
          <HStack mt={5} align='start' display={['flex', 'flex', 'none']}>
            <Container variant='nft_item_info' pl={0} pr={10} display='flex'>
              <Text pb={2} size='sm' color='secondary_text'>24h Volume</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>745.3 ETH</Text>
              <Text size='md' color='secondary_text'>$2,080,165.84</Text>
              <Text pb={3} size='md' color='primary.100'>0.02%</Text>
              <Text pb={2} size='sm' color='secondary_text'>24h %</Text>
              <Text pb={3.5} size='lg' color='primary.100' fontWeight='extrabold'>8.21%</Text>
              <Text pb={2} size='sm' color='secondary_text'>Market Cap</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>326,710.59 ETH</Text>
              <Text pb={3} size='md' color='secondary_text'>$958,246,560.54</Text>
            </Container>
            <VStack align='start' pl={3}>
              <Text pb={2} size='sm' color='secondary_text'>Floor Price</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>18.19 ETH</Text>
              <Text size='md' color='secondary_text'>$53,351.51</Text>
              <Text pb={2} size='sm' color='secondary_text'>Owners</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>3.4K</Text>
              <Text pb={2} size='sm' color='secondary_text'>Items</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>10.0K</Text>
            </VStack>
          </HStack>

          <Text fontSize={20} fontWeight='extrabold' mt={10} mb={5}>
            Azuki Floor Price Chart
          </Text>
          <Flex justify='end'>
            <Container variant='chart_timepicker' w={['full', 'fit-content']}>
              {['1D', '7D', '1M', '3M', '1Y', 'YTD', 'ALL'].map((el) =>
                <Box
                  key={el}
                  className={chartTimePicker === el ? 'active' : ''}
                  onClick={() => setChartTimePicker(el)}
                >
                  {el}
                </Box>,
              )}
            </Container>
          </Flex>
          <LineChart data={chartData} />
          <Text fontSize={20} fontWeight='extrabold' mt={5} mb={5}>
            Cryptogic Rating
          </Text>
          <Flex justify='space-between' overflowX='auto'>
            <Container variant='rating_block'>
              <VStack align='start'>
                <Text fontSize={['3xl', '4xl', '40']} fontWeight='bold'>91.99</Text>
                <Text fontWeight='extrabold'>Fundamental Rating</Text>
                <Text size='sm' color='secondary_text'>Technical Ratings is a technical analysis tool that combines the ratings of several
                  technical indicators to make it easier for traders and investors to find profitable trades.</Text>
              </VStack>
              <Container variant='rating'><Box h='70.9%' /></Container>
            </Container>
            <Container variant='rating_block' ml={5}>
              <VStack align='start'>
                <Text fontSize={['3xl', '4xl', '40']} fontWeight='bold'>91.99</Text>
                <Text fontWeight='extrabold'>Fundamental Rating</Text>
                <Text size='sm' color='secondary_text'>Technical Ratings is a technical analysis tool that combines the ratings of several
                  technical indicators to make it easier for traders and investors to find profitable trades.</Text>
              </VStack>
              <Container variant='rating'><Box h='91.9%' /></Container>
            </Container>
            <Container variant='rating_block' ml={5}>
              <VStack align='start'>
                <Text fontSize={['3xl', '4xl', '40']} fontWeight='bold'>91.99</Text>
                <Text fontWeight='extrabold'>Fundamental Rating</Text>
                <Text size='sm' color='secondary_text'>Technical Ratings is a technical analysis tool that combines the ratings of several
                  technical indicators to make it easier for traders and investors to find profitable trades.</Text>
              </VStack>
              <Container variant='rating'><Box h='91.9%' /></Container>
            </Container>
          </Flex>
        </Container>
      </PageLayout>
    </PageMeta>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = { name: 'Azuki', ticker: 'azuki' }

  return {
    props: { data },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = [
    { name: 'Cryptopunks', ticker: 'cryptopunks' },
    { name: 'Azuki', ticker: 'azuki' },
    { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
  ]

  const paths = data.map((el) => ({
    params: { id: el.ticker },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default NftItem
