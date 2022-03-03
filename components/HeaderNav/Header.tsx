import { HamburgerIcon, Search2Icon } from '@chakra-ui/icons'
import {
  Button, CloseButton, Drawer, DrawerBody, DrawerContent, DrawerOverlay,
  Flex, Heading, HStack, useDisclosure, useMediaQuery,
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC } from 'react'
import Main from '../../src/styles/components/Main'
import MenuBar from './MenuBar'

const HeaderNav: FC = () => {
  const router = useRouter()
  const [isBrowser] = useMediaQuery('(min-width: 1110px)')
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <Main pt={isBrowser ? 10 : 5}>
      <Flex justify='space-between' align='center'>
        {!isBrowser
          && (
            <HStack spacing={5}>
              <HamburgerIcon onClick={onOpen} cursor='pointer' color='grey' boxSize={[6, 7]} />
              <Search2Icon cursor='pointer' color='grey' boxSize={[5, 6]} />
            </HStack>
          )}
        <Flex align='center'>
          <Link href='/' passHref>
            <Heading as='h2' size='lg' cursor='pointer' mr={[10, 14]} color='primary.700'>
              Cryptogic
            </Heading>
          </Link>
          {isBrowser
            && <MenuBar direction='row' />}
        </Flex>
        <HStack spacing={7}>
          {isBrowser
            && (
              <Button variant='link'>
                Log in
              </Button>
            )}
          <Button
            size={isBrowser ? 'md' : 'sm'}
            py={isBrowser ? 2 : 1}
            onClick={() => router.push('/signup')}
          >
            Sign up
          </Button>
        </HStack>
      </Flex>
      <Drawer placement='top' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent pb={3} pt={2}>
          <DrawerBody>
            <CloseButton onClick={onClose} justifyContent='start' color='grey.menu_close_button' />
            <MenuBar direction='column' />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Main>
  )
}

export default HeaderNav
