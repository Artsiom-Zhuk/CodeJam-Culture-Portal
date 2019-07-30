import React from "react"
import Header from '../../components/header-example/header';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import producers from '../../data/producers';

class DirectorPage extends React.Component{
    directorDescription = () => {
      const id = this.props.location.state.id;
      const info = <>
                    <h2>{producers[id].name}</h2>
                  </>
      return info            
    }

    render(){ 
      console.log(this.props.location.state.id)
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
