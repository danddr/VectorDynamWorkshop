import * as React from "react"

import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const DirectionsPage = () => (
  <Layout workshop="Bologna2024">
    <h2>Directions</h2>
    <p>
        The workshop will be held at the Palazzo Regione Emilia Romagna, located at Viale Aldo Moro 21, Bologna, in room 417c.<br/> 

        The venue is conveniently situated approximately 15-20 minutes by bus from the Bologna Train Station.
    </p>

    <iframe title="direct-PRER" className={"directions"} src="https://www.openstreetmap.org/export/embed.html?bbox=11.357315182685854%2C44.50920186655477%2C11.360667943954468%2C44.510873616520065&amp;layer=mapnik&amp;marker=44.51003774753121%2C11.35899156332016" style={{border:"1px solid black"}}></iframe><br/><small><XLink href="https://www.openstreetmap.org/?mlat=44.51004&amp;mlon=11.35899#map=19/44.51004/11.35899">View Larger Map</XLink></small>
  </Layout>
)

export const Head = () => <Seo title="Directions" />

export default DirectionsPage
