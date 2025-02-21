import * as React from "react"

import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const IndexPage = () => (
  <Layout workshop="Bologna2024">
    <h2>The workshop</h2>
    <p  style={{textAlign:"justify"}}>
       Climate-sensitive vectors are increasingly driving the spread of vector-borne diseases, posing significant public health challenges worldwide. This workshop is dedicated to exploring the diverse modelling approaches used to forecast mosquito and virus transmission. We envision this gathering as a collaborative platform for open discussions, where participants can collectively assess the strengths and limitations of existing models, delve into the potential of ensemble modelling, and explore practical applications for predicting epidemic risks.
    </p>

    <h2>Organisers</h2>
    <p  style={{textAlign:"justify"}}>
       Organised by the University of Trento, the Cyprus Institute, and the Emilia-Romagna region, this workshop aims to convene European modellers and stakeholders for an insightful dialogue on the technical details and future advancements in predictive models and modelling techniques for Climate-Sensitive Vectors, exemplified by the <i>Aedes albopictus</i> mosquito species.
    </p>
    <p>
       <b>Scientific Committee</b>:<br/>
        Daniele Da Re - University of Trento (Italy)<br/>
        Roberto Rosà - University of Trento (Italy)<br/>
        Giovanni Marini - Edmund Mach Foundation (Italy)<br/>
        Alessandro Albieri - Centro Agricoltura Ambiente (Italy)<br/>
        Kamil Erguler - The Cyprus Institute (Cyprus)<br/>
        Paola Angelini - Emilia-Romagna region (Italy)<br/>
    </p>
    <Footer workshop="Bologna2024"/>
  </Layout>
)

export const Head = () => <Seo title="Home" />

export default IndexPage
