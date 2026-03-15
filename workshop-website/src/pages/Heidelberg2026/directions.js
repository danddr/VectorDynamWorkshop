import * as React from "react"
import XLink from "../../components/xlink"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const DirectionsPage = () => (
  <Layout workshop="Heidelberg2026">
    <h2>Directions</h2>
    <p>
      The workshop will be held at the{" "}
      <XLink href="https://www.iwr.uni-heidelberg.de/">
        Interdisciplinary Center for Scientific Computing (IWR)
      </XLink>
      , located at Im Neuenheimer Feld 205, 69120 Heidelberg, Germany.
    </p>

    <iframe
      title="directions-IWR"
      className="directions"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2594.3!2d8.6697!3d49.4175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4797c0000000001%3A0x1!2sIm+Neuenheimer+Feld+205%2C+69120+Heidelberg!5e1!3m2!1sen!2sde!4v1700000000000"
      width="100%"
      height="450"
      style={{ border: "0" }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

    <h3>Accommodation</h3>
    <p>
      Participants are kindly asked to arrange their own accommodation.
      Heidelberg offers a wide range of hotels and guesthouses. Hotels near the
      Neuenheimer Feld campus or Heidelberg city centre are convenient for
      reaching the venue. Some options close to the venue include:{" "}
      <XLink href="https://all.accor.com/booking/en/ibis/hotel/1447?destination=69-heidelberg-germany&compositions=1&dateIn=2026-03-15&dateOut=2026-03-16&nights=1&hideWDR=false&accessibleRoom=false">
        ibis Heidelberg Hauptbahnhof
      </XLink>
      ,{" "}
      <XLink href="https://www.premierinn.com/de/en/hotels/germany/baden-wurttemberg/heidelberg/heidelberg-city-zentrum.html">
        Premier Inn Heidelberg City (Zentrum)
      </XLink>
      , and{" "}
      <XLink href="https://www.intercityhotel.com/en/hotels/germany/heidelberg/intercityhotel-heidelberg">
        IntercityHotel Heidelberg
      </XLink>
      . Please contact the hotels directly to inquire about availability and
      booking conditions.
    </p>

    <h3>Getting to IWR</h3>
    <p>
      The IWR building is located within the Neuenheimer Feld campus of
      Heidelberg University. From Heidelberg Hauptbahnhof (main train station),
      the venue can be reached in approximately 10–15 minutes by tram, bus,
      taxi, or bicycle. The campus is well connected by public transport and
      bicycle routes.
    </p>

    <h4>Public Transport</h4>
    <p>
      Several bus and tram lines connect the city centre and main station to the
      Neuenheimer Feld campus. Typical connections include tram lines 24 or 21
      toward Handschuhsheim, or bus lines serving Neuenheimer Feld. The closest
      stops are <strong>Bunsengymnasium</strong> or <strong>Jahnstraße</strong>,
      followed by a short walk to Im Neuenheimer Feld 205. Local public
      transport is operated by{" "}
      <XLink href="https://www.rnv-online.de/en/">RNV</XLink>.
    </p>

    <h3>How to Get Here</h3>

    <h4>By Air</h4>
    <p>
      The nearest major airport is{" "}
      <XLink href="https://www.frankfurt-airport.com/en.html">
        Frankfurt International Airport (FRA)
      </XLink>{" "}
      (approximately 80 km). Direct trains run from Frankfurt Airport to
      Heidelberg Hauptbahnhof every hour, with a journey time of about 45–60
      minutes.
    </p>

    <h4>By Train</h4>
    <p>
      Heidelberg is well connected by train to major European cities. Typical
      travel times: Frankfurt Airport (~1 hour), Stuttgart (~40 minutes), Munich
      (~3 hours), Paris (~3–4 hours). Tickets can be booked via{" "}
      <XLink href="https://www.bahn.com/en">Deutsche Bahn (DB)</XLink> online
      or through their mobile app. From Heidelberg Hauptbahnhof, take a tram,
      bus, taxi, or bicycle to the Neuenheimer Feld campus.
    </p>

    <h4>By Bus</h4>
    <p>
      Long-distance buses are an affordable alternative for travelling across
      Germany.{" "}
      <XLink href="https://www.flixbus.com/">FlixBus</XLink> offers routes to
      numerous destinations with flexible schedules, often at lower prices than
      train fares.
    </p>

    <h4>By Car</h4>
    <p>
      Heidelberg is accessible via the A5 and A656 motorways. Follow signs
      toward Heidelberg / Neuenheimer Feld / Universität. Parking is available
      in designated campus parking areas near the IWR building. Car rentals are
      available from companies such as Sixt, Europcar, and Hertz.
    </p>

    <h4>By Bike</h4>
    <p>
      Heidelberg is a bike-friendly city with dedicated lanes and rental
      options. Services like{" "}
      <XLink href="https://www.nextbike.de/en/">Nextbike</XLink> or{" "}
      <XLink href="https://www.donkey.bike/">Donkey Republic</XLink> allow you
      to rent bikes for short or longer periods.
    </p>

    <h3>Meals</h3>
    <p>
      Coffee breaks and lunch will be provided during the workshop. In the
      evening, participants can explore the many restaurants and cafés in
      Heidelberg's historic city centre.
    </p>

    <h3>Other Useful Information</h3>

    <h4>Weather in Heidelberg</h4>
    <p>
      November in Heidelberg is typically cool and autumnal, with shorter days
      and occasional rain. Temperatures usually range from around 2°C to 9°C,
      with roughly 15 rainy days during the month. Warm and waterproof clothing
      is recommended.
    </p>

    <h4>Currency</h4>
    <p>
      Germany uses the Euro (€). If you are travelling from outside Europe, it
      is advisable to arrive with Euros.
    </p>

    <h4>Emergency Contacts</h4>
    <ul>
      <li>
        <strong>Emergency number:</strong> 112
      </li>
      <li>
        <strong>Heidelberg University Hospital:</strong> Im Neuenheimer Feld
        430, 69120 Heidelberg — Tel:{" "}
        <XLink href="tel:+496221560">+49 6221 56-0</XLink>
      </li>
    </ul>
  </Layout>
)

export const Head = () => <Seo title="Directions" />
export default DirectionsPage