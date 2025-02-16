import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const RegistrationPage = () => (
  <Layout workshop="Nicosia2025">
    <p>
       There are no registration fees for the workshop and the training event. However, please express your interest in participation at this LINK.
    </p>
    <p>
       The Organisation Team will provide coffee breaks and lunch. Participants are kindly requested to cover their expenses for the Gala Dinner on September 18th.
    </p>
  </Layout>
)

export const Head = () => <Seo title="Registration" />

export default RegistrationPage
