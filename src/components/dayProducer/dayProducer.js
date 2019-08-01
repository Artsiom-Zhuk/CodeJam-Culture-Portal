import React from "react"
import producersEn from "../../data/producers"
import "./dayProducer.scss"

function DayProducer() {
  let now = new Date()
  let ID
  ID = now.getDay() % producersEn.length

  return (
    <div class="dayProducer">
      <a class="dayProducer_link" href='#'><img class="dayProducer_link__image" src={producersEn[ID].photoUrl}/></a>
      <div class="dayProducer_bio">
        <p> {producersEn[ID].name}</p>
        <p>{producersEn[ID].dates}</p>
      </div>
    </div>
  )
}

export default DayProducer