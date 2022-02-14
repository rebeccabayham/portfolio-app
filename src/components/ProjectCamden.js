import '../style/App.css';
import Nav from './Nav';

function ProjectCamden() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Camden County, NC - ArcGIS API for JavaScript</h1>
        <p>This web map displays features for Camden County, NC. It demonstrates my knowledge of <a href="https://developers.arcgis.com/javascript/latest/">ArcGIS API for JavaScript.</a> Users can zoom in/out, toggle layers, change the basemap, and click on certain layers for more information.</p>
        <p><strong><a href="https://rebeccabayham.com/arcgis-api/">View the Application</a></strong></p>
      </header>
    </div>
  );
}

export default ProjectCamden;