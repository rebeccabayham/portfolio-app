import '../style/App.css';
import Nav from './Nav';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Screenshot1 from '../images/cris_screenshot_05.png'
import Screenshot2 from '../images/cris_screenshot_09.png'
import Screenshot3 from '../images/cris_screenshot_11.png'
import Screenshot4 from '../images/rit_screenshot_15.png'

let styles = {
  margin: 'auto',
  width: '700px'
};

function ProjectCRIS() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
      <h1>Coastal Roadway Inundation Simulator (CRIS)</h1>
      <p>CRIS was developed through a partnership with the North Carolina
Department of Transportation (NCDOT) and North Carolina Emergency Management (NCEM) to visualize
and quantify the effects of coastal inundation on North Carolina’s transportation system.</p><br />
<div style={styles}>
		<Carousel>
			<div>
				<img src={Screenshot1} alt="Popup with Satellite Basemap" />
			</div>
			<div>
				<img src={Screenshot2} alt="Popup with OpenStreetMap Basemap"/>
			</div>
			<div>
				<img src={Screenshot3} alt="Statistics Sidebar"/>
			</div>
			<div>
				<img src={Screenshot4} alt="State-Level View"/>
			</div>
		</Carousel>
	</div>
<p>I generated the data in ArcGIS Pro, using Model Builder to facilitate the lengthy analysis. The application has a Leaflet frontend and a PostgreSQL / PostGIS backend. Users can select different inundation levels (1-17 feet) and view impacts on the statewide road network by NCDOT division or county. Road impacts are displayed as points, symbolized by the severity of the impact. Inundation extents are shown as transparent blue overlays. Users can filter the data, view statistics, select subsets of the data, and export the results as a PDF report, CSV file or KMZ (for use in Google Earth).</p>
<br /><br />

      </header>
    </div>
  );
}

export default ProjectCRIS;