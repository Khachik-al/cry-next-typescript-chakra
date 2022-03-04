import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import Input from './components/Input'
import { Main } from './components/Customs'
import Text from './components/Text'

export const theme = extendTheme({
  colors: {
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
    Main,
    Text
  }
})