import Layout from '../layout/Layout'
import React from 'react'
import Link from '../uiParts/Link'
import Seo from '../layout/Seo'

const Page404 = (): JSX.Element => {
  return (
    <Layout>
      <Seo
        title={'404 Not Found'}
        meta={[
          { name: 'robots', content: 'noindex' },
          { name: 'googlebot', content: 'noindex' },
        ]}
      />
      <h1>404 Not Found</h1>
      <p>ページが見つかりませんでした。</p>
      <Link to={'/'}>ページトップへ</Link>
    </Layout>
  )
}

export default Page404
