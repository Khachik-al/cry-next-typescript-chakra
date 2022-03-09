import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import Input from './components/Input'
import Text from './components/Text'

export const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: any) => ({
      body: {
        color: mode('main_black', 'main_white')(props),
        bg: mode('main_white', 'dark.400')(props),
      },
    }),
  },
  colors: {
    dark: {
      100: '#40465B',
      200: '#272D3F',
      300: '#090C16',
      400: '#0D111E',
      500: '#000101',
    },
    main_black: '#030D24',
    main_white: '#FCFCFC',
    secondary_text: '#717784',
    disabled_text: '#9EA2AB',
    grey: {
      menu_close_button: '#BDBDBD',
      light: '#ECECEC',
    },
    primary: {
      100: '#3EAE7D',
      200: '#134730',
      300: '#103726'
    },
    border: {
      grey: '#ECECEC'
    }
  },
  components: {
    Button,
    Input,
    Text
  }
})