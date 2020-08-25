/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function SEO({ description, keywords, url, author, lang, image, title }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author,
                        image,
                        url
                    }
                }
            }
        `
    )

    const metaDescription = description || site.siteMetadata.description
    const metaAuthor = author || site.siteMetadata.author

    const metaImage = image || site.siteMetadata.image

    const metaUrl = url || site.siteMetadata.url
    const metaKeywords = keywords || ['gatsby', 'blog', 'gatsby MDX blog']

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: 'description',
                    content: metaDescription
                },
                {
                    property: 'og:title',
                    content: title
                },
                {
                    property: 'og:description',
                    content: metaDescription
                },
                {
                    property: 'og:type',
                    content: 'website'
                },
                {
                    property: 'og:url',
                    content: metaUrl
                },
                {
                    name: 'twitter:card',
                    content: 'summary'
                },
                {
                    name: 'twitter:creator',
                    content: metaAuthor
                },
                {
                    name: 'twitter:title',
                    content: title
                },
                {
                    name: 'twitter:image',
                    content: metaImage
                },
                {
                    name: 'twitter:description',
                    content: metaDescription
                }
            ].concat(
                metaKeywords & metaKeywords.length > 0
                    ? { name: 'keywords', content: metaKeywords.join(', ') }
                    : []
            )} />
    )
}

SEO.defaultProps = {
    lang: 'en',
    meta: [],
    description: ''
}

export default SEO
