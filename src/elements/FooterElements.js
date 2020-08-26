import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  grid-column: 2 / span 12;
  min-height: 11.25rem;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media ${(props) => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }
`

export const FooterSocialWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  text-align: center;

  p {
    text-align: center;
    flex: 0 0 100%;
  }
`

export const FooterSocialIcons = styled.div`
  flex: 0 0 100%;
  margin-bottom: 2rem;

  svg {
    height: 22px;
    padding: 0 1rem;
    transition: filter 0.3s ease;
    fill: #A1A2A5;
  }

  /* svg path {
    fill: #A1A2A5;
  } */

  svg:hover {
    fill:${(props) => props.theme.colors.main1};
  }

  svg:hover,
  svg:focus {
    fill:${(props) => props.theme.colors.main1};
  }

  svg:hover ,
  svg:focus path {
    fill:${(props) => props.theme.colors.main1};
  }
`
