import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ExercisePage = () => (
  <Layout workshop="Heidelberg2026">

    <h2>Mission</h2>

    <section>

      <p>
        <b>Join us in advancing climate-sensitive modelling of <i>Culex pipiens</i>.</b>
        Through this modelling exercise, we invite participants to submit model outputs 
        that we will use to develop ensemble predictions of both the temporal activity 
        of <i>Culex pipiens</i> at selected locations and its spatial suitability across 
        Europe. By providing a common framework, we aim to compare predictions, 
        identify areas of agreement and uncertainty, and create a shared modelling 
        resource that can support future research and public health applications.
      </p>

      <h3>Mission Time</h3>

      <p>
        We provide daily meteorological data extracted from 
        the <XLink href="https://climate.copernicus.eu/copernicus-regional-reanalysis-europe">CERRA</XLink> reanalysis 
        for two study locations from 2014 to 2026:
      </p>

      <ul>
        <li>
          <b>Petrovaradin, Serbia</b>, with daily adult
          <i> Culex pipiens</i> observations available for 2016 and 2017.
        </li>
        <li>
          <b>Larnaca, Cyprus</b>, with weekly adult
          <i> Culex pipiens</i> observations collected during 2025.
        </li>
      </ul>

      <p>
        The meteorological dataset includes daily air temperature,
        total precipitation, wind speed, and relative humidity. A map of the
        study locations together with summary plots of the environmental
        variables are provided below, while the complete time series can be
        downloaded in CSV format at this <XLink href="https://veclim.com/files/workshops/Heidelberg2026/clim/">link</XLink>.
      </p>

    <p className="center">
    <StaticImage
              src="../../images/Heidelberg2026/mission-time-location-map.webp"
              loading="eager"
              width={600}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
    </p>
    <p className="center">
    <StaticImage
              src="../../images/Heidelberg2026/mission-time-meteodata.webp"
              loading="eager"
              width={750}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
    </p>

      <p>
        The objective is to develop models capable of reproducing the observed
        adult mosquito abundance at these locations and to estimate the
        <b> average weekly seasonal dynamics</b> of <i>Culex pipiens</i>.
        Participants are free to use any modelling framework. We would appreciate 
        being informed of any additional publicly available datasets used so that 
        they can be documented and, where appropriate, included in the shared dataset.
      </p>

      <h3>Mission Space</h3>

      <p>
        The second challenge focuses on the spatial distribution of
        <i> Culex pipiens</i>. Unlike Mission Time, no meteorological data are 
        provided. Participants are invited to develop habitat
        suitability models using any environmental predictors, occurrence
        records, or modelling techniques they consider appropriate.
      </p>

      <p>
        The expected output is a habitat suitability map on the <b>CERRA grid</b>,
        submitted either as a <b>NetCDF</b> or <b>GeoTIFF</b> file.
      </p>

      <h3>Sharing models</h3>

      <p>
        We strongly encourage participants to share the scripts used to produce
        their results. Self-contained scripts greatly facilitate reproducibility
        and will help us compare model outputs under identical environmental
        conditions. With the authors' permission, contributed models may be
        integrated into the open <XLink href="https://veclim.com">VEClim</XLink> model 
        repository, allowing the community to run and evaluate them
        interactively after the workshop.
      </p>

    </section>

  </Layout>
)

export const Head = () => <Seo title="Exercise" />

export default ExercisePage