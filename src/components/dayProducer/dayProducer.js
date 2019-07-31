import React from "react"
import producers from "../../data/producers"
import "./dayProducer.scss"

function DayProducer() {
  let now = new Date()
  let ID
  ID = now.getDay() % producers.length

  return (
    <div class="dayProducer">
      <a class="dayProducer_link" href='#'><img class="dayProducer_link__image" src={producers[ID].photoUrl}/></a>
      <div class="dayProducer_bio">
        <p> {producers[ID].name}</p>
        <p>Date:{producers[ID].dates}</p>
        <p>   {producers[ID].workList}</p>
      </div>
    </div>
  )
}

export default DayProducer