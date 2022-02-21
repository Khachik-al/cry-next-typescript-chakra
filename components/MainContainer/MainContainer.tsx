import Head from 'next/head';
import Link from 'next/link';
import * as React from 'react';
import { Header, Logo, Main, Navigate } from './style'

type Props = {
    children: any;
    keywords?: string;
    title?: string;
}

const MainContainer: React.FC<Props> = ({ children, keywords, title = 'Test Version' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='keywords' content={'criptogic ' + keywords} />
                <meta charSet='utf-8' />
            </Head>
            <Header>
                <Link href='/'><Logo>Cryptogic</Logo></Link>
                <Link href='/coins'><Navigate>Coins</Navigate></Link>
                <Link href='/exchanges'><Navigate>Exchanges</Navigate></Link>
                <Link href='/nfts'><Navigate>NFT's</Navigate></Link>
                <Navigate>Podcast</Navigate>
                <Navigate>TV</Navigate>
                <Navigate>Guide</Navigate>
                <Navigate>News</Navigate>
                <Navigate>About us</Navigate>
            
            </Header>
            <Main>
                {children}
            </Main>
        </>
    );
}


export default MainContainer