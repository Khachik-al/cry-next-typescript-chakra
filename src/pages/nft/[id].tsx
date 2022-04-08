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
import { nftAll, nftItem } from '../../services'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'

type TData = {
  logo: string;
  rank: number;
  name: string;
  slug: string;
  fundamentalRating: number;
  technicalRating: number;
  floorPriceEth: number;
  floorPriceUsd: number;
  volumeChangePercent24h: number;
  volumeChange24hUsd: number;
  marketCapEth: number;
  marketCapUsd: number;
  volumeChange24hEth: number;
  owners: number;
  items: number;
}

interface Props {
  data: TData;
}

const NftItem: NextPage<Props> = ({ data }) => {
  const { query } = useRouter()
  const [chartTimePicker, setChartTimePicker] = useState<string>('1D')
  console.log(data)

  return (
    data && <PageMeta title={`${query.id}`}>
      <PageLayout>
        <Container variant='main'>
          <HStack align='start' whiteSpace='nowrap' overflowX='auto'>
            <VStack align='start' pr={14}>
              <HStack spacing={4} minW='44'>
                <Box minW={50} minH={50} position='relative' borderRadius='base' overflow='hidden'>
                  <Image loader={exportableLoader} src={data.logo} alt='icon' layout='fill' />
                </Box>
                <VStack spacing={1} align='start'>
                  <Heading as='h2' fontSize={20}>{data.name}</Heading>
                  <Container variant='nft_rank'>Rank #2</Container>
                </VStack>
              </HStack>
              <Flex justify='start'>
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
              </Flex>
            </VStack>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>Floor Price</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {data.floorPriceEth === null ? '---' : Number(data.floorPriceEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text size='md' color='secondary_text'>
                {data.floorPriceUsd === null ? '---' : '$' + Number(data.floorPriceUsd.toFixed(2))}
              </Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>24h %</Text>
              <Text
                pb={3.5}
                size='lg'
                color={data.volumeChangePercent24h < 0 ? 'danger' : 'primary.100'}
                fontWeight='extrabold'
              >
                {data.volumeChangePercent24h < 0 ?
                  <TriangleDownIcon boxSize={3} mb={1} /> :
                  <TriangleUpIcon boxSize={3} mb={1} />}
                {' '}
                {data.volumeChangePercent24h === null ?
                  '---' :
                  Number(data.volumeChangePercent24h.toFixed(2)) + ' %'}
              </Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>Market Cap</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {data.marketCapEth === null ? '---' : Number(data.marketCapEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text pb={6} size='md' color='secondary_text'>
                {data.marketCapUsd === null ? '---' : '$' + Number(data.marketCapUsd.toFixed(2))}
              </Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>24h Volume</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {data.volumeChange24hEth === null ? '---' : Number(data.volumeChange24hEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text size='md' color='secondary_text'>
                {data.volumeChange24hUsd === null ? '---' : '$' + Number(data.volumeChange24hUsd.toFixed(2))}
              </Text>
              <Text size='md' color='primary.100'>
                {data.volumeChange24hEth === null ? '---' : Number(data.volumeChange24hEth.toFixed(2))}
              </Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>Owners</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>
                {data.owners === null ? '---' : data.owners}
              </Text>
            </Container>
            <Container variant='nft_item_info' border='none'>
              <Text pb={2} size='sm' color='secondary_text'>Items</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>
                {data.items === null ? '---' : data.items}
              </Text>
            </Container>
          </HStack>
          <HStack mt={5} align='start' display={['flex', 'flex', 'none']}>
            <Container variant='nft_item_info' pl={0} pr={10} display='flex'>
              <Text pb={2} size='sm' color='secondary_text'>24h Volume</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {data.volumeChange24hEth === null ? '---' : Number(data.volumeChange24hEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text size='md' color='secondary_text'>
                {data.volumeChange24hUsd === null ? '---' : '$' + Number(data.volumeChange24hUsd.toFixed(2))}
              </Text>
              <Text pb={3} size='md' color='primary.100'>
                {data.volumeChange24hEth === null ? '---' : Number(data.volumeChange24hEth.toFixed(2))}
              </Text>
              <Text pb={2} size='sm' color='secondary_text'>24h %</Text>
              <Text
                pb={3.5}
                size='lg'
                color={data.volumeChangePercent24h < 0 ? 'danger' : 'primary.100'}
                fontWeight='extrabold'
              >
                {data.volumeChangePercent24h < 0 ?
                  <TriangleDownIcon boxSize={3} mb={1} /> :
                  <TriangleUpIcon boxSize={3} mb={1} />}
                {' '}
                {data.volumeChangePercent24h === null ?
                  '---' :
                  Number(data.volumeChangePercent24h.toFixed(2)) + ' %'}
              </Text>
              <Text pb={2} size='sm' color='secondary_text'>Market Cap</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {data.marketCapEth === null ? '---' : Number(data.marketCapEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text pb={3} size='md' color='secondary_text'>
                {data.marketCapUsd === null ? '---' : '$' + Number(data.marketCapUsd.toFixed(2))}
              </Text>
            </Container>
            <VStack align='start' pl={3}>
              <Text pb={2} size='sm' color='secondary_text'>Floor Price</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {data.floorPriceEth === null ? '---' : (data.floorPriceEth.toFixed(2) + ' ETH')}
              </Text>
              <Text size='md' color='secondary_text'>
                {data.floorPriceUsd === null ? '---' : ('$' + data.floorPriceUsd.toFixed(2))}
              </Text>
              <Text pb={2} size='sm' color='secondary_text'>Owners</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>
                {data.owners === null ? '---' : data.owners}
              </Text>
              <Text pb={2} size='sm' color='secondary_text'>Items</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {data.items === null ? '---' : data.items}
              </Text>
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
                <Text fontSize={['3xl', '4xl', '40']} fontWeight='bold'>{data.fundamentalRating}</Text>
                <Text fontWeight='extrabold'>Fundamental Rating</Text>
                <Text size='sm' color='secondary_text'>Technical Ratings is a technical analysis tool that combines the ratings of several
                  technical indicators to make it easier for traders and investors to find profitable trades.</Text>
              </VStack>
              <Container variant='rating'><Box h={data.fundamentalRating + '%'} /></Container>
            </Container>
            <Container variant='rating_block' ml={5}>
              <VStack align='start'>
                <Text fontSize={['3xl', '4xl', '40']} fontWeight='bold'>{data.technicalRating}</Text>
                <Text fontWeight='extrabold'>Fundamental Rating</Text>
                <Text size='sm' color='secondary_text'>Technical Ratings is a technical analysis tool that combines the ratings of several
                  technical indicators to make it easier for traders and investors to find profitable trades.</Text>
              </VStack>
              <Container variant='rating'><Box h={data.technicalRating + '%'} /></Container>
            </Container>
            <Container variant='rating_block' ml={5}>
              <VStack align='start'>
                <Text fontSize={['3xl', '4xl', '40']} fontWeight='bold'>{data.technicalRating}</Text>
                <Text fontWeight='extrabold'>Fundamental Rating</Text>
                <Text size='sm' color='secondary_text'>Technical Ratings is a technical analysis tool that combines the ratings of several
                  technical indicators to make it easier for traders and investors to find profitable trades.</Text>
              </VStack>
              <Container variant='rating'><Box h={data.technicalRating + '%'} /></Container>
            </Container>
          </Flex>
        </Container>
      </PageLayout>
    </PageMeta>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await nftItem({ slug: `${context?.params?.id}` })

  return {
    props: { data },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await nftAll()

  const paths = data.items.map((el: TData) => ({
    params: { id: el.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default NftItem
