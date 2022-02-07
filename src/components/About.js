import '../style/App.css';
import Nav from './Nav';

function About() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
          <h1>About</h1>
          <p>Rebecca Bayham is a GIS Developer based in Research Triangle, NC.</p>
          <p><a href="https://www.linkedin.com/in/rebecca-bayham/">LinkedIn</a></p>
      </header>
    </div>
  );
}

export default About;