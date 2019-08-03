<<<<<<< HEAD
import PropTypes from "prop-types"
import React, { Component } from "react"
=======
>>>>>>> develop
import { Translation } from 'react-i18next';
import { Link } from '@wapps/gatsby-plugin-i18next';
import Switcher from './../switcher/switcher';
import './header.css'
import Languages from './languages';
import Navigation from './navigation';
import Icon from './icon';
// import Switcher from './../switcher/switcher';
import AdaptiveMenu from './adaptiveMenu';
import { culturalPortal } from '../../pages/constants';

<<<<<<< HEAD
class Header extends Component {
=======
const Header = () => (
  <header>
    <Translation>
      {t => (
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <div className="container">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <Link to="/" className="nav-link" activeClassName="active">{t(home)}</Link>
                </li>
                <li className="nav-item">

                  <Link to="/producers" className="nav-link" activeClassName="active">{t(searchProducers)}</Link>
                  {/* <Link to="/producers" className="nav-link" activeClassName="active">{('Search producers')}</Link> */}
                </li>
              </ul>
              <Switcher />
>>>>>>> develop

  state = {
    currentWidth: window.innerWidth,
  }

  componentDidMount() {
    window.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({
      currentWidth: window.innerWidth,
    })
  }

  render() {
    const isMobile = this.state.currentWidth < 420;
    return (
      <header>
        <Translation>
          {t => (
            <div className='navMainCont'>
              <div className='leftPart'>
                <Icon />
                <h1 className="title">
                  {t(culturalPortal)}
                </h1>
              </div>
              <div className='navBar'>
                <Languages />
                {isMobile ? <AdaptiveMenu /> : <Navigation />}
              </div>
            </div>
          )}
        </Translation>
      </header>
    )
  }

}

export default Header


