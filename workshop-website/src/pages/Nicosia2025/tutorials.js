import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

import XLink from "../../components/xlink"

import IframeTabs from "../../components/IFrameTabs"

const TutorialsPage = () => {
  const tutorialTabs = [
    { label: "CDS", src: "../../assets/tutorials/Nicosia2025/CDS_tutorial.pdf" },
    { label: "bayesTPC", src: "../../assets/tutorials/Nicosia2025/bayesTPC_tutorial.pdf" },
    { label: "arbocartoR", src: "../../assets/tutorials/Nicosia2025/arbocartoR_tutorial.pdf" },
    { label: "PINN", src: "../../assets/tutorials/Nicosia2025/PINN_tutorial.pdf" },
    { label: "dynamAedes", src: "../../assets/tutorials/Nicosia2025/dynamAedes_tutorial.pdf" },
    { label: "sPop", src: "../../assets/tutorials/Nicosia2025/sPop_tutorial.pdf" },
    { label: "DDE", src: "../../assets/tutorials/Nicosia2025/DDE_tutorial.pdf" },
  ];

  return (
    <Layout workshop="Nicosia2025">
      <h2>Tutorials</h2>
      <p>
        The advanced modelling tutorials from the first day of the Workshop are now available at <XLink href="https://veclim.com/tutorials">VEClim's tutorial platform</XLink>. You can explore the static versions below, and if you prefer to run them interactively, simply visit the tutorial platform at <XLink href="https://veclim.com/tutorials">veclim.com/tutorials</XLink>.
      </p>
      <IframeTabs tabs={tutorialTabs} />
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default TutorialsPage
