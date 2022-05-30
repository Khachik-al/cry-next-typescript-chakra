import { Box, Center, Container, Flex, HStack, Text } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import 'rc-pagination/assets/index.css'
import { exportableLoader } from '../../image-loader'
import PaginationComp from '../../components/Pagination'
import { coinList } from '../../services'
import dynamic from 'next/dynamic'
import { UTCTimestamp } from 'lightweight-charts'
const Chart = dynamic(() => import('../../components/Chart/Chart'), {
  ssr: false,
})

type TData = {
  items: {
    id: string;
    fundamentalRating: number;
    icon: string;
    marketCap: number;
    name: string;
    price: number;
    priceChangePercent7d: number;
    priceChangePercent24h: number;
    rank: number | null;
    sparkline: number[];
    technicalRating: number;
    volume24h: number;
  }[];
  count: number;
}

interface Props {
  data: TData;
}

const Cryptocurrency: NextPage<Props> = ({ data }) => {
  const [list, setList] = useState(data)
  const [page, setPage] = useState(1)

  const changePage = async (value: number) => {
    setPage(value)
    const pageData = await coinList({ offset: value - 1, limit: 10 })
    setList(pageData)
  }
  return (
    <PageMeta title='Nfts'>
      <PageLayout>
        <Container variant='main'>
          <Text fontSize={20} fontWeight='extrabold' mb={10}>
            Today's Cryptocurrency Prices by Market Cap
          </Text>
          <Box overflowX='auto'>
            <HStack pb={3} pl={3} spacing='none' minW={1000}>
              {[
                { title: '#', w: '4%' },
                { title: 'Coin', w: '20%' },
              ].map((el) =>
                <Text variant='list_text' w={el.w} key={el.title}>
                  {el.title}
                </Text>,
              )}
              {[
                { title: 'Price', w: '7%' },
                { title: '24h', w: '7%' },
                { title: '7d', w: '7%' },
              ].map((el) =>
                <Text variant='list_text' textAlign='end' w={el.w} key={el.title}>
                  {el.title}
                </Text>,
              )}
              {[
                { title: 'Fundamental Rating', w: '11%' },
                { title: 'Technical Rating', w: '8%' },
              ].map((el) =>
                <Text variant='list_text' textAlign='center' w={el.w} key={el.title} px={2}>
                  {el.title}
                </Text>,
              )}
              {[
                { title: 'Volume(24h)', w: '13%' },
                { title: 'Market Cap', w: '13%' },
                { title: 'Last 7 Days', w: '15%' },
              ].map((el) =>
                <Text variant='list_text' textAlign='end' w={el.w} key={el.title}>
                  {el.title}
                </Text>,
              )}
            </HStack>
            {list && list.items?.length && list.items.map((el, i) => (
              <Container variant='list_item' key={i} minW={1000}>
                <Text size='sm' textAlign='start' w='4%' position='sticky' zIndex={20} >{el.rank}</Text>
                <HStack w='20%'>
                  <Box minW={8} minH={8} position='relative' borderRadius='base' overflow='hidden'>
                    <Image priority loader={exportableLoader} src={el.icon || '/'} alt='icon' layout='fill' unoptimized />
                  </Box>
                  <Link href={`/cryptocurrency/${el.id}`} passHref>
                    <Text variant='link' size='sm' fontWeight='extrabold'>
                      {el.name}
                    </Text>
                  </Link>
                </HStack>
                <Text variant='list_text' w='7%' textAlign='end'>
                  {!el.price ? '---' : '$' + Number(el.price.toFixed(2)).toLocaleString()}
                </Text>
                <Text
                  w='7%'
                  textAlign='end'
                  variant='list_text'
                  color={el.priceChangePercent24h < 0 ? 'danger' : 'primary.100'}
                >
                  {!el.priceChangePercent24h ? '---' : Number(el.priceChangePercent24h.toFixed(2)) + '%'}
                </Text>
                <Text
                  w='7%'
                  textAlign='end'
                  variant='list_text'
                  color={el.priceChangePercent7d < 0 ? 'danger' : 'primary.100'}
                >
                  {!el.priceChangePercent7d ? '---' : Number(el.priceChangePercent7d.toFixed(2)) + '%'}
                </Text>
                <Flex justify='center' w='11%'>
                  <Center borderRadius='2xl' bg='blue.100' p={2}>
                    <Text variant='list_text' fontWeight='medium'>
                      {!el.fundamentalRating ? '--' : Number(el.technicalRating.toFixed(2))}
                    </Text>
                  </Center>
                </Flex>
                <Flex justify='center' w='8%'>
                  <Center borderRadius='2xl' bg='blue.100' p={2}>
                    <Text variant='list_text' fontWeight='medium'>
                      {!el.technicalRating ? '--' : Number(el.technicalRating.toFixed(2))}
                    </Text>
                  </Center>
                </Flex>
                <Text w='13%' variant='list_text' textAlign='end'>
                  {!el.volume24h ? '---' : '$' + Number(el.volume24h.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='13%' variant='list_text' textAlign='end'>
                  {!el.marketCap ? '---' : '$' + Number(el.marketCap.toFixed(2)).toLocaleString()}
                </Text>
                <Text w='15%' variant='list_text' textAlign='end' pl={5}>
                  <Chart
                    small
                    height={35}
                    data={el.sparkline.map((elem, index) => ({ value: elem, time: index as UTCTimestamp }))}
                    redColor={el.priceChangePercent7d ? el.priceChangePercent7d < 0 : true}
                  />
                </Text>
              </Container>
            ))}
          </Box>
          <Container variant='pagination'>
            <PaginationComp
              pageSize={10}
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
  const data = await coinList({ offset: 0, limit: 10 })

  return {
    props: { data },
  }
}

export default Cryptocurrency
