import * as React from "react"

import { Link } from "gatsby"
import XLink from "../../components/xlink"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const RegistrationPage = () => (
  <Layout workshop="Heidelberg2026">
    <p>
    There are <b>no registration fees</b> for attending the workshop. <b>However, places are limited</b> due to logistical constraints and to foster active participation and meaningful discussion. Given these constraints, invitations to attend will be extended by our Scientific Committee.
    </p>
    <p>
    <b>To express your interest</b>, kindly complete the <XLink href="https://docs.google.com/forms/d/e/1FAIpQLSdyJEc-yJUe3B45Bc_i0aPFcHMt_N98uu5x8fQtqmEJnNOtTQ/viewform?usp=header">participation form</XLink> by the <b>17 June 2026</b>.
    </p>
    <p>
    Coffee breaks and lunch will be provided by the organising team.
    </p>
  </Layout>
)

export const Head = () => <Seo title="Registration" />

export default RegistrationPage
