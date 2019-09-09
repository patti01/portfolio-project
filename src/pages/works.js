import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import staticdata from '../../staticdata.json'
import Cell from '../components/Cell'

const WorksPage = () => (
    <Layout>
      <SEO title="Works" />
      <div className="stop">
        <h2>Works</h2>
        {staticdata.cells.map(cell => (
            <Cell 
                image={cell.image}
                title={cell.title}
                 />
        ))}
        <p>Welcome to page 2</p>
        <Link to="/">Go back to the homepage</Link>
      </div>      
    </Layout>
  )
  
  export default WorksPage