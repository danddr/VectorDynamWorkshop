import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../components/index.module.css"

const SecondPage = () => (
  <Layout workshop="main">
    <h1><b>Frontiers in Climate-Sensitive Vector Modelling</b></h1>
    <h2>Annual Workshop on Modelling Innovations for Integrated Vector and Disease Management</h2>
    <p>
      This is where we advertise the Special Issue.
    </p>
    </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
