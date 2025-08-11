import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ExercisePage = () => (
  <Layout workshop="Nicosia2025">
    <h2>Mission</h2>

<section>
    <p>
        <b>Join us in advancing our understanding of <i>Aedes aegypti</i> in the 
        Eastern Mediterranean and Middle East.</b> In this hands-on Vector Modelling Workshop, we will bring together diverse modelling approaches to simulate, compare, and validate predictions of mosquito dynamics under shared environmental conditions. 
        Using common datasets and collaborative tools, we aim to produce open, climate-sensitive models and risk maps that can guide public health responses in the region.
    </p>
    <h3>Modelling <i>Aedes aegypti</i> in the EMME region</h3>
    <p>
        <i>Aedes aegypti</i> and <i>Aedes albopictus</i> have recently established in Cyprus, 
        posing a serious risk to public health on the island and across the 
        Eastern Mediterranean and Middle East (EMME) region. <i>Aedes aegypti</i>, 
        in particular, is highly efficient in transmitting diseases such as dengue, 
        chikungunya, yellow fever, and Zika, and we have already observed it in 
        several locations within the three countries shown in the map below.
    </p>
    <p>
    <StaticImage
              src="../../images/range_and_data.webp"
              loading="eager"
              width={750}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
    </p>
    <p>
        In this Vector Modelling Workshop, we focus on developing <b>mechanistic population dynamics models for <i>Aedes aegypti</i></b>. Our goal is to estimate the <b>geospatial likelihood of establishment</b> and the <b>temporal dynamics of mosquito activity</b> so that we can better assess potential disease risk.
    </p>
    <p>
        We will use the shared <XLink href="https://veclim.com/files/workshops/September2025/clim/">environmental datasets</XLink> to develop climate-sensitive models and simulate the expected <i>Aedes aegypti</i> activity in the region of interest. Where possible, we will compare model outputs with observed field data to assess validity and then combine results into <b>ensemble spatiotemporal risk maps</b>.
    </p>
    <p>
        We are bringing our models together to run under <b>similar conditions</b>, allowing us to compare and validate their outputs. If we need additional covariates, we will discuss how to expand the dataset to cover the same time span and resolution.
    </p>
    <p>
        We have set up a shared Google Drive <XLink href="https://drive.google.com/drive/folders/1HjAurgw70PrnmiOL4P-i1O41gAu90IkS?usp=drive_link">folder</XLink> for depositing scripts, outputs, and other relevant resources. Scripts should be self-contained so that they can run directly on the provided datasets. We will compile all scripts in a public GitHub repository to accompany the Workshop publication. With your permission, we will also include them in the <XLink href="https://veclim.com">VEClim</XLink> model repository for interactive access and custom simulations, and we plan to demonstrate some of this functionality during the Workshop.
    </p>
    <p>
        We aim to produce the following outputs, in order of preference:
        <ul>
            <li>Daily number of adult <i>Aedes aegypti</i> (from a dynamical model)</li>
            <li>Daily number of eggs (newly laid or average/median from a dynamical model)</li>
            <li>Geospatial risk, suitability, or susceptibility index (from a correlative model)</li>
        </ul>
    </p>
    <p>
        By the end of the Workshop, we will compile all datasets, models, and results into a dedicated online resource for the research community working on <i>Aedes aegypti</i> in the EMME region.
    </p>
</section>
</Layout>
)

export const Head = () => <Seo title="Exercise" />

export default ExercisePage
