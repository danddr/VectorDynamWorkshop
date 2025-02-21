import * as React from "react"

import * as styles from "../../components/table.css"

import Layout from "../../components/layout"
import Seo from "../../components/seo"

const ProgramPage = () => (
  <Layout workshop="Nicosia2025">
    <h2>Wednesday 17th September</h2>

<table className={styles.table}>
    <tbody>
    <tr>
        <td className={"date"} rowSpan="3">
        Parallel<br/> Training<br/> Session
        </td>
        <td className={"title-special"}>
        Data analysis and early warning support systems
        </td>
    </tr>
    <tr>
        <td className={"speaker"}>
        </td>
    </tr>
    <tr>
        <td className={"title"}>
        </td> 
    </tr>
    </tbody>
</table>

<table className={styles.table}>
    <tbody>
    <tr>
        <td className={"date"} rowSpan="3">
        Parallel<br/> Training<br/> Session
        </td>
        <td className={"title-special"}>
        Advanced methods for climate impacts modelling
        </td>
    </tr>
    <tr>
        <td className={"speaker"}>
        </td>
    </tr>
    <tr>
        <td className={"title"}>
        </td> 
    </tr>
    </tbody>
</table>

<h2>Thursday 18th September</h2>

<table className={styles.table}>
    <tbody>
    <tr>
        <td className={"date"} rowSpan="3">
        Vector<br/> Modelling<br/> Workshop
        </td>
        <td className={"title-special"}>
        Modelling <i>Aedes aegypti</i> activity in the EMME region
        </td>
    </tr>
    <tr>
        <td className={"speaker"}>
        </td>
    </tr>
    <tr>
        <td className={"title"}>
        </td> 
    </tr>
    </tbody>
</table>

<h2>Friday 19th September</h2>

<table className={styles.table}>
    <tbody>
    <tr>
        <td className={"date"} rowSpan="3">
        Vector<br/> Modelling<br/> Workshop
        </td>
        <td className={"title-special"}>
        Discussions
        </td>
    </tr>
    <tr>
        <td className={"speaker"}>
        </td>
    </tr>
    <tr>
        <td className={"title"}>
        </td> 
    </tr>
    </tbody>
</table>
</Layout>
)

export const Head = () => <Seo title="Program" />

export default ProgramPage
