import React from 'react';
import { graphql, StaticQuery } from 'gatsby';
import { getImage, GatsbyImage } from 'gatsby-plugin-image';

export const Thumbnail = ({ imgName }) => {
    return (
        <StaticQuery
            query={graphql`
                query {
                    allImageSharp {
                        nodes {
                            gatsbyImageData(layout: FULL_WIDTH, placeholder: BLURRED)
                            parent {
                                ... on File {
                                    name
                                }
                            }
                        }
                    }
                }
            `}
            render={(data) => {
                const imageData = data.allImageSharp.nodes.find((node) => {
                    return node.parent.name === imgName.split('.')[0];
                });

                const image = getImage(imageData);

                if (!image) {
                    return null;
                }
                return <GatsbyImage image={image} alt="thumbnail image" />;
            }}
        />
    );
};
