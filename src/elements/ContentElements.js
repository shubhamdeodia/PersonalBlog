import styled from 'styled-components'

export const ContentWrapper = styled.main`
    grid-column: 3/ span 10;
    grid-row: 2 / span 6;
    /* border-radius: 1rem; */
    /* background-color: ${(props) => props.theme.colors.light2}; */
    /* padding: ${(props) => `${props.theme.spacings.xLarge} ${props.theme.spacings.xLarge}`}; */
    /* box-shadow: ${(props) => props.theme.shadows.shadow1}; */
    z-index: 10;
/*     
    display: grid;
    grid-template-columns: 1fr 1fr; */
  
    @media ${(props) => props.theme.breakpoints.tablet}{
        grid-column: 2/ span 6;
        grid-template-columns: 1fr;
    }

    @media ${(props) => props.theme.breakpoints.mobile}{
        grid-template-columns: 1fr;
        padding: ${(props) => `${props.theme.spacings.medium} ${props.theme.spacings.large}`};
    }
`
