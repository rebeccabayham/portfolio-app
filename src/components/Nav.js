import '../style/App.css';
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div className="Nav">
        <ul class="nav-links">
          <li class="nav-item"><Link to="/">Home</Link></li>
          <li class="nav-item"><Link to="/about">About</Link></li>
          <li class="nav-item"><Link to="/resume">Resume</Link></li>
          <li class="nav-item"><Link to="/contact">Contact</Link></li>
        </ul>
    </div>
  );
}

export default Nav;