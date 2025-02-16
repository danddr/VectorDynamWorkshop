import * as React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const ProgramPage = () => (
  <Layout workshop="Nicosia2025">
    <h2>Wednesday 17th September</h2>

<table>
    <tr>
        <td class="date" rowspan="3">
        </td>
        <td class="title">
           Parallel Training Session 1: Data analysis and early warning support systems
        </td>
    </tr>
    <tr>
        <td class="speaker">
        </td>
    </tr>
    <tr>
        <td class="abstract">
        </td> 
    </tr>
</table>

<table>
    <tr>
        <td class="date" rowspan="3">
        </td>
        <td class="title">
           Parallel Training Session 2: Advanced methods for climate impacts modelling
        </td>
    </tr>
    <tr>
        <td class="speaker">
        </td>
    </tr>
    <tr>
        <td class="abstract">
        </td> 
    </tr>
</table>

<h2>Thursday 18th September</h2>

<table>
    <tr>
        <td class="date" rowspan="3">
        </td>
        <td class="title">
           Vector Modelling Workshop: Modelling <i>Aedes aegypti</i> activity in the EMME region
        </td>
    </tr>
    <tr>
        <td class="speaker">
        </td>
    </tr>
    <tr>
        <td class="abstract">
        </td> 
    </tr>
</table>

<h2>Friday 19th September</h2>

<table>
    <tr>
        <td class="date" rowspan="3">
        </td>
        <td class="title">
           Vector Modelling Workshop: Discussions
        </td>
    </tr>
    <tr>
        <td class="speaker">
        </td>
    </tr>
    <tr>
        <td class="abstract">
        </td> 
    </tr>
</table>
</Layout>
)

export const Head = () => <Seo title="Program" />

export default ProgramPage
