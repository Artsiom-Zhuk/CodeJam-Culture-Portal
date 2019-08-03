import React from "react"
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import Layout from "../components/layout/layout"
import { graphql } from 'gatsby';

const NotFoundPage = () => (
  <Translation>
    {t => (
      <Layout t={t}>
        <h1>{t('НЕ НАЙДЕНО')}</h1>
        <p>{t('Вы просто попали на маршрут, который не существует ... грусть.')}</p>
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
