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
        <div className="dayProducer">
          <Link to={`/producer/`} state={{ id: ID }}><img className="dayProducer_link__image" src={producers[ID].photoUrl} alt='ProducerOfTheDay'/></Link>
          <div className="dayProducer_bio">
            <p>{t(producers[ID].name)}</p>
            <p>{t(producers[ID].dates)}</p>
          </div>
        </div>
      )}
    </Translation>
  )
}

export default DayProducer;