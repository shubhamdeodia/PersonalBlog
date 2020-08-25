import styled from 'styled-components'

export const ContainerWrapper = styled.div`
    height: 100%;
    display: grid;
    /* 
        create grid column of 14 column with 1st and last column using the free space
        the 12 column in between has a maximun of 4.2 rem width and minimum is auto adjusted
    */
    grid-template-columns: 1fr repeat(12, minmax(auto, 4.2rem)) 1fr;

    /* creates 4 rows, 1st -  7.8 rem height, 2 -  20 rem, 3rd -  4 rem, rest is auto adjusted */
    grid-template-rows: 5rem 20rem 4rem auto;

    /* gap between rows is 0 and gap between column is 2rem */
    gap: 0 2rem;

    @media ${(props) => props.theme.breakpoints.tablet} {
        grid-template-columns: 2rem repeat(6, 1fr) 2rem;
        grid-gap: 0 1rem;
    }

    
    @media ${(props) => props.theme.breakpoints.mobile} {
        grid-template-columns: 1rem repeat(6, 1fr) 1rem;
        grid-gap: 0 1rem;
    }
`

