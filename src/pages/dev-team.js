import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout-example/layout";
import { Developers } from '../components/developers'

const IndexPage = () => (
  <Layout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
    </div>
    <Developers />
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
