import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './404.css'

const NotFoundPage = () => (
  <Layout>
    <div className="error">
      <SEO title="404: Not found" />
      <h1>Ooops...</h1>
      <p>Something went wrong !</p>
      </div>
  </Layout>
)

export default NotFoundPage
