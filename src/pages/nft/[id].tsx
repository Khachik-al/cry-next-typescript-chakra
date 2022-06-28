import { Box, Button, Container, Flex, Heading, HStack, Text, VStack } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import { coinChartData } from '../../components/Chart/chartdata'
import Image from 'next/image'
import { exportableLoader } from '../../image-loader'
import { useState } from 'react'
import { nftAll, nftItem, nftMarketplace } from '../../services/data-services'
import { NFTMarketItem, Marketplace } from '../../components/types/nft-marketplace.interface'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import UpDownPercent from '../../components/UpDownPercent'
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
    item && <PageMeta title={item.name || ''} description={item.name || ''}>
      <PageLayout>
        <Container variant='main'>
          <HStack align='start' whiteSpace='nowrap' overflowX='auto'>
            <VStack align='start' pr={14}>
              <HStack spacing={4} minW='44'>
                <Box minW={50} minH={50} position='relative' borderRadius='base' overflow='hidden'>
                  <Image loader={exportableLoader} src={item.logoUrl || '/'} alt='icon' layout='fill' unoptimized />
                </Box>
                <VStack spacing={1} align='start'>
                  <Heading as='h1' fontSize={20}>{item.name}</Heading>
                  <Container variant='rank'>Rank #{item.rank}</Container>
                </VStack>
              </HStack>
              <Flex justify='start'>
                <Link href={item.website || `https://opensea.io/collection/${item.slug}`} passHref>
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
              </Flex>
            </VStack>
            <Container variant='itemInfo'>
              <Text pb={2} size='sm' color='secondary_text'>Floor Price</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {!item.floorPriceEth ? '---' : Number(item.floorPriceEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text size='md' color='secondary_text'>
                {!item.floorPriceUsd ? '---' : '$' + Number(item.floorPriceUsd.toFixed(2))}
              </Text>
            </Container>
            <Container variant='itemInfo' pb={3.5}>
              <Text pb={2} size='sm' color='secondary_text'>24h %</Text>
              <UpDownPercent fontSize={16} value={item.volumeChangePercent24h} boxSize={3} />
            </Container>
            <Container variant='itemInfo'>
              <Text pb={2} size='sm' color='secondary_text'>Market Cap</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {!item.marketCapEth ? '---' : Number(item.marketCapEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text size='md' color='secondary_text'>
                {!item.marketCapUsd ? '---' : '$' + Number(item.marketCapUsd.toFixed(2))}
              </Text>
            </Container>
            <Container variant='itemInfo'>
              <Text pb={2} size='sm' color='secondary_text'>24h Volume</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {!item.volumeChange24hEth ? '---' : Number(item.volumeChange24hEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text size='md' color='secondary_text'>
                {!item.volumeChange24hUsd ? '---' : '$' + Number(item.volumeChange24hUsd.toFixed(2))}
              </Text>
            </Container>
            <Container variant='itemInfo'>
              <Text pb={2} size='sm' color='secondary_text'>Owners</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>
                {!item.ownersCount ? '---' : item.ownersCount}
              </Text>
            </Container>
            <Container variant='itemInfo' border='none'>
              <Text pb={2} size='sm' color='secondary_text'>Items</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>
                {!item.itemsCount ? '---' : item.itemsCount}
              </Text>
            </Container>
          </HStack>
          <HStack mt={5} align='start' display={['flex', 'flex', 'none']}>
            <Container variant='itemInfo' pl={0} pr={10} display='flex'>
              <Text pb={2} size='sm' color='secondary_text'>24h Volume</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {!item.volumeChange24hEth ? '---' : Number(item.volumeChange24hEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text pb={3} size='md' color='secondary_text'>
                {!item.volumeChange24hUsd ? '---' : '$' + Number(item.volumeChange24hUsd.toFixed(2))}
              </Text>
              <Text pb={2} size='sm' color='secondary_text'>24h %</Text>
              <UpDownPercent fontSize={16} value={item.volumeChangePercent24h} boxSize={3} />
              <Text pt={3.5} pb={2} size='sm' color='secondary_text'>Market Cap</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {!item.marketCapEth ? '---' : Number(item.marketCapEth.toFixed(2)) + ' ETH'}
              </Text>
              <Text pb={3} size='md' color='secondary_text'>
                {!item.marketCapUsd ? '---' : '$' + Number(item.marketCapUsd.toFixed(2))}
              </Text>
            </Container>
            <VStack align='start' pl={3} spacing={0}>
              <Text pb={2} size='sm' color='secondary_text'>Floor Price</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {!item.floorPriceEth ? '---' : (item.floorPriceEth.toFixed(2) + ' ETH')}
              </Text>
              <Text size='md' color='secondary_text' pb={4}>
                {!item.floorPriceUsd ? '---' : ('$' + item.floorPriceUsd.toFixed(2))}
              </Text>
              <Text pb={2} size='sm' color='secondary_text'>Owners</Text>
              <Text pb={4} lineHeight={1} size='lg' fontWeight='extrabold'>
                {!item.ownersCount ? '---' : item.ownersCount}
              </Text>
              <Text pb={2} size='sm' color='secondary_text'>Items</Text>
              <Text lineHeight={1} size='lg' fontWeight='extrabold'>
                {!item.itemsCount ? '---' : item.itemsCount}
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
                        {!item.marketCap ? '---' : item.marketCap}
                      </Text>
                    </Container>
                    <Container variant='itemInfo' display='flex'>
                      <Text pb={2} size='xs' color='secondary_text'>Valume</Text>
                      <Text size='sm' fontWeight='extrabold'>
                        {!item.volume ? '---' : item.volume}
                      </Text>
                    </Container>
                    <Container variant='itemInfo' display='flex'>
                      <Text pb={2} size='xs' color='secondary_text'>7 Day Turnover</Text>
                      <Text size='sm' fontWeight='extrabold'>
                        {!item.turnOver ? '---' : item.turnOver + '%'}
                      </Text>
                    </Container>
                    <Container variant='itemInfo' border='none' display='flex'>
                      <Text pb={2} size='xs' color='secondary_text'>Owners / Items</Text>
                      <Text size='sm' fontWeight='extrabold'>
                        {!item.ownersToItems ? '---' : item.ownersToItems}
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
          <Text fontSize={20} fontWeight='extrabold' mt={10} mb={10}>
            Live Marketplace
          </Text>
          <Box overflowX='auto'>
            <HStack pb={3} pl={3} spacing='none' minW={800}>
              <Text variant='list_text' w='75%' pl={89}>
                NFT
              </Text>
              <Text variant='list_text' textAlign='end' w='25%'>
                Price
              </Text>
            </HStack>
            {!!marketplaceList && !!marketplaceList.assets.length ? marketplaceList.assets.map((el, i) => (
              <Container variant='list_item' key={i} minW={800}>
                <HStack w='75%' spacing={5}>
                  <Box minW={68} minH={68} position='relative' borderRadius='lg' overflow='hidden'>
                    <Image loader={exportableLoader} src={el.imgUrl || '/'} alt='icon' layout='fill' unoptimized />
                  </Box>
                  <VStack align='start'>
                    <Link href={el.permalink} passHref>
                      <Text variant='link' fontSize='12' fontWeight='extrabold'>
                        {el.name}
                      </Text>
                    </Link>
                    <HStack>
                      {el.traits.map((trait) =>
                        <Text fontSize={8} key={trait.trait_type}>
                          {trait.trait_type} - <Text as='span' color='secondary_text'>{trait.value}</Text>;
                        </Text>,
                      )}
                    </HStack>
                  </VStack>
                </HStack>
                <VStack w='25%' spacing={0.5} align='end'>
                  <Text variant='list_text'>
                    {!el.price_eth ? '---' : Number(el.price_eth.toFixed(2)) + ' ETH'}
                  </Text>
                  <Text color='secondary_text' size='xs'>
                    {!el.price_usd ? '---' : '$' + Number(el.price_usd.toFixed(2))}
                  </Text>
                </VStack>
              </Container>
            )) : <h1>no items</h1>}
          </Box>
          {!!marketplaceList && !!marketplaceList.assets?.length &&
            <HStack>
              <Button
                onClick={() => changePage(Path.previous)}
                isDisabled={!marketplaceList.previous}
                size='xs'
              >
                {'<'}
              </Button>
              <Button
                onClick={() => changePage(Path.next)}
                isDisabled={!marketplaceList.next}
                size='xs'
              >
                {'>'}
              </Button>
            </HStack>}
        </Container>
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

  const paths = data.map((el: NFTMarketItem) => ({
    params: { id: el.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default NftItem
