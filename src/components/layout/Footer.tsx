import React from 'react'

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
          href={'https://nextjs.org/'}
          target={'_blank'}
          rel={'noreferrer noopener'}
        >
          <img
            src="/images/service/next-js.svg"
            alt="Next.js"
            width="1365"
            height="1365"
            loading="lazy"
            className={'w-[16px]'}
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
