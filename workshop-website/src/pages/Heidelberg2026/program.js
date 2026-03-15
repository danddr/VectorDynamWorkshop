import * as React from "react"
import "./program.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import XLink from "../../components/xlink"

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
            <td>TBD</td>
            <td>
              <span className="strong">Early warning systems and platforms for vector-borne diseases</span>
              <br />
              <span className="emph">A 90-minute webinar presenting operational tools and platforms for disease surveillance and early warning</span>
            </td>
            <td>TBD</td>
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
            <td>09:00 – 09:10</td>
            <td className="center">Welcome speech</td>
            <td className="center">Organising Committee</td>
          </tr>

          <tr>
            <td>09:10 – 10:30</td>
            <td>
              <span className="strong">Session 1: West Nile Virus — data</span>
              <br />
              <span className="emph">
                Available data for modelling the WNV enzootic cycle: entomological, epidemiological, biodiversity, and citizen science data
              </span>
            </td>
            <td>TBD</td>
          </tr>

          <tr>
            <td>10:30 – 11:00</td>
            <td colSpan="2" className="center light">☕ Coffee break &amp; Poster session</td>
          </tr>

          <tr>
            <td>11:00 – 12:30</td>
            <td>
              <span className="strong">Session 2: West Nile Virus — modelling</span>
              <br />
              <span className="emph">
                Biodiversity, mobility, and vector competence in WNV transmission
              </span>
              <br />
              <span className="emph"><i>Incl. Turbo talks: 5-min poster previews by early-career researchers</i></span>
            </td>
            <td>TBD</td>
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
          <tr>
            <td>14:00 – 15:30</td>
            <td>
              <span className="strong">Session 3: Ensemble forecasting and early warning</span>
              <br />
              <span className="emph">
                Multimodel ensemble approaches, nowcasting, and community prediction challenges
              </span>
              <br />
              <span className="emph"><i>Incl. Turbo talks: 5-min poster previews by early-career researchers</i></span>
            </td>
            <td>TBD</td>
          </tr>

          <tr>
            <td>15:30 – 16:00</td>
            <td colSpan="2" className="center light">☕ Coffee break &amp; Poster session</td>
          </tr>

          <tr>
            <td>16:00 – 17:00</td>
            <td>
              <span className="strong">Session 4: Exploratory modelling</span>
              <br />
              <span className="emph">Discussion of models under construction</span>
            </td>
            <td>TBD</td>
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
          <tr>
            <td>09:00 – 10:30</td>
            <td>
              <span className="strong">Session 1: Discussion</span>
              <br />
              <span className="emph">
                Stakeholder involvement, effective communication, and climate change attribution
              </span>
            </td>
            <td>Session moderators</td>
          </tr>

          <tr>
            <td>10:30 – 11:00</td>
            <td colSpan="2" className="center light">☕ Coffee break &amp; Poster session</td>
          </tr>

          <tr>
            <td>11:00 – 12:30</td>
            <td>
              <span className="strong">Session 2: Modelling challenge</span>
              <br />
              <span className="emph">TBD</span>
            </td>
            <td>TBD</td>
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
          <tr>
            <td>14:00 – 17:00</td>
            <td>
              <span className="strong">Session 3: Data, code, and training</span>
              <br />
              <span className="emph">Platforms and packages for researchers and users</span>
              <br />
              <span className="emph">Protocols for projections and prediction challenges</span>
              <br />
              <span className="emph">Wrap-up and roadmap discussion</span>
            </td>
            <td>TBD</td>
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
          <tr>
            <td>09:00 – 10:30</td>
            <td>
              <span className="strong">Session 1: Training</span>
              <br />
              <span className="emph">
                Introduction to climate-sensitive vector-borne disease modelling, tools, and datasets
              </span>
            </td>
            <td>TBD</td>
          </tr>

          <tr>
            <td>10:30 – 11:00</td>
            <td colSpan="2" className="center light">☕ Coffee break</td>
          </tr>

          <tr>
            <td>11:00 – 12:30</td>
            <td>
              <span className="strong">Session 2: Predictive model challenge</span>
              <br />
              <span className="emph">Hands-on training session</span>
            </td>
            <td>TBD</td>
          </tr>
        </tbody>
      </table>
    </section>

  </Layout>
)

export const Head = () => <Seo title="Program" />
export default ProgramPage