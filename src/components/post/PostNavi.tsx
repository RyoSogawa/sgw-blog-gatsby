import React from 'react'
import { Link } from 'gatsby'
import IconArrow from '../svg/IconArrow'

export type PostNaviProps = {
  title: string
  href: string
  direction: 'next' | 'prev'
}

const PostNavi = ({ title, direction, href }: PostNaviProps): JSX.Element => {
  return (
    <Link
      to={href}
      className={
        'group flex justify-between items-center py-4 px-6 w-full h-full hover:bg-gray-50 rounded border transition-colors'
      }
    >
      {direction === 'prev' && (
        <IconArrow
          direction={'prev'}
          className={
            'mr-2 w-5 h-5 text-blue-500 transition-transform group-hover:-translate-x-0.5 shrink-0'
          }
        />
      )}
      <div className={'grow'}>
        <span className="font-mono text-sm text-gray-500">{direction}</span>
        <h2 className="font-bold line-clamp-2">{title}</h2>
      </div>
      {direction === 'next' && (
        <IconArrow
          direction={'next'}
          className={
            'ml-2 w-5 h-5 text-blue-500 transition-transform group-hover:translate-x-0.5 shrink-0'
          }
        />
      )}
    </Link>
  )
}

export default PostNavi
