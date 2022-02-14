import '../style/App.css';
import Nav from './Nav';

function ProjectPortfolio() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Portfolio</h1>
        <p>This portfolio was created using the <a href="https://reactjs.org/">React</a> JavaScript framework. The source code is available on <a href="https://github.com/rebeccabayham/portfolio-app">GitHub</a>.</p>
      </header>
    </div>
  );
}

export default ProjectPortfolio;