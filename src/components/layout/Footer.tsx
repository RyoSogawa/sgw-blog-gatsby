import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import Link from '../uiParts/Link'

const Footer = (): JSX.Element => {
  return (
    <footer className={'sticky top-full'}>
      <div className="mt-20 text-center">
        <Link to="https://www.buymeacoffee.com/RyoSogawa">
          <StaticImage
            src="https://cdn.buymeacoffee.com/buttons/v2/default-blue.png"
            alt="Buy Me A Coffee"
            className={
              'rounded-2xl shadow-md hover:shadow-lg transition-shadow hover:-translate-y-0.5 transition-translate h-[60px] w-[217px]'
            }
          />
        </Link>
      </div>
      <div
        className={
          'py-4 mt-10 text-xs text-gray-600 dark:text-gray-400 bg-gray-100 border-t dark:bg-slate-800 dark:border-slate-600'
        }
      >
        <div className={'container flex gap-2 justify-between items-center'}>
          <span>Powered by</span>
          <a
            href={'https://www.gatsbyjs.com/'}
            target={'_blank'}
            rel={'noreferrer noopener'}
            className={'grid place-items-center'}
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
            className={'grid place-items-center'}
          >
            <StaticImage
              src="../../images/service/tailwind-css.svg"
              alt="TailwindCSS"
              className={'w-[20px]'}
              placeholder={'tracedSVG'}
            />
          </a>
          <a
            href={'https://vercel.com/'}
            target={'_blank'}
            rel={'noreferrer noopener'}
            className={'grid place-items-center'}
          >
            <StaticImage
              src="../../images/service/vercel.svg"
              alt="Vercel"
              className={'dark:hidden w-[50px]'}
              placeholder={'tracedSVG'}
            />
            <StaticImage
              src="../../images/service/vercel-light.svg"
              alt="Vercel"
              className={'dark:!block !hidden w-[50px]'}
              placeholder={'tracedSVG'}
            />
          </a>
          <div className={'grow'} />
          <span>&copy; RyoSogawa</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
