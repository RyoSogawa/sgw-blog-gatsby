import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const Footer = (): JSX.Element => {
  return (
    <footer
      className={
        'sticky top-full py-4 mt-20 text-xs text-gray-600 bg-gray-100 border-t'
      }
    >
      <div className={'container flex gap-2 justify-between items-center'}>
        <span>Powered by</span>
        <a
          href={'https://www.gatsbyjs.com/'}
          target={'_blank'}
          rel={'noreferrer noopener'}
        >
          <StaticImage
            src={'../../images/service/gatsby.svg'}
            alt={'gatsby'}
            className={'w-4'}
            placeholder={'tracedSVG'}
          />
        </a>
        <a
          href={'https://tailwindcss.com/'}
          target={'_blank'}
          rel={'noreferrer noopener'}
        >
          <img
            src="/images/service/tailwind-css.svg"
            alt="TailwindCSS"
            width="2500"
            height="1499"
            loading="lazy"
            className={'w-[20px]'}
          />
        </a>
        <a
          href={'https://vercel.com/'}
          target={'_blank'}
          rel={'noreferrer noopener'}
        >
          <img
            src="/images/service/vercel.svg"
            alt="Vercel"
            width="283"
            height="64"
            loading="lazy"
            className={'w-[50px]'}
          />
        </a>
        <div className={'grow'} />
        <span>&copy; RyoSogawa</span>
      </div>
    </footer>
  )
}

export default Footer
