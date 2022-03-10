import { HStack, Text, VStack } from '@chakra-ui/react'
import { FC } from 'react'

const Flow2: FC = () => (
  <HStack align='start' spacing={[20, 48, 48, 20]} w='full'>
    <VStack align='start'>
      <Text fontSize='14' fontWeight='800'>Cryptogic</Text>
      {[
        { name: 'About us' },
        { name: 'Guides' },
        { name: 'News' },
        { name: 'Podcast' },
        { name: 'Cryptogic.TV' },
        { name: 'Privacy Policy' },
        { name: 'Terms of use' },
      ].map((el) => (
        <Text variant='link' key={el.name}>
          {el.name}
        </Text>
      ))}
      <Text fontSize='14' fontWeight='800'>Data</Text>
      {[
        { name: 'Exachanges' },
        { name: 'Coins' },
      ].map((el) => (
        <Text variant='link' key={el.name}>
          {el.name}
        </Text>
      ))}
    </VStack>
    <VStack align='start'>
      <Text fontSize='14' fontWeight='800'>Guides</Text>
      {[
        { name: 'Guides Homepage' },
        { name: 'Beginners Guide' },
        { name: 'Crypto Cheat Sheet' },
      ].map((el) => (
        <Text variant='link' key={el.name}>
          {el.name}
        </Text>
      ))}
      <Text fontSize='14' fontWeight='800'>Podcast</Text>
      {[
        { name: 'Podcast Homepage' },
        { name: 'Apple Podcasts' },
        { name: 'Google Podcasts' },
        { name: 'Spotify' },
        { name: 'Watch on Youtube' },
      ].map((el) => (
        <Text variant='link' key={el.name}>
          {el.name}
        </Text>
      ))}
    </VStack>
  </HStack>
)
export default Flow2
