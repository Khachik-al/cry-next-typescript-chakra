import {
  Button, Checkbox, Divider, Flex, Input,
  Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, Text,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { FC, useState } from 'react'
import { signIn } from '../services'

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Login: FC<Props> = ({ isOpen, onClose }) => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async () => {
    await signIn({ email, password })
    await onClose()
  }
  return (
    <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={3}>
        <ModalHeader fontSize={20} fontWeight='medium'>Log in to Cryptogic</ModalHeader>
        <ModalCloseButton _focus={{ boxShadow: 'none' }} />
        <ModalBody>
          <Text variant='label_input' >Email</Text>
          <Input
            type='email'
            name='email'
            placeholder='example@email.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Text variant='label_input' mt={3}>Password</Text>
          <Input
            type='password'
            name='password'
            placeholder='······························'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Flex justify='space-between' mt={4}>
            <Checkbox>
              <Text fontSize={12}>Remember me</Text>
            </Checkbox>
            <Text
              fontSize={12}
              color='primary.100'
              onClick={() => {
                onClose()
                router.push('/forgot_password')
              }}
              cursor='pointer'
            >
              Forgot password?
            </Text>
          </Flex>
          <Button w='full' my={4} onClick={() => handleSignUp()}>Log in</Button>
          <Divider />
          <Button w='full' variant='outline' color='secondary_text' my={4}>Log in with Google</Button>
          <Text textAlign='center' mt={4}>
            Don’t have an account?
            {' '}
            <Text
              as='span'
              color='primary.100'
              cursor='pointer'
              onClick={() => router.push('/signup')}
            >
              Sign up
            </Text>
          </Text>
          <Text textAlign='center' mt={4}>Didn’t reveice confirmation instructions? </Text>
          <Text textAlign='center' color='primary.100'>Resend confirmation instructions</Text>
        </ModalBody>
      </ModalContent>
    </Modal >
  )
}

export default Login
