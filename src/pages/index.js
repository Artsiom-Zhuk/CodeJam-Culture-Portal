import React from "react"
import { Translation } from 'react-i18next';
import { Link, withI18next } from '@wapps/gatsby-plugin-i18next';
// import { TimeLineFull } from '../components/timeline/timeLine';

import Layout from "../components/layout-example/layout";

const IndexPage = () => (
  <Translation>
    {t => (
      <Layout>
        <h1>{t('Film directors of Belarus')}</h1>
        <p>{t('Welcome to your new Gatsby site.')}</p>
        <p>{t('Now go build something great.')}</p>
        <Link to="/page-2/">{t('Go to page 2')}</Link>
        <Link to="/timeline-example/">{t(' Timeline')}</Link>
      </Layout>
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
