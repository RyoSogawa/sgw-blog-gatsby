import React from 'react'
import { Link } from 'gatsby'

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
        'flex justify-between py-4 px-6 w-full h-full hover:bg-gray-50 rounded border transition-colors'
      }
    >
      {direction === 'prev' && (
        <img
          src="/images/arrow-back-outline.svg"
          alt=""
          width="20"
          height="20"
          loading="lazy"
          className={'mr-2'}
        />
      )}
      <div>
        <span className="font-mono text-sm text-gray-500">{direction}</span>
        <h2 className="text-blue-500 line-clamp-2">{title}</h2>
      </div>
      {direction === 'next' && (
        <img
          src="/images/arrow-forward-outline.svg"
          alt=""
          width="20"
          height="20"
          loading="lazy"
          className={'ml-2'}
        />
      )}
    </Link>
  )
}

export default PostNavi
