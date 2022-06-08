import { Box, Center, Container, Divider, Flex, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { coinChartData } from '../../components/Chart/chartdata'
const Chart = dynamic(() => import('../../components/Chart/Chart'), {
  ssr: false,
})
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import PaginationComp from '../../components/Pagination'
import { CoinItem, CoinMarkets } from '../../components/types/coin-item.interface'
import UpDownPercent from '../../components/UpDownPercent'
import { exportableLoader } from '../../image-loader'
import { coinItem, coinAll, coinMarkets } from '../../services/data-services'

interface Props {
  item: CoinItem;
  markets: CoinMarkets;
}

const CryptocurrencyItem: NextPage<Props> = ({ item, markets }) => {
  const [chartTimePicker, setChartTimePicker] = useState<string>('1D')
  const [chartType, setChartType] = useState<string>('Price')
  const [marketList, steMarketList] = useState(markets)
  const [page, setPage] = useState(1)


  const changePage = async (value: number) => {
    setPage(value)
    const pageData = await coinMarkets({ slug: item.id, limit: 10, offset: value - 1 })
    steMarketList(pageData)
  }

  const rangeSupply = () => {
    if (item.maxSupply && item.totalSupply) {
      return Number((item.maxSupply / item.totalSupply * 100).toFixed(2))
    }
    return ''
  }
  return (
    item && <PageMeta title={item.name || ''} description={item.name || ''}>
      <PageLayout>
        <Container variant='main'>
          <HStack spacing={14} overflowX='auto' whiteSpace='nowrap' pb={3}>
            <VStack align='start'>
              <HStack align='start'>
                <Container variant='rank'>Rank #{item.rank}</Container>
              </HStack>
              <HStack>
                <Box w={6} h={6} position='relative' borderRadius='base' overflow='hidden'>
                  <Image
                    priority
                    loader={exportableLoader}
                    src={item.icon || '/'}
                    alt='icon'
                    layout='fill'
                    unoptimized
                  />
                </Box>
                <Heading as='h1' fontWeight='extrabold' fontSize={18}>
                  {item.name}
                </Heading>
              </HStack>
              <HStack align='start'>
                <Heading fontSize={24} fontWeight='extrabold'>
                  ${item.price ? item.price.toLocaleString() : '---'}
                </Heading>
                <UpDownPercent fontSize={14} value={item.priceChangePercent24h} boxSize={3} />
              </HStack>
              <Container variant='horizontalRating'><Box w='60%' /></Container>
              <Flex justify='space-between' w='full'>
                <Text fontSize={10} fontWeight='semibold'>
                  Low: ${item.low24h ? item.low24h.toLocaleString() : '---'}
                </Text>
                <Text fontSize={10} fontWeight='semibold'>
                  high: ${item.high24h ? item.high24h.toLocaleString() : '---'}
                </Text>
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
                <Link href={item.explorers[0] || item.website[0]} passHref>
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
                <Link href={item.community[0] || item.website[0]} passHref>
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
                <Link href={item.sourceCode.github[0] || item.website[0]} passHref>
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
                <Link href={item.sourceCode.github[0] || item.website[0]} passHref>
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
                    {!item.marketCap ? '---' : '$' + Number(item.marketCap.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={12} value={item.marketCapChangePercent24h} boxSize={2.5} />
                </VStack>
                <VStack align='start'>
                  <Text size='sm' color='secondary_text'>Fully Diluted Market Cap</Text>
                  <Text size='sm' fontWeight='extrabold'>
                    {!item.fullyDiluted ? '---' : '$' + Number(item.fullyDiluted.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={12} value={item.fullyDilutedChangePercent24h} boxSize={2.5} />
                </VStack>
              </Container>
              <Container variant='itemInfo' h={197}>
                <VStack align='start' pb={10}>
                  <Text size='sm' color='secondary_text'>Volume 24h</Text>
                  <Text size='sm' fontWeight='extrabold'>
                    {!item.volume24h ? '---' : '$' + Number(item.volume24h.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={12} value={item.priceChangePercent24h} boxSize={2.5} />
                </VStack>
                <VStack align='start'>
                  <Text size='sm' color='secondary_text'>Volume / Market Cap</Text>
                  <Text size='sm' fontWeight='extrabold'>
                    {!item.volumeMarketCapRatio ? '---' : '$' + Number(item.volumeMarketCapRatio.toFixed(2)).toLocaleString()}
                  </Text>
                </VStack>
              </Container>
              <Container variant='itemInfo' h={197} w={250} border='none'>
                <VStack align='start' pb={9}>
                  <Text size='sm' color='secondary_text'>Circulating Supply</Text>
                  <Box w='full'>
                    <Flex justify='space-between'>
                      <Text size='sm' fontWeight='extrabold'>
                        {!item.circulatingSupply ? '---' : '$' + Number(item.circulatingSupply.toFixed(2)).toLocaleString()}
                      </Text>
                      {rangeSupply() && <Text size='sm' fontWeight='extrabold' color='secondary_text'>{rangeSupply()}%</Text>}
                    </Flex>
                    {rangeSupply() && <Container variant='horizontalRating' h={1}><Box w={`${rangeSupply()}%`} /></Container>}
                  </Box>
                  <UpDownPercent fontSize={12} value={item.circulatingSupplyChangePercent24h} boxSize={2.5} />
                </VStack>
                <Flex justify='space-between' mb={2}>
                  <Text size='sm' color='secondary_text'>Total Supply</Text>
                  <Text size='sm' fontWeight='extrabold'>
                    {!item.totalSupply ? '---' : '$' + Number(item.totalSupply.toFixed(2)).toLocaleString()}
                  </Text>
                </Flex>
                <Flex justify='space-between'>
                  <Text size='sm' color='secondary_text'>Max Supply</Text>
                  <Text size='sm' fontWeight='extrabold'>
                    {!item.maxSupply ? '---' : '$' + Number(item.maxSupply.toFixed(2)).toLocaleString()}
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
                  {!item.marketCap ? '---' : '$' + Number(item.marketCap.toFixed(2)).toLocaleString()}
                </Text>
                <UpDownPercent fontSize={12} value={item.marketCapChangePercent24h} boxSize={2.5} />
              </VStack>
              <VStack align='start' pb={5}>
                <Text size='sm' color='secondary_text'>Fully Diluted Market Cap</Text>
                <Text size='sm' fontWeight='extrabold'>
                  {!item.fullyDiluted ? '---' : '$' + Number(item.fullyDiluted.toFixed(2)).toLocaleString()}
                </Text>
                <UpDownPercent fontSize={12} value={item.fullyDilutedChangePercent24h} boxSize={2.5} />
              </VStack>
              <VStack align='start'>
                <Text size='sm' color='secondary_text'>Circulating Supply</Text>
                <Box w='full'>
                  <Flex justify='space-between'>
                    <Text size='sm' fontWeight='extrabold'>
                      {!item.circulatingSupply ? '---' : '$' + Number(item.circulatingSupply.toFixed(2)).toLocaleString()}
                    </Text>
                    {rangeSupply() && <Text size='sm' fontWeight='extrabold' color='secondary_text'>{rangeSupply()}%</Text>}
                  </Flex>
                  {rangeSupply() && <Container variant='horizontalRating' h={1}><Box w={`${rangeSupply()}%`} /></Container>}
                </Box>
                <UpDownPercent fontSize={12} value={item.circulatingSupplyChangePercent24h} boxSize={2.5} />
              </VStack>
            </Container>
            <VStack align='start' pl={3}>
              <VStack align='start' pb={4}>
                <Text size='sm' color='secondary_text'>Volume 24h</Text>
                <Text size='sm' fontWeight='extrabold'>
                  {!item.volume24h ? '---' : '$' + Number(item.volume24h.toFixed(2)).toLocaleString()}
                </Text>
                <UpDownPercent fontSize={12} value={item.priceChangePercent24h} boxSize={2.5} />
              </VStack>
              <VStack align='start' pb={2} spacing={1}>
                <Text size='sm' color='secondary_text'>Volume / Market Cap</Text>
                <Text size='sm' fontWeight='extrabold'>
                  {!item.volumeMarketCapRatio ? '---' : '$' + Number(item.volumeMarketCapRatio.toFixed(2)).toLocaleString()}
                </Text>
              </VStack>
              <VStack align='start' pb={1} spacing={1}>
                <Text size='sm' color='secondary_text'>Total Supply</Text>
                <Text size='sm' fontWeight='extrabold'>
                  {!item.totalSupply ? '---' : '$' + Number(item.totalSupply.toFixed(2)).toLocaleString()}
                </Text>
              </VStack>
              <VStack align='start' spacing={1}>
                <Text size='sm' color='secondary_text'>Max Supply</Text>
                <Text size='sm' fontWeight='extrabold'>
                  {!item.maxSupply ? '---' : '$' + Number(item.maxSupply.toFixed(2)).toLocaleString()}
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
                  {!item.price ? '---' : '$' + Number(item.price.toFixed(2)).toLocaleString()}
                </Text>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Price Change 24h</Text>
                <VStack spacing={1} align='end'>
                  <Text size='xs' fontWeight='extrabold'>
                    {!item.price ? '---' : '$' + Number(item.volume24h.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={10} value={item.priceChangePercent24h} boxSize={2} />
                </VStack>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>24h Low / 24h High</Text>
                <VStack spacing={1} align='end'>
                  <Text size='xs' fontWeight='extrabold'>
                    {!item.low24h ? '---' : '$' + Number(item.low24h.toFixed(2)).toLocaleString()}
                  </Text>
                  <Text size='xs' fontWeight='extrabold'>
                    {!item.high24h ? '---' : '$' + Number(item.high24h.toFixed(2)).toLocaleString()}
                  </Text>
                </VStack>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Trading Volume 24h</Text>
                <VStack spacing={1} align='end'>
                  <Text size='xs' fontWeight='extrabold'>
                    {!item.volume24h ? '---' : '$' + Number(item.volume24h.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={10} value={item.priceChangePercent24h} boxSize={2} />
                </VStack>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Volume / Market Cap</Text>
                <Text size='xs' fontWeight='extrabold'>
                  {!item.volumeMarketCapRatio ? '---' : Number(item.volumeMarketCapRatio.toFixed(5))}
                </Text>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Market Dominance</Text>
                <Text size='xs' fontWeight='extrabold'>
                  {!item.marketDominance ? '---' : Number(item.marketDominance.toFixed(2)) + '%'}
                </Text>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Market Rank</Text>
                <Text size='xs' fontWeight='extrabold'>#{item.rank}</Text>
              </Flex>
              <Flex w='full' justify='space-between' align='center' pt={4}>
                <Text size='xs' color='secondary_text'>Market Cap</Text>
                <VStack spacing={1} align='end'>
                  <Text size='xs' fontWeight='extrabold'>
                    {!item.marketCap ? '---' : '$' + Number(item.marketCap.toFixed(2)).toLocaleString()}
                  </Text>
                  <UpDownPercent fontSize={10} value={item.marketCapChangePercent24h} boxSize={2} />
                </VStack>
              </Flex>
              <Divider borderWidth={1} color='grey.200' />
              <Flex w='full' justify='space-between' align='center'>
                <Text size='xs' color='secondary_text'>Fully Diluted Market Cap</Text>
                <VStack spacing={1} align='end'>
                  <Text size='xs' fontWeight='extrabold'>
                    {!item.fullyDiluted ? '---' : '$' + Number(item.fullyDiluted.toFixed(2)).toLocaleString()}
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
              <Flex>
                <VStack align='start'>
                  <Text fontSize={['3xl', '4xl', '40']} fontWeight='bold'>{item.fundamentalRating}</Text>
                  <Text fontWeight='extrabold'>Fundamental Rating</Text>
                  <Text size='sm' color='secondary_text'>Technical Ratings is a technical analysis tool that combines the ratings of several
                    technical indicators to make it easier for traders and investors to find profitable trades.</Text>
                  <HStack align='start' pt={4}>
                    <Container variant='itemInfo' pl={0} display='flex'>
                      <Text pb={2} size='xs' color='secondary_text'>Market cup</Text>
                      <Text size='sm' fontWeight='extrabold'>
                        0
                      </Text>
                    </Container>
                    <Container variant='itemInfo' display='flex'>
                      <Text pb={2} size='xs' color='secondary_text'>Valume</Text>
                      <Text size='sm' fontWeight='extrabold'>
                        0
                      </Text>
                    </Container>
                    <Container variant='itemInfo' display='flex'>
                      <Text pb={2} size='xs' color='secondary_text'>7 Day Turnover</Text>
                      <Text size='sm' fontWeight='extrabold'>
                        0
                      </Text>
                    </Container>
                    <Container variant='itemInfo' border='none' display='flex'>
                      <Text pb={2} size='xs' color='secondary_text'>Owners / Items</Text>
                      <Text size='sm' fontWeight='extrabold'>
                        0
                      </Text>
                    </Container>
                  </HStack>
                </VStack>
                <Container variant='rating'><Box h={item.fundamentalRating + '%'} /></Container>
              </Flex>
            </Container>
            <Container variant='rating_block' ml={5}>
              <Flex>
                <VStack align='start'>
                  <Text fontSize={['3xl', '4xl', '40']} fontWeight='bold'>{item.technicalRating}</Text>
                  <Text fontWeight='extrabold'>Technical Rating</Text>
                  <Text size='sm' color='secondary_text'>Technical Ratings is a technical analysis tool that combines the ratings of several
                    technical indicators to make it easier for traders and investors to find profitable trades.</Text>
                  <HStack align='start' pt={4}>
                    <Container variant='itemInfo' pl={0} display='flex'>
                      <Text pb={2} size='xs' color='secondary_text'>Market cup</Text>
                      <Text size='sm' fontWeight='extrabold'>
                        0
                      </Text>
                    </Container>
                    <Container variant='itemInfo' display='flex'>
                      <Text pb={2} size='xs' color='secondary_text'>Valume</Text>
                      <Text size='sm' fontWeight='extrabold'>
                        0
                      </Text>
                    </Container>
                    <Container variant='itemInfo' display='flex'>
                      <Text pb={2} size='xs' color='secondary_text'>7 Day Turnover</Text>
                      <Text size='sm' fontWeight='extrabold'>
                        0
                      </Text>
                    </Container>
                    <Container variant='itemInfo' border='none' display='flex'>
                      <Text pb={2} size='xs' color='secondary_text'>Owners / Items</Text>
                      <Text size='sm' fontWeight='extrabold'>
                        0
                      </Text>
                    </Container>
                  </HStack>
                </VStack>
                <Container variant='rating'><Box h={item.technicalRating + '%'} /></Container>
              </Flex>
            </Container>
          </Flex>
          <Text fontSize={20} fontWeight='extrabold' my={10}>
            {item.name} Markets
          </Text>
          <Box overflowX='auto'>
            <HStack pb={3} pl={3} spacing='none' minW={1000}>
              {[
                { title: '#', w: '4%' },
                { title: 'Source', w: '20%' },
                { title: 'Pair ', w: '15%' },
              ].map((el) =>
                <Text variant='list_text' w={el.w} key={el.title}>
                  {el.title}
                </Text>,
              )}
              {[
                { title: 'Price', w: '7%' },
                { title: '+2% Depth', w: '12%' },
                { title: '-2% Depth', w: '12%' },
                { title: 'Volume', w: '12%' },
                { title: 'Volume %', w: '10%' },
                { title: 'Liquidity', w: '7%' },
              ].map((el) =>
                <Text variant='list_text' textAlign='end' w={el.w} key={el.title}>
                  {el.title}
                </Text>,
              )}

            </HStack>
            {markets && marketList.tickers.length && marketList.tickers.map((el, i) => (
              <Container variant='list_item' key={i} minW={1000} whiteSpace='nowrap'>
                <Text size='sm' textAlign='start' w='4%' position='sticky' zIndex={20} >{i + 1}</Text>
                <HStack w='20%'>
                  <Box minW={8} minH={8} position='relative' borderRadius='base' overflow='hidden'>
                    <Image priority loader={exportableLoader} src={el.logo} alt='icon' layout='fill' unoptimized />
                  </Box>
                  <Text variant='list_text' whiteSpace='normal'>
                    {el.source}
                  </Text>
                </HStack>
                <Text variant='list_text' w='15%' textAlign='start' color='primary.100'>
                  {!el.pair ? '---' : el.pair.slice(0, 15)}
                </Text>
                <Text w='7%' textAlign='end' variant='list_text'>
                  {!el.price ? '---' : '$' + Number(el.price.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='12%' textAlign='end' variant='list_text'>
                  {!el.plus2Depth ? '---' : '$' + Number(el.plus2Depth.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='12%' variant='list_text' textAlign='end'>
                  {!el.minus2Depth ? '--' : '$' + Number(el.minus2Depth.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='12%' variant='list_text' textAlign='end'>
                  {!el.volume24h ? '--' : '$' + Number(el.volume24h.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='10%' variant='list_text' textAlign='end'>
                  {!el.volume24hPercent ? '---' : Number(el.volume24hPercent.toFixed(2)) + '%'}
                </Text>
                <Text w='7%' variant='list_text' textAlign='end'>
                  {!el.liquidity ? '---' : Number(el.liquidity.toFixed(2)).toLocaleString()}
                </Text>
              </Container>
            ))}
          </Box>
          <Container variant='pagination'>
            <PaginationComp
              pageSize={100}
              changePage={changePage}
              current={page}
              total={100}
            />
          </Container>
        </Container>
      </PageLayout>
    </PageMeta >
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const item = await coinItem({ slug: `${context?.params?.id}` })
  const markets = await coinMarkets({ slug: `${context?.params?.id}`, limit: 10, offset: 0 })

  return {
    props: { item, markets },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await coinAll()

  const paths = data.map((el: CoinItem) => ({
    params: { id: el.id },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default CryptocurrencyItem
