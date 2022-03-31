import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { StyleFunctionProps } from '@chakra-ui/theme-tools'
import defaultTheme from '@chakra-ui/theme'


const Select: ComponentStyleConfig = {
  variants: {
    'sighnup': (props: StyleFunctionProps) => ({
      ...defaultTheme.components.Select.variants.outline(props),
      field: {
        ...defaultTheme.components.Select.variants.outline(props).field,
        borderRadius: 'xl',
        border: '1px solid',
        borderColor: 'grey.200',
        fontSize: '14',
        _focus: {
          borderColor: 'grey.300',
          boxShadow: 'none',
          zIndex: 0,
        },
      },
    }),
  },
  defaultProps: {
    variant: 'sighnup',
  },
}

export default Select