import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"

const mainPageLinks = [
  { text: "Home", url: "/" },
  { text: "Who are we?", url: "/who" },
  { text: "Special Issue", url: "/special" },
  { text: "Resources", url: "/resources" },
  { text: "Workshops", url: "/workshops" },
  { text: "Contact", url: "/contacts" }
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
  { text: "Presentations", url: "/Nicosia2025/presentations" },
  { text: "Main", url: "/" }
]
const mainPageLinks_trento2026 = [
  { text: "Home", url: "/Trento2026" },
  { text: "Registration", url: "/Trento2026/registration" },
  { text: "Program", url: "/Trento2026/program" },
  { text: "Directions", url: "/Trento2026/directions" },
  { text: "Main", url: "/" }
]
const mainPageLinks_heidelberg2026 = [
  { text: "Home", url: "/Heidelberg2026" },
  { text: "Registration", url: "/Heidelberg2026/registration" },
  { text: "Program", url: "/Heidelberg2026/program" },
  { text: "Directions", url: "/Heidelberg2026/directions" },
  { text: "Main", url: "/" }
]

const Header = ({ workshop, siteTitle }) => {
  const ws_title = {
    "main": (<></>),
    "Bologna2024": (
        <>
          <h1>
              Climate-Sensitive Vector Dynamics <br /> <b>Modelling Workshop</b>
          </h1>
        </>
    ),
    "Nicosia2025": (
        <>
          <h1>
              Climate-Sensitive Vector Dynamics <br /> <b>Modelling Workshop</b>
          </h1>
        </>
    ),
    "Trento2026": (
        <>
          <h1>
              Two decades of <i>Aedes koreicus</i> in Europe:<br />
              <b>Bridging Knowledge Gaps in Ecology and Vector Role</b>
          </h1>
        </>
    ),
    "Heidelberg2026": (
        <>
          <h1>
              3<sup>rd</sup> CSVDM Workshop<br/>Climate-Sensitive Vector Dynamics Modelling<br />
              <b><i>Culex pipiens</i> in a Changing Climate</b>
          </h1>
        </>
    ),
  }[workshop];

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
    ),
    "Trento2026": (
      <div className={"ws-date"}>
        February 10, 2026 - Trento, Italy
      </div>
    ),
    "Heidelberg2026": (
      <div className={"ws-date"}>
        November 24-26, 2026 - Heidelberg, Germany
      </div>
    ),
  }[workshop];

  const pageLinks = {
    "main": mainPageLinks,
    "Bologna2024": mainPageLinks_ws2024,
    "Nicosia2025": mainPageLinks_ws2025,
    "Trento2026": mainPageLinks_trento2026,
    "Heidelberg2026": mainPageLinks_heidelberg2026,
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
        {ws_title}
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