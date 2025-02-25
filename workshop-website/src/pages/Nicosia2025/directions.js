import * as React from "react"

import { StaticImage } from "gatsby-plugin-image"

import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const DirectionsPage = () => (
  <Layout workshop="Nicosia2025">
    <h2>Directions</h2>    
    <p>
        The workshop will be held at <XLink href="https://www.cyi.ac.cy/">The Cyprus Institute</XLink>, Athalassa Campus, located at 20 Konstantinou Kavafi Street, 2121 Aglantzia, Nicosia, Cyprus.
    </p>
    <iframe title="direct-CyI" className={"directions"} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3261.746593341688!2d33.37716471192545!3d35.14143017265279!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de19c615df21e5%3A0xb9673af622a4c46a!2sThe%20Cyprus%20Institute!5e0!3m2!1sen!2s!4v1737710894943!5m2!1sen!2s" width="600" height="450" style={{border:"1px solid black"}} allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

    <h3>Accommodation</h3>
    <p>
        We recommend that you arrange your own accommodation while in Nicosia. 
        The following hotels offer special prices to Vector Modelling Workshop participants, 
        but any contacts and booking must be made directly by you. 
        Please use the Cyprus Institute's name for the below rates. 
        All prices include B/B.
    </p>
    <ol>
    <li style={{display:"none"}}>
       <h5>Castelli Hotel</h5>
        <p>
            Address: 38 Ouzounian Street, Nicosia 1010<br/>
            Website: <XLink href="https://castellihotel.com.cy/">https://castellihotel.com.cy/</XLink><br/>
            Rates: Superior room single: € 69.00 / Superior room double: € 79.00 / Executive Room single € 81.00 / Executive room double € 90.00
        </p>
    </li>
    <li>
        <h5>Centrum Hotel</h5>
        <p>
            Address: Eleftherias Square, Pasikratous 15, Nicosia 1011<br/>
            Website: <XLink href="https://centrumhotelcyprus.com/">https://centrumhotelcyprus.com/</XLink><br/>
            Rates: Standard Room B&B: Single € 94.00 / Double € 99.00 / Triple € 123.00 / Fourfold € 143.00<br/>
        </p>
    </li>
    <li>
        <h5>Classic Hotel</h5>
        <p>
            Address: Rigenis 94, Nicosia 1010<br/>
            Website: <XLink href="https://classic.com.cy/">https://classic.com.cy/</XLink><br/>
            Rates: Standard Room B&B: Classic Single € 125.00 / Superior Double € 145.00<br/>
        </p>
    </li>
    <li>
        <h5>Semeli Hotel</h5>
        <p>
            Address: 10, Petraki Yiallourou Street, Nicosia 1077<br/>
            Website: <XLink href="https://www.semelihotel.com.cy/">https://www.semelihotel.com.cy/</XLink><br/>
            Rates: Standard Room B&B: Single € 88.00 / Double € 108.00<br/>
        </p>
    </li>
    </ol>

    <h3>Getting to the the Cyprus Institute</h3>
        <p>
            We organised a minibus that will take participants from the city centre to the Cyprus Institute in the morning and back in the evening. The bus will depart from the city centre at 8:30am (Solomos Sq - <XLink href="https://goo.gl/maps/MuhJD47J83uNSVr58">https://goo.gl/maps/MuhJD47J83uNSVr58</XLink>) and it will take participants back at 5:15pm.
        </p>
    
    <h3>Meals</h3>
        <p>
            Lunch and coffee break will be provided by the Cyprus Institute during the Workshop. If you wish to order something else or have food delivered in the evening, <XLink href="https://www.foody.com.cy/">Foody</XLink> and <XLink href="https://wolt.com/en/cyp">Wolt</XLink> are two of the most commonly used apps for delivery.
        </p>
    
    <h3>How to get here</h3>
    <h4>Airports</h4>
        <p>
            The easiest way to get to Cyprus is by air. There are two international airports that serve Cyprus, <XLink href="https://www.hermesairports.com/flight-info/arrivals-and-departures-lca">Larnaca Airport</XLink> and <XLink href="https://www.hermesairports.com/flight-info/arrivals-and-departures-pfo">Paphos airport</XLink>. The airport closest to the Cyprus Institute is Larnaca Airport, located 50km from Nicosia.
        </p>
    
    <h3>Immigration regulations</h3>
        <p>
            For up-to-date information on visa rules, visit the official <XLink href="https://www.gov.cy/en/information/visas/">Republic of Cyprus Ministry of Foreign Affairs</XLink> website.
        </p>
    
    
    <h3>Transportation</h3>
    <h4>Airport shuttle bus</h4>
        <p>
            You can take the Kapnos airport shuttle from and to both airports (Paphos and Larnaca) from/to Nicosia: <XLink href="https://kapnosairportshuttle.com/routes">https://kapnosairportshuttle.com/routes</XLink>.
        </p>
        <p>
            Shuttle Price - from/ to Larnaca airport: €9 one-way/€ 18 return ticket<br/>
            Shuttle Price - from/ to Paphos airport: €16 one-way / €32 return ticket
        </p>    
    
    <h4>Taxis</h4>
        <p>
            A taxi from Larnaca airport to Nicosia costs about €50 one way. There are two types of taxi services in Cyprus:
        </p>
        <ul>
            <li>Trans-city service which offers the option of sharing a taxi with 4-7 other passengers (<XLink href="https://travelexpress.com.cy/shuttlebooking.html">https://travelexpress.com.cy/shuttlebooking.html</XLink>)</li>
            <li>Inter-city taxi companies, which you book via phone or online. <XLink href="https://www.tripadvisor.com/Attractions-g190383-Activities-c59-t182-Nicosia_Nicosia_District.html">https://www.tripadvisor.com/Attractions-g190383-Activities-c59-t182-Nicosia_Nicosia_District.html</XLink></li>
        </ul>    
    
    <h3>Other useful information</h3>
    
    <h4>Weather in Cyprus</h4>
        <p>
            In late September/early October the weather is usually sunny and mild. 
            Temperature will likely be between ~27C in the day and ~15C in the evening.
        </p>

    <h4>Power sockets</h4>
        <p>
            Cyprus has UK type electric plugs shown in the figure below (220V, 50hz).<br/>
            <StaticImage
              src="../../images/cyp_plugs.png"
              loading="eager"
              width={150}
              quality={100}
              formats={["auto", "webp", "avif"]}
              alt=""
              style={{ marginBottom: `var(--space-3)` }}
            />
        </p>

    <h4>Driving</h4>
        <p>
            Driving is on the left-hand side of the road. All the international road traffic signs are in use and placed on the left-hand side of roads and highways. On roundabouts, priority is given to the right side.
        </p>
    
    <h4>Public transportation</h4>
        <p>
            The main public transport is Cyprus is buses. You can find a full timetable and ticket prices <XLink href="https://www.publictransport.com.cy/routes/page/routes-and-timetables">here</XLink>.
        </p>
    
    <h4>Currency</h4>
        <p>
            The official currency of Cyprus is Euro (€). All banks in Cyprus offer foreign exchange services.
        </p>
    
    <h4>Languages</h4>
        <p>
            The official languages of the island are Greek and Turkish, whilst English is widely spoken.
        </p>
        <p>
            You can find out more information about Cyprus <XLink href="https://www.visitcyprus.com/index.php/en/">here</XLink>.
        </p>
  </Layout>
)

export const Head = () => <Seo title="Directions" />

export default DirectionsPage
