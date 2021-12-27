import React from 'react'
import NavLink from '../uiParts/NavLink'
import { Link } from 'gatsby'

const Header = (): JSX.Element => {
  return (
    <header
      className={
        'sticky top-0 z-sticky py-2 border-b border-gray-100 shadow-sm bg-white/90'
      }
    >
      <div className={'container flex items-center'}>
        <Link to={'/'} className={'flex items-center'}>
          <img
            src="/images/logo/dinosaur_record_rectangle.svg"
            alt=""
            width="337"
            height="337"
            className={'mr-2 w-8'}
          />
          <span className={'text-xl font-extrabold tracking-tighter'}>sgw</span>
        </Link>
        <div className={'grow'} />
        <nav>
          <ul className={'flex items-center'}>
            <li className={'mr-1'}>
              <NavLink href={'/'} title={'Posts'} />
            </li>
            <li className={'mr-4'}>
              <NavLink href={'/about'} title={'About'} />
            </li>
            <li>
              <a
                href={'https://github.com/RyoSogawa/sgw-dev'}
                target={'_blank'}
                rel={'noreferrer noopener'}
                className={'grid place-items-center'}
              >
                <img
                  src={'/images/service/github.svg'}
                  width={24}
                  height={24}
                  alt={'GitHub'}
                  className={'w-6 h-6 text-black'}
                />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header