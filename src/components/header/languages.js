import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Location } from '@reach/router';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import { Translation } from 'react-i18next';
import { Link } from "gatsby";
import { by, ru, eng } from '../../pages/constants';
// import './switcher.scss';

class Languages extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired
  }

  render() {
    const { location } = this.props;
    const url = location.pathname.split('/').slice(2).join('/');
    const id = ((location.state !== null) && (location.state.id !== null)) ? location.state.id : 0;

    return (
      <Translation>
        {t => (
          <Breadcrumbs aria-label="breadcrumb">
            <li><Link to={"/ru/".concat(url)} state={{ id: id }} activeClassName="active-language">{t(by)} </Link></li>
            <li><Link to={"/by/".concat(url)} state={{ id: id }} activeClassName="active-language">{t(ru)} </Link></li>
            <li><Link to={"/en/".concat(url)} state={{ id: id }} activeClassName="active-language">{t(eng)} </Link></li>
          </Breadcrumbs>
        )}
      </Translation>
    );
  }
}

export default props => (
  <Location>
    {locationProps => <Languages {...locationProps} {...props} />}
  </Location>
);