import { Link } from 'gatsby'
import styled from 'styled-components'
import React from 'react'

export const Wrapper = styled.main`
    grid-column: 4/ span 8;
    padding: ${(props) => `${props.theme.spacings.xLarge} ${props.theme.spacings.xLarge}`};
    z-index: 10;
`
export const TimelineItem = styled.div`

`

export const TimelineItemContent = styled.div `
background-color:  ${(props) => `${props.bgColor}`};
`

export const TimelineTag = styled.span`
    background-color:  ${(props) => `${props.bgColor}`};
 `

export const TimelineTime = styled.time`

`

export const TimelineCircle = styled.span`

`

export const TimelineLink = styled((props) => <Link {...props} />)`

`
