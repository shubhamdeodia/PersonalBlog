import React from 'react';
import { ContainerWrapper } from '../elements';
import { Nav } from './Nav';
import { Footer } from './Footer';

export const Layout = ({ children }) => {
    return (
        <ContainerWrapper>
            <Nav />
            {children}
            <Footer />
        </ContainerWrapper>
    );
};
