import React from "react"
import Header from '../../components/header-example/header';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import producers from '../../data/producers';
import GeoWidget from '../../components/geoWidget/geoWidget';
import VideoWidget from '../../components/videoWidget'

class DirectorPage extends React.Component{
    directorDescription = () => {
      const id = this.props.location.state.id;
      const mapPoints = producers[id].mapPoints||[[55.75, 37.57]];
      const videoUrl = producers[id].videoUrl.slice(32,)
      const info = <>
                    <h2>{producers[id].name}</h2>
                    <GeoWidget mapPoints = {mapPoints}/>
                    <VideoWidget videoId = {videoUrl}/>
                  </>
      return info            
    }

    render(){ 
        return (
            <Translation>
            {t => (
              <>
            <Header/>
            {this.directorDescription()}
            </>
            )}
        </Translation>
          )
    }

}

export default withI18next()(DirectorPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
