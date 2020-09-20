import styled from 'styled-components'

export const FeatureImageWrapper = styled.section`
    grid-column: 3 / span 10;
    grid-row: 2 / 4;
    overflow: hidden;
    position: relative;
    align-content:center;
    align-items:center;
    border-radius: 1rem;
    /* background-image: linear-gradient(147deg, #000000 0%, #04619f 74%); */
    /* background-image: linear-gradient(315deg, #29539b 0%, #1e3b70 74%); */
    /* background: linear-gradient(135deg, rgba(215,230,255,1) 0%, rgba(243,219,246,1) 50%, rgba(240,220,247,1) 55%, rgba(217,227,255,1) 100%); */
    background-color: #000000;  
    background-image: linear-gradient(147deg, #000000 0%, #434343 74%);

    /* background-color: #29539b;
background-image: linear-gradient(315deg, #29539b 0%, #1e3b70 74%); */
    

    /* background-image: linear-gradient(315deg, #7a7adb 0%, #170e13 74%); */



    @media ${(props) => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
`
