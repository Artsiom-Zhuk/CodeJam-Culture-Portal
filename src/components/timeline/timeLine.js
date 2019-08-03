import React from 'react';
import { Timeline } from 'vertical-timeline-component-for-react';
import TimeItem from './timeline-item/TimeLineItem';
import PropTypes from 'prop-types';

export const TimeLineFull = ({ producer, t }) => {
  const biographyData = producer.biography;
  return (
    <Timeline>
      <TimeItem biography={biographyData} t={t} />
    </Timeline>
  );
};

TimeLineFull.propTypes = {
  t: PropTypes.func.isRequired,
  producer: PropTypes.object
};
