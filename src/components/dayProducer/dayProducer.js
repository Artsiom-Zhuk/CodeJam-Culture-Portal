import React from "react";
import producers from "../../data/producers";
import { Link } from '@wapps/gatsby-plugin-i18next';
import { continueReading } from '../../data/constants';
import PropTypes from 'prop-types';
import "./dayProducer.scss";

function DayProducer({ t }) {
  let now = new Date();
  let ID;
  ID = now.getDay() % producers.length;
  return (
    <section className="card">




      <div className="card-header bg-transparent">
        <h2>{t('Режиссёр дня')}</h2>
      </div>
      <div className="row card-body">
        <div className="col-md-6 col-sm-12 text-center">
          <img className="dayProducer_link__image" src={producers[ID].photoUrl} alt='ProducerOfTheDay' />
        </div>
        <div className="col-md-6 col-sm-12">
          <h2 className="mb-0">
            {t(producers[ID].name)}
          </h2>
          <div className="mb-1 text-muted">{t(producers[ID].dates)}</div>
          <p className="card-text mb-auto">
            <ul>
              {producers[ID].workList.map((item, i) => (<li key={i}>{item[0]} - {t(item[1])}</li>))}
            </ul>
          </p>
          <Link to={`/producer/`} state={{ id: ID }} className="btn btn-outline-info"> {t(continueReading)}</Link>
        </div>
      </div>
    </section>
  )
}
export default DayProducer;

DayProducer.propTypes = {
  t: PropTypes.func.isRequired,
  data: PropTypes.array,
  image: PropTypes.string,
};
