import { chart, horizontalRating, landing, link, itemInfo, rank, rating } from './Customs'
import type { ComponentStyleConfig } from '@chakra-ui/theme'
import { pagination } from './pagination'
import { mode } from '@chakra-ui/theme-tools'

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
      bg: mode('main_white', 'dark.400')(props),
      borderBottom: '1px solid',
      borderColor: mode('grey.200', 'grey.600')(props),
    }),
    searchtab: (props) => ({
      pl: ['2%', '2%', '5%', '8%', '12%'],
      pr: ['2%', '2%', '2%', '5%', '9%'],
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderBottom: '1px solid',
      borderColor: mode('grey.200', 'grey.600')(props),
      overflow: 'auto hidden',
      whiteSpace: 'nowrap',
      scrollbarWidth: 'none',
      '::-webkit-scrollbar': {
        display: 'none',
      },
    }),
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
      bg: mode('primary.200', 'dark.300')(props),
      color: 'main_white',
      fontSize: '12',
    }),
    footer: (props) => ({
      pl: ['2%', '2%', '5%', '8%', '12%'],
      pr: ['2%', '2%', '2%', '5%', '9%'],
      bg: mode('primary.300', 'dark.500')(props),
      color: 'main_white',
      py: '12',
    }),
    list_item: (props) => ({
      display: 'flex',
      justifyContent: 'start',
      alignItems: 'center',
      borderTop: '1px solid',
      borderColor: mode('grey.200', 'grey.600')(props),
      py: '4',
      pl: '3',
    }),
    card: (props) => ({
      border: '1px solid',
      borderColor: mode('grey.200', 'grey.600')(props),
      borderRadius: '2xl',
      _hover: {
        bg: mode('green.100', 'dark.200')(props),
      },
    }),
    rank: rank,
    link: link,
    itemInfo: itemInfo,
    pagination: pagination,
    chart_timepicker: chart.timepicker,
    rating_block: rating.rating_block,
    rating: rating.rating,
    landing_discount: landing.discount,
    horizontalRating: horizontalRating,
  },
  defaultProps: {

  },
}

export default Container