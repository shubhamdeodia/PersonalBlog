import React from 'react'
import Img from 'gatsby-image'
import { useStaticQuery, graphql } from 'gatsby'
import { FeatureImageWrapper } from '../elements'

export const FeatureImage = () => {
    const data = useStaticQuery(graphql`
        query {
            featureimage: file(relativePath: { eq: "featureimage-2.jpg" }) {
                childImageSharp {
                    fluid(quality: 90) {    
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return (
        <FeatureImageWrapper>
            <Img fluid={data.featureimage.childImageSharp.fluid} style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%'
            }} />
        </FeatureImageWrapper>
    )
}
