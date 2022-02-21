import type { NextPage } from 'next'
import MainContainer from '../../components/MainContainer/MainContainer'
import { Title } from '../styles/Home.js'

const Home: NextPage = () => {
  return (
    <MainContainer keywords='home'>
      <Title>Home page</Title>
    </MainContainer>
  )
}

export default Home;
