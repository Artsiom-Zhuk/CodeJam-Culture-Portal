import PropTypes from "prop-types"
import React from "react"
import { Link } from '@wapps/gatsby-plugin-i18next';
import Switcher from './../switcher/switcher';
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    <div className='navMainCont'>
      <h1>
      RSS-codejam-5
      </h1>
      <div className='navBar'>
      <Link to="/">{('On The Main')}</Link>
      <Link to="/producers">{('All producers')}</Link>
      </div>
    </div>
    <Switcher />
  </header>
)


export default Header
