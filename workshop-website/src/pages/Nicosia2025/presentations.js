import * as React from "react"
import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const base = "/assets/pdfs/Nicosia2025/"

const talks = [
  { file: "1_CyrilCaminade.pdf", label: "Cyril Caminade’s presentation" },
  { file: "2_PaulHuxley.pdf", label: "Paul Huxley’s presentation" },
  { file: "3_WIlliamWint.pdf", label: "William Wint’s presentation" },
  { file: "4_ChloeMorganRice.pdf", label: "Chloe Morgan Rice’s presentation" },
  { file: "5_MustafaAkiner.pdf", label: "Mustafa Akiner’s presentation" },
  { file: "7_BenedictFellows.pdf", label: "Benedict Fellows’ presentation" },
  { file: "8_AndreaDeAntoni.pdf", label: "Andrea De Antoni’s presentation" },
  { file: "9_MartinLottoBatista.pdf", label: "Martin Lotto Batista’s presentation" },
  { file: "10_JulianHeidecke.pdf", label: "Julian Heidecke’s presentation" },
  { file: "11_VeronicaAndreo.pdf", label: "Veronica Andreo’s presentation" },
  { file: "15_AvrielDiaz.pdf", label: "Avriel Diaz’s presentation" },
  { file: "17_ModellingExercise.pdf", label: "The modelling exercise" },
]

const PresentationsPage = () => (
  <Layout workshop="Nicosia2025">
    <h2>Presentations</h2>
    <p>
      Below are the PDF files containing the presentation slides from the{" "}
      <strong>2<sup>nd</sup> Climate-Sensitive Vector Dynamics Modelling Workshop</strong>,
      held in Nicosia (17–19 September 2025). All files are shared with the authors’ consent.
    </p>

    <ul>
      {talks.map(t => (
        <li key={t.file}>
          <XLink href={base + t.file} download>
            Download {t.label} (PDF)
          </XLink>
        </li>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Presentations – Nicosia 2025" />

export default PresentationsPage