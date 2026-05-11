import * as React from "react"
import "./program.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ProgramPage = () => (
  <Layout workshop="Heidelberg2026">
    <p>
      <b>
        Please note that the programme is preliminary and may evolve to adapt to speakers' availability and session needs.
      </b>
    </p>

    {/* DAY 0 */}
    <section className="day-section">
      <h2>~18 November 2026 — Online (Pre-workshop Webinar)</h2>
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
            <td>TBA</td>
            <td>
              <span className="strong">Early warning systems and platforms for vector-borne diseases</span>
              <br />
              <span className="emph">A 90-minute webinar presenting operational tools and platforms for disease surveillance and early warning</span>
            </td>
            <td>TBA</td>
          </tr>
        </tbody>
      </table>
    </section>

    {/* DAY 1 */}
    <section className="day-section">
      <h2>24 November 2026 — IWR, Heidelberg (Germany)</h2>

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
            <td className="center">Welcome and registration</td>
            <td className="center">—</td>
          </tr>

          <tr>
            <td>08:50 – 09:00</td>
            <td className="center">Welcome speech</td>
            <td className="center">Organising Committee</td>
          </tr>

          <tr>
            <td>09:00 – 09:30</td>
            <td><span className="strong">Keynote: Overview of West Nile virus in Europe and the USA</span></td>
            <td className="center">Wim Van Bortel</td>
          </tr>

          {/* Session 1 header */}
          <tr className="session-header">
            <td colSpan="3">
              <span className="session-title">Session 1: West Nile Virus — data</span>
              <span className="session-subtitle"> — Panel discussion</span>
            </td>
          </tr>

          <tr>
            <td>09:30 – 10:30</td>
            <td><span className="emph">What data do we have available for modelling the WNV enzootic cycle?</span></td>
            <td className="center">
              Cédric Marsboom<br />
              Julian Heiber<br />
              Alex Richter-Boix<br />
              TBA
            </td>
          </tr>

          <tr>
            <td>10:30 – 11:00</td>
            <td colSpan="2" className="center light">☕ Coffee break &amp; Poster session</td>
          </tr>

          {/* Session 2 header */}
          <tr className="session-header">
            <td colSpan="3">
              <span className="session-title">Session 2: West Nile Virus — modelling</span>
            </td>
          </tr>

          <tr>
            <td>11:00 – 11:20</td>
            <td>TBA</td>
            <td className="center">Giovanni Marini</td>
          </tr>

          <tr>
            <td>11:20 – 11:40</td>
            <td>TBA</td>
            <td className="center">Pride Duvel</td>
          </tr>

          <tr>
            <td>11:40 – 12:00</td>
            <td>TBA</td>
            <td className="center">Renke Lühken</td>
          </tr>

          <tr>
            <td>12:00 – 12:30</td>
            <td className="center"><span className="emph">Question time and discussion</span></td>
            <td className="center">Session moderators</td>
          </tr>

          <tr>
            <td>12:30 – 12:45</td>
            <td>
              <span className="strong">Turbo talks</span>
              <br />
            </td>
            <td className="center">—</td>
          </tr>

          <tr>
            <td>12:45 – 14:00</td>
            <td colSpan="2" className="center light">🍴 Lunch &amp; Poster session</td>
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

          {/* Session 3 header */}
          <tr className="session-header">
            <td colSpan="3">
              <span className="session-title">Session 3: Ensemble forecasting and early warning</span>
            </td>
          </tr>

          <tr>
            <td>14:00 – 14:20</td>
            <td>TBA</td>
            <td className="center">Johannes Bracher</td>
          </tr>

          <tr>
            <td>14:20 – 14:40</td>
            <td>TBA</td>
            <td className="center">TBA</td>
          </tr>

          <tr>
            <td>14:40 – 15:10</td>
            <td className="center"><span className="emph">Question time and discussion</span></td>
            <td className="center">Session moderators</td>
          </tr>

          <tr>
            <td>15:10 – 15:30</td>
            <td>
              <span className="strong">Turbo talks</span>
              <br />
            </td>
            <td className="center">—</td>
          </tr>

          <tr>
            <td>15:30 – 16:00</td>
            <td colSpan="2" className="center light">☕ Coffee break &amp; Poster session</td>
          </tr>

          {/* Session 4 header */}
          <tr className="session-header">
            <td colSpan="3">
              <span className="session-title">Session 4: Exploratory modelling work</span>
            </td>
          </tr>

          <tr>
            <td>16:00 – 16:30</td>
            <td>TBA</td>
            <td className="center">Cédric Marsboom</td>
          </tr>

          <tr>
            <td>16:30 – 17:00</td>
            <td>TBA</td>
            <td className="center">Peter Fransson</td>
          </tr>

          <tr>
            <td>17:00 – 17:20</td>
            <td>TBA</td>
            <td className="center">Kamil Erguler</td>
          </tr>

        </tbody>
      </table>
    </section>

    {/* DAY 2 */}
    <section className="day-section">
      <h2>25 November 2026 — IWR, Heidelberg (Germany)</h2>

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

          {/* Session 1 header */}
          <tr className="session-header">
            <td colSpan="3">
              <span className="session-title">Session 1: Discussion</span>
              <span className="session-subtitle"> — Stakeholder involvement, effective communication, and climate change attribution</span>
            </td>
          </tr>

          <tr>
            <td>09:00 – 10:30</td>
            <td>TBA</td>
            <td className="center">
              Angela Okune<br />
              Joacim Rockloev <br />
              TBA
            </td>
          </tr>

          <tr>
            <td>10:30 – 11:00</td>
            <td colSpan="2" className="center light">☕ Coffee break &amp; Poster session</td>
          </tr>

          {/* Session 2 header */}
          <tr className="session-header">
            <td colSpan="3">
              <span className="session-title">Session 2: Modelling challenge</span>
            </td>
          </tr>

          <tr>
            <td>11:00 – 12:30</td>
            <td className="center"><span className="emph">TBA</span></td>
            <td className="center">TBA</td>
          </tr>

          <tr>
            <td>12:30 – 14:00</td>
            <td colSpan="2" className="center light">🍴 Lunch &amp; Poster session</td>
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

          {/* Session 3 header */}
          <tr className="session-header">
            <td colSpan="3">
              <span className="session-title">Session 3: Data, code, and training</span>
            </td>
          </tr>

          <tr>
            <td>14:00 – 15:00</td>
            <td>TBA</td>
            <td className="center">Stella Dafka &amp; Johannes Bracher</td>
          </tr>

          <tr>
            <td>15:00 – 16:00</td>
            <td>TBA</td>
            <td className="center">Stella Dafka &amp; Johannes Bracher</td>
          </tr>

          <tr>
            <td>16:00 – 17:00</td>
            <td className="center"><span className="emph">Wrap-up, roadmap, and next steps</span></td>
            <td className="center">All participants</td>
          </tr>

        </tbody>
      </table>
    </section>

    {/* DAY 3 */}
    <section className="day-section">
      <h2>26 November 2026 — IWR, Heidelberg (Germany)</h2>

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

          {/* Session 1 header */}
          <tr className="session-header">
            <td colSpan="3">
              <span className="session-title">Session 1: Training</span>
              <span className="session-subtitle"> — Introduction to climate-sensitive vector-borne disease modelling, tools, and datasets</span>
            </td>
          </tr>

          <tr>
            <td>09:00 – 10:30</td>
            <td>TBA</td>
            <td className="center">TBA</td>
          </tr>

          <tr>
            <td>10:30 – 11:00</td>
            <td colSpan="2" className="center light">☕ Coffee break</td>
          </tr>

          {/* Session 2 header */}
          <tr className="session-header">
            <td colSpan="3">
            <span className="session-title">Session 2: Training</span>
              <span className="session-subtitle"> — Introduction to climate-sensitive vector-borne disease modelling, tools, and datasets</span>
            </td>
          </tr>

          <tr>
            <td>11:00 – 12:30</td>
            <td>TBA</td>
            <td className="center">TBA</td>
          </tr>

        </tbody>
      </table>
    </section>

  </Layout>
)

export const Head = () => <Seo title="Program" />
export default ProgramPage