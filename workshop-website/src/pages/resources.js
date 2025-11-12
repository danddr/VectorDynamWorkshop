import * as React from "react"
import * as styles from "../components/index.module.css"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

// 🧬 Main resource links
const links = [
  {
    text: (<i>Aedes albopictus</i>),
    url: "/resource_albopictus",
    description: (
      <>
        Data and models on <i>Aedes albopictus</i> collected as a result of the
        first Vector Modelling Workshop in Bologna, Italy (2024).
      </>
    ),
  },
  {
    text: (<i>Aedes aegypti</i>),
    url: "/Nicosia2025/tutorials",
    description: (
      <>
        Models, results, and interactive materials from the second Vector
        Modelling Workshop in Nicosia, Cyprus (2025), focusing on{" "}
        <i>Aedes aegypti</i> population dynamics and environmental dependence.
      </>
    ),
  },
]

// 📊 Dashboard subsection (curated external platforms)
const dashboards = [
  {
    text: "MOOD Platform",
    url: "https://mood-h2020.eu/mood-platform/",
    description: (
      <>
        The <strong>MOOD platform</strong> aims to increase the operational
        abilities of epidemic intelligence and surveillance teams across
        national public and animal health agencies to better detect, monitor,
        and assess emerging infectious diseases of known or unknown origin, as
        well as antimicrobial resistant pathogens.
        <br />
        <br />
        <strong>Modules of the MOOD Platform</strong>
        <br />
        <strong>Module 1</strong> provides users with a one-stop “shop” for the
        visualization and download of relevant covariates relative to infectious
        disease emergence in support of risk assessment and modeling.
        <br />
        <br />
        <strong>Module 2</strong> visualizes and allows the download of disease
        outbreak data extracted from online media using text mining.
        <br />
        <br />
        <strong>Module 3</strong> provides users with risk maps and other
        modelled outputs, highlighting areas suitable for the occurrence of
        diseases such as HPAI, WNV, and TBE in animals and humans, to support
        improved surveillance and detection.
      </>
    ),
  },
  {
    text: "VEClim",
    url: "https://veclim.com/",
    description: (
      <>
        The <strong>VEClim</strong> (Climate-Driven Vector-Borne Disease Risk
        Assessment Platform) supports early warning systems and decision support
        mechanisms to aid in effective vector control and outbreak management
        strategies.
        <br />
        <br />
        VEClim employs climate-sensitive structured population modelling,
        incorporating physiological processes driven by meteorological and
        environmental factors. Its user-friendly web-based GIS interface
        improves accessibility to models and provides short-, medium-, and
        long-range predictions of habitat suitability, vector activity, and
        disease risk and impact.
        <br />
        <br />
        The initial release of VEClim presents an in-depth assessment of the
        seasonal dynamics of <i>Aedes albopictus</i> (Asian tiger mosquito) and
        the associated risk of <i>chikungunya</i> virus transmission.
      </>
    ),
  },
  {
    text: "ZanZeMap",
    url: "https://www.zanzemap.it/",
    description: (
      <>
        The <strong>ZanZeMap</strong> project aims to create maps showing the
        risk of presence and the activity level of ticks and mosquitoes across
        Italy. It serves as a kind of “forecast bulletin” designed to help the
        public stay informed and better protect themselves from these annoying
        parasites.
      </>
    ),
  },
]

const ResourcesPage = () => (
  <Layout workshop="main">
    <h2>Data and Models</h2>
    <ul className={styles.list}>
      {links.map((link, i) => (
        <li key={i} className={styles.listItem}>
          <Link className={styles.listItemLink} to={link.url}>
            {link.text} ↗
          </Link>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>

    <h2>Dashboards</h2>
    <ul className={styles.list}>
      {dashboards.map((item, i) => (
        <li key={i} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.text} ↗
          </a>
          <p className={styles.listItemDescription}>{item.description}</p>
        </li>
      ))}
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Resources" />
export default ResourcesPage
