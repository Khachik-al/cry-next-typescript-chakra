import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { StyleFunctionProps } from "@chakra-ui/theme-tools"
import defaultTheme from "@chakra-ui/theme"


const Input: ComponentStyleConfig = {
  variants: {
    "sighnup": (props: StyleFunctionProps) => ({
      ...defaultTheme.components.Input.variants.outline(props),
      field: {
        ...defaultTheme.components.Input.variants.outline(props).field,
      },

    }),
  },
  defaultProps: {
    variant: 'sighnup'
  }
}

export default Input