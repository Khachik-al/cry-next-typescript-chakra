import { Box } from '@chakra-ui/react'
import { FC, ReactNode } from 'react'
import Footer from '../Footer/Footer'
import HeaderNav from '../HeaderNav/Header'
import SearchTab from '../SearchTab/SearchTab'

type Props = {
  children: ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => (
  <Box pl={['1%', '2%', '5%', '8%', '12%']} pr={['1%', '2%', '2%', '5%', '9%']}>
    <HeaderNav />
    <SearchTab />
    {children}
    <Footer />
  </Box>
)

export default PageLayout
