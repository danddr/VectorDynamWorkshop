import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"
import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const DirectionsPage = () => (
  <Layout workshop="Trento2026">
    <h2>Directions</h2>    
    <p>
      The workshop will be held at <XLink href="https://www.muse.it/">MUSE - Museo delle Scienze</XLink>, located at Corso del Lavoro e della Scienza, 3, 38122 Trento, Italy.
    </p>

<iframe
      title="directions-MUSE"
      className="directions"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1297.7805640341192!2d11.114230729390853!3d46.06286905902759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47827151fceb92e9%3A0x7eb8c485fc7a5141!2sMUSE%20-%20Museo%20delle%20Scienze!5e1!3m2!1sit!2sit!4v1762948710912!5m2!1sit!2sit"
      width="100%"
      height="450"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

    <h3>Accommodation</h3>
    <p>
      We recommend that you arrange your own accommodation while in Trento. 
      The following hotels may offer discounted rates for Vector Modelling Workshop participants. 
      Please contact the hotels directly to inquire about availability and booking conditions. 
      All prices generally include bed and breakfast.
    </p>

    <ol>
      <li>
        <h5>TBA (To Be Announced)</h5>
        <p>Further information on partner hotels will be provided soon.</p>
      </li>
    </ol>

    <h3>Getting to MUSE</h3>
    <p>
      The venue is a 10-minute walk from Trento city centre and about 15 minutes from the main train station. 
      The museum is well connected by local bus routes or by taxi.
    </p>

    <h3>Meals</h3>
    <p>
      Coffee breaks and lunch will be provided during the workshop. 
      In the evening, participants can explore the wide selection of restaurants and cafés around the city centre. 
    </p>

    <h3>How to get here</h3>
    <h4>Airports</h4>
    <p>
      The nearest major airports are:
    </p>
    <ul>
      <li>
        <XLink href="https://www.aeroportoverona.it/">Verona Villafranca Airport</XLink> (90 km)
      </li>
      <li>
        <XLink href="https://www.trevisoairport.it/">Treviso Airport</XLink> (125 km)
      </li>
      <li>
        <XLink href="https://www.veneziaairport.it/">Venice Marco Polo Airport</XLink> (150 km)
      </li>
      <li>
        <XLink href="https://www.bologna-airport.it/en/">Bologna Airport</XLink> (200 km)
      </li>
    </ul>
    <p>
      All airports are connected to Trento by train or shuttle bus via Verona Porta Nuova station. 
      Travel times range from 1 to 3 hours depending on the airport and connection.
    </p>

    <h4>By Train</h4>
    <p>
       Trento is easily accessible by train from Verona (1 hour), Milan (2.5 hours), Venice (2.5 hours), and Bologna (3 hours). 
  It can also be reached from Innsbruck (about 3 hours) via the Brenner railway line. 
  The <XLink href="https://www.trenitalia.com/">Trenitalia</XLink>, <XLink href="https://www.italotreno.it/">Italo</XLink>, 
  and <XLink href="https://www.oebb.at/en/">ÖBB (Austrian Railways)</XLink> websites provide updated timetables and ticket options.
    </p>

    <h4>By Car</h4>
    <p>
      Trento is located along the A22 (Brenner) motorway, which connects Verona and Innsbruck. 
      The recommended exit is "Trento Sud," from which the MUSE can be reached in about 10 minutes by car.
    </p>

    <h3>Other useful information</h3>
    <h4>Weather in Trento</h4>
    <p>
      In February, the weather is typically cold, with daytime temperatures ranging from 2°C to 10°C. 
      Warm clothing is recommended, especially for the evenings.
    </p>
  </Layout>
)

export const Head = () => <Seo title="Directions" />

export default DirectionsPage
