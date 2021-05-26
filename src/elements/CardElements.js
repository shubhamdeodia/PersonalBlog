import styled from 'styled-components';

export const ArticleWrapper = styled.div`
    display: flex;

    @media ${(props) => props.theme.breakpoints.tablet} {
        width: 100%;
        flex-direction: column;
    }

    @media ${(props) => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr;
    }
`;

export const CardImageWrapper = styled.div`
    min-width: 320px;
    overflow: hidden;
    @media ${(props) => props.theme.breakpoints.tablet} {
        max-height: 210px;
        min-width: 100%;
    }
`;

export const CardContentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px;
    overflow: hidden;
`;

export const DateReadTimeWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const ClockWrapper = styled.div`
    width: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media ${(props) => props.theme.breakpoints.tablet} {
        width: 90px;
    }
    & svg {
        width: 20px;
        height: 20px;
        fill: ${(props) => props.theme.colors.dark3};
        margin-bottom: 7px;
    }
`;

export const CardWrapper = styled.div`
    margin-top: 2rem;
    border-radius: 1rem;
    display: flex;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    position: relative;
    min-height: 320px;
    overflow: hidden;
    transition: box-shadow 0.3s ease-in-out;

    &:hover {
        box-shadow: 0 0 30px rgba(0, 0, 0, 0.2);
    }
`;
