import { Box, Center, Container, Divider, Flex, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { coinChartData } from '../../components/Chart/chartdata'
const Chart = dynamic(() => import('../../components/Chart/Chart'), {
  ssr: false,
})
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import { CoinItem } from '../../components/types/coin-item.interface'
import UpDownPercent from '../../components/UpDownPercent'
import { exportableLoader } from '../../image-loader'
import { coinItem, coinAll } from '../../services'

interface Props {
  item: CoinItem;
}

const CryptocurrencyItem: NextPage<Props> = ({ item }) => {
  const { query } = useRouter()
  const [chartTimePicker, setChartTimePicker] = useState<string>('1D')
  const [chartType, setChartType] = useState<string>('Price')
  console.log(item)

  return (
    <PageMeta title={`${query.id}`}>
      <PageLayout>
        <Container variant='main'>
          <HStack spacing={14} overflowX='auto' whiteSpace='nowrap'>
            <VStack align='start'>
              <HStack align='start'>
                <Container variant='rank'>Rank #{item.rank}</Container>
              </HStack>
              <HStack>
                <Box w={6} h={6} position='relative' borderRadius='base' overflow='hidden'>
                  <Image
                    priority
                    loader={exportableLoader}
                    src={item.icon}
                    alt='icon'
                    layout='fill'
                    unoptimized
                  />
                </Box>
                <Text fontWeight='extrabold' fontSize={18}>
                  {item.name}
                </Text>
              </HStack>
              <HStack align='start'>
                <Heading fontSize={24} fontWeight='extrabold'>
                  ${item.price ? item.price.toLocaleString() : '---'}
                </Heading>
                <UpDownPercent fontSize={14} value={item.priceChangePercent24h} boxSize={3} />
              </HStack>
              <Container variant='horizontalRating'><Box w='60%' /></Container>
              <Flex justify='space-between' w='full'>
                <Text fontSize={10} fontWeight='semibold'>Low: ${item.low24h?.toLocaleString()}</Text>
                <Text fontSize={10} fontWeight='semibold'>high: ${item.high24h?.toLocaleString()}</Text>
              </Flex>
              <HStack>
                <Link href={item.website[0]} passHref>
                  <Container variant='link'>
                    <Image
                      loader={exportableLoader}
                      src='/assets/img/link.svg'
                      alt='icon'
                      height={12}
                      width={12}
                    />
                    <Text mx={1}>website</Text>
                    <Image
                      loader={exportableLoader}
                      src='/assets/img/export.svg'
                      alt='icon'
                      height={10}
                      width={10}
                    />
                  </Container>
                </Link>
                <Link href={item.explorers[0]} passHref>
                  <Container variant='link'>
                    <Image
                      loader={exportableLoader}
                      src='/assets/img/search_icon_input.svg'
                      alt='icon'
                      height={12}
                      width={12}
                    />
                    <Text mx={1}>Explorers</Text>
                  </Container>
                </Link>
                <Link href={item.explorers[0]} passHref>
                  <Container variant='link'>
                    <Image
                      loader={exportableLoader}
                      src='/assets/img/user_octagon.svg'
                      alt='icon'
                      height={12}
                      width={12}
                    />
                    <Text mx={1}>Community</Text>
                  </Container>
                </Link>
              </HStack>
              <HStack>
                <Link href={item.website[0]} passHref>
                  <Container variant='link'>
                    <Image
                      loader={exportableLoader}
                      src='/assets/img/simcard.svg'
                      alt='icon'
                      height={12}
                      width={12}
                    />
                    <Text mx={1}>Source code</Text>
                    <Image
                      loader={exportableLoader}
                      src='/assets/img/export.svg'
                      alt='icon'
                      height={10}
                      width={10}
                    />
                  </Container>
                </Link>
                <Link href={item.sourceCode.github[0]} passHref>
                  <Container variant='link'>
                    <Image
                      loader={exportableLoader}
                      src='/assets/img/document_text.svg'
                      alt='icon'
                      height={12}
                      width={12}
                    />
                    <Text mx={1}>Whitepaper</Text>
                    <Image
                      loader={exportableLoader}
                      src='/assets/img/export.svg'
                      alt='icon'
                      height={10}
                      width={10}
                    />
                  </Container>
                </Link>
              </HStack>
              <Box>
                <Text fontSize={10} color='secondary_text'>Tags</Text>
                <HStack>
                  {['Mineable', 'PoW', 'Store of Value'].map(el =>
                    <Center key={el} backgroundColor='rgba(113, 119, 132, 0.15)' borderRadius={20} px={2} py={1}>
                      <Text fontSize={8} color='secondary_text' fontWeight='extrabold'>{el}</Text>
                    </Center>,
                  )}
                </HStack>
              </Box>
            </VStack>
            <HStack>
              <Container variant='itemInfo' h={197}>
                <VStack align='start' pb={10}>
                  <Text size='sm' color='secondary_text'>Market Cap</Text>
                  <Text size='sm' fontWeight='extrabold'>
                    {item.marketCap === null ? '---' : '$' + Number(item.marketCap.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={12} value={item.marketCapChangePercent24h} boxSize={2.5} />
                </VStack>
                <VStack align='start'>
                  <Text size='sm' color='secondary_text'>Fully Diluted Market Cap</Text>
                  <Text size='sm' fontWeight='extrabold'>
                    {item.fullyDiluted === null ? '---' : '$' + Number(item.fullyDiluted.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={12} value={item.fullyDilutedChangePercent24h} boxSize={2.5} />
                </VStack>
              </Container>
              <Container variant='itemInfo' h={197}>
                <VStack align='start' pb={10}>
                  <Text size='sm' color='secondary_text'>Volume 24h</Text>
                  <Text size='sm' fontWeight='extrabold'>
                    {item.volume24h === null ? '---' : '$' + Number(item.volume24h.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={12} value={item.priceChangePercent24h} boxSize={2.5} />
                </VStack>
                <VStack align='start'>
                  <Text size='sm' color='secondary_text'>Volume / Market Cap</Text>
                  <Text size='sm' fontWeight='extrabold'>
                    {item.volumeMarketCapRatio === null ? '---' : '$' + Number(item.volumeMarketCapRatio.toFixed(2)).toLocaleString()}
                  </Text>
                </VStack>
              </Container>
              <Container variant='itemInfo' h={197} w={250} border='none'>
                <VStack align='start' pb={9}>
                  <Text size='sm' color='secondary_text'>Circulating Supply</Text>
                  <Box w='full'>
                    <Flex justify='space-between'>
                      <Text size='sm' fontWeight='extrabold'>
                        {item.circulatingSupply === null ? '---' : '$' + Number(item.circulatingSupply.toFixed(2)).toLocaleString()}
                      </Text>
                      <Text size='sm' fontWeight='extrabold' color='secondary_text'>90%</Text>
                    </Flex>
                    <Container variant='horizontalRating' h={1}><Box w='70%' /></Container>
                  </Box>
                  <UpDownPercent fontSize={12} value={item.circulatingSupplyChangePercent24h} boxSize={2.5} />
                </VStack>
                <Flex justify='space-between' mb={2}>
                  <Text size='sm' color='secondary_text'>Total Supply</Text>
                  <Text size='sm' fontWeight='extrabold'>
                    {item.totalSupply === null ? '---' : '$' + Number(item.totalSupply.toFixed(2)).toLocaleString()}
                  </Text>
                </Flex>
                <Flex justify='space-between'>
                  <Text size='sm' color='secondary_text'>Max Supply</Text>
                  <Text size='sm' fontWeight='extrabold'>
                    {item.maxSupply === null ? '---' : '$' + Number(item.maxSupply.toFixed(2)).toLocaleString()}
                  </Text>
                </Flex>
              </Container>
            </HStack>
          </HStack>
          <HStack mt={7} align='start' display={['flex', 'flex', 'none']}>
            <Container variant='itemInfo' pl={0} pr={10} display='flex'>
              <VStack align='start' pb={5}>
                <Text size='sm' color='secondary_text'>Market Cap</Text>
                <Text size='sm' fontWeight='extrabold'>
                  {item.marketCap === null ? '---' : '$' + Number(item.marketCap.toFixed(2)).toLocaleString()}
                </Text>
                <UpDownPercent fontSize={12} value={item.marketCapChangePercent24h} boxSize={2.5} />
              </VStack>
              <VStack align='start' pb={5}>
                <Text size='sm' color='secondary_text'>Fully Diluted Market Cap</Text>
                <Text size='sm' fontWeight='extrabold'>
                  {item.fullyDiluted === null ? '---' : '$' + Number(item.fullyDiluted.toFixed(2)).toLocaleString()}
                </Text>
                <UpDownPercent fontSize={12} value={item.fullyDilutedChangePercent24h} boxSize={2.5} />
              </VStack>
              <VStack align='start'>
                <Text size='sm' color='secondary_text'>Circulating Supply</Text>
                <Box w='full'>
                  <Flex justify='space-between'>
                    <Text size='sm' fontWeight='extrabold'>
                      {item.circulatingSupply === null ? '---' : '$' + Number(item.circulatingSupply.toFixed(2)).toLocaleString()}
                    </Text>
                    <Text size='sm' fontWeight='extrabold' color='secondary_text'>90%</Text>
                  </Flex>
                  <Container variant='horizontalRating' h={1}><Box w='70%' /></Container>
                </Box>
                <UpDownPercent fontSize={12} value={item.circulatingSupplyChangePercent24h} boxSize={2.5} />
              </VStack>
            </Container>
            <VStack align='start' pl={3}>
              <VStack align='start' pb={4}>
                <Text size='sm' color='secondary_text'>Volume 24h</Text>
                <Text size='sm' fontWeight='extrabold'>
                  {item.volume24h === null ? '---' : '$' + Number(item.volume24h.toFixed(2)).toLocaleString()}
                </Text>
                <UpDownPercent fontSize={12} value={item.priceChangePercent24h} boxSize={2.5} />
              </VStack>
              <VStack align='start' pb={2} spacing={1}>
                <Text size='sm' color='secondary_text'>Volume / Market Cap</Text>
                <Text size='sm' fontWeight='extrabold'>
                  {item.volumeMarketCapRatio === null ? '---' : '$' + Number(item.volumeMarketCapRatio.toFixed(2)).toLocaleString()}
                </Text>
              </VStack>
              <VStack align='start' pb={1} spacing={1}>
                <Text size='sm' color='secondary_text'>Total Supply</Text>
                <Text size='sm' fontWeight='extrabold'>
                  {item.totalSupply === null ? '---' : '$' + Number(item.totalSupply.toFixed(2)).toLocaleString()}
                </Text>
              </VStack>
              <VStack align='start' spacing={1}>
                <Text size='sm' color='secondary_text'>Max Supply</Text>
                <Text size='sm' fontWeight='extrabold'>
                  {item.maxSupply === null ? '---' : '$' + Number(item.maxSupply.toFixed(2)).toLocaleString()}
                </Text>
              </VStack>
            </VStack>
          </HStack>
          <Heading fontSize={20} fontWeight='extrabold' mt={10} mb={5}>{item.name} to USD Chart</Heading>
          <Flex justify='space-between' mb={5} flexDirection={['column', 'row']}>
            <Container variant='chart_timepicker' w='fit-content' mb={[2, 0]}>
              {['Price', 'Market Cap'].map((el) =>
                <Box
                  key={el}
                  className={chartType === el ? 'active' : ''}
                  onClick={() => setChartType(el)}
                  whiteSpace='nowrap'
                >
                  {el}
                </Box>,
              )}
            </Container>
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
          <Stack direction={['column', 'column', 'column', 'row']}>
            <Box w={['full', 'full', 'full', '70%']}><Chart data={coinChartData} baseline /></Box>
            <VStack align='start' w='30%' minW={['full', 96, 96, 64]} mt={[10, 0]}>
              <Heading fontSize={16} fontWeight='extrabold'>{item.name} Price Statistis</Heading>
              <Text fontSize={8} color='secondary_text'>Bitcoin Price Today</Text>
              <Flex w='full' justify='space-between'>
                <Text size='xs' fontWeight='extrabold' color='secondary_text'>Bitcoin Price</Text>
                <Text size='xs' fontWeight='extrabold'>
                  {item.price === null ? '---' : '$' + Number(item.price.toFixed(2)).toLocaleString()}
                </Text>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Price Change 24h</Text>
                <VStack spacing={1} align='end'>
                  <Text size='xs' fontWeight='extrabold'>
                    {item.price === null ? '---' : '$' + Number(item.volume24h.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={10} value={item.priceChangePercent24h} boxSize={2} />
                </VStack>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>24h Low / 24h High</Text>
                <VStack spacing={1} align='end'>
                  <Text size='xs' fontWeight='extrabold'>
                    {item.low24h === null ? '---' : '$' + Number(item.low24h.toFixed(2)).toLocaleString()}
                  </Text>
                  <Text size='xs' fontWeight='extrabold'>
                    {item.high24h === null ? '---' : '$' + Number(item.high24h.toFixed(2)).toLocaleString()}
                  </Text>
                </VStack>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Trading Volume 24h</Text>
                <VStack spacing={1} align='end'>
                  <Text size='xs' fontWeight='extrabold'>
                    {item.volume24h === null ? '---' : '$' + Number(item.volume24h.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={10} value={item.priceChangePercent24h} boxSize={2} />
                </VStack>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Volume / Market Cap</Text>
                <Text size='xs' fontWeight='extrabold'>
                  {item.volumeMarketCapRatio === null ? '---' : Number(item.volumeMarketCapRatio.toFixed(5))}
                </Text>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Market Dominance</Text>
                <Text size='xs' fontWeight='extrabold'>
                  {item.marketDominance === null ? '---' : Number(item.marketDominance.toFixed(2)) + '%'}
                </Text>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Market Rank</Text>
                <Text size='xs' fontWeight='extrabold'>#{item.rank}</Text>
              </Flex>
              <Text fontSize={8} fontWeight='extrabold' color='secondary_text' pt={4}>Bitcoin Price Today</Text>
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Market Cap</Text>
                <VStack spacing={1} align='end'>
                  <Text size='xs' fontWeight='extrabold'>
                    {item.marketCap === null ? '---' : '$' + Number(item.marketCap.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={10} value={item.marketCapChangePercent24h} boxSize={2} />
                </VStack>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Fully Diluted Market Cap</Text>
                <VStack spacing={1} align='end'>
                  <Text size='xs' fontWeight='extrabold'>
                    {item.fullyDiluted === null ? '---' : '$' + Number(item.fullyDiluted.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={10} value={item.fullyDilutedChangePercent24h} boxSize={2} />
                </VStack>
              </Flex>
            </VStack>
          </Stack>
          <Text fontSize={20} fontWeight='extrabold' mt={5} mb={5}>
            Cryptogic Rating
          </Text>
          <Flex justify='space-between' overflowX='auto'>
            <Container variant='rating_block'>
              <VStack align='start'>
                <Text fontSize={['3xl', '4xl', '40']} fontWeight='bold'>{item.fundamentalRating}</Text>
                <Text fontWeight='extrabold'>Fundamental Rating</Text>
                <Text size='sm' color='secondary_text'>Technical Ratings is a technical analysis tool that combines the ratings of several
                  technical indicators to make it easier for traders and investors to find profitable trades.</Text>
              </VStack>
              <Container variant='rating'><Box h={item.fundamentalRating + '%'} /></Container>
            </Container>
            <Container variant='rating_block' ml={5}>
              <VStack align='start'>
                <Text fontSize={['3xl', '4xl', '40']} fontWeight='bold'>{item.technicalRating}</Text>
                <Text fontWeight='extrabold'>Fundamental Rating</Text>
                <Text size='sm' color='secondary_text'>Technical Ratings is a technical analysis tool that combines the ratings of several
                  technical indicators to make it easier for traders and investors to find profitable trades.</Text>
              </VStack>
              <Container variant='rating'><Box h={item.technicalRating + '%'} /></Container>
            </Container>
            <Container variant='rating_block' ml={5}>
              <VStack align='start'>
                <Text fontSize={['3xl', '4xl', '40']} fontWeight='bold'>{item.technicalRating}</Text>
                <Text fontWeight='extrabold'>Fundamental Rating</Text>
                <Text size='sm' color='secondary_text'>Technical Ratings is a technical analysis tool that combines the ratings of several
                  technical indicators to make it easier for traders and investors to find profitable trades.</Text>
              </VStack>
              <Container variant='rating'><Box h={item.technicalRating + '%'} /></Container>
            </Container>
          </Flex>
        </Container>
      </PageLayout>
    </PageMeta >
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const item = await coinItem({ slug: `${context?.params?.id}` })

  return {
    props: { item },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await coinAll()

  const paths = data.items.map((el: CoinItem) => ({
    params: { id: el.id },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default CryptocurrencyItem
