import { AppProps } from 'next/app'
import { Chakra } from '../Chakra'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Chakra cookies={pageProps.cookies}>
    {/* eslint-disable-next-line */}
      <Component {...pageProps} />
  </Chakra>
)

export default MyApp
