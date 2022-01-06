import React from 'react'
import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'
import Seo from './Seo'
import { useViewport } from '../../lib/hooks/useViewport'

export type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps): JSX.Element => {
  useViewport()

  return (
    <div className={'flex flex-col justify-between min-h-screen'}>
      <Seo title={''} />
      <div>
        <Header />
        <div className={'container mt-6 md:mt-10'}>
          <main className={'mx-auto prose dark:prose-dark'}>{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
