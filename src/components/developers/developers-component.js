import React from 'react';
import PropTypes from 'prop-types';

import "./developers.scss"
import { DeveloperItem } from "./developer-item";
import { developersList } from '../../data/developers-data';
import { developers } from '../../data/constants';

export const Developers = ({ t }) => (
  <section className="developers">
    <div className="card">
      <div className="card-header">
        <h2>{t(developers)}</h2>
      </div>
      <div className="card-body">
        <div className="row justify-content-center">
          {developersList.map((item, i) => (
            <div key={i} className=" col-md-4">
              <DeveloperItem
                name={item.name}
                image={item.photoUrl}
                github={item.github}
                githubName={item.githubName}
              />
            </div>))}
        </div>
      </div>
    </div>
  </section>
);

Developers.propTypes = {
  t: PropTypes.func.isRequired,
};
