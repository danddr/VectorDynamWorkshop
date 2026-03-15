import * as React from "react"

import { Link } from "gatsby"
import XLink from "../../components/xlink"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const RegistrationPage = () => (
  <Layout workshop="Heidelberg2026">
    <p>
    There are no registration fees for attending the workshop. However, places are limited due to logistical constraints and to foster active participation and meaningful discussion. Given these constraints, invitations to attend will be extended by our Scientific Committee.
    </p>
    <p>
    To register your interest, kindly complete the <XLink href=" TOBEADDED ">participation form</XLink> by the <b>XX May 2026<sup>th</sup></b>.
    </p>
    <p>
    Coffee breaks and lunch will be provided by the organising team.
    </p>
  </Layout>
)

export const Head = () => <Seo title="Registration" />

export default RegistrationPage
