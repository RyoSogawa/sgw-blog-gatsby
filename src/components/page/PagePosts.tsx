import React from 'react'
import Layout from '../layout/Layout'
import CardPost from '../post/CardPost'
import Seo from '../layout/Seo'

export type PagePostsProps = {
  posts: Readonly<Post[]>
}

const PagePosts = ({ posts }: PagePostsProps) => {
  return (
    <Layout>
      <Seo title={'Posts'} />
      <h1>Posts</h1>
      {posts.map(post => (
        <CardPost key={post.fields?.slug} post={post} className={'mt-8'} />
      ))}
    </Layout>
  )
}

export default PagePosts
