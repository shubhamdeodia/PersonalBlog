import React from 'react'
import { FooterWrapper, FooterSocialIcons, FooterSocialWrapper } from '../elements'
import { useStaticQuery, graphql } from 'gatsby'

const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
        facebook: file(relativePath: {
            eq: "facebook.svg"
        }) {
            publicURL
        },
        linkedin: file(relativePath: {
            eq: "linkedin.svg"
        }) {
            publicURL
        },
        instagram: file(relativePath: {
            eq: "instagram.svg"
        }) {
            publicURL
        }
    }
`)

    return (<FooterWrapper >
        <FooterSocialWrapper>
            <FooterSocialIcons>
                <a href='https://linkedin.com/shubham.deodia' target='_blank' rel='noopener noreferrer '>
                    <img src={data.linkedin.publicURL} />
                </a>
                <a href='https://facebook.com/shubham.deodia' target='_blank' rel='noopener noreferrer '>
                    <img src={data.facebook.publicURL} />
                </a>
                <a href='https://facebook.com/shubham.deodia' target='_blank' rel='noopener noreferrer '>
                    <img src={data.instagram.publicURL} />
                </a>
            </FooterSocialIcons>
        </FooterSocialWrapper>
    </FooterWrapper>)
}

export { Footer }
