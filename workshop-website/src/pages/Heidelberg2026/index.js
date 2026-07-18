import * as React from "react"
import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Seo from "../../components/seo"
//import XLink from "../../components/xlink"

const IndexPage = () => (
  <Layout workshop="Heidelberg2026">
    <h2>The workshop</h2>
    <p>
      <i>Culex pipiens</i> is one of the most widespread and epidemiologically
      significant mosquito species in the world, acting as a primary vector for
      pathogens such as West Nile virus, Usutu virus, and various filarial
      worms. Despite its long-recognised public health relevance, many aspects
      of its biology, population dynamics, and vector competence across
      different ecological contexts remain incompletely understood. Its
      adaptability to urban environments and temperate climates makes it a
      central species in the study of vector-borne disease transmission in
      Europe and beyond.
    </p>
    <p>
      The{" "}
      <strong>
        3rd CSVDM Workshop, dedicated to <i>Culex pipiens</i>
      </strong>
      , will be held on{" "}
      <strong>24–26 November 2026 in Heidelberg, Germany</strong>. It aims to
      bring together researchers and public health professionals working on this
      species to:
    </p>
    <ul>
      <li>Share recent findings and field experiences</li>
      <li>Discuss current knowledge gaps and methodological challenges</li>
      <li>Identify research and surveillance priorities moving forward</li>
    </ul>
    <p>
      This focused meeting will serve as an open platform to exchange insights,
      foster new collaborations, and define a collective research agenda to
      advance our understanding of <i>Cx. pipiens</i> biology, ecology, and
      epidemiological relevance.
    </p>

    <h2>Organisers</h2>
    <p>
      This workshop is jointly organised by the Heidelberg University (Germany), The Cyprus Institute (Cyprus), AVIA-GIS (Belgium), and the
      Edmund Mach Foundation (Italy).
    </p>

    <h4>Local Organisation Team (Heidelberg University):</h4>
    <ul>
      <li>Peter Fransson</li>
      <li>Stella Dafka</li>
      <li>Joacim Rockloev</li>
    </ul>

    <h4>Scientific Committee:</h4>
    <ul>
      <li>
        Peter Fransson — Heidelberg University (Germany)
      </li>
      <li>
        Stella Dafka — Heidelberg University (Germany)
      </li>
      <li>
        Joacim Rockloev — Heidelberg University (Germany)
      </li>
      <li>Kamil Erguler — The Cyprus Institute (Cyprus)</li>
      <li>Cedric Marsboom — AVIA-GIS (Belgium)</li>
      <li>Daniele Da Re — Edmund Mach Foundation (Italy)</li>
    </ul>

    <Footer workshop="Heidelberg2026" />
  </Layout>
)

export const Head = () => <Seo title="Home" />
export default IndexPage