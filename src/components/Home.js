import '../style/App.css';
import Nav from './Nav';
import Project from './Project';

function Home() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header"> 
        <p>Welcome to the portfolio for Rebecca Bayham</p>
        <br />
        <h1>Projects</h1>
        <div className="project-container">
          <Project name="Iceland Tour" url="iceland-tour" description="React + Leaflet"/>
          <Project name="Roadway Inundation Tool" url="rit" description="Leaflet" />
          <Project name="Coastal Roadway Inundation Simulator" url="cris" description="Leaflet" />
          <Project name="Library" url="library" description="Vanilla JavaScript" />
          <Project name="Camden County App" url="camden-arcgis-api" description="ArcGIS API for Javascript" />
        </div>
      </header>
    </div>
  );
}

export default Home;