/* eslint-disable react/jsx-pascal-case */
import React, { Suspense } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { H1 } from '../elements'
import { Post, FeatureImage } from '../components'
import SEO from '../components/seo'

export default function singlePost({ data }) {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid
    const seoImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid.src
    const title = data.mdx.frontmatter.title
    const description = data.mdx.frontmatter.excerpt
    const keywords = data.mdx.frontmatter.keywords

    return (

        <>
            <SEO image={seoImage} keywords={keywords} title={title} description={description} />
            <FeatureImage fluid={featureImage} />
            <Post>
                <H1 margin='0 0 2rem 0'>{title}</H1>

                <Suspense fallback={<div>Loading...</div>}>
                    <MDXRenderer>{data.mdx.body}</MDXRenderer>
                </Suspense>

            </Post>
        </>

    )
}

export const query = graphql`
        query SinglePostQuery($id: String!) {
        mdx(id: {eq: $id}) {
            body
            frontmatter {
            date
            excerpt
            slug
            title
            keywords
            featureImage {
                childImageSharp {
                    fluid(quality: 90) {    
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            }
        }
}`
