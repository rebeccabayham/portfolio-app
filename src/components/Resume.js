import '../style/App.css';
import Nav from './Nav';

function Resume() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
          <h1>Resume</h1>
          <table className="resume">
              <tr>
                <td className="resume-job">
                    <span className="resume-job-title"><h3>GIS Developer</h3></span>
                    <span className="resume-employer">Wood PLC</span>
                    <span className="resume-date">Mar 2018 - Present</span>
                </td>
                <td className="resume-description">
                    <ul>
                        <li>Develops apps for the NC Department of Transportation (NCDOT) to visualize how floods and storm surge impact the state road network</li>
                        <li>Designs automated GIS workflows for colleagues to expedite their analyses, thereby reducing labor hours, ensuring consistency, and successfully meeting tight deadlines</li>
                        <li>Interfaces directly with clients to evaluate their current needs, suggest solutions, troubleshoot issues, and demonstrate use of custom apps</li>
                        <li>Provides GIS support to internal project teams for water, transportation, energy, and infrastructure projects</li>
                        <li>Moves fluidly between roles as team leader or team member, providing guidance, instruction, and quality assurance review as necessary</li>
                        <li>Tracks project budgets and assists with business development </li>
                        <li>Spearheaded the GIS team’s expansion into new web GIS technologies, starting with ArcGIS Online dashboards and expanding to open-source Leaflet apps hosted on Amazon Web Services </li>
                        <li>Built an ArcGIS Online dashboard to visualize highway improvements and their associated costs, so that NCDOT decision-makers can plan how to mitigate future flood risks from hurricanes</li>
                        <li>Developed an ArcGIS Pro plugin that visualizes the results of flood mitigation strategies by performing on-the-fly modeling </li>
                        <li>Created public-facing websites for several local/county governments' Hazard Mitigation Plans</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td className="resume-job">
                    <span className="resume-job-title"><h3>GIS Analyst</h3></span>
                    <span className="resume-employer">Eastern Research Group, Inc.</span>
                    <span className="resume-date">June 2012 - March 2018</span>
                </td>
                <td className="resume-description">
                    <ul>
                        <li>Led the GIS team’s expansion into web GIS and Python programming</li>
                        <li>Updated spatial datasets for the US Environmental Protection Agency (EPA)’s Report on the Environment and Climate Change Indicators programs based on government/academic data in a variety of formats</li>
                        <li>Crunched data to produce hundreds of tables, charts, and maps for EPA’s Greenhouse Gas Reporting Program website and annual reports</li>
                        <li>Performed statistical checks on data submitted to EPA’s Greenhouse Gas Reporting Program to identify and correct outliers</li>
                        <li>Supported development of EPA’s Emissions Collection and Monitoring Plan System software, utilizing agile delivery methodology</li>
                    </ul>
                </td>
            </tr>
            <tr>
                <td><h3>Skills</h3></td>
                <td className="resume-skills-list">
                <span className="resume-skills-list-header">GIS Professional (GISP) Certification</span>
                        <span className="resume-skills-list-header">Full-Stack Web Development</span>
                            <ul>
                                <li>HTML, CSS</li>
                                <li>JavaScript, PHP, SQL</li>
                                <li>React</li>
                                <li>Leaflet, Turf.js</li>
                                <li>PostgreSQL, PostGIS, MySQL</li>
                                <li>Amazon Web Services</li>
                                <li>Adobe Illustrator, Photoshop, Lightroom and InDesign</li>
                            </ul>
                        <span className="resume-skills-list-header">Spatial Analysis</span>
                            <ul>
                                <li>ArcMap and ArcGIS Pro</li>
                                <li>arcpy</li>
                                <li>ModelBuilder</li>
                                <li>ArcGIS Online</li>
                                <li>ArcGIS Field Maps</li>
                                <li>ArcSDE Databases</li>
                                <li>ArcGIS API for JavaScript</li>
                                <li>ArcGIS Pro SDK for .NET</li>
                                <li>QGIS</li>
                                <li>LiDAR, raster and vector data</li>
                            </ul>
                        <span className="resume-skills-list-header">Programming/Scripting Languages</span>
                            <ul>
                                <li>Python</li>
                                <li>C#</li>
                            </ul>
                        <span className="resume-skills-list-header">Project/Task Management</span>
                            <ul>
                                <li>Agile software development</li>
                                <li>Database management</li>
                                <li>Version control (git, GitHub)</li>
                                <li>JIRA, Confluence, Azure DevOps</li>
                                <li>Visual Studio</li>
                                <li>Microsoft Word, Excel, PowerPoint, Access</li>
                            </ul>
                </td>
            </tr>
          </table>
      </header>
    </div>
  );
}

export default Resume;