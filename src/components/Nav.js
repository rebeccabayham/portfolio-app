import '../style/App.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
        <ul className="nav-links">
          <li className="nav-item"><Link to="/">Portfolio</Link></li>
          <li className="nav-item"><Link to="/about">About</Link></li>
          <li className="nav-item"><Link to="/resume">Resume</Link></li>
          <li className="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  );
}

export default Nav;