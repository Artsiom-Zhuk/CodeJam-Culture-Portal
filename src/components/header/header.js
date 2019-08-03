import PropTypes from "prop-types"
import React, { Component } from "react"
import { Translation } from 'react-i18next';
import { Link } from '@wapps/gatsby-plugin-i18next';
import Switcher from './../switcher/switcher';
import './header.css';
import Languages from './languages';
import Navigation from './navigation';
import Icon from './icon';
// import Switcher from './../switcher/switcher';
import AdaptiveMenu from './adaptiveMenu';
import { culturalPortal } from '../../pages/constants';

class Header extends Component {

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


