import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const RegistrationPage = () => (
  <Layout workshop="Bologna2024">
    <p>
       There are no registration fees for this workshop. The scientific committee will provide coffee breaks on September 19th-20th and lunch on September 19th. <br/> Participants are kindly requested to cover their expenses for dinner on September 19th and lunch on September 20th.
    </p>
 </Layout>
)

export const Head = () => <Seo title="Registration" />

export default RegistrationPage
