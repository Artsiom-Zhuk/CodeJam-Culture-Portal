import React from 'react';
import PropTypes from 'prop-types';

import { WelcomeTitle, DescriptionName, DecriptionMsg} from '../../data/description';

const Description = ({ t }) => (
  <section className="card">
  <div className="card-header text-center">
  <h2 >{t(WelcomeTitle)}</h2>
  </div>
<div className="card-subtitle mb-2 text-muted text-center">
  <h3 >{t(DescriptionName)}</h3>
</div>
  <div className="card-body">
    <div className="">
     {t(DecriptionMsg)}
    </div>
  </div>
  </section>
);

export default Description;

Description.propTypes = {
  t: PropTypes.func.isRequired

};
