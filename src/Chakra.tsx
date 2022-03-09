import {
  ChakraProvider,
  cookieStorageManager,
  localStorageManager,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import { theme } from './styles/theme'

export function Chakra({ cookies, children }: { cookies: string; children: ReactNode }) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManager(cookies)
      : localStorageManager

  return (
    <ChakraProvider colorModeManager={colorModeManager} theme={theme}>
      {children}
    </ChakraProvider>
  )
}


export function getServerSideProps({ req }: { req: any }) {
  return {
    props: {
      cookies: req.headers.cookie ?? '',
    },
  }
}