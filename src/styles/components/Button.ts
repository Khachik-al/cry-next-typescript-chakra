import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Button: ComponentStyleConfig = {
  baseStyle: {

  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4,
      py: 3,
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 6,
    },
  },
  variants: {
    outline: {

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