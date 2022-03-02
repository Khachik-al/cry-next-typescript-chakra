import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { StyleFunctionProps } from "@chakra-ui/theme-tools"
import defaultTheme from "@chakra-ui/theme"

console.log(defaultTheme.components.Input);

const Input: ComponentStyleConfig = {
	variants: {
		"blue-outline": (props: StyleFunctionProps) => ({
			...defaultTheme.components.Input.variants.outline(props),
			fontsize:'sm',
			field: {
				...defaultTheme.components.Input.variants.outline(props).field,
			},
		}),
	},
	defaultProps: {
		variant: 'blue-outline'
	}
}

export default Input