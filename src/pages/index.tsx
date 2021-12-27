import React from 'react'
import { graphql, PageProps } from 'gatsby'
import PagePosts from '../components/page/PagePosts'

const PageIndex: React.FC<PageProps<GatsbyTypes.PageIndexQuery>> = ({
  data,
  location,
}) => {
  const posts = data.allMarkdownRemark.nodes

  return <PagePosts posts={posts} />
}

export default PageIndex

export const pageQuery = graphql`
  query PageIndex {
    allMarkdownRemark(
      sort: { fields: [frontmatter___createdAt], order: DESC }
    ) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          createdAt(formatString: "YYYY-MM-DD")
          updatedAt(formatString: "YYYY-MM-DD")
          title
          emoji
          tags
        }
      }
    }
  }
`
