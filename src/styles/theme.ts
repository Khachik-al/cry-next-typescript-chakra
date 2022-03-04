import { extendTheme } from '@chakra-ui/react'
import Button from './components/Button'
import Input from './components/Input'
import Main from './components/Customs'
import Text from './components/Text'

export const theme = extendTheme({
  colors: {
    black: '#030D24',
    white: '#FCFCFC',
    grey: {
      menu_close_button: '#BDBDBD',
      light: '#ECECEC'
    },
    primary: {
      100: '#3EAE7D',
      200: '#134730',
      300: '#103726'
    }
  },
  components: {
    Button,
    Input,
    Main,
    Text
  }
})