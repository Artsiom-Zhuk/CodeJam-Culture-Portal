import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import producers from '../data/producers';
import { Link } from '@wapps/gatsby-plugin-i18next';
import Layout from "../components/layout/layout";
import { titlePlaceOfBirth } from './constants';
import { placeholderForInputSearch } from './constants';
import './producers.scss';
const blockname = 'select-director-page';
const SelectDirectorPage = () => {
  const [value, changeValue] = useState('');
  return (
    <Layout>
      <Translation>
          {t => (
            <>
              <div className="search-form">
                <h1>Search producers</h1>
                <input type="text" 
                  className="form-control" 
                  placeholder={t(placeholderForInputSearch)}
                  extraClass={`${blockname}__input-field`}
                  onChange={(e) => changeValue(e.target.value)}
                />
              </div>
              <div className="row">
              {producers.map((item, index) => {
                return (
                  ((t(item.name)).toLowerCase().includes(value.toLocaleLowerCase()) ||
                    (t(item.placeOfBirth)).toLowerCase().includes(value.toLocaleLowerCase())) &&
                    <div className="col-sm-6">
                      <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative card">
                        <div className="col p-4 d-flex flex-column position-static">
                          <h2 className="d-inline-block mb-2 text-info">{t(item.name)}</h2>
                          <h3 className="mb-0">Years of life</h3>
                          <div className="mb-1 text-muted"> {t(item.dates)}</div>
                          <p className="mb-auto">{`${t(titlePlaceOfBirth)}: ${t(item.placeOfBirth)}`}</p>
                          <Link to={`/producer/`} state={{ id: index }} className="btn btn-outline-info">Show more</Link>
                        </div>
                        <div class="col-auto c-center">
                          <img src={item.photoUrl} class="" width="200" alt={t(item.name)}/>
                        </div>
                      </div>
                    </div>
                  )
              })}
              </div>
            </>
          )}
        </Translation>
    </Layout>
  )
};

export default withI18next()(SelectDirectorPage);

export const query = graphql`
query($lng: String!) {
locales: allLocale(filter: { lng: { eq: $lng }, ns: { eq: "messages" } }) {
...LocaleFragment
}
}
`;