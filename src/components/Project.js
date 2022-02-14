import '../style/Project.css';
import { Link } from "react-router-dom";

function Project(props) {
  const projectUrl = "/projects/" + props.url
  let bgImage = require("../images/" + props.image);
  return (
    <Link to={projectUrl}>
    <div className="Project" id={props.slug}>
      <img src={bgImage} alt={props.description} className="bg-image" />
      <h3>{props.name}</h3>
    </div>
    </Link>
  );
}

export default Project;