import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import './index.css'


const IndexPage = () => (
  <Layout>
    <SEO title="Patricia Falandysz | Creative Developer" />
    <div className="Hero">
      <img src={require('../images/alu3.png')} id="foil" alt="aluminium"/>
      <div className="HeroGroup">
        <h1>Hello there</h1>
        <p>I'm Patricia.</p>
        <p>I am a creative developer based in Paris.</p>
        <p>Passionate by art and design, I worked a couple of years in the art market.</p>
        <p>and decided to use my experience, join with my interest on coding, to develop creative and innovative websites.
          <br />Hit me up for future projects !
        </p>
        <Link to="/page-2/">Go to page 2</Link>
      </div>
      <svg width="100%" height="1086" viewBox="0 0 100 1086" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path stroke="#E50000" fill="#E50000">
          <animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="3s" 
          values="M144.092 558.5C-15.9085 348.1 -9.90846 159.167 13.0915 91L748.091 1C793.591 48.6667 895.991 220.3 941.591 525.5C987.191 830.7 806.925 1025.33 711.091 1084.5C588.758 996.833 304.092 768.9 144.092 558.5Z;
          M154.867,562.068C72.879,452.846,11.214,325.882,8.83,186.926c-0.464-27.035,5.931-64.587,30.147-81.856c42.175-30.071,101.483-27.795,150.773-32.095c63.581-5.547,127.133-14.218,190.477-22.018C492.783,37.096,605.006,19.181,717.532,5.871c36.149-4.276,60.494,6.899,80.661,37.377c48.046,72.612,56.719,164.967,80.049,248.252c24.85,88.713,48.4,180.228,58,272c15.354,146.78-2.591,283.039-88.014,403.697c-27.425,38.737-49.496,64.112-85.986,94.303c-39.303,32.518-83.749-7.802-112.572-28.975;
          M224.957,647.146c-56.493-63.543-100.552-136.361-142.26-210.128C48.96,377.349,15.532,310.078,11.09,240.472C1.02,82.694,195.884,57.73,312.751,41.356c91.293-12.791,184.156-22.458,276.415-23.061c64.446-0.421,137.433,2.591,190.946,43.193c52.039,39.484,75.211,106.379,92.914,166.683c24.185,82.383,40.734,167.606,53.698,252.417c6.508,42.575,10.788,84.051,12.118,124.749c3.577,109.415-14.163,213.209-67.228,317.617c-7.544,14.844-15.371,29.545-23.197,44.242
          " />
        </path>
      </svg>
    </div>

    <div className="Cards">
      <h2>Works</h2>
    </div>
  </Layout>
)

export default IndexPage
