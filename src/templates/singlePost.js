/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Backdrop, H1, Centered } from '../elements'
import { FeatureImage, Post } from '../components'
import SEO from '../components/seo'

// const Post = loadable(() =>
//     import('../components').then((module) => ({ default: module.Post }))
// )
// const MDXRenderer = loadable(() =>
//     import('gatsby-plugin-mdx').then((module) => ({ default: module.MDXRenderer })), {
//     fallback: (<Backdrop>
//         <Centered>
//             <Loader
//                 type='TailSpin'
//                 color='#EE4C3A'
//                 height={100}
//                 width={100}
//                 timeout={3000} />
//         </Centered>
//     </Backdrop>

//     ) }
// )

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
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
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
