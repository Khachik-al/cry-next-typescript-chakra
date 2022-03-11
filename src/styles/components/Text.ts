import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Text: ComponentStyleConfig = {
  baseStyle: {

  },
  sizes: {
    sm: {
      fontSize: '12',
    },
    xs:{
      fontSize: '10',
    },
  },
  variants: {
    label_input: {
      fontSize: 'sm',
    },
    list_text: {
      fontSize: '12',
      fontWeight: 'black',
    },
    link: {
      _hover: {
        textDecoration: 'underline',
      },
      cursor: 'pointer',
      fontSize: '14',
    },
  },
  defaultProps: {

  },
}

export default Text