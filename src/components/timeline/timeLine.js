import React from 'react';
import { Timeline }  from 'vertical-timeline-component-for-react';
import TimeItem from './timeline-item/TimeLineItem';

export const TimeLineFull = ( {producer} ) => {
  const biographyData = producer.biography;
  return (
    <Timeline>
      <TimeItem biography={ biographyData }/>
    </Timeline>
  );
};