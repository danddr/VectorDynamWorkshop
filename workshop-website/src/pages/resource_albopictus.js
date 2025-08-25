import * as React from "react"

import XLink from "../components/xlink"
import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout workshop="main">
    <h2>Data on <span style={{fontStyle: "italic"}}>Aedes albopictus</span></h2>

<section>
    <h3>Vector Observations</h3>
    
    <h4>VectAbundance</h4>
    <p>The VectAbundance dataset compiles and harmonizes egg count observations of the <em>Aedes albopictus</em> mosquito, collected through ovitraps during monitoring and surveillance efforts across Albania, France, Italy, and Switzerland from 2010 to 2022. The raw data have been processed into a continuous time series, providing comprehensive geographic and temporal coverage of <em>Aedes albopictus</em> population dynamics. This dataset is designed to enhance the reliability of modelling efforts and contribute to improved public health preparedness.</p>
    <p>The processed observations are openly accessible through the <XLink href="https://doi.org/10.5281/zenodo.11486198">VectAbundance Zenodo repository</XLink>. For further details on the methodology and applications, refer to the related scientific publication in Scientific Data: <XLink href="https://www.nature.com/articles/s41597-024-03482-y">"VectAbundance: a spatio-temporal database of Aedes mosquitoes observations"</XLink>.</p>
    
    <h4>VectorByte</h4>
    <p> <XLink href="https://www.vectorbyte.org">VectorByte</XLink> is a global open-access data platform designed to support research on disease vectors. The initiative serves as a hub for biological trait (VecTraits) and abundance (VecDyn) data for both human and non-human disease vectors. In addition, it offers a suite of analytical tools and training resources to researchers and public health practitioners worldwide.</p>
    
    <h4>VectorBase</h4>
    <p>
    <XLink href="https://vectorbase.org/vectorbase/app/">VectorBase</XLink> is a key Bioinformatics Resource Center (BRC) funded by the National Institute of Allergy and Infectious Diseases (NIAID), part of the National Institutes of Health (NIH). It focuses on invertebrate vectors of human pathogens, working in collaboration with sequencing centres and the research community to curate and annotate vector genomes. VectorBase plays an essential role in advancing vector genomics for public health research.</p>
</section>

<section>
    <h3>Environmental Covariates</h3>
    
    <h4>Download ERA5-Land Files</h4>
    <p>The ERA5 product family, including ERA5 and ERA5-Land, represents the most advanced global climate reanalysis datasets developed by the European Centre for Medium-Range Weather Forecasts (ECMWF). These datasets provide up to 83 Essential Climate Variables (ECVs) at hourly intervals, covering the period from 1950 to the present. Spatial resolutions range from 30x30 km (ERA5) to 11x11 km (ERA5-Land).</p>
    <p>This repository contains Python scripts for downloading and processing ERA5-Land climate reanalysis data using the CDS API. These scripts allow users to retrieve temperature and precipitation data for specific geographic regions easily. Additionally, the repository provides an R script for post-processing the downloaded data, which includes:</p>
    <ul>
        <li>Loading and cropping data to a specified geographic area</li>
        <li>Converting temperature from Kelvin to Celsius and precipitation from meters to millimetres</li>
        <li>Calculating weekly averages for temperature and totals for precipitation</li>
        <li>Saving processed data in NetCDF format for further analysis</li>
    </ul>
    <p>Access the scripts here: <XLink href="https://github.com/download_ERA5-Land">GitHub - download_ERA5-Land</XLink></p>

    <h4>Downscale ERA5-Land Temperatures Using Co-Kriging</h4>
    <p>The KrigR R package allows users to download ERA5(-Land) reanalysis data, aggregate it to desired temporal resolutions, incorporate topographical covariates, and statistically downscale the data to finer spatial resolutions using co-kriging. It also provides functionalities for calculating bioclimatic variables and other aggregate metrics.</p>
    <p>The package offers an efficient workflow, providing access to state-of-the-art climate data without the storage burden of high-resolution global datasets. This allows researchers to tailor data outputs to their specific needs. More details on the tool can be found here, and an R script is available at <XLink href="https://github.com/microclima">GitHub - microclima</XLink>.</p>

    <h4>Microclimatic Modeling</h4>
    <p>Unlike KrigR, the microclima R package offers mechanistic downscaling rather than statistical downscaling. It provides tools to model fine-scale temperature variation, accounting for factors such as radiation, wind speed, altitude, surface albedo, coastal influences, and cold-air drainage. The package also includes functions for calculating topographic and vegetation effects on local climate, including canopy cover, leaf architecture, and surface albedo.</p>
    <p>microclima is particularly suited for understanding how small-scale environmental factors influence temperature patterns. An explanatory R script for the package is available at <XLink href="https://github.com/microclima">GitHub - microclima</XLink>.</p>
