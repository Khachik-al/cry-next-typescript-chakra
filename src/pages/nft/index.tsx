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
    rank: number;
    name: string;
    slug: string;
    fundamentalRating: number;
    technicalRating: number;
    floorPrice: number;
    volumeChangePercent24h: number;
    marketCap: number;
    volumeChange24h: number;
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

  const changePage = async (value: number) => {
    setPage(value)
    const res = await fetch(`http://localhost:3000/dev/section/nft?offset=${value-1}&limit=10`)
    const pageData = await res.json()
    setList(pageData?.data?.items)
  }
  return (
    <PageMeta title='Nfts'>
      <PageLayout>
        <Container variant='main'>
          <Text fontSize={20} fontWeight='extrabold' mb={10}>
            Top NFT Rankings
          </Text>
          <Box overflowX='auto'>
            <HStack pb={3} pl={3} spacing='none' minW='900px'>
              {[
                { title: '#', w: '2%' },
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
                { title: 'Market Cap', w: '15%' },
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
              <Container variant='list_item' key={i} minW='900px'>
                <Text size='sm' textAlign='start' w='2%' position='sticky' zIndex={20} ></Text>
                <HStack w={['20%', '30%']}>
                  <Image loader={exportableLoader} src={`/assets/img/${el.slug}.svg`} alt='icon' height={32} width={32} />
                  <Link href={`/nft/${el.slug}`} passHref>
                    <Text variant='link' size='sm' fontWeight='extrabold'>
                      {el.name}
                    </Text>
                  </Link>
                </HStack>
                <Flex justify='center' w='10%'>
                  <Center borderRadius='2xl' bg='blue.100' p={2}>
                    <Text variant='list_text' fontWeight='medium'>
                      {el.fundamentalRating}
                    </Text>
                  </Center>
                </Flex>
                <Flex justify='center' w='10%'>
                  <Center borderRadius='2xl' bg='blue.100' p={2}>
                    <Text variant='list_text' fontWeight='medium'>
                      {el.technicalRating}
                    </Text>
                  </Center>
                </Flex>
                <VStack w='10%' align='end' spacing={0.5}>
                  <Text variant='list_text'>{el.floorPrice.toString().slice(0, 8)}</Text>
                  <Text color='secondary_text' size='xs'>{el.floorPrice.toString().slice(0, 8)}</Text>
                </VStack>
                <Text variant='list_text' textAlign='end' w='9%' color='primary.100'>
                  {el.volumeChangePercent24h.toString().slice(0, 5) + ' %'}
                </Text>
                <VStack w='15%' align='end' spacing={0.5}>
                  <Text variant='list_text'>{el.marketCap}</Text>
                  <Text color='secondary_text' size='xs'>{el.marketCap}</Text>
                </VStack>
                <Text variant='list_text' textAlign='end' w='10%'>{el.volumeChange24h}</Text>
                <Text variant='list_text' textAlign='end' w='9%'>{el.owners}</Text>
                <Text variant='list_text' textAlign='end' w='9%'>{el.items}</Text>
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
