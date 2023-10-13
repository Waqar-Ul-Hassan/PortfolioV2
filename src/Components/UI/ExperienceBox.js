import "./ExperienceBox.css";

const ExperienceBox = (props) => {
  return (
    <div className="flexBox-container2">
      <div className="jobBox">
        <a target="_blank" href={props.link}>
          <div className="right1"></div>
        </a>
        <div className="jobTitle">
          {props.title}
          <br />
          <hr className="Eline" />
          {props.location}
        </div>

        <button className="duration">{props.duration}</button>
      </div>

      <div className="description">{props.description}</div>
    </div>
  );
};

export default ExperienceBox;
