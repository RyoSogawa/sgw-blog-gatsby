import React from 'react'
import { Link } from 'gatsby'
import Layout from '../layout/Layout'
import PostTag from '../post/PostTag'
import PostDate from '../post/PostDate'
import Seo from '../layout/Seo'

export type PagePostProps = {
  post: Post
}

const PagePost = ({ post }: PagePostProps): JSX.Element => {
  return (
    <Layout>
      <Seo
        title={
          post.frontmatter?.emoji &&
          post.frontmatter.emoji + post.frontmatter?.title
        }
        // tags={meta.tags}
        // publishedTime={meta.createdAt}
        // modifiedTime={meta.updatedAt}
      />
      <div>
        {post.frontmatter?.createdAt && (
          <PostDate date={post.frontmatter.createdAt} />
        )}
        {post.frontmatter?.updatedAt &&
          post.frontmatter?.createdAt !== post.frontmatter.updatedAt && (
            <PostDate
              date={post.frontmatter.updatedAt}
              isUpdate
              className={'ml-4'}
            />
          )}
      </div>
      <h1 className={'mt-2 mb-4'}>
        <span
          className={
            'inline-block px-2 mr-3 text-3xl bg-blue-100 rounded select-none'
          }
        >
          {post.frontmatter?.emoji}
        </span>
        {post.frontmatter?.title}
      </h1>
      {post.frontmatter?.tags &&
        post.frontmatter.tags.map(
          tag => tag && <PostTag key={tag} name={tag} />
        )}
      {post.html && (
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
      )}
      <Link to={'/'} className={'inline-block mt-10'}>
        一覧に戻る
      </Link>
    </Layout>
  )
}

export default PagePost
