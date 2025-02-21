import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Nicosia 2025",
    url: "/Nicosia2025",
    description:
      <>The second workshop, to be held in Nicosia, Cyprus, will focus on <i>Aedes aegypti</i> and include a pre-workshop training session.</>  },
  {
    text: "Bologna 2024",
    url: "/Bologna2024",
    description:
      <>The inaugural workshop, which laid the foundation for the community, was held in Bologna, Italy, with a focus on <i>Aedes aegypti</i>.</>
  }
]

const SecondPage = () => (
  <Layout workshop="main">
    <h1><b>Frontiers in Vector Modelling</b></h1>
    <h2>Annual Workshop on Modelling Innovations for Integrated Vector and Disease Management</h2>
    <p>
      This annual workshop brings together a diverse community of mathematical modellers, climate scientists, entomologists, epidemiologists, and public health professionals. Each year, the event spotlights a specific theme aligned with the mission of the hosting institution, fostering collaboration, knowledge sharing, and data exchange across disciplines. The workshop includes a dedicated training session designed for participants at all experience levels, promoting knowledge transfer and the adoption of novel technologies for public health planning.
      Together, participants critically evaluate current modelling approaches, explore the potential of ensemble methods, and develop actionable strategies to improve the prediction and mitigation of epidemic risks. By addressing critical gaps at the nexus of scientific innovation and practical public health applications, this workshop contributes to advancing the global fight against vector-borne diseases. 
    </p>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={link.url}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