</section>

<h2>Models</h2>

<section>
    <h3>albopictus</h3>
<p>
This is a Python package (<XLink href="https://pypi.org/project/albopictus/">PyPI</XLink>, <XLink href="https://github.com/kerguler/albopictus">GitHub</XLink>) with a collection of age- and stage-structured population dynamics and disease transmission models developed by Erguler et al. at The Cyprus Institute. The package currently implements <em>Aedes albopictus</em> and <em>Phlebotomus papatasi</em> population dynamics and chikungunya transmission models. The models are implemented in C and used with a Python wrapper. Due to the use of GSL and the need for compilation, this package has only been tested in Linux and MacOS.
We have also developed the following packages to help with structured population modelling: 
<XLink href="https://github.com/kerguler/Population">Population library for dynamically-structured matrix population model</XLink> (in Python), <XLink href="https://github.com/kerguler/Population.jl">Julia version</XLink> (not the same), 
and <XLink href="https://github.com/kerguler/PopJSON/">PopJSON package</XLink> for platform-independent model representation 
(<em>popjson</em> in Node.js).
</p>

<h3>arbocartoR</h3>
    <p>This is a R package and companion web interface, designed to support vector control activities design at local scale. It is based on a multi-level model including two different components: the deterministic population dynamics of Aedes mosquitoes (Ae. albopictus and Ae. aegypti) in various environments and the stochastic dynamics of transmission of dengue, Zika and chikungunya viruses.</p>
    <p>Useful resources:</p>
    <ul>
            <li>The source code is available on <XLink href="https://gitlab.cirad.fr/astre/arbocartoR">GitLab</XLink></li>
            <li>The web interface is available at <XLink href="https://arbocarto-r-app.sk8.inrae.fr/">arbocartoR web interface</XLink></li>
            <li>Visit the <XLink href="https://www.arbocarto.fr/en/arbocartor">arbocarto website</XLink> for more information</li>
    </ul>

    <h3>dynamAedes</h3>
    <p>
        <XLink href="https://parasitesandvectors.biomedcentral.com/articles/10.1186/s13071-024-06121-y">dynamAedes</XLink> is a stochastic, time-discrete, and spatially explicit model designed to simulate the population dynamics of four invasive Aedes species: <em>Aedes aegypti</em>, <em>Ae. albopictus</em>, <em>Ae. japonicus</em>, and <em>Ae. koreicus</em>. The model is driven by factors such as temperature, photoperiod, and larval competition, and it can be applied at three spatial scales: punctual, local, and regional. Key features include</p>
    <ul>
        <li>Simulating both active and passive mosquito dispersal (local scale)</li>
        <li>Incorporating stochastic processes to account for random variability in model outputs</li>
        <li>Providing functions for deriving summary metrics, such as the 95% confidence interval of population dispersal or colonisation trends over time</li>
    </ul>

    <p>The source code, instructions for the installation and examples are available at <XLink href="https://mattmar.github.io/dynamAedes/">Github</XLink>
    </p>  

    <h3>Metelmann et al.</h3>
    <p>This model, presented <XLink href="https://royalsocietypublishing.org/doi/full/10.1098/rsif.2018.0761">here</XLink>, is a mechanistic model describing the population dynamics of <em>Ae. albopictus</em> using ordinary differential equations. The tiger mosquito populations are divided into five classes (eggs, diapausing eggs, juveniles, immature adults, adults). Specific environmental (human density) and meteorological (daily maximal, mean and minimum temperature, daily rain, photoperiod) drivers affect their survival, fertility and development rates.</p>

    The model's strengths are mainly in its use of instantaneous temperature (which allows to consider its diurnal variation) and the latitude-dependent autumn photocritical period (which allows for adaptation phenomena to be taken into account). The model, originally written in Matlab/Octave can be downloaded in the <XLink href="https://royalsocietypublishing.org/doi/suppl/10.1098/rsif.2018.0761">supplementary materials</XLink> of the article. An unofficial R adapted version of the model is available at <XLink href="https://github.com/radiciandrea/Metelmann2019Model">GitHub</XLink>.

    <h3>Stacked Machine Learning</h3>
    <p>
    This ensemble machine learning approach allows to combine the estimates of multiple base-learners into a final prediction made by a meta-model. This approach has been used to forecast the weekly abundance of <em>Ae. albopictus</em> eggs (<XLink href="https://doi.org/10.32942/X2NG70">under review</XLink>). In the specific case study described in the preprint, the model is driven by environmental covariates, such as temperature, precipitation, photoperiod, urbanisation and spatially explicit ovitrap data. Additionally, the model incorporates Fourier harmonics to explicitly account for temporal patterns, capturing both seasonal cycles and interannual variations.
