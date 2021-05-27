/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { H1 } from '../elements';
import { FeatureImage, Layout, Post } from '../components';
import SEO from '../components/seo';

export default function singlePost({ data }) {
    const featureImage =
        data.mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData;
    const seoImage =
        data.mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData.src;
    const { title } = data.mdx.frontmatter;
    const description = data.mdx.frontmatter.excerpt;
    const { keywords } = data.mdx.frontmatter;

    return (
        <Layout>
            <SEO
                image={seoImage}
                keywords={keywords}
                title={title}
                description={description}
            />
            <FeatureImage fluid={featureImage} />
            <Post>
                <H1 margin="0 0 2rem 0">{title}</H1>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
            </Post>
        </Layout>
    );
}

export const query = graphql`
    query SinglePostQuery($id: String!) {
        mdx(id: { eq: $id }) {
            body
            frontmatter {
                date
                excerpt
                slug
                title
                keywords
                featureImage {
                    childImageSharp {
                        gatsbyImageData(quality: 30, layout: FULL_WIDTH)
                    }
                }
            }
        }
    }
`;
