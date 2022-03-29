import {
  Box, Button, Portal, Switch, Text, VStack,
  Container, Heading, HStack, Stack, useColorMode,
} from '@chakra-ui/react'
import Image from 'next/image'
import { FC, useRef, useState } from 'react'
import { exportableLoader } from '../image-loader'


const ChoosePlan: FC = () => {
  const [isYearly, setIsYearly] = useState(true)
  const ethCard = useRef(null)
  const chartCard = useRef(null)
  const { colorMode } = useColorMode()

  return (
    <>
      <VStack textAlign='center' mt={5}>
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
          <Container variant='landing_discount'>
            Save 15%
          </Container>
        </HStack>
      </VStack>
      <Stack direction={['column', 'column', 'row']} spacing={20} mt={32} align='center' justify='center'>
        <Container
          variant='card'
          pb={10}
          pt={20}
          ref={ethCard}
          position='relative'
          maxW='438px'
        >
          <Portal containerRef={ethCard}>
            <Box
              position='absolute'
              top={-68}
              left='50%'
              transform='translate(-50%, 0)'
            >
              <Image
                loader={exportableLoader}
                src={`/assets/img/${colorMode === 'light' ? 'plan_etherium' : 'plan_etheriumdark'}.png`}
                alt='image'
                width={136}
                height={136}
              />
            </Box>
          </Portal>
          <VStack spacing={4}>
            <Text fontSize={24} fontWeight='black'>Cryptogic Premium</Text>
            <Button px={8}>
              7 day trial for $7
            </Button>
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
          maxW='438px'
        >
          <Portal containerRef={chartCard}>
            <Box
              position='absolute'
              top={-68}
              left='50%'
              transform='translate(-50%, 0)'
            >
              <Image
                loader={exportableLoader}
                src={`/assets/img/${colorMode === 'light' ? 'plan_chart' : 'plan_chartdark'}.png`}
                alt='image'
                width={136}
                height={136}
              />
            </Box>
          </Portal>
          <VStack spacing={4}>
            <Text fontSize={24} fontWeight='black'>Cryptogic Elite</Text>
            <Button px={8}>
              7 day trial for $147
            </Button>
            <Text fontSize={20} fontWeight='black'><Text as='span' color='primary.100'>$999</Text> / year</Text>
            <Text fontWeight='medium'> Everything in Cryptogic Premium plus: </Text>
            <Text fontSize={14} fontWeight='medium' color='secondary_text'>
              <Text as='span' color='primary.100'>+</Text> Everything In Premium
            </Text>
            <Text fontSize={14} fontWeight='medium' color='secondary_text'>
              <Text as='span' color='primary.100'>+</Text> Crypto Indexes
            </Text>
            <Text fontSize={14} fontWeight='medium' color='secondary_text'>
              <Text as='span' color='primary.100'>+</Text> Second Thing
            </Text>
          </VStack>
        </Container>
      </Stack>
    </>

  )
}

export default ChoosePlan
