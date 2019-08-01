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
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { maxHeight } from '@material-ui/system';

const ProducerPage = (props) => {
  const id= (props.location.state.id ? props.location.state.id: 0);
  const producer = producers[id];
  const mapPoints = producers[id].mapPoints||[[55.75, 37.57]];
  const videoUrl = producers[id].videoUrl.slice(32,);
  const photoUrl = producers[id].photoUrl;
  return (
    <Translation>
      {t => (
      <Layout>
        <Container maxWidth='sm'>
          <img 
            src={photoUrl}
            style={{
              display: 'block',
              margin: '0 auto',
              width: '80%'
            }}
          ></img>
        </Container>
        
        <Typography gutterBottom variant="h4" align='center' style={{marginTop: '1%'}}>{t(producer.name)}</Typography>
        <Typography gutterBottom variant="subtitle1" align='center'>{t(producer.dates)}</Typography>

        <Typography gutterBottom variant="h4" align='center' style={{marginTop: '2%', marginBottom: '0'}}>{t('Биография')}</Typography>
        <TimeLineFull producer = { producer }/>

        <Container maxWidth='md'>
          <Typography gutterBottom variant="h4" align='center' style={{margin: '2%'}}>{'YouTube'}</Typography>
          <VideoWidget videoId = {videoUrl}/>
          <Typography gutterBottom variant="h4" align='center' style={{marginTop: '5%'}}>{t('Галерея')}</Typography>
          <PhotosGallery producer = { producer }/>
          <Typography gutterBottom variant="h4" align='center' style={{marginTop: '5%'}}>{t('Карта')}</Typography>
          <GeoWidget mapPoints = {mapPoints}/>
        </Container>

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
