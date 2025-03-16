import * as React from "react"

import { Link } from "gatsby"
import XLink from "../../components/xlink"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const RegistrationPage = () => (
  <Layout workshop="Nicosia2025">
    <p>
    There are no registration fees for attending the workshop or training sessions. However, places are limited due to logistical constraints and to foster active participation and meaningful discussion.
    </p>
    <p>
    In addition to the workshop, we will hold two specialized training sessions:
    </p>
    <ul>
      <li>A pre-workshop advanced modelling session</li>
      <li>A post-workshop session on GIS-based early warning support systems</li>
    </ul>
    <p>
    Please refer to the <Link to="/Nicosia2025/program">program</Link> for detailed requirements for each session. To register your interest in attending, kindly complete the <XLink href="https://docs.google.com/forms/d/e/1FAIpQLScx8OcZ8_uUmox0c8WNcSz5jQ490KqBxuQvbt94Gdakc40naQ/viewform?usp=dialog">participation form</XLink>.
    </p>
    <p>
    Coffee breaks and lunches will be provided by the organising team. Participants are kindly asked to cover their own expenses for the Gala Dinner on September 18<sup>th</sup>.
    </p>
  </Layout>
)

export const Head = () => <Seo title="Registration" />

export default RegistrationPage
