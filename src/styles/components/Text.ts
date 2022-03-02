import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Text: ComponentStyleConfig = {
	baseStyle: {

	},
	sizes: {
		sm: {
			fontSize: 'sm',
		},
		md: {
			fontSize: 'md',
		},
	},
	variants: {
		label_input: {
			fontsize: 'sm'
		},
	},
	defaultProps: {
		size: 'md',
		variant: 'solid',
	},
}

export default Text