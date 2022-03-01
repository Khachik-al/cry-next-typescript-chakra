import {
  Box, Button, Flex, Text,
} from '@chakra-ui/react'
import Link from 'next/link'
import * as React from 'react'
import { useRouter } from 'next/router'

type Props = {

}

const HeaderNav: React.FC<Props> = () => {
  const router = useRouter()
  return (
    <Box mr='10%' ml='10%' mt={30}>
      <Flex justify='space-between' align='center'>
        <Flex align='center'>
          <Link href='/' passHref>
            <Text fontSize={25} color='green' fontWeight={700} cursor='pointer'>
              Cryptogic
            </Text>
          </Link>
          {[
            { name: 'Coins', link: '/cryptocurrency' },
            { name: 'Exchanges', link: '/exchange' },
            { name: "NFT's", link: '/nft' },
          ].map((el) => (
            <Link href={el.link} passHref>
              <Text fontSize={14} ml={7} cursor='pointer' _hover={{ textDecoration: 'underline' }}>
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
        </Flex>
        <Box>
          <Button
            onClick={() => router.push('/signup')}
            _focus={{}}
            _hover={{ opacity: '0.9' }}
          >
            Sign up
          </Button>
        </Box>
      </Flex>
    </Box>
  )
}

export default HeaderNav
