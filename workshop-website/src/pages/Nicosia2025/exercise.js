import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ExercisePage = () => (
  <Layout workshop="Nicosia2025">
    <h2>Mission</h2>

<section>
    <h3>Modelling <i>Aedes aegypti</i> in the EMME region</h3>
    <p>
        <i>Aedes aegypti</i> and <i>Aedes albopictus</i> have recently introduced in Cyprus posing a serious risk to public health in the island and the Eastern Mediterranean and Middle East (EMME) region.
        The former, being more efficient in disease transmission, has been observed several locations in the three countries shown in the map below.
    </p>
    <p>
    <StaticImage
              src="../../images/range_and_data.webp"
              loading="eager"
              width={750}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
    </p>
    <p>
        In this Vector Modelling Workshop, we will focus on developing mechanistic population dynamics models for <i>Aedes aegypti</i>,
        which can inform us about the geospatial likelihood of establishment and the temporal dynamics of activity and thus the potential disease risk.
    </p>
    <p>
        By using the <XLink href="https://veclim.com/files/workshops/September2025/clim/">environmental datasets</XLink> provided, we will develop climate-sensitive models and simulate the expected 5-year activity in the region of interest.
    </p>
    <p>
        Eventually, we hope to assess model validity by comparing with field observations and derive ensemble models of spatiotemporal risk in the region.
    </p>
</section>
</Layout>
)

export const Head = () => <Seo title="Exercise" />

export default ExercisePage
