import React from "react";
import producers from "../../data/producers";
import { Translation } from 'react-i18next';
import { Link } from '@wapps/gatsby-plugin-i18next';
import "./dayProducer.scss";

function DayProducer() {
  let now = new Date();
  let ID;
  ID = now.getDay() % producers.length;
  return (
    <Translation>
      { t => (
        <div class="card flex-md-row main-card ">
          <img className="dayProducer_link__image" src={producers[ID].photoUrl} alt='ProducerOfTheDay'/>
          <div class="card-body d-flex flex-column align-items-start">
            <h2 class="mb-0">
              {t(producers[ID].name)}
            </h2>
            <div class="mb-1 text-muted">{t(producers[ID].dates)}</div>
            <p class="card-text mb-auto">
              <ul>
              {producers[ID].workList.map(item=>(<li>{item[0]} - {t(item[1])}</li>))}
              </ul>
            </p>
            <Link to={`/producer/`} state={{ id: ID }} className="btn btn-outline-info"> {t('Continue reading')}</Link>
          </div>
        </div>
      )}
    </Translation>
  )
}
export default DayProducer;