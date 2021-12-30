import React from 'react'
import Link from './Link'
import IconGrid from '../svg/IconGrid'
import clsx from 'clsx'

export type BackLinkProps = {
  to: string
  className?: string
}

const BackLink = ({ to, className }: BackLinkProps): JSX.Element => {
  return (
    <Link
      to={to}
      className={clsx('group inline-flex items-center text-sm', className)}
    >
      <IconGrid
        className={
          'mr-1 w-4 transition-transform duration-200 group-hover:rotate-90 fill-current'
        }
      />
      一覧に戻る
    </Link>
  )
}

export default BackLink
