import React from 'react'
import clsx from 'clsx'
import IconRefresh from '../svg/IconRefresh'
import IconCalendar from '../svg/IconCalendar'

export type PostDateProps = {
  date: string
  isUpdate?: boolean
  className?: string
}

const iconClass = 'mr-1 w-4 h-4 fill-curren'

const PostDate = ({
  date,
  isUpdate,
  className,
}: PostDateProps): JSX.Element => {
  return (
    <span
      className={clsx(
        'inline-flex items-center text-sm text-gray-500',
        className
      )}
    >
      {isUpdate ? (
        <IconRefresh className={iconClass} />
      ) : (
        <IconCalendar className={iconClass} />
      )}
      {date}
    </span>
  )
}

export default PostDate
