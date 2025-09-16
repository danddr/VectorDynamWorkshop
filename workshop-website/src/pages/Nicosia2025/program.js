import * as React from "react"

import "./program.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"
import XLink from "../../components/xlink"
import MoreText from "../../components/more"

const ProgramPage = () => (
    <Layout workshop="Nicosia2025">
        <p>
          <b>Please note that the program is alive and may evolve to adapt to our needs and wishes.</b>
        </p>
        <p>
          The <b>Modelling Training Sessions 1-3</b> are aimed at participants with at least a working knowledge of R, 
          focusing on practical skills such as formulating models, linking them to environmental data, 
          and applying tips and techniques for real-world scenarios. For instance, 
          a PhD student or postdoctoral researcher can explore how to use a model to predict vector dynamics or disease risk 
          in their region, or adapt it to include new environmental factors or represent different species. 
          To streamline setup, we have prepared a GitHub <XLink href="https://github.com/kerguler/vector-modelling-tutorials">repository</XLink> and 
          published a corresponding Docker <XLink href="https://hub.docker.com/r/kerguler/vector-modelling-tutorials">image</XLink> on Docker Hub, 
          which runs a JupyterLab server accessible externally via any web browser.
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
              <td>
                <MoreText maxHeight={48}>
                  <p>An introduction to the Copernicus Data Store for disease modeling applications</p>
                  <p className="summary">
                    This lecture will provide an overview of environmental datasets available on the Copernicus data Store and other tools for disease modeling applications. Practical information will be provided about finding and downloading datasets using the related API; and manipulating these environmental datacubes. Other user friendly climate data tools, such as the WMO-KNMI climate explorer and the IPCC Atlas will also be presented.
                  </p>
                </MoreText>
              </td>
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
              <td>
                <MoreText maxHeight={48}>
                  <p>arbocartoR package and app: deterministic ODE model for <i>Aedes</i> dynamics and control</p>
                  <p className="summary">This course introduces arbocarto, a mechanistic model of <i>Aedes</i> mosquito population dynamics based on a deterministic system of ordinary differential equations (ODEs). The model is spatialized and life cycle-based. It was developed to support operational objectives in surveillance and vector control. Its outputs include spatial maps of relative mosquito densities and estimates of the basic reproduction number (R<sub>o</sub>) for arbovirus transmission. To make the model accessible to both research and operational communities, the arbocartoR R package and its companion Shiny app were developed within the H2020 MOOD project at Cirad. These tools allow users to simulate mosquito dynamics for <i>Aedes aegypti</i> and <i>Aedes albopictus</i>, evaluate the effects of vector control actions, and explore the transmission potential of dengue, Zika, and chikungunya across diverse environments.</p>
                  <p className="summary">The course will first present the ODE-based model structure and its operational applications, then demonstrate the features of the Shiny app, and finally guide participants through simple simulations in R using arbocartoR. Participants will gain hands-on experience running both the app and R scripts, adapting the model, visualizing outputs, and interpreting results for decision support in vector surveillance and control.</p>
                </MoreText>
              </td>
              <td>Pachka Hammami</td>
            </tr>
            <tr>
              <td>12:30</td>
              <td>
                <MoreText maxHeight={48}>
                  <p>Physics-Informed Neural Networks and ODEs in vector population dynamics modelling</p>
                  <p className="summary">
                    Mechanistic dynamic models based on ordinary differential equations (ODEs) depend on accurately 
                    parameterised, species-specific development and survival rates to generate reliable 
                    predictions. Physic-Informed Neural Networks (PINNs) address this by embedding ODE constraints 
                    directly into a neural framework trained on observational data, supporting both forward simulation 
                    and inverse parameter recovery. We employ PINNs to refine biological parameterisation in 
                    vector population dynamics models and directly compare their performance against traditional 
                    ODE-based approaches. Our results demonstrate that PINN-driven inverse modelling can in 
                    specific scenarios outperform classical methods in parameter accuracy and predictive 
                    skill. To unpack the contributions of network design, we perform controlled ablation studies, 
                    varying one architectural element at a time while holding all else constant, and assess each 
                    modification's effect on overall performance. Hybrid approaches that fuse mechanistic principles 
                    with data-driven methods can harness observational datasets to recover hard-to-measure parameters 
                    without sacrificing the physical fidelity of the governing biometeorological processes.
                  </p>
                </MoreText>
              </td>
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
              <td rowSpan="2">9:15 - 9:45</td>
              <td colSpan="3" className="center strong">Summary of the previous workshop on <i>Aedes albopictus</i></td>
            </tr>
            <tr>
              <td colSpan="3">
              <p className="summary">
                This opening session of the Vector Modelling Workshop will introduce the concept of the workshop series,
                summarize the discussions and outcomes of the previous meeting in Bologna, Italy (2024),
                and present the emerging ensemble model on <i>Aedes albopictus</i>. In a relaxed setting,
                we will exchange experiences, reflect on challenges, and explore possible directions for the future.
              </p>
              </td>
            </tr>

           {/* Modelling Aedes aegypti */}
            <tr>
              <td>9:45 - 10:15</td>
              <td colSpan="3" className="center">
                <span className="strong">Keynote address by Cyril Caminade</span><br/>
                <MoreText>
                  <p><span className="emph">The risk posed by <i>Aedes aegypti</i> in Cyprus and the wider Mediteranean region</span></p>
                  <p className="summary">
                    <i>Aedes aegypti</i> is a competent vector of arboviruses such as Yellow fever and 
                    dengue. <i>Ae. aegypti</i> is currently present over the eastern coasts of the Black sea, north-eastern 
                    Turkey and it has recently been found in the vicinity of Larnaca airport in Cyprus. This species poses a 
                    significant public health threat to Cyprus and the wider Mediterranean region. We adapted the 
                    VECTRI model, originally developed for malaria, to simulate the dynamics of <i>Ae. aegypti</i> over Europe 
                    and Cyprus using high resolution gridded climate data. We also used a basic reproduction number (R0) model 
                    to estimate the potential for arbovirus transmission across the Mediterranean region. The vector model 
                    revealed that Larnaca, Limassol, Nicosia, Paphos, and Ayia Napa possess suitable climates 
                    for <i>Aedes aegypti</i> to establish itself. In addition, the R0 model, informed by observed climate 
                    data, aligns with historical 18th-20th-century dengue and yellow fever hotspots in the Mediterranean 
                    region, projecting high R0 values for Cyprus, Greece, Crete, Turkey, southern Italy, and the southern 
                    and eastern coasts of Spain. To prevent the re-establishment of <i>Aedes aegypti</i> on the European 
                    continent, we strongly advise stringent mosquito surveillance at maritime and air entry points in 
                    Greece and rapid elimination measures in Cyprus.
                  </p>
                </MoreText>
                </td>
            </tr>
            <tr>
              <td rowSpan="5">10:15 - 11:00</td>
              <td colSpan="3" className="center">
                <span className="strong">Modelling <i>Aedes aegypti</i> - Training data session</span><br/>
                <span className="emph">Data for calibrating an <i>Aedes aegypti</i> model</span>
              </td>
            </tr>
            <tr>
              <td>Time</td>
              <td className="center">Title</td>
              <td>Speaker</td>
            </tr>
            <tr>
              <td>10:15</td>
              <td><i>Aedes aegypti</i> life history traits variability</td>  
              <td>Paul Huxley</td>
            </tr>
            <tr>
              <td>10:30</td>
              <td>Summary of open access observational vector presence and abundance datasets</td> 
              <td>William Wint (online)</td>
            </tr>
            <tr>
              <td>10:45</td>
              <td>
                <MoreText maxHeight={48}>
                  <p>Epidemiological data harmonisation: Global Repository of Epidemiological Parameters</p>
                  <p className="summary">
                    The Global Repository of Epidemiological Parameters (grEPI) is a World Health Organization 
                    initiative designed to accelerate and harmonise access to key epidemiological parameters to s
                    upport modelling and analysis. This presentation will provide an overview of grEPI and the planned 
                    inclusions for version 1, including current approaches to AI supported parameter extraction. 
                    The proposed approach for incorporating vector-based parameters (with a 
                    focus on <i>Aedes aegypti</i> literature) will be demonstrated for consideration by participants. 
                    Developed through consultation with the global modelling community, grEPI aims to improve 
                    contestability of model assumptions, support more timely forecasts, and enhance policy relevance 
                    for ministries of health and research institutions. This presentation will highlight grEPI's 
                    contribution to harmonising epidemiological parameters for vector-borne disease intelligence to 
                    strengthen preparedness and response capacity.
                  </p>
                </MoreText>
              </td>
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
                <span className="strong">Modelling <i>Aedes aegypti</i> - Surveillance data session</span><br/>
                <span className="emph">Surveillance data on <i>Aedes aegypti</i> in the EMME region and beyond</span>
              </td>
            </tr>
            <tr>
              <td>Time</td>
              <td className="center">Title</td>
              <td>Speaker</td>
            </tr>
            <tr>
              <td>11:15</td>
              <td>
                <MoreText maxHeight={48}>
                  <p>Monitoring the population of adult <i>Aedes aegypti</i> in the city of Larnaca, Cyprus: Preliminary results</p>
                  <p className="summary">
                    <i>Aedes aegypti</i>, a mosquito species originally native to Africa, is the world's most important vector of arboviral disease, being able to transmit the causative agents of dengue, yellow fever, chikungunya, and Zika. The recent re-establishment of <i>Ae. aegypti</i> in Cyprus (reported in 2022), after more than 50 years of absence, poses a major national and regional public health threat, particularly in light of this vector's high competence for arbovirus transmission, its synanthropic biology, and the status of Cyprus as a major destination for global tourism.
                  </p>
                  <p className="summary">
                    To better understand the population dynamics of this species in the particular environmental context of Cyprus, we set up eight trapping stations in the city of Larnaca, covering an area of approximately 17 hectares. At each station, once a week we set up a BG-Sentinel trap baited with BG-Lure and dry ice. Traps were collected after 24 hours, and captured specimens were killed on-site by exposure to acetone fumes. Dead specimens were transported to the Cyprus Institute, where they were sorted by species and sex, counted, and stored for future reference.
                  </p>
                  <p className="summary">                  
                    Here, we present a preliminary summary of the data collected between February 14 and November 5, 2025. During this period, a total of 3,757 mosquitoes were caught. Of these, 3,622 (96.4%) were <i>Culex pipiens</i>, 102 (2.7%) were <i>Ae. aegypti</i>, and 33 (0.9%) were other species. Our results show that <i>Ae. aegypti</i> is present throughout the entire collection area, with all trapping stations reporting at least one specimen collected during the sampling period. Additionally, our data suggests populations of <i>Ae. aegypti</i> peak during the summer months (July - September), while <i>Cx. pipiens</i> populations peak earlier in the year (April - June).
                  </p>
                  <p className="summary">
                    These results provide some insight into the temporal fluctuations of <i>Ae. aegypti</i> population currently established in Cyprus, thereby providing important information for vector control efforts. Furthermore, the quantitative data generated by our work can be used to develop and/or improve predictive models, enhancing the accuracy of their outputs at the local and regional levels.
                  </p>
                </MoreText>
              </td>
              <td>Marco Neira</td>
            </tr>
            <tr>
              <td>11:30</td>
              <td>
                <p><i>Aedes aegypti</i> in Türkiye, ancient remnant or new introduction, current status and management option</p>
              </td>
              <td>Mustafa Akıner</td>
            </tr>
            <tr>
              <td>11:45</td>
              <td>
                <MoreText maxHeight={48}>
                <p><i>Aedes aegypti</i> in Egypt, a newly re-emerged and established arboviral vector: History, current status and plan for risk management and control</p>
                <p className="summary">
                  The presentation will summarize the history of <i>Aedes aegypti</i> and dengue outbreaks in Egypt, elimination 
                  as a by-product of malaria control campaigns, recent re-emergence and dengue outbreaks since 2014, geographic 
                  expansion and ecology, and the needs for surveillance and modelling the risk for containment and control.
                </p>
                </MoreText>
              </td>
              <td>Emad Khater</td>
            </tr>
            <tr>
              <td>12:00</td>
              <td>
                  <p>Surveillance of <i>Aedes aegypti</i> in Madeira, Portugal: Insights for Climate-Driven Vector Modelling for Portugal</p>
              </td>
              <td>Hugo Costa Osório (online)</td>
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
              <td>Innovative modelling tools for strengthening global health resilience</td>
              <td>Martín Lotto Batista</td>
            </tr>
            <tr>
              <td>13:50</td>
              <td>
                <MoreText maxHeight={48}>
                <p>From climate sensitivity to interventions: Work at Heidelberg Planetary Health Hub on <i>Aedes aegypti</i> and Dengue</p>
                <p className="summary">
                  The Heidelberg Planetary Health Hub (Hei-Planet) is an interdisciplinary research community addressing 
                  the interconnected challenges of climate change, environmental degradation, and biodiversity loss through 
                  a health-focused lens. A central research theme of Hei-Planet is the study of climate-sensitive infectious 
                  diseases, with a particular focus on mosquito-borne illnesses.
                </p>
                <p className="summary">
                  In this talk, I will provide a broad overview of our research on <i>Aedes aegypti</i> and Dengue. Our work 
                  spans multiple approaches, including thermal biology trait-based models and the development of statistical 
                  frameworks for robust quantification of uncertainty in trait performance curves. Building on these estimates, 
                  I will present our latest findings from the Lancet Countdown on climate change and health, tracking changes 
                  in global transmission suitability for Dengue.
                </p>
                <p className="summary">
                  Furthermore, I will discuss data-driven analyses of the effect of weather and large-scale public health 
                  interventions on <i>Aedes</i> mosquitoes and Dengue in Sri Lanka. In addition, I will present work on the use of climate 
                  teleconnections for early-warning predictions of Dengue outbreaks and ongoing efforts to advance novel modeling 
                  techniques that integrate mechanistic models with Neural Network components.
                </p>
                </MoreText>
              </td>
              <td>Julian Heidecke</td>
            </tr>
            <tr>
              <td>14:10</td>
              <td>
                <MoreText maxHeight={48}>
                <p>Spatio-temporal validation of two mechanistic models of <i>Aedes aegypti</i> population dynamics in ten Argentine localities</p>
                <p className="summary">
                  Mathematical modeling of <i>Aedes aegypti</i> population dynamics provides information for vector surveillance 
                  and control. We compared the predictive performance of two mechanistic models &mdash; Aguirre et al. (deterministic) and 
                  DynamAedes (stochastic) &mdash; against ovitrap data from 10 Argentine localities spanning a wide climatic gradient, 
                  between 2015 and 2024. Models' weekly predictions were standardized and compared with field observations, 
                  evaluating three aspects: (1) spatio-temporal performance, (2) peak detection, and (3) seasonal 
                  pattern (onset, end, and duration). DynamAedes resulted in extinction events in the three southernmost 
                  localities, while Aguirre et al.'s model showed more stable week-to-week behavior. Prediction fit varied 
                  across localities, with the best performance in northern localities like Tartagal (warm and humid) and 
                  Añatuya (warm and dry). In terms of peak detection, DynamAedes had higher sensitivity (43.5% vs. 27.2%, 
                  p&lt;0.001), although both models showed F1-scores below 0.5 across all localities. Regarding the seasonal 
                  pattern, Aguirre et al.'s model reproduced the observed duration, while DynamAedes tended to anticipate 
                  the start and prolong the duration of the season. Results show that both models reproduced abundance patterns 
                  with varying accuracy, each with strengths and limitations depending on the evaluation criteria. This 
                  comprehensive comparison, covering nearly ten years of data across a broad geographic and climatic range, 
                  highlights the importance of thorough validations under diverse conditions to ensure more robust applications 
                  and a deeper understanding of model performance in vector surveillance and early warning contexts.
                </p>
                </MoreText>
              </td>
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
              <td>
                <MoreText>
                  <p>A stage-structured DDE model for <i>Aedes aegypti</i> and dengue</p>
                  <p className="summary">
                    In the last 50 years there has been a rapid expansion in the range 
                    in <i>Aedes aegypti</i>, increasing the risk of Dengue fever globally. 
                    To accurately predict the start date of dengue outbreaks at these 
                    range edges, a full life-cycle model of <i>Ae. aegypti</i> that 
                    incorporates the environmentally-dependent development times, mortality 
                    rates and fecundity rates is needed. Here, we use a fully tractable 
                    system of delay differential equations to model <i>Ae. aegypti</i> that 
                    allows for developmental plasticity between stages coupled with a 
                    compartmental SEIR model for dengue fever. We demonstrate how this 
                    approach can accurately predict the seasonality in abundance of each 
                    developmental stage of <i>Ae. aegypti</i> across sub-tropical climates in 
                    the Americas, without the need for backfitting, and present results 
                    for the prediction of dengue fever outbreaks.
                  </p>
                </MoreText>
              </td>
              <td>Benedict Fellows</td>
            </tr>
            <tr>
              <td>15:25</td>
              <td>
                <MoreText maxHeight={48}>
                <p>PesTwin, the biology-informed Digital-Twin transforming Integrated Pest Management</p>
                <p className="summary">
                  Reducing the damage caused by invasive insect species is a crucial lever both in agriculture, 
                  to improve food safety, and in public health, to combat vector-borne diseases. In support of these challenges, 
                  and in line with the principles of precision agriculture and Integrated Pest Management (IPM), 
                  we present PesTwin, an innovative simulation framework aiming to become the digital twin of a pest invasion. 
                  Through a flexible rule-based approach of the Agent Based Modelling and Simulation (ABMS) paradigm, 
                  the framework supports the fine-tuned modelling of the main ecological interactions of the pest with its host 
                  and the environment. By integrating GIS data, such as historical temperature time-series, PesTwin allows 
                  for forecasting the insects in realistic scenarios, both in its spatial and time dimensions. Further, 
                  with a module devoted to genetic inheritance, it enables the simulation of evolutionary dynamics, 
                  with an explicit focus on innovative genetic control techniques. PesTwin simulator lays at the intersection 
                  of ecology, computer science and applied mathematics, paving the way towards a more targeted and effective 
                  pest management, through optimization and innovation of control strategies.
                </p>
                </MoreText>
              </td>
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
                        <li>What's next? How can we move forward?</li>
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
              <td>11:00 - 11:15</td>
              <td className="center">
                <MoreText>
                <p className="center strong">The Copernicus Health Hub - Jonilda Kusta</p>
                <p className="summary">The Copernicus Health Hub is a comprehensive platform, created by the European Centre for Medium 
                  Range Weather Forecasts (ECMWF) under the Copernicus Programme, to provide user-centred, targeted 
                  information on environmental factors affecting citizens' physical, mental and social well-being. 
                  It highlights cutting-edge products from Copernicus Services to assess and forecast real-world 
                  environmental impacts on public health, encompassing the community feedback on health application 
                  needs and showcasing user stories of successful implementation.</p>
                </MoreText>
              </td>
            </tr>
            <tr>
              <td>11:15 - 12:45</td>
              <td>
                <ul>
                  <li>Plenary discussion
                    <ul>
                      <li>Summary of the previous group activity</li>
                      <li>One team leader for each group presents</li>
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
              <td>GHRtools</td>
              <td>Martín Lotto Batista</td>
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
