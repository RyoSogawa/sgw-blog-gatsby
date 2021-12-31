import React from 'react'
import Layout from '../layout/Layout'
import PostTag from '../post/PostTag'
import PostDate from '../post/PostDate'
import Seo from '../layout/Seo'
import PostNavi from '../post/PostNavi'
import BackLink from '../uiParts/BackLink'

export type PagePostProps = {
  post: Post
  prevPost?: Partial<Post>
  nextPost?: Partial<Post>
}

const PagePost = ({ post, prevPost, nextPost }: PagePostProps): JSX.Element => {
  return (
    <Layout>
      <Seo
        title={post.frontmatter?.title}
        // tags={meta.tags}
        // publishedTime={meta.createdAt}
        // modifiedTime={meta.updatedAt}
      />
      <BackLink to={'/'} />
      <div className={'mt-4'}>
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
          className={'inline-block px-2 mr-1 bg-blue-100 rounded select-none'}
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

      <div className="md:flex justify-between mt-20 not-prose">
        <div className="md:w-[45%]">
          {prevPost &&
            prevPost?.frontmatter?.title &&
            prevPost?.fields?.slug && (
              <PostNavi
                title={prevPost?.frontmatter?.title}
                href={'/post' + prevPost?.fields?.slug}
                direction={'prev'}
              />
            )}
        </div>
        {nextPost && nextPost?.frontmatter?.title && nextPost?.fields?.slug && (
          <div className="mt-8 md:mt-0 md:w-[45%]">
            <PostNavi
              title={nextPost?.frontmatter?.title}
              href={'/post' + nextPost?.fields?.slug}
              direction={'next'}
            />
          </div>
        )}
      </div>

      <BackLink to={'/'} className={'mt-10'} />
    </Layout>
  )
}

export default PagePost
