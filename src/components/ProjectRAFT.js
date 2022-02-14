import '../style/App.css';
import Nav from './Nav';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Screenshot1 from '../images/raft_screenshot_07.png'
import Screenshot2 from '../images/raft_screenshot_06.png'
import Screenshot3 from '../images/raft_screenshot_05.png'
import Screenshot4 from '../images/raft_screenshot_04.png'
import Screenshot5 from '../images/raft_screenshot_01.png'

let styles = {
  margin: 'auto',
  width: '700px'
};



function ProjectRAFT() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Resilience Analysis Framework for Transportation (RAFT)</h1>
        <p>NCEM and NCDOT partnered to build the Resilience Analysis Framework for Transportation (RAFT) platform, a website housing several web applications that visualize and quantify how flood hazards impact the statewide road network. </p>
		<p><strong><a href="https://www.ncdot-raft.info/">Visit the RAFT Site</a></strong></p>
		<br />
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
			<div>
				<img src={Screenshot5} alt="State-Level View"/>
			</div>
		</Carousel>
	</div>
<p>I designed and built the entire site. It uses a HTML/CSS template from HTML5 Up that I customized. Public users can view descriptions of the available applications. However, users must have permission to access these applications. I built the PHP authentication and user management system, which is administered using a control panel.</p>
      <br /><br />
	  </header>
    </div>
  );
}

export default ProjectRAFT;