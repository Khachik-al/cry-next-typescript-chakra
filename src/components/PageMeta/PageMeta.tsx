import Head from 'next/head'
import { FC, ReactNode } from 'react'

interface Props {
  keywords?: string;
  title?: string;
  children: ReactNode;
}

const PageMeta: FC<Props> = ({ keywords = '', title = 'Criptogic', children }) => (
  <>
    <Head>
      <title>{title}</title>
      <meta name='keywords' content={`criptogic ${keywords}`} />
      <meta charSet='utf-8' />
    </Head>
    {children}
  </>
)

export default PageMeta