import * as React from "react"
import { Link } from "gatsby"

import * as styles from "../../components/table.css"

import Layout from "../../components/layout"
import Footer from "../../components/footer"
import Seo from "../../components/seo"

const ProgramPage = () => (
  <Layout workshop="Nicosia2025">
    <h2>Wednesday 17th September</h2>

<table className={styles.table}>
    <tr>
        <td class="date" rowspan="3">
        Parallel<br/> Training<br/> Session
        </td>
        <td class="title-special">
        Data analysis and early warning support systems
        </td>
    </tr>
    <tr>
        <td class="speaker">
        </td>
    </tr>
    <tr>
        <td class="title">
        </td> 
    </tr>
</table>

<table className={styles.table}>
    <tr>
        <td class="date" rowspan="3">
        Parallel<br/> Training<br/> Session
        </td>
        <td class="title-special">
        Advanced methods for climate impacts modelling
        </td>
    </tr>
    <tr>
        <td class="speaker">
        </td>
    </tr>
    <tr>
        <td class="title">
        </td> 
    </tr>
</table>

<h2>Thursday 18th September</h2>

<table className={styles.table}>
    <tr>
        <td class="date" rowspan="3">
        Vector<br/> Modelling<br/> Workshop
        </td>
        <td class="title-special">
        Modelling <i>Aedes aegypti</i> activity in the EMME region
        </td>
    </tr>
    <tr>
        <td class="speaker">
        </td>
    </tr>
    <tr>
        <td class="title">
        </td> 
    </tr>
</table>

<h2>Friday 19th September</h2>

<table className={styles.table}>
    <tr>
        <td class="date" rowspan="3">
        Vector<br/> Modelling<br/> Workshop
        </td>
        <td class="title-special">
        Discussions
        </td>
    </tr>
    <tr>
        <td class="speaker">
        </td>
    </tr>
    <tr>
        <td class="title">
        </td> 
    </tr>
</table>
</Layout>
)

export const Head = () => <Seo title="Program" />

export default ProgramPage
