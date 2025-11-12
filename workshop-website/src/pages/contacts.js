import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

const ContactsPage = () => (
  <Layout workshop="main">
    <h1>Contact Us</h1>
    <p>
      For inquiries about the <strong>Climate-Sensitive Vector Dynamics Modelling Workshops</strong>,
      collaborations, or data sharing, please reach out to:
    </p>

    <p style={{ marginTop: "1.5rem", fontWeight: "600" }}>
      <a href="mailto:info@vectormodelling.com" style={{ color: "#7026b9" }}>
        info@vectormodelling.com
      </a>
    </p>

    <p style={{ marginTop: "1rem", fontSize: "0.95rem", color: "gray" }}>
      Vector Modelling Workshop Coordination Team
    </p>
  </Layout>
)

export const Head = () => <Seo title="Contacts" />

export default ContactsPage
