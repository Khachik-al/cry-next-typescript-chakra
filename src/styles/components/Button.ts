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
      color: 'primary.100',
      _focus: {
        boxShadow: 'none',
      },
    },
    outline: ({ colorMode }) => ({
      borderColor: colorMode === 'light' ? 'primary.100' : 'main_white',
      borderRadius: '3xl',
      color: colorMode === 'light' ? 'primary.100' : 'main_white',
      fontWeight: 'medium',
      _hover: {
        bg: 'none',
        opacity: 0.7,
      },
      _focus: {
        boxShadow: 'none',
      },
    }),
    solid: {
      bg: 'primary.100',
      borderRadius: '3xl',
      boxShadow: '0px 5px 15px rgba(62, 174, 125, 0.3)',
      color: 'main_white',
      _hover: {
        bg: 'primary.100',
        opacity: 0.7,
      },
      _focus: {
        boxShadow: '0px 5px 15px rgba(62, 174, 125, 0.3)',
      },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
}

export default Button