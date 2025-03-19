import * as React from "react"

import * as styles from "../../components/table.css"
import "./program.css"

import { Link } from "gatsby"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import XLink from "../../components/xlink"

const ProgramPage = () => (
    <Layout workshop="Nicosia2025">
        <p>
            <b>Please note that the program below is a draft and will be updated soon.</b>
        </p>
      {/* Day 1 */}
      <section className="day-section">
        <h2>Day 1: 17th September 2025</h2>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity / Session</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Registration */}
            <tr>
              <td>8:30 - 9:00</td>
              <td colSpan="2" className="center">Welcome and registration</td>
            </tr>
            {/* Training Session pt1 */}
            <tr>
              <td>9:00 - 11:00</td>
              <td colSpan="2">
                <p className="center strong">
                Training session pt1 (Environmental covariates) 
                </p>
                <p>
                This session will cover environmental covariates, including where to locate appropriate datasets and how to retrieve, process, and incorporate them into climate-sensitive models. Participants are expected to have prior experience with GIS tools (e.g., ArcGIS or QGIS) and scripting languages (e.g., R or Python).
                </p>
                </td>
            </tr>
            {/* Coffee Break */}
            <tr>
              <td>11:00 - 11:30</td>
              <td colSpan="2" className="center light">Coffee Break</td>
            </tr>
            {/* Training Session pt2 */}
            <tr>
              <td>11:30 - 13:30</td>
              <td colSpan="2">
                <p className="center strong">
                Training session pt2 (Modelling 1)
                </p>
                <p>
                This session will cover ordinary differential equation (ODE) models and applications involving artificial intelligence (AI). Participants will explore fundamental concepts by developing and analysing models that incorporate environmental covariates. Prior experience with scripting languages (e.g., R, Python, or Julia) and familiarity with Linux environments are required.
                </p>
                </td>
            </tr>
            {/* Lunch */}
            <tr>
              <td>13:30 - 14:30</td>
              <td colSpan="2" className="center light">Lunch break</td>
            </tr>
            {/* Training Session pt3 */}
            <tr>
              <td>14:30 - 18:00</td>
              <td colSpan="2">
                <p className="center strong">Training session pt3 (Modelling 2)</p>
                <p>
                This session will discuss innovative modelling methodologies, including stochastic, structured, and delayed-response population dynamics models. Participants should have prior experience with Docker containers, the bash command-line interface, and scripting languages (e.g., R, Python, or Julia).
                </p>
                </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Day 2 */}
      <section className="day-section">
        <h2>Day 2: 18th September 2025</h2>

        {/* Morning */}
        <h3>Morning</h3>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity / Session</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Registration */}
            <tr>
              <td>8:30 - 9:00</td>
              <td colSpan="2" className="center">Welcome and registration</td>
            </tr>
            {/* Summary Session */}
            <tr>
              <td>9:00 - 9:30</td>
              <td colSpan="2">
                <p className="center strong">
                    Summary of the previous workshop on <i>Aedes albopictus</i>
                </p>
                <p>
                    This opening session of the Vector Modelling Workshop will introduce the workshop series' concept, summarize the discussions and outcomes from the previous workshop, held in Bologna, Italy (2024), and present the emerging ensemble model on <i>Aedes albopictus</i>.
                </p>
                </td>
            </tr>
           {/* Modelling Aedes aegypti */}
            <tr>
              <td>9:30 - 10:30</td>
              <td colSpan="2">
                <p className="center strong">
                    Modelling <i>Aedes aegypti</i>
                </p>
                <p>
                    This session will commence with a Keynote speech and is dedicated to discussing pressing issues in data collection, modelling, and early warning system design.
                </p>
                </td>
            </tr>
            {/* Coffee Break */}
            <tr>
              <td>10:30 - 11:00</td>
              <td colSpan="2" className="center light">Coffee Break</td>
            </tr>
            {/* Training Data Session */}
            <tr>
              <td>11:00 - 12:30</td>
              <td colSpan="2">
                <p className="center strong">
                    The session on surveillance data
                </p>
                <p>
                    This session will discuss the observational data requirements of climate-sensitive mathematical modelling and proceed with latest observations of <i>Aedes aegypti</i>, possible risks to public health, and effective management strategies in the Eastern Mediterranean and Middle East (EMME) region.
                </p>
              </td>
            </tr>
            {/* Lunch */}
            <tr>
              <td>12:30 - 13:30</td>
              <td colSpan="2" className="center light">Lunch</td>
            </tr>
          </tbody>
        </table>

        {/* Afternoon */}
        <h3>Afternoon</h3>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity / Session</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Models Session */}
            <tr>
              <td>13:30 - 15:30</td>
              <td colSpan="2">
                <p className="center strong">
                    Models session
                </p>
                <p>
                    This session is dedicated to the presentations of ideas and approaches to model <i>Aedes aegypti</i> dynamics and associated disease risk in the EMME region. Please find more information in this <Link to="/Nicosia2025/exercise">Exercise</Link> section.
                </p>
                </td>
            </tr>
            {/* Coffee Break */}
            <tr>
              <td>15:30 - 16:00</td>
              <td colSpan="2" className="center light">Coffee Break</td>
            </tr>
            {/* Discussion */}
            <tr>
              <td>16:00 - 18:00</td>
              <td colSpan="2">
                <p className="center strong">
                    Discussion
                </p>
                <p>
                    An extended group discussion is reserved to discuss the ideas presented, possible implications, and future actions.
                </p>
                </td>
            </tr>
          </tbody>
        </table>

        {/* Evening */}
        <h3>Evening</h3>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20:30</td>
              <td className="center light">Social Dinner (Downtown, TBA)</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Day 3 */}
      <section className="day-section">
        <h2>Day 3: 19th September 2025</h2>

        {/* Morning */}
        <h3>Morning</h3>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity / Session</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00 - 10:30</td>
              <td>
                <p className="center strong">
                    Presentation of the ensemble on <i>Aedes aegypti</i>
                </p>
                <p>
                Summary of model comparisons to guide our discussion.
                </p>
                <p>
                First group activity: What are the next steps for modeling development? Share what you found most interesting.
                </p>
                <p>
                Discussion points: Policy relevance of these models, future directions, and strategies for moving forward.
                </p>
              </td>
            </tr>
            <tr>
              <td>10:30 - 11:00</td>
              <td className="center light">Coffee Break</td>
            </tr>
            <tr>
              <td>11:00 - 12:45</td>
              <td>
                <p className="center strong">Plenary discussion</p>
                <p>
                Summary of the previous group activity: One team leader from each group will present their findings, followed by planning for a joint paper that summarizes the conference outcomes and model comparisons.
                </p>
              </td>
            </tr>
            <tr>
              <td>12:45 - 13:00</td>
              <td className="center light">Concluding remarks + questionnaire</td>
            </tr>
          </tbody>
        </table>

        {/* Afternoon */}
        <h3>Afternoon</h3>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Activity / Session</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* Training Session pt4 */}
            <tr>
              <td rowSpan="4">14:00 - 17:00</td>
              <td colSpan="2">
                <p className="center strong">Training session pt4 (Early warning dashboards)</p>
                <p>
                This session is open to all participants and does not require prior programming experience. Demonstrations of geographical information systems (GIS) and early warning support systems (e.g., the MOOD Platform and the <XLink href="https://veclim.com">VEClim Platform</XLink>) will be complemented by hands-on tutorials. Participants are encouraged to bring their laptops or other smart mobile devices to fully engage with the tutorials.
                </p>
                </td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );

export const Head = () => <Seo title="Program" />

export default ProgramPage
