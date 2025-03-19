import * as React from "react"

import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as styles from "../components/index.module.css"
import XLink from "../components/xlink";

const img_DanieleDaRe = (<StaticImage
  src="../images/who_Daniele-Da-Re.webp"
  loading="eager"
  width={160}
  quality={100}
  formats={["auto", "webp", "avif"]}
  alt=""
/>
);

const img_KamilErguler = (<StaticImage
  src="../images/who_Kamil-Erguler.webp"
  loading="eager"
  width={160}
  quality={100}
  formats={["auto", "webp", "avif"]}
  alt=""
/>
);

const links = [
  {
    text: "Daniele Da Re",
    image: img_DanieleDaRe,
    url: "https://scholar.google.com/citations?user=efoqkBwAAAAJ&hl=en",
    description:
      <>The one with the plan...</>  
  },
  {
    text: "Kamil Erguler",
    image: img_KamilErguler,
    url: "https://kerguler.github.io/",
    description:
      <>
      A mathematical modeller working on climate change impact assessment for vectors and vector-borne diseases.
      </>
  }
]

const SecondPage = () => (
  <Layout workshop="main">
      <ul className={styles.enlist}>
      {links.map((link, i) => (
        <li key={link.url} className={styles.listItem}>
          <React.Fragment key={i}>
            {link.image}<br/>
            <XLink
              className={styles.listItemLink}
              href={link.url}
            >
              {link.text} ↗
            </XLink>
            <p className={styles.listItemDescription}>{link.description}</p>
          </React.Fragment>
        </li>
      ))}
    </ul>
    </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
