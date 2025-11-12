import * as React from "react"
import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const PresentationsPage = () => (
  <Layout workshop="Nicosia2025">
    <h2>Presentations</h2>
    <p>
      Below are the PDF files containing the presentation slides from the{" "}
      <strong>2<sup>nd</sup> Climate-Sensitive Vector Dynamics Modelling Workshop</strong>,
      held in Nicosia (17–19 September 2025). All files are shared with the authors’ consent.
    </p>

    <ul>
      <li>
        <XLink href="../../assets/Nicosia2025pdfs/1_CyrilCaminade.pdf" download>
          Download Cyril Caminade’s presentation (PDF)
        </XLink>
      </li>
      <li>
        <XLink href="../../assets/Nicosia2025pdfs/2_PaulHuxley.pdf" download>
          Download Paul Huxley’s presentation (PDF)
        </XLink>
      </li>
      <li>
        <XLink href="../../assets/Nicosia2025pdfs/3_WilliamWint.pdf" download>
          Download William Wint’s presentation (PDF)
        </XLink>
      </li>
      <li>
        <XLink href="../../assets/Nicosia2025pdfs/4_ChloeMorganRice.pdf" download>
          Download Chloe Morgan Rice’s presentation (PDF)
        </XLink>
      </li>
      <li>
        <XLink href="../../assets/Nicosia2025pdfs/6_MustafaAkiner.pdf" download>
          Download Mustafa Akiner’s presentation (PDF)
        </XLink>
      </li>
      <li>
        <XLink href="../../assets/Nicosia2025pdfs/13_BenedictFellows.pdf" download>
          Download Benedict Fellows’ presentation (PDF)
        </XLink>
      </li>
      <li>
        <XLink href="../../assets/Nicosia2025pdfs/14_AndreaDeAntoni.pdf" download>
          Download Andrea De Antoni’s presentation (PDF)
        </XLink>
      </li>
      <li>
        <XLink href="../../assets/Nicosia2025pdfs/16_JonildaKushta.pdf" download>
          Download Jonilda Kushta’s presentation (PDF)
        </XLink>
      </li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Presentations – Nicosia 2025" />

export default PresentationsPage
