import React, { useState } from 'react';
import { graphql } from 'gatsby';
import { Translation } from 'react-i18next';
import { withI18next } from '@wapps/gatsby-plugin-i18next';
import producers from '../data/producers';
import { Link } from '@wapps/gatsby-plugin-i18next';
import Layout from "../components/layout/layout";
import { titlePlaceOfBirth } from '../data/constants';
import { placeholderForInputSearch, searchProducers, showMore, yearsOfLife } from '../data/constants';
const blockname = 'select-director-page';
const SelectDirectorPage = () => {
  const [value, changeValue] = useState('');
  return (
    <Translation>
      {t => (
        <Layout t={t}>
          <div className="search-form">
            <h1>{t(searchProducers)}</h1>
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
                      <h3 className="mb-0">{t(yearsOfLife)}</h3>
                      <div className="mb-1 text-muted"> {t(item.dates)}</div>
                      <p className="mb-auto">{`${t(titlePlaceOfBirth)}: ${t(item.placeOfBirth)}`}</p>
                      <Link to={`/producer/`} state={{ id: index }} className="btn btn-outline-info">{t(showMore)}</Link>
                    </div>
                    <div className="col-auto c-center">
                      <img src={item.photoUrl} className="" width="200" alt={t(item.name)} />
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </Layout>
      )}
    </Translation>
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
