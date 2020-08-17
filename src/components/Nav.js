import React from 'react'
import { NavWrapper } from '../elements'
import { useStaticQuery, Link, graphql } from 'gatsby'

const Nav = () => {
    const data = useStaticQuery(graphql`
        query {
            logo: file(relativePath: {
                eq: "sugar.svg"
            }) {
                publicURL
            }
        }
    `)

    return (
        <NavWrapper>
            <Link to='/'>
                <img src={data.logo.publicURL} alt='sugar-blog' />
            </Link>
        </NavWrapper>
    )
}

export { Nav }
