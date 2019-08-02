import React from "react";
import producers from "../../data/producers";
import "./dayProducer.scss";

function DayProducer() {
  let now = new Date();
  let ID;
  ID = now.getDay() % producers.length;

  return (
    <div className="dayProducer">
      <a className="dayProducer_link" href='#'><img className="dayProducer_link__image" src={producers[ID].photoUrl} alt='ProducerOfTheDay'/></a>
      <div className="dayProducer_bio">
        <p> {producers[ID].name}</p>
        <p>{producers[ID].dates}</p>
      </div>
    </div>
  )
}

export default DayProducer;