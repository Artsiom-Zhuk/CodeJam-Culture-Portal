import React from 'react';
import PropTypes from 'prop-types';

export const Description = ({ t }) => (
  <section className="description">
        <h2>{t(WelcomeTitle)}</h2>
      <div className="card-body">
        <div className="">
         {t(DecriptionMsg)}
            </div>
        </div>

  </section>
);

Developers.propTypes = {
  t: PropTypes.func.isRequired,
};
