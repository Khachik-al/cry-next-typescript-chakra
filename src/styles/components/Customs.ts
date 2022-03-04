import { chakra } from '@chakra-ui/react'

export const Main = chakra('div', {
  baseStyle: {
    pl: ['1%', '2%', '5%', '8%', '12%'],
    pr: ['1%', '2%', '2%', '5%', '9%'],
    pt: '32'
  },
})

export const HeaderBlock = chakra('div', {
  baseStyle: {
    pl: ['1%', '2%', '5%', '8%', '12%'],
    pr: ['1%', '2%', '2%', '5%', '9%'],
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bg: 'white',
  },
})

