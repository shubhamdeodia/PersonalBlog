import React from 'react'
import { NavWrapper, NavBar, NavElements, NavElementsContainer, NavLogo } from '../elements'

const Nav = () => {
    // const data = useStaticQuery(graphql`
    //     query {
    //         logo: file(relativePath: {
    //             eq: "logo.svg"
    //         }) {
    //             publicURL
    //         }
    //     }
    // `)

    return (
        <NavWrapper>
            <NavBar >
                <NavLogo to='/'>{ '{ shubhamd }' }</NavLogo>
                <NavElementsContainer>
                    <NavElements to='/'>Blog Home</NavElements>
                    <NavElements target='_blank' to='https://shubhamdeodia.github.io/shubhamD/'>Resume</NavElements>
                </NavElementsContainer>
            </NavBar>
        </NavWrapper>
    )
}

export { Nav }
