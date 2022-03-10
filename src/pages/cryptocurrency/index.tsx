import { Container, Text } from '@chakra-ui/react'
import type { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import PageLayout from '../../../components/PageLayout/PageLayout'
import PageMeta from '../../../components/PageMeta/PageMeta'

interface Props {
  data: any[]
}

const Cryptocurrency: NextPage<Props> = ({ data }) => (
  <PageMeta title='Coins'>
    <PageLayout>
      <Container variant='main'>
        <Text fontSize={20} fontWeight='bold' mb={5}>
          Today's Cryptocurrency Prices by Market Cap
        </Text>
        {data.map((el) => (
          <Link href={`/cryptocurrency/${el.ticker}`} key={el.ticker} passHref>
            <Text cursor='pointer' _hover={{ textDecoration: 'underline' }} mb={5}>
              {el.name}
            </Text>
          </Link>
        ))}
      </Container>
    </PageLayout>
  </PageMeta>
)

export const getStaticProps: GetStaticProps = async () => {
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

  return {
    props: { data },
  }
}

export default Cryptocurrency
