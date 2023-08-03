import ProjectBox from "../UI/projectBox";

const Projects = () => {
  const projects = [
    {
      title: "Expense Tracker",
      description:
        "An interactive application build on the React framework (JSX) through which one can track their expenses over the years, with the date, amount, and title of each product. One can add more products to their expenses list throught a dynamic component and switch years through a drop down",
      download: "",
    },
    {
      title: "Calculator App",
      description:
        "A GUI Calculator built on Java-Script, html, and CSS which can be used to preform basic mathematic opperations ",
      download: "",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A GUI and text-base hybrid Tic Tac Toe game build with Java which can be played by 2 players on the same device taking turns",
      download: "/TicTacToe.zip",
    },
  ];

  return (
    <div>
      <h1 className="title">
        Projects <hr />
      </h1>
      <ProjectBox
        title={projects[0].title}
        description={projects[0].description}
        download={projects[0].download}
      />
      <ProjectBox
        title={projects[1].title}
        description={projects[1].description}
        download={projects[1].download}
      />
      <ProjectBox
        title={projects[2].title}
        description={projects[2].description}
        download={projects[2].download}
      />
    </div>
  );
};

export default Projects;