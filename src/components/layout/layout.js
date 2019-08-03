import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "../header/header"
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children, t }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} t={t} />
      <main>
        <div className="container">
          {children}
        </div>
      </main>
      <footer className="footer">
        <div className="container text-center">
          <span className="text-muted">The Rolling Scopes School, 2019</span>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  t: PropTypes.func
}

export default Layout
