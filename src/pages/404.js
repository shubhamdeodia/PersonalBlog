import React from 'react'
import { graphql } from 'gatsby'
import { Container, Content, FeatureImage } from '../components'
import { H1 } from '../elements'

export default function notFound({ data }) {
    const featureImage = data.imageSharp.fluid

    return (
        <Container>
            <FeatureImage fluid={featureImage} />
            <Content>
                <H1 textAlign='center' margin='0 0 1rem 0'>
                    {' '}
                    Uh-oh... What you are looking for cannot be found
                </H1>
            </Content>
        </Container>
    )
}

export const notFoundQuery = graphql`
    query NotFoundQuery {
        imageSharp(fluid: { originalName: {eq: "saddog.jpg"}}){
            fluid {
                ...GatsbyImageSharpFluid
            }
        }
    }
`
