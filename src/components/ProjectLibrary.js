import '../style/App.css';
import Nav from './Nav';

function ProjectLibrary() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <h1>Library App</h1>
        <p>I created this single-page application as a learning exercise. It demonstrates my knowledge of vanilla JavaScript. The user can add a new book to the "Currently Reading" section, which will push any other books to "Previously Read." The user can input an image URL from a site such as Goodreads to display alongside the book information.</p>
        <p><strong><a href="https://rebeccabayham.github.io/library">View the Application</a></strong></p>
        <p><strong><a href="https://github.com/rebeccabayham/library">View code on GitHub</a></strong></p>
      </header>
    </div>
  );
}

export default ProjectLibrary;