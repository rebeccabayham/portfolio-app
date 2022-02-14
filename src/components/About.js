import '../style/App.css';
import Nav from './Nav';

function About() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <div className="headshot"></div>
        <h1>About Rebecca</h1>
        <p>I am a GIS Developer based in Research Triangle, NC. I am a certified GIS Professional (GISP). I have been working in the GIS field since 2012.</p>
        <p><strong><a href="https://www.linkedin.com/in/rebecca-bayham/">Visit my LinkedIn</a></strong></p>
      </header>
    </div>
  );
}

export default About;