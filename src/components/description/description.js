import React from 'react';
import PropTypes from 'prop-types';

import { WelcomeTitle, DescriptionName, DecriptionMsg } from '../../data/description';

const Description = ({ t }) => (
  <section className="card">
    <div className="card-header">
      <h2 >{t(WelcomeTitle)}</h2>
    </div>
    <div className="card-body">
      <h3 >{t(DescriptionName)}</h3>
      {t(DecriptionMsg)}
    </div>
  </section>
);

export default Description;

Description.propTypes = {
  t: PropTypes.func.isRequired

};
