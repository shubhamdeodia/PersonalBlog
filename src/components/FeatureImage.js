import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import { FeatureImageWrapper } from '../elements';

export const FeatureImage = ({ fluid }) => {
    return (
        <FeatureImageWrapper>
            <GatsbyImage
                image={fluid}
                alt="feature image"
                placeholder="blurred"
                style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%'
                }}
            />
        </FeatureImageWrapper>
    );
};
