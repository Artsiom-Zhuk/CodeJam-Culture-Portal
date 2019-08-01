import React from "react"
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import producers from '../data/producers';
import Layout from "../components/layout/layout"
import { TimeLineFull } from '../components/timeline/timeLine';
import PhotosGallery from '../components/photo-gallery';
import VideoWidget from '../components/videoWidget';
import GeoWidget from '../components/geoWidget/geoWidget';

const ProducerPage = (props) => {
  const id= (props.location.state.id ? props.location.state.id: 0);
  const producer = producers[id];
  const mapPoints = producers[id].mapPoints||[[55.75, 37.57]];
  const videoUrl = producers[id].videoUrl.slice(32,)
  return (
    <Translation>
      {t => (
      <Layout>
        <h2>{t(producer.name)}</h2>
        <GeoWidget mapPoints = {mapPoints}/>
        <VideoWidget videoId = {videoUrl}/>
        <TimeLineFull producer = { producer }/>
        <PhotosGallery producer = { producer }/>
      </Layout>
       )}
    </Translation>
  );
}


export default withI18next()(ProducerPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
