import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Text, Input, Box, Select, Flex, Button, Stack, Heading, VStack, Show, InputGroup, InputRightElement, Skeleton, FormErrorMessage, useToast, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, HStack,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {
  ChangeEvent, FC, FormEvent, useState,
} from 'react'
import { resendCode, signUp, verifyCode } from '../../services/auth-services'
import PasswordStrength from '../PasswordStrength'
interface Props {
  state: {
    full_name: string,
    email: string,
    password: string,
    address_1: string,
    address_2: string,
    city: string,
    state: string,
    zipe_code: string,
    country: string,
  };
  handleChange: ({ target }: ChangeEvent<HTMLInputElement>) => void;
}

const Flow2: FC<Props> = ({ state, handleChange }) => {
  const router = useRouter()
  const toast = useToast()
  const { isOpen, onOpen } = useDisclosure()
  const [code, setCode] = useState('')
  const [isView, setIsView] = useState(false)

  const verify = () => {
    verifyCode({ code, email: state.email })
      .then(() => router.push('/signup?flow=4'))
      .catch(({ message }) => {
        toast({ position: 'top-right', title: `${message}`, status: 'error', isClosable: true })
      })
  }
  const resend = () => {
    resendCode({ email: state.email })
      .catch(({ message }) => {
        toast({ position: 'top-right', title: `${message}`, status: 'error', isClosable: true })
      })
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    signUp({ email: state.email, password: state.password })
      .then(onOpen)
      .catch(({ message }) => {
        toast({ position: 'top-right', title: `${message}`, status: 'error', isClosable: true })
      })
  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={() => { }}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Verification code</ModalHeader>
          <ModalBody>
            <Input
              name='full_name'
              type='text'
              onChange={(e) => setCode(e.target.value)}
              value={code}
              placeholder='code'
            />
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button variant='link' size='sm' onClick={resend}>
                Resend code
              </Button>
              <Button size='sm' onClick={verify}>
                Verify
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <VStack spacing={4} mt={4} textAlign='center'>
        <Show above='sm'><Heading fontSize={['3xl', '4xl', '5xl']}>Start your 7 day trial</Heading></Show>
        <Show above='sm'>
          <Text color='secondary_text' px='20%' w='full'>
            <Skeleton h={5} />
          </Text>
        </Show>
      </VStack>
      <form onSubmit={onSubmit}>
        <Stack spacing={10} direction={['column', 'column', 'row']} mt={10}>
          <Box w='full'>
            <Text fontSize={18} mb={30}>Personal Details</Text>
            <Text variant='label_input' mt={0}>Full name</Text>
            <Input
              name='full_name'
              type='text'
              onChange={handleChange}
              value={state.full_name}
              placeholder='Name Surname'
            />
            <Text variant='label_input'>Email Address</Text>
            <Input
              name='email'
              type='email'
              placeholder='example@email.com'
              onChange={handleChange}
              value={state.email}
            />
            <FormErrorMessage>Email is required.</FormErrorMessage>
            <Text variant='label_input'>Password</Text>
            <InputGroup>
              <Input
                name='password'
                type={isView ? 'text' : 'password'}
                placeholder={isView ? 'Password' : '··················'}
                value={state.password}
                onChange={handleChange}
              />
              <InputRightElement
                cursor='pointer'
                color='secondary_text'
                onClick={() => setIsView(!isView)}
              >
                {isView ? <ViewIcon boxSize={4} /> : <ViewOffIcon boxSize={4} />}
              </InputRightElement>
            </InputGroup>
            <Text color='secondary_text' fontSize={10} mt={2}>Password Strength:</Text>
            <PasswordStrength value={state.password} />
            <Text color='grey.500' fontSize={12} mt={2}>
              <Skeleton h={3} />
            </Text>
          </Box>
          <Box w='full'>
            <Text fontSize={18} mb={30}>Address</Text>
            <Text variant='label_input' mt={0}>Address line 1</Text>
            <Input
              name='address_1'
              type='text'
              placeholder='Type here'
            />
            <Text variant='label_input'>Address line 2</Text>
            <Input
              name='address_2'
              type='text'
              placeholder='Type here'
            />
            <Text variant='label_input'>City</Text>
            <Input
              name='city'
              type='text'
              placeholder='Type here'
            />
          </Box>
          <Box w='full'>
            <Text variant='label_input' mt={[null, null, 14]}>State</Text>
            <Input
              name='state'
              type='text'
              placeholder='Type here'
            />
            <Text variant='label_input'>Zipe Code</Text>
            <Input
              name='zipe_code'
              type='number'
              placeholder='Type here'
            />
            <Text variant='label_input'>Country</Text>
            <Select name='country'>
              <option value='option1'>Option 1</option>
              <option value='option2'>Option 2</option>
              <option value='option3'>Option 3</option>
            </Select>
          </Box>
        </Stack>
        <Flex justify='center' mt={10}>
          <Button
            type='submit'
            px={24}
          >
            Place Order
          </Button>
        </Flex>
      </form>
    </>
  )
}

export default Flow2
