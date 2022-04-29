import { Box, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import PaginationComp from '../../components/Pagination'
import { ExchangeItemType, ExchangeMarket } from '../../components/types/exchange-item.interface'
import { exportableLoader } from '../../image-loader'
import { exchangeMarket } from '../../services'

interface Props {
  item: ExchangeItemType;
  market: ExchangeMarket;
}

const ExchangeItem: NextPage<Props> = ({ item, market }) => {

  const [marketList, steMarketList] = useState<ExchangeMarket>()
  const [page, setPage] = useState(1)

  const changePage = async (value: number) => {
    setPage(value)
    const pageData = await exchangeMarket({ slug: item.slug, limit: 10, offset: value - 1 })
    steMarketList(pageData.tickers)
  }

  useEffect(() => {
    if (market) {
      steMarketList(market)
    }
  }, [market])
  return (
    item && <PageMeta title={item.name}>
      <PageLayout>
        <Container variant='main'>
          <Flex justify='space-between' w={['full', 'full', '70%', '50%']} overflow='auto hidden'>
            <VStack align='start'>
              <HStack spacing={4} minW='44'>
                <Box minW={50} minH={50} position='relative' borderRadius='base' overflow='hidden'>
                  <Image loader={exportableLoader} src={item.logo} alt='icon' layout='fill' unoptimized />
                </Box>
                <VStack spacing={1} align='start' pr={2}>
                  <Heading as='h2' fontSize={20}>{item.name}</Heading>
                  <Text color='secondary_text' size='sm'>Centralized</Text>
                </VStack>
              </HStack>
            </VStack>
            <VStack align='start'>
              <Text size='md' color='secondary_text'>
                Volume(24h)
              </Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {item.valume24h === null ? '---' : '$' + Number(item.valume24h.toFixed(2)).toLocaleString()}
              </Text>
            </VStack>
          </Flex>
          <HStack mb={10} mt={3}>
            <Container variant='link'>
              <Image
                loader={exportableLoader}
                src='/assets/img/link.svg'
                alt='icon'
                height={12}
                width={12}
              />
              <Text mx={1}>website</Text>
            </Container>
            <Container variant='link'>
              <Image
                loader={exportableLoader}
                src='/assets/img/receipt_item.svg'
                alt='icon'
                height={12}
                width={12}
              />
              <Text mx={1}>Fees</Text>
            </Container>
            <Container variant='link'>
              <Image
                loader={exportableLoader}
                src='/assets/img/grey_twitter.svg'
                alt='icon'
                height={12}
                width={12}
              />
              <Text mx={1}>@binance</Text>
            </Container>
          </HStack>
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
            {marketList?.coins.map((el, i) => (
              <Container variant='list_item' key={i} minW={1000} whiteSpace='nowrap'>
                <Text size='sm' textAlign='start' w='4%' position='sticky' zIndex={20} >{i + 1}</Text>
                <HStack w='20%'>
                  <Box minW={8} minH={8} position='relative' borderRadius='base' overflow='hidden'>
                    <Image priority loader={exportableLoader} src={el.logo} alt='icon' layout='fill' unoptimized />
                  </Box>
                  <Link href={`/cryptocurrency/${el.id}`} passHref>
                    <Text variant='link' fontWeight='extrabold'>
                      {el.source}
                    </Text>
                  </Link>
                </HStack>
                <Text variant='list_text' w='15%' textAlign='start' color='primary.100'>
                  {el.pair === null ? '---' : el.pair.slice(0, 15)}
                </Text>
                <Text w='7%' textAlign='end' variant='list_text'>
                  {el.price === null ? '---' : '$' + Number(el.price.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='12%' textAlign='end' variant='list_text'>
                  {el.plus2Depth === null ? '---' : '$' + Number(el.plus2Depth.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='12%' variant='list_text' textAlign='end'>
                  {el.minus2Depth === null ? '--' : '$' + Number(el.minus2Depth.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='12%' variant='list_text' textAlign='end'>
                  {el.volume24h === null ? '--' : '$' + Number(el.volume24h.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='10%' variant='list_text' textAlign='end'
                  color={el.volume24hPercent < 0 ? 'danger' : 'primary.100'}>
                  {el.volume24hPercent === null ? '---' : Number(el.volume24hPercent.toFixed(2)) + '%'}
                </Text>
                <Text w='7%' variant='list_text' textAlign='end'>
                  {el.liquidity === null ? '---' : Number(el.liquidity.toFixed(2)).toLocaleString()}
                </Text>
              </Container>
            ))}
          </Box>
          <Container variant='pagination'>
            <PaginationComp
              pageSize={100}
              changePage={changePage}
              current={page}
              total={market.count}
            />
          </Container>
        </Container>
      </PageLayout>
    </PageMeta>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const item = {
    logo: 'https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250',
    name: 'Binance',
    valume24h: 70017774414.14,
  }
  const market = {
    coins: [
      {
        id: 'bitcoin',
        liquidity: 971,
        logo: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
        minus2Depth: 10530855.88,
        pair: 'BTC/USDT',
        plus2Depth: 10530855.88,
        price: 37523.36,
        rank: 1,
        source: 'Bitcoin',
        volume24h: 1748112608,
        volume24hPercent: 3.09,
      },
      {
        id: 'bitcoin',
        liquidity: 971,
        logo: 'https://assets.coingecko.com/coins/images/1/thumb/bitcoin.png?1547033579',
        minus2Depth: 10530855.88,
        pair: 'BTC/USDT',
        plus2Depth: 10530855.88,
        price: 37523.36,
        rank: 1,
        source: 'Bitcoin',
        volume24h: 1748112608,
        volume24hPercent: 3.09,
      },
    ],
  }
  return {
    props: { item, market },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = [
    { name: 'Bitcoin', ticker: 'bitcoin' },
    { name: 'Etherium', ticker: 'etherium' },
    { name: 'BNB', ticker: 'bnb' },
    { name: 'Tether', ticker: 'tether' },
    { name: 'Tether', ticker: 'tether' },
    { name: 'Tether', ticker: 'tether' },
    { name: 'Tether', ticker: 'tether' },
    { name: 'Tether', ticker: 'tether' },
    { name: 'Tether', ticker: 'tether' },
  ]

  const paths = data.map((el) => ({
    params: { id: el.ticker },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default ExchangeItem
