import React from 'react'

export const FAVORITES: { name: string; imgFileName: string }[] = [
  {
    name: 'React',
    imgFileName: 'react.svg',
  },
  {
    name: 'GraphQL',
    imgFileName: 'graphql.svg',
  },
  {
    name: 'TypeScript',
    imgFileName: 'typescript.svg',
  },
  {
    name: 'Storybook',
    imgFileName: 'storybook.svg',
  },
  {
    name: 'JetBrains',
    imgFileName: 'jetbrains.svg',
  },
  {
    name: 'Figma',
    imgFileName: 'figma.svg',
  },
  {
    name: 'Googleスプレッドシート',
    imgFileName: 'spread-sheet.svg',
  },
  {
    name: 'Slack',
    imgFileName: 'slack.svg',
  },
]

const Favorites = (): JSX.Element => {
  return (
    <section>
      <h2 id={'favorites'}>Favorites</h2>
      <div
        className={
          'grid gap-x-2 gap-y-8 w-full grid-cols-[repeat(auto-fill,minmax(150px,1fr))] not-prose'
        }
      >
        {FAVORITES.map(favorite => (
          <div key={favorite.name} className={'text-center'}>
            <img
              src={'/images/favorite/' + favorite.imgFileName}
              alt=""
              className={'inline-block h-12'}
            />
            <span className={'block mt-2 font-mono text-sm text-gray-400'}>
              {favorite.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Favorites
