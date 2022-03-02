import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from '../styles/theme'

const MyApp = ({ Component, pageProps }: AppProps) => (

  <ChakraProvider theme={theme}>
    {/* eslint-disable-next-line */}
    <Component {...pageProps} />
  </ChakraProvider>
)
export default MyApp
