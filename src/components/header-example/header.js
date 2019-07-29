import PropTypes from "prop-types"
import React from "react"

import { Link } from '@wapps/gatsby-plugin-i18next';

import Switcher from './../switcher/switcher';

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/page-2/">{('ON THE MAIN')}</Link>
      <Link to="/selectAuthorPage/selectAuthorPage">{('SelectAuthorPage')}</Link>
      <Link to="/authorPage/authorPage">{('AuthorPage')}</Link>
      <h1>
        Film directors
      </h1>
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
