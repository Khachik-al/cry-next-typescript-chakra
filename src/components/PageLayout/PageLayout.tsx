import { FC, ReactNode } from 'react'
import Footer from '../Footer/Footer'
import HeaderNav from '../HeaderNav/Header'
import SearchTab from '../SearchTab/SearchTab'

type Props = {
  children: ReactNode;
}

const PageLayout: FC<Props> = ({ children }) => (
  <>
    <HeaderNav />
    <SearchTab />
    {children}
    <Footer />
  </>
)

export default PageLayout
