import '../style/App.css';
import Nav from './Nav';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Screenshot1 from '../images/hbht_screenshot_01.png'
import Screenshot2 from '../images/hbht_screenshot_02.png'

let styles = {
  margin: 'auto',
  width: '700px'
};

function ProjectHBHT() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Hillsborough Black History Tour</h1>
        <p>This web map displays tour stops for the <a href="https://sites.google.com/theexpeditionschool.com/hillsboroughblackhistorytour/">Hillsborough Black History Tour</a>. Students from a local school did the research and wrote the content, and I created a map to visualize the tour on their project website. The web map is hosted on ArcGIS Online.</p>
        <p><strong><a href="https://www.arcgis.com/home/webmap/viewer.html?webmap=f73b06afedf3423fa6f2f5413b4d93bd&extent=-79.1168,36.0696,-79.0904,36.083">View the Web Map</a></strong></p>
        <br />
        <div style={styles}>
		<Carousel>
			<div>
				<img src={Screenshot1} alt="HBHT Website" />
			</div>
			<div>
				<img src={Screenshot2} alt="Tour Map"/>
			</div>
		</Carousel>
	</div>
  <br /><br />

      </header>
    </div>
  );
}

export default ProjectHBHT;