import styled from 'styled-components';
import React from 'react';

export const P = styled.p`
    grid-column: 1/ -1;
    margin: ${(props) => (props.margin ? props.margin : 0)};
    & a {
        text-decoration: underline;
        color: ${(props) => props.theme.colors.main1};
    }
    text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
    color: ${(props) => {
        switch (props.color) {
            case 'dark1':
                return props.theme.colors.dark1;
            case 'dark2':
                return props.theme.colors.dark2;
            case 'dark3':
                return props.theme.colors.dark3;
            case 'light1':
                return props.theme.colors.light1;
            case 'light2':
                return props.theme.colors.light2;
            default:
                return null;
        }
    }};
    font-size: ${(props) => {
        switch (props.size) {
            case 'medium':
                return '1.125rem';
            case 'small':
                return '1rem';
            case 'xsmall':
                return '0.875rem';
            default:
                return '1.125rem';
        }
    }};
    font-weight: ${(props) => {
        switch (props.weight) {
            case 'thin':
                return 100;
            case 'normal':
                return 400;
            case 'bold':
                return 700;
            case 'extrabold':
                return 800;
            default:
                return 400;
        }
    }};
    font-style: ${(props) => {
        switch (props.style) {
            case 'italic':
                return 'italic';
            default:
                return 'normal';
        }
    }};
    line-height: ${(props) => {
        switch (props.size) {
            case 'medium':
                return '1.4375rem';
            case 'small':
                return '1.375rem';
            case 'xsmall':
                return '1.125rem';
            default:
                return '1.4375rem';
        }
    }};

    @media ${(props) => props.theme.breakpoints.tablet} {
        font-size: 1rem;
    }
    text-decoration: ${(props) => (props.textDecoration ? props.textDecoration : 'none')};
`;

export const H1 = styled.h1`
    font-size: 2.25rem;
    line-height: 2.25rem;
    grid-column: 1/ -1;
    text-decoration: none;
    box-shadow: none;
    margin: ${(props) => (props.margin ? props.margin : 0)};
    text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
    @media ${(props) => props.theme.breakpoints.tablet} {
        font-size: 1.75rem;
        line-height: 1.75rem;
    }
    color: ${(props) => {
        switch (props.color) {
            case 'main1':
                return props.theme.colors.main1;
            case 'dark1':
                return props.theme.colors.dark1;
            case 'dark2':
                return props.theme.colors.dark2;
            case 'dark3':
                return props.theme.colors.dark3;
            case 'light1':
                return props.theme.colors.light1;
            case 'light2':
                return props.theme.colors.light2;
            default:
                return null;
        }
    }};
    font-weight: ${(props) => {
        switch (props.weight) {
            case 'normal':
                return 400;
            case 'bold':
                return 700;
            default:
                return 400;
        }
    }};
`;

export const H2 = styled.h2`
    font-size: 1.5rem;
    @media ${(props) => props.theme.breakpoints.tablet} {
        font-size: 1.225rem;
    }
    line-height: 1.875rem;
    margin: ${(props) => (props.margin ? props.margin : 0)};
    text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
    color: ${(props) => {
        switch (props.color) {
            case 'dark1':
                return props.theme.colors.dark1;
            case 'dark2':
                return props.theme.colors.dark2;
            case 'dark3':
                return props.theme.colors.dark3;
            case 'light1':
                return props.theme.colors.light1;
            case 'light2':
                return props.theme.colors.light2;
            default:
                return null;
        }
    }};
    font-weight: ${(props) => {
        switch (props.weight) {
            case 'normal':
                return 400;
            case 'bold':
                return 700;
            default:
                return 400;
        }
    }};
`;
