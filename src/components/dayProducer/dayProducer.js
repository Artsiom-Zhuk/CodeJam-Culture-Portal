import React from "react";
import producers from "../../data/producers";
import { Link } from '@wapps/gatsby-plugin-i18next';
import "./dayProducer.scss";

function DayProducer() {
  let now = new Date();
  let ID;
  ID = now.getDay() % producers.length;

  return (
    <div className="dayProducer">
      <Link to={`/producer/`} state={{ id: ID }}><img className="dayProducer_link__image" src={producers[ID].photoUrl} alt='ProducerOfTheDay'/></Link>
      <div className="dayProducer_bio">
        <p> {producers[ID].name}</p>
        <p>{producers[ID].dates}</p>
      </div>
    </div>
  )
}

export default DayProducer;