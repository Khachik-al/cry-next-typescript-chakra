import { mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import Input from './components/Input'
import Text from './components/Text'
import Container from './components/Container'
import { pagination } from './components/pagination'

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
      '.rc-pagination': pagination,
      '.more_than_50': {
        'li:nth-last-of-type(3)': {
          borderRadius: '0 50% 50% 0',
        },
        'li:nth-last-of-type(2)': {
          borderRadius: '50%',
        },
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
    danger: '#F04C4C',
    blue: {
      100: 'rgba(62, 174, 125, 0.2)',
    },
    grey: {
      nft_chart_line: '#9EA2AB',
      menu_close_button: '#BDBDBD',
      light: '#ECECEC',
      pagination_bg: '#EFEFEF',
      pagination_disabled: '#C4C4C4',
      nft_rank_bg: '#717784',
      chart_timepicker_bg: 'rgba(113, 119, 132, 0.07)',
      rating_bg: '#D9D9D9',
    },
    primary: {
      100: '#3EAE7D',
      200: '#134730',
      300: '#103726',
    },
    border: {
      grey: '#ECECEC',
    },
  },
  components: {
    Button,
    Input,
    Text,
    Container,
  },
})