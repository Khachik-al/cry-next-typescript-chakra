import { Text } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import PageLayout from '../../../../components/PageLayout/PageLayout'
import PageMeta from '../../../../components/PageMeta/PageMeta'
import { Main } from '../../../styles/components/Customs'

interface Props {
  data: string;
}

const ExchangeItem: NextPage<Props> = ({ data }) => {
  const { query } = useRouter()

  return (
    <PageMeta title={`${query.id}`}>
      <PageLayout>
        <Main>
          <Text fontWeight='bold'>{query.id}</Text>
          <Text>{data}</Text>
          <Link href={`/exchange/${query.id}/pair`} passHref>
            <Text cursor='pointer' _hover={{ textDecoration: 'underline' }} mt={5}>
              Pair
            </Text>
          </Link>
        </Main>
      </PageLayout>
    </PageMeta>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit unde tempora vitae quod '

  return {
    props: { data },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
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

  const paths = data.map((el) => ({
    params: { id: el.ticker },
  }))

  return {
    paths,
    fallback: true,
  }
}

export default ExchangeItem
