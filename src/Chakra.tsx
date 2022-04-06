import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react'
import { GetServerSidePropsContext } from 'next'
import { ReactNode } from 'react'
import Fonts from './Fonts'
import { theme } from './styles/theme'

export var Chakra = ({ cookies, children }: { cookies: string; children: ReactNode }) => {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      <Fonts/>
      {children}
    </ChakraProvider>
  )
}


export function getServerSideProps({ req }: GetServerSidePropsContext) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}