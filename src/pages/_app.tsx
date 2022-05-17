import type { AppProps } from 'next/app'
import { Chakra } from '../Chakra'
import awsExports from '../aws-exports'
import { Amplify } from 'aws-amplify'

Amplify.configure(awsExports)

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Chakra cookies={pageProps.cookies}>
    {/* eslint-disable-next-line */}
      <Component {...pageProps} />
  </Chakra>
)

export default MyApp
