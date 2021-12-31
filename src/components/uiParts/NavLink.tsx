import React from 'react'
import Link from './Link'
import clsx from 'clsx'
import { useLocation } from '@reach/router'

export type NavLinkProps = {
  href: string
  children: React.ReactNode
}

const NavLink = ({ children, href }: NavLinkProps): JSX.Element => {
  const { pathname } = useLocation()

  return (
    <Link
      to={href}
      className={clsx(
        'md:py-2 px-2 md:px-3 font-mono md:hover:bg-gray-100 rounded transition-colors',
        pathname === href && 'text-blue-500'
      )}
    >
      {children}
    </Link>
  )
}

export default NavLink
