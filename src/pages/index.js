import React from "react"
import { Translation } from 'react-i18next';
import { Link, withI18next } from '@wapps/gatsby-plugin-i18next';
// import { TimeLineFull } from '../components/timeline/timeLine';
import LandingPage from './landingpage/landingPage';

// import Layout from "../components/layout-example/layout"

const IndexPage = () => (
  <Translation>
    {t => (
        <LandingPage/>
    )}
  </Translation>
);

export default withI18next()(IndexPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;

        // {/* <h1>{t('Film directors of Belarus')}</h1>
        // <p>{t('Welcome to your new Gatsby site.')}</p>
        // <p>{t('Now go build something great.')}</p>
        // <Link to="/page-2/">{t('Go to page 2')}</Link>
        // <Link to="/timeline-example/">{t(' Timeline')}</Link>
        // <iframe src='https://yandex.ru/map-widget/v1/?um=constructor%3Aca0787145253f3a3b70dcdfab8a861be037dc6d387c377b30882bd86d3d807b5&amp;source=constructor' width='100%' height='400' frameborder='0'></iframe>
        // <a href="https://www.youtube.com/watch?v=9FZehV2qJTk" data-lity="data-lity">1</a> */}