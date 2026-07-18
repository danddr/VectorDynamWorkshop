import * as React from "react"
import "./program.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import XLink from "../../components/xlink"

const ProgramPage = () => (
  <Layout workshop="Heidelberg2026">
    <p>
      <b>
        Please note that the programme, and so the presentations' title,  is preliminary and may evolve to adapt to speakers' availability and session needs.
      </b>
    </p>

    {/* DAY 0 */}
    <section className="day-section">
      <h2>~16 November 2026 — Online (Pre-workshop Webinar)</h2>
      <table>
        <thead>
          <tr>
            <th className="center">Time</th>
            <th className="center">Topic</th>
            <th className="center">Speaker</th>
          </tr>
        </thead>
        <tbody>

          {/* Webinar header */}
          <tr className="session-header">
            <td colSpan="3">
              <span className="session-title">Webinar: An overview of ready-to-use dashboards for VBD management and pandemic preparedness</span>
            </td>
          </tr>

          <tr>
            <td>12:00 – 12:10</td>
            <td className="center">Welcome speech</td>
            <td className="center">Organising Committee</td>
          </tr>

          <tr>
            <td>12:10 – 13:00</td>
            <td className="center">Dashboard overview</td>
            <td className="center">
              Kamil Erguler (VEClim)<br />
              Cédric Marsboom (MOOD Platform)<br />
              Stephanie Thomas (BayByeMos)<br />
              Sergio Natal (CLIMOS)<br />
              Rachel Lowe (EpiOutlook)
            </td>
          </tr>

          <tr>
            <td>13:00 – 13:30</td>
            <td className="center"><span className="emph">Roundtable discussion + Q&A </span></td>
            <td className="center">All participants</td>
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
            </td>
          </tr>

          <tr>
            <td>09:30 – 10:30</td>
            <td><span className="emph">What data do we have available for modelling the WNV enzootic cycle?</span></td>
            <td className="center">
              Cédric Marsboom<br />
              Julian Heiber<br />
              Alex Richter-Boix<br />
              Reina Sikkema<br />
              David Roiz<br />
               
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
              <span className="emph"><i>3 early-career researchers, 5 min each — poster previews</i></span>
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
            <td>Ensemble forecasting</td>
            <td className="center">Johannes Bracher</td>
          </tr>

          <tr>
            <td>14:20 – 14:40</td>
            <td>Joint modelling of USUV &amp; WNV</td>
            <td className="center">Quirine Ten Bosch</td>
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
              <span className="emph"><i>3 early-career researchers, 5 min each — poster previews</i></span>
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
              <span className="session-subtitle"> — Stakeholder involvement and effective communication</span>
            </td>
          </tr>

          <tr>
            <td>09:00 – 10:30</td>
            <td className="center"><span className="emph">Group discussion</span></td>
            <td className="center">
              Joacim Rocklöv<br />
              Angela Okune
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
            <td>Joint presentation and discussion of the <em>Culex pipiens</em> dynamics <XLink href="https://www.vectormodelling.com/Heidelberg2026/exercise/">modelling challenge</XLink></td>
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
              <span className="session-title">Session 3: Protocols for projections and prediction challenges</span>
            </td>
          </tr>

          <tr>
            <td>14:00 – 15:30</td>
            <td className="center"><span className="emph">Discussion: protocols for projections and prediction challenges</span></td>
            <td className="center">Stella Dafka &amp; Johannes Bracher</td>
          </tr>

          <tr>
            <td>15:30 – 16:00</td>
            <td className="center"><span className="emph">Wrap-up, roadmap, and next steps</span></td>
            <td className="center">All participants</td>
          </tr>

        </tbody>
      </table>
  

    </section>

    <p>
      <b>The social dinner will be on the evening of 25 November 2026. More information to come.</b>
    </p>



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
              <span className="session-title">Session 1: Training — data and modelling tools</span>
            </td>
          </tr>

          <tr>
            <td>08:30 – 09:30</td>
            <td>Introduction to spatiotemporal machine learning — hands-on tutorials in R</td>
            <td className="center">Daniele Da Re</td>
          </tr>

          <tr>
            <td>09:30 – 10:30</td>
            <td>Introduction to ODE modelling in R</td>
            <td className="center">TBA</td>
          </tr>

          <tr>
            <td>10:30 – 11:00</td>
            <td colSpan="2" className="center light">☕ Coffee break &amp; Poster session</td>
          </tr>

          {/* Session 2 header */}
          <tr className="session-header">
            <td colSpan="3">
              <span className="session-title">Session 2: Training — climate change attribution</span>
            </td>
          </tr>

          <tr>
            <td>11:00 – 12:00</td>
            <td>Introduction to climate change attribution</td>
            <td className="center">Stella Dafka</td>
          </tr>

          <tr>
            <td>12:00 – 12:30</td>
            <td className="center"><span className="emph">Wrap-up, roadmap, and next steps</span></td>
            <td className="center">All participants</td>
          </tr>

        </tbody>
      </table>
    </section>

  </Layout>
)

export const Head = () => <Seo title="Program" />
export default ProgramPage