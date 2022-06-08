import {
  Box, Button, CloseButton, Container, Drawer, DrawerBody, DrawerContent, DrawerOverlay,
  Flex, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Portal, useDisclosure, useMediaQuery, useToast,
} from '@chakra-ui/react'
import { Hub } from 'aws-amplify'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FC, useCallback, useEffect, useState } from 'react'
import { exportableLoader } from '../../image-loader'
import { getUser, logOut } from '../../services/auth-services'
import Login from '../Login'
import MenuBar from './MenuBar'
import Search from './Search'

const HeaderNav: FC = () => {
  const toast = useToast()
  const router = useRouter()
  const [isBrowser] = useMediaQuery('(min-width: 1110px)')
  const [isMenu, setIsMenu] = useState(true)
  const [isOpenLogin, setIsOpenLogin] = useState(false)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [user, setUser] = useState<any | null>()

  const onOpenDrawer = (menu: boolean) => {
    setIsMenu(menu)
    onOpen()
  }
  const onCloseLogin = useCallback(() => setIsOpenLogin(false), [])

  const handleLogOut = async () => {
    await logOut()
      .then(() => setUser(null))
      .catch(({ message }) => {
        toast({ position: 'top-right', title: `${message}`, status: 'error', isClosable: true })
      })
  }

  useEffect(() => {
    const unsubscribe = Hub.listen('auth', ({ payload: { event, data } }) => {
      switch (event) {
        case 'signIn':
          setUser(data)
          break
        case 'signOut':
          setUser(null)
          break
      }
    })
    getUser().then(currentUser => setUser(currentUser))
    return unsubscribe
  }, [])
  return (
    <>
      <Portal>
        <Container variant='header' h={[16, 16, 16, 24]}>
          {!isBrowser
            && (
              <HStack cursor='pointer' spacing={2}>
                <Box><Image loader={exportableLoader} src='/assets/img/hamburger.svg' alt='menu icon' onClick={() => onOpenDrawer(true)} height={25} width={25} /></Box>
                <Box><Image loader={exportableLoader} src='/assets/img/search_icon.svg' alt='search icon' height={25} width={25} onClick={() => onOpenDrawer(false)} /></Box>
              </HStack>
            )}
          <Flex align='center'>
            <Link href='/' passHref>
              <Box cursor='pointer' h={[41, 41, 41, 61]} w={[105.4, 105.4, 105.4, 156.8]} position='relative' mr={[10, 14]}>
                <Image
                  src='/assets/img/cryptogic_logo.png'
                  alt='icon'
                  layout='fill'
                  loader={exportableLoader}
                  unoptimized
                  priority
                />
              </Box>
            </Link>
            {isBrowser
              && <MenuBar direction='row' />}
          </Flex>
          <HStack spacing={7}>
            {isBrowser && !user &&
              <Button
                variant='link'
                onClick={() => setIsOpenLogin(true)}>
                Log in
              </Button>}
            {!!user ?
              <Menu>
                <MenuButton>
                  <HStack>
                    <Box>{user.username.slice(0, 10)}</Box>
                    <Box>
                      <Image
                        loader={exportableLoader}
                        src={'/assets/img/user_icon.svg'}
                        alt='user icon'
                        width={40}
                        height={40}
                      />
                    </Box>
                  </HStack>
                </MenuButton>
                <MenuList>
                  <MenuItem>User account</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={handleLogOut}>Log out</MenuItem>
                </MenuList>
              </Menu>
              :
              <Button
                size={isBrowser ? 'md' : 'sm'}
                py={isBrowser ? 2 : 1}
                onClick={() => router.push('/signup')}
              >
                Sign up
              </Button>}
          </HStack>
        </Container>
        <Drawer placement='top' size={isMenu ? '' : 'full'} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent pb={3} pt={2}>
            <DrawerBody px={!isMenu ? 2 : 6}>
              {isMenu
                ? (
                  <>
                    <CloseButton onClick={onClose} justifyContent='start' color='grey.500' />
                    <MenuBar direction='column' />
                  </>
                )
                : <Search onClose={onClose} />}
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Portal>
      <Login isOpen={isOpenLogin} onClose={onCloseLogin} />
    </>
  )
}

export default HeaderNav
