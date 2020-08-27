/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { H1 } from '../elements'
import { Container, Post, FeatureImage } from '../components'
import SEO from '../components/seo'

export default function singlePost({ data }) {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid
    const seoImage = data.mdx.frontmatter.featureImage.childImageSharp.fluid.src
    const title = data.mdx.frontmatter.title
    const description = data.mdx.frontmatter.excerpt
    const keywords = data.mdx.frontmatter.keywords

    return (

        <Container >
            <SEO image={seoImage} keywords={keywords} title={title} description={description} />
            <FeatureImage fluid={featureImage} />
            <Post>
                <H1 margin='0 0 2rem 0'>{title}</H1>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Post>
        </Container>

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
