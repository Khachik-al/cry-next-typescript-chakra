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

type TData = {
  items: {
    fundamentalRating: number;
    icon: string;
    marketCap: number;
    name: string;
    price: number;
    priceChangePercent7d: number;
    priceChangePercent24h: number;
    rank: 1
    sparkline: number[];
    technicalRating: number;
    volume24h: number;
  }[];
  count: number;
}

interface Props {
  data: TData;
}

const Nfts: NextPage<Props> = ({ data }) => {
  const [list, setList] = useState(data.items)
  const [page, setPage] = useState(1)

  console.log(data);

  const changePage = async (value: number) => {
    setPage(value)
    const pageData = await coinList({ offset: value - 1, limit: 10 })
    setList(pageData.items)
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
                { title: 'Coin', w: ['20%', '30%'] },
              ].map((el) =>
                <Text variant='list_text' w={el.w} key={el.title}>
                  {el.title}
                </Text>,
              )}
              {[
                { title: 'Price', w: '10%' },
                { title: '24h', w: '10%' },
                { title: '7d', w: '10%' },
              ].map((el) =>
                <Text variant='list_text' textAlign='end' w={el.w} key={el.title}>
                  {el.title}
                </Text>,
              )}
              {[
                { title: 'Fundamental Rating' },
                { title: 'Technical Rating' },
              ].map((el) =>
                <Text variant='list_text' textAlign='center' w='10%' key={el.title}>
                  {el.title}
                </Text>,
              )}
              {[
                { title: 'Volume(24h)', w: '10%' },
                { title: 'Market Cap', w: '10%' },
                { title: 'Last 7 Days', w: '10%' },
              ].map((el) =>
                <Text variant='list_text' textAlign='end' w={el.w} key={el.title}>
                  {el.title}
                </Text>,
              )}
            </HStack>
            {list.map((el, i) => (
              <Container variant='list_item' key={i} minW={1000}>
                <Text size='sm' textAlign='start' w='4%' position='sticky' zIndex={20} >{el.rank}</Text>
                <HStack w={['20%', '30%']}>
                  <Box minW={8} minH={8} position='relative' borderRadius='base' overflow='hidden'>
                    <Image loader={exportableLoader} src={el.icon} alt='icon' layout='fill' unoptimized />
                  </Box>
                  <Link href={`/nft/${el.name}`} passHref>
                    <Text variant='link' size='sm' fontWeight='extrabold'>
                      {el.name}
                    </Text>
                  </Link>
                </HStack>
                <Text variant='list_text' w='10%' textAlign='end'>
                  {el.price === null ? '---' : '$' + Number(el.price.toFixed(2))}
                </Text>
                <Text
                  textAlign='end'
                  variant='list_text'
                  w='10%'
                  color={el.priceChangePercent24h < 0 ? 'danger' : 'primary.100'}
                >
                  {el.priceChangePercent24h === null ? '---' : '$' + Number(el.priceChangePercent24h.toFixed(2))}
                </Text>
                <Text
                  textAlign='end'
                  variant='list_text'
                  w='10%'
                  color={el.priceChangePercent7d < 0 ? 'danger' : 'primary.100'}
                >
                  {el.priceChangePercent7d === null ? '---' : '$' + Number(el.priceChangePercent7d.toFixed(2))}
                </Text>
                <Flex justify='center' w='10%'>
                  <Center borderRadius='2xl' bg='blue.100' p={2}>
                    <Text variant='list_text' fontWeight='medium'>
                      {el.fundamentalRating === null ? '--' : Number(el.technicalRating.toFixed(2))}
                    </Text>
                  </Center>
                </Flex>
                <Flex justify='center' w='10%'>
                  <Center borderRadius='2xl' bg='blue.100' p={2}>
                    <Text variant='list_text' fontWeight='medium'>
                      {el.technicalRating === null ? '--' : Number(el.technicalRating.toFixed(2))}
                    </Text>
                  </Center>
                </Flex>
                <Text
                  variant='list_text'
                  textAlign='end'
                  w='10%'
                >
                  {el.volume24h === null ? '---' : '$' + Number(el.volume24h.toFixed(2))}
                </Text>
                <Text w='10%' variant='list_text' textAlign='end'>
                  {el.marketCap === null ? '---' : '$' + Number(el.marketCap.toFixed(2))}
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

export default Nfts
