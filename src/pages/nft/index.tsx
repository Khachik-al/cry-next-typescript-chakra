import { Box, Center, Container, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import 'rc-pagination/assets/index.css'
import { exportableLoader } from '../../image-loader'
import PaginationComp from '../../components/Pagination'
import { nftList } from '../../services'

type TData = {
  items: {
    logo: string;
    rank: number;
    name: string;
    slug: string;
    fundamentalRating: number;
    technicalRating: number;
    floorPriceEth: number;
    floorPriceUsd: number;
    volumeChangePercent24h: number;
    marketCapEth: number;
    marketCapUsd: number;
    volumeChange24hEth: number;
    owners: number;
    items: number;
  }[];
  count: number;
}

interface Props {
  data: TData;
}

const Nfts: NextPage<Props> = ({ data }) => {
  const [list, setList] = useState(data.items)
  const [page, setPage] = useState(1)
  console.log(data)


  const changePage = async (value: number) => {
    setPage(value)
    const pageData = await nftList({ offset: value - 1, limit: 10 })
    setList(pageData.items)
  }
  return (
    <PageMeta title='Nfts'>
      <PageLayout>
        <Container variant='main'>
          <Text fontSize={20} fontWeight='extrabold' mb={10}>
            Top NFT Rankings
          </Text>
          <Box overflowX='auto'>
            <HStack pb={3} pl={3} spacing='none' minW={1000}>
              {[
                { title: '#', w: '4%' },
                { title: 'Collection', w: ['20%', '30%'] },
              ].map((el) =>
                <Text variant='list_text' w={el.w} key={el.title}>
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
                { title: 'Floor Price', w: '10%' },
                { title: '24h %', w: '9%' },
                { title: 'Market Cap', w: '13%' },
                { title: '24h Volume', w: '10%' },
                { title: 'Owners', w: '9%' },
                { title: 'Items', w: '9%' },
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
                    <Image loader={exportableLoader} src={el.logo} alt='icon' layout='fill' unoptimized />
                  </Box>
                  <Link href={`/nft/${el.slug}`} passHref>
                    <Text variant='link' size='sm' fontWeight='extrabold'>
                      {el.name}
                    </Text>
                  </Link>
                </HStack>
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
                <VStack w='10%' align='end' spacing={0.5}>
                  <Text variant='list_text'>
                    {el.floorPriceEth === null ? '---' : Number(el.floorPriceEth.toFixed(2)) + ' ETH'}
                  </Text>
                  <Text color='secondary_text' size='xs'>
                    {el.floorPriceUsd === null ? '---' : '$' + Number(el.floorPriceUsd.toFixed(2))}
                  </Text>
                </VStack>
                <Text
                  variant='list_text'
                  textAlign='end'
                  w='9%'
                  color={el.volumeChangePercent24h < 0 ? 'danger' : 'primary.100'}
                >
                  {el.volumeChangePercent24h === null ? '---' : Number(el.volumeChangePercent24h.toFixed(2)) + ' %'}
                </Text>
                <VStack w='13%' align='end' spacing={0.5}>
                  <Text variant='list_text'>
                    {el.marketCapEth === null ? '---' : Number(el.marketCapEth.toFixed(2)) + ' ETH'}
                  </Text>
                  <Text color='secondary_text' size='xs'>
                    {el.marketCapUsd === null ? '---' : '$' + Number(el.marketCapUsd.toFixed(2))}
                  </Text>
                </VStack>
                <Text variant='list_text' textAlign='end' w='10%'>
                  {el.volumeChange24hEth === null ? '---' : Number(el.volumeChange24hEth.toFixed(2)) + ' ETH'}
                </Text>
                <Text variant='list_text' textAlign='end' w='9%'>
                  {el.owners === null ? '---' : el.owners}
                </Text>
                <Text variant='list_text' textAlign='end' w='9%'>
                  {el.items === null ? '---' : el.items}
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
  const data = await nftList({ offset: 0, limit: 10 })

  return {
    props: { data },
  }
}

export default Nfts
