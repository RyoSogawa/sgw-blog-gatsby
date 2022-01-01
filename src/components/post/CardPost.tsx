import React from 'react'
import { Link } from 'gatsby'
import PostDate from './PostDate'
import PostTag from './PostTag'

export type CardPostProps = {
  post: Post
  className?: string
}

const CardPost = ({ post, className }: CardPostProps): JSX.Element => {
  return (
    <article className={className}>
      <div>
        {post.frontmatter?.createdAt && (
          <PostDate date={post.frontmatter.createdAt} />
        )}
        {post.frontmatter?.updatedAt &&
          post.frontmatter?.createdAt !== post.frontmatter?.updatedAt && (
            <PostDate
              date={post.frontmatter?.updatedAt}
              isUpdate
              className={'ml-4'}
            />
          )}
      </div>
      <Link
        to={'/post' + post.fields?.slug}
        className={'group inline-block mt-1 no-underline'}
      >
        <span
          className={
            'inline-block px-2 mr-2 text-2xl bg-blue-100 group-hover:bg-blue-200 rounded transition-colors dark:bg-sky-900 dark:group-hover:bg-sky-800'
          }
        >
          {post.frontmatter?.emoji}
        </span>
        <h2 className={'inline'}>{post.frontmatter?.title}</h2>
        <p className="mt-4 mb-0 text-sm text-gray-500">{post.excerpt}</p>
      </Link>
      <div className={'mt-2'}>
        {post.frontmatter?.tags &&
          post.frontmatter.tags.map(
            tag => tag && <PostTag key={tag} name={tag} />
          )}
      </div>
    </article>
  )
}

export default CardPost
