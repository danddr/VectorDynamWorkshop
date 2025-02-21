import * as React from "react"

import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const PresentationsPage = () => (
  <Layout workshop="Bologna2024">
    <h2>Presentations</h2>
    <p>
        Below are the PDF files containing the presentation slides from the workshop, all shared with the authors' consent.
    </p>

    <ul>
        <li><XLink href="../../assets/pdfs/p0_modellingWorksop_firstPoll.pdf" download>Download First Poll slides (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p1_Briet.pdf" download>Download Olivier Briet's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p2_Huxley.pdf" download>Download Paul Huxley's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p3_Kern.pdf" download>Download Emma Kern's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p4_Marini_Vectabundance.pdf" download>Download Giovanni Marini's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p5_Wint_VectorNet.pdf" download>Download William Wint's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p6_Maccallum_VectorBase.pdf" download>Download Robert Maccallum's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p7_Brass.pdf" download>Download Dominic Brass' presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p8_Erguler_albopictus.pdf" download>Download Kamil Erguler's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p9_Hammami_arbocartoR_240919.pdf" download>Download Pachka Hammami's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p10_GarridoZornoza_VECTRI.pdf" download>Download Miguel Garrido-Zornoza's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p11_DaRe_dynamAedes.pdf" download>Download Daniele Da Re's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p12_IbanezJusticia_Sprengers.pdf" download>Download Adolfo Ibanez-Justicia's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p13_Albieri.pdf" download>Download Alessandro Albieri's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p14_Blaha_MachineLearning.pdf" download>Download Marharyta Blaha's presentation (PDF)</XLink></li>
        <li><XLink href="../../assets/pdfs/p15_Zardini.pdf" download>Download Agnese Zardini's presentation (PDF)</XLink></li>
     </ul>
  </Layout>
)

export const Head = () => <Seo title="Presentations" />

export default PresentationsPage
