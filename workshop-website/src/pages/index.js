import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout workshop="main">
    <p>
    Climate-sensitive vectors are increasingly driving the spread of vector-borne diseases, posing significant public health challenges worldwide. This workshop is dedicated to exploring the diverse modelling approaches used to forecast mosquito and virus transmission. We envision this gathering as a collaborative platform for open discussions, where participants can collectively assess the strengths and limitations of existing models, delve into the potential of ensemble modelling, and explore practical applications for predicting epidemic risks.
    </p>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
