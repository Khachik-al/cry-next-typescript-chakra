import { Center, Container, Flex, HStack, Text, VStack } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout/PageLayout'
import PageMeta from '../../../components/PageMeta/PageMeta'

interface Props {
  data: any[];
}

const Nfts: NextPage<Props> = ({ data }) => (
  <PageMeta title='Nfts'>
    <PageLayout>
      <Container variant='main' overflowX='auto' minW='900px'>
        <Text fontSize={20} fontWeight='extrabold' mb={10}>
          Top NFT Rankings
        </Text>
        <HStack pb={3} pl={3} spacing='none'>
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
        {data.map((el, i) => (
          <Container variant='list_item' key={i}>
            <Text size='sm' textAlign='start' w='2%'>{i + 1}</Text>
            <HStack w={['20%', '30%']}>
              <Image src={`/assets/img/${el.ticker}.svg`} alt='icon' height={32} width={32} />
              <Link href={`/nft/${el.ticker}`} passHref>
                <Text variant='link' size='sm' fontWeight='extrabold'>
                  {el.name}
                </Text>
              </Link>
            </HStack>
            <Flex justify='center' w='10%'>
              <Center borderRadius='2xl' bg='blue.100' p={2}>
                <Text variant='list_text' fontWeight='medium'>
                  91.24
                </Text>
              </Center>
            </Flex>
            <Flex justify='center' w='10%'>
              <Center borderRadius='2xl' bg='blue.100' p={2}>
                <Text variant='list_text' fontWeight='medium'>
                  91.24
                </Text>
              </Center>
            </Flex>
            <VStack w='10%' align='end' spacing={0.5}>
              <Text variant='list_text'>18.19 ETH</Text>
              <Text color='secondary_text' size='xs'>$53,351.51</Text>
            </VStack>
            <Text variant='list_text' textAlign='end' w='9%' color='primary.100'>8.21%</Text>
            <VStack w='15%' align='end' spacing={0.5}>
              <Text variant='list_text'>326,710.59 ETH</Text>
              <Text color='secondary_text' size='xs'>$958,246,560.54</Text>
            </VStack>
            <Text variant='list_text' textAlign='end' w='10%'>745.3 ETH</Text>
            <Text variant='list_text' textAlign='end' w='9%'>3.4K</Text>
            <Text variant='list_text' textAlign='end' w='9%'>10.0K</Text>
          </Container>
        ))}
      </Container>
    </PageLayout>
  </PageMeta>
)

export const getStaticProps: GetStaticProps = async () => {
  const data = [
    { name: 'Cryptopunks', ticker: 'cryptopunks' },
    { name: 'Azuki', ticker: 'azuki' },
    { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
    { name: 'Cryptopunks', ticker: 'cryptopunks' },
    { name: 'Azuki', ticker: 'azuki' },
    { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
    { name: 'Cryptopunks', ticker: 'cryptopunks' },
    { name: 'Azuki', ticker: 'azuki' },
    { name: 'Tasty Bones XYZ', ticker: 'tasty-bones-xyz' },
  ]

  return {
    props: { data },
  }
}

export default Nfts
