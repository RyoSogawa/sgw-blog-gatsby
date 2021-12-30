import Layout from '../layout/Layout'
import React from 'react'
import Link from '../uiParts/Link'

const Page404 = (): JSX.Element => {
  return (
    <Layout>
      <h1>404 Not Found</h1>
      <p>ページが見つかりませんでした。</p>
      <Link to={'/'}>ページトップへ</Link>
    </Layout>
  )
}

export default Page404
