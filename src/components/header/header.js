import PropTypes from "prop-types"
import React from "react"
import { Link } from '@wapps/gatsby-plugin-i18next';
import Switcher from './../switcher/switcher';
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <div className="container">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

  <div class="collapse navbar-collapse" id="navbarsExampleDefault">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item ">
        <Link to="/" className="nav-link" activeClassName="active">{('Home')}</Link>
      </li>
      <li class="nav-item">
        <Link to="/producers" className="nav-link" activeClassName="active">{('Search producers')}</Link>
      </li>
    </ul>
    <Switcher />
    
  </div>
  </div>
</nav>
   

    
  </header>
)


export default Header
