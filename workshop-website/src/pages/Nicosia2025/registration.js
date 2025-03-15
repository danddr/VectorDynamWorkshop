import * as React from "react"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const RegistrationPage = () => (
  <Layout workshop="Nicosia2025">
    <p>
       There are no registration fees for the workshop or the training event. However, to encourage active participation in discussions, we have decided to limit the number of attendees to 60. Please express your interest in participating through this <a href="https://docs.google.com/forms/d/e/1FAIpQLScx8OcZ8_uUmox0c8WNcSz5jQ490KqBxuQvbt94Gdakc40naQ/viewform?usp=dialog">participation form</a>.
    </p>
    <p>
       The Organisation Team will provide coffee breaks and lunch. Participants are kindly requested to cover their expenses for the Gala Dinner on September 18th.
    </p>
  </Layout>
)

export const Head = () => <Seo title="Registration" />

export default RegistrationPage
