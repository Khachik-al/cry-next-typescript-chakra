import { HStack, Text, VStack } from '@chakra-ui/react'
import Link from 'next/link'
import { FC } from 'react'

const Flow2: FC = () => (
  <HStack align='start' spacing={[20, 48, 48, 20]} w='full'>
    <VStack align='start'>
      <Text fontSize='14' fontWeight='extrabold'>Cryptogic</Text>
      {[
        { name: 'About us', link: 'https://cryptogic.com/about/' },
        { name: 'Guides', link: 'https://cryptogic.com/guides/' },
        { name: 'News', link: 'https://cryptogic.com/latest/' },
        { name: 'Podcast', link: 'https://cryptogic.com/podcast/' },
        { name: 'Cryptogic.TV', link: 'https://cryptogic.com/tv/' },
        { name: 'Privacy Policy', link: 'https://cryptogic.com/privacy/' },
        { name: 'Terms of use', link: 'https://cryptogic.com/terms/' },
      ].map((el) => (
        <Link href={el.link} key={el.name} passHref>
          <Text variant='link'>
            {el.name}
          </Text>
        </Link>
      ))}
      <Text fontSize='14' fontWeight='extrabold'>Data</Text>
      {[
        { name: 'Exachanges', link: '/exchange' },
        { name: 'Coins', link: '/cryptocurrency' },
      ].map((el) => (
        <Link href={el.link} key={el.name} passHref>
          <Text variant='link'>
            {el.name}
          </Text>
        </Link>
      ))}
    </VStack>
    <VStack align='start'>
      <Text fontSize='14' fontWeight='extrabold'>Guides</Text>
      {[
        { name: 'Guides Homepage', link: 'https://cryptogic.com/guides/' },
        { name: 'Beginners Guide', link: '' },
        { name: 'Crypto Cheat Sheet', link: 'https://cryptogic.com/lp-crypto-cheatsheet/' },
      ].map((el) => (
        <Link href={el.link} key={el.name} passHref>
          <Text variant='link'>
            {el.name}
          </Text>
        </Link>
      ))}
      <Text fontSize='14' fontWeight='extrabold'>Podcast</Text>
      {[
        { name: 'Podcast Homepage', link: 'https://cryptogic.com/podcast/' },
        { name: 'Apple Podcasts', link: 'https://podcasts.apple.com/us/podcast/cryptogic/id1608399831' },
        { name: 'Google Podcasts', link: 'https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5saWJzeW4uY29tLzM5OTEyNS9yc3M' },
        { name: 'Spotify', link: 'https://open.spotify.com/show/7zv97ujIMzaqFFbcr9TkEc' },
        { name: 'Watch on Youtube', link: 'https://youtube.com/Cryptogic' },
      ].map((el) => (
        <Link href={el.link} key={el.name} passHref>
          <Text variant='link'>
            {el.name}
          </Text>
        </Link>
      ))}
    </VStack>
  </HStack>
)
export default Flow2
