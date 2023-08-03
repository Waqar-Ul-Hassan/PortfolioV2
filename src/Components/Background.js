import videoBg from "./Assets/CubeSplitBG.mp4";

const Background = () => {
  return (
    <div className="main">
      <video src={videoBg} autoPlay loop muted />
    </div>
  );
};

export default Background;
