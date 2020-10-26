import React from 'react'
import { ContainerWrapper } from '../elements'
import { Nav, Footer } from '../components'

export const Layout = ({ children }) => {
    return (<ContainerWrapper>
        <Nav />
        {children}
        <Footer />
    </ContainerWrapper>
    )
}
