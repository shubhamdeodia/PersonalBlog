/* eslint-disable react/jsx-key */
import React from 'react'
import {
    TimelineItemContent,
    TimelineItem,
    TimelineTag,
    TimelineLink,
    TimelineTime,
    TimelineCircle
} from '../elements'
import { timelineData } from '../timeline-data'

const TimelineItems = ({ timelineData }) => {
    return (
        <TimelineItem>
            <TimelineItemContent>
                <TimelineTag bgColor={timelineData.category.color}>
                    {timelineData.category.tag}
                </TimelineTag>
                <TimelineTime>{timelineData.time}</TimelineTime>
                {timelineData.link && <TimelineLink to={timelineData.link.url} rel='noopener noreferrer' > {timelineData.link.text}</TimelineLink> }
                <TimelineCircle />
            </TimelineItemContent>
        </TimelineItem>
    )
}

const Timeline = () => {
    return timelineData.map((data) => <TimelineItems timelineData={data} />)
}

export { TimelineItems, Timeline }
