import * as React from "react"

import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const IndexPage = () => (
  <Layout workshop="Nicosia2025">
    <h2>The workshop</h2>
    <p  style={{textAlign:"justify"}}>
       Climate-sensitive vectors are increasingly driving the spread of vector-borne diseases, posing significant public health challenges worldwide. This workshop is dedicated to exploring the diverse modelling approaches used to forecast mosquito and virus transmission. We envision this gathering as a collaborative platform for open discussions, where participants can collectively assess the strengths and limitations of existing models, delve into the potential of ensemble modelling, and explore practical applications for predicting epidemic risks.
    </p>

    <h2>Organisers</h2>
    <p  style={{textAlign:"justify"}}>
       Organised by the Cyprus Institute (Cyprus), the Edmund Mach Foundation (Italy), and CIRAD (France), this workshop aims to convene European modellers and public health stakeholders for an insightful dialogue on the technical details and future advancements in predictive models and modelling techniques for Climate-Sensitive Vectors, exemplified by the <i>Aedes albopictus</i> mosquito species.
    </p>
    <h4>Local Organisation Team:</h4>
    <ul>
    <li>Eleni Zenonos</li>
    <li>Marina Manoura</li>
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
