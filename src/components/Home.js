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
          <Project name="Roadway Inundation Tool" url="rit" image="rit_screenshot.png" />
          <Project name="Coastal Roadway Inundation Simulator" url="cris" image="cris_screenshot.png" />
          <Project name="Resilience Analysis Framework for Transportation" url="raft" image="raft_screenshot_07.png" />
          <Project name="Portfolio Website" url="portfolio" image="portfolio_screenshot.png" />
          <Project name="Library App" url="library" image="library_screenshot.png" />
          <Project name="Camden County App" url="camden-arcgis-api" image="arcgis_api_screenshot.png" />
          <Project name="Hillsborough Black History Tour" url="hbht" image="hbht_screenshot_01.png" />
        </div>
      </header>
    </div>
  );
}

export default Home;