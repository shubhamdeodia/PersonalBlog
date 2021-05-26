import styled from 'styled-components';
import React from 'react';
import { Link } from 'gatsby';

export const NavWrapper = styled.nav`
    grid-column: 1 / -1;
    grid-row: 1 / 2;
    display: flex;
    align-items: center;

    & img {
        height: 4rem;
    }

    @media ${(props) => props.theme.breakpoints.tablet} {
        /* grid-column: 2 / span 6; */
        grid-column: 1 / -1;
    }
`;
export const NavBar = styled.div`
    z-index: 100;
    position: fixed;
    top: 0;
    height: 53px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: rgb(250, 250, 250);
    box-shadow: rgb(204, 204, 204) 0px 1px 8px;
    padding: 5px;
    align-items: center;
    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
`;
export const NavElementsContainer = styled.div`
    width: 33%;
    display: flex;
    justify-content: center;
    @media ${(props) => props.theme.breakpoints.mobile} {
        width: 50%;
    }
`;

export const NavLogo = styled((props) => <Link {...props}>{props.children}</Link>)`
    margin-left: 3rem;
    justify-content: center;
    font-size: 2rem;
    line-height: 2rem;
    font-weight: bold;
    text-decoration: none;
    color: ${(props) => props.theme.colors.main1};

    @media ${(props) => props.theme.breakpoints.mobile} {
        margin: 0.875rem;
        font-size: 1.5rem;
    }
`;

export const NavElements = styled((props) => <Link {...props}>{props.children}</Link>)`
    font-size: 1rem;
    line-height: 1.125rem;
    font-weight: 400;
    text-decoration: none;
    margin-right: 2rem;
    color: ${(props) => props.theme.colors.dark1};
    &:hover,
    &:focus {
        color: #ee4938;
        text-decoration: underline;
    }
`;
