import { mode } from '@chakra-ui/theme-tools'
import { ComponentStyleConfig, extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import Input from './components/Input'
import Text from './components/Text'
import Container from './components/Container'
import Switch from './components/Switch'
import Select from './components/Select'

export const theme = extendTheme({
  fonts: {
    heading: 'Avenir_black, sans-serif',
    body: 'Avenir_regular, sans-serif',
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: false,
  },
  styles: {
    global: (props: ComponentStyleConfig) => ({
      body: {
        color: mode('main_black', 'main_white')(props),
        bg: mode('main_white', 'dark.400')(props),
      },
      '.css-xvmw52[data-focus], .css-1lnbiz9[data-focus]': {
        boxShadow: 'none !important',
      },
    }),
  },
  colors: {
    dark: {
      50: '#505466',
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
    danger: '#F04C4C',
    blue: {
      50: 'rgba(113, 119, 132, 0.2)',
      100: 'rgba(62, 174, 125, 0.2)',
      200: 'rgba(113, 119, 132, 0.07)',
    },
    grey: {
      100: '#EFEFEF',
      200: '#ECECEC',
      300: '#D9D9D9',
      400: '#C4C4C4',
      500: '#BDBDBD',
      600: '#272D3F',
    },
    yellow: {
      200: '#DEBD36',
    },
    primary: {
      100: '#3EAE7D',
      200: '#134730',
      300: '#103726',
    },
    green: {
      50: 'rgba(62, 174, 125, 0)',
      100: 'rgba(62, 174, 125, 0.05)',
    },
    red: {
      50: 'rgba(240, 76, 76, 0)',
      100: 'rgba(240, 76, 76, 0.5)',
    },
  },
  components: {
    Button,
    Input,
    Text,
    Container,
    Switch,
    Select,
  },
})
