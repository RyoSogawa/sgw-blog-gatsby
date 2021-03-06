import React from 'react'
import NavLink from '../uiParts/NavLink'
import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import IconFeed from '../svg/IconFeed'
import BtnColorScheme from '../uiParts/BtnColorScheme'
import IconGitHub from '../svg/IconGitHub'

const Header = (): JSX.Element => {
  return (
    <header
      className={
        'sticky top-0 z-sticky py-2 border-b border-gray-100 shadow-sm dark:border-slate-700 bg-white/90 dark:bg-slate-900/90'
      }
    >
      <div className={'container flex items-center'}>
        <Link to={'/'} className={'flex items-center'}>
          <StaticImage
            src="../../images/logo/dinosaur_record_rectangle.svg"
            alt=""
            className={'mr-2 w-8'}
            placeholder={'tracedSVG'}
          />
          <span className={'text-xl font-extrabold tracking-tighter'}>sgw</span>
        </Link>
        <div className={'grow'} />
        <nav>
          <ul className={'flex items-center'}>
            <li className={'mr-1'}>
              <NavLink href={'/'}>Posts</NavLink>
            </li>
            <li className={'mr-3'}>
              <NavLink href={'/about/'}>About</NavLink>
            </li>
            <li className={'mr-4'}>
              <BtnColorScheme />
            </li>
            <li className={'mr-4'}>
              <a
                href={'https://github.com/RyoSogawa/sgw-blog-gatsby'}
                target={'_blank'}
                rel={'noreferrer noopener'}
                className={'grid place-items-center'}
              >
                {/*<StaticImage*/}
                {/*  src={'../../images/service/github.svg'}*/}
                {/*  alt={'GitHub'}*/}
                {/*  className={'w-6 h-6 text-black'}*/}
                {/*  placeholder={'tracedSVG'}*/}
                {/*/>*/}
                <IconGitHub className={'w-6 h-6 fill-black dark:fill-white'} />
              </a>
            </li>
            <li>
              <a href={'/rss.xml'} className={'grid place-items-center'}>
                <IconFeed className={'w-6 h-6 fill-black dark:fill-white'} />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
