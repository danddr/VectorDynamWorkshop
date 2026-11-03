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

      <h3>How to take part</h3>

      <ul>
        <li>
          <b>Mission Time:</b> train your model on any data you like and predict the
          <i> Culex pipiens</i> time series at two locations. Send one time series per location,
          following the format of the CSV files provided, to{" "}
          <a href="mailto:info@vectormodelling.com">info@vectormodelling.com</a> by{" "}
          <b>20 November 2026</b>.
        </li>
        <li>
          <b>Mission Space:</b> produce a habitat suitability prediction or seasonal abundance
          dynamics for <i>Culex pipiens</i>, using the CERRA climate data if you wish. Share your
          results and your GitHub repository, preferably by <b>20 November 2026</b>.
        </li>
      </ul>

      <h3>Mission Time</h3>

      <p>
        We provide daily meteorological data extracted from 
        the <XLink href="https://climate.copernicus.eu/copernicus-regional-reanalysis-europe">CERRA</XLink> reanalysis 
        for two study locations from 2014 to 2026:
      </p>

      <ul>
        <li><b>Petrovaradin, Serbia</b></li>
        <li><b>Larnaca, Cyprus</b></li>
      </ul>

      <p>
        Observed mosquito counts for these two locations are not shared, because they have
        not been published yet. We will compare your predictions with the observations after
        the submission deadline.
      </p>

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
        <b>What to do:</b> train your model on any data of your choice, for example the
        dataset described below or your own, and use it to predict the
        <b> average weekly seasonal dynamics</b> of <i>Culex pipiens</i> at Petrovaradin and
        Larnaca. Participants are free to use any modelling framework. We would appreciate
        being informed of any additional publicly available datasets used so that they can be
        documented and, where appropriate, included in the shared dataset.
      </p>

      <p>
        <b>What to send:</b> the predicted time series for each of the two locations, following
        the format of the CSV files provided (same dates and structure), to{" "}
        <a href="mailto:info@vectormodelling.com">info@vectormodelling.com</a> by{" "}
        <b>20 November 2026</b>.
      </p>

      <h3>Mission Space</h3>

      <p>
        The second challenge focuses on the spatial distribution of <i>Culex pipiens</i>.
        No meteorological data are provided for this mission, but you can use the{" "}
        <XLink href="https://climate.copernicus.eu/copernicus-regional-reanalysis-europe">CERRA climate data</XLink>{" "}
        as a starting point, together with any other environmental predictors, occurrence records
        or modelling techniques you consider appropriate.
      </p>

      <p>
        <b>The goal:</b> produce either a <b>habitat suitability prediction</b> or
        <b> seasonal abundance dynamics</b>, on the <b>CERRA grid</b>, as a <b>NetCDF</b> or
        <b> GeoTIFF</b> file.
      </p>

      <p>
        <b>What to send:</b> your results and a link to your GitHub repository, to{" "}
        <a href="mailto:info@vectormodelling.com">info@vectormodelling.com</a>, preferably by{" "}
        <b>20 November 2026</b>.
      </p>

      <h3>Training data</h3>

      <p>
        Longo et al. have recently published a harmonised dataset of adult <i>Culex pipiens</i> mosquito 
        abundance from 17 administrative regions across Italy, covering 2008-2022. A description of the dataset 
        is available in this <XLink href="https://ecoevorxiv.org/repository/view/14804/">preprint</XLink>, and the 
        complete dataset can be downloaded from <XLink href="https://zenodo.org/records/19494972">Zenodo</XLink>.
      </p>

      <p className="center">
      <StaticImage
              src="../../images/Heidelberg2026/Longo2026_preprint_Figure3.webp"
              loading="eager"
              width={750}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
            />
      </p>

      <p>
        You are free to train your models on any data you like. We encourage participants to make use of this
        dataset, where appropriate, to develop and calibrate their models for the two Missions described above.
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