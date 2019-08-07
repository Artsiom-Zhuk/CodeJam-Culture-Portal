import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from "gatsby";
import { by, ru, eng } from '../../data/constants';
import { Location } from '@reach/router';

class Language extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    const { location, t } = this.props;
    const url = location.pathname.split('/').slice(2).join('/');
    const id = ((location.state) && (location.state.id)) ? location.state.id : 0;

    return (
      <ul className="language">
        <li><Link to={"/ru/".concat(url)} state={{ id: id }} activeClassName="active-language">{t(ru)} </Link></li>
        <li><Link to={"/by/".concat(url)} state={{ id: id }} activeClassName="active-language">{t(by)} </Link></li>
        <li><Link to={"/en/".concat(url)} state={{ id: id }} activeClassName="active-language">{t(eng)} </Link></li>
      </ul>
    );
  }
}

export default function Wrapper(props) {
  return (
    <Location>
      {locationProps => <Language {...locationProps} {...props} />}
    </Location>
  )
}

Language.propTypes = {
  t: PropTypes.func,
};
