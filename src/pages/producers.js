import React from "react"
import Header from '../components/header-example/header';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import producers from '../data/producers';
import { Link } from '@wapps/gatsby-plugin-i18next';
// import { Link } from 'react-router-dom';


class SelectDirectorPage extends React.Component{
  
    directorListFunc = () => {
        const directorInfo = producers.map((item, index)=>{
          return (<li key={index}>
                    <Translation>
                      {t => (
                         <>
                        <h2>{t(item.name)}</h2>
                        <img src={item.photoUrl} width="189" height="255" alt='directroPhoto'/>
                        <Link to={`/producer/`} state={{ id: index }}>{('Director Page')}</Link>
                        </>
                      )}
                    </Translation>
                  </li>)
          })
          return <ul>{directorInfo}</ul>
        }; 
    

    render(){
      return (
        <>
        <Header/>
        {this.directorListFunc()}
        </>
      )
    };

}

export default withI18next()(SelectDirectorPage);

export const query = graphql`
  query($lng: String!) {
    locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
      ...LocaleFragment
    }
  }
`;