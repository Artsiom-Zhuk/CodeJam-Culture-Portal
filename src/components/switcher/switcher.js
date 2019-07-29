import React from 'react';
import { Language } from '@wapps/gatsby-plugin-i18next';

import './switcher.scss'

const Switcher = ({ changeLng, lng, availableLngs }) => (
  <ul className="language">
    {availableLngs.map(value => (
      <li key={value}>
        <button className = {(value === lng) ? 'active-btn-lang': 'btn-lang'}
          onClick={() => changeLng(value)}
        >
          {value}
        </button>
      </li>
    ))}
  </ul>
);

export default props => (
  <Language>{lngProps => <Switcher {...props} {...lngProps} />}</Language>
);
