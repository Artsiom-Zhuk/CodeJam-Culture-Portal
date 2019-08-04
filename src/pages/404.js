import React from "react"
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import Layout from "../components/layout/layout"
import { graphql } from 'gatsby';

const NotFoundPage = () => (
  <Translation>
    {t => (
      <Layout>
        <h1>{t('NOT FOUND')}</h1>
        <p>{t('You just hit a route that doesn&#39;t exist... the sadness.')}</p>
      </Layout>
    )}
  </Translation>
)

export default withI18next()(NotFoundPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;
