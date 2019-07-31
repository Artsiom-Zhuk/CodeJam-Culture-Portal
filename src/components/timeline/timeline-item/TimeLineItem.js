import React from 'react';
import { TimelineItem }  from 'vertical-timeline-component-for-react';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import './TimeLineItem.scss';

const TimeItem = ({ biography }) => {
  
  const elements = biography.map((item, index) => {
    return (
      <Translation>
      {t => (
      <TimelineItem
      key={ index }
      dateText={ item[0] }
    >
      <h3>{item[0] }</h3>
      <p>{ t(item[1]) }</p>
    </TimelineItem>
     )}
     </Translation>
    )
    
  });

  return (
    <div>
      { elements }
    </div>
  );
};

export default TimeItem

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;