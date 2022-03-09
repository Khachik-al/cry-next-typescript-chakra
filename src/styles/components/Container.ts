import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Container: ComponentStyleConfig = {
	baseStyle: {
		maxW: 'none'
	},
	sizes: {

	},
	variants: {
		header: (props) => ({
			pl: ['1%', '2%', '5%', '8%', '12%'],
			pr: ['1%', '2%', '2%', '5%', '9%'],
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			position: 'fixed',
			top: '0',
			left: '0',
			right: '0',
			zIndex: 'sticky',
			bg: props.colorMode === 'light' ? 'main_white' : 'dark.400',
			borderBottom: '1px solid',
			borderColor: 'border.grey'
		}),
		searchtab: {
			pl: ['1%', '2%', '5%', '8%', '12%'],
			pr: ['1%', '2%', '2%', '5%', '9%'],
			display: 'flex',
			justifyContent: 'space-between',
			alignItems: 'center',
			borderBottom: '1px solid',
			borderColor: 'border.grey'
		},
		main: {
			pl: ['1%', '2%', '5%', '8%', '12%'],
			pr: ['1%', '2%', '2%', '5%', '9%'],
			pt: ['4','12']
		},
		important_disclaimer: (props) => ({
			pl: ['1%', '2%', '5%', '8%', '12%'],
			pr: ['1%', '2%', '2%', '5%', '9%'],
			py: '8',
			bg: props.colorMode === 'light' ? 'primary.200' : 'dark.300',
			color: 'main_white',
			fontsize: '3'
		}),
		footer: (props) => ({
			pl: ['1%', '2%', '5%', '8%', '12%'],
			pr: ['1%', '2%', '2%', '5%', '9%'],
			bg: props.colorMode === 'light' ? 'primary.300' : 'dark.500'
		}),
	},
	defaultProps: {

	},
}

export default Container