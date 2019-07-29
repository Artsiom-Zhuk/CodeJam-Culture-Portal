import React from "react"
import { TimeLineFull } from '../components/timeline/timeLine';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { Link, withI18next } from '@wapps/gatsby-plugin-i18next';

import Layout from "../components/layout-example/layout"

const timeLinePage = () => (
  <Translation>
    {t => (
      <Layout>
        <h1>{t('Hi from the timeline page')}</h1>
        <Link to="/">{t('Go back to the homepage')}</Link>
        <TimeLineFull id={ 0 }/>
      </Layout>
    )}
  </Translation>
);

export default withI18next()(timeLinePage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;

