import React from "react"
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import DayProducer from '../components/dayProducer/dayProducer';
import Layout from "../components/layout/layout"
import { Developers } from '../components/developers'


const IndexPage = () => (
  <Translation>
    {t => (
        <Layout>
          <DayProducer/>
          <Developers/>
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
