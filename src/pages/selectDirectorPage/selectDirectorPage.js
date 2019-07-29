import React from "react"
import Header from '../../components/header-example/header';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import producers from '../../data/producers';


class SelectDirectorPage extends React.Component{
    directorListFunc(){
        // const director = producers.map((item)=>item.name)
        return  console.log(producers)
    }

    render(){
      {this.directorListFunc()}
        return (
            <Translation>
            {t => (
            <>
            <Header/>
            </>
            )}
        </Translation>
          )
    }

}

export default withI18next()(SelectDirectorPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;