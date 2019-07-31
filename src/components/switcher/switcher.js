import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Location } from '@reach/router';
import { Link } from "gatsby";
import './switcher.scss';

class SomeComponent extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    const { location } = this.props;
    const url = location.pathname.split('/').slice(2).join('/');
    const id= location.state.id ? location.state.id: 0;
    return (
      <ul className="language">
        <li><Link to={"/ru/".concat(url)} state={{ id: id }} activeClassName="active">RU </Link></li>
        <li><Link to={"/by/".concat(url)} state={{ id: id }} activeClassName="active">BY </Link></li>
        <li><Link to={"/en/".concat(url)} state={{ id: id }} activeClassName="active">EN </Link></li>
      </ul>
    );
  }
}

export default props => (
  <Location>
    {locationProps => <SomeComponent {...locationProps} {...props} />}
  </Location>
);