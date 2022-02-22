import { Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';
import * as React from 'react';

type Props = {

}

const HeaderNav: React.FC<Props> = ({ }) => {
    return (
        <>
            <Flex align='center' ml={100} mt={30}>
                
                <Link href='/'>
                    <Text fontSize={25} color='green' fontWeight={600} cursor='pointer'>
                        Cryptogic
                    </Text>
                </Link>
                <Link href='/coins'>
                    <Text ml={10} cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                        Coins
                    </Text>
                </Link>
                <Link href='/exchanges'>
                    <Text ml={10} cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                        Exchanges
                    </Text>
                </Link>
                <Link href='/nfts'>
                    <Text ml={10} cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                        NFT's
                    </Text>
                </Link>
                <Text ml={10} cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                    Podcast
                </Text>
                <Text ml={10} cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                    TV
                </Text>
                <Text ml={10} cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                    Guide
                </Text>
                <Text ml={10} cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                    News
                </Text>
                <Text ml={10} cursor='pointer' _hover={{ textDecoration: 'underline' }}>
                    About us
                </Text>
            </Flex>
        </>
    );
}


export default HeaderNav