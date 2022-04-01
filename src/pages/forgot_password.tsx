import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { Box, Button, Center, Input, InputGroup, InputRightElement, Skeleton, Text } from '@chakra-ui/react'
import { NextPage } from 'next'
import React, { ChangeEvent, useState } from 'react'
import PageLayout from '../components/PageLayout/PageLayout'
import PageMeta from '../components/PageMeta/PageMeta'
import PasswordStrength from '../components/PasswordStrength'

const ForgotPassword: NextPage = () => {
  const [isView, setIsView] = useState(false)
  const [isNewPassword, setIsNewPassword] = useState(false)
  const [state, setState] = useState({
    password: '',
  })
  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>): void => {
    setState({
      ...state,
      [target.name]: target.value,
    })
  }
  return (
    <PageMeta title='home'>
      <PageLayout>
        <Box pt={32} pb={700}>
          <Center>
            {!isNewPassword ?
              <Box w={383}>
                <Text fontSize={20}>Forgot Password?</Text>
                <Text size='sm' color='secondary_text'>Enter your e-mail address</Text>
                <Text variant='label_input' mt={7}>Email</Text>
                <Input
                  type='email'
                  name='email'
                  placeholder='example@email.com'
                />
                <Button w='full' mt={7} onClick={() => setIsNewPassword(true)}>
                  Reset Password
                </Button>
              </Box>
              :
              <Box w={383}>
                <Text fontSize={20}>Set a new password</Text>
                <Text size='sm' color='secondary_text'>Please create a new password</Text>
                <Text variant='label_input' mt={7}>New Password</Text>
                <Input
                  type='password'
                  name='password'
                  placeholder='······························'
                />
                <Text variant='label_input' mt={7}>Confirm New Password</Text>
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
                <Button w='full' mt={7}>
                  Reset Password
                </Button>
              </Box>}
          </Center>
        </Box>

      </PageLayout>
    </PageMeta>
  )
}

export default ForgotPassword
