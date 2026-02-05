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

    <section className="day-section">
      <h2>10 February 2026 — MUSE, Trento (Italy)</h2>

      <h3>Morning Session</h3>
      <table>
        <thead>
          <tr>
            <th className="center">Time</th>
            <th className="center">Topic</th>
            <th className="center">Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>08:30 – 09:00</td>
            <td className="center">Registration</td>
            <td className="center">—</td>
          </tr>

          <tr>
            <td>09:00 – 09:10</td>
            <td className="center">Institutional welcome</td>
            <td className="center">MUSE and FEM Directors</td>
          </tr>

          <tr>
            <td>09:10 – 09:30</td>
            <td>
              Alien <i>Aedes</i> species: from monitoring to dissemination with a participatory approach
            </td>
            <td>Valeria Lencioni</td>
          </tr>

          <tr>
            <td>09:30 – 10:00</td>
            <td>
              <i>Aedes koreicus</i> in Europe: invasion history, dispersal, and perspectives from ongoing research
            </td>
            <td>Kornélia Kurucz</td>
          </tr>

          <tr>
            <td>10:00 – 10:30</td>
            <td>
             Temperature as a central driver of <i>Aedes koreicus</i> biology, ecology and vector potential
            </td>
            <td>Maria Vittoria Mancini</td>
          </tr>

          <tr>
            <td>10:30 – 11:00</td>
            <td>
             What do we know about <i>Aedes koreicus'</i> vector competence?
            </td>
            <td>Federica Gobbo</td>
          </tr>

          <tr>
            <td>11:00 – 11:30</td>
            <td colSpan="2" className="center light">☕ Coffee break</td>
          </tr>

          <tr>
            <td>11:30 – 11:55</td>
            <td>
              Monitoring and surveillance of <i>Aedes koreicus</i> spread
            </td>
            <td>Fabrizio Montarsi</td>
          </tr>

          <tr>
            <td>11:55 – 12:20</td>
            <td>
              Challenges related to the optical recognition of the eggs of four Aedine mosquito species
            </td>
            <td>Eleonora Flacio</td>
          </tr>

          <tr>
            <td>12:20 – 12:45</td>
            <td>
              Modelling <i>Aedes koreicus</i>: overview of correlative and mechanistic approaches — what we know, what we can do, and what is missing
            </td>
            <td>Daniele Da Re &amp; Giovanni Marini</td>
          </tr>

          {/* TurboTalks block */}
          <tr>
            <td rowSpan="4">12:45 – 13:00</td>
            <td colSpan="2" className="center">
              <span className="strong">TurboTalks</span>
              <br />
              <span className="emph">Short updates and methods in <i>Ae. koreicus</i> research</span>
            </td>
          </tr>
          <tr>
            <td>12:45 — Friend or foe? <i>Asaia</i> as a paratransgenic tool in <i>Aedes koreicus</i></td>
            <td>Romina Bahrami</td>
          </tr>
          <tr>
            <td>
              12:50 — Detection of <i>Aedes koreicus</i> in Vienna Central Cemetery: overcoming misidentification through multiplex PCR
            </td>
            <td>Tanto Situmorang</td>
          </tr>
          <tr>
            <td>12:55 — Revealing swarming behaviour in <i>Aedes koreicus</i> using 3D tracking</td>
            <td>Roberta Spaccapelo</td>
          </tr>
      

          <tr>
            <td>13:00 – 14:30</td>
            <td colSpan="2" className="center light">🍴 Lunch &amp; poster session</td>
          </tr>
        </tbody>
      </table>

      <h3>Afternoon Session</h3>
      <table>
        <thead>
          <tr>
            <th className="center">Time</th>
            <th className="center">Topic</th>
            <th className="center">Speaker</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>14:30 – 15:45</td>
            <td>
              <span className="strong">Group discussion:</span> research and surveillance priorities for <i>Aedes koreicus</i>
            </td>
            <td>All participants</td>
          </tr>

          <tr>
            <td>15:45 – 16:00</td>
            <td colSpan="2" className="center light">☕ Coffee break</td>
          </tr>

          <tr>
            <td>16:00 – 16:30</td>
            <td>
              <span className="strong">Plenary feedback and synthesis</span>
            </td>
            <td>Session moderators</td>
          </tr>

          <tr>
            <td>16:30 – 17:00</td>
            <td>Wrap-up and closing remarks</td>
            <td>Organising Committee</td>
          </tr>
        </tbody>
      </table>
    </section>
  </Layout>
)

export const Head = () => <Seo title="Program" />

export default ProgramPage
