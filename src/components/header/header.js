import { Translation } from 'react-i18next';
import React from "react";
import { Link } from '@wapps/gatsby-plugin-i18next';
import Switcher from './../switcher/switcher';
import { home, searchProducers } from '../../data/constants-page-data';
import './header.css';

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

            </div>
          </div>
        </nav>

      )}
    </Translation>
  </header>
)

export default Header
