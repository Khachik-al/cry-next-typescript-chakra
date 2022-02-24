import * as React from 'react'
import Footer from '../Footer/Footer'
import HeaderNav from '../HeaderNav/Header'
import SearchTab from '../SearchTab/SearchTab'

type Props = {
  children: any;
}

const PageLayout: React.FC<Props> = ({ children }) => (
  <>
    <HeaderNav />
    <SearchTab />
    {children}
    <Footer />
  </>
)

export default PageLayout
