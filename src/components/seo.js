/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import favicon from '../images/favico.png'
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
    const metaKeywords = keywords || ['Front-end developer, JavaScript developer, HTML, HTML5, CSS3, CSS, JavaScript, ReactJS, NodeJS, React, jQuery, Shubham Deodia, Shubham Deodia Blog, Blog, JavaScript Blog, CSS Blog, HTML Blog']

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            link={[
                { rel: 'shortcut icon', type: 'image/png', href: `${favicon}` }
            ]}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
            meta={[
                {
                    name: 'description',
                    content: metaDescription
                },
                {
                    name: 'author',
                    content: site.siteMetadata.author
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
                    name: 'og:image',
                    content: metaImage
                }
            ].concat(
                metaKeywords && metaKeywords.length > 0
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
