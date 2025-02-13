import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../components/index.module.css"

const samplePageLinks = [
  { text: "Home", url: "/" },
  { text: "Data & Models", url: "/resources" },
  { text: "Workshops", url: "/workshops" }
]

const Header = ({ siteTitle }) => (
  <>
    <div className={styles.textCenter}>
    <StaticImage
        src="../images/banner.webp"
        loading="eager"
        width={832}
        quality={100}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      />
      <h1>
        Climate-Sensitive Vector Dynamics <br/> <b>Modelling Workshop</b>
      </h1>
      <p className={styles.intro}>
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </p>
    </div>
  </>
)

export default Header
