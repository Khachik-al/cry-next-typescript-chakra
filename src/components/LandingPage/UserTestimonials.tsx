import { Box, Container, Heading, HStack, Portal, Show, Text, VStack } from '@chakra-ui/react'
import Image from 'next/image'
import { FC, useRef } from 'react'
import { exportableLoader } from '../../image-loader'
import { userTestimonials } from './data'

const UserTestimonials: FC = () => {
  const testimonialsRef = useRef(null)
  return (
    <>
      <VStack textAlign='center' mt={16} px='15%'>
        <Text color='primary.100' fontSize={[12, 12, 14]} fontWeight='black' mb={6}>
          TESTIMONIAL HIGHLIGHT PHRASE
        </Text>
        <Heading fontSize={[32, 32, 36, 48]}>
          User testimonials
        </Heading>
        <Text color='secondary_text' fontSize={[12, 12, 14, 16]} mt={5}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam imperdiet tempor, ipsum amet eu quam cras nibh.
        </Text>
      </VStack>
      <Box
        my={16}
        ref={testimonialsRef}
        position='relative'
        w='full'
        sx={{ columnCount: [1, 2, 3, 4], columnGap: 5 }}
      >
        {userTestimonials.map(((el) =>
          <Container variant='card' p={7} key={el.userId} display='inline-block' mt={5}>
            <HStack mb={5}>
              <Image
                loader={exportableLoader}
                src={`/assets/img/${el.icon}`}
                alt='user icon'
                width={40}
                height={40}
              />
              <Box>
                <Text>{el.name}</Text>
                <Text color='secondary_text' fontSize={10}>{el.userId}</Text>
              </Box>
            </HStack>
            <Text>{el.testimonial}</Text>
            <Text color='secondary_text'>{el.date}</Text>
          </Container>
        ))}
      </Box>
      <Show above='xl'>
        <Portal containerRef={testimonialsRef}>
          <Box
            position='absolute'
            left={-24}
            top={-10}
          >
            <Image
              loader={exportableLoader}
              src='/assets/img/first_quote.svg'
              alt='image'
              height={67}
              width={67}
              priority
            />
          </Box>
        </Portal>
        <Portal containerRef={testimonialsRef}>
          <Box
            position='absolute'
            right={-24}
            bottom={0}
          >
            <Image
              loader={exportableLoader}
              src='/assets/img/last_quote.svg'
              alt='image'
              height={67}
              width={67}
              priority
            />
          </Box>
        </Portal>
      </Show>
    </>
  )
}

export default UserTestimonials
