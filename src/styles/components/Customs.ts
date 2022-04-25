export const rank = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  bg: 'secondary_text',
  borderRadius: 'lg',
  px: '2',
  py: '1',
  fontSize: '10',
  color: 'main_white',
  fontWeight: 'extrabold',
  w: '14',
}

export const link = {
  h: '6',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  fontSize: '10',
  color: 'secondary_text',
  border: '1px solid',
  borderColor: 'grey.200',
  borderRadius: 'lg',
  p: '1',
  cursor: 'pointer',
  w: 'fit-content',
}

export const itemInfo = {
  w: 'none',
  display: ['none', 'none', 'flex'],
  flexDirection: 'column',
  p: '0 5 0 0',
  borderRight: '1px solid',
  borderColor: 'grey.200',
}

export const chart = {
  timepicker: {
    display: 'flex',
    borderRadius: '2xl',
    bg: 'blue.200',
    p: '4px',
    userSelect: 'none',
    'div': {
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      w: 'full',
      px: '8px',
      py: '2px',
      h: '6',
      mr: '1',
      color: 'disabled_text',
      fontSize: '10px',
      _hover: {
        bg: 'primary.100',
        borderRadius: '2xl',
        color: 'main_white',
      },
    },
    '.active': {
      bg: 'primary.100',
      borderRadius: '2xl',
      color: 'main_white',
    },
    'div:last-of-type': {
      m: '0',
    },
  },
}

export const rating = {
  rating_block: {
    display: 'flex',
    border: '1px solid',
    borderColor: 'grey.200',
    borderRadius: '2xl',
    p: '7',
    minW: '72',
  },
  rating: {
    display: 'flex',
    minW: '8',
    w: '8',
    h: 'full',
    bg: 'grey.300',
    borderRadius: '2xl',
    ml: '7',
    'div': {
      w: 'full',
      marginTop: 'auto',
      bg: 'primary.100',
      borderRadius: '2xl',
    },
  },
}

export const landing = {
  discount: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    w: 14,
    h: 6,
    color: 'main_white',
    bg: 'yellow.200',
    borderRadius: '2xl',
    fontSize: 9,
    fontWeight: 'extrabold',
  },
}

export const horizontalRating = {
  display: 'flex',
  minW: 'full',
  w: 'full',
  h: 2,
  bg: 'grey.300',
  borderRadius: '2xl',
  'div': {
    marginRight: 'auto',
    bg: 'disabled_text',
    borderRadius: '2xl',
  },
}