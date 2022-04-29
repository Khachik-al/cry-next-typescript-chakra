import { Box, Container, HStack, Text } from '@chakra-ui/react'
import { UTCTimestamp } from 'lightweight-charts'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import { useState } from 'react'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('../../components/Chart/Chart'), {
  ssr: false,
})
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import PaginationComp from '../../components/Pagination'
import { exportableLoader } from '../../image-loader'
import { exchangeList } from '../../services'
import Link from 'next/link'

type TData = {
  items: {
    slug: string;
    liquidity: number | null;
    logo: string;
    pair: number;
    coins: number;
    rank: number | null;
    source: string;
    volume24h: number;
    weekly: number | null;
    valume7d: number[]
  }[];
  count: number;
}

interface Props {
  data: TData;
}

const Exchanges: NextPage<Props> = ({ data }) => {
  const [list, setList] = useState(data.items)
  const [page, setPage] = useState(1)

  const changePage = async (value: number) => {
    setPage(value)
    const pageData = await exchangeList({ offset: value - 1, limit: 10 })
    setList(pageData.items)
  }
  return (
    <PageMeta title='Exchanges'>
      <PageLayout>
        <Container variant='main'>
          <Text fontSize={20} fontWeight='bold' mb={10}>
            Top Cryptocurrency Exchanges
          </Text>
          <HStack mb={5}>
            <Container variant='link' borderRadius='2xl'>
              <Text m={2} fontSize={12}>USD</Text>
            </Container>
            <Container variant='link' borderRadius='2xl'>
              <Text m={2} fontSize={12}>All Categories</Text>
            </Container>
          </HStack>
          <Box overflowX='auto'>
            <HStack pb={3} pl={3} spacing='none' minW={1000}>
              {[
                { title: '#', w: '4%' },
                { title: 'Exchange', w: '35%' },
              ].map((el) =>
                <Text variant='list_text' w={el.w} key={el.title}>
                  {el.title}
                </Text>,
              )}
              {[
                { title: 'Volume(24h)', w: '10%' },
                { title: 'Avg. Liquidity', w: '12%' },
                { title: 'Weekly Visits', w: '12%' },
                { title: '# Coins', w: '7%' },
                { title: '# Pairs', w: '7%' },
                { title: 'Volume Graph (7d)', w: '15%' },
              ].map((el) =>
                <Text variant='list_text' textAlign='end' w={el.w} key={el.title}>
                  {el.title}
                </Text>,
              )}
            </HStack>
            {list.map((el, i) => (
              <Container variant='list_item' key={i} minW={1000} whiteSpace='nowrap'>
                <Text size='sm' textAlign='start' w='4%' position='sticky' zIndex={20} >{i + 1}</Text>
                <HStack w='35%'>
                  <Box minW={8} minH={8} position='relative' borderRadius='base' overflow='hidden'>
                    <Image priority loader={exportableLoader} src={el.logo} alt='icon' layout='fill' unoptimized />
                  </Box>
                  <Link href={`/exchange/${el.slug}`} passHref>
                    <Text variant='link' fontWeight='extrabold'>
                      {el.source}
                    </Text>
                  </Link>
                </HStack>
                <Text w='10%' textAlign='end' variant='list_text'>
                  {el.volume24h === null ? '---' : '$' + Number(el.volume24h.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='12%' textAlign='end' variant='list_text'>
                  {el.liquidity === null ? '---' : el.liquidity.toLocaleString()}
                </Text>
                <Text w='12%' variant='list_text' textAlign='end'>
                  {el.weekly === null ? '--' : '$' + Number(el.weekly.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='7%' variant='list_text' textAlign='end'>
                  {el.coins === null ? '--' : el.coins.toLocaleString()}
                </Text>
                <Text w='7%' variant='list_text' textAlign='end'>
                  {el.pair === null ? '---' : el.pair.toLocaleString()}
                </Text>
                <Text w='15%' variant='list_text' textAlign='end' pl={5}>
                  <Chart
                    small
                    height={35}
                    data={el.valume7d.map((elem, index) => ({ value: elem, time: index as UTCTimestamp }))}
                    redColor={false}
                  />
                </Text>
              </Container>
            ))}
          </Box>
          <Container variant='pagination'>
            <PaginationComp
              pageSize={100}
              changePage={changePage}
              current={page}
              total={data.count}
            />
          </Container>
        </Container>
      </PageLayout>
    </PageMeta>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = {
    items: [
      {
        slug: 'binance',
        liquidity: '362',
        logo: 'https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250',
        pair: 1434,
        coins: 362,
        rank: 1,
        source: 'Binance',
        volume24h: 15744792357,
        weekly: 155500000.0,
        valume7d: [1, 5, 7, 4, 9, 2, 6, 8, 4, 9, 6, 54, 64, 94],
      },
      {
        slug: 'binance',
        liquidity: '362',
        logo: 'https://assets.coingecko.com/markets/images/52/small/binance.jpg?1519353250',
        pair: 1434,
        coins: 362,
        rank: 1,
        source: 'Binance',
        volume24h: 15744792357,
        weekly: 155500000.0,
        valume7d: [4, 9, 6, 54, 64, 1, 5, 7, 4, 9, 2, 6],
      },
    ],
  }

  return {
    props: { data },
  }
}

export default Exchanges
