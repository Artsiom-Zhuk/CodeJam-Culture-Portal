import React from "react";
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';

import PhotosGallery from '../components/photo-gallery/index';
import producers from '../data/producers';

class Gallery extends React.Component {
  render() {
    return (
      <Translation>
        { t => <PhotosGallery producer={ producers[0] }/> }
      </Translation>
    )
  }
}

export default withI18next()(Gallery);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;