import type { AppProps } from 'next/app'
import { Chakra } from '../Chakra'
import awsExports from '../aws-exports'
import { Amplify } from 'aws-amplify'
import Store from '../components/Store'

Amplify.configure(awsExports)

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Chakra cookies={pageProps.cookies}>
    <Store>
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </Store>
  </Chakra>
)

export default MyApp
