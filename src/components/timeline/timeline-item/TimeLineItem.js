import React from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';
import './TimeLineItem.scss';

export const TimeItem = ({ biography }) => {
  
  const elements = biography.map((item, index) => {
    return (
      <TimelineItem
      key={ index }
      dateText={ item[0] }
    >
      <h3>{ item[0] }</h3>
      <p>{ item[1] }</p>
    </TimelineItem>
    );
  });

  return (
    <div>
      { elements }
    </div>
  );
};
