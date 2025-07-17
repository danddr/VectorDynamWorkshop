import * as React from "react"

import "./program.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ProgramPage = () => (
    <Layout workshop="Nicosia2025">
        <p>
            <b>Please note that the program is alive and may evolve to adapt to our needs and wishes.</b>
        </p>
      {/* Day 1 */}
      <section className="day-section">
        <h2>Day 1: 17th September 2025</h2>
        <h3>Morning</h3>
        <table>
          <thead>
            <tr>
              <th className="center">Session</th>
              <th colSpan="3" className="center">Activity</th>
            </tr>
          </thead>
          <tbody>
            {/* Registration */}
            <tr>
              <td>8:30 - 9:00</td>
              <td colSpan="3" className="center">Welcome and registration</td>
            </tr>
            {/* Training Session pt1 */}
            <tr>
              <td rowSpan="4">9:00 - 11:00</td>
              <td colSpan="3" className="center">
                <span className="strong">Training session part 1</span><br/>
                <span className="emph">Observational datasets and environmental covariates</span>
              </td>
            </tr>
            <tr>
              <td>Time</td>
              <td className="center">Title</td>
              <td>Speaker</td>
            </tr>
            <tr>
              <td>9:00</td>
              <td>CDS and ERAland and similar environmental datacubes</td>
              <td>Cyril Caminade</td>
            </tr>
            <tr>
              <td>10:00</td>
              <td>Fitting thermal performance curves with BayesTPC R package</td>
              <td>Paul Huxley</td>
            </tr>
            {/* Coffee Break */}
            <tr>
              <td>11:00 - 11:30</td>
              <td colSpan="3" className="center light">Coffee Break</td>
            </tr>
            {/* Training Session pt2 */}
            <tr>
              <td rowSpan="4">11:30 - 13:30</td>
              <td colSpan="3" className="center">
                <span className="strong">Training session part 2</span><br/>
                <span className="emph">Advanced modelling session 1</span>
              </td>
            </tr>
            <tr>
              <td>Time</td>
              <td className="center">Title</td>
              <td>Speaker</td>
            </tr>
            <tr>
              <td>11:30</td>
              <td>Deterministic and ODE Models (ArboCarto)</td>
              <td>Pachka Hammami</td>
            </tr>
            <tr>
              <td>12:30</td>
              <td>Physics-Informed Neural Networks and ODEs in vector population dynamics modelling</td>
              <td>Mina Petrić</td>
            </tr>
            {/* Lunch */}
            <tr>
              <td>13:30 - 14:30</td>
              <td colSpan="3" className="center light">Lunch break</td>
            </tr>
          </tbody>
        </table>
        <h3>Afternoon</h3>
        <table>
          <thead>
            <tr>
              <th className="center">Session</th>
              <th colSpan="3" className="center">Activity</th>
            </tr>
          </thead>
          <tbody>
            {/* Training Session pt3 */}
            <tr>
              <td rowSpan="7">14:30 - 18:00</td>
              <td colSpan="3" className="center">
                <span className="strong">Training session part 3</span><br/>
                <span className="emph">Advanced modelling session 2</span>
              </td>
            </tr>
            <tr>
              <td>Time</td>
              <td className="center">Title</td>
              <td>Speaker</td>
            </tr>
            <tr>
              <td>14:30</td>
              <td>Stochastic models: dynamAedes</td>
              <td>Daniele Da Re</td>
            </tr>
            <tr>
              <td>15:30</td>
              <td colSpan="3" className="center light">Coffee Break</td>
            </tr>
            <tr>
              <td>15:45</td>
              <td>Structured population models: sPop and PopJSON</td>
              <td>Kamil Erguler</td>
            </tr>
            <tr>
              <td>16:45</td>
              <td colSpan="2" className="center light">Coffee Break</td>
            </tr>
            <tr>
              <td>17:00</td>
              <td>Phenotypic plasticity and DDE models</td>
              <td>Dominic Brass</td>
            </tr>
          </tbody>
        </table>
        {/* Social dinner */}
        <h3>19:30 Social Aperò (Downtown, XXXX)</h3>
      </section>

      {/* Day 2 */}
      <section className="day-section">
        <h2>Day 2: 18th September 2025</h2>

        {/* Morning */}
        <h3>Morning</h3>
        <table>
          <thead>
            <tr>
              <th className="center">Session</th>
              <th colSpan="3" className="center">Activity</th>
            </tr>
          </thead>
          <tbody>
            {/* Registration */}
            <tr>
              <td>8:30 - 9:00</td>
              <td colSpan="3" className="center">Welcome and registration</td>
            </tr>
            {/* Welcome address */}
            <tr>
              <td>9:00 - 9:15</td>
              <td colSpan="3" className="center">
                <span className="strong">Welcome address</span><br/>
                <span>Marios Violaris, Ministry of Health, Cyprus</span>
              </td>
            </tr>
            {/* Summary Session */}
            <tr>
              <td rowSpan="4">9:15 - 9:45</td>
              <td colSpan="3" className="center strong">Summary of the previous workshop on <i>Aedes albopictus</i></td>
            </tr>
            <tr>
              <td>Time</td>
              <td className="center">Title</td>
              <td>Speaker</td>
            </tr>
            <tr>
              <td>9:15</td>
              <td>Ensemble model output</td>
              <td>Kamil Erguler</td>
            </tr>
            <tr>
              <td>9:30</td>
              <td>Summary of the perspective paper we are writing</td>
              <td>Daniele Da Re</td>
            </tr>

           {/* Modelling Aedes aegypti */}
            <tr>
              <td rowSpan="6">9:45 - 11:00</td>
              <td colSpan="3" className="center strong">Modelling <i>Aedes aegypti</i></td>
            </tr>
            <tr>
              <td>Time</td>
              <td className="center">Title</td>
              <td>Speaker</td>
            </tr>
            <tr>
              <td>9:45</td>
              <td colSpan="3" className="center strong">Keynote address - Cyril Caminade</td>
            </tr>
            <tr>
              <td>10:15</td>
              <td><i>Aedes aegypti</i> life history traits variability</td>  
              <td>Paul Huxley</td>
            </tr>
            <tr>
              <td>10:30</td>
              <td>Brief intro on GBIF + VectAbundance + VecDyn, VectorNet: Where to get observational data?</td> 
              <td>William Wint (online)</td>
            </tr>
            <tr>
              <td>10:45</td>
              <td>TBA</td>
              <td>Chloe Morgan Rice</td>
            </tr>

            {/* Coffee Break */}
            <tr>
              <td>11:00 - 11:15</td>
              <td colSpan="3" className="center light">Coffee Break</td>
            </tr>
            {/* Training Data Session */}
            <tr>
              <td rowSpan="6">11:15 - 12:15</td>
              <td colSpan="3" className="center">
                <span className="strong">Training data session</span><br/>
                <span className="emph">Surveillance data (data on <i>Aedes aegypti</i> in the EMME region and beyond)</span>
              </td>
            </tr>
            <tr>
              <td>Time</td>
              <td className="center">Title</td>
              <td>Speaker</td>
            </tr>
            <tr>
              <td>11:15</td>
              <td>Cyprus</td>
              <td>TBA</td>
            </tr>
            <tr>
              <td>11:30</td>
              <td>Türkiye</td>
              <td>Mustafa Akıner</td>
            </tr>
            <tr>
              <td>11:45</td>
              <td>Egypt</td>
              <td>Emad Khater</td>
            </tr>
            <tr>
              <td>12:00</td>
              <td>Madeira</td>
              <td>Hugo Osorio</td>
            </tr>
            {/* Lunch */}
            <tr>
              <td>12:15 - 13:30</td>
              <td colSpan="3" className="center light">Lunch</td>
            </tr>
          </tbody>
        </table>

        {/* Afternoon */}
        <h3>Afternoon</h3>
        <table>
          <thead>
            <tr>
              <th className="center">Session</th>
              <th colSpan="3" className="center">Activity</th>
            </tr>
          </thead>
          <tbody>
            {/* Models Session */}
            <tr>
              <td rowSpan="9">13:30 - 15:45</td>
              <td colSpan="3" className="center strong">Models session</td>
            </tr>
            <tr>
              <td>Time</td>
              <td className="center">Title</td>
              <td>Speaker</td>
            </tr>
            <tr>
              <td>13:30</td>
              <td>IDExtremes and the work of Rachel Lowe's team</td>
              <td>Martin Lotto Batista</td>
            </tr>
            <tr>
              <td>13:50</td>
              <td>The work of Joacim Rocklow's team</td>
              <td>Julian Heidecke</td>
            </tr>
            <tr>
              <td>14:10</td>
              <td>Argentinian model of <i>Aedes aegypti</i></td>
              <td>Veronica Andreo (online)</td>
            </tr>
            {/* Coffee Break */}
            <tr>
              <td>14:30</td>
              <td colSpan="3" className="center light">Coffee Break</td>
            </tr>
            <tr>
              <td>14:45</td>
              <td>Results of the <i>Aedes aegypti</i> modelling exercise (all our models in a unique presentation)</td>
              <td>Kamil and Daniele</td>
            </tr>
            <tr>
              <td>15:05</td>
              <td>UKEHC's model of <i>Aedes aegypti</i> (delayed differential equations)</td>
              <td>Benedict Fellows</td>
            </tr>
            <tr>
              <td>15:25</td>
              <td>PesTwin, the biology-informed Digital-Twin transforming Integrated Pest Management</td>
              <td>Andrea De Antoni</td>
            </tr>
            {/* Coffee Break */}
            <tr>
              <td>15:45 - 16:00</td>
              <td colSpan="3" className="center light">Coffee Break</td>
            </tr>
            {/* Models Session */}
            <tr>
              <td rowSpan="4">16:00 - 17:30</td>
              <td colSpan="3" className="center strong">Discussion session</td>
            </tr>
            <tr>
              <td>Time</td>
              <td colSpan="2" className="center">Activity</td>
            </tr>
            <tr>
              <td>16:00</td>
              <td colSpan="2">Group discussions</td>
            </tr>
            <tr>
              <td>16:45</td>
              <td colSpan="2">First general discussion</td>
            </tr>
          </tbody>
        </table>
        {/* Social dinner */}
        <h3>20:30 Social Dinner (Downtown, XXXX)</h3>
      </section>

      {/* Day 3 */}
      <section className="day-section">
        <h2>Day 3: 19th September 2025</h2>

        {/* Morning */}
        <h3>Morning</h3>
        <table>
          <thead>
            <tr>
              <th>Session</th>
              <th>Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>9:00 - 9:30</td>
              <td className="center strong">Embedding Policy in your Research Plans to Influence Change in Climate and Health Practice - Avriel Diaz</td>
            </tr>
            <tr>
              <td>9:30 - 10:30</td>
              <td>
                <ul>
                  <li>Summary of the day before to guide the discussion (20 min)</li>
                  <li><strong>First group activity of the day</strong> (40-60 min): What next in terms of modelling? What have you found interesting that answers the questions you had when you came here?
                    <ul>
                        <li>Discussion: policy relevance of the models</li>
                        <li>What’s next? How can we move forward?</li>
                    </ul>
                  </li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>10:30 - 11:00</td>
              <td className="center light">Coffee Break</td>
            </tr>
            <tr>
              <td>11:00 - 12:45</td>
              <td>
                <ul>
                  <li>Plenary discussion
                    <ul>
                      <li>Summary of the previous group activity</li>
                      <li>1 team leader for each group presents</li>
                    </ul>
                  </li>
                  <li>A joint paper summarising the outcome of the conference and the model comparisons</li>
                </ul>
              </td>
            </tr>
            <tr>
              <td>12:45 - 13:00</td>
              <td className="center strong">Concluding remarks & questionnaire</td>
            </tr>
            <tr>
              <td>13:00 - 14:00</td>
              <td className="center light">Lunch</td>
            </tr>
          </tbody>
        </table>


        {/* Afternoon */}
        <h3>Afternoon</h3>
        <table>
          <thead>
            <tr>
              <th className="center">Session</th>
              <th colSpan="3" className="center">Activity</th>
            </tr>
          </thead>
          <tbody>
            {/* Summary Session */}
            <tr>
              <td rowSpan="6">14:00 - 18:00</td>
              <td colSpan="3" className="center">
                <span className="strong">Training session part 4</span><br/>
                <span className="emph">Early Warning System Dashboards</span>
              </td>
            </tr>
            <tr>
              <td>Time</td>
              <td className="center">Title</td>
              <td>Speaker</td>
            </tr>
            <tr>
              <td>14:00</td>
              <td>IDExtremes</td>
              <td>Martin Lotto Batista</td>
            </tr>
            <tr>
              <td>15:00</td>
              <td>VEClim</td>
              <td>Kamil Erguler</td>
            </tr>
            <tr>
              <td>16:00</td>
              <td>MOOD</td>
              <td>Cedric Marsboom</td>
            </tr>
            <tr>
              <td>17:00</td>
              <td>Additional tools (?)</td>
              <td>TBA</td>
            </tr>
          </tbody>
        </table>
      </section>
    </Layout>
  );

export const Head = () => <Seo title="Program" />

export default ProgramPage
