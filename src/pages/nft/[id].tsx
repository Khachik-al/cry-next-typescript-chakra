import { Box, Button, Container, Flex, Heading, HStack, Text, Tooltip, VStack } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import { coinChartData } from '../../components/Chart/chartdata'
import Image from 'next/image'
import { exportableLoader } from '../../image-loader'
import { useState } from 'react'
import { nftAll, nftItem, nftMarketplace } from '../../services'
import { TriangleDownIcon, TriangleUpIcon } from '@chakra-ui/icons'
import { NFTMarketItem, Marketplace } from '../../components/types/nft-marketplace.interface'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const Chart = dynamic(() => import('../../components/Chart/Chart'), {
  ssr: false,
})

interface Props {
  item: NFTMarketItem;
  marketplace: Marketplace;
}
enum Path {
  next = 'next',
  previous = 'previous',
}

const NftItem: NextPage<Props> = ({ item, marketplace }) => {
  const { query } = useRouter()
  const [marketplaceList, setMarketplaceList] = useState(marketplace)
  const [chartTimePicker, setChartTimePicker] = useState<string>('1D')
  const changePage = async (path: Path) => {
    if (typeof query.id === 'string') {
      const pageData = await nftMarketplace({ slug: query.id, limit: 10, offset: marketplaceList[path] || '' })
      setMarketplaceList(pageData)
    }
  }

  return (
    <PageMeta title={`${query.id}`}>
      <PageLayout>
        {item && <Container variant='main'>
          <HStack align='start' whiteSpace='nowrap' overflowX='auto'>
            <VStack align='start' pr={14}>
              <HStack spacing={4} minW='44'>
                <Box minW={50} minH={50} position='relative' borderRadius='base' overflow='hidden'>
                  <Image loader={exportableLoader} src={item.logo} alt='icon' layout='fill' unoptimized />
                </Box>
                <VStack spacing={1} align='start'>
                  <Heading as='h2' fontSize={20}>{item.name}</Heading>
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
                {item.floorPriceEth === null ? '---' : Number(item.floorPriceEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text size='md' color='secondary_text'>
                {item.floorPriceUsd === null ? '---' : '$' + Number(item.floorPriceUsd.toFixed(2))}
              </Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>24h %</Text>
              <Text
                pb={3.5}
                size='lg'
                color={item.volumeChangePercent24h < 0 ? 'danger' : 'primary.100'}
                fontWeight='extrabold'
              >
                {item.volumeChangePercent24h < 0 ?
                  <TriangleDownIcon boxSize={3} mb={1} /> :
                  <TriangleUpIcon boxSize={3} mb={1} />}
                {' '}
                {item.volumeChangePercent24h === null ?
                  '---' :
                  Number(item.volumeChangePercent24h.toFixed(2)) + ' %'}
              </Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>Market Cap</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {item.marketCapEth === null ? '---' : Number(item.marketCapEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text pb={6} size='md' color='secondary_text'>
                {item.marketCapUsd === null ? '---' : '$' + Number(item.marketCapUsd.toFixed(2))}
              </Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>24h Volume</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {item.volumeChange24hEth === null ? '---' : Number(item.volumeChange24hEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text size='md' color='secondary_text'>
                {item.volumeChange24hUsd === null ? '---' : '$' + Number(item.volumeChange24hUsd.toFixed(2))}
              </Text>
              <Text size='md' color='primary.100'>
                {item.volumeChange24hEth === null ? '---' : Number(item.volumeChange24hEth.toFixed(2))}
              </Text>
            </Container>
            <Container variant='nft_item_info'>
              <Text pb={2} size='sm' color='secondary_text'>Owners</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>
                {item.owners === null ? '---' : item.owners}
              </Text>
            </Container>
            <Container variant='nft_item_info' border='none'>
              <Text pb={2} size='sm' color='secondary_text'>Items</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>
                {item.items === null ? '---' : item.items}
              </Text>
            </Container>
          </HStack>
          <HStack mt={5} align='start' display={['flex', 'flex', 'none']}>
            <Container variant='nft_item_info' pl={0} pr={10} display='flex'>
              <Text pb={2} size='sm' color='secondary_text'>24h Volume</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {item.volumeChange24hEth === null ? '---' : Number(item.volumeChange24hEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text size='md' color='secondary_text'>
                {item.volumeChange24hUsd === null ? '---' : '$' + Number(item.volumeChange24hUsd.toFixed(2))}
              </Text>
              <Text pb={3} size='md' color='primary.100'>
                {item.volumeChange24hEth === null ? '---' : Number(item.volumeChange24hEth.toFixed(2))}
              </Text>
              <Text pb={2} size='sm' color='secondary_text'>24h %</Text>
              <Text
                pb={3.5}
                size='lg'
                color={item.volumeChangePercent24h < 0 ? 'danger' : 'primary.100'}
                fontWeight='extrabold'
              >
                {item.volumeChangePercent24h < 0 ?
                  <TriangleDownIcon boxSize={3} mb={1} /> :
                  <TriangleUpIcon boxSize={3} mb={1} />}
                {' '}
                {item.volumeChangePercent24h === null ?
                  '---' :
                  Number(item.volumeChangePercent24h.toFixed(2)) + ' %'}
              </Text>
              <Text pb={2} size='sm' color='secondary_text'>Market Cap</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {item.marketCapEth === null ? '---' : Number(item.marketCapEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text pb={3} size='md' color='secondary_text'>
                {item.marketCapUsd === null ? '---' : '$' + Number(item.marketCapUsd.toFixed(2))}
              </Text>
            </Container>
            <VStack align='start' pl={3}>
              <Text pb={2} size='sm' color='secondary_text'>Floor Price</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {item.floorPriceEth === null ? '---' : (item.floorPriceEth.toFixed(2) + ' ETH')}
              </Text>
              <Text size='md' color='secondary_text'>
                {item.floorPriceUsd === null ? '---' : ('$' + item.floorPriceUsd.toFixed(2))}
              </Text>
              <Text pb={2} size='sm' color='secondary_text'>Owners</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>
                {item.owners === null ? '---' : item.owners}
              </Text>
              <Text pb={2} size='sm' color='secondary_text'>Items</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {item.items === null ? '---' : item.items}
              </Text>
            </VStack>
          </HStack>
          <Text fontSize={20} fontWeight='extrabold' mt={10} mb={5}>
            {item.name} Floor Price Chart
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
          <Chart data={coinChartData} />
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
          <Text fontSize={20} fontWeight='extrabold' mt={10} mb={10}>
            Live Marketplace
          </Text>
          <Box overflowX='auto'>
            <HStack pb={3} pl={3} spacing='none' minW={1000}>
              <Text variant='list_text' w='75%' pl={89}>
                NFT
              </Text>,
              {[
                { title: 'Price', w: '15%' },
                { title: 'Seller', w: '10%' },
              ].map((el) =>
                <Text variant='list_text' w={el.w} key={el.title}>
                  {el.title}
                </Text>,
              )}
            </HStack>
            {!!marketplaceList.assets.length ? marketplaceList.assets.map((el, i) => (
              <Container variant='list_item' key={i} minW={1000}>
                <HStack w='75%' spacing={5}>
                  <Box minW={68} minH={68} position='relative' borderRadius='lg' overflow='hidden'>
                    <Image loader={exportableLoader} src={el.img_url} alt='icon' layout='fill' unoptimized />
                  </Box>
                  <VStack align='start'>
                    <Link href={el.permalink} passHref>
                      <Text variant='link' fontSize='12' fontWeight='extrabold'>
                        {el.name} #{el.token_id} <Text as='span' color='primary.100'>#516</Text>
                      </Text>
                    </Link>
                    <HStack>
                      {el.traits.map((trait) =>
                        <Text fontSize={8} key={trait.trait_type}>
                          {trait.trait_type} - <Text as='span' color='secondary_text'>{trait.value}</Text>;
                        </Text>,
                      )}
                    </HStack>
                    <Text size='xs' color='secondary_text'>
                      Listed: 29min ago
                    </Text>
                  </VStack>
                </HStack>
                <VStack w='15%' spacing={0.5} align='start'>
                  <Text variant='list_text'>
                    {el.price_eth === null ? '---' : Number(el.price_eth.toFixed(2)) + ' ETH'}
                  </Text>
                  <Text color='secondary_text' size='xs'>
                    {el.price_usd === null ? '---' : '$' + Number(el.price_usd.toFixed(2))}
                  </Text>
                </VStack>
                <Tooltip label={el.address}>
                  <Text w='10%' color='secondary_text' size='xs'>
                    {el.address.length > 10 ?
                      el.address.slice(0, 7) + '...' + el.address.slice(-6, el.address.length)
                      : el.address}
                  </Text>
                </Tooltip>
              </Container>
            )) : <h1>0 items</h1>}
          </Box>
          {!!marketplaceList.assets.length &&
            <HStack>
              <Button
                onClick={() => changePage(Path.previous)}
                isDisabled={marketplaceList.previous === null}
                size='xs'
              >
                {'<'}
              </Button>
              <Button
                onClick={() => changePage(Path.next)}
                isDisabled={marketplaceList.next === null}
                size='xs'
              >
                {'>'}
              </Button>
            </HStack>}
        </Container>}
      </PageLayout>
    </PageMeta>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const item = await nftItem({ slug: `${context?.params?.id}` })
  const marketplace = await nftMarketplace({ slug: `${context?.params?.id}`, limit: 10, offset: '' })

  return {
    props: { item, marketplace },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await nftAll()

  const paths = data.items.map((el: NFTMarketItem) => ({
    params: { id: el.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default NftItem
