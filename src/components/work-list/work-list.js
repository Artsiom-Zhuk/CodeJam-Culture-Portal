import React from 'react';
import PropTypes from 'prop-types';

const Worklist = ({ producer, t }) => (
  <div className="card-text col-md-6 mx-auto">
    <ul>
      {producer.workList.map((item, i) =>
        (<li key={i}>{item[0]} - {t(item[1])}</li>))
      }
    </ul>
  </div>)

export default Worklist;

Worklist.propTypes = {
  t: PropTypes.func.isRequired,
  producer: PropTypes.object
};
