import {
  Box,
  Button,
  Center, Container, Flex, Heading, HStack, Portal, Switch, Text, VStack,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import { exportableLoader } from '../image-loader'

interface Props {

}

const ChoosePlan: FC<Props> = ({ }) => {
  const [isYearly, setIsYearly] = useState(true)
  const ethCard = useRef(null)
  const chartCard = useRef(null)

  return (
    <>
      <VStack textAlign='center' mt={16}>
        <Text color='primary.100' fontSize={[12, 12, 14]} fontWeight='black' mb={6}>
          PLAN HIGHLIGHT PHRASE
        </Text>
        <Heading fontSize={[32, 32, 36, 48]}>
          Choose Your  <Text as='span' color='primary.100'>Plan</Text>
        </Heading>
        <HStack spacing={3}>
          <Text
            fontWeight={isYearly ? 'medium' : 'bold'}
            color={isYearly ? '' : 'primary.100'}
          >
            Monthly
          </Text>
          <Switch
            isChecked={isYearly}
            onChange={() => setIsYearly(!isYearly)}
          />
          <Text
            fontWeight={isYearly ? 'bold' : 'medium'}
            color={isYearly ? 'primary.100' : ''}>
            Billed yearly
          </Text>
          <Center
            w={14}
            h={6}
            color='main_white'
            bg='#DEBD36'
            borderRadius='2xl'
            fontSize={9}
            fontWeight='extrabold'
          >
            Save 15%
          </Center>
        </HStack>
      </VStack>
      <Flex flexDirection={['column', 'column', 'row']} justify={'center'} mt={32}>
        <Container variant='card' pb={10} pt={20} ref={ethCard} position='relative' maxW='424px'>
          <Portal containerRef={ethCard}>
            <Box
              position='absolute'
              top={-68}
              left='32%'
            >
              <Image
                loader={exportableLoader}
                src='/assets/img/plan_etherium.png'
                alt='image'
                width={136}
                height={136}
              />
            </Box>
          </Portal>
          <VStack>
            <Text fontSize={24} fontWeight='black'>Cryptogic Premium</Text>
            <Button>7 day trial for $7</Button>
            <Text fontSize={20} fontWeight='black'><Text as='span' color='primary.100'>$399</Text> / year</Text>
            <Text fontWeight='medium'> Includes unlimited access to: </Text>
            <Text fontSize={14} fontWeight='medium' color='secondary_text'>
              <Text as='span' color='primary.100'>+</Text> Crypto Ratings (Fundamental + Technical)
            </Text>
            <Text fontSize={14} fontWeight='medium' color='secondary_text'>
              <Text as='span' color='primary.100'>+</Text> Portfolio Tracking
            </Text>
            <Text fontSize={14} fontWeight='medium' color='secondary_text'>
              <Text as='span' color='primary.100'>+</Text> Premium Community
            </Text>
          </VStack>
        </Container>
        <Container
          variant='card'
          pb={10} pt={20}
          ref={chartCard}
          position='relative'
          maxW='424px'
          ml={[null, null, 10]} mt={[20, 20, 0]}
        >
          <Portal containerRef={chartCard}>
            <Box
              position='absolute'
              top={-68}
              left='32%'
            >
              <Image
                loader={exportableLoader}
                src='/assets/img/plan_chart.png'
                alt='image'
                width={136}
                height={136}
              />
            </Box>
          </Portal>
          <VStack>
            <Text fontSize={24} fontWeight='black'>Cryptogic Premium</Text>
            <Button>7 day trial for $7</Button>
            <Text fontSize={20} fontWeight='black'><Text as='span' color='primary.100'>$399</Text> / year</Text>
            <Text fontWeight='medium'> Includes unlimited access to: </Text>
            <Text fontSize={14} fontWeight='medium' color='secondary_text'>
              <Text as='span' color='primary.100'>+</Text> Crypto Ratings (Fundamental + Technical)
            </Text>
            <Text fontSize={14} fontWeight='medium' color='secondary_text'>
              <Text as='span' color='primary.100'>+</Text> Portfolio Tracking
            </Text>
            <Text fontSize={14} fontWeight='medium' color='secondary_text'>
              <Text as='span' color='primary.100'>+</Text> Premium Community
            </Text>
          </VStack>
        </Container>
      </Flex>
    </>

  )
}

export default ChoosePlan
