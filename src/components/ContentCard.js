import React from 'react';
import { Link } from 'gatsby';
import {
    CardContentWrapper,
    CardWrapper,
    P,
    H2,
    ArticleWrapper,
    CardImageWrapper,
    DateReadTimeWrapper,
    ClockWrapper
} from '../elements';
import { Thumbnail } from './Thumbnail';
import Clock from '../images/clock.svg';

export const ContentCard = ({ date, title, excerpt, slug, readtime }) => {
    const imgName = `${slug}.png`;
    return (
        <>
            <CardWrapper>
                <ArticleWrapper>
                    <CardImageWrapper>
                        <Thumbnail imgName={imgName} />
                    </CardImageWrapper>
                    <CardContentWrapper>
                        <DateReadTimeWrapper>
                            <P
                                size="xsmall"
                                textAlign="center"
                                margin="0 0 0.5rem 0"
                                color="dark3"
                            >
                                {date}
                            </P>
                            <ClockWrapper>
                                <Clock />
                                <P
                                    size="xsmall"
                                    textAlign="center"
                                    margin="0 0 0.5rem 0"
                                    color="dark3"
                                >
                                    {` ${readtime} read`}
                                </P>
                            </ClockWrapper>
                        </DateReadTimeWrapper>
                        <H2
                            weight="bold"
                            color="dark2"
                            textAlign="center"
                            margin="0 0 1rem 0"
                        >
                            {title}
                        </H2>
                        <P
                            size="medium"
                            textAlign="center"
                            margin="0 0 1.5rem 0"
                            color="dark2"
                        >
                            {excerpt}
                            {'...  '}
                            <Link to={slug}>read more</Link>
                        </P>
                    </CardContentWrapper>
                </ArticleWrapper>
            </CardWrapper>
        </>
    );
};