</p>

    <h3>VECTRI</h3>
    <p>The Vector-borne disease community model of ICTP, TRIeste (VECTRI) is a multi-species climate-aware dynamical model that explicitly resolves the egg, larval and adult female vector densities. Originally developed for <em>Anopheles gambiae s.s.</em> and <em>P. falciparum</em> malaria (<XLink href="https://link.springer.com/article/10.1186/1475-2875-12-65">Tompkins, 2013</XLink>), the model now incorporates a parameterization suite for <em>Ae. albopictus</em> (Zornoza et al. 2024), calibrated and validated against bi-weekly ovitrap data from Emilia-Romagna, Italy (<XLink href="https://onlinelibrary.wiley.com/doi/full/10.1111/j.1948-7134.2011.00147.x">Carrieri et al. 2011</XLink>, 
        <XLink href="https://www.tandfonline.com/doi/full/10.1080/20477724.2017.1292992">2017</XLink>,
        <XLink href="https://www.tandfonline.com/doi/full/10.1080/20477724.2020.1866375">2020</XLink>) and spatial occurrence data from <XLink href="https://elifesciences.org/articles/08347">Kraemer et al. 2015</XLink> and the Global Biodiversity Information Facility (GBIF). The model for the vector life cycle is coupled to a disease transmission model which currently lacks a description of dengue (DENV) or any other virus vectored by the Asian tiger mosquito.</p>
    
    <p>Useful resources:</p>
    <ul>
            <li>The source code is available at <XLink href="https://gitlab.com/tompkins/vectri/-/tree/master?ref_type=heads">GitLab</XLink></li>
            <li>Original <XLink href="http://users.ictp.it/~tompkins/vectri/manual/">documentation</XLink> and installation</li>
            <li>Update: Breeding model and Hydrology (<XLink href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0150626">Asare et al. 2016</XLink>, <XLink href="https://www.geospatialhealth.net/gh/article/view/390/358">Asare et al. 2016</XLink>)</li>
            <li>Update: Genetic Algorithm calibration (<XLink href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0200638">Tompkins et al. 2018</XLink>)</li>
            <li>Update: Forecasting (<XLink href="https://journals.ametsoc.org/view/journals/apme/54/3/jamc-d-14-0156.1.xml?tab_body=pdf">Tompkins et al. 2015</XLink>, <XLink href="https://agupubs.onlinelibrary.wiley.com/doi/full/10.1029/2018GH000157">Tompkins et al. 2019</XLink>)</li>
            <li>Update: Breeding model and <em>Aedes</em> parameterization (Zornoza et al. 2024)</li>
            <li>Install Aedes version: git clone https://gitlab.com/tompkins/vectri.git; git checkout tags/v1.11.3 </li>
            <li> Run example (<XLink href="https://osf.io/3gcfb/">OSF repository</XLink>)</li>
    </ul>




</section>
</Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
