import * as React from "react"

import * as styles from "../../components/table.css"
import "./program.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ProgramPage = () => (
    <Layout workshop="Nicosia2025">
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
              <td rowSpan="3">9:00 - 11:00</td>
              <td colSpan="2" className="center strong">Training session pt1 (Environmental covariates) </td>
            </tr>
            <tr>
              <td>9:00</td>
              <td>CDS and ERAland and similar environmental datacubes - Cyril(?)</td>
            </tr>
            <tr>
              <td>10:00</td>
              <td> Guest Lecture - TBA</td>
            </tr>
            {/* Coffee Break */}
            <tr>
              <td>11:00 - 11:30</td>
              <td colSpan="2" className="center light">Coffee Break</td>
            </tr>
            {/* Training Session pt2 */}
            <tr>
              <td rowSpan="3">11:30 - 13:30</td>
              <td colSpan="2" className="center strong">Training session pt2 (Modelling 1)</td>
            </tr>
            <tr>
              <td>11:30</td>
              <td>Deterministic and ODE Models - Pachka (?)</td>
            </tr>
            <tr>
              <td>12:30</td>
              <td>Combining Neural Networks and ODE Models - Mina (?)</td>
            </tr>
            {/* Lunch */}
            <tr>
              <td>13:30 - 14:30</td>
              <td colSpan="2" className="center light">Lunch break</td>
            </tr>
            {/* Training Session pt3 */}
            <tr>
              <td rowSpan="6">14:30 - 18:00</td>
              <td colSpan="2" className="center strong">Training session pt3 (Modelling 2)</td>
            </tr>
            <tr>
              <td>14:30</td>
              <td>Stochastic models: dynamAedes - Daniele</td>
            </tr>
            <tr>
              <td>15:30 - 15:45</td>
              <td colSpan="2" className="center light">Coffee Break</td>
            </tr>
            <tr>
              <td>15:45</td>
              <td>Structured population models: sPop and PopJSON - Kamil</td>
            </tr>
            <tr>
              <td>16:45 - 17:00</td>
              <td colSpan="2" className="center light">Coffee Break</td>
            </tr>
            <tr>
              <td>17:00</td>
              <td>Phenotypic plasticity and DDE models - Dominic(?)</td>
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
              <td rowSpan="3">9:00 - 9:30</td>
              <td colSpan="2" className="center strong">Summary of the previous workshop on Aedes albopictus</td>
            </tr>
            <tr>
              <td>9:00</td>
              <td>Ensemble model output - Kamil/Daniele</td>
            </tr>
            <tr>
              <td>9:15</td>
              <td>Summary of the perspective paper we are writing - Kamil/Daniele</td>
            </tr>

           {/* Modelling Aedes aegypti */}
            <tr>
              <td rowSpan="4">9:30 - 10:30</td>
              <td colSpan="2" className="center strong">Modelling Aedes aegypti</td>
            </tr>
            <tr>
              <td>9:30</td>
              <td>Keynote speech - TBA</td>
            </tr>
            <tr>
              <td>10:00</td>
              <td> TBA</td>  
            </tr>
            <tr>
              <td>10:15</td>
              <td> TBA</td> 
            </tr>

            {/* Coffee Break */}
            <tr>
              <td>10:30 - 11:00</td>
              <td colSpan="2" className="center light">Coffee Break</td>
            </tr>
            {/* Training Data Session */}
            <tr>
              <td rowSpan="6">11:00 - 12:30</td>
              <td colSpan="2" className="center strong">Training data session: Surveillance data</td>
            </tr>
            <tr>
              <td>11:00</td>
              <td> a short intro on GBIF + VectAbundance + VecDyn: Where to get observational data - TBA </td>
            </tr>
            <tr>
              <td>11:15</td>
              <td>Turkey - Mehmet</td>
            </tr>
            <tr>
              <td>11:30</td>
              <td>Egypt - Emad</td>
            </tr>
            <tr>
              <td>11:45</td>
              <td>Cyprus - Ministry of Health</td>
            </tr>
            <tr>
              <td>12:00</td>
              <td>Israel - Oscar</td>
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
              <td rowSpan="7">13:30 - 15:30</td>
              <td> colSpan="2" className="center strong" >Models session< /td>
              <td></td>
            </tr>
            <tr>
              <td>13:30</td>
              <td>Rachel Lowe/Someone from her group</td>
            </tr>
            <tr>
              <td>13:50</td>
              <td>Joacim Rocklow?</td>
            </tr>
            <tr>
              <td>14:10</td>
              <td>Veronica Andreo (from Argentina)?</td>
            </tr>
            <tr>
              <td>14:30</td>
              <td>Workshop organiser presentations (all our models in a unique presentation)</td>
            </tr>
            <tr>
              <td>14:50</td>
              <td>Modeller A</td>
            </tr>
            <tr>
              <td>15:10</td>
              <td>Modeller B</td>
            </tr>
            {/* Coffee Break */}
            <tr>
              <td>15:30 - 16:00</td>
              <td colSpan="2" className="center">Coffee Break</td>
            </tr>
            {/* Discussion */}
            <tr>
              <td rowSpan="3">16:00 - 18:00</td>
              <td>Discussion</td>
              <td></td>
            </tr>
            <tr>
              <td>16:00</td>
              <td>Group discussion</td>
            </tr>
            <tr>
              <td>17:15</td>
              <td>First general discussion</td>
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
              <td className="center">Social Dinner (Downtown, XXXX)</td>
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
                <strong>Presentation of the ensemble on aegypti</strong>
                <br />
                Summary of the models comparison to guide the discussion (20 min). First group activity (40–60 min): What next in terms of modelling? What have you found interesting? Discussion: policy relevance of the models; what’s next? How can we move forward?
              </td>
            </tr>
            <tr>
              <td>10:30 - 11:00</td>
              <td className="center">Coffee Break</td>
            </tr>
            <tr>
              <td>11:00 - 12:45</td>
              <td>
                Plenary discussion: summary of the previous group activity; one team leader for each group presents; a joint paper summarising the outcome of the conference and the model comparisons.
              </td>
            </tr>
            <tr>
              <td>12:45 - 13:00</td>
              <td className="center">Concluding remarks + questionnaire</td>
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
              <td>Training session pt4 - Early Warning System Dashboards</td>
              <td></td>
            </tr>
            <tr>
              <td>14:00</td>
              <td>GIS-based exercise and risk assessment - Willy (?)</td>
            </tr>
            <tr>
              <td>15:00</td>
              <td>VeClim - Kamil</td>
            </tr>
            <tr>
              <td>16:00</td>
              <td>MOOD (arbocarto) - Pachka (?)</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );

export const Head = () => <Seo title="Program" />

export default ProgramPage
