import * as React from "react"

import "./program.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import XLink from "../../components/xlink"
import MoreText from "../../components/more"

const ProgramPage = () => (
  <Layout workshop="Trento2026">
    <p>
      <b>
        Please note that the programme is preliminary and may evolve to adapt to speakers’ availability and session needs.
      </b>
    </p>

    {/* Day 1 */}
    <section className="day-section">
      <h2>10 February 2026 — MUSE, Trento (Italy)</h2>
      <h3>Morning Session</h3>

      <table>
        <thead>
          <tr>
            <th className="center">Time</th>
            <th className="center">Activity</th>
            <th className="center">Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>08:00 – 08:30</td>
            <td className="center">Registration</td>
            <td className="center">—</td>
          </tr>
          <tr>
            <td>08:30 – 08:40</td>
            <td className="center">Opening remarks</td>
            <td className="center">Director, MUSE</td>
          </tr>
          <tr>
            <td>08:40 – 09:00</td>
            <td>
              Alien <i>Aedes</i> species: from monitoring to dissemination with a participatory approach
            </td>
            <td>Valeria Lencioni</td>
          </tr>
          <tr>
            <td>09:00 – 09:30</td>
            <td>
              Plenary on the <i>Aedes koreicus</i> invasion and dispersal in Europe
            </td>
            <td>Kornelia Kuruncz</td>
          </tr>
          <tr>
            <td>09:30 – 10:00</td>
            <td>
              Mosquito biology: bionomics, thermal performance curves, comparison with <i>Ae. albopictus</i>, and recent findings
            </td>
            <td>Maria Vittoria Mancini</td>
          </tr>
          <tr>
            <td>10:00 – 10:15</td>
            <td>
              Virology: vector competence for dengue virus (DENV)
            </td>
            <td>Federica Gobbo</td>
          </tr>
          <tr>
            <td>10:15 – 10:30</td>
            <td>To be announced</td>
            <td>—</td>
          </tr>
          <tr>
            <td>10:30 – 11:00</td>
            <td colSpan="2" className="center light">☕ Coffee Break</td>
          </tr>
          <tr>
            <td>11:00 – 11:30</td>
            <td>
              Monitoring and surveillance of <i>Aedes koreicus</i>
            </td>
            <td>Fabrizio Montarsi</td>
          </tr>
          <tr>
            <td>11:30 – 11:50</td>
            <td>
              Modelling approaches: overview of correlative and mechanistic frameworks — what we know, what we can do, and what is missing
            </td>
            <td>Daniele Da Re, Giovanni Marini</td>
          </tr>
          <tr>
            <td>11:50 – 12:05</td>
            <td>Surveillance Challenges Related to the Optical Recognition of Multiple Co-occurring Aedes Mosquito Species in Their Invasive Range</td>
            <td>Eleonora Flacio</td>
          </tr>
          <tr>
            <td rowSpan="5">12:05 – 12:30</td>
            <td colSpan="2" className="center">
              <span className="strong">TurboTalks (5 min each)</span><br/>
              TT1 – TT4
            </td>
          </tr>
          <tr>
            <td>12:30 – 14:00</td>
            <td colSpan="2" className="center light">🍴 Lunch & Poster Session</td>
          </tr>
        </tbody>
      </table>

      <h3>Afternoon Session</h3>
      <table>
        <thead>
          <tr>
            <th className="center">Time</th>
            <th className="center">Activity</th>
            <th className="center">Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>14:00 – 15:15</td>
            <td>
              <span className="strong">Group Discussion:</span> Research and surveillance priorities for <i>Aedes koreicus</i>
            </td>
            <td>All participants</td>
          </tr>
          <tr>
            <td>15:15 – 15:30</td>
            <td colSpan="2" className="center light">☕ Coffee Break</td>
          </tr>
          <tr>
            <td>15:30 – 16:15</td>
            <td>
              <span className="strong">Plenary feedback and synthesis</span>
            </td>
            <td>Session moderators</td>
          </tr>
          <tr>
            <td>16:15 – 16:30</td>
            <td>
              Wrap-up and closing remarks
            </td>
            <td>Organising Committee</td>
          </tr>
        </tbody>
      </table>

    </section>
  </Layout>
)

export const Head = () => <Seo title="Program" />

export default ProgramPage
