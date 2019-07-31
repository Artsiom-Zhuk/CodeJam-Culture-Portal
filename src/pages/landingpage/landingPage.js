import React from "react"
// import { Translation } from 'react-i18next';
// import { Link, withI18next } from '@wapps/gatsby-plugin-i18next';
import Header from "../../components/header-example/header"
import DayProducer from "../../components/dayProducer/dayProducer"


class LandingPage extends React.Component {
  render() {
    return (<>
        <Header/>
        <DayProducer/>
      </>
    )
  }
}


export default LandingPage