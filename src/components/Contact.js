import '../style/App.css';
import Nav from './Nav';

function Contact() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
      <h1>Contact</h1>
          <p>I would love to get in touch. Please contact me via <a href="https://www.linkedin.com/in/rebecca-bayham/">LinkedIn</a>.</p>
      </header>
    </div>
  );
}

export default Contact;