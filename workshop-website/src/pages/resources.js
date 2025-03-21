import * as React from "react"

import * as styles from "../components/index.module.css"

import { Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const links = [
    {
      text: (<i>Aedes albopictus</i>),
      url: "/resource_albopictus",
      description:
        <>Data and models on <i>Aedes albopictus</i> collected as a result of the first Vector Modelling Workshop in Bologna, Italy, 2024.</>  
    }
  ]
  
  const SecondPage = () => (
    <Layout workshop="main">
      <ul className={styles.list}>
        {links.map((link, i) => (
          <li key={link.url} className={styles.listItem}>
          <React.Fragment key={i}>
          <Link
              className={styles.listItemLink}
              href={link.url}
            >
              {link.text} ↗
            </Link>
            <p className={styles.listItemDescription}>{link.description}</p>
            </React.Fragment>
            </li>
        ))}
      </ul>
      </Layout>
  )

export const Head = () => <Seo title="Page two" />

export default SecondPage
