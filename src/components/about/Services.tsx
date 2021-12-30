import React from 'react'
import { IStaticImageProps } from 'gatsby-plugin-image/dist/src/components/static-image.server'
import { StaticImage } from 'gatsby-plugin-image'

// StaticImage用共通props（srcに変数が使えないためここだけ共通化）
const staticImageCommonProps: Omit<IStaticImageProps, 'src'> = {
  alt: '',
  className: 'w-4 h-4',
  placeholder: 'tracedSVG',
  objectFit: 'contain',
}

export const SERVICES: {
  link: string
  name: string
  staticImage: JSX.Element
}[] = [
  {
    link: 'https://github.com/RyoSogawa',
    name: 'GitHub',
    staticImage: (
      <StaticImage
        src={'../../images/service/github.svg'}
        {...staticImageCommonProps}
      />
    ),
  },
  {
    link: 'https://zenn.dev/ryosogawa',
    name: 'Zenn',
    staticImage: (
      <StaticImage
        src={'../../images/service/zenn.svg'}
        {...staticImageCommonProps}
      />
    ),
  },
  {
    link: 'https://www.wantedly.com/id/ryo_sogawa',
    name: 'Wantedly',
    staticImage: (
      <StaticImage
        src={'../../images/service/wantedly.svg'}
        {...staticImageCommonProps}
      />
    ),
  },
  {
    link: 'https://twitter.com/sgw123456',
    name: 'Twitter',
    staticImage: (
      <StaticImage
        src={'../../images/service/twitter.svg'}
        {...staticImageCommonProps}
      />
    ),
  },
  {
    link: 'https://www.twitch.tv/mosana',
    name: 'Twitch',
    staticImage: (
      <StaticImage
        src={'../../images/service/twitch.svg'}
        {...staticImageCommonProps}
      />
    ),
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
          {service.staticImage}
          <span className="sr-only">{service.name}</span>
        </a>
      ))}
    </div>
  )
}

export default Services
