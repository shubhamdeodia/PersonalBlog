import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export const Thumbnail = ({ imgName }) => {
    return (
        <StaticQuery
            query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(quality: 30) {
                  ...GatsbyImageSharpFluid
                  originalName
                }
              }
            }
          }
        }
      `}
            render={(data) => {
                const image = data.allImageSharp.edges.find(
                    (edge) => edge.node.fluid.originalName === imgName
                )

                if (!image) {
                    return null
                }
                return (
                    <Img fluid={image.node.fluid} />
                )
            }} />
    )
}
