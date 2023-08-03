import "./ExperienceBox.css";

const ExperienceBox = (props) => {
  return (
    <div className="flexBox-container">
      <div className="jobTitle">
        <a target="_blank" href={props.link}>
          <div className="right"></div>
        </a>
        {props.title}
        <br />
        {props.location}
        <button className="duration">{props.duration}</button>
      </div>

      <div className="description">{props.description}</div>
    </div>
  );
};

export default ExperienceBox;
