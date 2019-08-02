import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Location } from '@reach/router';
import { Link } from "gatsby";
import './switcher.scss';

class Switcher extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    const { location } = this.props;
    const url = location.pathname.split('/').slice(2).join('/');
    const id=((location.state !== null)&&(location.state.id !== null)) ? location.state.id: 0;

    return (
      <ul className="navbar-nav">
        <li><Link to={"/ru/".concat(url)} state={{ id: id }} className="nav-link" activeClassName="active-lang">RU </Link></li>
        <li><Link to={"/by/".concat(url)} state={{ id: id }} className="nav-link" activeClassName="active-lang">BY </Link></li>
        <li><Link to={"/en/".concat(url)} state={{ id: id }} className="nav-link" activeClassName="active-lang">EN </Link></li>
      </ul>
    );
  }
}

export default props => (
  <Location>
    {locationProps => <Switcher {...locationProps} {...props} />}
  </Location>
);