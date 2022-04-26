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
        { name: 'Podcast', link: 'https://cryptogic.com/podcast/' },
        { name: 'TV', link: 'https://cryptogic.com/tv/' },
        { name: 'Guide', link: 'https://cryptogic.com/guides/' },
        { name: 'News', link: 'https://cryptogic.com/latest/' },
        { name: 'About us', link: 'https://cryptogic.com/about/' },
      ].map((el) => (
        <Link href={el.link} passHref key={el.name}>
          <Text variant='link'>
            {el.name}
          </Text>
        </Link>
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
