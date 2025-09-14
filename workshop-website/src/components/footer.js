import * as React from "react"
import XLink from "../components/xlink"
import { StaticImage } from "gatsby-plugin-image"

import * as styles from "../components/index.module.css"

const img_c3a = (<StaticImage
    src="../images/c3a.jpg"
    loading="eager"
    width={250}
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />
);

const img_ER = (<StaticImage
    src="../images/Logo_testo_Emilia-Romagna.png"
    loading="eager"
    width={75}
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />
);

const img_Wellcome = (<StaticImage
    src="../images/wellcome-logo-black.png"
    loading="eager"
    width={75}
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />
);

const img_CyI = (<StaticImage
    src="../images/The_Cyprus_Institute_logo.png"
    loading="eager"
    width={175}
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />
);

const img_EMME_CARE = (<StaticImage
    src="../images/EMME-CARE_logo-removebg-preview-0a34b913.webp"
    loading="eager"
    width={220}
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />
);

const img_CIRAD = (<StaticImage
    src="../images/cirad-agricultural-research-for-development-vector-logo.webp"
    loading="eager"
    width={175}
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />
);

const img_FEM = (<StaticImage
    src="../images/Fondazione-Edmund-Mach_header_logo.webp"
    loading="eager"
    width={175}
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />
);

const img_IFTAMED = (<StaticImage
    src="../images/logo_iftamed.webp"
    loading="eager"
    width={130}
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />
);

const img_EU = (<StaticImage
    src="../images/logo_EU.webp"
    loading="eager"
    width={110}
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />
);

const img_VEClim = (<StaticImage
    src="../images/VEClim-Logo-300px.webp"
    loading="eager"
    width={175}
    quality={100}
    formats={["auto", "webp", "avif"]}
    alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />
);

const orgLinks_ws2025 = [
  {
      "url": "https://www.cyi.ac.cy/",
      "image": img_CyI
  },
  {
      "url": "https://fmach.it/",
      "image": img_FEM
  }
];

const funderLinks_ws2025 = [
    [
        {
            "url": "https://wellcome.org/",
            "image": img_Wellcome
        },
        {
            "url": "https://veclim.com",
            "image": img_VEClim
        },
        {
            "url": "https://emme-care.cyi.ac.cy/",
            "image": img_EMME_CARE
        },
        {
            "url": "https://www.cirad.fr/en",
            "image": img_CIRAD
        },
        {
            "url": "https://marie-sklodowska-curie-actions.ec.europa.eu/",
            "image": img_IFTAMED
        },
        {
            "url": "https://marie-sklodowska-curie-actions.ec.europa.eu/",
            "image": img_EU
        }
    ]
];

const orgLinks_ws2024 = [
    {
        "url": "https://www.centro3a.unitn.it/",
        "image": img_c3a
    },
    {
        "url": "https://www.cyi.ac.cy/",
        "image": img_CyI
    },
    {
        "url": "https://www.regione.emilia-romagna.it/",
        "image": img_ER
    }
];

const funderLinks_ws2024 = [
    [
        {
            "url": "https://www.centro3a.unitn.it/",
            "image": img_c3a
        },
        {
            "url": "https://wellcome.org/",
            "image": img_Wellcome
        }
    ]
];

const Footer = ({ workshop }) => {
    if (workshop === "main") return (<></>);

    const orgLinks = {
        "main": [],
        "Bologna2024": orgLinks_ws2024,
        "Nicosia2025": orgLinks_ws2025
    }[workshop];

    const funderLinks = {
        "main": [],
        "Bologna2024": funderLinks_ws2024,
        "Nicosia2025": funderLinks_ws2025
    }[workshop];

    const organised = (<>
        <h3>Organised by</h3>
          <div className={"footer-logo"}>
            <div className={"footer-logo-group"}>
              {orgLinks.map((link, i) => (
                <React.Fragment key={i}>
                    <XLink href={link.url}>
                        {link.image}
                    </XLink>
                </React.Fragment>
              ))}
            </div></div>
        </>);

    const just_logos = (<>
          <div className={"footer-logo"}>
            <div className={"footer-logo-group"}>
              {orgLinks.map((link, i) => (
                <React.Fragment key={i}>
                    <XLink href={link.url}>
                        {link.image}
                    </XLink>
                </React.Fragment>
              ))}
            </div></div>
        </>);

    const funded = (<>
        <h3>Funded by</h3>
            <div className={"footer-logo"}>
              {funderLinks.map((group, j) => (
                <React.Fragment key={j}>
                    <div className={"footer-logo-group"}>
                        {group.map((link, i) => (
                             <XLink key={i} href={link.url}>
                              {link.image}
                            </XLink>
                          ))}
                    </div>
                </React.Fragment>
              ))}
            </div>
          </>);

    const sections = {
        "main": [],
        "Bologna2024": (<>{organised}{funded}</>),
        "Nicosia2025": (<>{just_logos}{funded}</>)
    }[workshop];

    return (
      <>
        <div className={styles.textCenter}>
            {sections}
        </div>
      </>
    )
}

export default Footer
