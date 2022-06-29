import {
  Box, Button, Checkbox, Flex, Heading, HStack, Input, InputGroup, InputLeftElement, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Select, Show, Skeleton, Stack, Text, useDisclosure, useToast, VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { FC, useState } from 'react'
import { exportableLoader } from '../../image-loader'
import { resendCode, signUp, verifyCode } from '../../services/auth-services'

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
}

const Flow3: FC<Props> = ({ state }) => {
  const router = useRouter()
  const toast = useToast()
  const { isOpen, onOpen } = useDisclosure()
  const [code, setCode] = useState('')

  const onSubmit = () => {
    signUp({ email: state.email, password: state.password })
      .then(onOpen)
      .catch(({ message }) => {
        toast({ position: 'top-right', title: `${message}`, status: 'error', isClosable: true })
      })
  }
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
        <Show above='sm'>
          <Heading fontSize={['3xl', '4xl', '5xl']}>Start your 7 day trial</Heading>
        </Show>
        <Show above='sm'>
          <Text color='secondary_text' px='20%' w='full'>
            <Skeleton h={5} />
          </Text>
        </Show>
      </VStack>
      <Stack direction={['column', 'column', 'row']} spacing={5} px={[null, null, null, null, 44]} mt={16}>
        <Box w='full'>
          <Text fontSize={18} mb={30}>Payment Method</Text>
          <Text fontSize='sm'>Card Number</Text>
          <InputGroup>
            <Input
              name='card'
              type='number'
              placeholder='0000 0000 0000 0000'
            />
            <InputLeftElement
              pointerEvents='none'
            >
              <Image loader={exportableLoader} src='/assets/img/card.svg' alt='icon' height={16} width={17} />
            </InputLeftElement>
          </InputGroup>
          <HStack spacing={5}>
            <Box w='full'>
              <Text fontSize='sm' mt={3}>Expiry Date</Text>
              <InputGroup>
                <Input
                  name='date'
                  type='number'
                  placeholder='MM/YY'
                />
                <InputLeftElement
                  pointerEvents='none'
                >
                  <Image loader={exportableLoader} src='/assets/img/calendar.svg' alt='icon' height={16} width={17} />
                </InputLeftElement>
              </InputGroup>
            </Box>
            <Box w='full'>
              <Text fontSize='sm' mt={3}>CVC/CVV</Text>
              <InputGroup>
                <Input
                  name='cvc'
                  type='password'
                  placeholder='···'
                />
                <InputLeftElement
                  pointerEvents='none'
                >
                  <Image loader={exportableLoader} src='/assets/img/lock.svg' alt='icon' height={16} width={17} />
                </InputLeftElement>
              </InputGroup>
            </Box>
          </HStack>
          <VStack mt={4} spacing={4} align='start'>
            <HStack align='center'>
              <Image loader={exportableLoader} src='/assets/img/lock_circle.svg' alt='icon' height={20} width={20} />
              <Text fontSize={10} color='grey.500'> Your transaction is secured with SSL encryption</Text>
            </HStack>
            <Checkbox colorScheme='green'>
              <Text size='sm'>
                I agree to Cryptogic
                {' '}
                <Text as='span' color='primary.100'>Terms of Service</Text> and <Text as='span' color='primary.100'>Privacy Policy</Text>
              </Text>
            </Checkbox>
            <Checkbox colorScheme='green'>
              <Text size='sm'>I would like to subscribe to Cryptogic’s daily newsletter</Text>
            </Checkbox>
          </VStack>
        </Box>
        <Box w='full'>
          <Text fontSize={18} mb={30}>Order Summary</Text>
          <Text size='sm'>Select Plan</Text>
          <Select>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Flex justify='space-between' mt={6} mb={3}>
            <Text size='sm'>7 Day Trial</Text>
            <Text size='sm'>$0.99</Text>
          </Flex>
          <Flex justify='space-between' borderBottom='1px solid' borderColor='grey.200' pb={6}>
            <Text size='sm'>Annual Cost After Trial</Text>
            <Text size='sm'>$199.00</Text>
          </Flex>
          <Flex justify='space-between' mt={6} mb={3}>
            <Text size='lg'>Pay Today</Text>
            <Text size='lg'>$0.00</Text>
          </Flex>
          <Text size='sm'>Next charge on <Text as='span' color='primary.100'>February 07, 2022</Text></Text>
        </Box>
      </Stack>
      <Flex justify='center' mt={12}>
        <Button
          onClick={onSubmit}
          px={24}
        >
          Place Order
        </Button>
      </Flex>
    </>
  )
}

export default Flow3
