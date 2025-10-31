import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../components/index.module.css"

const mainPageLinks = [
  { text: "Home", url: "/" },
  { text: "Who are we?", url: "/who" },
  { text: "Special Issue", url: "/special" },
  { text: "Data & Models", url: "/resources" },
  { text: "Workshops", url: "/workshops" }
]

const mainPageLinks_ws2024 = [
  { text: "Home", url: "/Bologna2024" },
  { text: "Registration", url: "/Bologna2024/registration" },
  { text: "Program", url: "/Bologna2024/program" },
  { text: "Directions", url: "/Bologna2024/directions" },
  { text: "Presentations", url: "/Bologna2024/presentations" },
  { text: "Main", url: "/" }
]

const mainPageLinks_ws2025 = [
  { text: "Home", url: "/Nicosia2025" },
  { text: "Registration", url: "/Nicosia2025/registration" },
  { text: "Program", url: "/Nicosia2025/program" },
  { text: "Directions", url: "/Nicosia2025/directions" },
  { text: "Exercise", url: "/Nicosia2025/exercise" },
  { text: "Tutorials", url: "/Nicosia2025/tutorials" },
  { text: "Main", url: "/" }
]

const Header = ({ workshop, siteTitle }) => {
  const ws_date = {
    "main": (<></>),
    "Bologna2024": (
        <div className={"ws-date"}>
          September 19-20, 2024 - Bologna, Italy
        </div>
      ),
    "Nicosia2025": (
        <div className={"ws-date"}>
          September 17-19, 2025 - Nicosia, Cyprus
        </div>
      )
  }[workshop];
  const pageLinks = {
    "main": mainPageLinks,
    "Bologna2024": mainPageLinks_ws2024,
    "Nicosia2025": mainPageLinks_ws2025
  }[workshop];
  return (
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
      {ws_date}
      <p className={styles.intro}>
        {pageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== pageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </p>
    </div>
  </>
)
}

export default Header
