import { Container, Text } from '@chakra-ui/react'
import { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { coinChartData } from '../../components/Chart/chartdata'
const Chart = dynamic(() => import('../../components/Chart/Chart'), {
  ssr: false,
})
import PageLayout from '../../components/PageLayout/PageLayout'
import PageMeta from '../../components/PageMeta/PageMeta'
import { CoinItem } from '../../components/types/coin-item.interface'
import { coinAll, coinItem } from '../../services'

interface Props {
  item: CoinItem;
}

const CryptocurrencyItem: NextPage<Props> = ({ item }) => {
  const { query } = useRouter()

  return (
    <PageMeta title={`${query.id}`}>
      <PageLayout>
        <Container variant='main'>
          <Text fontWeight='bold'>{item.name}</Text>
          <Chart data={coinChartData} baseline />
        </Container>
      </PageLayout>
    </PageMeta>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const item = await coinItem({ slug: `${context?.params?.id}` })

  return {
    props: { item },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await coinAll()

  const paths = data.items.map((el: CoinItem) => ({
    params: { id: el.id },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default CryptocurrencyItem
