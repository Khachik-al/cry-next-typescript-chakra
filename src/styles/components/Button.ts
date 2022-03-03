import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Button: ComponentStyleConfig = {
  baseStyle: {

  },
  sizes: {
    md: {
      fontSize: 'md',
      px: 6,
      py: 6,
    },
  },
  variants: {
    link: {
      color:'green.100'
    },
    solid: {
      bg: 'green.100',
      borderRadius: '3xl',
      boxShadow: '0px 5px 15px rgba(62, 174, 125, 0.3)',
      color: 'white',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
}

export default Button