import { chakra } from '@chakra-ui/react'

export const Main = chakra('div', {
  baseStyle: {
    pl: ['1%', '2%', '5%', '8%', '12%'],
    pr: ['1%', '2%', '2%', '5%', '9%'],
    pt: '12'
  },
})

export const HeaderBlock = chakra('div', {
  baseStyle: {
    pl: ['1%', '2%', '5%', '8%', '12%'],
    pr: ['1%', '2%', '2%', '5%', '9%'],
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bg: 'main_white',
    borderBottom: '1px solid',
    borderColor: 'border.grey'
  },
})

export const SearchTabBlock = chakra('div', {
  baseStyle: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    pl: ['1%', '2%', '5%', '8%', '12%'],
    pr: ['1%', '2%', '2%', '5%', '9%'],
    bg: 'main_white',
    borderBottom: '1px solid',
    borderColor: 'border.grey'
  },
})

