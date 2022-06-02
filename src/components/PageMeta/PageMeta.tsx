import Head from 'next/head'
import { FC, ReactNode } from 'react'

interface Props {
  keywords?: string;
  description?: string;
  title?: string;
  children: ReactNode;
}

const PageMeta: FC<Props> = ({ keywords = '', description = 'Cryptocurrency, Exchange, NFT', title = 'Criptogic', children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='keywords' content={`criptogic ${keywords}`} />
      <meta name='description' content={`${description}`} />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
      <link rel='shortcut icon' href='/assets/img/favicon.png' />
    </Head>
    {children}
  </>
)

export default PageMeta
