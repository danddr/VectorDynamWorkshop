import * as React from "react"
import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const base = "/assets/pdfs/Trento2026/"

const talks = [
  { file: "1_ValeriaLencioni.pdf", label: "Valeria Lencioni’s presentation" },
  { file: "2_KorneliaKurucz.pdf", label: "Kornelia Kurucz’s presentation" },
  { file: "3_MariaVittoriaMancini.pdf", label: "Maria Vittoria Mancini’s presentation" },
  { file: "4_FedericaGobbo.pdf", label: "Federica Gobbo’s presentation" },
  { file: "5_FabrizioMontarsi.pdf", label: "Fabrizio Montarsi’s presentation" },
  { file: "6_EleonoraFlacio.pdf", label: "Eleonora Flacio’s presentation" },
  { file: "7_DanieleDaRe_GiovanniMarini.pdf", label: "Daniele Da Re and Giovanni Marini’s joint presentation" },
]

const PresentationsPage = () => (
  <Layout workshop="Trento2026">
    <h2>Presentations</h2>
    <p>
      {/* Keep the existing intro paragraph from your current Trento page here */}
      Below are the PDF files containing the presentation slides from the workshop.
      All files are shared with the authors’ consent.
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

export const Head = () => <Seo title="Presentations – Trento 2026" />

export default PresentationsPage