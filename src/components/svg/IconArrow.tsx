import React from 'react'

export type IconArrowProps = {
  direction: 'prev' | 'next'
  className?: string
}

const IconArrow = ({ className, direction }: IconArrowProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 512 512"
    >
      <title>Arrow {direction === 'prev' ? 'Back' : 'Forward'}</title>
      {direction === 'prev' ? (
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M244 400L100 256l144-144M120 256h292"
        />
      ) : (
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="48"
          d="M268 112l144 144-144 144M392 256H100"
        />
      )}
    </svg>
  )
}

export default IconArrow
