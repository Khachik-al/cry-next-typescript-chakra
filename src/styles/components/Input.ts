import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'
import defaultTheme from '@chakra-ui/theme'


const Input: ComponentStyleConfig = {
  variants: {
    'outline': (props: StyleFunctionProps) => ({
      ...defaultTheme.components.Input.variants.outline(props),
      field: {
        ...defaultTheme.components.Input.variants.outline(props).field,
        borderRadius: 'xl',
        border: '1px solid',
        borderColor: 'grey.200',
        fontSize: '14',
        _placeholder: { opacity: 0.4, color: 'secondary_text', fontSize: '14' },
        _focus: {
          borderColor: 'grey.300',
          boxShadow: 'none',
          zIndex: 0,
        },
      },
    }),
  },
  defaultProps: {
    variant: 'outline',
  },
}

export default Input