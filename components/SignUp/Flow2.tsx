import {
  Text, Input, Box, Select, Flex, Button, Stack, Heading,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import {
  ChangeEvent, FC, FormEvent, useState,
} from 'react'

const Flow2: FC = () => {
  const router = useRouter()
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
      <Flex justify='center'>
        <Heading fontSize={['3xl', '4xl', '5xl']} mb={30}>Start your 7 day trial</Heading>
      </Flex>
      <form onSubmit={onSubmit}>
        <Stack spacing={10} direction={['column', 'column', 'row']}>
          <Box w='full'>
            <Text fontSize={18} mb={30}>Personal Details</Text>
            <Text fontSize={12}>Full name</Text>
            <Input name='full_name' type='text' onChange={handleChange} />
            <Text fontSize={12} mt={3}>Email Address</Text>
            <Input name='email' type='email' />
            <Text fontSize={12} mt={3}>Password</Text>
            <Input name='password' type='password' />
          </Box>
          <Box w='full'>
            <Text fontSize={18} mb={30}>Address</Text>
            <Text fontSize={12}>Address line 1</Text>
            <Input name='address_1' type='text' />
            <Text fontSize={12} mt={3}>Address line 2</Text>
            <Input name='address_2' type='text' />
            <Text fontSize={12} mt={3}>City</Text>
            <Input name='city' type='text' />
          </Box>
          <Box w='full'>
            <Text fontSize={12} mt={[null, null, 14]}>State</Text>
            <Input name='state' type='text' />
            <Text fontSize={12} mt={3}>Zipe Code</Text>
            <Input name='zipe_code' type='number' />
            <Text fontSize={12} mt={3}>Country</Text>
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
