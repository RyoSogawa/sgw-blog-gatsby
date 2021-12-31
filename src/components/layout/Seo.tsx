import * as React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export type SeoProps = {
  description?: string
  meta?: JSX.IntrinsicElements['meta'][] | undefined
  title?: string
}

const Seo = ({ description = '', meta = [], title }: SeoProps): JSX.Element => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            siteUrl
            description
            social {
              twitter
            }
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title
  const siteUrl = site.siteMetadata?.siteUrl

  return (
    <Helmet
      htmlAttributes={{
        lang: 'ja',
      }}
      title={title || defaultTitle}
      titleTemplate={defaultTitle && `%s | ${defaultTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: siteUrl + '/images/ogp.png',
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata?.social?.twitter || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        ...meta,
      ]}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin={'true'}
      />
      <link
        href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/prism-themes/1.5.0/prism-darcula.min.css"
        integrity="sha512-K5Xw18pkHMgNX5vlIERxh6YIuU6AiTUUE+yXZAartEQi5dWOjnoVjldVw9hU60zbgxz/Hh/JR9gJ49xf+LG0Cw=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
    </Helmet>
  )
}

export default Seo
