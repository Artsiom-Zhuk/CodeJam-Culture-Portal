import React from 'react';
import { TimelineItem } from 'vertical-timeline-component-for-react';
import PropTypes from 'prop-types';
import './TimeLineItem.scss';

const TimeItem = ({ biography, t }) => {
  const elements = biography.map((item, index) => {
    return (
      <TimelineItem key={index} dateText={item[0]} >
        <h3>{item[0]}</h3>
        <p>{t(item[1])}</p>
      </TimelineItem>
    )
  });

  return (
    <div>
      {elements}
    </div>
  );
};

export default TimeItem

TimeItem.propTypes = {
  t: PropTypes.func.isRequired,
  biography: PropTypes.array
};
