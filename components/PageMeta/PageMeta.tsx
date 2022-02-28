import Head from 'next/head'
import * as React from 'react'

type Props = {
  keywords?: string;
  title?: string;
  children: any;
}

const PageMeta: React.FC<Props> = ({ keywords, title = 'Criptogic', children }) => (
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
