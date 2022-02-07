import '../style/Project.css';
import { Link } from "react-router-dom";


function Project(props) {
  const projectUrl = "/projects/" + props.url
  return (
    <Link to={projectUrl}>
    <div className="Project">
      <h2>{props.name}</h2>
      <p>{props.description}</p>
    </div>
    </Link>
  );
}

export default Project;