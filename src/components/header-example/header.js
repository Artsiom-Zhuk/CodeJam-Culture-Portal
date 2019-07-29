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
      <Link to="/page-2/">{('ON THE MAIN')}</Link>
      <Link to="/selectAuthorPage/selectAuthorPage">{('SelectAuthorPage')}</Link>
      <Link to="/authorPage/authorPage">{('AuthorPage')}</Link>
      </div>
    </div>
    <Switcher />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
