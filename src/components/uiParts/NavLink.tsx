import React from 'react'
import { Link } from 'gatsby'
import clsx from 'clsx'

export type NavLinkProps = {
  href: string
  title: string
  pathname?: string
}

const NavLink = ({ title, href, pathname }: NavLinkProps): JSX.Element => {
  return (
    <Link
      to={href}
      className={clsx(
        'md:py-2 px-2 md:px-3 font-mono md:hover:bg-gray-100 rounded transition-colors',
        pathname === href && 'text-blue-500'
      )}
    >
      {title}
    </Link>
  )
}

export default NavLink
