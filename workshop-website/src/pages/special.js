import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../components/index.module.css"

const SecondPage = () => (
  <Layout workshop="main">
    <h1><b>Special issue on Journal of the European Mosquito Control Association (JEMCA)</b></h1>
    <h2>Advances in Modelling for Integrated Vector Control and Disease Risk Management</h2>
    <p>
    Vector-borne diseases (VBDs) represent a significant challenge to global public health, as they account for a substantial burden of morbidity and mortality worldwide. The dynamics of VBDs are
complex, driven by interactions among vectors, hosts, pathogens, and the environment. Recent advances in mathematical modelling and machine learning techniques have revolutionised our
ability to explore and predict these dynamics, offering innovative tools for understanding the spread, control, and potential elimination of these diseases.
Dynamical modelling approaches, including compartmental models, stochastic simulations, and agent-based frameworks, have provided valuable insights into the transmission patterns of VBDs.
Meanwhile, machine learning techniques, leveraging large datasets from surveillance systems, satellite observations, and genomic studies, have emerged as powerful complements to traditional
models. Together, these tools enable researchers to capture non-linear interactions, assess spatial and temporal patterns, and predict disease risk with increasing accuracy.
</p>

<p>
In this Special Issue dedicated to "Advances in modelling for integrated vector control and disease risk management", we call for cutting-edge, interdisciplinary contributions that focus on
the application of mathematical modelling and machine learning to better understand and manage vectors and vector-borne diseases (V/VBD). Contributions are encouraged to address
various aspects of vector distribution and dynamics, disease mechanisms and spread, and designing effective control strategies across diverse ecological and epidemiological contexts.
We invite submissions related to, but not limited to, the following topics: 
</p>
<p>
<ul>
<li>Development and application of dynamical models (e.g., compartmental, stochastic, and agent-based models) to study V/VBD transmission.- Integration of environmental, behavioural, and genomic data into V/VBD models.</li>
<li>Machine learning and artificial intelligence for predicting vector distribution and disease outbreaks. </li>
<li>Modelling the impact of climate change, land use, and urbanisation on V/VBD dynamics and transmission. </li>
<li>Novel methodologies for linking mathematical models with big data and ecoinformatics tools.</li>
<li>Evaluation of control measures (e.g., vector management, vaccination, and treatment strategies) using dynamical models.</li>
<li>Spatio-temporal analysis of V/VBD dynamics using advanced statistical or computational methods.</li>
</ul>
</p>

<p>
We encourage researchers from diverse fields, including epidemiology, ecology, mathematics, computer science, and public health, to contribute their work to this Special Issue. Authors with
ideas for potential review articles or collaborative studies are invited to contact the Guest Editors to discuss the relevance and suitability of their topics.
</p>
<p>
Detailed information about the submissions requirements are available <a href="https://brill.com/view/journals/jemc/jemc-overview.xml?language=en&contents=artsub">here</a>. The deadline for the submissions of manuscripts is the <b>31st July 2025</b>.
</p>
<p>
We look forward to your innovative and multidisciplinary contributions!
</p>
<p>
    Dr. Daniele Da Re, Edmund Mach Foundation (Italy) <a href="mailto:daniele.dare@fmach.it">daniele.dare@fmach.it</a>
    <br />
    Dr. Kamil Erguler, The Cyprus Institute (Cyprus) <a href="mailto:k.erguler@cyi.ac.cy">k.erguler@cyi.ac.cy</a>
</p>
    </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
