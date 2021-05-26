import React from 'react';
import { FooterWrapper, FooterSocialIcons, FooterSocialWrapper, P } from '../elements';
// import { useStaticQuery, graphql } from 'gatsby'
import Linkedin from '../images/linkedin.svg';
import Facebook from '../images/facebook.svg';
import Instagram from '../images/instagram.svg';

const Footer = () => {
    //     const data = useStaticQuery(graphql`
    //     query {
    //         facebook: file(relativePath: {
    //             eq: "facebook.svg"
    //         }) {
    //             publicURL
    //         },
    //         linkedin: file(relativePath: {
    //             eq: "linkedin.svg"
    //         }) {
    //             publicURL
    //         },
    //         instagram: file(relativePath: {
    //             eq: "instagram.svg"
    //         }) {
    //             publicURL
    //         }
    //     }
    // `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a
                        href="https://www.linkedin.com/in/shubham-deodia/"
                        target="_blank"
                        rel="noopener noreferrer "
                    >
                        <Linkedin />
                    </a>
                    <a
                        href="https://facebook.com/shubham.deodia"
                        target="_blank"
                        rel="noopener noreferrer "
                    >
                        <Facebook />
                    </a>
                    <a
                        href="https://www.instagram.com/shubham.deodia/"
                        target="_blank"
                        rel="noopener noreferrer "
                    >
                        <Instagram />
                    </a>
                    <P margin="20px" weight="normal" size="xsmall" color="dark3">
                        No &#169; Issues, Reuse as you like
                    </P>
                </FooterSocialIcons>
            </FooterSocialWrapper>
        </FooterWrapper>
    );
};

export { Footer };
