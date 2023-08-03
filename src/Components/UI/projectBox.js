import "./projectBox.css";

const ProjectBox = (props) => {
  return (
    <div className="flexBox-container">
      <div className="project">
        {props.title}
        <a href={props.download}>
          <div className="right"></div>
        </a>
      </div>
      <div className="description">{props.description}</div>
    </div>
  );
};

export default ProjectBox;
