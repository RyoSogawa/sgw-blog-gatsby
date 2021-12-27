import React from 'react'

export const SERVICES: { link: string; name: string; imgFileName: string }[] = [
  {
    link: 'https://github.com/RyoSogawa',
    name: 'GitHub',
    imgFileName: 'github.svg',
  },
  {
    link: 'https://zenn.dev/ryosogawa',
    name: 'Zenn',
    imgFileName: 'zenn.svg',
  },
  {
    link: 'https://www.wantedly.com/id/ryo_sogawa',
    name: 'Wantedly',
    imgFileName: 'wantedly.svg',
  },
  {
    link: 'https://twitter.com/sgw123456',
    name: 'Twitter',
    imgFileName: 'twitter.svg',
  },
  {
    link: 'https://www.twitch.tv/mosana',
    name: 'Twitch',
    imgFileName: 'twitch.svg',
  },
]

const Services = (): JSX.Element => {
  return (
    <div
      className={
        'grid gap-2 w-full grid-cols-[repeat(auto-fill,minmax(30px,1fr))] not-prose'
      }
    >
      {SERVICES.map(service => (
        <a
          key={service.name}
          href={service.link}
          className={
            'grid place-items-center w-8 h-8 hover:bg-gray-100 rounded border'
          }
          target={'_blank'}
          rel={'noreferrer noopener'}
        >
          <img
            src={'/images/service/' + service.imgFileName}
            alt={service.name}
            width={16}
            height={16}
            className={'w-4 h-4'}
          />
        </a>
      ))}
    </div>
  )
}

export default Services
