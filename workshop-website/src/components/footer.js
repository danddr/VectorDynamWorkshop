import * as React from "react"
import XLink from "../components/xlink"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"

const img_c3a = (<StaticImage
    src="../images/c3a.jpg"
    loading="eager" width={250} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_ER = (<StaticImage
    src="../images/Logo_testo_Emilia-Romagna.png"
    loading="eager" width={75} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_Wellcome = (<StaticImage
    src="../images/wellcome-logo-black.png"
    loading="eager" width={75} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_CyI = (<StaticImage
    src="../images/The_Cyprus_Institute_logo.png"
    loading="eager" width={175} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_EMME_CARE = (<StaticImage
    src="../images/EMME-CARE_logo-removebg-preview-0a34b913.webp"
    loading="eager" width={220} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_CIRAD = (<StaticImage
    src="../images/cirad-agricultural-research-for-development-vector-logo.webp"
    loading="eager" width={175} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_FEM = (<StaticImage
    src="../images/Fondazione-Edmund-Mach_header_logo.webp"
    loading="eager" width={175} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_IFTAMED = (<StaticImage
    src="../images/logo_iftamed.webp"
    loading="eager" width={130} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_EU = (<StaticImage
    src="../images/logo_EU.webp"
    loading="eager" width={110} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_VEClim = (<StaticImage
    src="../images/VEClim-Logo-300px.webp"
    loading="eager" width={175} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_MUSE = (<StaticImage
    src="../images/muse_logo.webp"
    loading="eager" width={175} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_UniPavia = (<StaticImage
    src="../images/logo-UNIPV.webp"
    loading="eager" width={175} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_UniPavia_Dept = (<StaticImage
    src="../images/uniPV_bio_dep.webp"
    loading="eager" width={175} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_UniCamerino = (<StaticImage
    src="../images/University_of_Camerino.webp"
    loading="eager" width={100} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_PNRR = (<StaticImage
    src="../images/pnrr.webp"
    loading="eager" width={475} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

// ── Heidelberg 2026 — add image files later ──────────────────────────────────
const img_IWR = (<StaticImage
    src="../images/iwr_logo.webp"
    loading="eager" width={175} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_UniHeidelberg = (<StaticImage
    src="../images/uni_heidelberg_logo.webp"
    loading="eager" width={150} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);

const img_AviaGIS = (<StaticImage
    src="../images/AviaGIS_logo.webp"
    loading="eager" width={115} quality={100}
    formats={["auto", "webp", "avif"]} alt=""
    style={{ marginBottom: `var(--space-3)` }}
  />);
// ─────────────────────────────────────────────────────────────────────────────

// ── Organisers ────────────────────────────────────────────────────────────────

const orgLinks_ws2024 = [
  { "url": "https://www.centro3a.unitn.it/", "image": img_c3a },
  { "url": "https://www.cyi.ac.cy/",         "image": img_CyI },
  { "url": "https://www.regione.emilia-romagna.it/", "image": img_ER }
];

const orgLinks_ws2025 = [
  { "url": "https://www.cyi.ac.cy/", "image": img_CyI },
  { "url": "https://fmach.it/",      "image": img_FEM }
];

const orgLinks_ws2026 = [
  { "url": "https://www.muse.it/",        "image": img_MUSE },
  { "url": "https://en.unipv.it/en",      "image": img_UniPavia },
  { "url": "https://dbb.dip.unipv.it/it", "image": img_UniPavia_Dept },
  { "url": "https://www.unicam.it/en",    "image": img_UniCamerino },
  { "url": "https://fmach.it/",           "image": img_FEM }
];

const orgLinks_heidelberg2026 = [
  { "url": "https://www.iwr.uni-heidelberg.de/", "image": img_IWR },
  { "url": "https://www.uni-heidelberg.de/en",   "image": img_UniHeidelberg },
  { "url": "https://fmach.it/",                  "image": img_FEM },
  { "url": "https://www.cyi.ac.cy/",             "image": img_CyI },
  { "url": "https://www.avia-gis.com/",          "image": img_AviaGIS },
];

// ── Funders ───────────────────────────────────────────────────────────────────

const funderLinks_ws2024 = [[
  { "url": "https://www.centro3a.unitn.it/", "image": img_c3a },
  { "url": "https://wellcome.org/",          "image": img_Wellcome }
]];

const funderLinks_ws2025 = [[
  { "url": "https://wellcome.org/",                                  "image": img_Wellcome },
  { "url": "https://veclim.com",                                     "image": img_VEClim },
  { "url": "https://emme-care.cyi.ac.cy/",                           "image": img_EMME_CARE },
  { "url": "https://www.cirad.fr/en",                                "image": img_CIRAD },
  { "url": "https://marie-sklodowska-curie-actions.ec.europa.eu/",   "image": img_IFTAMED },
  { "url": "https://marie-sklodowska-curie-actions.ec.europa.eu/",   "image": img_EU }
]];

const funderLinks_ws2026 = [[
  { "url": "https://dbb.dip.unipv.it/it",                           "image": img_UniPavia },
  {                                                                   "image": img_PNRR },
  { "url": "https://marie-sklodowska-curie-actions.ec.europa.eu/",  "image": img_IFTAMED },
  { "url": "https://marie-sklodowska-curie-actions.ec.europa.eu/",  "image": img_EU }
]];

// Add / replace funder logos here once confirmed
const funderLinks_heidelberg2026 = [[
  { "url": "https://marie-sklodowska-curie-actions.ec.europa.eu/",  "image": img_EU },
  { "url": "https://wellcome.org/",                                 "image": img_Wellcome }
]];

// ── Footer component ──────────────────────────────────────────────────────────

const Footer = ({ workshop }) => {
  if (workshop === "main") return (<></>);

  const orgLinks = {
    "Bologna2024":    orgLinks_ws2024,
    "Nicosia2025":    orgLinks_ws2025,
    "Trento2026":     orgLinks_ws2026,
    "Heidelberg2026": orgLinks_heidelberg2026,
  }[workshop];

  const funderLinks = {
    "Bologna2024":    funderLinks_ws2024,
    "Nicosia2025":    funderLinks_ws2025,
    "Trento2026":     funderLinks_ws2026,
    "Heidelberg2026": funderLinks_heidelberg2026,
  }[workshop];

  const organised = (
    <>
      <h3>Organised by</h3>
      <div className={"footer-logo"}>
        <div className={"footer-logo-group"}>
          {orgLinks.map((link, i) => (
            <React.Fragment key={i}>
              <XLink href={link.url}>{link.image}</XLink>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );

  const funded = (
    <>
      <h3>Funded by</h3>
      <div className={"footer-logo"}>
        {funderLinks.map((group, j) => (
          <React.Fragment key={j}>
            <div className={"footer-logo-group"}>
              {group.map((link, i) => (
                <XLink key={i} href={link.url}>{link.image}</XLink>
              ))}
            </div>
          </React.Fragment>
        ))}
      </div>
    </>
  );

  const sections = {
    "Bologna2024":    (<>{organised}{funded}</>),
    "Nicosia2025":    (<>{organised}{funded}</>),
    "Trento2026":     (<>{organised}{funded}</>),
    "Heidelberg2026": (<>{organised}{funded}</>),
  }[workshop];

  return (
    <div className={styles.textCenter}>
      {sections}
    </div>
  );
}

export default Footer