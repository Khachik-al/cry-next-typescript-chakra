import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Text: ComponentStyleConfig = {
  baseStyle: {

  },
  sizes: {
    xs: {
      fontSize: '10',
    },
    sm: {
      fontSize: '12',
    },
    md: {
      fontSize: '14',
    },
    lg: {
      fontSize: '18',
    },
  },
  variants: {
    label_input: {
      fontSize: '12',
      mb: 2,
      mt: 3
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