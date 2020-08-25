import React from 'react'
import { NavWrapper, NavBar, NavElements } from '../elements'
import { useStaticQuery, Link, graphql } from 'gatsby'

const Nav = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {
                eq: "logo.svg"
            }) {
                publicURL
            }
        }
    `)

    return (
        <NavWrapper>
            <NavBar >

                <Link to='/'>
                    <img style={{
                        height: '3rem',
                        alignSelf: 'flex-start'

                    }} src={data.logo.publicURL} alt='shubhamd' />
                </Link>
                <div>
                    <NavElements to='/'>Blog Home</NavElements>
                    <NavElements target='_blank' to='https://shubhamdeodia.github.io/shubhamD/'>Resume</NavElements>
                </div>
            </NavBar>
        </NavWrapper>
    )
}

export { Nav }
