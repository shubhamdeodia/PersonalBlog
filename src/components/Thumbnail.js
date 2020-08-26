import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

export const Thumbnail = ({ imgName, width }) => {
    console.log('Thumbnail -> width', width)
    return (
        <StaticQuery
            query={graphql`
        query {
          allImageSharp {
            edges {
              node {
                fluid(maxWidth: 1100) {
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

                console.log('Thumbnail -> image', image)

                if (!image) {
                    return null
                }
                return (
                    <Img width={width} fluid={image.node.fluid} />
                )
            }} />
    )
}
