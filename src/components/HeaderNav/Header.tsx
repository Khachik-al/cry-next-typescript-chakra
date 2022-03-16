import {
  Box,
  Button, CloseButton, Container, Drawer, DrawerBody, DrawerContent, DrawerOverlay,
  Flex, Heading, HStack, Portal, useDisclosure, useMediaQuery,
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { exportableLoader } from '../../custom-loader'
import MenuBar from './MenuBar'
import Search from './Search'

const HeaderNav: FC = () => {
  const router = useRouter()
  const [isBrowser] = useMediaQuery('(min-width: 1110px)')
  const [isMenu, setIsMenu] = useState(true)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const onOpenDrawer = (menu: boolean) => {
    setIsMenu(menu)
    onOpen()
  }
  return (
    <Portal>
      <Container variant='header' h={[16, 16, 16, 24]}>
        {!isBrowser
          && (
            <HStack cursor='pointer'>
              <Box mr={2}><Image loader={exportableLoader} src='/assets/img/hamburger.svg' alt='menu icon' onClick={() => onOpenDrawer(true)} height={25} width={25} /></Box>
              <Image loader={exportableLoader} src='/assets/img/search_icon.svg' alt='search icon' height={25} width={25} onClick={() => onOpenDrawer(false)} />
            </HStack>
          )}
        <Flex align='center'>
          <Link href='/' passHref>
            <Heading as='h2' size='lg' cursor='pointer' mr={[10, 14]} color='primary.200'>
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
      </Container>
      <Drawer placement='top' size={isMenu ? '' : 'full'} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent pb={3} pt={2}>
          <DrawerBody px={!isMenu ? 2 : 6}>
            {isMenu
              ? (
                <>
                  <CloseButton onClick={onClose} justifyContent='start' color='grey.menu_close_button' />
                  <MenuBar direction='column' />
                </>
              )
              : <Search onClose={onClose} />}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Portal>

  )
}

export default HeaderNav
