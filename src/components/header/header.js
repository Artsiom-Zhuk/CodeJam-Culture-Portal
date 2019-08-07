import PropTypes from "prop-types"
import React, { Component } from "react"
import Languages from './languages';
import Navigation from './navigation';
import Icon from './icon';
import AdaptiveMenu from './adaptiveMenu';
import { culturalPortal } from '../../data/constants';
import './header.css';

const windowGlobal = typeof window !== 'undefined' && window;

class Header extends Component {

  state = {
     currentWidth: windowGlobal.innerWidth,
  }

  componentDidMount() {
    windowGlobal.addEventListener('resize', this.resize);
  }

  componentWillUnmount() {
    windowGlobal.removeEventListener('resize', this.resize);
  }

  resize = () => {
    this.setState({
      currentWidth: windowGlobal.innerWidth,
    })
  }

  render() {
    const isMobile = this.state.currentWidth < 420;
    return (
      <header>
        <div className='navMainCont'>
          <div className='leftPart'>
            <Icon />
            <h1 className="title">
              {this.props.t(culturalPortal)}
            </h1>
          </div>
          <div className='navBar'>
            <Languages t={this.props.t} />
            {isMobile ? <AdaptiveMenu /> : <Navigation />}
          </div>
        </div>
      </header>
    )
  }
}

export default Header

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

