import React from 'react'
import { CardContentWrapper, CardWrapper, P, H2, ArticleWrapper, CardImageWrapper, DateReadTimeWrapper } from '../elements'
import { Link } from 'gatsby'
import { Button, Thumbnail } from '../components'

export const ContentCard = ({ date, title, excerpt, slug }) => {
    const imgName = `${slug}.png`
    return (
        <>
            <CardWrapper>
                <ArticleWrapper>
                    <CardImageWrapper >
                        <Thumbnail imgName={imgName} />
                    </CardImageWrapper>
                    <CardContentWrapper>
                        <DateReadTimeWrapper >
                            <P
                                size='xsmall'
                                textAlign='center'
                                margin='0 0 0.5rem 0'
                                color='dark3'>{date}
                            </P>
                            <P
                                size='xsmall'
                                textAlign='center'
                                margin='0 0 0.5rem 0'
                                color='dark3'> 3min read
                            </P>
                        </DateReadTimeWrapper >
                        <H2 weight='bold' color='dark2' textAlign='center' margin='0 0 1rem 0'>
                            {title}
                        </H2>
                        <P
                            size='medium'
                            textAlign='center'
                            margin='0 0 1.5rem 0'
                            color='dark1'>
                            {excerpt}{'...  '}
                            <Link to={slug}>read more</Link>
                        </P>
                        {/* <Button to={slug}>
                                Read More
                        </Button> */}
                    </CardContentWrapper>

                </ArticleWrapper>
            </CardWrapper>
        </>
    )
}

