import { chart, nft, rating } from './Customs'
import type { ComponentStyleConfig } from '@chakra-ui/theme'

const Container: ComponentStyleConfig = {
  baseStyle: {
    maxW: 'none',
    p: '0',
    m: '0',
  },
  sizes: {

  },
  variants: {
    header: (props) => ({
      pl: ['2%', '2%', '5%', '8%', '12%'],
      pr: ['2%', '2%', '2%', '5%', '9%'],
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
      borderColor: 'border.grey',
    }),
    searchtab: {
      pl: ['2%', '2%', '5%', '8%', '12%'],
      pr: ['2%', '2%', '2%', '5%', '9%'],
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid',
      borderColor: 'border.grey',
      overflow: 'auto hidden',
      whiteSpace: 'nowrap',
      scrollbarWidth: 'none',
      '::-webkit-scrollbar': {
        display: 'none',
      },
    },
    main: {
      pl: ['2%', '2%', '5%', '8%', '12%'],
      pr: ['2%', '2%', '2%', '5%', '9%'],
      pt: ['4', '12'],
      pb: '8',
    },
    disclaimer: (props) => ({
      pl: ['2%', '2%', '5%', '8%', '12%'],
      pr: ['2%', '2%', '2%', '5%', '9%'],
      py: '8',
      bg: props.colorMode === 'light' ? 'primary.200' : 'dark.300',
      color: 'main_white',
      fontSize: '12',
    }),
    footer: (props) => ({
      pl: ['2%', '2%', '5%', '8%', '12%'],
      pr: ['2%', '2%', '2%', '5%', '9%'],
      bg: props.colorMode === 'light' ? 'primary.300' : 'dark.500',
      color: 'main_white',
      py: '12',
    }),
    list_item: {
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      borderTop: '1px solid',
      borderColor: 'border.grey',
      py: '4',
      pl: '3',
    },
    nft_rank: nft.rank,
    nft_link: nft.link,
    nft_item_info: nft.item_info,
    chart_timepicker: chart.timepicker,
    rating_block: rating.rating_block,
    rating: rating.rating,
  },
  defaultProps: {

  },
}

export default Container