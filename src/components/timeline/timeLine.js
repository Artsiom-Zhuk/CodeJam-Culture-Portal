import React from 'react';
import { Timeline }  from 'vertical-timeline-component-for-react';
import { TimeItem } from './timeline-item/TimeLineItem';
import { producers } from '../../data/producers.ru';
import '../timeline/timeline-item/TimeLineItem.scss';


export const TimeLineFull = ( {id} ) => {

  const biographyData = producers[id].biography;

  return (
  <Timeline>
    <TimeItem biography={ biographyData }/>
  </Timeline>
  );
};