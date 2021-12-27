import React from 'react'
import IconTag from '../svg/IconTag'

export type PostTagProps = { name: string }

const PostTag = ({ name }: PostTagProps): JSX.Element => {
  return (
    <span className={'inline-flex items-center mr-3 text-sm text-gray-500'}>
      <IconTag className={'mr-1 w-4 h-4 fill-current'} />
      {name}
    </span>
  )
}

export default PostTag
