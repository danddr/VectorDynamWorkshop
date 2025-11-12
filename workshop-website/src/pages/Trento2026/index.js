import * as React from "react"

import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

import XLink from "../../components/xlink"

const IndexPage = () => (
  <Layout workshop="Trento2026">
    <h2>The workshop</h2>
  <p>
  <i>Aedes koreicus</i> is an emerging invasive mosquito species that has recently expanded its distribution across several European countries. Although it shares some ecological similarities with <i>Aedes albopictus</i>, <i>Ae. koreicus</i> remains considerably less studied, and its potential role in pathogen transmission is still poorly understood. Its increasing establishment in temperate regions highlights the urgent need for targeted research and coordinated surveillance to better assess its public health implications.
</p>

<p>
  The <strong>one-day scientific workshop dedicated to <i>Aedes koreicus</i></strong>, to be held on <strong>10 February 2026 in Trento, Italy</strong>, aims to bring together researchers and public health professionals who have worked on this emerging species to:
</p>

<ul>
  <li>Share recent findings and field experiences</li>
  <li>Discuss current knowledge gaps and methodological challenges</li>
  <li>Identify research and surveillance priorities moving forward</li>
</ul>

<p>
  This focused meeting will serve as an open platform to exchange insights, foster new collaborations, and define a collective research agenda to improve our understanding of <i>Ae. koreicus</i> biology, ecology, and epidemiological relevance.
</p>

    <h2>Organisers</h2>
    <p>
      This Workshop is jointly organized by the MUSE - Museo delle Scienze (Italy), the University of Camerino (Italy), the University of Pavia (Italy), and the Edmund Mach Foundation (Italy). 
    </p>
    <h4>Local Organisation Team:</h4>
    <ul>
    <li>Daniele Da Re</li>
    <li> Giovanni Marini</li>
    <li>Valeria Lencioni</li>
    </ul>
    <h4>Scientific Committee:</h4>
    <ul>
    <li>Daniele Da Re - Edmund Mach Foundation (Italy)</li>
    <li>Giovanni Marini - Edmund Mach Foundation (Italy)</li>
    <li>Valeria Lencioni - MUSE (Italy)</li>
    <li>Claudia Damiani - University of Camerino (Italy)</li>
    <li>Maria Vittoria Mancini - University of Pavia (Italy)</li>
    </ul>
    <Footer workshop="Trento2026"/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
