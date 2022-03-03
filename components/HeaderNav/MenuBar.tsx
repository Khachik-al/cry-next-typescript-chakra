import {
  Box, Button, Stack, StackDirection, Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'

interface Props {
  direction: StackDirection;
}

const MenuBar: FC<Props> = ({ direction }) => {
  const router = useRouter()
  return (
    <Stack direction={direction} spacing={direction === 'column' ? 2 : 7}>
      {[
        { name: 'Coins', link: '/cryptocurrency' },
        { name: 'Exchanges', link: '/exchange' },
        { name: "NFT's", link: '/nft' },
      ].map((el) => (
        <Link href={el.link} passHref>
          <Text fontSize={14} cursor='pointer' _hover={{ textDecoration: 'underline' }}>
            {el.name}
          </Text>
        </Link>
      ))}
      {[
        { name: 'Podcast' },
        { name: 'TV' },
        { name: 'Guide' },
        { name: 'News' },
        { name: 'About us' },
      ].map((el) => (
        <Text fontSize={14} ml={10} cursor='pointer' _hover={{ textDecoration: 'underline' }}>
          {el.name}
        </Text>
      ))}
      {direction === 'column'
        && (
          <Box textAlign='left'>
            <Button
              mt={2}
              variant='link'
              size='sm'
            >
              Log in
            </Button>
          </Box>
        )}
      {direction === 'column'
        && (
          <Box textAlign='left'>
            <Button
              display='inline'
              mt={2}
              size='sm'
              onClick={() => router.push('/signup')}
            >
              Sign up
            </Button>
          </Box>
        )}
    </Stack>
  )
}

export default MenuBar
