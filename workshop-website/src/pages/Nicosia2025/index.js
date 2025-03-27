import * as React from "react"

import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

import XLink from "../../components/xlink"

const IndexPage = () => (
  <Layout workshop="Nicosia2025">
    <h2>The workshop</h2>
    <p>
      Climate-sensitive vectors are increasingly driving the spread of vector-borne diseases, posing significant public health challenges globally. Cyprus, an island located at the eastern edge of the Mediterranean Sea, has recently become home to two highly invasive aedine mosquito species - <i><XLink href="https://doi.org/10.1051/parasite/2023043">Ae. aegypti</XLink></i> and <i><XLink href="https://doi.org/10.52004/JEMCA2022.0008">Ae. albopictus</XLink></i>. The concurrent establishment of these species significantly elevates the risk for future arboviral outbreaks, highlighting the need for rigorous surveillance and proactive prevention strategies.
    </p>
    <p>
      The <strong>2<sup>nd</sup> Climate-Sensitive Vector Dynamics Modelling Workshop</strong> is dedicated to exploring innovative ideas and approaches to modelling the dynamics of <strong><i>Ae. aegypti</i></strong>, particularly given the present state of limited field and laboratory data availability on its environmental dependence. We envision this gathering as a collaborative platform for open discussions, where participants can collectively assess the strengths and limitations of their approaches, investigate the potential of ensemble modelling strategies, and explore practical applications for predicting epidemic risks.
    </p>

    <h2>Organisers</h2>
    <p>
      This Workshop is jointly organized by the Cyprus Institute (Cyprus) and the Edmund Mach Foundation (Italy). It will bring together mathematical modelers, epidemiologists, entomologists, and public health stakeholders to engage in meaningful dialogue on technical constraints and future advancements in predictive modelling of climate-sensitive <strong><i>Aedes aegypti</i></strong> population dynamics.
    </p>
    <h4>Local Organisation Team:</h4>
    <ul>
    <li>Eleni Zenonos</li>
    <li>Andriana Andreou</li>
    <li>Eirini Chrysanthou</li>
    <li>Marco Neira</li>
    <li>Kamil Erguler</li>
    </ul>
    <h4>Scientific Committee:</h4>
    <ul>
    <li>Daniele Da Re - Edmund Mach Foundation (Italy)</li>
    <li>Kamil Erguler - The Cyprus Institute (Cyprus)</li>
    <li>Yiannis Proestos - The Cyprus Institute (Cyprus)</li>
    <li>Georgios Zittis - The Cyprus Institute (Cyprus)</li>
    <li>Cyril Caminade - The Abdus Salam International Centre for Theoretical Physics (Italy)</li>
    <li>Pachka Hammami - UMR ASTRE - CIRAD (France)</li>
    <li>Dominic Brass - UK Centre for Ecology & Hydrology (UK)</li>
    <li>Mina Petrić - Avia-GIS (Belgium)</li>
    </ul>
    <Footer workshop="Nicosia2025"/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
