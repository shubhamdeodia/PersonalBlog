import styled from 'styled-components'

export const FooterWrapper = styled.footer`
    grid-column: 2/ span 12;
    grid-row: 9 / span 1;
    min-height: 11.25rem;
    padding: 3rem 0;
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media ${(props) => props.theme.breakpoints.tablet} {
        grid-column: 2/ span 6
    }
`

export const FooterSocialWrapper = styled.footer`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    text-align: center;

    & p {
        text-align: center;
        flex: 0 0 100%;
    }
`

export const FooterSocialIcons = styled.footer`
         flex: 0 0 100%;
         margin-bottom: 2rem;
            & img {
                height: 22px;
                padding: 0 1rem;
                transition: filter 0.3s ease
            }

            & a svg {
                    fill: #EE4938;
            }
           
            & img:hover, img:focus {
          
                filter: brightness(50%)
            }
`
