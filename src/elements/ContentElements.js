import styled from 'styled-components'

export const ContentWrapper = styled.main`
    grid-column: 4/ span 8;
    grid-row: 3 / span 5;
    background-color: ${(props) => props.theme.colors.light2};
    padding: ${(props) => `${props.theme.sapcing.xLarge} ${props.theme.sapcing.xLarge}`};
    box-shadow: ${(props) => props.theme.sahdows.shadow1};
    z-index: 10;


    @media ${(props) => props.theme.breakpoints.tablet}{
        grid-column: 2/ span 6;
    }

    @media ${(props) => props.theme.breakpoints.mobile}{
        padding: ${(props) => `${props.theme.sapcing.medium} ${props.theme.sapcing.large}`};
    }
`
