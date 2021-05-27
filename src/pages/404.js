import React from 'react';
import { graphql } from 'gatsby';
import { Post, FeatureImage, Layout } from '../components';
import { H1 } from '../elements';

export default function notFound({ data }) {
    const featureImage = data.file.childImageSharp.gatsbyImageData;

    return (
        <Layout>
            <FeatureImage fluid={featureImage} />
            <Post>
                <H1 textAlign="center" margin="0 0 1rem 0">
                    {' '}
                    Uh-oh... What you are looking for cannot be found
                </H1>
            </Post>
        </Layout>
    );
}

export const notFoundQuery = graphql`
    query MyQuery {
        file(relativePath: { eq: "saddog.jpg" }) {
            childImageSharp {
                gatsbyImageData(quality: 30, layout: FULL_WIDTH)
            }
        }
    }
`;
