import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import {
  Text, Input, Box, Select, Flex, Button, Stack, Heading, VStack, Show, InputGroup, InputRightElement,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  ChangeEvent, FC, FormEvent, useState,
} from 'react'
import { exportableLoader } from '../../image-loader'
import PasswordStrength from './PasswordStrength'

const Flow2: FC = () => {
  const router = useRouter()
  const [isView, setIsView] = useState(false)
  const [state, setState] = useState({
    full_name: '',
    email: '',
    password: '',
    address_1: '',
    address_2: '',
    city: '',
    state: '',
    zipe_code: '',
    country: '',
  })
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [target.name]: target.value,
    })
  }
  const onSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
  }
  return (

    <>
      <VStack spacing={4} mt={4} textAlign='center'>
        <Show above='sm'><Heading fontSize={['3xl', '4xl', '5xl']}>Start your 7 day trial</Heading></Show>
        <Show above='sm'><Text color='secondary_text' px='20%'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam imperdiet tempor, ipsum amet eu quam cras nibh.
        </Text></Show>
        <Button variant='outline' color='secondary_text' w={['full', 'auto']}>
          <Box>
            Sign up with Google
            {' '}
            <Image loader={exportableLoader} src='/assets/img/google.svg' alt='icon' height={16} width={17} />
          </Box>
        </Button>
        <Show above='sm'><Heading fontSize={[24, 28, 32]}>or...</Heading></Show>
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
              placeholder='Name Surname'
            />
            <Text variant='label_input'>Email Address</Text>
            <Input
              name='email'
              type='email'
              placeholder='example@email.com'
            />
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
              Security tip: Dolor sit amet, consectetur adipiscing elit. Dictum cras nisl, cras id luctus at scelerisque sit.
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
            onClick={() => router.push('/signup?flow=3')}
            type='submit'
          >
            Payment method
          </Button>
        </Flex>
      </form>

    </>
  )
}

export default Flow2
