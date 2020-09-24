/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import { graphql } from 'gatsby'
import { Container, ContentCard, Content, FeatureImage, Pagination } from '../components'
import { H1, P } from '../elements'
import SEO from '../components/seo'

const allPosts = ({ pageContext, data }) => {
    const { currentPage, numPages } = pageContext
    const isFirst = currentPage === 1

    const isLast = currentPage === numPages

    const prevPage = currentPage - 1 === 1 ? '/' : `${currentPage - 1}`

    const nextPage = `/${currentPage + 1}`

    const posts = data.allMdx.edges

    return (

        <Container>
            <SEO title='ShubhamD Blog' />
            {/* <FeatureImage showParticles /> */}
            <Content>
                {/* <H1 textAlign='center' color='dark2' margin='0 0 1rem 0'>Welcome to my Blog</H1>
                <P color='dark2' textAlign='center'>Simple</P> */}

                {posts.map((post) => (
                    <ContentCard
                        key={post.node.frontmatter.slug}
                        date={post.node.frontmatter.date}
                        title={post.node.frontmatter.title}
                        excerpt={post.node.frontmatter.excerpt}
                        readtime={post.node.frontmatter.readtime}
                        slug={post.node.frontmatter.slug} />

                ))}

            </Content>
            <Pagination isFirst={isFirst} isLast={isLast} prevPage={prevPage} nextPage={nextPage} />

        </Container>

    )
}

export default allPosts

export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!){
        allMdx(limit: $limit, skip: $skip, sort: {fields: frontmatter___date, order: DESC}) {
            edges {
                node {
                    frontmatter {
                        excerpt
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        title
                        readtime
                    }
                }
            }
        }

    }
`
