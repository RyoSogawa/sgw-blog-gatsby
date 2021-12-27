import React from 'react'
import { graphql, PageProps } from 'gatsby'
import PagePost from '../components/page/PagePost'

const TemplatePost: React.FC<PageProps<GatsbyTypes.TemplatePostQuery>> = ({
  data,
  location,
}) => {
  const post = data.markdownRemark
  // const { previous, next } = data

  if (!post) return null

  return <PagePost post={post} />
}

export default TemplatePost

export const pageQuery = graphql`
  query TemplatePost(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        emoji
        tags
        createdAt
        updatedAt
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        emoji
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
        emoji
      }
    }
  }
`
