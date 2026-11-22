import * as React from "react"
import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const base = "/assets/pdfs/Heidelberg2026/"

const talks = [
  {
    label: "Guy Hendrickx’s presentation on the MOOD platform",
    file: "MOOD_Platform_GuyHendrickx_Nov2026.pdf",
  },
  {
    label: "Paul Taconet’s presentation on the Cartopictus dashboard",
    file: "Cartopictus_PaulTaconet_Nov2026.pdf",
  },
  {
    label: "Stephanie Thomas’s presentation on the BayByeMos dashboard",
    file: "BayByeMos_StephanieThomas_Nov2026.pdf",
  },
  {
    label: "Sergio Natal on the CLIMOS dashboard",
    links: [
      { text: "CLIMOS website", href: "https://climos-project.eu/" },
      { text: "CLIMOS Early Warning System", href: "https://ews.climos-project.eu" },
    ],
  },
  {
    label: "Kamil Erguler’s presentation on the VEClim dashboard",
    file: "VEClim_KamilErguler_Nov2026.pdf",
  },
  {
    label: "Adam Fisher on the EpiOutlook dashboard",
    links: [
      { text: "EpiOutlook indicators", href: "https://epioutlook.bsc.es/en/indicators-tab" },
    ],
  },
]

const PresentationsPage = () => (
  <Layout workshop="Heidelberg2026">
    <h2>
      16 November webinar: an overview of ready-to-use dashboards for VBD
      management and pandemic preparedness
    </h2>
    <p>
      Below are the slides from the pre-workshop webinar, shared with the
      authors’ consent. Where slides are not available, we link to the
      dashboards.
    </p>

    <ul>
      {talks.map(t => (
        <li key={t.label}>
          {t.file ? (
            <XLink href={base + t.file} download>
              Download {t.label} (PDF)
            </XLink>
          ) : (
            <>
              {t.label}:{" "}
              {t.links.map((l, i) => (
                <React.Fragment key={l.href}>
                  {i > 0 && " | "}
                  <XLink href={l.href}>{l.text}</XLink>
                </React.Fragment>
              ))}
            </>
          )}
        </li>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Presentations – Heidelberg 2026" />

export default PresentationsPage