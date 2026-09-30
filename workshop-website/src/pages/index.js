import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout workshop="main">
    <h2>Climate-Sensitive Vector Dynamics Modelling (CSVDM)</h2>
    <p>
      CSVDM is a series of workshops, started in 2024, bringing together researchers,
      public health practitioners and modellers working on climate-sensitive vectors,
      mosquitoes, ticks and sandflies, and the diseases they transmit. 
    </p>
    <p>
      The workshops bring together experts from multiple disciplines to critically
      assess existing modelling approaches, explore emerging strategies such as
      ensemble modelling, and identify the knowledge gaps that most need addressing,
      with a consistent focus on making these models useful for real-world public
      health decision-making, from early warning systems to intervention planning.
    </p>
    <p>
      Find out more about the results of past workshops on the{" "}
      <a href="/publications/">Publications</a>, <a href="/workshops/">Workshops</a>{" "}
      and <a href="/resources/">Resources</a> pages.
    </p>
    <p>
      CSVDM was initiated by a group of colleagues working across vector ecology and
      disease modelling. Find out more on the <a href="/who/">Who are we?</a> page.
    </p>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage