import React from 'react'
import Img from 'gatsby-image'
import { FeatureImageWrapper } from '../elements'

export const FeatureImage = ({ fluid }) => {
    return (
        <FeatureImageWrapper>
            <Img fluid={fluid} style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%'
            }} />
        </FeatureImageWrapper>
    )
}
