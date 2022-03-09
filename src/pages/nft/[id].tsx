import { Container, Text } from '@chakra-ui/react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import PageLayout from '../../../components/PageLayout/PageLayout'
import PageMeta from '../../../components/PageMeta/PageMeta'

interface Props {
  data: string;
}

const NftItem: NextPage<Props> = ({ data }) => {
  const { query } = useRouter()

  return (
    <PageMeta title={`${query.id}`}>
      <PageLayout>
        <Container variant='main'>
          <Text fontWeight='bold'>{query.id}</Text>
          <Text>{data}</Text>
        </Container>
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

export default NftItem
